import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent7.module.css";

const FrameComponent7: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.joinTheCryptocacheCommunityWrapper}>
        <h1 className={styles.joinTheCryptocache}>
          Join the CryptoCache Community
        </h1>
      </div>
      <div className={styles.weInviteYouContainer}>
        <p className={styles.weInviteYou}>
          We invite you to become part of the CryptoCache community and
          experience the difference. Whether you're just starting in
          cryptocurrency mining or you're a seasoned professional, we're here to
          support your success. Your journey to secure, efficient, and
          profitable cryptocurrency mining begins with CryptoCache.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.welcomeToCryptocache}>
          Welcome to CryptoCache, where your mining potential meets its true
          destination.
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          className={styles.button}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#2e2d2d",
            fontSize: "16",
            background: "#fff",
            borderRadius: "8px",
            "&:hover": { background: "#fff" },
            width: 153,
            height: 56,
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default FrameComponent7;
