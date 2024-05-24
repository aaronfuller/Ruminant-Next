import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Home - Ruminant</title>
          <meta
            name="description"
            content="Lawn care services utilizing purpose-built autonomous electric machines."
          />
          <meta property="og:title" content="Home - Ruminant" />
          <meta
            property="og:description"
            content="Lawn care services utilizing purpose-built autonomous electric machines."
          />
        </Head>
        <div className="home-container01 navbar">
          <Header rootClassName="header-root-class-name6"></Header>
        </div>
        <div className="home-container02">
          <div className="home-hero">
            <div className="home-container03">
              <h1 className="home-text">
                Combining robotics and operations for increased sustainability
                in lawn-care
              </h1>
              <h1 className="home-text01">
                <span>We&apos;re on a mission to reduce emissions, </span>
                <span>
                  increase economic feasibility and increase safety in lawn-care
                  through technology-enabled solutions.
                </span>
                <br></br>
              </h1>
              <div className="home-container04">
                <a
                  href="https://www.linkedin.com/company/90415075/admin/feed/posts/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-linked-in"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Ruminant-Robotics/100089666920478/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-facebook"
                  >
                    <path d="M829.143 73.143c26.857 0 48.571 21.714 48.571 48.571v780.571c0 26.857-21.714 48.571-48.571 48.571h-223.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-420c-26.857 0-48.571-21.714-48.571-48.571v-780.571c0-26.857 21.714-48.571 48.571-48.571h780.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/ruminantrobotics/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-instagram"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.https://www.youtube.com/@ruminantrobotics"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3"
                >
                  <svg viewBox="0 0 1024 1024" className="home-you-tube">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <a href="#prototype_intro" className="home-link4">
              <div className="home-container05">
                <span className="home-text05">More</span>
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M854 512l-342 342-342-342 62-60 238 238v-520h84v520l240-238z"></path>
                </svg>
              </div>
            </a>
          </div>
          <video
            src="/robot%20home%20page%20bg%20v3.mp4"
            loop="true"
            muted="true"
            preload="auto"
            autoPlay="true"
            className="home-video"
          ></video>
        </div>
        <div className="home-container06">
          <div id="prototype_intro" className="home-hero1">
            <div className="home-container07">
              <h1 className="home-text06">
                Our prototype has been designed for the challenges we&apos;ve
                experienced running an operation
              </h1>
            </div>
            <Link href="/the-goat">
              <a className="home-link5 button">
                <span className="home-text07">
                  <span>Check out the goat</span>
                  <br></br>
                </span>
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </a>
            </Link>
            <a href="#company_model_overview" className="home-link6">
              <div className="home-container08">
                <span className="home-text10">Our Model</span>
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M854 512l-342 342-342-342 62-60 238 238v-520h84v520l240-238z"></path>
                </svg>
              </div>
            </a>
          </div>
          <video
            src="/video%202%20homepage.mp4"
            loop="true"
            muted="true"
            preload="auto"
            autoPlay="true"
            className="home-video1"
          ></video>
        </div>
        <div className="home-container09">
          <div id="company_model_overview" className="home-hero2">
            <div className="home-container10">
              <div className="home-container11">
                <div className="home-container12">
                  <animate-on-reveal
                    animation="pulse"
                    duration="750ms"
                    delay="0.2s"
                    direction="normal"
                    easing="ease"
                    iteration="1"
                  >
                    <span
                      data-thq-animate-on-reveal="true"
                      className="home-text11"
                    >
                      Vertically integrated from the beginning.
                    </span>
                  </animate-on-reveal>
                  <span className="home-text12">
                    Instead of advertising an idea for the last two years,
                    we&apos;ve been busy designing a machine that will meet the
                    demands of cutting grass in our operation. It has been
                    modeled after and improved upon commercial equipment
                    we&apos;re currently utilizing.
                  </span>
                </div>
                <div className="home-container13">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text13">
                    Two front casters to avoid scalping yards
                  </span>
                </div>
                <div className="home-container14">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text14">
                    More robust than a department store push-mower
                  </span>
                </div>
                <div className="home-container15">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text15">
                    Engineered to be modular and easy to maintain
                  </span>
                </div>
                <div className="home-container16">
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text16">
                    Real world usage has been thought-through
                  </span>
                </div>
              </div>
              <div className="home-container17">
                <div className="home-container18">
                  <span className="home-text17">
                    <span className="home-text18">Faster feedback</span>
                    <br className="home-text19"></br>
                    <span className="home-text20">
                      on problems discovered in operations are remedied by
                      engineering design revisions in less time.
                    </span>
                  </span>
                  <span className="home-text21">
                    <span className="home-text22">Higher efficiency</span>
                    <br className="home-text23"></br>
                    <span className="home-text24">
                      by engineering integrations into the robot such as
                      automatic unloading and recognition of a property increase
                      total throughput for the crew throughout the day which is
                      especially helpful when trying to cut large quantities of
                      small residential properties.
                    </span>
                  </span>
                  <span className="home-text25">
                    <span className="home-text26">Aligned incentives</span>
                    <br className="home-text27"></br>
                    <span className="home-text28">
                      unlike our competitors who claim they have aligned
                      incentives while selling or leasing equipment. We benefit
                      directly from a machine that lasts as long as possible and
                      is easy to maintain, resulting in a reduced carbon
                      footprint and an increase in sustainable profitability for
                      operations.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            z-index: 100;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #000000;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 8vh;
            display: flex;
            z-index: 200;
            position: fixed;
            align-items: flex-start;
          }
          .home-container02 {
            width: 100%;
            height: 100vh;
            position: relative;
            align-items: flex-start;
            background-color: #000000;
          }
          .home-hero {
            width: 100%;
            height: 100%;
            display: flex;
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
          .home-container03 {
            width: 80%;
            height: 60vh;
            display: flex;
            z-index: 100;
            align-self: flex-start;
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
          .home-text {
            color: rgb(255, 231, 123);
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
          .home-text01 {
            color: rgb(255, 255, 255);
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
          .home-container04 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 60%;
            height: auto;
            display: flex;
            z-index: 102;
            align-items: flex-start;
          }
          .home-link {
            display: contents;
          }
          .home-linked-in {
            fill: #ffffff;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            transition: 0.3s;
            text-decoration: none;
          }
          .home-linked-in:hover {
            fill: var(--dl-color-ruminant-yellow);
          }
          .home-link1 {
            display: contents;
          }
          .home-facebook {
            fill: #ffffff;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            transition: 0.3s;
            text-decoration: none;
          }
          .home-facebook:hover {
            fill: var(--dl-color-ruminant-yellow);
          }
          .home-link2 {
            display: contents;
          }
          .home-instagram {
            fill: #ffffff;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            transition: 0.3s;
            text-decoration: none;
          }
          .home-instagram:hover {
            fill: var(--dl-color-ruminant-yellow);
          }
          .home-link3 {
            display: contents;
          }
          .home-you-tube {
            fill: #ffffff;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            transition: 0.3s;
            text-decoration: none;
          }
          .home-you-tube:hover {
            fill: var(--dl-color-ruminant-yellow);
          }
          .home-link4 {
            display: contents;
          }
          .home-container05 {
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
          .home-container05:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text05 {
            color: #ffffff;
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
          }
          .home-icon04 {
            fill: #ffffff;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .home-video {
            left: 0px;
            right: 0px;
            width: 100vw;
            bottom: 0px;
            height: auto;
            margin: auto;
            opacity: 0.4;
            z-index: 90;
            position: absolute;
          }
          .home-container06 {
            width: 100%;
            height: 100vh;
            z-index: 100;
            position: relative;
            align-items: flex-start;
            background-color: #000000;
          }
          .home-hero1 {
            width: 100%;
            height: 100%;
            display: flex;
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
          .home-container07 {
            width: 80%;
            height: 50vh;
            display: flex;
            z-index: 100;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            margin-left: 0px;
            padding-top: 0px;
            padding-left: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .home-text06 {
            color: rgb(255, 255, 255);
            opacity: 1;
            font-size: 65px;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-threeunits);
            text-align: left;
            font-family: 'Raleway';
            font-weight: 500;
            line-height: 1.15;
            text-decoration: none;
          }
          .home-link5 {
            color: #000000;
            width: 20vw;
            height: auto;
            z-index: 102;
            font-size: 20px;
            align-self: center;
            transition: 0.3s;
            border-width: 0px;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-sixunits);
            text-decoration: none;
            background-color: var(--dl-color-ruminant-yellow);
          }
          .home-link5:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text07 {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .home-icon06 {
            width: auto;
            height: var(--dl-size-size-small);
          }
          .home-link6 {
            display: contents;
          }
          .home-container08 {
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
          .home-container08:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text10 {
            color: rgb(255, 255, 255);
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
          }
          .home-icon08 {
            fill: #ffffff;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .home-video1 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100vw;
            height: auto;
            margin: auto;
            opacity: 0.4;
            z-index: 90;
            position: absolute;
          }
          .home-container09 {
            width: 100%;
            height: auto;
            z-index: 100;
            position: relative;
            align-items: flex-start;
            background-color: #000000;
          }
          .home-hero2 {
            width: 100%;
            height: auto;
            display: flex;
            z-index: 101;
            position: relative;
            max-width: 100%;
            max-height: auto;
            min-height: auto;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: 0px;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: 0px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 40vw;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 40vw;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text11 {
            width: 100%;
            font-size: 65px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
          }
          .home-text12 {
            width: 100%;
            font-size: 22px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-icon10 {
            fill: var(--dl-color-ruminant-blue);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .home-text13 {
            height: auto;
            font-size: 26px;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-icon12 {
            fill: var(--dl-color-ruminant-blue);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .home-text14 {
            height: auto;
            font-size: 26px;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-icon14 {
            fill: var(--dl-color-ruminant-blue);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .home-text15 {
            height: auto;
            font-size: 26px;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .home-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-icon16 {
            fill: var(--dl-color-ruminant-blue);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .home-text16 {
            height: auto;
            font-size: 26px;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 45vw;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 50vw;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text17 {
            fill: var(--dl-color-ruminant-salmon);
            color: rgb(0, 0, 0);
            width: 30vw;
            height: auto;
            margin: var(--dl-space-space-unit);
            font-size: 20px;
            align-self: center;
            transition: 0.3s;
            font-weight: 700;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 16px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-ruminant-yellow);
          }
          .home-text17:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text18 {
            font-style: normal;
          }
          .home-text19 {
            font-style: normal;
          }
          .home-text20 {
            font-weight: 400;
          }
          .home-text21 {
            fill: var(--dl-color-ruminant-salmon);
            color: rgb(0, 0, 0);
            width: 35vw;
            height: auto;
            margin: var(--dl-space-space-unit);
            padding: var(--dl-space-space-threeunits);
            font-size: 20px;
            align-self: center;
            transition: 0.3s;
            font-weight: 700;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 16px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .home-text21:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text22 {
            font-style: normal;
          }
          .home-text23 {
            font-style: normal;
          }
          .home-text24 {
            font-weight: 400;
          }
          .home-text25 {
            fill: var(--dl-color-ruminant-salmon);
            color: rgb(0, 0, 0);
            width: 30vw;
            height: auto;
            margin: var(--dl-space-space-unit);
            font-size: 20px;
            align-self: center;
            transition: 0.3s;
            font-weight: 700;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 16px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-ruminant-salmon);
          }
          .home-text25:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text26 {
            font-style: normal;
          }
          .home-text27 {
            font-style: normal;
          }
          .home-text28 {
            font-weight: 400;
          }
          @media (max-width: 1200px) {
            .home-hero {
              margin-top: 0px;
              min-height: auto;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-container03 {
              width: 100%;
            }
            .home-video {
              left: -300px;
              width: auto;
              height: 100%;
            }
            .home-hero1 {
              margin-top: 0px;
              min-height: auto;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-container07 {
              width: 100%;
            }
            .home-link5 {
              width: 60vw;
            }
            .home-video1 {
              left: -300px;
              width: auto;
              height: 100%;
            }
            .home-hero2 {
              margin-top: 0px;
              min-height: auto;
              border-radius: var(--dl-radius-radius-radius8);
            }
          }
          @media (max-width: 991px) {
            .home-container02 {
              height: 80vh;
            }
            .home-hero {
              height: auto;
              flex-direction: column;
            }
            .home-container03 {
              align-items: center;
              margin-right: 0px;
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-container04 {
              align-self: flex-start;
            }
            .home-video {
              top: 0px;
              left: -200px;
              right: 0px;
              width: auto;
              height: 100%;
              margin: auto;
              position: absolute;
            }
            .home-container06 {
              height: 80vh;
            }
            .home-hero1 {
              height: 100%;
              flex-direction: column;
            }
            .home-container07 {
              align-items: center;
              margin-right: 0px;
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-link5 {
              width: 60vw;
            }
            .home-video1 {
              left: -200px;
              width: auto;
              height: 100%;
            }
            .home-hero2 {
              flex-direction: column;
            }
            .home-container10 {
              flex-direction: column;
            }
            .home-container11 {
              width: 100%;
            }
            .home-container12 {
              width: 100%;
            }
            .home-text12 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-container13 {
              margin: 0px;
            }
            .home-container14 {
              margin: 0px;
            }
            .home-container15 {
              margin: 0px;
            }
            .home-container16 {
              margin: 0px;
            }
            .home-container17 {
              width: 100%;
            }
            .home-container18 {
              width: 100%;
            }
            .home-text17 {
              width: 80vw;
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-text21 {
              width: 80vw;
            }
            .home-text25 {
              width: 80vw;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              margin-top: var(--dl-space-space-fiveunits);
              padding-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: flex-start;
            }
            .home-text {
              padding-top: 0px;
            }
            .home-video {
              left: -400px;
            }
            .home-hero1 {
              margin-top: 0x;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-link5 {
              margin-bottom: 140px;
            }
            .home-video1 {
              left: -400px;
            }
            .home-hero2 {
              margin-top: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              align-self: center;
              margin-top: 50px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container03 {
              margin-top: var(--dl-space-space-fiveunits);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text {
              font-size: 30px;
              text-align: left;
            }
            .home-text01 {
              font-size: 30px;
              text-align: left;
            }
            .home-video {
              left: -500px;
              right: 0px;
              margin: auto;
            }
            .home-hero1 {
              align-self: center;
              margin-top: 0px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container07 {
              height: auto;
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text06 {
              font-size: 30px;
              text-align: left;
            }
            .home-video1 {
              left: -500px;
            }
            .home-hero2 {
              align-self: center;
              margin-top: 0px;
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

export default Home
