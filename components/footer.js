import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="footer-image"
            />
            <span className="footer-text">{props.text1}</span>
          </div>
          <div className="footer-links-container">
            <div className="footer-container1">
              <div className="footer-product-container">
                <span className="footer-text1">Sitemap</span>
                <Link href="/">
                  <a className="footer-link Content">Get Lawncare</a>
                </Link>
                <Link href="/home">
                  <a className="footer-link01 Content">Company</a>
                </Link>
                <Link href="/the-goat">
                  <a className="footer-link02 Content">The Goat</a>
                </Link>
                <Link href="/about-us">
                  <a className="footer-link03 Content">About Us</a>
                </Link>
              </div>
              <div className="footer-company-container">
                <span className="footer-text2">Legal</span>
                <Link href="/privacy-policy">
                  <a className="footer-link04 Content">Privacy Policy</a>
                </Link>
              </div>
            </div>
            <div className="footer-container2">
              <div className="footer-contact">
                <span className="footer-text3">Contact Us</span>
                <a
                  href="mailto:hello@ruminantrobotics.com?subject=Hello!"
                  className="footer-link05 Content"
                >
                  hello@ruminantrobotics.com
                </a>
                <a href="tel:+15734160231" className="footer-link06 Content">
                  +1 (573) 416 0231
                </a>
              </div>
              <div className="footer-socials">
                <span className="footer-text4">Follow Us</span>
                <div className="footer-container3">
                  <a
                    href="https://www.linkedin.com/company/90415075/admin/feed/posts/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link07"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer-linked-in"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/people/Ruminant-Robotics/100089666920478/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link08"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer-facebook"
                    >
                      <path d="M829.143 73.143c26.857 0 48.571 21.714 48.571 48.571v780.571c0 26.857-21.714 48.571-48.571 48.571h-223.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-420c-26.857 0-48.571-21.714-48.571-48.571v-780.571c0-26.857 21.714-48.571 48.571-48.571h780.571z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/ruminantrobotics/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link09"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer-instagram"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.https://www.youtube.com/@ruminantrobotics"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link10"
                  >
                    <svg viewBox="0 0 1024 1024" className="footer-you-tube">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>
        <span className="footer-text5">{props.text}</span>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            z-index: 101;
            position: relative;
            max-width: auto;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #000000;
          }
          .footer-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-logo {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-image {
            height: 2rem;
            text-decoration: none;
          }
          .footer-text {
            color: rgb(255, 255, 255);
            width: 20vw;
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .footer-links-container {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container1 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text1 {
            color: #ffffff;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link {
            color: #ffffff;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link01 {
            color: #ffffff;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link02 {
            color: #ffffff;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link03 {
            color: #ffffff;
            text-decoration: none;
          }
          .footer-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text2 {
            color: #ffffff;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link04 {
            color: #ffffff;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text3 {
            color: #ffffff;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link05 {
            color: #ffffff;
            z-index: 102;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link06 {
            color: #ffffff;
            z-index: 102;
            margin-top: 0px;
            text-decoration: none;
          }
          .footer-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text4 {
            color: #ffffff;
            font-weight: 700;
            margin-bottom: 0px;
          }
          .footer-container3 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 60%;
            height: auto;
            display: flex;
            z-index: 102;
            align-items: flex-start;
          }
          .footer-link07 {
            display: contents;
          }
          .footer-linked-in {
            fill: #d9d9d9;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            text-decoration: none;
          }
          .footer-link08 {
            display: contents;
          }
          .footer-facebook {
            fill: #d9d9d9;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            text-decoration: none;
          }
          .footer-link09 {
            display: contents;
          }
          .footer-instagram {
            fill: #d9d9d9;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            text-decoration: none;
          }
          .footer-link10 {
            display: contents;
          }
          .footer-you-tube {
            fill: #d9d9d9;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            text-decoration: none;
          }
          .footer-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .footer-text5 {
            color: var(--dl-color-gray-white);
            align-self: center;
          }
          @media (max-width: 1200px) {
            .footer-text2 {
              color: rgb(255, 255, 255);
              font-weight: 700;
            }
          }
          @media (max-width: 991px) {
            .footer-footer {
              flex-direction: column;
            }
            .footer-container1 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .footer-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-logo {
              align-self: flex-start;
              align-items: center;
            }
            .footer-image {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-text {
              width: 40vw;
              margin-top: 0px;
              text-align: left;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-links-container {
              width: 100%;
              align-items: flex-start;
              margin-right: 0px;
              flex-direction: row;
              justify-content: flex-start;
            }
            .footer-container1 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .footer-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding: var(--dl-space-space-unit);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
            }
            .footer-logo {
              width: 100%;
            }
            .footer-image {
              align-self: flex-start;
              margin-bottom: 0px;
            }
            .footer-text {
              width: 100vw;
              margin-top: var(--dl-space-space-unit);
              text-align: left;
              margin-left: 0px;
              padding-left: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .footer-links-container {
              align-self: flex-start;
              align-items: flex-start;
              flex-direction: row;
            }
            .footer-container1 {
              width: 50%;
              align-self: center;
              margin-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .footer-product-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-text1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-link {
              margin-bottom: 0px;
            }
            .footer-link01 {
              margin-bottom: 0px;
            }
            .footer-link02 {
              margin-bottom: 0px;
            }
            .footer-company-container {
              width: 100%;
            }
            .footer-text2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-link04 {
              margin-bottom: 0px;
            }
            .footer-container2 {
              width: 50%;
              margin-top: 0px;
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .footer-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-separator {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-text5 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text3: 'Company',
  text12: 'Contact Us',
  text1:
    'Lawn care services utilizing purpose-built autonomous electric machines.',
  text2: 'Sitemap',
  text13: 'hello@ruminantrobotics.com',
  text14: '+1 (573) 416 0231',
  text4: 'Beta Program',
  text10: 'Contact',
  text8: 'Privacy Policy',
  text15: 'Follow Us',
  text11: 'Blog',
  text9: 'Jobs & Careers',
  text: '© 2024 Ruminant Robotics Incorporated, All Rights Reserved.',
  imageAlt: 'logo',
  text5: 'The Goat',
  text7: 'Goodies',
  text6: 'About Us',
  imageSrc: '/logo_website_header-1500h.webp',
}

Footer.propTypes = {
  text3: PropTypes.string,
  text12: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
  text4: PropTypes.string,
  text10: PropTypes.string,
  text8: PropTypes.string,
  text15: PropTypes.string,
  text11: PropTypes.string,
  text9: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  text5: PropTypes.string,
  text7: PropTypes.string,
  text6: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Footer
