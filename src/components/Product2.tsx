import { FunctionComponent } from "react";
import styles from "./Product2.module.css";

export type Product2Type = {
  hostingPackageForServer50?: string;
  prop?: string;
};

const Product2: FunctionComponent<Product2Type> = ({
  hostingPackageForServer50,
  prop,
}) => {
  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
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
        <b className={styles.hostingPackageFor}>{hostingPackageForServer50}</b>
        <div className={styles.vatApplicableOn}>
          20% VAT applicable on UK based orders
        </div>
        <b className={styles.b}>{prop}</b>
      </div>
    </div>
  );
};

export default Product2;
