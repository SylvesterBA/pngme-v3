/* import Link from "next/link"; */
import Image from "next/image";
import React from "react";
import { IPartnerComment } from ".";

export interface IPartnerCommentCardProps {
	comment: IPartnerComment;
}

const PartnerCommentCard = ({ comment }: IPartnerCommentCardProps) => {
	return (
		<div className="grid md:grid-cols-2 relative place-content-center text-fs-18">
			<div>
				<Image src={comment.imgUrl || ""} alt="" width={205} height={120} />
			</div>
			<div>
				<div>{`"${comment.mainText}"`}</div>
				<div>{`${comment.author} - `}<span className="inline font-bold">{comment.authorTitle}</span></div>
			</div>
		</div>
	);
};
export default PartnerCommentCard;
