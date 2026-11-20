import { useEffect, useState } from 'react'
import { certs, layers, skills } from './content'
import './App.css'

// Each layer is cut at a slightly different angle, like sediment.
const tilts = [10, 18, 8, 16, 12, 20, 10]

function App() {
  const [apiStatus, setApiStatus] = useState('checking...')

  useEffect(() => {
    fetch('http://localhost:8000/health')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => setApiStatus(data.status))
      .catch(() => setApiStatus('unreachable'))
  }, [])

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="top">
        <div className="wrap top-row">
          <a className="mark" href="#top">
            Hammad Khaleel
          </a>
          <nav aria-label="Sections">
            <a href="#about">Background</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap">
            <h1>Hammad Khaleel</h1>
            <p className="lede">
              Network administrator turned geologist, building toward DevOps.
            </p>
            <p className="intro">
              I spent more than three years in IT operations, running Windows
              servers, Cisco networks and Azure environments. I now work as a
              geologist, and I am learning DevOps by building and deploying this
              site one step at a time. Based in St. John&rsquo;s, Newfoundland
              and Labrador.
            </p>
            <a className="button" href="#projects">
              See the project
            </a>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <h2>Background</h2>
            <p className="note">Newest layer on top, the way a rock column is read.</p>
            <ol className="column">
              {layers.map((layer, i) => (
                <li
                  key={layer.title}
                  className={layer.current ? 'layer current' : 'layer'}
                  style={{
                    '--tilt': `${tilts[i % tilts.length]}px`,
                    '--prev-tilt': `${i ? tilts[(i - 1) % tilts.length] : 0}px`,
                    '--depth': i,
                  }}
                >
                  <span className="when">{layer.when}</span>
                  <div>
                    <h3>{layer.title}</h3>
                    {layer.detail && <p>{layer.detail}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <h2>Skills</h2>
            <dl className="skills">
              {skills.map((s) => (
                <div key={s.group}>
                  <dt>{s.group}</dt>
                  <dd>{s.items}</dd>
                </div>
              ))}
            </dl>
            <h3 className="certs-title">Certifications</h3>
            <ul className="certs">
              {certs.map((c) => (
                <li key={c.name}>
                  <span>{c.name}</span>
                  {c.id && <span className="cert-id">Certificate number {c.id}</span>}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <h2>Projects</h2>
            <article className="project">
              <h3>This portfolio</h3>
              <p>
                A React and Vite frontend, a FastAPI backend, and tests on both
                sides. The status in the footer is a live call to the API. It is
                built in phases, and Docker, GitHub Actions, Azure, Terraform and
                Kubernetes come next.
              </p>
              <a className="link" href="https://github.com/hkhaleel28/portfolio">
                View the code on GitHub
              </a>
            </article>
          </div>
        </section>

        <section id="resume">
          <div className="wrap">
            <h2>Resume</h2>
            <p>An updated resume will be published here.</p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-row">
          <p>&copy; Hammad Khaleel</p>
          <p className="api" data-status={apiStatus}>
            API: {apiStatus}
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
