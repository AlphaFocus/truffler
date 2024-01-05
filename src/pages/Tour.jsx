import React from "react";

export default function Tour() {
	function Detail({ name, qty }) {
		return (
			<div className="flex items-center gap-2">
				<img src={`ico/${name}.png`} className="h-3 w-3 " />
				<text className="text-gray-500 text-sm font-bold w-full">{qty}</text>
			</div>
		);
	}

	function Item({ name = "avanza", brand = "Toyota" }) {
		return (
			<>
				<div className="bg-white p-4 shadow-xl flex rounded-xl gap-4">
					<div className="w-1/2 flex flex-col overflow-hidden">
						<div className="w-full mb-4">
							<text className="text-center font-bold capitalize">
								{`${brand} ${name}`}
							</text>
						</div>
						<div className="w-4/5 flex pr-4">
							<img
								className="object-left-top w-full pr-4"
								src={`img/tour/${name}.png`}
							/>
							<div className="flex gap-2 flex-col justify-center">
								<Detail name={"seat"} qty={"10"} />
								<Detail name={"luggage"} qty={"3"} />
							</div>
						</div>
					</div>
					<div className="flex flex-col flex-1 justify-end">
						<text className="text-xs w-full text-gray-500">Start from</text>
						<div className="text-lg font-bold">Rp. 1.600.000</div>
					</div>
				</div>
			</>
		);
	}
	return (
		<div className="flex flex-col gap-4">
			<Item />
			<Item name="hiace" />
			<Item name="xpander" brand="daihatsu" />
			<Item />
			<Item />
			<Item />
		</div>
	);
}
