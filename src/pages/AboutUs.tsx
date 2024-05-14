import { FunctionComponent } from "react";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import Footer from "../components/Footer";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <FrameComponent8 />
      <main className={styles.aboutUsInner}>
        <section className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.welcomeToCryptocacheYourTParent}>
              <div className={styles.welcomeToCryptocacheContainer}>
                <p className={styles.welcomeToCryptocache}>
                  Welcome to CryptoCache, your trusted partner in the world of
                  cryptocurrency mining. At CryptoCache, we are more than just a
                  hosting service; we're the culmination of years of experience,
                  expertise, and a passionate commitment to the world of digital
                  currencies.
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.watchTheVideo}>
                  Watch the video to learn more.
                </p>
              </div>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/frame-1000003445.svg"
              />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.ourMissionParent}>
                <h1 className={styles.ourMission}>Our Mission</h1>
                <div className={styles.ourMissionIs}>
                  Our mission is clear: to provide cryptocurrency miners with a
                  secure, efficient, and reliable environment that maximizes
                  their mining potential. We understand the challenges that
                  cryptocurrency enthusiasts face – the constant need for
                  security, efficiency, and uptime. It's our dedication to
                  addressing these challenges that sets us apart.
                </div>
              </div>
            </div>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/rectangle-4561@2x.png"
            />
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/rectangle-4562@2x.png"
            />
            <div className={styles.frameDiv}>
              <div className={styles.whoWeAreParent}>
                <h1 className={styles.whoWeAre}>Who We Are</h1>
                <div className={styles.cryptocacheWasFounded}>
                  CryptoCache was founded by a team of cryptocurrency experts
                  and data center professionals. Our founders shared a common
                  vision - to create a hosting service that meets the unique
                  demands of cryptocurrency mining. We bring together a wealth
                  of knowledge in blockchain technology, data center management,
                  and security measures to offer you the best possible mining
                  experience.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper1}>
              <div className={styles.whatSetsUsApartParent}>
                <h1 className={styles.whatSetsUs}>What Sets Us Apart</h1>
                <div className={styles.atCryptocacheWe}>
                  At CryptoCache, we believe it's not enough to be just another
                  hosting service. What sets us apart is our unwavering
                  commitment to our customers. We've invested in cutting-edge
                  technology, advanced security measures, and energy-efficient
                  cooling systems to ensure your mining equipment is protected
                  and operating at peak efficiency. With a 99.9% uptime
                  guarantee and a focus on privacy, we provide a complete
                  solution for miners of all levels.
                </div>
              </div>
            </div>
            <img
              className={styles.rectangleIcon}
              loading="lazy"
              alt=""
              src="/rectangle-4563@2x.png"
            />
          </div>
          <FrameComponent7 />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
