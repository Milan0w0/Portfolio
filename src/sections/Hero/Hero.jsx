import './Hero.scss'
import Socials from '@/components/Socials'
import { Image } from 'minista'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Hello I’am
              <b>
                   Milan. Frontend
                <span className="text-outline"> Developer </span>
              </b>
              Based In <b>Russia.</b>
            </h1>
            <div className="hero__description">
              <p>
                I offer freelance services on various freelance platforms as a frontend developer. I create modern and responsive websites using cutting-edge technologies. I am constantly learning new things in my field and improving my skills.</p>
            </div>
          </div>
          <Socials className="hero__socials" />
        </div>
        <Image className="hero__image" src="/src/assets/images/hero/man.png" />
      </div>
    </section>
  )
}
