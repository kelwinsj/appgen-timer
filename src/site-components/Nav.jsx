"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-31":{"id":"e-31","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1652797951486},"e-37":{"id":"e-37","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-591"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"abad23f6-3206-d95e-518e-2548f4c46996","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"abad23f6-3206-d95e-518e-2548f4c46996","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626169409644},"e-38":{"id":"e-38","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-394"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"abad23f6-3206-d95e-518e-2548f4c46996","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"abad23f6-3206-d95e-518e-2548f4c46996","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626169409644}},"actionLists":{"a-8":{"id":"a-8","title":"Page Load Animation","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".container-large","selectorGuids":["c77711fc-064f-968b-c37e-34ea035c78ba"]},"value":0,"unit":""}},{"id":"a-8-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-container","selectorGuids":["1f821828-e335-e9c8-a79d-5a8da6b48c77"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":1000,"target":{"selector":".container-large","selectorGuids":["c77711fc-064f-968b-c37e-34ea035c78ba"]},"value":1,"unit":""}},{"id":"a-8-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":1000,"target":{"selector":".nav-container","selectorGuids":["1f821828-e335-e9c8-a79d-5a8da6b48c77"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1652797963886},"a-9":{"id":"a-9","title":"Nav [Open]","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-top","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d8"]},"yValue":5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-9-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-bottom","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d6"]},"yValue":-6,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-9-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-bottom","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d6"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-9-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-top","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d8"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626225663494},"a-10":{"id":"a-10","title":"Nav [Close]","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-top","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d8"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-10-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-bottom","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d6"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-10-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-bottom","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d6"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-10-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-top","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d8"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626226496146}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Nav(
    {
        as: _Component = _Builtin.NavbarWrapper,
        navLinkText = "Features",
        imageImage = "",
        actions = true,
        secondaryAction = true,
        primaryAction = true
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component
            className="nav"
            data-w-id="abad23f6-3206-d95e-518e-2548f4c46996"
            tag="div"
            data-collapse="medium"
            data-animation="default"
            data-duration="400"
            fs-scrolldisable-element="smart-nav"
            config={{
                animation: "default",
                easing: "ease",
                easing2: "ease",
                duration: 400,
                docHeight: false,
                collapse: "medium",
                noScroll: false
            }}><_Builtin.Block className="nav-container" tag="div"><_Builtin.Block className="logo-wrapper" tag="div"><_Builtin.NavbarBrand
                        className="logo"
                        options={{
                            href: "https://new-age-2878c2.webflow.io/"
                        }}><_Builtin.Block className="heading regular" tag="div">{"Assemble"}</_Builtin.Block></_Builtin.NavbarBrand></_Builtin.Block><_Builtin.NavbarMenu
                    className="nav-menu"
                    id="w-node-abad23f6-3206-d95e-518e-2548f4c4699b-f4c46996"
                    tag="nav"
                    role="navigation"><_Builtin.Block tag="div"><_Builtin.NavbarLink
                            className="nav-link"
                            options={{
                                href: "https://new-age-2878c2.webflow.io#067e7898-7435-cf9e-e24f-846988d547e6"
                            }}>{"About"}</_Builtin.NavbarLink></_Builtin.Block><_Builtin.NavbarLink
                        className="nav-link"
                        options={{
                            href: "https://new-age-2878c2.webflow.io#82b2cbea-c8be-30b1-b257-dfadea639c02"
                        }}>{"Speakers"}</_Builtin.NavbarLink><_Builtin.NavbarLink
                        className="nav-link"
                        options={{
                            href: "https://new-age-2878c2.webflow.io#55cd7191-a5fc-4fdd-6dfa-d99841885743"
                        }}>{"Schedule"}</_Builtin.NavbarLink><_Builtin.NavbarLink
                        className="nav-link"
                        options={{
                            href: "https://new-age-2878c2.webflow.io#fa9b8a4c-abe8-ae4b-0262-d80a52ec3799"
                        }}>{"FAQ"}</_Builtin.NavbarLink></_Builtin.NavbarMenu><_Builtin.Block
                    className="actions-wrapper"
                    id="w-node-abad23f6-3206-d95e-518e-2548f4c469b0-f4c46996"
                    tag="div"><_Builtin.Link
                        className="button-secondary small hide-mobile-portrait"
                        button={true}
                        block=""
                        options={{
                            href: "#"
                        }}>{"Register for free →"}</_Builtin.Link><_Builtin.NavbarButton className="nav-menu-button" tag="div"><_Builtin.Block className="menu-icon" tag="div"><_Builtin.Block className="menu-icon-line-top" tag="div" /><_Builtin.Block className="menu-icon-line-bottom" tag="div" /></_Builtin.Block></_Builtin.NavbarButton></_Builtin.Block></_Builtin.Block><_Builtin.Block className="nav-gradient-underline" tag="div" /></_Component>
    );
}