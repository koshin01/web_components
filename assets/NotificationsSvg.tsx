import type { FC } from "react";

interface Props {
	title: string;
	className?: string;
}

const NotificationsSvg: FC<Props> = (props) => (
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
			d="M160-200v-66.67h80v-296q0-83.66 49.67-149.5Q339.33-778 420-796v-24q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v24q80.67 18 130.33 83.83Q720-646.33 720-562.67v296h80V-200H160Zm320-301.33ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM306.67-266.67h346.66v-296q0-72-50.66-122.66Q552-736 480-736t-122.67 50.67q-50.66 50.66-50.66 122.66v296Z"
		/>
	</svg>
);

export default NotificationsSvg;
