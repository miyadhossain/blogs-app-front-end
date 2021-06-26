import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const BlogsPost = () => {
  const { register, handleSubmit } = useForm();
  const [imgURL, setImgURL] = useState(null);

  // submit form
  const onSubmit = (data) => {
    const blogData = {
      title: data.title,
      content: data.content,
      imgURL: imgURL,
    };
    const url = `https://pure-caverns-30093.herokuapp.com/addBlogs`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    }).then((res) => {
      alert("Blog added successfully.");
    });
  };

  // upload images
  const handleImageUpload = (e) => {
    const imgData = new FormData();
    imgData.set("key", "681354ee434466a79bb386e524a1ce29");
    imgData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImgURL(response.data.data.display_url);
        alert("Image upload successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="row">
      <Sidebar />
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#DBE0FE" }}
      >
        <h3 className="mt-2">Post Blog</h3>
        <div className="container table_container mt-3">
          <div className="mt-3 addBookContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="">Title</label>
                  <input
                    name="title"
                    className="form-control"
                    type="text"
                    placeholder="Blog Title"
                    ref={register}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Blog Content</label>
                  <textarea
                    name="content"
                    placeholder="Write blog content"
                    ref={register}
                    class="form-control"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="mt-3" htmlFor="">
                    Upload Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    name=""
                    id=""
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              <input
                className="btn btn-primary mt-5 float-end"
                type="submit"
                value="Save"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPost;
