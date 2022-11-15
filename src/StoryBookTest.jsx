import React from "react";

const BigText = ({text, big}) => {
  return big ? <h1>{text}</h1> : <p>{text}</p>
}

const TextTest = () => {
  return (
    <>
      <BigText text='Big' big={true}/>
      <BigText text='small' big={false}/>
    </>
  )
}

export default TextTest