import { FunctionComponent } from "react";
import styles from "./Footer1.module.css";

const Footer1: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerContent}>
          <div className={styles.logo}>
            <img
              className={styles.akarIconscoin}
              alt=""
              src="/akariconscoin-1.svg"
            />
            <h1 className={styles.cryptocache}>CryptoCache</h1>
          </div>
          <div className={styles.cryptoCacheAll}>
            ©2023 Crypto Cache. All Rights Reserved.
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.linkColumns}>
            <b className={styles.quickLinks}>Quick Links</b>
            <div className={styles.links}>
              <div className={styles.home}>Home</div>
              <div className={styles.ourServices}>Our Services</div>
              <div className={styles.blog}>Blog</div>
              <div className={styles.aboutUs}>About Us</div>
            </div>
          </div>
          <div className={styles.linkColumns1}>
            <b className={styles.resources}>Resources</b>
            <div className={styles.links1}>
              <div className={styles.cryptoDevelopment}>Crypto Development</div>
              <div className={styles.ourServers}>Our Servers</div>
              <div className={styles.ourProducts}>Our Products</div>
              <div className={styles.userStrategy}>User Strategy</div>
            </div>
          </div>
          <div className={styles.linkColumns2}>
            <b className={styles.company}>Company</b>
            <div className={styles.links2}>
              <div className={styles.whatWeDo}>What We Do</div>
              <div className={styles.contactSupport}>{`Contact & Support`}</div>
              <div className={styles.successHistory}>Success History</div>
              <div className={styles.settingPrivacy}>{`Setting & Privacy`}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerChild} />
      <div className={styles.footerBottom}>
        <div className={styles.legalSocial}>
          <div className={styles.legalParent}>
            <div className={styles.legal}>Legal</div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.cookiesPolicy}>Cookies Policy</div>
          </div>
        </div>
        <div className={styles.social}>
          <img
            className={styles.facebookIcon}
            loading="lazy"
            alt=""
            src="/facebook.svg"
          />
          <img
            className={styles.twitterIcon}
            loading="lazy"
            alt=""
            src="/twitter.svg"
          />
          <img
            className={styles.youtubeIcon}
            loading="lazy"
            alt=""
            src="/youtube.svg"
          />
          <img
            className={styles.behanchIcon}
            loading="lazy"
            alt=""
            src="/behanch.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
