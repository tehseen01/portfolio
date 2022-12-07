import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons'
import '../SASS/work.scss'
import { img1, img2, img3, img4, img5, img6 } from './import'

const Work = () => {
  return (
    <main className="work">
      <h1>My Work</h1>
      <p>Check out some of my projects...</p>
      <article>
        <div className="project-container">
          {list.map((project) => {
            return (
              <div key={project.id} className="project">
                <img src={project.img} alt="" />
                <div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="github-link"
                  >
                    Code <FontAwesomeIcon icon={faCode} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="live-link"
                  >
                    Preview
                    <FontAwesomeIcon icon={faEye} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </article>
    </main>
  )
}

export default Work

const list = [
  {
    id: 1,
    img: img2,
    githubUrl: 'https://github.com/tehseen01/News-homepage.git',
    liveUrl: 'https://tehseen-news-homepage.netlify.app/',
  },
  {
    id: 2,
    img: img1,
    githubUrl: 'https://github.com/tehseen01/Sunnyside-agency-landing-page',
    liveUrl: 'https://tehseen-sunnyside-agency-landing-page.netlify.app/',
  },
  {
    id: 3,
    img: img3,
    githubUrl: 'https://github.com/tehseen01/Loopstudios-landing-page',
    liveUrl: 'https://tehseen01-loopstudios-landing-page.netlify.app/',
  },
  {
    id: 4,
    img: img4,
    githubUrl:
      'https://github.com/tehseen01/Intro-section-with-dropdown-navigation',
    liveUrl: 'https://dropdown-tehseen01.netlify.app/',
  },
  {
    id: 5,
    img: img5,
    githubUrl:
      'https://github.com/codebyishan/Interactive-card-details-form.git',
    liveUrl: 'https://codebyishan-card-details-form.netlify.app/',
  },
  {
    id: 6,
    img: img6,
    githubUrl:
      'https://github.com/codebyishan/Coding-Bootcamp-Testimonials-Slider.git',
    liveUrl: 'https://codebyishan-testimonials-slider.netlify.app/',
  },
  // {
  //   id: 7,

  //   img: img6,
  //   githubUrl: "https://github.com/",
  //   liveUrl: "https://codebyishan.netlify.app",
  // },
  // {
  //   id: 8,

  //   img: img6,
  //   githubUrl: "https://github.com/",
  //   liveUrl: "https://codebyishan.netlify.app",
  // },
]
