import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductListings from "./pages/ProductListings";
import AboutUs from "./pages/AboutUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import ProductDetailPage from "./pages/ProductDetailPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import CancellationPolicy from "./pages/CancellationPolicy";
import BlogsListings from "./pages/BlogsListings";
import BlogsListings1 from "./pages/BlogsListings1";
import Credit from "./pages/Credit";
import Contact from "./pages/Contact";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-listings":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/terms-and-conditions":
        title = "";
        metaDescription = "";
        break;
      case "/product-detail-page":
        title = "";
        metaDescription = "";
        break;
      case "/privacy-policy":
        title = "";
        metaDescription = "";
        break;
      case "/refund-policy":
        title = "";
        metaDescription = "";
        break;
      case "/cancellation-policy":
        title = "";
        metaDescription = "";
        break;
      case "/blogs-listings":
        title = "";
        metaDescription = "";
        break;
      case "/blogs-listings1":
        title = "";
        metaDescription = "";
        break;
      case "/credit":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-listings" element={<ProductListings />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/product-detail-page" element={<ProductDetailPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      <Route path="/blogs-listings" element={<BlogsListings />} />
      <Route path="/blogs-listings1" element={<BlogsListings1 />} />
      <Route path="/credit" element={<Credit />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
export default App;
