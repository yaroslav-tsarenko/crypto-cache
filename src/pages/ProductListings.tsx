import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import FrameComponent5 from "../components/FrameComponent5";
import Product2 from "../components/Product2";
import Product1 from "../components/Product1";
import Footer from "../components/Footer";
import styles from "./ProductListings.module.css";

const ProductListings: FunctionComponent = () => {
  return (
    <div className={styles.productListings}>
      <div className={styles.banner}>
        <b className={styles.enjoyPromotionalDiscount}>
          Enjoy Promotional Discount of up to 40% till October 25, 2023.
        </b>
      </div>
      <NavBar navItemsDebugCommit={{ display: "unset" }} navItemsBackgroundColor="#f0f0f2" />
      <section className={styles.productListingsInner}>
        <div className={styles.exploreAllServersWrapper}>
          <h1 className={styles.exploreAllServers}>Explore All Servers</h1>
        </div>
      </section>
      <section className={styles.productListingsChild}>
        <div className={styles.frameParent}>
          <FrameComponent5 />
          <div className={styles.frameGroup}>
            <div className={styles.productParent}>
              <Product2
                hostingPackageForServer50="Hosting Package for Server 500-1000W"
                prop="$120.00 - $1500.00"
              />
              <Product1
                hostingPackageForServer50="Hosting Package for Server 500-1500W"
                pricingContainers="$1200.00 - $15000.00"
                propWidth="unset"
                propBackgroundImage="url('/product-image3@3x.png')"
                propMinWidth="154px"
              />
              <Product1
                hostingPackageForServer50="Hosting Package for Server 1500-3000W"
                pricingContainers="$2000.00 - $20000.00"
                propWidth="unset"
                propBackgroundImage="url('/product-image3@3x.png')"
                propMinWidth="154px"
              />
            </div>
            <div className={styles.paginationWrapper}>
              <div className={styles.pagination}>
                <div className={styles.style1}>
                  <div className={styles.numbers}>
                    <div className={styles.frameContainer}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameChild} />
                        <img
                          className={styles.vectorIcon}
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.frameItem} />
                        <div className={styles.div}>1</div>
                      </div>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.frameInner} />
                        <div className={styles.div1}>2</div>
                      </div>
                      <div className={styles.groupDiv}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.div2}>3</div>
                      </div>
                      <div className={styles.rectangleParent1}>
                        <div className={styles.frameChild1} />
                        <div className={styles.div3}>4</div>
                      </div>
                      <img
                        className={styles.groupIcon}
                        loading="lazy"
                        alt=""
                        src="/group-1000002074@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductListings;
