import { FunctionComponent } from "react";
import NavBar6 from "../components/NavBar6";
import FrameComponent18 from "../components/FrameComponent18";
import BlogListing from "../components/BlogListing";
import Footer from "../components/Footer";
import styles from "./BlogsListings.module.css";

const BlogsListings: FunctionComponent = () => {
  return (
    <div className={styles.blogsListings}>
      <div className={styles.banner}>
        <b className={styles.enjoyPromotionalDiscount}>
          Enjoy Promotional Discount of up to 40% till October 25, 2023.
        </b>
      </div>
      <NavBar6 frameDivTop="0" frameDivPosition="sticky" />
      <div className={styles.blogsListingsInner}>
        <div className={styles.exploreBlogsWrapper}>
          <h1 className={styles.exploreBlogs}>Explore Blogs</h1>
        </div>
      </div>
      <main className={styles.blogsListingsChild}>
        <section className={styles.frameParent}>
          <FrameComponent18 />
          <div className={styles.blogListingParent}>
            <BlogListing
              rectangle4553="/rectangle-4553@2x.png"
              theRoleOfFullNodesInBlock="The Role of Full Nodes in Blockchain: What You Need to Know"
              avatar="/avatar@2x.png"
              kennedyJackson="Kennedy Jackson"
            />
            <BlogListing
              rectangle4553="/rectangle-4553-1@2x.png"
              theRoleOfFullNodesInBlock="Cryptocurrency and The Environmental Debate, from the beginning"
              avatar="/avatar-1@2x.png"
              kennedyJackson="John Winter"
              propMinWidth="87px"
              blogListingMinWidth="461px"
            />
            <BlogListing
              rectangle4553="/rectangle-4553-2@2x.png"
              theRoleOfFullNodesInBlock="Choosing the Right Hardware for Cryptocurrency Mining"
              avatar="/avatar@2x.png"
              kennedyJackson="Kennedy Jackson"
              propMinWidth="123px"
              blogListingMinWidth="461px"
            />
            <BlogListing
              rectangle4553="/rectangle-4553-3@2x.png"
              theRoleOfFullNodesInBlock="Security Best Practices for Storing and Managing Cryptocurrencies"
              avatar="/avatar@2x.png"
              kennedyJackson="Kennedy Jackson"
              propMinWidth="123px"
              blogListingMinWidth="461px"
            />
            <BlogListing
              rectangle4553="/rectangle-4553-4@2x.png"
              theRoleOfFullNodesInBlock="Exploring the World of Crypto Wallets: A Comprehensive Guide"
              avatar="/avatar-1@2x.png"
              kennedyJackson="Kennedy Jackson"
              propMinWidth="123px"
              blogListingMinWidth="461px"
            />
            <BlogListing
              rectangle4553="/rectangle-4553-5@2x.png"
              theRoleOfFullNodesInBlock="Deciphering the Crypto Jargon: Common Terms Explained"
              avatar="/avatar@2x.png"
              kennedyJackson="Kennedy Jackson"
              propMinWidth="123px"
              blogListingMinWidth="461px"
            />
            <BlogListing
              rectangle4553="/rectangle-4553-6@2x.png"
              theRoleOfFullNodesInBlock="Cryptocurrency Mining and Sustainability"
              avatar="/avatar@2x.png"
              kennedyJackson="Kennedy Jackson"
              propMinWidth="123px"
              blogListingMinWidth="461px"
            />
            <BlogListing
              rectangle4553="/rectangle-4553-7@2x.png"
              theRoleOfFullNodesInBlock="Ethereum 2.0: The Evolution of the Ethereum Network"
              avatar="/avatar-1@2x.png"
              kennedyJackson="Kennedy Jackson"
              propMinWidth="123px"
              blogListingMinWidth="461px"
            />
            <BlogListing
              rectangle4553="/rectangle-4553-8@2x.png"
              theRoleOfFullNodesInBlock="The Impact of Cryptocurrency on the Future of Finance"
              avatar="/avatar@2x.png"
              kennedyJackson="Kennedy Jackson"
              propMinWidth="123px"
              blogListingMinWidth="461px"
            />
          </div>
          <div className={styles.paginationWrapper}>
            <div className={styles.pagination}>
              <div className={styles.style1}>
                <div className={styles.numbers}>
                  <div className={styles.frameGroup}>
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsListings;
