import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Footer from '../components/footer'
import Header from '../components/header'

const Lawncare = (props) => {
  return (
    <>
      <div className="lawncare-container">
        <Head>
          <title>Ruminant</title>
          <meta
            name="description"
            content="Lawn care services utilizing purpose-built autonomous electric machines."
          />
          <meta property="og:title" content="Ruminant" />
          <meta
            property="og:description"
            content="Lawn care services utilizing purpose-built autonomous electric machines."
          />
        </Head>
        <div className="lawncare-container01">
          <div className="lawncare-hero">
            <div className="lawncare-container02">
              <h1 className="lawncare-text">In Columbia, Missouri?</h1>
              <h1 className="lawncare-text01">
                <span>
                  We&apos;re probably cutting grass in your neighborhood. If
                  you&apos;re interested in getting lawncare services provided
                  by us, get a quote! It&apos;s fast and easy.
                </span>
                <br></br>
              </h1>
              <div className="lawncare-container03">
                <div className="lawncare-container04">
                  <span className="lawncare-text04">
                    <span>Mowing</span>
                    <br></br>
                  </span>
                </div>
                <div className="lawncare-container05">
                  <span className="lawncare-text07">
                    <span>Trimming</span>
                    <br></br>
                  </span>
                </div>
                <div className="lawncare-container06">
                  <span className="lawncare-text10">
                    <span>Blowing</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <a href="#work_request" className="lawncare-link">
              <div className="lawncare-container07">
                <span className="lawncare-text13">Quote</span>
                <svg viewBox="0 0 1024 1024" className="lawncare-icon">
                  <path d="M854 512l-342 342-342-342 62-60 238 238v-520h84v520l240-238z"></path>
                </svg>
              </div>
            </a>
          </div>
          <img
            alt="image"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/img_8463_ful-2100w.webp"
            srcSet="/img_8463_ful-2100w.webp 1200w, /img_8463_ful-tablet.webp 800w, /img_8463_ful-mobile.webp 480w"
            className="lawncare-image"
          />
        </div>
        <div id="work_request" className="lawncare-container08">
          <div className="lawncare-container09">
            <div className="lawncare-container10">
              <Script
                html={`<link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
<div id="7f111467-96db-4044-8bfd-85c020cc5f48"></div>
<script src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" clienthub_id="7f111467-96db-4044-8bfd-85c020cc5f48" form_url="https://clienthub.getjobber.com/client_hubs/7f111467-96db-4044-8bfd-85c020cc5f48/public/work_request/embedded_work_request_form"></script>
`}
              ></Script>
            </div>
          </div>
        </div>
        <div className="lawncare-hero1">
          <img
            alt="image"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/trimmer-example-1200w.webp"
            srcSet="/trimmer-example-1200w.webp 1200w, /trimmer-example-tablet.webp 800w, /trimmer-example-mobile.webp 480w"
            className="lawncare-image1"
          />
          <div className="lawncare-container11">
            <h1 className="lawncare-text14">
              Adding sustainability to our operation.
            </h1>
            <span className="lawncare-text15">
              <span>
                Though we&apos;re still using standard commercial mowers,
                we&apos;ve switched to electric string trimmers and blowers to
                decrease our carbon footprint while we&apos;re working on
                deploying our first prototype.
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <Link href="/home">
          <a className="lawncare-link1 button">
            <span className="lawncare-text18">
              <span>Learn more about us</span>
              <br></br>
            </span>
            <svg viewBox="0 0 1024 1024" className="lawncare-icon2">
              <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
            </svg>
          </a>
        </Link>
        <div className="lawncare-seperator-container"></div>
        <Footer></Footer>
        <div className="lawncare-container12 navbar">
          <Header rootClassName="header-root-class-name1"></Header>
        </div>
      </div>
      <style jsx>
        {`
          .lawncare-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .lawncare-container01 {
            width: 100%;
            height: 100vh;
            position: relative;
            align-items: flex-start;
            background-color: #000000;
          }
          .lawncare-hero {
            width: 100%;
            height: 100%;
            display: flex;
            opacity: 1;
            z-index: 101;
            position: relative;
            max-width: 100%;
            max-height: auto;
            min-height: auto;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: 0px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .lawncare-container02 {
            width: 80%;
            height: 60vh;
            display: flex;
            z-index: 100;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            margin-left: 0px;
            padding-top: 0px;
            padding-left: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .lawncare-text {
            color: #ffffff;
            opacity: 1;
            font-size: 65px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Raleway';
            font-weight: 500;
            line-height: 1.15;
            padding-top: var(--dl-space-space-sixunits);
            text-decoration: none;
          }
          .lawncare-text01 {
            color: #ffffff;
            width: 100%;
            opacity: 1;
            font-size: 30px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Raleway';
            font-weight: 500;
            line-height: 1.15;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .lawncare-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: none;
            align-items: flex-start;
            justify-content: center;
          }
          .lawncare-container04 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            margin: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-ruminant-yellow);
          }
          .lawncare-text04 {
            font-size: 22px;
            align-self: center;
            font-style: normal;
            font-weight: 700;
          }
          .lawncare-container05 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            margin: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-ruminant-yellow);
          }
          .lawncare-text07 {
            font-size: 22px;
            align-self: center;
            font-style: normal;
            font-weight: 700;
          }
          .lawncare-container06 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            margin: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-ruminant-yellow);
          }
          .lawncare-text10 {
            font-size: 22px;
            align-self: center;
            font-style: normal;
            font-weight: 700;
          }
          .lawncare-link {
            display: contents;
          }
          .lawncare-container07 {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 200px;
            bottom: 0px;
            height: 100px;
            margin: auto;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .lawncare-container07:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .lawncare-text13 {
            color: rgb(255, 255, 255);
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
          }
          .lawncare-icon {
            fill: #ffffff;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .lawncare-image {
            width: 100%;
            bottom: 0px;
            opacity: 0.5;
            position: absolute;
            object-fit: cover;
          }
          .lawncare-container08 {
            width: 100vw;
            height: 1200px;
            position: relative;
            align-items: flex-start;
            background-color: #ffffff;
          }
          .lawncare-container09 {
            width: 100%;
            height: 100%;
            z-index: 105;
          }
          .lawncare-container10 {
            display: contents;
          }
          .lawncare-hero1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .lawncare-image1 {
            width: var(--dl-size-size-xxlarge);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .lawncare-container11 {
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .lawncare-text14 {
            font-size: 65px;
          }
          .lawncare-text15 {
            font-size: 22px;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Raleway';
            font-weight: 400;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-threeunits);
            text-transform: none;
            text-decoration: none;
          }
          .lawncare-link1 {
            color: #000000;
            width: 20vw;
            height: auto;
            z-index: 102;
            font-size: 20px;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            transition: 0.3s;
            border-width: 0px;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
            background-color: var(--dl-color-ruminant-yellow);
          }
          .lawncare-link1:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .lawncare-text18 {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .lawncare-icon2 {
            width: auto;
            height: var(--dl-size-size-small);
          }
          .lawncare-seperator-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .lawncare-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: 8vh;
            display: flex;
            z-index: 200;
            position: fixed;
            align-items: flex-start;
          }
          @media (max-width: 1200px) {
            .lawncare-container01 {
              height: 90vh;
            }
            .lawncare-hero {
              margin-top: 0px;
              min-height: auto;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .lawncare-container02 {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
            }
            .lawncare-link1 {
              width: 40vw;
            }
          }
          @media (max-width: 991px) {
            .lawncare-hero {
              width: 100%;
              flex-direction: column;
            }
            .lawncare-container02 {
              align-items: center;
              margin-right: 0px;
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .lawncare-image {
              left: 0px;
              right: 0px;
              width: 140%;
              margin: auto;
            }
            .lawncare-hero1 {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .lawncare-image1 {
              order: 2;
              width: 400px;
            }
            .lawncare-container11 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .lawncare-text14 {
              text-align: center;
            }
            .lawncare-link1 {
              width: 50vw;
            }
          }
          @media (max-width: 767px) {
            .lawncare-container01 {
              height: 100%;
            }
            .lawncare-hero {
              height: auto;
              margin-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .lawncare-container07 {
              bottom: 0px;
              margin: auto;
            }
            .lawncare-image {
              width: auto;
              height: 100%;
            }
            .lawncare-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .lawncare-image1 {
              width: 80%;
            }
            .lawncare-text14 {
              text-align: left;
            }
            .lawncare-link1 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .lawncare-hero {
              align-self: center;
              margin-top: 250px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .lawncare-container02 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-unit);
            }
            .lawncare-text {
              font-size: 30px;
              text-align: left;
            }
            .lawncare-text01 {
              font-size: 30px;
              text-align: left;
            }
            .lawncare-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .lawncare-container11 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .lawncare-text14 {
              text-align: left;
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Lawncare
