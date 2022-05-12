import React from "react";

const LinkButton = ({ to, name }) => {
  return (
    <LinkButton
      to={!to ? `/${name.toLowerCase()}` : to}
      className="text-primary hover:text-primary focus:text-primary transition duration-200 ease-in-out"
    >
      {name}
    </LinkButton>
  );
};

export default LinkButton;
