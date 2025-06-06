import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Project } from '../components/Project'


export function AllProjects() {

    const projects = [
          {
            imageSrc: "/assets/portfolio.png",
             title: "Personal Portfolio",
            technologies: ["React", "CSS Modules","Framer Motion", "Tailwind"],
            description: "This portfolio website showcases personal projects, skills, and professional information with a modern and interactive user interface.",

            viewLink:"https://github.com/animenzo/AuctionPlatform",

            githubLink: "https://github.com/animenzo/AuctionPlatform"
        },
        {
            imageSrc: "/assets/moviefy.png",
             title: "Movie-fy",
            technologies: ["React", "Tailwind", "Framer Motion", "TMDB API"],
            description: "The app allows users to browse trending titles, search for specific movies, and view detailed info in a modern UI",

            viewLink: "https://moviefy-a-movie-webapp-in-react.vercel.app/",

            githubLink: "https://github.com/animenzo/moviefy-a-movie-webapp-in-react"
        },

           {
            imageSrc: "/assets/auction.png",
             title: "BidKar",
            technologies: ["React", "CSS Modules", "Monogodb", "Nodejs", "Expressjs"],
            description: "Designed secure JWT-based user authentication and RESTful API routes for auctions and users.Created responsive frontend with reusable components (AuctionList, AuctionItem, Navbar, etc.)",

            viewLink:"https://github.com/animenzo/AuctionPlatform",

            githubLink: "https://github.com/animenzo/AuctionPlatform"
        },
             {
            imageSrc: "/assets/sportsweb.png",
             title: "Sports Theme Website",
            technologies: ["React", "CSS Modules", "Monogodb", "Nodejs", "Expressjs"],
            description: "A dynamic cricket-themed sports website built with React.js. This project features key components including Home, About Us, Players, Tournament Teams, and Contact. The site provides an engaging platform to explore player details, team information, and more.",

            viewLink:"https://sports-website1-alpha.vercel.app/",

            githubLink: "https://github.com/animenzo/SportsWebsite1"
        },

        {
            imageSrc: "/assets/clgweb.png", title: "IET College Website",
            technologies: ['HTML', 'CSS', 'JavaScript'],
            description: "Developed a responsive multipage college website in 3rd Semester showcasing features like event information,faculty details, and course offerings, ensuring an intuitive and user-friendly interface.",

            viewLink: "https://animenzo.github.io/collegeproject/",

            githubLink: "https://github.com/animenzo/collegeproject"
        },

         {
            imageSrc: "/assets/clothing.png", 
            title: "Clothing Ecommerce Store",
            technologies: ['React', 'ExpressJs',"NodeJs", 'MongoDb'],
            description: "A simple clothing ecommerce store web application built with React.js and Express.js. This project features key components including Home, Products, Cart, and Checkout. The site provides an engaging platform to explore products, add them to the cart, and proceed to checkout.",

       

            githubLink: "https://github.com/animenzo/smallclothstoreusingejsmongo"
        },

           {
            imageSrc: "/assets/notesapp.png",
             title: "Notes App",
            technologies: ['React', 'ExpressJs',"NodeJs", 'MongoDb'],
            description: "A simple notes app web application built with React.js and Express.js. This project features key components including Home, Add Note, and View Notes. The site provides an engaging platform to create, view, and manage notes.",

       

            githubLink: "https://github.com/animenzo/bahikhata-webapp-using-nodejs"
        },

         {
            imageSrc: "/assets/platformGame.png",
             title: "Platform game",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "A simple platform game built with HTML, CSS, and JavaScript. This project features a character that can jump and move around the screen, with obstacles to avoid.",

       viewLink: "https://animenzo.github.io/platformgame/",

            githubLink: "https://github.com/animenzo/Platformgame?tab=readme-ov-file"
        },


    ]


    return (
        <>
            <Navbar />
            <div className='p-10 mx-auto'>
                <h1 className='mt-5 text-2xl font-semibold'><span className='text-green-500'>{`<>`}</span> Crafted with Code: My Complete Project Gallery. <span className='text-green-500'>{`</ >`}</span> </h1>
                <div className='py-10 flex gap-4  flex-wrap'>

                    {
                        projects.map((project) => (
                            <Project key={project} imageSrc={project.imageSrc} title={project.title} technologies={project.technologies} description={project.description}
                                viewLink={project.viewLink}
                                githubLink={project.githubLink}
                            />
                        ))
                    }


                </div>
            </div>
            <Footer />
        </>
    )
}
