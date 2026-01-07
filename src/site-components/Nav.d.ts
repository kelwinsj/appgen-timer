import * as React from "react";
import * as Types from "./types";

declare function Nav(
    props: {
        as?: React.ElementType;
        navLinkText?: React.ReactNode;
        imageImage?: Types.Asset.Image;
        actions?: Types.Visibility.VisibilityConditions;
        secondaryAction?: Types.Visibility.VisibilityConditions;
        primaryAction?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element