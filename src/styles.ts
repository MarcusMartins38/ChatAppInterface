import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  width: 100%;
  justify-content: space-between;
`;

export const ContainerLeft = styled.div`
  width: 25%;
  left: 0;
  background-color: #3b7d65;

  height: 100%;

  input {
    margin-left: 10px;
    border-radius: 5px;
    border: 0;
    padding: 6px;
    width: 88%;
    background-color: #54a096;
    margin-bottom: 10px;
  }
`;

export const DivPerfil = styled.div`
  display: flex;
  justify-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;

  img {
    width: 15%;
    border-radius: 50%;
  }

  div {
    margin-left: 15px;

    p {
      margin: 0;
    }
  }
`;

export const DivInfoCliente = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: 10px;

    & + p {
      margin-right: 10px;
      font-size: 30px;
    }
  }
`;

export const DivCliente = styled.div`
  display: flex;
  justify-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;

  img {
    width: 20%;
    border-radius: 50%;
  }

  div {
    margin-top: 8px;
    margin-left: 15px;

    p {
      margin: 0;
    }
  }
`;

export const ContainerMiddle = styled.div`
  width: 100vh;
  position: relative;
  background-color: #ebebeb;
`;

export const BoxOfClientWord = styled.div`
  margin-top: 10%;
  margin-left: 10%;
  background-color: white;
  max-width: 400px;
  box-shadow: 0 0 1px black;
  border-radius: 5px;

  p {
    color: black;
    margin-left: 10px;
    font-size: 20px;
  }
`;

export const BoxOfMineWord = styled.div`
  margin-top: 5%;
  position: absolute;
  right: 0;
  margin-right: 5%;
  margin-left: 10%;
  background-color: #9fc695;
  min-width: 400px;
  max-width: 400px;
  box-shadow: 0 0 1px black;
  border-radius: 5px;
  p {
    color: black;
    margin-left: 10px;
    font-size: 20px;
  }
`;

export const DivTopo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  background-color: white;

  position: absolute;
  top: 0;

  input {
    margin: 10px;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 6px;
  }

  div {
    button {
      margin: 10px;
      padding: 5px 25px;
      color: #01baef;
      background-color: white;
      border: 1px solid grey;

      & + button {
        background-color: #01baef;
        color: white;
      }
    }
  }
`;

export const DivLateral = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  height: 100%;
  background-color: white;

  box-shadow: 0 0 2px grey;

  button {
    width: 60px;
    height: 70px;
    background-color: white;
    border: 0;
  }
`;

export const DivInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: white;

  align-items: center;
  box-shadow: 0 0 1em grey;

  position: absolute;
  bottom: 0;

  input {
    margin: 10px;
    border-radius: 15px;
    border: 1px solid grey;
    padding: 12px;
    width: 60%;
    margin-left: 8%;
  }

  button {
    margin-left: 15px;
    background-color: white;
    border: 0;
  }
`;

export const ContainerRight = styled.div`
  width: 25%;
  right: 0;
  box-shadow: 0 0 2px grey;

  p {
    color: black;
  }

  div {
    margin-left: 10px;
  }

  .divLateral {
    margin-top: 10px;
    margin-left: 25px;
    margin-bottom: 15px;

    .tituloLateral {
      color: #01baef;
    }

    .textoLateral {
      margin-top: 10px;
      line-height: 1.5em;
    }
  }

  .divLateralIcon {
    display: flex;
    margin-top: 20px;
    margin-left: 25px;
    margin-bottom: 15px;

    .tituloLateral {
      color: #01baef;
    }
  }
`;

export const DivIcons = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    margin-top: 10px;
    width: 45%;
    height: 32px;
    background-color: white;
    border: 1px solid grey;

    svg {
      margin-top: 5px;
    }
  }
`;
