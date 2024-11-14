import type { FC } from "react";

interface Props {
	title: string;
	className?: string;
}

const CloseSvg: FC<Props> = (props) => (
	<svg
		className={props.className}
		xmlns="http://www.w3.org/2000/svg"
		height="40px"
		viewBox="0 -960 960 960"
		width="40px"
	>
		<title>{props.title}</title>
		<path
			stroke="currentColor"
			d="M480-433.33 274.67-228q-9.67 9.67-23.34 9.67-13.66 0-23.33-9.67-9.67-9.67-9.67-23.33 0-13.67 9.67-23.34L433.33-480 228-685.33q-9.67-9.67-9.67-23.34 0-13.66 9.67-23.33 9.67-9.67 23.33-9.67 13.67 0 23.34 9.67L480-526.67 685.33-732q9.67-9.67 23.34-9.67 13.66 0 23.33 9.67 9.67 9.67 9.67 23.33 0 13.67-9.67 23.34L526.67-480 732-274.67q9.67 9.67 9.67 23.34 0 13.66-9.67 23.33-9.67 9.67-23.33 9.67-13.67 0-23.34-9.67L480-433.33Z"
		/>
	</svg>
);

export default CloseSvg;