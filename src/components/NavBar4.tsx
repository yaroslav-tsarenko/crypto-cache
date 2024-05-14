import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./NavBar4.module.css";

const NavBar4: FunctionComponent = () => {
  return (
    <header className={styles.navBar}>
      <div className={styles.logo}>
        <img
          className={styles.akarIconscoin}
          loading="lazy"
          alt=""
          src="/akariconscoin.svg"
        />
        <div className={styles.cryptocacheWrapper}>
          <h1 className={styles.cryptocache}>CryptoCache</h1>
        </div>
      </div>
      <nav className={styles.navItems}>
        <div className={styles.navItem}>
          <b className={styles.navLink}>Home</b>
        </div>
        <div className={styles.navItem1}>
          <div className={styles.navLink1}>Server Spaces</div>
        </div>
        <div className={styles.navItem2}>
          <div className={styles.navLink2}>Credit</div>
        </div>
        <div className={styles.navItem3}>
          <div className={styles.navLink3}>About Us</div>
        </div>
        <div className={styles.navItem4}>
          <div className={styles.navLink4}>Blogs</div>
        </div>
        <div className={styles.navItem5}>
          <div className={styles.navLink5}>Contact</div>
        </div>
      </nav>
      <div className={styles.navBarInner}>
        <div className={styles.frameParent}>
          <div className={styles.buttonParent}>
            <button className={styles.button}>
              <div className={styles.buttonLabel}>Log In</div>
              <img
                className={styles.arrowNarrowRightIcon}
                alt=""
                src="/arrownarrowright.svg"
              />
            </button>
            <Button
              className={styles.button1}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#2e2d2d",
                borderRadius: "8px",
                "&:hover": { background: "#2e2d2d" },
                height: 40,
              }}
            >
              Sign Up
            </Button>
          </div>
          <img
            className={styles.iconBag}
            loading="lazy"
            alt=""
            src="/iconbag.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar4;
