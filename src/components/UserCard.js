import React, { useState } from 'react';
import styled from 'styled-components';

const UserCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 64px;
  right: 16px;
  width: 300px;
  z-index: 1000;
`;

const UserInfo = styled.div`
  margin-bottom: 16px;
`;

const UserName = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const UserType = styled.p`
  font-size: 14px;
  color: #888888;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid #e0e0e0;
  padding-top: 16px;
`;

const UserButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  color: #888888;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #333333;
  }
`;

const InitialCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: black;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserCardComponent = () => {
  const [showCard, setShowCard] = useState(false);

  const handleToggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <>
      <UserButton onClick={handleToggleCard}>
        <InitialCircle>J</InitialCircle>
      </UserButton>
      {showCard && (
        <UserCard>
          <UserInfo>
            <UserName>John Doe</UserName>
            <UserType>Cliente</UserType>
          </UserInfo>
          <ButtonContainer>
            <UserButton>Notificações</UserButton>
            <UserButton>Viagens</UserButton>
            <UserButton>Favoritos</UserButton>
            <UserButton>Conta</UserButton>
            <UserButton>Sair da Conta</UserButton>
          </ButtonContainer>
        </UserCard>
      )}
    </>
  );
};

export default UserCardComponent;
