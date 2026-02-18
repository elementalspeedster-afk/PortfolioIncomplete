import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Sample Website1',
    github: 'https://github.com',
    demo: 'https://project1-react-2k3h.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Game developing Sample1 in Unity',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1bNWSzjetUTAFNuZibbUExTVQt6TkEOGr/view?usp=sharing'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Game developing Sample2 in Unity (Unfinished)',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1siP5FH48ctXi-MGsFeqYBBL9rQPhO3-O/view?usp=sharing'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Character Artwork',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1Ny5IY8J9w0jeTbPCaZyyeK0raKU2iU0K/view?usp=drive_link'
  },
  {
    id: 5,
    image: IMG5,
    title: '3D model in Blender sampple(Incomplete)',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1RtUfOaUpkSGUnMUwjVQKE6xm3bD1PWL-/view?usp=drive_link'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Game developing Sample3 in Unreal (Inventory System)',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1IT-pSqu12Jq3IXru_bXymR_Ykms4HMhz/view?usp=sharing'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live
                  Demo</a>
                </div>
             </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio