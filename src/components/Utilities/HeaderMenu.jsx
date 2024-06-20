import React from "react";

const HeaderMenu = ({ title }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
    </div>
  );
};

export default HeaderMenu;
