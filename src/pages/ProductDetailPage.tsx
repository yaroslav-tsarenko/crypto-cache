import { FunctionComponent } from "react";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent14 from "../components/FrameComponent14";
import FrameComponent15 from "../components/FrameComponent15";
import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent17 from "../components/FrameComponent17";
import Footer from "../components/Footer";
import styles from "./ProductDetailPage.module.css";

const ProductDetailPage: FunctionComponent = () => {
  return (
    <div className={styles.productDetailPage}>
      <FrameComponent11 />
      <FrameComponent12 />
      <FrameComponent13 />
      <FrameComponent14 />
      <FrameComponent15 />
      <FrameComponent16 />
      <FrameComponent17 />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
