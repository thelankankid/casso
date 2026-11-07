import { jsx as _jsx } from "react/jsx-runtime";
/** A round photo: the Google picture when there is one, else the first letter on a quiet disc. */
export function Avatar({ user, size = 36, className }) {
    const cls = `casso-avatar${className ? ` ${className}` : ""}`;
    const style = { width: size, height: size };
    if (user?.picture?.startsWith("https://")) {
        // no-referrer: Google's photo host refuses some referrers, and the app's URL is nobody's business.
        return _jsx("img", { src: user.picture, alt: "", width: size, height: size, referrerPolicy: "no-referrer", className: cls, style: style });
    }
    const initial = (user?.name || user?.email || "?").trim().slice(0, 1).toUpperCase();
    return (_jsx("span", { "aria-hidden": "true", className: cls, style: { ...style, fontSize: Math.round(size * 0.42) }, children: initial }));
}
