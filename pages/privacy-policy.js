import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const PrivacyPolicy = (props) => {
  return (
    <>
      <div className="privacy-policy-container">
        <Head>
          <title>Privacy-Policy - Ruminant</title>
          <meta
            name="description"
            content="Lawn care services utilizing purpose-built autonomous electric machines."
          />
          <meta property="og:title" content="Privacy-Policy - Ruminant" />
          <meta
            property="og:description"
            content="Lawn care services utilizing purpose-built autonomous electric machines."
          />
        </Head>
        <Header rootClassName="header-root-class-name4"></Header>
        <span className="privacy-policy-text">
          <span className="Heading">Privacy Policy</span>
          <br></br>
          <br></br>
          <span>Effective Date: July 22nd, 2023</span>
          <br></br>
          <br></br>
          <span>
            Our Company is committed to protecting your privacy. This Privacy
            Policy outlines how we collect, use, and protect your personal
            information. By accessing and using our services, you consent to the
            practices described in this policy.
          </span>
          <br></br>
          <br></br>
          <span>1. Information Collection and Use</span>
          <br></br>
          <br></br>
          <span>
            We may collect personal information that you voluntarily provide to
            us, such as your name, email address, contact information, and other
            data necessary for providing our services. We use this information
            solely for the purpose of delivering our services to you, improving
            your user experience, and responding to your inquiries.
          </span>
          <br></br>
          <br></br>
          <span>2. Cookies and Tracking Technologies</span>
          <br></br>
          <br></br>
          <span>
            We may use cookies and similar tracking technologies to enhance your
            browsing experience and gather information about how you interact
            with our website. These technologies help us analyze trends,
            administer the website, track users&apos; movements, and gather
            demographic information. However, we do not sell or share this data
            with third parties.
          </span>
          <br></br>
          <br></br>
          <span>3. Data Sharing</span>
          <br></br>
          <br></br>
          <span>
            We do not sell, rent, or lease your personal information to any
            third party without your explicit consent. We may share your data
            with trusted third-party service providers who assist us in
            operating our website or conducting our business. These providers
            are contractually obligated to keep your information confidential
            and use it only for the specific purposes we require.
          </span>
          <br></br>
          <br></br>
          <span>4. Compliance with Laws</span>
          <br></br>
          <br></br>
          <span>
            We comply with all applicable data protection and privacy laws,
            including but not limited to the General Data Protection Regulation
            (GDPR) and the California Consumer Privacy Act (CCPA). We respect
            your rights regarding your personal data and provide mechanisms to
            access, correct, or delete your information upon request.
          </span>
          <br></br>
          <br></br>
          <span>5. Consent</span>
          <br></br>
          <br></br>
          <span>
            By using our services, you consent to the collection, use, and
            sharing of your personal information as described in this Privacy
            Policy. You have the right to withdraw your consent at any time by
            contacting us at [email address or contact information].
          </span>
          <br></br>
          <br></br>
          <span>6. Data Security</span>
          <br></br>
          <br></br>
          <span>
            We take the security of your personal information seriously and
            employ appropriate measures to protect it from unauthorized access,
            disclosure, alteration, or destruction.
          </span>
          <br></br>
          <br></br>
          <span>7. Changes to this Policy</span>
          <br></br>
          <br></br>
          <span>
            We reserve the right to update this Privacy Policy as needed. Any
            changes will be posted on this page, and the effective date will be
            modified accordingly. We encourage you to review this Privacy Policy
            periodically.
          </span>
          <br></br>
          <br></br>
          <span>8. Contact Us</span>
          <br></br>
          <br></br>
          <span>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the use of your personal information, please
            contact us by emailing hello@ruminantrobotics.com.
          </span>
        </span>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .privacy-policy-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .privacy-policy-text {
            width: 80%;
            align-self: center;
            margin-top: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          @media (max-width: 479px) {
            .privacy-policy-text {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default PrivacyPolicy
