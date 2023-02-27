import { AllContent } from "../assets/interfaces";

const commonSkills = [
{
    key: 1,
    name:"Typescript",
    logo:"https://skillicons.dev/icons?i=typescript"
},
{
    key: 2,
    name:"React",
    logo:"https://skillicons.dev/icons?i=react"
},
{
    key: 3,
    name:"Node.JS",
    logo:"https://skillicons.dev/icons?i=nodejs"
},
{
    key: 4,
    name:"CSS3",
    logo:"https://skillicons.dev/icons?i=css"
},
{
    key: 5,
    name:"HTML",
    logo:"https://skillicons.dev/icons?i=html"
},
{
    key: 6,
    name:"MySQL",
    logo:"https://skillicons.dev/icons?i=mysql"
},
{
    key: 7,
    name:"Docker",
    logo:"https://skillicons.dev/icons?i=docker"
},
{
    key: 8,
    name:"Figma",
    logo:"https://skillicons.dev/icons?i=figma"
},
{
    key: 9,
    name:"GitHub",
    logo:"https://skillicons.dev/icons?i=github"
},
{
    key: 10,
    name:"Vite",
    logo:"https://skillicons.dev/icons?i=vite"
},
{
    key:11,
    name:"Webpack",
    logo:"https://skillicons.dev/icons?i=webpack"
}
]

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
            skills: commonSkills
        },
        ProjectSection:{
            title: "Projects",
            project:[
                {
                    key: 1,
                    title: "Project 1",
                    thumbnail: "https://source.unsplash.com/700x400/?telephone",
                    description:"I made this really cool project about xyz. this particular project has a lot of text. I am adding some more text to make it overflow and check that the size remains same ",
                    skills:"TypeScript, React"
                },
                {
                    key: 2,
                    title: "Project 2",
                    thumbnail: "https://source.unsplash.com/700x400/?programming",
                    description:"I made this really cool project about xyz. ",
                    skills:"TypeScript, React"
                },
                {
                    key: 3,
                    title: "Project 3",
                    thumbnail: "https://source.unsplash.com/700x400/?website",
                    description:"I made this really cool project about xyz. ",
                    skills:"TypeScript, React"
                },
                {
                    key: 4,
                    title: "Project 4",
                    thumbnail: "https://source.unsplash.com/700x400/?elephant",
                    description:"I made this really cool project about xyz. this particular project has a lot of text. I am adding some more text to make it overflow and check that the size remains same ",
                    skills:"TypeScript, React, HTML, CSS3, Flex-Box, Grid"
                }
            ],
            description:"Drop me a mail and we can set up some time to chat!",
            email: "mail@dharod.de"
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
            title:"Erschaffer von Webseites & Zerstörer von Bugs",
            description:"Moin moin, ich bin ausgebildeter Robotik-Ingenieur und beruflich (und leidenschaftlich!) Front-End Entwickler. Als in Indien geborener und in Deutschland gemachter Entwickler strebe ich danach, das Beste aus beiden Welten zu vereinen - und es zu nutzen, um interaktive, kreative und fachgerechte digitale Erlebnisse zu schaffen!"
        },
        SkillSection:{
            title:"Werkzeuge und Technologie",
            description: "Also write a bit about how I took initiative and learnt these skills on my own, and managed Projects on my own. Show How i am driven to learn new things.",
            skills:commonSkills
        },
        ProjectSection:{
            title: "Projects",
            project:[
                {
                    key: 1,
                    title: "Project 1 (DE)",
                    thumbnail: "https://source.unsplash.com/700x400/?telephone",
                    description:"I made this really cool project about xyz. ",
                    skills:"TypeScript, React"
                },
                {
                    key: 2,
                    title: "Project 2 (DE)",
                    thumbnail: "https://source.unsplash.com/700x400/?programming",
                    description:"I made this really cool project about xyz. ",
                    skills:"TypeScript, React"
                },
                {
                    key: 3,
                    title: "Project 3 (DE)",
                    thumbnail: "https://source.unsplash.com/700x400/?website",
                    description:"I made this really cool project about xyz. ",
                    skills:"TypeScript, React"
                },
                {
                    key: 4,
                    title: "Project 4",
                    thumbnail: "https://source.unsplash.com/700x400/?elephant",
                    description:"I made this really cool project about xyz. this particular project has a lot of text. I am adding some more text to make it overflow and check that the size remains same ",
                    skills:"TypeScript, React, HTML, CSS3, Flex-Box, Grid"
                }
            ],
        description:"Drop me a mail and we can set up some time to chat!",
        email: "mail@dharod.de"
        },
        FooterSection:{
            cvButtonText:"kostenlose Kopie meines Lebenslaufs!",
            description:"Von mir eigenhändig gestaltet und kodiert (mit einem Hauch von Unterstützung durch meine Freunde)",
            inspiration:"Heavily inspired from gumroad.com"
        }
    }
}