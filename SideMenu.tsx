import { useEffect, useState } from "react";
import type { FC } from "react";
import List from "./List";
import Toggle from "./Toggle";

interface Image {
	src: string;
	alt: string;
}

interface Item {
	name: string;
	description?: string;
	icon?: Image;
	contentUrl?: string;
}

interface Props {
	notices: Item[];
}

const SideMenu:FC<Props> = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	return (
		<>
			<button
				data-collapse-toggle="sidebar-notices"
				type="button"
				className="bg-gray-50 inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-md hover:bg-gray-100 shadow-neumorphism"
				aria-controls="sidebar-notices"
				aria-expanded={isOpen}
				onClick={() => setIsOpen(true)}
			>
				<span className="sr-only">Open side menu</span>
				<img src="/notifications.svg" alt="Shape of Bell" />
			</button>
			<div
				className={`flex flex-col gap-7 fixed right-0 top-0 p-4 z-20 bg-gray-50 w-4/5 lg:w-1/4 h-screen transition-transform duration-700 ease-in-out transform ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				id="navbar-notices"
			>
				<button
					data-collapse-toggle="sidebar-close"
					type="button"
					className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-md hover:bg-gray-100 shadow-neumorphism"
					aria-controls="sidebar-close"
					aria-expanded={isOpen}
					onClick={() => setIsOpen(false)}
				>
					<span className="sr-only">Close side menu</span>
					<img src="/close.svg" alt="Shape of close" />
				</button>
				<List title="Notices" items={props.notices} />
				{/* <section className="flex flex-col gap-4">
					<h3 className="text-slate-500">Would you like to be notified?</h3>
					<Toggle checked={false} onChange={() => 0}/>
				</section> */}
			</div>
		</>
	);
};

export default SideMenu;
