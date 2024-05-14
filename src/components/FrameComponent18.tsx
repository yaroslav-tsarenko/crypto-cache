import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent18.module.css";

const FrameComponent18: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.tagsParent}>
        <Button
          className={styles.tags}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#2e2d2d",
            fontSize: "12",
            borderColor: "#2e2d2d",
            borderRadius: "8px",
            "&:hover": { borderColor: "#2e2d2d" },
            width: 119,
            height: 36,
          }}
        >
          Featured
        </Button>
        <div className={styles.october6}>October 6 , 2023</div>
        <h2 className={styles.understandingProofOf}>
          Understanding Proof of Work and Proof of Stake in Cryptocurrency
        </h2>
        <b className={styles.sarahMiller}>Sarah Miller</b>
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
            width: 147,
            height: 56,
          }}
        >
          Read Now
        </Button>
      </div>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/rectangle-4564@2x.png"
      />
    </div>
  );
};

export default FrameComponent18;
