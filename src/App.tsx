import React from "react";
import { FiPhoneCall, FiImage, FiTrash2 } from "react-icons/fi";
import {
  FaWhatsapp,
  FaRegCalendarAlt,
  FaRocketchat,
  FaMicrophone,
  FaTelegramPlane,
  FaPen,
} from "react-icons/fa";
import { AiOutlineSkype, AiOutlineMail, AiOutlineCloud } from "react-icons/ai";

import {
  Container,
  ContainerLeft,
  DivPerfil,
  DivInfoCliente,
  DivCliente,
  ContainerMiddle,
  ContainerRight,
  DivIcons,
  DivTopo,
  DivLateral,
  DivInput,
  BoxOfClientWord,
  BoxOfMineWord,
} from "./styles";

const App: React.FC = () => {
  return (
    <Container>
      <ContainerLeft>
        <DivPerfil>
          <img
            src="https://avatars3.githubusercontent.com/u/57776263?s=460&u=288a03e3830a5fb19dfe83a0f8f9f9abf48cfaac&v=4"
            alt="Foto"
          />
          <div>
            <p>Marcus Martins</p>
            <p>pequeno titulo</p>
          </div>
        </DivPerfil>

        <input placeholder="Pesquisar" />

        <DivInfoCliente>
          <p>Clientes | em fila 3</p>
          <p>+</p>
        </DivInfoCliente>

        <DivCliente>
          <img
            src="https://avatars3.githubusercontent.com/u/57776263?s=460&u=288a03e3830a5fb19dfe83a0f8f9f9abf48cfaac&v=4"
            alt="Foto"
          />
          <div>
            <p>Marcus Martins</p>
            <p>pequeno titulo</p>
          </div>
        </DivCliente>

        <DivCliente>
          <img
            src="https://avatars3.githubusercontent.com/u/57776263?s=460&u=288a03e3830a5fb19dfe83a0f8f9f9abf48cfaac&v=4"
            alt="Foto"
          />
          <div>
            <p>Marcus Martins</p>
            <p>pequeno titulo</p>
          </div>
        </DivCliente>
      </ContainerLeft>

      <ContainerMiddle>
        <DivTopo>
          <input placeholder="Pesquisar" />
          <div>
            <button>TRANSFERIR</button>
            <button>FINALIZAR ATENDIMENTO</button>
          </div>
        </DivTopo>
        <DivLateral>
          <button>
            <FaRegCalendarAlt size={30} color="#01BAEF" />
          </button>
          <button>
            <FaWhatsapp size={30} color="green" />
          </button>
          <button>
            <AiOutlineMail size={30} color="red" />
          </button>
          <button>
            <AiOutlineSkype size={30} color="#01BAEF" />
          </button>
          <button>
            <FiPhoneCall size={30} color="purple" />
          </button>
          <button>
            <FaRocketchat size={30} color="orange" />
          </button>
        </DivLateral>

        <BoxOfClientWord>
          <p>Haaa, I knew it</p>
        </BoxOfClientWord>

        <BoxOfMineWord>
          <p>What?!? </p>
        </BoxOfMineWord>

        <BoxOfClientWord>
          <p>I COULD DO IT!!</p>
        </BoxOfClientWord>

        <BoxOfMineWord>
          <p>Congradulations my friend!!</p>
        </BoxOfMineWord>

        <DivInput>
          <input placeholder="Digite sua mensagem..." />
          <button>
            <FiImage size={32} color="grey" />
          </button>
          <button>
            <AiOutlineCloud size={32} color="grey" />
          </button>
          <button>
            <FaMicrophone size={32} color="grey" />
          </button>
          <button>
            <FaTelegramPlane size={32} color="grey" />
          </button>
        </DivInput>
      </ContainerMiddle>

      <ContainerRight>
        <h1>Right</h1>
        <DivCliente>
          <img
            src="https://avatars3.githubusercontent.com/u/57776263?s=460&u=288a03e3830a5fb19dfe83a0f8f9f9abf48cfaac&v=4"
            alt="Foto"
          />
          <div>
            <p>Marcus Martins</p>
            <p>pequeno titulo</p>
          </div>
        </DivCliente>
        <DivIcons>
          <button>
            <FaPen size={20} color="#01BAEF" />
          </button>
          <button>
            <FiTrash2 size={20} color="red" />
          </button>
        </DivIcons>

        <div className="divLateral">
          <p className="tituloLateral">ULTIMAS CONVERSAS</p>
          <p className="textoLateral">25/09/2019 (10 dias atrás)</p>
          <p className="textoLateral">15/09/2019 (20 dias atrás)</p>
          <p className="textoLateral">25/06/2019 (100 dias atrás)</p>
        </div>

        <div className="divLateral">
          <p className="tituloLateral">OBSERVAÇÕES</p>
          <p className="textoLateral">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            eaque magni natus molestiae, autem architecto ipsum similique
            doloribus dolorem quidem aspernatur? Ea iusto consectetur in modi
            aperiam, eligendi quod fuga.
          </p>
        </div>

        <div className="divLateralIcon">
          <FaWhatsapp size={30} color="grey" />

          <div>
            <p className="tituloLateral">WHATSAPP</p>
            <p className="textoLateral">55(69)1234-5678</p>
          </div>
        </div>

        <div className="divLateralIcon">
          <FaWhatsapp size={30} color="grey" />

          <div>
            <p className="tituloLateral">EMAIL</p>
            <p className="textoLateral">marcusmartins38@gmail.com</p>
          </div>
        </div>

        <div className="divLateralIcon">
          <FaWhatsapp size={30} color="grey" />

          <div>
            <p className="tituloLateral">SKYPE</p>
            <p className="textoLateral">Não Tenho :c</p>
          </div>
        </div>
      </ContainerRight>
    </Container>
  );
};

export default App;
