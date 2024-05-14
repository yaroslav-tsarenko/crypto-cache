import { FunctionComponent } from "react";
import BlogListing from "./BlogListing";
import styles from "./FrameComponent19.module.css";

const FrameComponent19: FunctionComponent = () => {
  return (
    <div className={styles.readMoreParent}>
      <h1 className={styles.readMore}>Read More</h1>
      <div className={styles.blogListingParent}>
        <BlogListing
          rectangle4553="/rectangle-4553@2x.png"
          theRoleOfFullNodesInBlock="The Role of Full Nodes in Blockchain: What You Need to Know"
          avatar="/avatar@2x.png"
          kennedyJackson="Kennedy Jackson"
          propMinWidth="123px"
          blogListingMinWidth="unset"
        />
        <BlogListing
          rectangle4553="/rectangle-4553-1@2x.png"
          theRoleOfFullNodesInBlock="Cryptocurrency and The Environmental Debate, from the beginning"
          avatar="/avatar-1@2x.png"
          kennedyJackson="John Winter"
          propMinWidth="87px"
          blogListingMinWidth="unset"
        />
        <BlogListing
          rectangle4553="/rectangle-4553-2@2x.png"
          theRoleOfFullNodesInBlock="Choosing the Right Hardware for Cryptocurrency Mining"
          avatar="/avatar@2x.png"
          kennedyJackson="Kennedy Jackson"
          propMinWidth="123px"
          blogListingMinWidth="unset"
        />
      </div>
    </div>
  );
};

export default FrameComponent19;
