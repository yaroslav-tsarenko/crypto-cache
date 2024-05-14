import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import Footer from "../components/Footer";
import styles from "./CancellationPolicy.module.css";

const CancellationPolicy: FunctionComponent = () => {
  return (
    <div className={styles.cancellationPolicy}>
      <Header />
      <div className={styles.cancellationPolicyInner}>
        <div className={styles.cancellationPolicyWrapper}>
          <h1 className={styles.cancellationPolicy1}>Cancellation Policy</h1>
        </div>
      </div>
      <main className={styles.cancellationPolicyChild}>
        <section className={styles.frameParent}>
          <FrameComponent6 />
          <FrameComponent7 />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CancellationPolicy;
