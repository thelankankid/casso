import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** A small worded label, e.g. an environment ("production") or a state ("Operational"). Never colour alone. */
export function Chip({ tone, children }) {
    return _jsx("span", { className: tone ? `casso-chip casso-chip--${tone}` : "casso-chip", children: children });
}
/**
 * The signed-out screen every app shares: a quiet centred card with the wordmark (and an optional chip beside it),
 * one line of context, then the actions (children: a primary `casso-btn`, any secondary option), and a way back.
 */
export function SignInCard({ wordmark, chip, lead, back, children, }) {
    return (_jsx("main", { className: "casso-signin", children: _jsxs("div", { className: "casso-signin__card", children: [_jsxs("div", { className: "casso-signin__head", children: [wordmark, chip] }), lead && _jsx("p", { className: "casso-signin__lead", children: lead }), _jsx("div", { className: "casso-signin__body", children: children }), back && (_jsx("div", { className: "casso-signin__foot", children: _jsx("a", { href: back.href, children: back.label }) }))] }) }));
}
