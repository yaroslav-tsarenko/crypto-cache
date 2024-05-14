import { FunctionComponent, useMemo, CSSProperties } from "react";
import styles from "./FrameComponent10.module.css";

export type FrameComponent10Type = {
  reliable?: string;
  performance1?: string;
  expert?: string;
  support?: string;
  security?: string;
  assured?: string;

  /** Style props */
  propDebugCommit?: CSSProperties;
  propDebugCommit1?: CSSProperties;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
                                                                     reliable,
                                                                     performance1,
                                                                     expert,
                                                                     support,
                                                                     security,
                                                                     assured,
                                                                     propDebugCommit,
                                                                     propDebugCommit1,
                                                                   }) => {
  const iconTickStyle: CSSProperties = useMemo(() => {
    return {
      ...propDebugCommit,
    };
  }, [propDebugCommit]);

  const securityAssuredStyle: CSSProperties = useMemo(() => {
    return {
      ...propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.iconTickWrapper}>
            <img
                className={styles.iconTick}
                loading="lazy"
                alt=""
                src="/icontick.svg"
            />
          </div>
          <b className={styles.reliablePerformance}>
            <p className={styles.reliable}>{reliable}</p>
            <p className={styles.performance}>{performance1}</p>
          </b>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.iconTickContainer}>
            <img className={styles.iconTick1} alt="" src="/icontick.svg" />
          </div>
          <b className={styles.expertSupport}>
            <p className={styles.expert}>{expert}</p>
            <p className={styles.support}>{support}</p>
          </b>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.iconTickFrame}>
            <img
                className={styles.iconTick2}
                alt=""
                src="/icontick.svg"
                style={iconTickStyle}
            />
          </div>
          <b className={styles.securityAssured} style={securityAssuredStyle}>
            <p className={styles.security}>{security}</p>
            <p className={styles.assured}>{assured}</p>
          </b>
        </div>
      </div>
  );
};

export default FrameComponent10;