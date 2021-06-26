import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://pure-caverns-30093.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // handle delete
  const handleDelete = (id) => {
    fetch(`https://pure-caverns-30093.herokuapp.com/deleteBlog/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Delete successfully.");
      });
  };
  return (
    <div className="row">
      <Sidebar />
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#DBE0FE" }}
      >
        <h3 className="text-brand fs-3">Manage Blogs</h3>
        <p className="">Total blogs collection : {blogs.length}</p>
        <div className="table_container">
          <table className="table table-hover table-borderless mt-3">
            <thead>
              <tr className="bookHeading">
                <th scope="col"></th>
                <th scope="">Blog Title</th>
                <th scope="">Blog Image</th>
                <th scope="">Action</th>
              </tr>
            </thead>
            {blogs.map((blog) => (
              <tbody key={blog._id}>
                <tr>
                  <th scope="row"></th>
                  <td>{blog.title}</td>
                  <td>
                    <img style={{ width: "50px" }} src={blog.imgURL} alt="" />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogs;
