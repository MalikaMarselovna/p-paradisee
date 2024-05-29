import React, { useContext } from 'react';
import { AppContext } from '../App';
import CategorySlider from './СategorySlider';

function CategoriesPage() {
  const { categories } = useContext(AppContext);

  return (
    <div className="container ">
      <CategorySlider categories={categories} />
    </div>
  );
}

export default CategoriesPage;
