import { FunctionComponent } from "react";
import styles from "./Product6.module.css";

export type Product6Type = {
  hostingPackageForServer50?: string;
  prop?: string;
};

const Product6: FunctionComponent<Product6Type> = ({
  hostingPackageForServer50,
  prop,
}) => {
  return (
    <div className={styles.product}>
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

export default Product6;
