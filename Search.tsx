import { type FC, useState } from "react";

interface Props {
	search: (text: string) => void;
}

const Search: FC<Props> = (props) => {
	const [text, setText] = useState("");

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			props.search(text);
		}
	};

	return (
		<search>
			<input
				type="text"
				placeholder="Search"
				className="p-2 w-full rounded-md shadow-neumorphism"
				onChange={(event) => setText(event.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</search>
	);
};

export default Search;
