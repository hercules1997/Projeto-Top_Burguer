import styled from 'styled-components'

export const Container = styled.div`
  @media screen and (max-width: 993px) {
    margin-bottom: 10px;
  }
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  color: white;
  position: sticky;
  top: 100px;

  margin-top: 40px;
  margin-bottom: 15px;
  border-radius: 12px;
  background: #3f3f3f;
  box-shadow: 0px 0px 8px black;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      margin-bottom: 20px;
      color: #fa9600;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
      text-align: end;
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      text-align: end;
    }
  }
  .container-bottom {
    display: flex;
    font-weight: bold;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.3rem;
    margin-top: 50px;
  }
`

export const ButtonFinish = styled.div`
  Button {
    position: sticky;
    top: 340px;

    /* @media screen and (max-width: 993px) {
      display: none;
    } */
  }
`
