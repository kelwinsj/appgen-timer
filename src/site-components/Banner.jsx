"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-31":{"id":"e-31","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1652797951486}},"actionLists":{"a-8":{"id":"a-8","title":"Page Load Animation","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".container-large","selectorGuids":["c77711fc-064f-968b-c37e-34ea035c78ba"]},"value":0,"unit":""}},{"id":"a-8-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-container","selectorGuids":["1f821828-e335-e9c8-a79d-5a8da6b48c77"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":1000,"target":{"selector":".container-large","selectorGuids":["c77711fc-064f-968b-c37e-34ea035c78ba"]},"value":1,"unit":""}},{"id":"a-8-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":1000,"target":{"selector":".nav-container","selectorGuids":["1f821828-e335-e9c8-a79d-5a8da6b48c77"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1652797963886}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Banner(
    {
        as: _Component = _Builtin.Link,
        textSpanOverride = "A Webflow template for SaaS startups·"
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component
            className="section banner"
            button={false}
            block="inline"
            options={{
                href: "https://www.bryntaylor.co.uk/platform/webflow?ref=template",
                target: "_blank"
            }}><_Builtin.Block className="container-large" tag="div"><_Builtin.Block className="text-color-accent" tag="div">{"A Webflow template for tech conferences·"}<_Builtin.Strong>{"View all templates"}</_Builtin.Strong></_Builtin.Block></_Builtin.Block></_Component>
    );
}