import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import NavBar6 from "../components/NavBar6";
import PackageGrid from "../components/PackageGrid";
import Footer1 from "../components/Footer1";
import styles from "./Credit.module.css";

const Credit: FunctionComponent = () => {
  return (
    <div className={styles.credit}>
      <div className={styles.banner}>
        <b className={styles.enjoyPromotionalDiscount}>
          Enjoy Promotional Discount of up to 40% till October 25, 2023.
        </b>
      </div>
      <NavBar6 frameDivTop="0" frameDivPosition="sticky" />
      <section className={styles.creditsInfo}>
        <div className={styles.creditWrapper}>
          <h1 className={styles.credit1}>Credit</h1>
        </div>
      </section>
      <section className={styles.packageSorter}>
        <div className={styles.sorterParent}>
          <div className={styles.sorter}>
            <div className={styles.hostingPackages}>Credit Packages</div>
            <div className={styles.sortDropdown}>
              <div className={styles.sortBy}>Sort by</div>
              <FormControl
                className={styles.defaultOption}
                variant="standard"
                sx={{
                  borderColor: "#727274",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "4px",
                  width: "71.14624505928853%",
                  height: "40px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "40px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "40px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "40px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "40px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#727274",
                    fontSize: 14,
                    fontWeight: "Regular",
                    fontFamily: "Montserrat",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "16px",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="24px"
                      height="24px"
                      src="/icondropdown.svg"
                      style={{ marginRight: "16px" }}
                    />
                  )}
                >
                  <MenuItem>Default Sorting</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <PackageGrid />
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default Credit;
