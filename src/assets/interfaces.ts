export interface ContentStructure {
    Navbar: {
        name:string
    },
    MainSection: {
        title: string,
        description: string
    },
    SkillSection:{
        title:string,
        description:string,
        skills:{
            key:number,
            name:string,
            logo:string
        }[]
    },
    ProjectSection: {
        title:string,
        project: {
            key: number,
            title:string,
            thumbnail: string,
            source:string,
            description:string,
            skills: string
        }[],
        description: string,
        email: string
    },
    FooterSection: {
        cvButtonText:string,
        description:string,
        inspiration: string
    }
}

export interface AllContent {
    EN: ContentStructure,
    DE: ContentStructure,
}

export interface AppSettings {
    style: "brutalism" | "neumorphism",
    lightMode: Boolean,
    langImgSrc: "DE" | "EN"
  }

//TODO: add a default symbol for the skills section