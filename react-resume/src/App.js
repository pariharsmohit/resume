import React from 'react';
import './App.scss';
// import resume from './assets/resume';
import Header from './components/header/header.component';
import Objective from './components/objective/objective.component';
import Summary from './components/summary/summary.component';
import Skills from './components/skills/skills.component';
import Projects from './components/projects/projects.component';
import Experience from './components/experience/experience.component';
import PersonalProjects from './components/personal-project/personal-project.component';
import Education from './components/education/education.component';
import Axios from 'axios';
import { connect } from 'react-redux';
import { updateResume } from './actions';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    Axios.get('https://mspwrites.com/massets/resume.json').then((response) => {
      if(response.data.name) {
        dispatch(updateResume(response.data));
      }
    })
  }

  render() {
    const resume  = this.props.resume;
    if (!resume) {
      return (
        <section></section>
      )
    }
    return (
      <section className="App" id="content">
        {resume.name && <Header resume={resume} />}
        {resume.objective && <Objective objective={resume.objective} />}
        {resume.executiveSummary && <Summary summary={resume.executiveSummary} />}
        {resume.skills && <Skills skills={resume.skills} />}
        {resume.projects && <Projects projects={resume.projects} />}
        {resume.experience && <Experience experience={resume.experience} />}
        {resume.personalProjects && <PersonalProjects personalProjects={resume.personalProjects} />}
        {resume.education && <Education education={resume.education} />}
      </section>
    );
  }
};

const mapStateToProps = state => ({
  resume: state.resume
})

export default connect(mapStateToProps)(App);
