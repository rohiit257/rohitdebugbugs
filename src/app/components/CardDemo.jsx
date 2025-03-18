// components/CardDemo.js
import Image from 'next/image';
import Link from 'next/link';

export function CardDemo({
  avatarSrc,
  authorName,
  readTime,
  title,
  description,
  backgroundImageSrc,
  blogUrl, // New prop for the blog URL
}) {
  return (
    <Link href={blogUrl} passHref>
      <div className="relative block group w-full cursor-pointer">
        <div className="relative w-full h-96">
          <Image
            src={backgroundImageSrc}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md transition duration-300 group-hover:opacity-60"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-60 rounded-md shadow-xl transition duration-300 group-hover:bg-opacity-70">
          <div className="flex items-center space-x-4 z-10">
            <Image
              height="100"
              width="100"
              alt="Avatar"
              src={avatarSrc}
              className="h-10 w-10 rounded-full border-2 object-cover"
            />
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50">{authorName}</p>
              <p className="text-sm text-gray-400">{readTime}</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl text-gray-50">{title}</h1>
            <p className="font-normal text-sm text-gray-50 my-4">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
