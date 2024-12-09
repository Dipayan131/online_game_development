import React, { FC } from 'react';

interface Category {
  name: string;
  animations: { percent: number; [key: string]: string | number }[];
}

interface CategoryButtonProps {
  handleCategoryClick: (category: Category) => void;
  selectedCategory: Category | null;
  category: Category;
}

const CategoryButton: FC<CategoryButtonProps> = ({ handleCategoryClick, selectedCategory, category }) => {
  return (
    <button
      onClick={() => handleCategoryClick(category)}
      className={`category-button ${selectedCategory === category ? "selected" : ""}`}
    >
      {category.name}
    </button>
  );
};

export default CategoryButton;
