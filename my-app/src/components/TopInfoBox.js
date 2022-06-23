import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const TopInfoBoxStyle = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  z-index: 50;
  margin: -100px auto;

  p {
    text-align: center;
  }
`;
function TopInfoBox() {
  return (
    <>
      <TopInfoBoxStyle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis libero
          maiores nesciunt assumenda maxime odio eligendi est voluptatibus?
          Fugiat quam eligendi harum unde nihil ea iusto minima nemo modi error!
          Temporibus doloribus corporis nostrum maxime praesentium autem tempore
          rerum nihil ducimus illum officiis numquam, provident velit quia rem
          quo aliquam ipsa nulla natus! Cumque veritatis cupiditate autem natus
          mollitia nostrum! Culpa beatae saepe sit adipisci soluta id laudantium
          repellat aperiam commodi praesentium a eius inventore veritatis illum,
          optio nobis libero iusto eaque ab deleniti quo perspiciatis at. Aut,
          voluptas. Incidunt. Magni, harum? Accusamus cumque consequatur ipsam
          ipsa maiores fugiat voluptatem, quibusdam velit? Saepe nesciunt quasi
          eligendi veritatis porro deleniti quas dolore quos dicta. Sint quod
          possimus esse quos veritatis neque. Optio ut reiciendis iste hic vel,
          eligendi saepe, corrupti quidem eos facilis sed, a ea aspernatur
          accusamus libero quo minus repellat odit amet sunt sint. Quos quidem
          cumque laboriosam quis. Recusandae maiores, magnam nostrum alias
          voluptates veniam eaque. Neque quia doloremque ipsa porro debitis
          omnis. Asperiores temporibus, tempora praesentium architecto nesciunt,
          a velit tenetur sint maxime deserunt minus nobis illum!
        </p>
      </TopInfoBoxStyle>
    </>
  );
}

export default TopInfoBox;
