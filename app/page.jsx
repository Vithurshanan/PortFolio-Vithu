import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg font-medium text-accent">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br /> <span className="text-accent">Vithurshanan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in creating seamless, cutting-edge digital experiences,
              leveraging my expertise in a wide range of programming languages and advanced technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button className="uppercase flex items-center gap-2" variant="outline" size="lg">
                <FiDownload className="mr-2 text-xl" />
                <Link href="https://drive.google.com/file/d/1u0A_l76urEiDy5vQLnUobOWvKCLMwnck/view?usp=sharing">
                  View CV
                </Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* image placeholder */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>
      <Stats />
    </section>
  );
}
