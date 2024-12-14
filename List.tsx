import type { FC } from "react";
import Anchor from "./Anchor";
import ChevronRightSvg from "./assets/ChevronRightSvg";

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
	isLoading?: boolean;
	title?: string;
	items?: Item[];
}

const List: FC<Props> = (props) => {
	const items: Item[] = props.isLoading || !props.items ? Array.from({ length: 10 }, (_, index) => ({ name: String(index) })) : props.items;

	return (
		<ul className="flex flex-col list-none p-0 m-0 lg:p-0 lg:m-0">
			{props.title && <h3 className="text-gray-500">{props.title}</h3>}
			{items.map((item) => (
				<li key={item.name} className={props.isLoading ? "animate-pulse bg-gradient-to-br from-gray-300 to-gray-200 rounded-xl" : ""}>
					<Anchor
						href={item.contentUrl}
						className={`flex items-center no-underline w-full min-h-24 p-4 ${item.contentUrl &&
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
								<span className="text-slate-800 text-md">
									{!props.isLoading && item.name}
								</span>
								{item.description && (
									<span className="text-slate-500">{item.description}</span>
								)}
							</div>
						</div>
						{item.contentUrl && (
							<div>
								<ChevronRightSvg
									title="Shape of right arrow"
									className="m-0 lg:m-2 transition ease-in-out group-hover:-translate-x-2 duration-300"
								/>
							</div>
						)}
					</Anchor>
				</li>
			))}
		</ul>
	);
};

export default List;
