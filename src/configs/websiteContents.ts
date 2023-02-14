import { AllContent } from "../assets/interfaces";

export const websiteContent : AllContent = {
    EN:{
        Navbar:{
            name:"Archit Dharod"
        },
        MainSection:{
            title:"Creator of Websites & Destroyer of Bugs",
            description: "Hello, I am a Robotics Engineer by education and Front-End Developer by profession (and passion!) As a developer born in India & made in Germany, I strive to harness the best of both worlds - and channel it to create interactive, creative and Fachgerecht digital experiences! "
        },
        SkillSection:{
            title:"Tools and Technology",
            description: "Also write a bit about how I took initiative and learnt these skills on my own, and managed Projects on my own. Show How i am driven to learn new things.",
            skills:[
                {
                    name:"Typescript",
                    logo:"./vite.svg"
                },
                {
                    name:"React",
                    logo:"./vite.svg"
                },
                {
                    name:"HTML",
                    logo:"./vite.svg"
                }
            ]
        },
        ProjectSection:{
            title: "Projects",
            project:[
                {
                    title: "Project 1",
                    thumbnail: "link to thumbnail",
                    description:"I made this really cool project about xyz. ",
                    skills:"TypeScript, React"
                }
            ],
            description:"Drop me a mail and we can set up some time to chat!",
            email: "hire-me@dharod.de"
        },
        FooterSection:{
            cvButtonText:"Get a free copy of my CV!",
            description:"Designed and coded by me (with a little help from my friends)",
            inspiration:"Heavily inspired from gumroad.com"
        }
    },
    DE:{
        Navbar:{
            name:"Archit Dharod"
        },
        MainSection:{
            title:"Erscaffer von Webseites & Zerstörer von Bugs",
            description:"Moin moin, ich bin nach meiner Ausbildung ein Robotikingenieur und beruflich (und aus Leidenschaft!) ein Front-End Entwickler. Als in Indien geborener und in Deutschland gemachter Entwickler strebe ich danach, das Beste aus beiden Welten zu nutzen und es zur Schaffung interaktiver, kreativer und fachgerechter digitaler Erlebnisse zu nutzen!"
        },
        SkillSection:{
            title:"Werkzeuge und Technologie",
            description: "Also write a bit about how I took initiative and learnt these skills on my own, and managed Projects on my own. Show How i am driven to learn new things.",
            skills:[
                {
                    name:"Typescript",
                    logo:"./vite.svg"
                },
                {
                    name:"React",
                    logo:"./vite.svg"
                },
                {
                    name:"HTML",
                    logo:"./vite.svg"
                }
            ]
        },
        ProjectSection:{
            title: "Projects",
            project:[
                {
                    title: "Project 1",
                    thumbnail: "link to thumbnail",
                    description:"I made this really cool project about xyz. ",
                    skills:"TypeScript, React"
                }
            ],
        description:"Drop me a mail and we can set up some time to chat!",
        email: "hire-me@dharod.de"
        },
        FooterSection:{
            cvButtonText:"kostenlose Kopie meines Lebenslaufs!",
            description:"Von mir eigenhändig gestaltet und kodiert (mit einem Hauch von Unterstützung durch meine Freunde)",
            inspiration:"Heavily inspired from gumroad.com"
        }
    }
}