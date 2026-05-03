import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import lights_logo from './assets/lights_logo.png'
import mark_logo from './assets/mark_logo.png'
import github_logo from './assets/github.png'
import linkedin_logo from './assets/InBug-White.png'
import aiInterviewCoachLogo from './assets/meeting.svg'
import aiReseacherLogo from './assets/ai_researcher_lettermark_v4.svg'
import down from './assets/down.svg'
import up from './assets/up.svg'
import './App.css'

function App() {
  const [projectsOpen, setProjectsOpen] = useState(false)

  return (
    <>
      <div>
        <h1>Welcome to Mark's pi homepage</h1>
        <h3>Where would you like to go?</h3>
        <div className='container'>
          <div>
            <img className='lights_logo' src={mark_logo}/>
          </div>
          <div>
            <p>Mark Lights' Portfolio?</p>
            <a href="https://markjarredlights.com" target="_self">
              Yes? Then Click Me!
            </a>
          </div>
        </div>
        <div className='container'>
          <div>
            <img className='lights_logo' src={lights_logo}/>
          </div>
          <div>
            <p>Lights Finance application?</p>
            <a href="https://marks-pi.com/finance" target="_self">
              Yes? Then Click Me!
            </a>
          </div>
        </div>
        <div className='container'>
          <div>
            <img className='lights_logo' src={github_logo}/>
          </div>
          <div>
            <p>Mark Lights' Github?</p>
            <a href="https://github.com/DevMarkLights" target="_self">
              Yes? Then Click Me!
            </a>
          </div>
        </div>
        <div className='container'>
          <div>
            <img className='linkedin_logo' src={linkedin_logo}/>
          </div>
          <div>
            <p>Mark Lights' LinkedIn?</p>
            <a href="https://linkedin.com/in/mark-lights-1141811bb" target="_self">
              Yes? Then Click Me!
            </a>
          </div>
        </div>
        <div className='container' onClick={()=>setProjectsOpen(!projectsOpen)}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              <span>Projects</span>
              {projectsOpen ?
                <img src={up} style={{width:'50px'}}/>
              :
                <img src={down} style={{width:'50px'}}/>
              }
              
            </div>
          </div>
        {projectsOpen &&
          <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around', width:'792px'}}>
            <div className='container' style={{width:'200px'}}>
              <div>
                <img className='lights_logo' src={aiInterviewCoachLogo}/>
              </div>
              <div>
                <p>AI Interview Coach?</p>
                <a href="https://marks-pi.com/ai-interview-coach/" target="_self">
                  Yes? Then Click Me!
                </a>
              </div>
            </div>
            <div className='container' style={{width:'200px'}}>
              <div>
                <img className='lights_logo' src={aiReseacherLogo}/>
              </div>
              <div>
                <p>AI Researcher?</p>
                <a href="https://marks-pi.com/ai-researcher/" target="_self">
                  Yes? Then Click Me!
                </a>
              </div>
            </div>
            <div className='container' style={{width:'200px'}}>
              <div>
                <p>AI Code Reviewer?</p>
                <a href="https://marks-pi.com/ai-code-reviewer/" target="_self">
                  Yes? Then Click Me!
                </a>
              </div>
            </div>
            <div className='container' style={{width:'200px'}}>
              <div>
                <p>Rag Pipeline?</p>
                <a href="https://marks-pi.com/rag/" target="_self">
                  Yes? Then Click Me!
                </a>
              </div>
            </div>
            <div className='container' style={{width:'200px'}}>
              <div>
                <p>Compress Pdf?</p>
                <a href="https://marks-pi.com/compressPDFApp/" target="_self">
                  Yes? Then Click Me!
                </a>
              </div>
            </div>
          </div>
        }

      </div>
    </>
  )
}

export default App
