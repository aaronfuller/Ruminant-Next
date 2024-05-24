import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>About-Us - Ruminant</title>
          <meta
            name="description"
            content="Lawn care services utilizing purpose-built autonomous electric machines."
          />
          <meta property="og:title" content="About-Us - Ruminant" />
          <meta
            property="og:description"
            content="Lawn care services utilizing purpose-built autonomous electric machines."
          />
        </Head>
        <Header rootClassName="header-root-class-name3"></Header>
        <div className="about-us-blog">
          <span className="about-us-text">Founders</span>
          <div className="about-us-container01">
            <div className="about-us-blog-post-card">
              <img
                alt="image"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/kolton-1400w.webp"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                srcSet="/kolton-1400w.webp 1200w, /kolton-tablet.webp 800w, /kolton-mobile.webp 480w"
                className="about-us-image"
              />
              <div className="about-us-container02">
                <div className="about-us-container03">
                  <span className="about-us-text01">
                    Chief executive officer
                  </span>
                </div>
                <div className="about-us-container04">
                  <h1 className="about-us-text02">Kolton Speer</h1>
                  <a
                    href="https://www.linkedin.com/in/kolton-speer/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-us-link"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-us-linked-in"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                  </a>
                </div>
                <span className="about-us-text03">
                  Our chief executive officer is currently pursuing a PhD in
                  computer vision related topics at the University of Missouri
                  following the completion of his BS in Computer Science. He has
                  former work experience in Caterpillar&apos;s autonomy group.
                </span>
              </div>
            </div>
          </div>
          <div className="about-us-container05">
            <div className="about-us-blog-post-card1">
              <img
                alt="image"
                src="/dsc_6833.png"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="about-us-image1"
              />
              <div className="about-us-container06">
                <div className="about-us-container07">
                  <span className="about-us-text04">
                    chief technology officer
                  </span>
                </div>
                <div className="about-us-container08">
                  <h1 className="about-us-text05">Aaron Fuller</h1>
                  <a
                    href="https://www.linkedin.com/in/aaronsfuller/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-us-link1"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-us-linked-in1"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                  </a>
                </div>
                <span className="about-us-text06">
                  Aaron has a BS in Electrical Engineering and a BS in Computer
                  Engineering from the University of Missouri with former work
                  experience as a computer engineer at Garmin.
                </span>
              </div>
            </div>
          </div>
          <div className="about-us-blog-post-card2">
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/blank-profile-picture-1400w.webp"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              srcSet="/blank-profile-picture-1400w.webp 1200w, /blank-profile-picture-tablet.webp 800w, /blank-profile-picture-mobile.webp 480w"
              className="about-us-image2"
            />
            <div className="about-us-container09">
              <div className="about-us-container10">
                <span className="about-us-text07">
                  lead mechanical engineering
                </span>
              </div>
              <h1 className="about-us-text08">
                To be disclosed at a later date
              </h1>
              <span className="about-us-text09">
                Our lead mechanical engineer has a BS in Mechanical Engineering
                from the University of Missouri, S&amp;T and over 25 years of
                work experience at various companies. His work experience is
                primarily in manufacturing.
              </span>
            </div>
          </div>
        </div>
        <div className="about-us-banner">
          <h1 className="about-us-text10">Partners</h1>
          <div className="about-us-container11">
            <span className="about-us-text11">
              <span>
                Ruminant Robotics Inc. received their first round of funding
                from
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://redbud.vc"
                target="_blank"
                rel="noreferrer noopener"
                className="about-us-link2"
              >
                Redbud VC
              </a>
              <span>. </span>
              <span>
                We are currently raising another round of funding. Contact us by
                emailing hello@ruminantrobotics.com if you represent a venture
                capital firm and you&apos;re interested in learning more about
                our mission and business plan.
              </span>
            </span>
            <img
              alt="image"
              src="/redbud_primary_red-200h.webp"
              className="about-us-image3"
            />
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .about-us-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .about-us-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 48px;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-text {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            width: auto;
            font-size: 65px;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Raleway';
            font-weight: 700;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-us-container01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-blog-post-card:hover {
            transform: scale(1.02);
          }
          .about-us-image {
            width: 350px;
            height: 350px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 0px;
          }
          .about-us-container02 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .about-us-container03 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-text01 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .about-us-container04 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .about-us-text02 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            margin-bottom: 0px;
          }
          .about-us-link {
            display: contents;
          }
          .about-us-linked-in {
            fill: var(--dl-color-gray-black);
            width: 40px;
            height: 40px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-text03 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-us-container05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-blog-post-card1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-blog-post-card1:hover {
            transform: scale(1.02);
          }
          .about-us-image1 {
            width: 350px;
            height: 350px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 0px;
          }
          .about-us-container06 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .about-us-container07 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-text04 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .about-us-container08 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .about-us-text05 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            margin-bottom: 0px;
          }
          .about-us-link1 {
            display: contents;
          }
          .about-us-linked-in1 {
            fill: var(--dl-color-gray-black);
            width: 40px;
            height: 40px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-text06 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-us-blog-post-card2 {
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-blog-post-card2:hover {
            transform: scale(1.02);
          }
          .about-us-image2 {
            width: 350px;
            height: 350px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 0px;
          }
          .about-us-container09 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .about-us-container10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-text07 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .about-us-text08 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-us-text09 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-us-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-text10 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 65px;
            font-style: normal;
            text-align: left;
            font-family: Raleway;
            font-weight: 700;
            line-height: 1.15;
            text-decoration: none;
          }
          .about-us-container11 {
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-text11 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            font-size: 22px;
            margin-right: var(--dl-space-space-threeunits);
          }
          .about-us-link2 {
            text-decoration: underline;
          }
          .about-us-image3 {
            width: 25vw;
            align-self: center;
            object-fit: cover;
          }
          @media (max-width: 1200px) {
            .about-us-blog {
              width: 100%;
              min-width: 100%;
            }
          }
          @media (max-width: 991px) {
            .about-us-container {
              background-color: var(--dl-color-gray-white);
            }
            .about-us-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
            .about-us-blog-post-card1 {
              flex-direction: row;
              justify-content: space-between;
            }
            .about-us-blog-post-card2 {
              flex-direction: row;
              justify-content: space-between;
            }
            .about-us-banner {
              flex-direction: column;
            }
            .about-us-container11 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .about-us-text11 {
              text-align: left;
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .about-us-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-us-blog-post-card {
              flex-direction: column;
            }
            .about-us-image {
              width: 100%;
              height: 600px;
            }
            .about-us-blog-post-card1 {
              flex-direction: column;
            }
            .about-us-image1 {
              width: 100%;
              height: 600px;
            }
            .about-us-blog-post-card2 {
              flex-direction: column;
            }
            .about-us-image2 {
              width: 100%;
            }
            .about-us-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-us-text11 {
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .about-us-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-us-text {
              margin-left: 0px;
              margin-right: 0px;
            }
            .about-us-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-us-container11 {
              flex-direction: column;
            }
            .about-us-text11 {
              text-align: left;
              margin-left: 0px;
              margin-right: 0px;
            }
            .about-us-image3 {
              width: 100%;
              height: auto;
              margin-top: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
