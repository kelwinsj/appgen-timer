"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SiteBtNs(
    {
        as: _Component = _Builtin.Link,

        link = {
            href: "#"
        },

        buttonText = "Button Text"
    }
) {
    return <_Component className="test-btns" button={true} block="" options={link}>{buttonText}</_Component>;
}