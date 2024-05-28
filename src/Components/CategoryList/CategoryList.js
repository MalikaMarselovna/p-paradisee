import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>
        {category.name}
      </NavLink>
      <DeleteCategory category={category} />
    </li>
  ));

  return (
    <div className="CategoryList container">
      <button className="dropdownBtn">
        <p><strong>Categories</strong></p>
        <i className="fa-solid fa-chevron-down fa-xs"></i>
      </button>
      <ul className="dropdownContent">
        <li>
          <NavLink to="/categories/all">
            Categories All
          </NavLink>
        </li>
        {output}
        <AddCategory />
      </ul>
    </div>
  );
}
