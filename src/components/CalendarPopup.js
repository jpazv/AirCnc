import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Certifique-se de que o CSS do calendário está importado

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

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 1000;
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

const CalendarPopup = ({ reservations, onClose }) => {
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
      }).toLowerCase();
      
      const reservation = reservations.find(res => res.date === formattedDate);
      
      if (reservation) {
        return <p>{reservation.listingId}</p>;
      }
    }
    return null;
  };

  return (
    <PopupBackground onClick={onClose}>
      <Popup onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Calendar tileContent={tileContent} />
      </Popup>
    </PopupBackground>
  );
};

export default CalendarPopup;
