import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./UptimeContainers.module.css";

export type UptimeContainersType = {
  iconCheckFilled?: string;
  reliableUptime?: string;
  cryptoCacheGuarantees999U?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const UptimeContainers: FunctionComponent<UptimeContainersType> = ({
  iconCheckFilled,
  reliableUptime,
  cryptoCacheGuarantees999U,
  propMinWidth,
}) => {
  const uptimeContainersStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.uptimeContainers} style={uptimeContainersStyle}>
      <div className={styles.innerUptimeContainers}>
        <img
          className={styles.iconCheckFilled}
          loading="lazy"
          alt=""
          src={iconCheckFilled}
        />
      </div>
      <div className={styles.uptimeTitles}>
        <b className={styles.reliableUptime}>{reliableUptime}</b>
      </div>
      <div className={styles.cryptocacheGuarantees999}>
        {cryptoCacheGuarantees999U}
      </div>
    </div>
  );
};

export default UptimeContainers;
