import { FunctionComponent } from "react";
import Product6 from "./Product6";
import Product7 from "./Product7";
import styles from "./FrameComponent17.module.css";

const FrameComponent17: FunctionComponent = () => {
  return (
    <section className={styles.productDetailPageInner}>
      <div className={styles.exploreSimilarProductsParent}>
        <h1 className={styles.exploreSimilarProducts}>
          Explore Similar Products
        </h1>
        <div className={styles.productParent}>
          <Product6
            hostingPackageForServer50="Hosting Package for Server 500-1500W"
            prop="$1200.00 - $15000.00"
          />
          <Product7 />
          <Product6
            hostingPackageForServer50="Hosting Package for Server 1500-3000W"
            prop="$2000.00 - $20000.00"
          />
          <Product7 />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent17;
