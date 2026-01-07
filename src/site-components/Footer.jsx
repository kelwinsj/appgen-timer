"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-31":{"id":"e-31","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1652797951486}},"actionLists":{"a-8":{"id":"a-8","title":"Page Load Animation","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".container-large","selectorGuids":["c77711fc-064f-968b-c37e-34ea035c78ba"]},"value":0,"unit":""}},{"id":"a-8-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-container","selectorGuids":["1f821828-e335-e9c8-a79d-5a8da6b48c77"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":1000,"target":{"selector":".container-large","selectorGuids":["c77711fc-064f-968b-c37e-34ea035c78ba"]},"value":1,"unit":""}},{"id":"a-8-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":1000,"target":{"selector":".nav-container","selectorGuids":["1f821828-e335-e9c8-a79d-5a8da6b48c77"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1652797963886}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer(
    {
        as: _Component = _Builtin.Block
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component className="section secondary" tag="section"><_Builtin.Block className="container-large" tag="div"><_Builtin.Block className="footer-flex-container-top" tag="div"><_Builtin.Block className="footer-column" tag="div"><_Builtin.NavbarBrand
                            className="logo"
                            options={{
                                href: "https://new-age-2878c2.webflow.io/"
                            }}><_Builtin.Block className="heading regular" tag="div">{"Assemble"}</_Builtin.Block></_Builtin.NavbarBrand></_Builtin.Block><_Builtin.Block className="footer-column middle" tag="div"><_Builtin.Link
                            className="footer-link"
                            button={false}
                            block=""
                            options={{
                                href: "https://new-age-2878c2.webflow.io#067e7898-7435-cf9e-e24f-846988d547e6"
                            }}>{"About"}</_Builtin.Link><_Builtin.Link
                            className="footer-link"
                            button={false}
                            block=""
                            options={{
                                href: "https://new-age-2878c2.webflow.io#82b2cbea-c8be-30b1-b257-dfadea639c02"
                            }}>{"Speakers"}</_Builtin.Link><_Builtin.Link
                            className="footer-link"
                            button={false}
                            block=""
                            options={{
                                href: "https://new-age-2878c2.webflow.io#55cd7191-a5fc-4fdd-6dfa-d99841885743"
                            }}>{"Schedule"}</_Builtin.Link><_Builtin.Link
                            className="footer-link"
                            button={false}
                            block=""
                            options={{
                                href: "https://new-age-2878c2.webflow.io#fa9b8a4c-abe8-ae4b-0262-d80a52ec3799"
                            }}>{"FAQ"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="footer-column right" tag="div"><_Builtin.Link
                            className="footer-link"
                            button={false}
                            block=""
                            options={{
                                href: "https://x.com/",
                                target: "_blank"
                            }}>{"X (Twitter)"}</_Builtin.Link><_Builtin.Link
                            className="footer-link"
                            button={false}
                            block=""
                            options={{
                                href: "https://www.instagram.com/",
                                target: "_blank"
                            }}>{"Instagram"}</_Builtin.Link><_Builtin.Link
                            className="footer-link"
                            button={false}
                            block=""
                            options={{
                                href: "https://www.linkedin.com/",
                                target: "_blank"
                            }}>{"LinkedIn"}</_Builtin.Link></_Builtin.Block></_Builtin.Block><_Builtin.Block className="grid-footer-bottom" tag="div"><_Builtin.Block className="footer-column" tag="div"><_Builtin.Link
                            className="footer-link small"
                            button={false}
                            block=""
                            options={{
                                href: "#"
                            }}>{"Style guide"}</_Builtin.Link><_Builtin.Link
                            className="footer-link small"
                            button={false}
                            block=""
                            options={{
                                href: "#"
                            }}>{"Licenses"}</_Builtin.Link><_Builtin.Link
                            className="footer-link small"
                            button={false}
                            block=""
                            options={{
                                href: "#"
                            }}>{"Changelog"}</_Builtin.Link><_Builtin.Link
                            className="footer-link small"
                            button={false}
                            block=""
                            options={{
                                href: "/404"
                            }}>{"404"}</_Builtin.Link></_Builtin.Block><_Builtin.Block className="footer-column right" tag="div"><_Builtin.Link
                            className="footer-link small"
                            button={false}
                            block=""
                            options={{
                                href: "#",
                                target: "_blank"
                            }}>{"Built by Bryn Taylor"}</_Builtin.Link><_Builtin.Link
                            className="footer-link small"
                            button={false}
                            block=""
                            options={{
                                href: "#",
                                target: "_blank"
                            }}>{"View all templates"}</_Builtin.Link><_Builtin.Link
                            className="footer-link small"
                            button={false}
                            block=""
                            options={{
                                href: "#",
                                target: "_blank"
                            }}>{"Powered by Webflow"}</_Builtin.Link></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component>
    );
}