import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const TheGoat = (props) => {
  return (
    <>
      <div className="the-goat-container">
        <Head>
          <title>The-Goat - Ruminant</title>
          <meta
            name="description"
            content="Lawn care services utilizing purpose-built autonomous electric machines."
          />
          <meta property="og:title" content="The-Goat - Ruminant" />
          <meta
            property="og:description"
            content="Lawn care services utilizing purpose-built autonomous electric machines."
          />
        </Head>
        <Header rootClassName="header-root-class-name2"></Header>
        <div className="the-goat-container01">
          <h1 className="the-goat-text">
            Meet the goat, our first version of what an autonomous mower should
            be.
          </h1>
          <h1 className="the-goat-text01">
            This is technology built for one purpose: to be the best at cutting
            lawns.
          </h1>
          <img
            alt="image"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/dsc_7042-1800h.webp"
            srcSet="/dsc_7042-1800h.webp 1200w, /dsc_7042-tablet.webp 800w, /dsc_7042-mobile.webp 480w"
            className="the-goat-image"
          />
          <a href="#prototype_intro" className="the-goat-link">
            <div className="the-goat-container02">
              <span className="the-goat-text02">Features</span>
              <svg viewBox="0 0 1024 1024" className="the-goat-icon">
                <path d="M854 512l-342 342-342-342 62-60 238 238v-520h84v520l240-238z"></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="the-goat-container03">
          <div className="the-goat-container04">
            <div className="the-goat-container05">
              <div className="the-goat-container06">
                <svg viewBox="0 0 1024 1024" className="the-goat-icon02">
                  <path d="M470 854l170-320h-86v-236l-170 320h86v236zM668 170q24 0 41 17t17 41v654q0 24-17 40t-41 16h-312q-24 0-41-16t-17-40v-654q0-24 17-41t41-17h70v-84h172v84h70z"></path>
                </svg>
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
                    className="the-goat-text03"
                  >
                    175V max
                  </span>
                </animate-on-reveal>
              </div>
            </div>
            <div className="the-goat-container07">
              <div className="the-goat-container08">
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
                    className="the-goat-text04"
                  >
                    The most advanced battery in a mower.
                  </span>
                </animate-on-reveal>
                <span className="the-goat-text05">
                  Instead of advertising an idea for the last two years,
                  we&apos;ve been busy designing a machine that will meet the
                  demands of cutting grass in our operation. It has been modeled
                  after and improved upon commercial equipment we&apos;re
                  currently utilizing.
                </span>
              </div>
              <div className="the-goat-container09">
                <svg viewBox="0 0 1024 1024" className="the-goat-icon04">
                  <path d="M470 896h-44l44-298h-150q-32 0-16-28 6-10 2-6 102-178 248-436h44l-44 298h150q28 0 18 28z"></path>
                </svg>
                <span className="the-goat-text06">
                  In case of puncture, LiFePO4 will not thermal runaway
                </span>
              </div>
              <div className="the-goat-container10">
                <svg viewBox="0 0 1024 1024" className="the-goat-icon06">
                  <path d="M470 896h-44l44-298h-150q-32 0-16-28 6-10 2-6 102-178 248-436h44l-44 298h150q28 0 18 28z"></path>
                </svg>
                <span className="the-goat-text07">
                  LiFePO4 chemistry has a longer lifespan than Li-ion
                </span>
              </div>
              <div className="the-goat-container11">
                <svg viewBox="0 0 1024 1024" className="the-goat-icon08">
                  <path d="M470 896h-44l44-298h-150q-32 0-16-28 6-10 2-6 102-178 248-436h44l-44 298h150q28 0 18 28z"></path>
                </svg>
                <span className="the-goat-text08">
                  Higher pack voltage increases overall efficiency
                </span>
              </div>
              <div className="the-goat-container12">
                <svg viewBox="0 0 1024 1024" className="the-goat-icon10">
                  <path d="M470 896h-44l44-298h-150q-32 0-16-28 6-10 2-6 102-178 248-436h44l-44 298h150q28 0 18 28z"></path>
                </svg>
                <span className="the-goat-text09">
                  Recharges faster than other electric mowers
                </span>
              </div>
            </div>
          </div>
          <div className="the-goat-container13">
            <div className="the-goat-container14">
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
                  className="the-goat-text10"
                >
                  A smarter construction material.
                </span>
              </animate-on-reveal>
              <span className="the-goat-text11">
                Our robot&apos;s frame, battery box, subframe, and other
                components are built from industrial-grade aluminum to save
                weight in an effort to increase battery life and increase the
                equipment&apos;s usable lifespan. The result is an electric
                mower that weighs less than comparable gas-powered mowers and
                contains far fewer components that would rust.
              </span>
            </div>
            <div className="the-goat-container15">
              <img
                alt="image"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/efef8529-cb8c-4290-996b-32527c0949bd-1400w.webp"
                srcSet="/efef8529-cb8c-4290-996b-32527c0949bd-1400w.webp 1200w, /efef8529-cb8c-4290-996b-32527c0949bd-tablet.webp 800w, /efef8529-cb8c-4290-996b-32527c0949bd-mobile.webp 480w"
                className="the-goat-image1"
              />
            </div>
          </div>
          <div className="the-goat-container16">
            <div className="the-goat-container17">
              <span className="the-goat-text12">The goat</span>
              <span className="the-goat-text13">700lb</span>
              <span className="the-goat-text14">
                <span>based on component weight</span>
                <br></br>
              </span>
            </div>
            <div className="the-goat-container18">
              <span className="the-goat-text17">Gas mower</span>
              <span className="the-goat-text18">900lb</span>
              <span className="the-goat-text19">
                <span>est, 180lb rider, 34&quot; stander</span>
                <br></br>
              </span>
            </div>
            <div className="the-goat-container19">
              <span className="the-goat-text22">
                <span>Electric competitor</span>
                <br></br>
              </span>
              <span className="the-goat-text25">1100lb</span>
              <span className="the-goat-text26">
                <span>electric 54&quot; autonomous stander</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="the-goat-container20">
            <div className="the-goat-container21">
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
                  className="the-goat-text29"
                >
                  The latest in sensor technology and obstacle avoidance.
                </span>
              </animate-on-reveal>
              <span className="the-goat-text30">
                We&apos;ve combined the latest in modern sensor technology with
                bleeding-edge AI and ML research to create a machine that is
                capable of mapping and localizing itself in a lawn. The machine
                will map a property the first time it arrives and is then able
                to recognize where it&apos;s at any time our skilled
                crew-members deploy it to that same property.
              </span>
              <div className="the-goat-container22">
                <span className="the-goat-text31">360 LiDAR</span>
                <span className="the-goat-text32">2x Stereo cameras</span>
                <span className="the-goat-text33">RTK GPS</span>
                <span className="the-goat-text34">2x IMUs</span>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .the-goat-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .the-goat-container01 {
            flex: 0 0 auto;
            width: 100vw;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .the-goat-text {
            color: rgb(255, 255, 255);
            width: 60vw;
            opacity: 1;
            z-index: 100;
            font-size: 65px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Raleway';
            font-weight: 500;
            line-height: 1.15;
            margin-left: var(--dl-space-space-sixunits);
            text-decoration: none;
          }
          .the-goat-text01 {
            color: rgb(255, 255, 255);
            width: 60vw;
            opacity: 1;
            z-index: 100;
            font-size: 30px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: 'Raleway';
            font-weight: 500;
            line-height: 1.15;
            margin-left: var(--dl-space-space-sixunits);
            text-decoration: none;
          }
          .the-goat-image {
            top: 0px;
            left: 0px;
            width: 100%;
            bottom: 0px;
            margin: auto;
            opacity: 0.5;
            position: absolute;
            object-fit: cover;
          }
          .the-goat-link {
            display: contents;
          }
          .the-goat-container02 {
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
          .the-goat-container02:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .the-goat-text02 {
            color: rgb(255, 255, 255);
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
          }
          .the-goat-icon {
            fill: #ffffff;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .the-goat-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .the-goat-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: flex-start;
            justify-content: center;
            background-color: #000000;
          }
          .the-goat-container05 {
            flex: 0 0 auto;
            width: 40vw;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .the-goat-container06 {
            flex: 0 0 auto;
            width: 40vw;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .the-goat-icon02 {
            fill: var(--dl-color-gray-white);
            width: 60%;
            height: 70%;
          }
          .the-goat-text03 {
            fill: var(--dl-color-gray-black);
            color: #000000;
            width: 70%;
            padding: var(--dl-space-space-twounits);
            font-size: 65px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            border-radius: 100px;
            background-color: var(--dl-color-ruminant-yellow);
          }
          .the-goat-container07 {
            flex: 0 0 auto;
            width: 40vw;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .the-goat-container08 {
            flex: 0 0 auto;
            width: 40vw;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .the-goat-text04 {
            fill: var(--dl-color-ruminant-yellow);
            color: var(--dl-color-ruminant-yellow);
            width: 100%;
            font-size: 65px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .the-goat-text05 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 22px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .the-goat-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .the-goat-icon04 {
            fill: var(--dl-color-success-700);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .the-goat-text06 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            height: auto;
            font-size: 26px;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .the-goat-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .the-goat-icon06 {
            fill: var(--dl-color-success-700);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .the-goat-text07 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            height: auto;
            font-size: 26px;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .the-goat-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .the-goat-icon08 {
            fill: var(--dl-color-success-700);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .the-goat-text08 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            height: auto;
            font-size: 26px;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .the-goat-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .the-goat-icon10 {
            fill: var(--dl-color-success-700);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .the-goat-text09 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            height: auto;
            font-size: 26px;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
          }
          .the-goat-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: flex-start;
            justify-content: center;
            background-color: #151515;
          }
          .the-goat-container14 {
            flex: 0 0 auto;
            width: 40vw;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .the-goat-text10 {
            fill: var(--dl-color-ruminant-salmon);
            color: var(--dl-color-ruminant-salmon);
            width: 100%;
            font-size: 65px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .the-goat-text11 {
            fill: var(--dl-color-gray-white);
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 30px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .the-goat-container15 {
            flex: 0 0 auto;
            width: 40vw;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .the-goat-image1 {
            width: 100%;
            height: auto;
            z-index: 99;
            align-self: flex-end;
            object-fit: cover;
          }
          .the-goat-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: #151515;
          }
          .the-goat-container17 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .the-goat-text12 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
          }
          .the-goat-text13 {
            fill: var(--dl-color-gray-700);
            color: var(--dl-color-gray-700);
            font-size: 70px;
            font-style: normal;
            font-weight: 700;
          }
          .the-goat-text14 {
            color: rgb(255, 255, 255);
          }
          .the-goat-container18 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .the-goat-text17 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
          }
          .the-goat-text18 {
            fill: var(--dl-color-gray-700);
            color: var(--dl-color-gray-700);
            font-size: 70px;
            font-style: normal;
            font-weight: 700;
          }
          .the-goat-text19 {
            color: rgb(255, 255, 255);
          }
          .the-goat-container19 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .the-goat-text22 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
          }
          .the-goat-text25 {
            fill: var(--dl-color-gray-700);
            color: var(--dl-color-gray-700);
            font-size: 70px;
            font-style: normal;
            font-weight: 700;
          }
          .the-goat-text26 {
            color: rgb(255, 255, 255);
          }
          .the-goat-container20 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            justify-content: center;
            background-color: #000000;
          }
          .the-goat-container21 {
            flex: 0 0 auto;
            width: 70vw;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .the-goat-text29 {
            fill: var(--dl-color-ruminant-yellow);
            color: var(--dl-color-ruminant-yellow);
            width: 100%;
            font-size: 65px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .the-goat-text30 {
            fill: var(--dl-color-gray-white);
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 30px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .the-goat-container22 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-left: 0px;
            justify-content: center;
          }
          .the-goat-text31 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            margin: var(--dl-space-space-unit);
            padding: var(--dl-space-space-twounits);
            font-size: 40px;
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: var(--dl-color-ruminant-salmon);
          }
          .the-goat-text32 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            margin: var(--dl-space-space-unit);
            padding: var(--dl-space-space-twounits);
            font-size: 40px;
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: var(--dl-color-ruminant-salmon);
          }
          .the-goat-text33 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            margin: var(--dl-space-space-unit);
            padding: var(--dl-space-space-twounits);
            font-size: 40px;
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: var(--dl-color-ruminant-salmon);
          }
          .the-goat-text34 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            margin: var(--dl-space-space-unit);
            padding: var(--dl-space-space-twounits);
            font-size: 40px;
            font-style: normal;
            font-weight: 800;
            border-radius: 16px;
            background-color: var(--dl-color-ruminant-salmon);
          }
          @media (max-width: 1200px) {
            .the-goat-container01 {
              width: 100vw;
              height: 100vh;
            }
            .the-goat-image {
              width: 100%;
              height: 120%;
            }
          }
          @media (max-width: 991px) {
            .the-goat-text {
              width: 80vw;
            }
            .the-goat-text01 {
              width: 80vw;
            }
            .the-goat-container04 {
              align-self: center;
              align-items: center;
              flex-direction: column;
            }
            .the-goat-container06 {
              width: 90vw;
            }
            .the-goat-container07 {
              width: 90vw;
            }
            .the-goat-container08 {
              width: 90vw;
            }
          }
          @media (max-width: 767px) {
            .the-goat-text {
              width: 90vw;
              margin-left: var(--dl-space-space-twounits);
            }
            .the-goat-text01 {
              width: 90vw;
              margin-left: var(--dl-space-space-twounits);
            }
            .the-goat-container13 {
              flex-direction: column;
            }
            .the-goat-container14 {
              width: 90vw;
            }
            .the-goat-container15 {
              width: 90vw;
            }
            .the-goat-container16 {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .the-goat-container22 {
              height: auto;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .the-goat-text {
              width: 100vw;
              font-size: 37px;
              font-style: normal;
              text-align: left;
              font-weight: 700;
              margin-left: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .the-goat-text01 {
              padding: var(--dl-space-space-unit);
              font-size: 30px;
              text-align: left;
              margin-left: 0px;
            }
            .the-goat-container04 {
              padding: var(--dl-space-space-unit);
            }
            .the-goat-text03 {
              width: 100%;
            }
            .the-goat-container13 {
              padding: var(--dl-space-space-unit);
            }
            .the-goat-container20 {
              padding: var(--dl-space-space-unit);
            }
            .the-goat-container21 {
              width: 90vw;
            }
          }
        `}
      </style>
    </>
  )
}

export default TheGoat
