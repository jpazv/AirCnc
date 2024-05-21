import React, { useState } from 'react';
import styled from 'styled-components';
import hotelaria from '../assets/hotelatia.svg';
import hotelaria2 from '../assets/hotelaria2.svg';
import hotelaria3 from '../assets/hotelaria3.svg';
import hotelaria4 from '../assets/hotelaria4.svg';
import hotelaria5 from '../assets/hotelaria5.svg';
import userLogo from '../assets/userLogo.svg';
import logo from '../assets/logo.svg';
import searchLogo from '../assets/searchIcon.svg';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
`;

const Logo = styled.img`
  height: 100px;
`;

const UserLogo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const SearchBar = styled.div`
  position: relative;
  width: 40%;

  input {
    padding: 10px;
    padding-right: 30px; // Espaço para o logo de pesquisa
    border: 2px solid #ccc; // Aumenta a grossura da linha do input
    border-radius: 50px;
    width: 100%;
    transition: padding 0.3s ease; // Adiciona uma transição suave ao padding
  }

  img {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    height: 30px;
    transition: height 0.3s ease; // Adiciona uma transição suave à altura
  }

  input:focus {
    padding-right: 35px; // Aumenta o padding-right quando o input está focado
  }

  input:focus + img {
    height: 50px; // Aumenta o tamanho do logo quando o input está focado
  }
`;


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Isso limita o número de itens por linha para 4
  gap: 20px;
  padding: 20px 15%; // Adiciona padding à esquerda e à direita
`;
const GridItem = styled.div`
  border: 2px solid #ccc; // Aumenta a grossura da borda
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column; // Isso faz com que a imagem e o conteúdo sejam empilhados verticalmente
  position: relative; // Isso permite que o Rating seja posicionado em relação ao GridItem
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1); // Adiciona uma leve sombra
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Rating = styled.p`
color: black; // Muda a cor da estrela para preto
position: absolute;
top: 10px;
right: 10px;
`;

const Content = styled.div`
  padding: 10px;
  flex-grow: 1; // Isso faz com que o conteúdo ocupe todo o espaço restante abaixo da imagem
`;

const Title = styled.h3`
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

const Location = styled.p`
  color: grey;
  margin-bottom: 10px;
`;

const Date = styled.p`
  color: grey;
  margin-bottom: 10px;
`;

const Price = styled.p`
  color: black;
  font-weight: bold;
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1); // Adiciona uma leve sombra, semelhante ao card
  text-align: center;
  z-index: 1000;
`;

const MoreButton = styled.button`
  background: transparent;
  border: none;
  color: blue; // Faz com que pareça um link de texto
  cursor: pointer;
  margin-bottom: 20px; // Aumenta o espaço entre o botão "Saber mais" e o botão "Reservar"
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
 const Description = styled.p`
  max-width: 600px; // Isso faz com que o texto quebre em linhas de tamanho semelhante
  text-align: justify; // Isso alinha o texto à esquerda e à direita
  margin-bottom: 20px; // Adiciona espaço abaixo da descrição
`;




const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;


const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #ccc; // Linha cinza para delimitar o conteúdo do site e o conteúdo do rodapé
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;

  .dot {
    margin: 0 10px;
  }
`;

const RightContent = styled.div`
padding-right: 40px;
  display: flex;
  align-items: center;
`;



