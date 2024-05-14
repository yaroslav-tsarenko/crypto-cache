import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import NavBar from "./NavBar";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.navBarParent}>
        <NavBar />
        <div className={styles.frameWrapper}>
          <div className={styles.whereSecurityMeetsSuccessIParent}>
            <h1 className={styles.whereSecurityMeetsContainer}>
              <p className={styles.whereSecurityMeets}>
                Where Security Meets Success
              </p>
              <p className={styles.inCryptocurrencyMining}>
                in Cryptocurrency Mining
              </p>
            </h1>
            <div className={styles.cryptocacheIsYour}>
              CryptoCache is your gateway to the future of cryptocurrency
              mining. Our secure and efficient server spaces are designed to
              help you succeed in the dynamic world of digital currencies. With
              cutting-edge technology, reliable uptime, and privacy protection,
              we provide the ultimate environment for your mining endeavors.
              Start your journey with CryptoCache and redefine your crypto
              mining experience.
            </div>
            <div className={styles.buttonParent}>
              <Button
                className={styles.button}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#2e2d2d",
                  borderRadius: "8px",
                  "&:hover": { background: "#2e2d2d" },
                  height: 56,
                }}
              >
                Get Started
              </Button>
              <Button
                className={styles.button1}
                disableElevation={true}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#2e2d2d",
                  fontSize: "16",
                  borderColor: "#2e2d2d",
                  borderRadius: "8px",
                  "&:hover": { borderColor: "#2e2d2d" },
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.image6NoBgWrapper}>
          <img
            className={styles.image6NoBg}
            alt=""
            src="/image-6-no-bg@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
