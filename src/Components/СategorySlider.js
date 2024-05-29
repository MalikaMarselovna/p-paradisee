import React from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import DeleteCategory from './DeleteCategory/DeleteCategory';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CategorySlider({ categories }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {categories.map(category => (
        <div key={category.id} className="p-2">
          <div className="card flex-1 m-2 shadow-lg rounded-md overflow-hidden relative hover:scale-[1.03] w-[400px] h-[400px]">
            <img src={category.src} className="w-[100%]" alt={category.name} />
            <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
              <h2 className="text-white font-medium text-[30px]">{category.name}</h2>
              <NavLink to={"/categories/" + category.slug} className="btn">See More</NavLink>
            </div>
          </div>
          <DeleteCategory category={category} />
        </div>
      ))}
    </Slider>
  );
}

export default CategorySlider;

