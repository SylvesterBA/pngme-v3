import Link from "next/link";
import DevToolsCard from "./devToolsCard";

const DeveloperTools = () => {
	return (
		<div
			className={`
				bg-secondary-beige
				bg-[url('/images/purple-ball.svg'),_url('/images/gray-ball.svg')] 
				lg:bg-[url('/images/pink-one-third-circle.svg'),_url('/images/purple-ball.svg'),_url('/images/gray-ball.svg')] 
				bg-[position:left_0_bottom_50%,_right_0_bottom_50%] 
				lg:bg-[position:right_top,_left_25%_bottom_5%,_right_bottom_5%] 
				bg-[length:50px,_200px] 
				lg:bg-[length:150px,_50px] 
				bg-contain 
				bg-no-repeat 
				p-6
				lg:p-24
			`}
		>
			<div className="grid lg:grid-cols-2">
				<div>
					<div className="text-fs-36 lg:mb-12">
						Give your developers the tools they need to build the products your
						customers want.
					</div>
					<div className="invisible lg:visible font-pngme-inter text-fs-18">
						<div className="mb-6">
							We provide sophisticated analytics that reduce defaults, seamless
							collection tools that are easy to use, and out-of-the-box code
							features for fast development.
						</div>
						<div>
							<span className="inline-flex items-baseline text-primary-pink underline font-bold">
								<div className="pr-4">
									<Link href={"/products"}>Learn more</Link>
								</div>
								<div>
									<a
										target="_blank"
										href="https://www.youtube.com/watch?v=4yOLbh1UrTo"
										rel="noopener noreferrer"
									>
										Watch tutorial
									</a>
								</div>
							</span>
						</div>
					</div>
				</div>
				<div>
					<DevToolsCard
						heading="Financial Insights"
						subheading="Pre-qualify fast with complex financial data aggregated as simple, actionable analytics"
						imageSrc="/images/chart-financial-insights.svg"
					/>
					<DevToolsCard
						heading="Analyze your data"
						subheading="Make lending decisions based on a customers full financial identity across multiple accounts."
						imageSrc="/images/chart-analytics.svg"
					/>
				</div>
				<div className="visible lg:invisible font-pngme-inter text-fs-18">
					<div className="mb-2">
						We provide sophisticated analytics that reduce defaults, seamless
						collection tools that are easy to use, and out-of-the-box code
						features for fast development.
					</div>
					<div>
						<span className="inline-flex items-baseline text-primary-pink underline font-bold">
							<div className="pr-4">
								<Link href={"/products"}>Learn more</Link>
							</div>
							<div>
								<a
									target="_blank"
									href="https://www.youtube.com/watch?v=4yOLbh1UrTo"
									rel="noopener noreferrer"
								>
									Watch tutorial
								</a>
							</div>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeveloperTools;
