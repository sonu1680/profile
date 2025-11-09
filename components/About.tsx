import Image from "next/image";
import MailButton from "./MailButton";

import SocialIcon from "./SocialIcon";

export default function About() {
  const social = [
    {
      icon: "linkedin",
      link: "https://www.linkedin.com/in/sonu-pandit-2b4a62169",
    },
    {
      icon: "twitter",
      link: "https://x.com/sonupandit16800",
    },
    {
      icon: "github",
      link: "https://github.com/sonu1680",
    },
  ];

  return (
    <main className="rounded-md   text-gray-300 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

      <div className="relative z-10 w-full  py-8 text-start">
        <div className="flex justify-between mb-6 ">
          <div className="w-28 h-28 rounded-2xl overflow-hidden">
            <Image
              src="/myPic.png"
              alt="Chaitanya"
              width={112}
              height={112}
              className="object-cover"
            />
          </div>
          <div className="flex justify-center gap-6 mt-8">
            {social.map((data,idx) => (
              <SocialIcon title={data.icon} link={data.link} key={idx} />
            ))}
          </div>
        </div>

        <h1 className=" text-xl md:text-3xl font-bold text-white mb-2">Hi, I'm Sonu</h1>
        <p className="text-gray-400 mb-6">22, Ahmedabad | Full Stack Engineer</p>

        <p className="text-gray-400 leading-relaxed text-xs md:text-sm ">
          I'm a Full Stack Blockchain Developer crafting cutting-edge dApps and
          DeFi solutions. From writing secure smart contracts to building
          intuitive Web3 interfaces, I turn complex blockchain concepts into
          user-friendly experiences.
        </p>

        <MailButton />
      </div>
    </main>
  );
}
