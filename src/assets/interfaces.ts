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
            name:string,
            logo:string
        }[]
    }
}

export interface AllContent {
    EN: ContentStructure,
    DE: ContentStructure,
}

export interface AppSettings {
    style: "brutalism" | "neomorphism",
    lightMode: Boolean
  }

//TODO: add a default symbol for the skills section