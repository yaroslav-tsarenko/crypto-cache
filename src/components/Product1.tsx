import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Product1.module.css";

export type Product1Type = {
  hostingPackageForServer50?: string;
  pricingContainers?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Product1: FunctionComponent<Product1Type> = ({
  hostingPackageForServer50,
  pricingContainers,
  propWidth,
  propBackgroundImage,
  propMinWidth,
}) => {
  const productStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const productImageStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const singleBadgeContainersStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.product} style={productStyle}>
      <div className={styles.productImage} style={productImageStyle}>
        <button className={styles.tags}>
          <div className={styles.sellerBadgeContainers}>
            <img
              className={styles.emojiLightningSymbol}
              alt=""
              src="/-emoji-lightning-symbol.svg"
            />
          </div>
          <div className={styles.bestSeller}>Best Seller</div>
        </button>
        <div
          className={styles.singleBadgeContainers}
          style={singleBadgeContainersStyle}
        >
          <div className={styles.z2010w301n001172bp11No} />
        </div>
      </div>
      <div className={styles.hostingDetailsContainers}>
        <div className={styles.hostingPackage}>Hosting Package</div>
        <b className={styles.hostingPackageFor}>{hostingPackageForServer50}</b>
        <div className={styles.vatApplicableOn}>
          20% VAT applicable on UK based orders
        </div>
        <b className={styles.pricingContainers}>{pricingContainers}</b>
      </div>
    </div>
  );
};

export default Product1;
