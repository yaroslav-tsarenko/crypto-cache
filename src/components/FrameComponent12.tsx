import { FunctionComponent } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./FrameComponent12.module.css";

const FrameComponent12: FunctionComponent = () => {
  return (
    <section className={styles.productDetailPageInner}>
      <div className={styles.productImageParent}>
        <div className={styles.productImage}>
          <div className={styles.z2010w301n001172bp11No} />
          <div className={styles.tags}>
            <img
              className={styles.emojiLightningSymbol}
              alt=""
              src="/-emoji-lightning-symbol.svg"
            />
            <div className={styles.bestSeller}>Best Seller</div>
          </div>
        </div>
        <div className={styles.hostingPackageParent}>
          <div className={styles.hostingPackage}>Hosting Package</div>
          <div className={styles.hostingPackageForServerParent}>
            <h1 className={styles.hostingPackageFor}>
              Hosting Package for Server
            </h1>
            <b className={styles.w1500w}>1000W - 1500W</b>
          </div>
          <div className={styles.parent}>
            <b className={styles.b}>$500 - $1500</b>
            <div className={styles.vatApplicableOn}>
              20% VAT applicable on UK based orders
            </div>
          </div>
          <div className={styles.unlockPeakEfficiency}>
            Unlock peak efficiency and security for your 1000-1500W mining
            server with CryptoCache's Hosting Package.Our package includes
            advanced security features, 24/7 monitoring, energy-efficient
            cooling, and a 99.9% uptime guarantee, all designed to optimize your
            mining efficiency and protect your investments. Choose CryptoCache
            for a secure, efficient, and profitable mining experience.
          </div>
          <div className={styles.timeParent}>
            <div className={styles.time}>
              <b className={styles.selectTime}>Select Time</b>
              <div className={styles.time1}>
                <Button
                  className={styles.timeChild}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#2e2d2d",
                    borderRadius: "4px",
                    "&:hover": { background: "#2e2d2d" },
                    width: 118,
                    height: 56,
                  }}
                >
                  Hourly
                </Button>
                <Button
                  className={styles.timeItem}
                  disableElevation={true}
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#727274",
                    fontSize: "16",
                    borderColor: "#727274",
                    borderRadius: "4px",
                    "&:hover": { borderColor: "#727274" },
                    width: 104,
                    height: 56,
                  }}
                >
                  Daily
                </Button>
                <Button
                  className={styles.timeInner}
                  disableElevation={true}
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#727274",
                    fontSize: "16",
                    borderColor: "#727274",
                    borderRadius: "4px",
                    "&:hover": { borderColor: "#727274" },
                    height: 56,
                  }}
                >
                  Monthly
                </Button>
              </div>
            </div>
            <div className={styles.durationParent}>
              <b className={styles.duration}>Duration</b>
              <FormControl
                className={styles.group}
                variant="standard"
                sx={{
                  borderColor: "#727274",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "4px",
                  width: "100%",
                  height: "56px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "56px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "56px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "56px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "56px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#727274",
                    fontSize: 16,
                    fontWeight: "Regular",
                    fontFamily: "Montserrat",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "32px",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="24px"
                      height="24px"
                      src="/icondropdown.svg"
                      style={{ marginRight: "32px" }}
                    />
                  )}
                >
                  <MenuItem>2 hours</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.quantityParent}>
              <b className={styles.quantity}>Quantity</b>
              <div className={styles.iconPlusParent}>
                <img
                  className={styles.iconPlus}
                  loading="lazy"
                  alt=""
                  src="/iconplus.svg"
                />
                <div className={styles.div}>3</div>
                <img
                  className={styles.iconMinus}
                  loading="lazy"
                  alt=""
                  src="/iconminus.svg"
                />
              </div>
            </div>
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
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
