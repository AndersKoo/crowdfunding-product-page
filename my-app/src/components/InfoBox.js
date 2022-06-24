import React from 'react';
import styled from 'styled-components';
import ButtonSection from './ButtonSection';
import Product from './Product';

const TopInfoBoxStyle = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  z-index: 50;
  margin: -60px auto;
  padding: 2em 0 2em;
  margin: 2em auto;
  font-family: 'Commissioner', sans-serif;

  h2,
  h3 {
    padding: 0 0 1.5em;
    text-align: left;
  }

  p {
    text-align: left;
    align-items: center;
    line-height: 2;
  }

  .title {
    text-align: center;
  }

  .description {
    text-align: center;
    font-weight: 200;
  }
`;

function InfoBox({ showInfo, showButtons, about, product }) {
  return (
    <>
      <TopInfoBoxStyle>
        {about ? (
          <>
            <h3>About this project</h3>{' '}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              repellat eos error? Obcaecati quo iste expedita doloremque, rem
              fuga error nam recusandae. Temporibus vel, optio dignissimos ea
              vitae consequuntur quaerat! Quaerat, laudantium ad, at nemo
              architecto doloribus a sequi ut pariatur tempora odio! Praesentium
              saepe optio natus cumque velit consequuntur maiores a beatae,
              delectus dolore molestias numquam mollitia libero quidem? Iure
              itaque reiciendis, repellendus odio dicta alias, in consectetur
              esse harum cum sit suscipit totam error doloribus qui ab a.
              Praesentium debitis accusantium architecto expedita! Totam nam
              minus voluptas repudiandae.
            </p>
          </>
        ) : null}
        {showInfo ? (
          <>
            <h2 className="title">MasterCraft Bamboo Monitor Riser</h2>
            <p className="description">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain
            </p>
          </>
        ) : null}

        {showButtons ? (
          <>
            <ButtonSection />
          </>
        ) : null}

        {product ? (
          <>
            <Product />
            <Product />
            <Product />
          </>
        ) : null}
      </TopInfoBoxStyle>
    </>
  );
}

export default InfoBox;
