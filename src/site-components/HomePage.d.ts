import * as React from "react";
import * as Types from "./types";

declare function HomePage(
    props: {
        as?: React.ElementType;
        title?: Types.Basic.HeadingTag;
        headingText?: React.ReactNode;
    }
): React.JSX.Element