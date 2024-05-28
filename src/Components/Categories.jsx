import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import Category from './Category';
import AddCategory from './AddCategory/AddCategory';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryList from './CategoryList/CategoryList';


function Categories() {
  const { categories } = useContext(AppContext);

  return (
    <div className="p-5 items-center justify-center flex flex-col ">
      <CategoryList></CategoryList>

      <ul className="flex-wrap flex items-center justify-center">
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
        
      </ul>
      <AddCategory />
      
    </div>
  );
}

export default Categories;

