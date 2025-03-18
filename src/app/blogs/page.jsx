'use client';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavbarDemo } from '../components/Navbar';
import { CardDemo } from '../components/CardDemo';
import { BackgroundBoxesDemo } from '../components/Boxes';

// Fetch publication details
async function fetchPublication() {
  const query = `
    query publication {
      publication(host: "rohitdebugbugs.hashnode.dev") {
        isTeam
        title
        about {
          markdown
        }
        posts(first: 3) {
          edges {
            node {
              title
              brief
              url
              coverImage {
                url
                attribution
                photographer
              }
              readTimeInMinutes
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data.publication;
}

// Fetch user profile picture
async function fetchUserProfile() {
  const query = `
    query getUser {
      user(username: "rohitdebugbugs") {
        username
        profilePicture
      }
    }
  `;

  const response = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data.user;
}

export default function PublicationPage() {
  const [publication, setPublication] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const pubData = await fetchPublication();
        setPublication(pubData);
        
        const userData = await fetchUserProfile();
        setUserProfile(userData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <NavbarDemo />
        <BackgroundBoxesDemo />
        <div className="container mx-auto px-4 py-8 mt-20">
          {/* Heading Section */}
          <h1 className="text-4xl font-bold text-center mb-8">
            <Skeleton width={300} height={40} />
          </h1>
          
          {/* Blog Cards Section */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-full max-w-xs">
                <div className="relative block group w-full cursor-pointer">
                  <div className="relative w-full h-96">
                    <Skeleton height={384} />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-60 rounded-md shadow-xl transition duration-300 group-hover:bg-opacity-70">
                    <div className="flex items-center space-x-4 z-10">
                      <Skeleton circle height={40} width={40} />
                      <div className="flex flex-col">
                        <Skeleton width={100} height={20} />
                        <Skeleton width={60} height={15} />
                      </div>
                    </div>
                    <div>
                      <Skeleton width={200} height={24} />
                      <Skeleton width={150} height={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (!publication || !userProfile) {
    return <div>No data found</div>;
  }

  return (
    <>
      <NavbarDemo />
      <BackgroundBoxesDemo />
      <div className="container mx-auto px-4 py-8 mt-20">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-center mb-8">
          All of My Technical Knowledge in One Place
        </h1>
        
        {/* Blog Cards Section */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {publication.posts.edges.map((post, index) => (
            <div key={index} className="w-full max-w-xs">
              <CardDemo
                avatarSrc={userProfile.profilePicture}
                authorName={userProfile.username} // Dynamic author name
                readTime={`${post.node.readTimeInMinutes} min read`} // Dynamic read time
                title={post.node.title}
                description={post.node.brief}
                backgroundImageSrc={post.node.coverImage?.url || '/fallback-image-url'} // Ensure fallback URL is correct
                blogUrl={post.node.url} // Pass the blog URL to CardDemo
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
