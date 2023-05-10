import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import MainSection from './components/mainsection';
import SkillSection from './components/skillsection';
import ProjectSection from './components/projectsection';
import { AllContent, AppSettings, ContentStructure } from './assets/interfaces';
import { websiteContent } from './configs/websiteContents';

function App() {
  const [appSetting, setAppSetting] = useState<AppSettings>({
    style: 'brutalism',
    lightMode: true,
    langImgSrc: 'EN',
  });

  const [currentTextLanguage, setTextLanguage] = useState<ContentStructure>({
    ...websiteContent.DE,
  });

  const handleClickOnLang = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const id = event.currentTarget.id;
    event.stopPropagation();

    if (id == 'EN') {
      event.currentTarget.id = 'DE';
      setTextLanguage((oldlang) => {
        return { ...websiteContent.EN };
      });
      setAppSetting((oldSetting) => {
        return { ...oldSetting, langImgSrc: 'DE' };
      });
    } else if (id == 'DE') {
      event.currentTarget.id = 'EN';
      setTextLanguage((oldlang) => {
        return { ...websiteContent.DE };
      });
      setAppSetting((oldSetting) => {
        return { ...oldSetting, langImgSrc: 'EN' };
      });
    }
  };

  const handleClickOnTheme = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const id = event.currentTarget.id;
    event.stopPropagation();

    if (id == 'mode') {
      setAppSetting((oldSetting) => {
        return { ...oldSetting, lightMode: !oldSetting.lightMode };
      });
    } else if (id == 'style') {
      setAppSetting((oldSetting) => {
        const newStyle: AppSettings =
          oldSetting.style == 'brutalism'
            ? { ...oldSetting, style: 'neumorphism' }
            : { ...oldSetting, style: 'brutalism' };

        return { ...newStyle };
      });
    }
  };

  return (
    <div
      className={`${appSetting.style} ${appSetting.style}-${
        appSetting.lightMode ? 'light' : 'dark'
      }`}
    >
      <Navbar
        {...currentTextLanguage.Navbar}
        appSetting={appSetting}
        handleClickOnLang={handleClickOnLang}
        handleClickOnTheme={handleClickOnTheme}
      />
      <MainSection {...currentTextLanguage.MainSection} />
      <SkillSection {...currentTextLanguage.SkillSection} />
      <ProjectSection {...currentTextLanguage.ProjectSection} />
      <Footer
        {...currentTextLanguage.FooterSection}
        appSetting={appSetting.style}
        appLanguage={appSetting.langImgSrc}
      />
    </div>
  );
}

export default App;

//TODO: add eslint and whatnot for formatting!
