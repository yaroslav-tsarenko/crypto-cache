import { FunctionComponent } from "react";
import NavBar6 from "./NavBar6";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.bannerParent}>
      <div className={styles.banner}>
        <b className={styles.enjoyPromotionalDiscount}>
          Enjoy Promotional Discount of up to 40% till October 25, 2023.
        </b>
      </div>
      <NavBar6 />
    </div>
  );
};

export default Header;
