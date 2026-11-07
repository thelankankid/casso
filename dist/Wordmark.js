import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * An app's wordmark: its name in lowercase Inter 600 with tight tracking. `mark` (an inline <svg>) replaces
 * the first letter (say, a roof for a home app or an eye for a monitor). Draw a mark to Inter 600's metrics (x-height 0.546em,
 * stem 0.135em) in currentColor so the word stays one even band in both themes.
 */
export function Wordmark({ name, mark, className }) {
    const word = name.toLowerCase();
    return (_jsxs("span", { className: `casso-wordmark${className ? ` ${className}` : ""}`, role: "img", "aria-label": word, children: [mark, _jsx("span", { "aria-hidden": "true", children: mark ? word.slice(1) : word })] }));
}
