import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white">
            <span>
              <i class="bi bi-house"></i> Home
            </span>
          </Link>
        </li>
        <li>
          <Link to="/blogsPost" className="text-white">
            <span>
              <i class="bi bi-pencil-square"></i> Post Blogs
            </span>
          </Link>
        </li>
        <li>
          <Link to="/manageBlogs" className="text-white">
            <span>
              <i class="bi bi-ui-radios-grid"></i> Manage Blogs
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
