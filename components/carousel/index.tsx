/* eslint-disable @next/next/no-img-element */
// import { useState } from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//override Swiper variables
import styles from "./Carousel.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FutureCard from "../creditLending/futureCard";
import PartnerCommentCard from "../partnerComments/partnerCommentCard";
import CountryMap from "../creditLending/countryMap";

interface ICarouselBreakpoint {
	slidesPerView?: number;
	spaceBetween?: number;
}
interface ICarousel {
	data: any;
	type: "FutureCard" | "PartnerCommentCard" | "MapCard";
	breakpointMobile?: ICarouselBreakpoint;
	breakpointMedim?: ICarouselBreakpoint;
	breakpointLarge?: ICarouselBreakpoint;
	arrowsPostion?: "left" | "center" | "right";
}

const Carousel = ({
	data,
	type,
	breakpointMobile,
	breakpointMedim,
	breakpointLarge,
	arrowsPostion = "left",
}: ICarousel) => {
	let arrowsPos =
		arrowsPostion === "left"
			? "justify-start"
			: arrowsPostion === "center"
			? "justify-center"
			: "justify-end";

	return (
		<div className={styles.variableOverrides}>
			<Swiper
				modules={[Navigation, A11y]}
				spaceBetween={0}
				slidesPerView={"auto"}
				navigation={{
					nextEl: "#nextEl",
					prevEl: "#prevEl",
				}}
				centeredSlides
				loop
				breakpoints={{
					0: {
						slidesPerView: breakpointMobile?.slidesPerView || 1,
						spaceBetween: breakpointMobile?.spaceBetween || 2,
					},
					768: {
						slidesPerView: breakpointMedim?.slidesPerView || 3,
						spaceBetween: breakpointMedim?.spaceBetween || 8,
					},
					1024: {
						slidesPerView: breakpointLarge?.slidesPerView || 3,
						spaceBetween: breakpointLarge?.spaceBetween || 24,
					},
				}}
			>
				{data &&
					type === "FutureCard" &&
					data.map((slide: any, index: number) => (
						<SwiperSlide className="flex items-center" key={index}>
							<FutureCard card={slide} />
						</SwiperSlide>
					))}

				{data &&
					type === "PartnerCommentCard" &&
					data.map((slide: any, index: number) => (
						<SwiperSlide className="flex items-center" key={index}>
							<PartnerCommentCard comment={slide} />
						</SwiperSlide>
					))}

				{data &&
					type === "MapCard" &&
					data.map((slide: any, index: number) => (
						<SwiperSlide className="flex items-center" key={index}>
							<CountryMap data={slide} />
						</SwiperSlide>
					))}

				<div id="swiperNav" className={`flex z-10 ${arrowsPos}`}>
					<img
						id="prevEl"
						src="/icons/arrow-left.svg"
						className="active:opacity-70 mt-10"
						alt="left arrow"
					/>
					<img
						id="nextEl"
						src="/icons/arrow-right.svg"
						className="active:opacity-70 mt-10"
						alt="right arrow"
					/>
				</div>
			</Swiper>
		</div>
	);
};

export default Carousel;
