import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InnerSecurityContainers.module.css";

export type InnerSecurityContainersType = {
  iCONSHIELD?: string;
  advancedSecurityMeasures?: string;
  atCryptoCacheYourSecurity?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propOverflow?: CSSProperties["overflow"];
  propDisplay?: CSSProperties["display"];
};

const InnerSecurityContainers: FunctionComponent<
  InnerSecurityContainersType
> = ({
  iCONSHIELD,
  advancedSecurityMeasures,
  atCryptoCacheYourSecurity,
  propMinWidth,
  propOverflow,
  propDisplay,
}) => {
  const innerSecurityContainersStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const iCONSHIELDStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const advancedSecurityMeasuresStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div
      className={styles.innerSecurityContainers}
      style={innerSecurityContainersStyle}
    >
      <img
        className={styles.iconShield}
        alt=""
        src={iCONSHIELD}
        style={iCONSHIELDStyle}
      />
      <div className={styles.titleContainers}>
        <h3
          className={styles.advancedSecurityMeasures}
          style={advancedSecurityMeasuresStyle}
        >
          {advancedSecurityMeasures}
        </h3>
        <div className={styles.atCryptocacheYour}>
          {atCryptoCacheYourSecurity}
        </div>
      </div>
    </div>
  );
};

export default InnerSecurityContainers;
