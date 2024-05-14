import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent9.module.css";

export type FrameComponent9Type = {
  useOfServices?: string;
  eligibility?: string;
  toUseOurServicesYouMustBe?: string;
  accountCreation?: string;
  someOfOurServicesMayRequi?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  useOfServices,
  eligibility,
  toUseOurServicesYouMustBe,
  accountCreation,
  someOfOurServicesMayRequi,
  propDisplay,
}) => {
  const useOfServicesContainerStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={styles.useOfServicesParent}>
      <h2
        className={styles.useOfServicesContainer}
        style={useOfServicesContainerStyle}
      >
        <ol className={styles.useOfServices}>
          <li>{useOfServices}</li>
        </ol>
      </h2>
      <div className={styles.pleaseReadThese}>
        Please read these Terms carefully before using our services. Your use of
        our services indicates your acceptance of these Terms and your agreement
        to comply with them. If you do not agree with any part of these Terms,
        you may not use our services.
      </div>
      <div className={styles.frameParent}>
        <div className={styles.eligibilityParent}>
          <h3 className={styles.eligibility}>{eligibility}</h3>
          <div className={styles.toUseOur}>{toUseOurServicesYouMustBe}</div>
        </div>
        <div className={styles.accountCreationParent}>
          <h3 className={styles.accountCreation}>{accountCreation}</h3>
          <div className={styles.someOfOur}>{someOfOurServicesMayRequi}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
