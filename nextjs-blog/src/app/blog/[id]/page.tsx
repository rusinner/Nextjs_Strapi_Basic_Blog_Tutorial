import Image from "next/image";
import Link from "next/link";

const SingleBlogPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link href="/">{"< Back"}</Link>
      <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
        <Image fill style={{ objectFit: "cover" }} src={""} alt={""} />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold">Title</h1>
        <p className="text-gray-600 mt-2">Description</p>
        <div className="mt-4 flex items-center text-gray-400">
          <span className="text-sm">Published on {"23-12-2024"}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
