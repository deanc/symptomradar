import React from 'react';
import styled from 'styled-components';
import useModal from './useModal';
import Modal from './Modal';

const AppHeader = styled.header`
  height: 105px;
  padding: 0 24px;
  background-color: #fff;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const H1 = styled.h1`
  font-size: 32px;
  margin: 16px 0;
`;

const Select = styled.select`
  margin: 26px 0;
`;

const FilterToggle = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  background-color: transparent;
`;

function Header() {
  const { isShowing, toggle } = useModal();
  return (
    <AppHeader>
      <HeaderWrapper>
        <H1>Symptom radar</H1>
        <Select name="language" id="">
          <option value="Fi">Fi</option>
          <option value="En">En</option>
        </Select>
      </HeaderWrapper>
      <FilterToggle onClick={toggle}>Filter</FilterToggle>
      <Modal isShowing={isShowing} hide={toggle} />
    </AppHeader>
  );
}

export default Header;
