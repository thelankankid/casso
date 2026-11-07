"use client";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { RowText } from "./MenuItem.js";
import { Avatar } from "./Avatar.js";
/**
 * The account menu: a round photo that opens a card with who you are, the app's own items (children,
 * usually <MenuItem>s) and Sign out. It is a <details>, so it opens without JavaScript; the script only
 * closes it on an outside click, on Escape and after following a link in it.
 */
export function AccountMenu({ user, app, signOut, children, }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const close = () => {
            el.open = false;
        };
        const onDown = (e) => {
            if (el.open && !el.contains(e.target))
                close();
        };
        const onKey = (e) => {
            if (e.key === "Escape" && el.open) {
                close();
                el.querySelector("summary")?.focus();
            }
        };
        const onClick = (e) => {
            if (e.target.closest?.(".casso-menu a"))
                close();
        };
        document.addEventListener("pointerdown", onDown);
        document.addEventListener("keydown", onKey);
        el.addEventListener("click", onClick);
        return () => {
            document.removeEventListener("pointerdown", onDown);
            document.removeEventListener("keydown", onKey);
            el.removeEventListener("click", onClick);
        };
    }, []);
    const name = user?.name || user?.email || "Not signed in";
    return (_jsxs("details", { ref: ref, className: "casso-account", children: [_jsx("summary", { "aria-label": "Account menu", children: _jsx(Avatar, { user: user, size: 36 }) }), _jsxs("div", { className: "casso-menu", children: [_jsxs("div", { className: "casso-menu__who", children: [_jsx(Avatar, { user: user, size: 44 }), _jsxs("div", { children: [_jsx("div", { className: "casso-menu__name", children: name }), user?.name && _jsx("div", { className: "casso-menu__email", children: user.email })] })] }), children && (_jsxs(_Fragment, { children: [_jsx("div", { className: "casso-menu__sep" }), _jsx("div", { className: "casso-menu__group", children: children })] })), _jsx("div", { className: "casso-menu__sep" }), _jsx("div", { className: "casso-menu__group", children: "href" in signOut ? (_jsxs("a", { className: "casso-menu__item", href: signOut.href, children: [_jsx(SignOutIcon, {}), _jsx(SignOutLabel, { hint: signOut.hint ?? defaultHint(app) })] })) : (_jsx("form", { method: "post", action: signOut.action, children: _jsxs("button", { type: "submit", className: "casso-menu__item", children: [_jsx(SignOutIcon, {}), _jsx(SignOutLabel, { hint: signOut.hint ?? defaultHint(app) })] }) })) })] })] }));
}
/** A row that runs an action instead of navigating (e.g. a theme toggle). Closes the menu after. */
export function MenuButton({ label, hint, icon, onClick, }) {
    return (_jsxs("button", { type: "button", className: "casso-menu__item", onClick: (e) => {
            onClick();
            const menu = e.currentTarget.closest("details");
            if (menu)
                menu.open = false;
        }, children: [icon, _jsx(RowText, { label: label, hint: hint })] }));
}
const defaultHint = (app) => `Of ${app} and your other apps`;
function SignOutLabel({ hint }) {
    return _jsx(RowText, { label: "Sign out", hint: hint });
}
function SignOutIcon() {
    return (_jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: _jsx("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" }) }));
}
