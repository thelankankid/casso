/** Who is signed in: the fields a Google sign-in session carries. */
export type CassoUser = {
    email: string;
    name?: string | null;
    picture?: string | null;
};
/** A round photo: the Google picture when there is one, else the first letter on a quiet disc. */
export declare function Avatar({ user, size, className }: {
    user: CassoUser | null;
    size?: number;
    className?: string;
}): import("react").JSX.Element;
