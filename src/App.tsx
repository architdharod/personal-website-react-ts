import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import MainSection from './components/mainsection'
import SkillSection from './components/skillsection'
import ProjectSection from './components/projectsection'

function App(){

/*States will come here*/

  return (
    <div className="brutal-l">
      <Navbar />
      <MainSection />
      <SkillSection />
      <ProjectSection />
      <Footer />
    </div>
    )
}

export default App
