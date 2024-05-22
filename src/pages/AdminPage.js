import React, { useState } from 'react';
import styled from 'styled-components';
import hotelaria from '../assets/hotelatia.svg';
import hotelaria2 from '../assets/hotelaria2.svg';
import hotelaria3 from '../assets/hotelaria3.svg';
import hotelaria4 from '../assets/hotelaria4.svg';
import hotelaria5 from '../assets/hotelaria5.svg';
import logo from '../assets/logo.svg';
import searchLogo from '../assets/searchIcon.svg';
import UserCardComponent from '../components/UserCard';
import CalendarPopup from '../components/CalendarPopup';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
`;

const Logo = styled.img`
  height: 100px;
  cursor: pointer;
`;

const SearchBar = styled.div`
  position: relative;
  width: 40%;

  input {
    padding: 10px;
    padding-right: 30px;
    border: 2px solid #ccc;
    border-radius: 50px;
    width: 100%;
    transition: padding 0.3s ease;
  }

  img {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    height: 30px;
    transition: height 0.3s ease;
  }

  input:focus {
    padding-right: 35px;
  }

  input:focus + img {
    height: 50px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px 15%;
`;

const GridItem = styled.div`
  border: 2px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
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
  color: black;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Content = styled.div`
  padding: 10px;
  flex-grow: 1;
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
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 1000;
`;

const MoreButton = styled.button`
  background: transparent;
  border: none;
  color: blue;
  cursor: pointer;
  margin-bottom: 20px;
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
  max-width: 600px;
  text-align: justify;
  margin-bottom: 20px;
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
  z-index: 999;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #ccc;
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

const UserCardWrapper = styled.div`
  position: relative;
`;

const UserCardPopup = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NotificationIndicator = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
`;

function AdminPage() {
  const [selectedListing, setSelectedListing] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showUserCard, setShowUserCard] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [reservations, setReservations] = useState([]);

  const listings = [
    { id: 1, title: 'Paris', price: '$100', rating: '4,6', image: hotelaria, location: 'Paris, França', date: 'mar 5-9', description: 'Esta acomodação encantadora oferece uma experiência única com vistas deslumbrantes e comodidades modernas. Localizada em um bairro tranquilo, é o lugar perfeito para relaxar e descontrair. A casa é espaçosa e bem iluminada, com uma decoração elegante e uma atmosfera acolhedora.' },
    { id: 2, title: 'Londres', price: '$200', rating: '4,6', image: hotelaria2, location: 'Londres, Reino Unido', date: 'mar 5-9', description: 'Desfrute do luxo e do conforto nesta bela acomodação. Com uma vista panorâmica da cidade, esta propriedade oferece uma experiência inesquecível. A casa é equipada com todas as comodidades modernas e tem um interior elegante e sofisticado.' },
    { id: 3, title: 'Barcelona', price: '$100', rating: '4,6', image: hotelaria3, location: 'Barcelona, Espanha', date: 'mar 5-9', description: 'Situada em um local sereno, esta acomodação é um refúgio perfeito para aqueles que procuram uma escapadela tranquila. A casa é aconchegante e convidativa, com um belo jardim e uma vista deslumbrante. Desfrute da tranquilidade e da beleza natural que esta propriedade oferece.' },
    { id: 4, title: 'Nova Iorque', price: '$100', rating: '4,6', image: hotelaria4, location: 'Nova Iorque, EUA', date: 'mar 5-9', description: 'Localizada no coração da cidade, esta acomodação oferece fácil acesso a todas as principais atrações. A casa é moderna e elegante, com um design contemporâneo e comodidades de primeira classe. Desfrute do conforto e da conveniência desta propriedade excepcional.' },
    { id: 5, title: 'Tokyo', price: '$200', rating: '4,8', image: hotelaria5, location: 'Tokyo, Japão', date: 'mar 5-9', description: 'Experimente o melhor da vida nesta acomodação deslumbrante. Com vistas panorâmicas e um interior luxuoso, esta casa oferece uma estadia verdadeiramente memorável. A propriedade está convenientemente localizada perto de atrações populares e oferece uma variedade de comodidades para garantir uma estadia confortável.' },
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

  const handleToggleCard = () => {
    setShowUserCard(!showUserCard);
  };

  const handleCloseUserCard = (event) => {
    if (event.target.id === 'user-card-popup') {
      setShowUserCard(false);
    }
  };

  const handleReservation = async (listing) => {
    const reservationData = {
      userId: 1, // Supondo que o ID do usuário seja 1, ajuste conforme necessário
      listingId: listing.id,
      date: listing.date,
    };

    try {
      const response = await fetch('http://your-api-endpoint.com/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Reservation successful:', data);
      setNotifications(true); // Define a notificação como verdadeira em caso de sucesso
      setReservations([...reservations, reservationData]); // Adiciona a reserva ao estado
      handleClosePopup();
    } catch (error) {
      console.error('Error making reservation:', error);
    }
  };

  const handleToggleDescription = (event) => {
    event.stopPropagation(); // Isso impede que o evento de clique se propague para o PopupBackground
    setShowFullDescription(!showFullDescription);
  };

  const handleOpenCalendar = () => {
    setShowCalendar(true);
    setNotifications(false); // Reseta as notificações ao abrir o calendário
  };

  const handleCloseCalendar = () => {
    setShowCalendar(false);
  };

  const filteredListings = listings.filter(listing => listing.title.toLowerCase().includes(filterValue.toLowerCase()));

  return (
    <div>
      <Header>
        <Logo src={logo} alt="AirCnC" onClick={() => window.location.reload()} />
        <SearchBar>
          <input
            type="text"
            placeholder="Search..."
            id="search-input"
            value={searchValue}
            onChange={handleSearchChange}
            onKeyPress={handleSearchSubmit}
          />
          <img src={searchLogo} alt="Search" />
        </SearchBar>
        <UserCardWrapper onClick={handleToggleCard}>
          <UserCardComponent />
          {notifications && <NotificationIndicator />} {/* Mostra a bolinha de notificação */}
        </UserCardWrapper>
      </Header>
      {showUserCard && (
        <div id="user-card-popup" onClick={handleCloseUserCard}>
          <UserCardPopup>
            <UserCardComponent />
          </UserCardPopup>
        </div>
      )}
      <GridContainer>
        {filteredListings.map(listing => (
          <GridItem key={listing.id} onClick={() => handleOpenPopup(listing)}>
            <Image src={listing.image} alt={listing.title} />
            <Rating>{listing.rating} ⭐</Rating>
            <Content>
              <Title>{listing.title}</Title>
              <Location>{listing.location}</Location>
              <Date>{listing.date}</Date>
              <Price>{listing.price} por noite</Price>
            </Content>
          </GridItem>
        ))}
      </GridContainer>

      {selectedListing && (
        <PopupBackground onClick={handleClosePopup}>
          <Popup onClick={(e) => e.stopPropagation()}>
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
            <Button onClick={() => handleReservation(selectedListing)}>Reservar</Button>
          </Popup>
        </PopupBackground>
      )}

      {showCalendar && (
        <CalendarPopup reservations={reservations} onClose={handleCloseCalendar} />
      )}

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
          <Button onClick={handleOpenCalendar}>Ver Reservas</Button>
        </RightContent>
      </Footer>
    </div>
  );
}

export default AdminPage;