function AdminPage() {
  const [selectedListing, setSelectedListing] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [showFullDescription, setShowFullDescription] = useState(false);


  const listings = [
    { id: 1, title: 'Paris', price: '$100', rating: '4,6', image: hotelaria, location: 'Paris, França', description: 'Esta acomodação encantadora oferece uma experiência única com vistas deslumbrantes e comodidades modernas. Localizada em um bairro tranquilo, é o lugar perfeito para relaxar e descontrair. A casa é espaçosa e bem iluminada, com uma decoração elegante e uma atmosfera acolhedora.' },
    { id: 2, title: 'Londres', price: '$200', rating: '4,6', image: hotelaria2, location: 'Londres, Reino Unido', description: 'Desfrute do luxo e do conforto nesta bela acomodação. Com uma vista panorâmica da cidade, esta propriedade oferece uma experiência inesquecível. A casa é equipada com todas as comodidades modernas e tem um interior elegante e sofisticado.' },
    { id: 3, title: 'Barcelona', price: '$100', rating: '4,6', image: hotelaria3, location: 'Barcelona, Espanha', description: 'Situada em um local sereno, esta acomodação é um refúgio perfeito para aqueles que procuram uma escapadela tranquila. A casa é aconchegante e convidativa, com um belo jardim e uma vista deslumbrante. É o lugar perfeito para relaxar e rejuvenescer.' },
    { id: 4, title: 'Rio de Janeiro', price: '$200', rating: '4.6', image: hotelaria4, location: 'Rio de Janeiro, Brasil', description: 'Esta acomodação luxuosa oferece uma estadia inigualável com seu design elegante e comodidades de última geração. Localizada no coração da cidade, oferece fácil acesso a restaurantes, lojas e atrações locais. A casa é espaçosa e bem iluminada, proporcionando um ambiente acolhedor e relaxante.' },
    { id: 5, title: 'Tokyo', price: '$200', rating: '4.8', image: hotelaria5, location: 'Tokyo, Japão', description: 'Experimente o melhor da vida nesta acomodação deslumbrante. Com vistas panorâmicas e um interior luxuoso, esta casa oferece uma estadia verdadeiramente memorável. A propriedade está convenientemente localizada perto de atrações populares e oferece uma variedade de comodidades para garantir uma estadia confortável.' },
  ];


  const handleOpenPopup = (listing) => {
    setSelectedListing(listing);
  };

  const handleClosePopup = () => {
    setSelectedListing(null);
    setShowFullDescription(false);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event.key === 'Enter') {
      setFilterValue(searchValue);
    }
  };

  const filteredListings = listings.filter(listing => listing.title.toLowerCase().includes(filterValue.toLowerCase()));


  const handleToggleDescription = (event) => {
    event.stopPropagation(); // Isso impede que o evento de clique se propague para o PopupBackground
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div>
      <Header>
        <Logo src={logo} alt="AirCnC" />
        <SearchBar>
          <input type="text" placeholder="Search..." id="search-input" value={searchValue} onChange={handleSearchChange} onKeyPress={handleSearchSubmit} />
          <img src={searchLogo} alt="Search" />
        </SearchBar>
        <UserLogo src={userLogo} alt="User" onClick={({})} />
      </Header>
      <GridContainer>
        {filteredListings.map(listing => ( // Aqui estamos mapeando as listagens filtradas
          <GridItem key={listing.id} onClick={() => handleOpenPopup(listing)}>
            <Image src={listing.image} alt={listing.title} />
            <Rating>{listing.rating} ⭐</Rating>
            <Content>
              <Title>{listing.title}</Title>
              <Location>{listing.location}</Location>
              <Date>Mar 3-6</Date>
              <Price>{listing.price} por noite</Price>
            </Content>
          </GridItem>
        ))}
        {selectedListing && (
          <Popup>
            <CloseButton onClick={handleClosePopup}>X</CloseButton>
            <Image src={selectedListing.image} alt={selectedListing.title} />
            <Title>{selectedListing.title}</Title>
            <Price>{selectedListing.price}</Price>
            <Rating>{selectedListing.rating} ⭐</Rating>
            <Description>
              {showFullDescription ? selectedListing.description : `${selectedListing.description.substring(0, 150)}...`}
            </Description>
            <MoreButton onClick={handleToggleDescription}>
              {showFullDescription ? 'Mostrar menos' : 'Saber mais'}
            </MoreButton>
            <Button onClick={handleClosePopup}>Reservar</Button>

          </Popup>
        )}
      </GridContainer>
      <Footer>
        <LeftContent>
          <p>2024 AirCnC, Inc</p>
          <span className="dot">.</span>
          <p>Terms</p>
          <span className="dot">.</span>
          <p>Privacy</p>
          <span className="dot">.</span>
        </LeftContent>
        <RightContent>
          <p>Support and resources</p>
        </RightContent>
      </Footer>
    </div>
  );
}

export default AdminPage;

