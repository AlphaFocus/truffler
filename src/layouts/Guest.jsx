import { Link } from "react-router-dom";

export default function Guest({ children }) {
	function Ico(props) {
		return (
			<button className="w-5 h-5">
				<img src={`ico/${props.name}.png`} alt="" />
			</button>
		);
	}

	return (
		<div className="min-h-screen relative bg-gray-100 flex flex-col">
			<div className="flex items-center justify-center top-0 p-4">
				<div className="absolute left-0 ml-2"></div>
				<Link href="/">
					<button className="flex items-center gap-4">
						<img src="ico/logo.png" className="h-6" alt="" />
						<h1 className="text-2xl font-poppins">Truffler</h1>
					</button>
				</Link>
				<div></div>
			</div>

			<div className="w-full flex-1 *:mb-10 last:*:mb-0 p-4">{children}</div>

			<div className="bg-black h-16 w-full sticky bottom-0 px-8 flex items-center justify-between shadow-2xl">
				<Link to="/">
					<Ico name={"home"} />
				</Link>
				<Link to="/order">
					<Ico name={"invoice"} />
				</Link>
				<Ico name={"heart"} />
				<Ico name={"user"} />
			</div>
		</div>
	);
}
