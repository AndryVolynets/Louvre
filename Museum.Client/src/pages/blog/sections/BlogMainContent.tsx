import React, { ReactNode } from "react";
import { IBlogMain } from "../../../types/interfaces/IBlogMain";

function BlogMainContent(props: IBlogMain ) {
    const { children } = props;

    return (
        <div className="col-lg-8 post-list blog-post-list">
            {children}
        </div>
    );
}

export default BlogMainContent;
export { }