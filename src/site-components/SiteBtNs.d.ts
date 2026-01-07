import * as React from "react";
import * as Types from "./types";

declare function SiteBtNs(
    props: {
        as?: React.ElementType;
        link?: Types.Basic.Link;
        buttonText?: React.ReactNode;
    }
): React.JSX.Element