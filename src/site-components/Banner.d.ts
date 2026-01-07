import * as React from "react";
import * as Types from "./types";

declare function Banner(
    props: {
        as?: React.ElementType;
        textSpanOverride?: React.ReactNode;
    }
): React.JSX.Element