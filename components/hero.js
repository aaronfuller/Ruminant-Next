import React from 'react'

const Hero = (props) => {
  return (
    <>
      <div className="hero-hero"></div>
      <style jsx>
        {`
          .hero-hero {
            width: auto;
            height: auto;
            margin: 0vh;
            display: flex;
            position: relative;
            max-width: auto;
            min-height: auto;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .hero-hero {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .hero-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .hero-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Hero
