import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FortifiedSecurityContainers.module.css";

export type FortifiedSecurityContainersType = {
  fortifiedSecurityForYourP?: string;
  ofMind?: string;
  atCryptoCacheSecurityIsMo?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const FortifiedSecurityContainers: FunctionComponent<
  FortifiedSecurityContainersType
> = ({
  fortifiedSecurityForYourP,
  ofMind,
  atCryptoCacheSecurityIsMo,
  propPadding,
  propWidth,
}) => {
  const fortifiedSecurityContainersStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const fortifiedSecurityForContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={styles.fortifiedSecurityContainers}
      style={fortifiedSecurityContainersStyle}
    >
      <div className={styles.fortifiedSecurityContent}>
        <h1
          className={styles.fortifiedSecurityForContainer}
          style={fortifiedSecurityForContainerStyle}
        >
          <p className={styles.fortifiedSecurityFor}>
            {fortifiedSecurityForYourP}
          </p>
          <p className={styles.ofMind}>{ofMind}</p>
        </h1>
        <div className={styles.atCryptocacheSecurity}>
          {atCryptoCacheSecurityIsMo}
        </div>
      </div>
    </div>
  );
};

export default FortifiedSecurityContainers;
