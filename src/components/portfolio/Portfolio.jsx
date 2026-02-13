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
    title: 'Web developing Sample1',
    github: 'https://github.com',
    demo: 'https://project2-react-8j2f.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Web developing Sample2',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1EY20LxcjlEboj_vlCynLxzNtPUSjt4dn/view?usp=drive_link'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Photoshop Artwork',
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
    title: 'Sample inventory system Made in Unreal Engine Game Dev. (incomple)',
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