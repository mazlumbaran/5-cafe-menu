import React from 'react';

const Categories = ({categories, filteredMenuItems}) => {


  return  <div className='btn-container'>
    {categories.map((category, index) => {
      return (
        <button type='button' key={index} className='filter-btn' onClick={() => filteredMenuItems(category)} >
        {category}
        </button>
      )
    })}
    
  </div>;
};

export default Categories;
