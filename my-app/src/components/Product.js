import React from 'react';
import styled from 'styled-components';

const ProductStyle = styled.div`
  font-family: 'Commissioner', sans-serif;
  font-weight: 200;
  display: flex;
  justify-content: space-between;
  padding: 2em 2em 2em;
  p {
    color: hsl(176, 72%, 28%);
    font-weight: 300;
  }
`;

const Border = styled.div`
  border: 2px solid lightgrey;
  border-radius: 10px;
  margin-top: 2em;
  h3 {
    padding: 0 1.5em;
  }
  .text {
    padding: 0 2em;
    text-align: left;
  }
`;

const ProductPrice = styled.div`
  display: flex;
  padding: 1em 0 1em 2em;
  .quantity {
    margin-right: 13px;
  }
  .status {
  }
  button {
    position: absolute;
    right: 0;
    margin-right: 2em;
    padding: 10px 10px;
    border-radius: 15px;
    border: none;
    background-color: hsl(176, 72%, 28%);
    color: white;
    cursor: pointer;
    /* bottom: 0; */
  }
`;

function Product({}) {
  return (
    <>
      <Border>
        <ProductStyle>
          <h4>Bamboo Stand</h4>
          <p>Pledge $25 or more</p>
        </ProductStyle>
        <p className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
          suscipit. Modi consequuntur nihil reprehenderit vitae nobis sequi
          molestiae et rerum repudiandae, nam quasi suscipit exercitationem.
          Nemo, ipsa nobis. Exercitationem, reiciendis. Sint qui assumenda
          tempora optio modi numquam, provident similique expedita autem a velit
          laboriosam ut sed ducimus ea repudiandae, voluptatem tempore
          voluptates sunt! Cupiditate sit quam deleniti quidem ut similique.
        </p>
        <ProductPrice>
          <h3 className="quantity">101</h3>
          <p className="status">left</p>
          <button>Select Reward</button>
        </ProductPrice>
      </Border>
    </>
  );
}

export default Product;
