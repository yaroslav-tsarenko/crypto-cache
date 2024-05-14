import { FunctionComponent } from "react";
import NavBar3 from "../components/NavBar3";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent7 from "../components/FrameComponent7";
import Footer from "../components/Footer";
import styles from "./TermsAndConditions.module.css";

const TermsAndConditions: FunctionComponent = () => {
  return (
    <div className={styles.termsAndConditions}>
      <div className={styles.banner}>
        <b className={styles.enjoyPromotionalDiscount}>
          Enjoy Promotional Discount of up to 40% till October 25, 2023.
        </b>
      </div>
      <NavBar3 />
      <div className={styles.termsAndConditionsInner}>
        <div className={styles.termsAndConditionsWrapper}>
          <h1 className={styles.termsAndConditions1}>Terms and Conditions</h1>
        </div>
      </div>
      <main className={styles.termsAndConditionsChild}>
        <section className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.welcomeToCryptoCacheTheseParent}>
              <div
                className={styles.welcomeToCrypto}
              >{`Welcome to Crypto Cache! These Terms and Conditions ("Terms") govern your use of our website, products, and services. By accessing or using any part of our website or services, you agree to abide by these Terms.  `}</div>
              <div className={styles.acceptanceOfTermsParent}>
                <h2 className={styles.acceptanceOfTermsContainer}>
                  <ol className={styles.acceptanceOfTerms}>
                    <li>Acceptance of Terms</li>
                  </ol>
                </h2>
                <div className={styles.pleaseReadThese}>
                  Please read these Terms carefully before using our services.
                  Your use of our services indicates your acceptance of these
                  Terms and your agreement to comply with them. If you do not
                  agree with any part of these Terms, you may not use our
                  services.
                </div>
              </div>
              <FrameComponent9
                useOfServices="Use of Services"
                eligibility="2.1 Eligibility"
                toUseOurServicesYouMustBe="To use our services, you must be at least 18 years old and capable of forming a binding contract. By using our services, you represent and warrant that you meet these eligibility requirements."
                accountCreation="2.2 Account Creation"
                someOfOurServicesMayRequi="Some of our services may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account."
              />
              <div className={styles.privacyPolicyParent}>
                <h2 className={styles.privacyPolicy}>
                  <ol className={styles.privacyPolicy1}>
                    <li>Privacy Policy</li>
                  </ol>
                </h2>
                <div className={styles.ourPrivacyPolicy}>
                  Our Privacy Policy governs the collection, use, and sharing of
                  your personal information when you use our services. By using
                  our services, you consent to the practices described in our
                  Privacy Policy.
                </div>
              </div>
              <FrameComponent9
                useOfServices="Intellectual Property"
                eligibility="4.1 Ownership"
                toUseOurServicesYouMustBe="All content, materials, and intellectual property on our website and within our services are owned or licensed by Crypto Cache. You may not use, reproduce, or distribute any of our content without our express written permission."
                accountCreation="4.2 Trademarks"
                someOfOurServicesMayRequi=" Any trademarks, logos, or service marks displayed on our website are the property of [Your Company Name] or their respective owners. You may not use these marks without our prior written consent or the consent of the respective owners."
                propDisplay="inline-block"
              />
              <div className={styles.serviceAvailabilityParent}>
                <h2 className={styles.serviceAvailability}>
                  <ol className={styles.serviceAvailability1}>
                    <li>Service Availability</li>
                  </ol>
                </h2>
                <div className={styles.weStriveTo}>
                  We strive to provide reliable services, but we do not
                  guarantee uninterrupted or error-free operation of our website
                  or services. We reserve the right to modify or discontinue our
                  services at any time without notice.
                </div>
              </div>
              <div className={styles.userConductParent}>
                <h2 className={styles.userConduct}>
                  <ol className={styles.userConduct1}>
                    <li>User Conduct</li>
                  </ol>
                </h2>
                <div className={styles.youAgreeTo}>
                  You agree to use our services for lawful purposes and in
                  compliance with these Terms. You may not engage in any
                  activity that violates applicable laws or infringes on the
                  rights of others.
                </div>
              </div>
              <div className={styles.terminationParent}>
                <h2 className={styles.termination}>
                  <ol className={styles.termination1}>
                    <li>Termination</li>
                  </ol>
                </h2>
                <div className={styles.weReserveThe}>
                  We reserve the right to terminate or suspend your access to
                  our services at our discretion, without prior notice, for any
                  violation of these Terms or for any other reason.
                </div>
              </div>
              <div className={styles.limitationOfLiabilityParent}>
                <h2 className={styles.limitationOfLiabilityContainer}>
                  <ol className={styles.limitationOfLiability}>
                    <li>Limitation of Liability</li>
                  </ol>
                </h2>
                <div className={styles.toTheFullest}>
                  To the fullest extent permitted by law, Crypto Cache and its
                  affiliates shall not be liable for any direct, indirect,
                  incidental, consequential, or punitive damages arising from
                  your use of our services.
                </div>
              </div>
              <div className={styles.governingLawParent}>
                <h2 className={styles.governingLaw}>
                  <ol className={styles.governingLaw1}>
                    <li>Governing Law</li>
                  </ol>
                </h2>
                <div className={styles.theseTermsAre}>
                  These Terms are governed by and construed in accordance with
                  the laws of [Your Jurisdiction]. Any disputes arising from
                  these Terms or your use of our services shall be subject to
                  the exclusive jurisdiction of the courts of law.
                </div>
              </div>
              <div className={styles.contactUsParent}>
                <h2 className={styles.contactUs}>
                  <ol className={styles.contactUs1}>
                    <li>Contact Us</li>
                  </ol>
                </h2>
                <div className={styles.ifYouHaveContainer}>
                  <p className={styles.ifYouHave}>
                    If you have any questions or concerns about these Terms or
                    our services, please contact us at Crypto Cache.
                  </p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.thankYouFor}>
                    Thank you for choosing Crypto Cache.
                  </p>
                  <p className={styles.weHopeYou}>
                    {" "}
                    We hope you enjoy our services and find them valuable for
                    your crypto endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent7 />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
