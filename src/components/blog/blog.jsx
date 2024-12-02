import { useLoaderData } from "react-router-dom";
import Blog from "../Blog";

const Blogs = () => {
  const blogsData = useLoaderData();
  console.log(blogsData);
  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-10">Blogs</h2>
      <div className="grid grid-cols-3 gap-5 my-16">
        {blogsData.map((blog) => (
          <Blog blog={blog} key={blog.id}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
