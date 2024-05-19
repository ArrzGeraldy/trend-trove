import React from "react";

interface ButtonAsideI {
  name: string;
  style: string;
}

const ButtonAside = ({ name, style }: ButtonAsideI) => {
  return (
    <button className={style} type="button">
      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
        {name}
      </p>
    </button>
  );
};

export default ButtonAside;
