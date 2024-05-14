import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BlogListing.module.css";

export type BlogListingType = {
  rectangle4553?: string;
  theRoleOfFullNodesInBlock?: string;
  avatar?: string;
  kennedyJackson?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  blogListingMinWidth?: CSSProperties["minWidth"];
};

const BlogListing: FunctionComponent<BlogListingType> = ({
  rectangle4553,
  theRoleOfFullNodesInBlock,
  avatar,
  kennedyJackson,
  propMinWidth,
  blogListingMinWidth,
}) => {
  const kennedyJacksonStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const blogListingStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: blogListingMinWidth,
    };
  }, [blogListingMinWidth]);

  return (
    <div className={styles.blogListing} style={blogListingStyle}>
      <img
        className={styles.blogListingChild}
        loading="lazy"
        alt=""
        src={rectangle4553}
      />
      <div className={styles.frameParent}>
        <div className={styles.theRoleOfFullNodesInBlocWrapper}>
          <b className={styles.theRoleOf}>{theRoleOfFullNodesInBlock}</b>
        </div>
        <div className={styles.avatarParent}>
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src={avatar}
          />
          <div className={styles.kennedyJacksonParent}>
            <div className={styles.kennedyJackson} style={kennedyJacksonStyle}>
              {kennedyJackson}
            </div>
            <div className={styles.supportingText}>
              Oct 10, 2023 · 6 min read
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
