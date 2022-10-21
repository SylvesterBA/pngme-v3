import { Typography } from "components/typography";
import { format } from "date-fns";
import Link from "next/link";

export const PostItem = ({
  author,
  content,
  excerpt,
  date,
  title,
  coverImage,
  slug,
}) => {
  const dateString = format(new Date(date), "LLLL	d, yyyy");
  if (!author) {
    return <p>loading...</p>;
  }
  return (
    <Link href={`/blog/post/${slug}`} className="cursor-pointer">
      <div className="cursor-pointer w-full flex flex-col sm:flex-row border-b border-b-[#E6E6E6] py-8">
        <img
          className="w-full mb-4  object-cover rounded-md sm:hidden"
          src={coverImage.url}
        />

        <div className="flex flex-col gap-0 w-full">
          <div className="flex flex-row items-center gap-2 mb-2">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src={author?.picture?.url}
            />
            <Typography className="text-[14px]">
              {author.name} · {dateString}
            </Typography>
          </div>

          <Typography className="text-[16px]" type="title">
            {title}
          </Typography>

          <Typography className="text-[16px]" type="secondary">
            {excerpt}
          </Typography>
        </div>
        <img
          className="w-32 h-32 object-cover rounded-md hidden sm:block"
          src={coverImage.url}
        />
      </div>
    </Link>
  );
};
