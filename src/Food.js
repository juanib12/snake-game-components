import React from "react";

const Food = props => {
  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`
  };
  return <i className='bx bxs-baguette food' style={style}></i>;
};

export default Food;
