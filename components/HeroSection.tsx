"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Felipe !</h1>
          <p className="text-lg mt-4 mb-6 md:pr-28 md:text-xl">
            I&#39;m a{" "}
            <span className="font-semibold text-violet-400">
              Frontend Developer{" "}
            </span>
            in São Paulo, SP. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <Link
            className="text-neutral-100 font-semibold px-6 py-3 bg-violet-600 rounded shadow hover:bg-violet-700"
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>

        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profile-pic.png"
            alt=""
            width={300}
            height={300}
            className="rounded-full shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection