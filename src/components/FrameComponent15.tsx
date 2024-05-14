import { FunctionComponent } from "react";
import FrameComponent10 from "./FrameComponent10";
import styles from "./FrameComponent15.module.css";

const FrameComponent15: FunctionComponent = () => {
  return (
    <section className={styles.productDetailPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.designedToMeetTheDiverseNWrapper}>
          <div className={styles.designedToMeet}>
            Designed to meet the diverse needs of crypto miners, traders, and
            enthusiasts, our server hosting package is the cornerstone of
            successful cryptocurrency operations. With state-of-the-art
            technology, optimal performance, and robust security features, our
            servers are engineered to ensure your crypto endeavors run
            seamlessly. Whether you're looking to maximize mining efficiency or
            require low-latency trading capabilities, our hosting solution
            provides the flexibility and customization options you need. Join a
            global community of satisfied users who trust Crypto Cache for their
            crypto hosting needs. It's time to elevate your crypto journey with
            our top-tier hosting package.
          </div>
        </div>
        <FrameComponent10
          reliable="Reliable"
          performance1="Performance"
          expert="Expert"
          support="Support"
          security="Security"
          assured="Assured"
        />
      </div>
    </section>
  );
};

export default FrameComponent15;
