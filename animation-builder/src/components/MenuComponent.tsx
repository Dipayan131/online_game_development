import React from 'react';

interface MenuComponentProps {
  name: string;
  value: string;
  setFunction: (value: string) => void;
  menuItems: string[];
}

const MenuComponent: React.FC<MenuComponentProps> = ({ name, value, setFunction, menuItems }) => {
  return (
    <p>
      {name}
      <span className='menu-container'>
        <select
          className="fbtn"
          value={value}
          onChange={(e) => setFunction(e.target.value)}
        >
          {menuItems.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </span>
    </p>
  );
};

export default MenuComponent;
