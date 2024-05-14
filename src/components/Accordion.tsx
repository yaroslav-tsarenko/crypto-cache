import { FunctionComponent } from "react";
import styles from "./Accordion.module.css";

export type AccordionType = {
  accordionHeader?: string;
  thisHostingPackageIsDesig?: string;
};

const Accordion: FunctionComponent<AccordionType> = ({
  accordionHeader,
  thisHostingPackageIsDesig,
}) => {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader}>
        <div className={styles.iconMinusParent}>
          <img className={styles.iconMinus} alt="" src="/iconminus-1.svg" />
          <b className={styles.accordionHeader1}>{accordionHeader}</b>
        </div>
        <img className={styles.accordionHeaderChild} alt="" src="/line-2.svg" />
      </div>
      <div className={styles.thisHostingPackage}>
        {thisHostingPackageIsDesig}
      </div>
    </div>
  );
};

export default Accordion;
