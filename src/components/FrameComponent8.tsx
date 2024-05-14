import { FunctionComponent } from "react";
import NavBar2 from "./NavBar2";
import styles from "./FrameComponent8.module.css";

const FrameComponent8: FunctionComponent = () => {
  return (
    <div className={styles.bannerParent}>
      <div className={styles.banner}>
        <b className={styles.enjoyPromotionalDiscount}>
          Enjoy Promotional Discount of up to 40% till October 25, 2023.
        </b>
      </div>
      <NavBar2 />
      <div className={styles.aboutCryptoCacheWrapper}>
        <h1 className={styles.aboutCryptoCache}>About Crypto Cache</h1>
      </div>
    </div>
  );
};

export default FrameComponent8;
