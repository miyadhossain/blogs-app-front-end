import React from "react";
import { useHistory } from "react-router-dom";

const Blog = ({ blog }) => {
  const { _id, title, imgURL } = blog;
  const history = useHistory();
  const handleReadBlog = () => {
    history.push(`/blogDetails/${_id}`);
  };
  return (
    <div className="my-10">
      <div class="sm:grid grid-cols-5 bg-white shadow-sm p-7 relative lg:max-w-2xl sm:p-4 rounded-lg lg:col-span-2 lg:ml-20">
        <img
          onClick={handleReadBlog}
          src={imgURL}
          alt="Blogs"
          class="w-full rounded-lg cursor-pointer"
        />
        <div class="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3">
          <h2
            onClick={handleReadBlog}
            class="text-gray-800 capitalize text-xl font-bold cursor-pointer"
          >
            {title}
          </h2>
          <p class="capitalize inline-block pt-2">by Admin</p>
          <button
            onClick={handleReadBlog}
            class="ml-auto flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500"
          >
            Read Blog
          </button>
        </div>
        <div class="justify-self-end">
          <img
            src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Bookmark-256.png"
            alt="Bookmark"
            class="w-8 absolute top-3 right-3 sm:relative sm:top-0 sm:right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
