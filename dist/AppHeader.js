import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * The app header every app on Casso shares: the wordmark (a link home) on the left; the app's own links,
 * any small note, then the account menu on the right. Sticky, translucent, one hairline underneath.
 * No state, so it renders on the server.
 */
export function AppHeader({ wordmark, homeHref = "/", homeLabel, nav, linkAs: Anchor = "a", navRow = false, children, }) {
    return (_jsx("header", { className: navRow ? "casso-header casso-header--nav-row" : "casso-header", children: _jsxs("div", { className: "casso-header__inner", children: [_jsx(Anchor, { className: "casso-header__home", href: homeHref, "aria-label": homeLabel, children: wordmark }), _jsxs("div", { className: "casso-header__end", children: [nav && nav.length > 0 && (_jsx("nav", { className: "casso-nav", "aria-label": "Main", children: nav.map((l) => (_jsx(Anchor, { className: "casso-nav__link", href: l.href, "aria-current": l.current ? "page" : undefined, children: l.label }, l.href))) })), children] })] }) }));
}
/** A small quiet line in the header, e.g. "as of Nov 7". */
export function HeaderNote({ children }) {
    return _jsx("span", { className: "casso-header__note", children: children });
}
