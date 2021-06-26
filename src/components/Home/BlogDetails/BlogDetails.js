import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Header/NavBar/NavBar";

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://pure-caverns-30093.herokuapp.com/blog/" + id)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);
  return (
    <div class="">
      <NavBar />
      <div class="flex max-w-xl my-10 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
        <div class="flex items-center w-full">
          <div class="w-full">
            <div class="border-b border-gray-100"></div>
            <div class="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
              <img class="rounded" src={blog.imgURL} />
            </div>
            <div class="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2">
              {blog.title}
            </div>
            <div class="text-gray-500 font-normal text-sm mb-6 mx-3 px-2">
              {blog.content}
            </div>
            <div class="flex justify-start mb-4 border-t border-gray-100">
              <div class="flex w-full mt-1 pt-2 pl-5">
                <span class="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="14px"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </span>
              </div>
              <div class="flex justify-end w-full mt-1 pt-2 pr-5">
                <span class="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="14px"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </span>
                <span class="transition ease-out duration-300 hover:bg-blue-500 bg-blue-600 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="14px"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div class="flex w-full border-t border-gray-100">
              <div class="mt-3 mx-5 flex flex-row">
                <div class="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                  Comments:
                  <div class="ml-1 text-gray-400 font-thin text-ms"> 30</div>
                </div>
                <div class="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                  Views:{" "}
                  <div class="ml-1 text-gray-400 font-thin text-ms"> 60k</div>
                </div>
              </div>
              <div class="mt-3 mx-5 w-full flex justify-end">
                <div class="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                  Likes:{" "}
                  <div class="ml-1 text-gray-400 font-thin text-ms"> 120k</div>
                </div>
              </div>
            </div>
            <div class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 right-0 flex items-center pr-6">
                <button
                  type="submit"
                  class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
                >
                  <svg
                    class="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </span>
              <input
                type="search"
                class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                style={{ borderRadius: "25px" }}
                placeholder="Post a comment..."
                autocomplete="off"
              />
            </div>
          </div>
        </div>
      </div>
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="matheusgongo"
        data-description="Support me on Buy me a coffee!"
        data-message="Thank you for visiting! :D"
        data-color="#BD5FFF"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
    </div>
  );
};

export default BlogDetails;
