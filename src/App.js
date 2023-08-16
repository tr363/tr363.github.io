// // import CustomCursor from './Components/CustomCursor/CustomCursor';
// import React from 'react';
// import './App.css';
// import Scrollspy from 'react-scrollspy';
// // import {About, Education, Skills, Projects, Experience, Contact} from './Components';
// import About from './Components/About/About';
// import Skills from './Components/Skills/Skills';
// import Projects from './Components/Projects/Projects';
// import Experience from './Components/Experience/Experience';
// import Education from './Components/Education/Education';
// import Contact from './Components/Contact/Contact';
// import Navbar from './Navbar/Navbar';


// function App() {
//   return (
//     <div className="App">
//       {/* <CustomCursor /> */}
//       <Navbar />
//     <div className='container'>
//       <div className='row s12 m6'>


        
//       <div className='left-section'>
//         <div className='col s12 m6'>

//         <p style={{ color: '#59E2C5' }}>Hi, I'm</p>
//         <h1 style={{ color: '#CCD6F6' }}>Tarun Reddy</h1>
//         <p>Graduate Student at UC Denver</p>

//         <Scrollspy items = {['About', 'Skills', 'Education', 'Projects', 'Experience', 'Contact']} currentClassName='is-current'>
//           <li><a href = "#About">About</a></li>
//           <li><a href = "#Skills">Skills</a></li>
//           <li><a href = "#Education">Education</a></li>
//           <li><a href = "#Projects">Projects</a></li>
//           <li><a href = "#Experience">Experience</a></li>
//           <li><a href = "#Contact">Contact</a></li>
          
//         </Scrollspy>
//         </div>
//       </div>
//       <div className='right-section'>
//         <div className='col s12 m6'>
//         <section id = 'About'>
//         <About />
//         </section>

//         <section id = 'Skills'>
//         <Skills />
//         </section>

//         <section id = 'Education'>
//         <Education />
//         </section>

//         <section id = 'Projects'>
//         <Projects />
//         </section>

//         <section id = 'Experience'>
//         <Experience />
//         </section>

//         <section id = 'Contact'>
//         <Contact /> 
//         </section>
//         </div>
//       </div>
//       </div>
//       </div>
//       </div>
//   );
// }

// export default App;









import React, { useState, useEffect } from 'react';
import './App.css';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';
import Navbar from './Navbar/Navbar';
import CustomCursor from './Components/CustomCursor/CustomCursor'

function App() {
  const [activeItem, setActiveItem] = useState('About');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['About', 'Skills', 'Education', 'Projects', 'Experience', 'Contact'];
      let currentSection = 'About';

       // Special condition for the "About" section
      if (window.scrollY < window.innerHeight / 4) {
        setActiveItem('About');
        return;
  }

      for (const section of sections) {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
          break;
        }
      }

      setActiveItem(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setActiveItem(sectionId);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col s12 m4 l4 ">
          <div className='pinned'>
            <p className="flow-text">Hi, I'm</p>
            <h3 className="header">Tarun Reddy</h3>
            <p>Graduate Student at UC Denver</p>

            <ul className="collection">
              {['About', 'Skills', 'Education', 'Projects', 'Experience', 'Contact'].map(item => (
                <li 
                  key={item} 
                  className={`collection-item ${activeItem === item ? 'active' : ''}`} 
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </div>

          <div className="col s12 m8 l8 right-section">
            <section id="About" className="custom-card">
            <About />
            </section>

            <section id="Skills" className="custom-card">
              <Skills />
            </section>

            <section id="Education">
              <Education />
            </section>

            <section id="Projects">
              <Projects />
            </section>

            <section id="Experience">
              <Experience />
            </section>

            <section id="Contact" className="custom-card">
              <Contact />
            </section>
          </div>
        </div>
      </div>
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red" onClick={scrollToTop}>
          <i className="large material-icons">arrow_upward</i>
        </a>
      </div>
    </div>
  );
}

export default App;











