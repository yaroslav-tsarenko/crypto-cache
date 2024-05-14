import { FunctionComponent } from "react";
import CreditPack from "./CreditPack";
import styles from "./PackageGrid.module.css";

const PackageGrid: FunctionComponent = () => {
  return (
    <div className={styles.packageGrid}>
      <div className={styles.packItems}>
        <CreditPack
          frame1000003055Placeholde="100"
          creditCount="100"
          bonusValues="100"
        />
        <CreditPack
          frame1000003055Placeholde="200"
          creditCount="200"
          bonusValues="200"
          propPadding="unset"
          propMinWidth="47px"
          propMinWidth1="36px"
        />
        <CreditPack
          frame1000003055Placeholde="300"
          creditCount="300"
          bonusValues="300"
          propPadding="unset"
          propMinWidth="47px"
          propMinWidth1="36px"
        />
        <CreditPack
          frame1000003055Placeholde="400"
          creditCount="400"
          bonusValues="400"
          propPadding="0px 20px"
          propMinWidth="50px"
          propMinWidth1="37px"
        />
        <CreditPack
          frame1000003055Placeholde="500"
          creditCount="500"
          bonusValues="500"
          propPadding="unset"
          propMinWidth="47px"
          propMinWidth1="36px"
        />
        <CreditPack
          frame1000003055Placeholde="600"
          creditCount="600"
          bonusValues="600"
          propPadding="0px 20px"
          propMinWidth="48px"
          propMinWidth1="36px"
        />
        <CreditPack
          frame1000003055Placeholde="700"
          creditCount="700"
          bonusValues="700"
          propPadding="unset"
          propMinWidth="47px"
          propMinWidth1="36px"
        />
        <CreditPack
          frame1000003055Placeholde="800"
          creditCount="800"
          bonusValues="800"
          propPadding="0px 20px"
          propMinWidth="49px"
          propMinWidth1="37px"
        />
        <CreditPack
          frame1000003055Placeholde="900"
          creditCount="900"
          bonusValues="900"
          propPadding="0px 20px"
          propMinWidth="48px"
          propMinWidth1="36px"
        />
        <CreditPack
          frame1000003055Placeholde="1000"
          creditCount="1000"
          bonusValues="1000"
          propPadding="0px 20px"
          propMinWidth="59px"
          propMinWidth1="44px"
        />
        <CreditPack
          frame1000003055Placeholde="1100"
          creditCount="1100"
          bonusValues="1100"
          propPadding="0px 20px"
          propMinWidth="52px"
          propMinWidth1="39px"
        />
        <CreditPack
          frame1000003055Placeholde="1200"
          creditCount="1200"
          bonusValues="1200"
          propPadding="0px 20px"
          propMinWidth="57px"
          propMinWidth1="43px"
        />
      </div>
      <div className={styles.paginator}>
        <div className={styles.pagination}>
          <div className={styles.style1}>
            <div className={styles.numbers}>
              <div className={styles.frameParent}>
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
  );
};

export default PackageGrid;
