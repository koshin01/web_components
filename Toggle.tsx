import type { FC } from "react";

interface Props {
	checked: HTMLInputElement["checked"];
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Toggle: FC<Props> = (props) => {
	return (
		<label className="inline-flex items-center cursor-pointer">
			<input
				type="checkbox"
				checked={props.checked}
				onChange={props.onChange}
				className="sr-only peer"
			/>
			<div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-500 ease-in-out peer-checked:bg-blue-600 shadow-neumorphism" />
		</label>
	);
};

export default Toggle;
