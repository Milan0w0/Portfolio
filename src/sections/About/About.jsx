import './About.scss'
import section from '@/layouts/Section'
import { Image } from 'minista'

export default (props) => {
  const { className } = props

  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__inner container">
        <Image
          src="./src/assets/images/about/portrait.png"
          className="about__image"
        />
        <div className="about__content">
          <h1 className="about__title" id="about-title">
            About <b>Me</b>
          </h1>
          <div className="about__description">
            <p>
              I am self-taught front-end developer who loves creating clean, modern, and responsive websites. I enjoy turning design ideas into real, functional user interfaces using the latest technologies. Attention to detail, usability, and performance have always been my priorities.
            </p>
            <p>
              I started my journey in web development about two years ago, gradually learning everything through practice and personal projects. Since then, I've created many websites, experimented with various tools, and constantly improved my programming skills.            </p>
            <p>
              Right now, I’m working as a freelance, helping clients build websites and interfaces that look great and work smoothly. My goal is to keep growing, learn React and other modern frameworks, and become a professional front-end engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
