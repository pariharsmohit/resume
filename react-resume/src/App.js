import React from 'react';
import './App.scss';
import resume from './assets/resume';
import Header from './components/header/header.component';
import Objective from './components/objective/objective.component';
import Summary from './components/summary/summary.component';
import Skills from './components/skills/skills.component';
import Projects from './components/projects/projects.component';
import Experience from './components/experience/experience.component';
import PersonalProjects from './components/personal-project/personal-project.component';
import Education from './components/education/education.component';

function App() {
  return (
    <section className="App" id="content">
      <Header resume={resume} />
      <Objective objective={resume.objective} />
      <Summary summary={resume.executiveSummary} />
      <Skills skills={resume.skills}/>
      <Projects projects={resume.projects} />
      <Experience experience={resume.experience} />
      <PersonalProjects personalProjects={resume.personalProjects} />
      <Education education={resume.education} />
    </section>
  );
}

export default App;
