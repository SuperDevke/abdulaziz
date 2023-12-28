"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import devabdul from "../public/abdul.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen ">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">abdulaziz</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href=""
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10  py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Abdul Aziz
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">Developer and Designer.</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
            Freelancer providing awesome services for programming and needs.
            Join me below and let's get cracking
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className=" relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
          <Image src={devabdul} layout="fill" objectFit="cover" />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-5 text-center">Services I Offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Since the beggining of my journey as a freelance designer and
            developer. I've done work for
            <span className="text-teal-500"> agencies</span> consultate for
            <span className="text-teal-500"> startups</span> and collaborated
            with talented people to create digital products for both business
            and customer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            I offer from a wide range of services including programing and
            software development
          </p>
        </div>
        <div className="lg:flex lg:gap-10">
          <div className="text-center shadow-lg pt-10 rounded-xl my-10">
            <Image src={design} width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-500 py-1">Photoshop</p>
            <p className="text-gray-500 py-1">Illustrator</p>
            <p className="text-gray-500 py-1">Figma</p>
            <p className="text-gray-500 py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg pt-10  rounded-xl my-10">
            <Image src={code} width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Coding Dream Project
            </h3>
            <p className="py-2">
              Talented Young coder that specialises in coding modern
              technologies to boost your usability.
            </p>
            <h4 className="py-4 text-teal-500">Technologies Used</h4>
            <p className="text-gray-500 py-1">HTML</p>
            <p className="text-gray-500 py-1">JAVASCRIPT</p>
            <p className="text-gray-500 py-1">CSS</p>
            <p className="text-gray-500 py-1">NODE JS</p>
            <p className="text-gray-500 py-1">MONGO DB</p>
          </div>
          <div className="text-center shadow-lg pt-10  rounded-xl my-10">
            <Image
              src={consulting}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
            <p className="py-2">
              Are you interested in feedback for your current project? I can
              give you tips and tricks to level it up.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1 text-center">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Since the beggining of my journey as a freelance designer and
            developer. I've done work for
            <span className="text-teal-500"> agencies</span> consultate for
            <span className="text-teal-500"> startups</span> and collaborated
            with talented people to create digital products for both business
            and customer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            I offer from a wide range of services including programing and
            software development
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-xl object-cover"
              height={"100%"}
              width={"100%"}
              layout="responsive"
              src={web1}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-xl object-cover"
              layout="responsive"
              height={"100%"}
              width={"100%"}
              src={web2}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-xl  object-cover"
              height={"100%"}
              width={"100%"}
              layout="responsive"
              src={web3}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-xl object-cover"
              layout="responsive"
              height={"100%"}
              width={"100%"}
              src={web4}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-xl object-cover"
              layout="responsive"
              height={"100%"}
              width={"100%"}
              src={web5}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="object-cover rounded-lg"
              layout="responsive"
              height={"100%"}
              width={"100%"}
              src={web6}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
