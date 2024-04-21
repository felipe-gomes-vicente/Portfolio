import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

import SlideUp from "./SlideUp"

const projects = [
  {
    name: "Book Wise",
    description:
    "Book Wise is an application for the user to evaluate books. There, the user can create their evaluation for the available books.",
    image: "/book-wise.gif",
    github: "https://github.com/felipe-gomes-vicente/book-wise",
    link: "https://book-wise.vercel.app/",
  },
  {
    name: "Open-source Courses",
    description: "Open-source Courses is a platform for strengthening technology content according to open-source principles. It is therefore about content created to be openly accessed by the public, by anyone who wants to see it, modify it and distribute it according to their needs.",
    image: "/banner-courses.png",
    github: "https://github.com/opensource-courses/courses",
    link: "https://opensourcecourses.com.br/",
  },
  {
    name: "Food Explorer",
    description: "Building a application that we will develop a digital menu for a restaurant, known as Food Explorer.",
    image: "/food-explorer-client.gif",
    github: "https://github.com/felipe-gomes-vicente/food-explorer",
    link: "https://food-explorer-rest.netlify.app/",
  },
  {
    name: "GitHub Blog",
    description: "An application that will use the GitHub API to fetch issues from a repository, data from your profile and display them as a blog.",
    image: "/github-blog.png",
    github: "https://github.com/felipe-gomes-vicente/github-blog",
    link: "https://github-blog-web.netlify.app/",
  },
 
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}
export default ProjectsSection