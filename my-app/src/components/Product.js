import React from 'react';
import styled from 'styled-components';

const ProductStyle = styled.div`
  font-family: 'Commissioner', sans-serif;
  font-weight: 200;
  display: flex;
  justify-content: space-evenly;
  padding: 2em 0 2em;
`;

const Border = styled.div`
  border: 2px solid lightgrey;
  border-radius: 10px;
  margin-top: 2em;

  p {
    text-align: left;
    padding: 0 2em;
  }
  h3 {
    padding: 0 1.5em;
  }
`;

const ProductPrice = styled.div`
  display: flex;
  padding: 1em 0 1em 2em;
  h3 {
    margin-right: -28px;
  }
`;

function Product({ title, pledge, description, timeLeft }) {
  return (
    <>
      <Border>
        <ProductStyle>
          <h4>Bamboo Stand</h4>
          <p>Pledge $25 or more</p>
        </ProductStyle>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
          suscipit. Modi consequuntur nihil reprehenderit vitae nobis sequi
          molestiae et rerum repudiandae, nam quasi suscipit exercitationem.
          Nemo, ipsa nobis. Exercitationem, reiciendis. Sint qui assumenda
          tempora optio modi numquam, provident similique expedita autem a velit
          laboriosam ut sed ducimus ea repudiandae, voluptatem tempore
          voluptates sunt! Cupiditate sit quam deleniti quidem ut similique.
        </p>
        <ProductPrice>
          <h3>101</h3>
          <p>left</p>
        </ProductPrice>
      </Border>
    </>
  );
}

export default Product;
