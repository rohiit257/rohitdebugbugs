"use client";

import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { LinkPreview } from "./ui/link-preview";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Send Your Mail",
    "yourmail@xxxx.com",
    "Send Message",
    "I want to work with you"
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    (<div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2
        className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Connect With Me! 
        <br />
        <br />
        Connect With Me Via <LinkPreview
        className="bg-blue-500 rounded-md m-2 p-2"
         url="https://www.linkedin.com/in/rohit-shahi-152661253/">
            LinkedIn
            </LinkPreview> or <LinkPreview
            className="bg-green-500 rounded-md m-2 p-2"
         url="https://github.com/rohiit257">
            Github
            </LinkPreview> or <LinkPreview
            className="bg-slate-200  rounded-md m-2 p-2"
            imageSrc="/public/X.jpg"
         url="https://x.com/rohitdebugbugs">
            <span className="text-black">X</span>
            </LinkPreview>
      </h2>
      
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
    </div>)
  );
}
