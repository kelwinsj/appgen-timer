"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SiteBtNs } from "./SiteBtNs";

export function HomePage(
    {
        as: _Component = _Builtin.Section,
        title = "h2",
        headingText = "Heading"
    }
) {
    return (
        <_Component
            grid={{
                type: "section"
            }}
            tag="section"><_Builtin.BlockContainer
                grid={{
                    type: "container"
                }}
                tag="div"><_Builtin.NotSupported _atom="DynamoWrapper" /></_Builtin.BlockContainer></_Component>
    );
}