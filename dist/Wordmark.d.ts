import type { ReactNode } from "react";
/**
 * An app's wordmark: its name in lowercase Inter 600 with tight tracking. `mark` (an inline <svg>) replaces
 * the first letter (say, a roof for a home app or an eye for a monitor). Draw a mark to Inter 600's metrics (x-height 0.546em,
 * stem 0.135em) in currentColor so the word stays one even band in both themes.
 */
export declare function Wordmark({ name, mark, className }: {
    name: string;
    mark?: ReactNode;
    className?: string;
}): import("react").JSX.Element;
