import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FortifiedSecurityContainers from "./FortifiedSecurityContainers";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.peaceOfMindContentWrapper}>
      <div className={styles.peaceOfMindContent}>
        <div className={styles.securityFocusContainers}>
          <FortifiedSecurityContainers
            fortifiedSecurityForYourP="Fortified Security for Your Peace"
            ofMind="of Mind"
            atCryptoCacheSecurityIsMo="At CryptoCache, security is more than a priority; it's our foundation. We've invested in advanced security measures to ensure your cryptocurrency mining hardware and digital assets are protected at all times. Our multi-layered security approach includes biometric access, video surveillance, and robust encryption, creating an impenetrable fortress for your investments. When you choose CryptoCache, you're choosing peace of mind and a level of security that sets us apart from the rest."
          />
          <img
            className={styles.efficiencyContainersIcon}
            loading="lazy"
            alt=""
            src="/rectangle-4554@2x.png"
          />
        </div>
        <div className={styles.securityFocusContainers1}>
          <img
            className={styles.securityFocusContainersChild}
            alt=""
            src="/rectangle-4554-1@2x.png"
          />
          <FortifiedSecurityContainers
            fortifiedSecurityForYourP="Maximizing Efficiency for Maximum "
            ofMind="Profit"
            atCryptoCacheSecurityIsMo="CryptoCache is your partner in efficiency, helping you squeeze every ounce of profit from your mining operations. Our cutting-edge cooling systems maintain optimal mining conditions while reducing energy consumption. With a strong commitment to energy efficiency, you not only save on operational costs but also contribute to a more environmentally responsible mining operation. When it comes to efficiency, CryptoCache is not just a hosting service; we're your pathway to maximum profitability in the cryptocurrency world."
            propPadding="85px 0px 0px"
            propWidth="687px"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.stayInformedJoinOurNewsleParent}>
            <h1 className={styles.stayInformedJoin}>
              Stay Informed. Join Our Newsletter.
            </h1>
            <div className={styles.dontMissOut}>
              Don't miss out on the latest developments in the cryptocurrency
              world. Subscribe to the CryptoCache newsletter to receive regular
              updates, industry insights, and exclusive offers directly in your
              inbox. Our newsletter is your gateway to staying informed about
              the ever-evolving crypto landscape. Join our community of
              cryptocurrency enthusiasts and get ready to unlock a world of
              knowledge and opportunities. Subscribe today and be at the
              forefront of the cryptocurrency revolution.
            </div>
          </div>
          <div className={styles.newsletterSignup}>
            <TextField
              className={styles.input}
              placeholder="Enter your email"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "56px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                },
                "& .MuiInputBase-input": { color: "#d2cece" },
              }}
            />
            <Button
              className={styles.button}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#2e2d2d",
                fontSize: "16",
                background: "#fff",
                borderRadius: "8px",
                "&:hover": { background: "#fff" },
                width: 140,
                height: 56,
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
