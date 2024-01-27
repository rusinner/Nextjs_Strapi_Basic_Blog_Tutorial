import Blogs from "@/components/Blogs";
import Categories from "@/components/Categories";

async function fetchCategories() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch("http://127.0.0.1:1337/api/categories", options);
    const response = res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      "http://127.0.0.1:1337/api/blogs?populate=*",
      options
    );
    const response = res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();

  return (
    <div>
      <Categories categories={categories} />
      <Blogs blogs={blogs} />
    </div>
  );
}
