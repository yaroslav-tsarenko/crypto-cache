import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Product.module.css";

export type ProductType = {
  hostingPackageForServer50?: string;
  prop?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const Product: FunctionComponent<ProductType> = ({
  hostingPackageForServer50,
  prop,
  propWidth,
}) => {
  const product1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.product} style={product1Style}>
      <div className={styles.productImage}>
        <div className={styles.z2010w301n001172bp11NoParent}>
          <div className={styles.z2010w301n001172bp11No} />
          <div className={styles.z2010w301n001172bp11No1} />
        </div>
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
        <b className={styles.hostingPackageFor}>{hostingPackageForServer50}</b>
        <div className={styles.vatApplicableOn}>
          20% VAT applicable on UK based orders
        </div>
        <b className={styles.b}>{prop}</b>
      </div>
    </div>
  );
};

export default Product;
