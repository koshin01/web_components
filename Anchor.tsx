import type { FC } from "react";

interface Props {
    href?: HTMLAnchorElement["href"];
    className?: HTMLAnchorElement["className"];
    children: React.ReactNode;
}

const Anchor: FC<Props> = (props) => {
    return (
        <a href={props.href} target={props.href?.startsWith("/") ? "_self" : "_blank"} rel="noreferrer" className={props.className}>
            {props.children}
        </a>
    )
}

export default Anchor;

