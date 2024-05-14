import { FunctionComponent } from "react";
import NavBar6 from "../components/NavBar6";
import FrameComponent21 from "../components/FrameComponent21";
import Footer1 from "../components/Footer1";
import styles from "./Contact.module.css";

const Contact: FunctionComponent = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.banner}>
        <b className={styles.enjoyPromotionalDiscount}>
          Enjoy Promotional Discount of up to 40% till October 25, 2023.
        </b>
      </div>
      <NavBar6 frameDivTop="0" frameDivPosition="sticky" />
      <section className={styles.getInTouchWithUsParent}>
        <h1 className={styles.getInTouch}>Get In Touch with Us</h1>
        <div className={styles.wereHereTo}>
          We're here to assist you on every step of your cryptocurrency mining
          journey. If you have questions, need technical support, or want to
          explore partnership opportunities, don't hesitate to get in touch with
          our dedicated team.
        </div>
        <FrameComponent21 />
        <div className={styles.effective20230910}>Effective 2023/09/10</div>
      </section>
      <Footer1 />
    </div>
  );
};

export default Contact;
