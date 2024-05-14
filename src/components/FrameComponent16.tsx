import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent10 from "./FrameComponent10";
import Accordion from "./Accordion";
import styles from "./FrameComponent16.module.css";

const FrameComponent16: FunctionComponent = () => {
  return (
    <section className={styles.productDetailPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-4549@2x.png"
          />
          <FrameComponent10
              reliable="Reliable"
              performance1="Performance"
              expert="Expert"
              support="Support"
              security="Peace of"
              assured="Mind"
              propDebugCommit={{ display: "unset" }}
              propDebugCommit1={{ display: "unset" }}
          />
        </div>
        <div className={styles.frequentlyAskedQuestionsFaParent}>
          <h1 className={styles.frequentlyAskedQuestionsContainer}>
            <p className={styles.frequentlyAskedQuestions}>
              Frequently Asked Questions
            </p>
            <p className={styles.faq}>(FAQ)</p>
          </h1>
          <div className={styles.accordionParent}>
            <Accordion
              accordionHeader="Why should I choose this hosting package?"
              thisHostingPackageIsDesig="Our package provides a secure and efficient environment for your mining hardware. With advanced security features, reliability, and optimized cooling, it maximizes your mining efficiency and profitability."
            />
            <Accordion
              accordionHeader="What security measures are in place to protect my equipment and assets?"
              thisHostingPackageIsDesig="CryptoCache takes security seriously. We employ biometric access, video surveillance, and robust encryption to ensure the protection of your mining equipment and digital assets."
            />
            <Accordion
              accordionHeader="How does the 24/7 monitoring work?"
              thisHostingPackageIsDesig="Our monitoring system keeps a constant watch on your mining operations, allowing us to promptly address any issues that may arise. This minimizes downtime and helps maintain uninterrupted mining."
            />
            <Accordion
              accordionHeader="What is the uptime guarantee for this package?"
              thisHostingPackageIsDesig="We guarantee a 99.9% uptime, ensuring reliable and continuous mining operations, even in the dynamic cryptocurrency market."
            />
            <TextField
              className={styles.accordion}
              placeholder="Is my privacy protected?"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/iconplus-1.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#2e2d2d" },
                "& .MuiInputBase-root": {
                  height: "60px",
                  paddingLeft: "16px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": {
                  paddingLeft: "16px",
                  color: "#2e2d2d",
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent16;
