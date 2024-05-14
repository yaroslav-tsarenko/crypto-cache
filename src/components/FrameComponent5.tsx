import { FunctionComponent } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Product3 from "./Product3";
import Product2 from "./Product2";
import Product from "./Product";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.filterParent}>
        <div className={styles.filter}>
          <div className={styles.accordionHeader}>
            <div className={styles.categoriesParent}>
              <input
                className={styles.categories}
                placeholder="Categories"
                type="text"
              />
              <img className={styles.iconMinus} alt="" src="/iconminus.svg" />
            </div>
          </div>
          <div className={styles.accessories100Parent}>
            <div className={styles.accessories100}>Accessories (100)</div>
            <div className={styles.altCoinBuy}>Alt Coin Buy and Host (50)</div>
            <div className={styles.brands15}>Brands (15)</div>
            <div className={styles.gpuMiner20}>GPU Miner (20)</div>
            <div className={styles.hostingPackages25}>
              Hosting Packages (25)
            </div>
            <div className={styles.mmu10}>MMU (10)</div>
            <div className={styles.gpuMiner201}>GPU Miner (20)</div>
            <div className={styles.uncategorized40}>Uncategorized (40)</div>
          </div>
        </div>
        <div className={styles.priceFilter}>
          <div className={styles.accordionHeader1}>
            <div className={styles.priceRangeParent}>
              <b className={styles.priceRange}>Price Range</b>
              <div className={styles.iconMinusWrapper}>
                <img
                  className={styles.iconMinus1}
                  alt=""
                  src="/iconminus.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <div className={styles.div}>$10 - $50</div>
              <input className={styles.frameInput} type="checkbox" />
            </div>
            <div className={styles.group}>
              <div className={styles.div1}>$50 - $100</div>
              <input className={styles.frameInput1} type="checkbox" />
            </div>
            <div className={styles.container}>
              <div className={styles.div2}>$100 - $200</div>
              <input className={styles.frameInput2} type="checkbox" />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.div3}>$200 - $400</div>
              <div className={styles.checkboxWrapper}>
                <img
                  className={styles.checkboxIcon}
                  loading="lazy"
                  alt=""
                  src="/checkbox.svg"
                />
              </div>
            </div>
            <div className={styles.parent1}>
              <div className={styles.div4}>$400 - $600</div>
              <input className={styles.frameInput3} type="checkbox" />
            </div>
            <div className={styles.parent2}>
              <div className={styles.div5}>$600+</div>
              <input className={styles.frameInput4} type="checkbox" />
            </div>
          </div>
        </div>
        <div className={styles.buttonParent}>
          <Button
            className={styles.button}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#2e2d2d",
              borderRadius: "8px",
              "&:hover": { background: "#2e2d2d" },
              height: 40,
            }}
          >
            Filter
          </Button>
          <Button
            className={styles.button1}
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#2e2d2d",
              fontSize: "14",
              borderColor: "#2e2d2d",
              borderRadius: "8px",
              "&:hover": { borderColor: "#2e2d2d" },
            }}
          >
            Clear
          </Button>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.sorterParent}>
          <div className={styles.sorter}>
            <div className={styles.hostingPackages}>Hosting Packages</div>
            <div className={styles.sortByParent}>
              <div className={styles.sortBy}>Sort by</div>
              <FormControl
                className={styles.frameFormcontrol}
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
          <div className={styles.productParent}>
            <Product3 />
            <div className={styles.product}>
              <div className={styles.productImage}>
                <div className={styles.z2010w301n001172bp11NoParent}>
                  <div className={styles.z2010w301n001172bp11No} />
                  <div className={styles.z2010w301n001172bp11No1} />
                </div>
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
                  Hosting Package for Server 500-1500W
                </b>
                <div className={styles.vatApplicableOn}>
                  20% VAT applicable on UK based orders
                </div>
                <b className={styles.b}>$1200.00 - $15000.00</b>
              </div>
            </div>
            <Product2
              hostingPackageForServer50="Hosting Package for Server 1500-3000W"
              prop="$2000.00 - $20000.00"
            />
          </div>
        </div>
        <div className={styles.productGroup}>
          <Product
            hostingPackageForServer50="Hosting Package for Server 500-1500W"
            prop="$1200.00 - $15000.00"
            propWidth="unset"
          />
          <Product3 />
          <Product
            hostingPackageForServer50="Hosting Package for Server 1500-3000W"
            prop="$2000.00 - $20000.00"
            propWidth="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
