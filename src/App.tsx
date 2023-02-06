import React, { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import MainSection from './components/mainsection'
import SkillSection from './components/skillsection'
import ProjectSection from './components/projectsection'
import { AllContent, AppSettings, ContentStructure } from './assets/interfaces'
import { websiteContent } from './configs/websiteContents'

function App(){

  const [appSetting, setAppSetting] = useState<AppSettings>({
    style:"brutalism",
    lightMode:true
  })

  const [textLanguage, setTextLanguage] = useState<ContentStructure>(
    {...websiteContent.EN}
  )

  const handleClickOnLang = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const id = event.currentTarget.id;
    event.stopPropagation();
    if(id == "EN") {
      setTextLanguage(oldlang => {
        return {...websiteContent.EN}
      })
    } else if (id == "DE"){
      setTextLanguage(oldlang => {
        return {...websiteContent.DE}
      })
    }
  };

  const handleClickOnTheme = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const id = event.currentTarget.id;
    event.stopPropagation();

    if(id=="mode"){
      setAppSetting(oldSetting => {
        return {...oldSetting, lightMode: !oldSetting.lightMode}
      })
    }
    else if(id == "style"){
      setAppSetting(oldSetting => {
        const newStyle : AppSettings = oldSetting.style == "brutalism" ? 
        {...oldSetting, style: "neomorphism"} :
        {...oldSetting, style:"brutalism"}

        return {...newStyle}
      })
    }
  }

  return (
    <div className={`${appSetting.style} ${appSetting.style}-${appSetting.lightMode ? "light" : "dark" }`}>
      <Navbar 
        {...textLanguage.Navbar}
        handleClickOnLang={handleClickOnLang}
        handleClickOnTheme={handleClickOnTheme}
      />
      <MainSection 
        {...textLanguage.MainSection}
      />
      <SkillSection 
        {...textLanguage.SkillSection}
      />
      <ProjectSection />
      <Footer />
    </div>
    )
}

export default App
