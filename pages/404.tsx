import type { NextPage } from 'next'
import Link from "next/link";

const NotFound: NextPage  = () => {
	return (
		<div className="not-found">
			<h1 className='font-pngme-helvetica'>Page not found</h1>
			<p>
				Get back to our{" "}
				<Link href="/">
					<a>Homepage</a>
				</Link>
			</p>
		</div>
	);
};

export default NotFound;
