import { FunctionComponent } from "react";
import NavBar4 from "./NavBar4";
import styles from "./FrameComponent11.module.css";

const FrameComponent11: FunctionComponent = () => {
  return (
    <section className={styles.bannerParent}>
      <div className={styles.banner}>
        <b className={styles.enjoyPromotionalDiscount}>
          Enjoy Promotional Discount of up to 40% till October 25, 2023.
        </b>
      </div>
      <NavBar4 />
      <div className={styles.serverDetailsWrapper}>
        <h1 className={styles.serverDetails}>Server Details</h1>
      </div>
    </section>
  );
};

export default FrameComponent11;
