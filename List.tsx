import type { FC } from "react";
import Anchor from "./Anchor";

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
	title?: string;
	items: Item[];
}

const List: FC<Props> = (props) => {
	return (
		<ul className="flex flex-col list-none p-0 m-0 lg:p-0 lg:m-0">
			{props.title && <h3 className="text-gray-500">{props.title}</h3>}
			{props.items.map((item) => (
				<li key={item.name}>
					<Anchor
						href={item.contentUrl}
						className={`flex items-center no-underline w-full p-4 ${
							item.contentUrl &&
							"justify-between hover:bg-gray-100/50 rounded-xl group"
						}`}
					>
						<div className="flex items-center gap-7">
							{item.icon && (
								<img
									src={item.icon.src}
									className="rounded-lg w-16 object-contain aspect-square bg-white m-0 lg:m-2"
									alt={item.icon.alt}
								/>
							)}
							<div className="flex flex-col">
								<span className="font-semibold text-slate-800 text-2xl">
									{item.name}
								</span>
								{item.description && (
									<span className="text-slate-500">{item.description}</span>
								)}
							</div>
						</div>
						{item.contentUrl && (
							<img 
								src="/chevron_right.svg" 
								alt="Shape of right arrow"
								className="m-0 lg:m-2 transition ease-in-out group-hover:-translate-x-2 duration-300"
							 />
						)}
					</Anchor>
				</li>
			))}
		</ul>
	);
};

export default List;
