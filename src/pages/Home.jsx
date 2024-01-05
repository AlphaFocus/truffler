import Icon from "../components/Icon";
import Image from "../components/Image";
import Guest from "../layouts/Guest";
import { Link } from "react-router-dom";
export default function Home() {
	function Item({ name }) {
		const nameReplace = name.replace(/ /g, "");
		return (
			<Link
				className="flex justify-between items-center hover:bg-black hover:text-white duration-200 shadow-xl"
				to={`/${nameReplace}`}
			>
				<div className="w-8 h-8 flex items-center">
					<Icon name={nameReplace} />
				</div>
				<h2 className="font-semibold capitalize">{name}</h2>
				<div></div>
			</Link>
		);
	}

	function Article() {
		return (
			<div className="h-32 w-48 border overflow-hidden rounded-xl relative">
				<button className="h-6 w-6 p-1 flex items-center justify-center rounded-full bg-white absolute right-2 top-2 overflow-hidden hover:scale-110 duration-200 scroll-smooth">
					<img src="img/heart.png" alt="" />
				</button>
				<div className="absolute z-10 bg-black/40 w-full bottom-0">
					<h1 className="text-white pl-4 py-2 opacity-100">Tanah Lot</h1>
				</div>
				<Image name="tanahlot" />
			</div>
		);
	}

	function Place() {
		return (
			<div className="w-full flex flex-col items-center overflow-hidden rounded-xl bg-white relative shadow-xl hover:scale-105 duration-200">
				<div className="shadow-xl overflow-hidden rounded-xl m-2">
					<img
						src="img/tanahlot.webp"
						className="object-cover min-h-32"
						alt=""
					/>
				</div>
				<div className="w-full bg-white p-4">
					<h1 className="text-sm">Place Name</h1>
					<div className="flex items-center gap-2">
						<img src="ico/location.png" className="h-2.5 w-2.5" alt="" />
						<h3 className="text-xs">Location</h3>
					</div>
				</div>
			</div>
		);
	}
	return (
		<>
			<div className="grid grid-cols-2 gap-4 *:text-center *:bg-white *:rounded-xl *:p-4">
				<Item name={"hotel"} />
				<Item name={"tour"} />
				<Item name={"fast boat"} />
				<Item name={"ticket"} />
			</div>
			<div>
				<h1 className="font-semibold text-lg mb-2">Travelers Choice</h1>
				<div className="overflow-x-auto grid grid-flow-col max-w-screen gap-4 overflow-hidden scrollbar-hide">
					<Article />
					<Article />
					<Article />
					<Article />
				</div>
			</div>
			<div>
				<h1 className="font-semibold text-lg mb-2">Recommends Around</h1>
				<div className="grid grid-cols-2 gap-4">
					<Place />
					<Place />
					<Place />
					<Place />
					<Place />
					<Place />
				</div>
			</div>
		</>
	);
}
