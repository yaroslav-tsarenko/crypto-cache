import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./CreditPack.module.css";

export type CreditPackType = {
  frame1000003055Placeholde?: string;
  creditCount?: string;
  bonusValues?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const CreditPack: FunctionComponent<CreditPackType> = ({
  frame1000003055Placeholde,
  creditCount,
  bonusValues,
  propPadding,
  propMinWidth,
  propMinWidth1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const creditCountStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const bonusValuesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.creditPack}>
      <textarea
        className={styles.creditPackChild}
        placeholder={frame1000003055Placeholde}
        rows={11}
        cols={18}
      />
      <div className={styles.creditPackInner} style={frameDivStyle}>
        <div className={styles.creditsDetailsParent}>
          <div className={styles.creditsDetails}>
            <b className={styles.creditCount} style={creditCountStyle}>
              {creditCount}
            </b>
            <h3 className={styles.credits}>Credits</h3>
          </div>
          <div className={styles.bonusDetailsWrapper}>
            <div className={styles.bonusDetails}>
              <b className={styles.bonusCount}>$</b>
              <b className={styles.bonusValues} style={bonusValuesStyle}>
                {bonusValues}
              </b>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              className={styles.button}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#2e2d2d",
                borderRadius: "8px",
                "&:hover": { background: "#2e2d2d" },
                height: 56,
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditPack;
