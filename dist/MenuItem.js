import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Menu rows with no browser state, so a server component can render them (and pass its router Link as `as`).
/**
 * One row in the account menu: a link with an optional line icon and a quieter hint under the label.
 * `as` swaps the anchor for the app's router link (e.g. Next's Link) so the row navigates client-side.
 */
export function MenuItem({ href, label, hint, icon, current, as: Anchor = "a", }) {
    return (_jsxs(Anchor, { className: "casso-menu__item", href: href, "aria-current": current ? "page" : undefined, children: [icon, _jsx(RowText, { label: label, hint: hint })] }));
}
/** A hairline between groups of the app's own rows. */
export function MenuSeparator() {
    return _jsx("div", { className: "casso-menu__sep casso-menu__sep--inset", role: "separator" });
}
export function RowText({ label, hint }) {
    return (_jsxs("span", { children: [_jsx("span", { className: "casso-menu__label", children: label }), hint && _jsx("span", { className: "casso-menu__hint", children: hint })] }));
}
