import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import Product1 from "./Product1";
import Product from "./Product";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.ourFeaturedServersWrapper}>
            <h1 className={styles.ourFeaturedServers}>Our Featured Servers</h1>
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
              width: 127,
              height: 56,
            }}
          >
            View All
          </Button>
        </div>
        <div className={styles.cardContainerParent}>
          <div className={styles.cardContainer}>
            <Product1
              hostingPackageForServer50="Hosting Package for Server 500-1000W"
              pricingContainers="$120.00 - $1500.00"
            />
            <Product
              hostingPackageForServer50="Hosting Package for Server 500-1500W"
              prop="$1200.00 - $15000.00"
            />
            <div className={styles.product}>
              <div className={styles.productImage}>
                <button className={styles.tags}>
                  <div className={styles.emojiLightningSymbolWrapper}>
                    <img
                      className={styles.emojiLightningSymbol}
                      alt=""
                      src="/-emoji-lightning-symbol.svg"
                    />
                  </div>
                  <div className={styles.bestSeller}>Best Seller</div>
                </button>
              </div>
              <div className={styles.hostingPackageParent}>
                <div className={styles.hostingPackage}>Hosting Package</div>
                <b className={styles.hostingPackageFor}>
                  Hosting Package for Server 1500-3000W
                </b>
                <div className={styles.vatApplicableOn}>
                  20% VAT applicable on UK based orders
                </div>
                <b className={styles.b}>$2000.00 - $20000.00</b>
              </div>
            </div>
            <Product1
              hostingPackageForServer50="Hosting Package for Server 3000-5000W"
              pricingContainers="$10000.00 - $25000.00"
              propWidth="360px"
              propBackgroundImage="url('/product-image3@3x.png')"
              propMinWidth="unset"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.settingTheGoldStandardInSParent}>
                <h1 className={styles.settingTheGoldContainer}>
                  <p className={styles.settingTheGold}>
                    Setting the Gold Standard in
                  </p>
                  <p className={styles.serverSecurityAnd}>
                    Server Security and Efficiency
                  </p>
                </h1>
                <div className={styles.atCryptocacheWe}>
                  At CryptoCache, we take pride in being a cut above the rest.
                  What sets us apart is our unwavering commitment to both
                  security and efficiency. While other server providers may
                  offer one or the other, we believe in delivering both. Our
                  state-of-the-art server spaces are fortified with advanced
                  security measures, providing a level of protection that's
                  second to none in the industry. In addition, our
                  energy-efficient cooling systems not only ensure optimal
                  conditions for your mining equipment but also help you save on
                  operational costs. It's this unique combination of
                  cutting-edge security and energy efficiency that makes
                  CryptoCache the ideal choice for cryptocurrency miners who
                  demand the best. Join us today and experience the difference
                  for yourself. Your success in cryptocurrency mining begins
                  here.
                </div>
                <div className={styles.buttonParent}>
                  <Button
                    className={styles.button1}
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
                    View Servers
                  </Button>
                  <Button
                    className={styles.button2}
                    disableElevation={true}
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#2e2d2d",
                      fontSize: "16",
                      borderColor: "#2e2d2d",
                      borderRadius: "8px",
                      "&:hover": { borderColor: "#2e2d2d" },
                      width: 155,
                      height: 56,
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <img
                className={styles.image11Icon}
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
