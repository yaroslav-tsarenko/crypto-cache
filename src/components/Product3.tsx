import { FunctionComponent } from "react";
import styles from "./Product3.module.css";

const Product3: FunctionComponent = () => {
  return (
    <div className={styles.product}>
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
        <b className={styles.hostingPackageFor}>
          Hosting Package for Server 500-1000W
        </b>
        <div className={styles.vatApplicableOn}>
          20% VAT applicable on UK based orders
        </div>
        <b className={styles.b}>$120.00 - $1500.00</b>
      </div>
    </div>
  );
};

export default Product3;
