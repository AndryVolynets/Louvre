import React from "react";
import { IBlogLayout } from "../../../types/interfaces/IBlogLayout";

function BlogLayout(props: IBlogLayout) {
  const { children } = props;

  return (
    <div className="container">
      <div className="blog-posts-area section-gap pt-1">
        <div className="row">
          {children}
        </div>
      </div>
    </div>
  );
}

export default BlogLayout;
export { }