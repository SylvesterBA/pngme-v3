import Link from "next/link";
import Image from "next/image";
import React from "react";

const MapCard = () => {
	return (
		<div
			className={
				"bg-dirty-white bg-[url('/images/quarter-circle-pink.svg')] bg-right-bottom bg-contain bg-no-repeat bg-[length:200px_100px] rounded drop-shadow-lg"
			}
		>
			<div
				className={"font-pngme-helvetica text-left text-primary-purple p-12"}
			>
				<div className="grid grid-cols-2 lg:grid-cols-8 gap-2">
					<div className="lg:col-span-5">
						<div className={"text-fs-40"}>
							Fintechs & banks build the best lending experiences with Pngme
						</div>
						<div className={"text-fs-18"}>
							Leading businesses in{" "}
							<strong className="font-bold">
								Nigeria, Kenya, Ghana and South Africa
							</strong>{" "}
							trust Pngme
						</div>
					</div>
					<div className="lg:col-span-3 drop-shadow-md">
						<Image
							src="/images/map-africa.svg"
							alt="Map Africa"
							height={450}
							width={450}
						/>
						<div className="absolute bg-dirty-white p-4 rounded-tl-lg rounded-tr-lg rounded-br-lg top-10 right-0">
							<div className={"font-pngme-inter fs-12 font-bold"}>Location</div>
							<div className={"font-pngme-inter fs-12"}>Coming Soon</div>
							<Link href={"#"}>
								<div
									className={
										"font-pngme-inter fs-14 text-primary-pink underline font-bold"
									}
								>
									Learn more
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MapCard;
