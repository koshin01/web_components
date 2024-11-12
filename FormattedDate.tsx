import type { FC } from "react";

interface Props {
	date: Date;
}

const FormattedDate: FC<Props> = (props) => {
	return (
		<time dateTime={props.date.toISOString()}>
			{props.date.toLocaleDateString("en-us", {
				year: "numeric",
				month: "short",
				day: "numeric",
			})}
		</time>
	);
};

export default FormattedDate;
