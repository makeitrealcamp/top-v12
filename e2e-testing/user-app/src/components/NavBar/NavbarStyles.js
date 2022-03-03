import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  position: sticky;
`;

export const LinkProducts = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageLogo = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ContainerItems = styled.ul`
  display: flex;
  align-items: center;
`;

export const ButtonLogout = styled.button`
  margin: 0 15px;
  background-color: white;
  border: 1px solid blue;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    border-color: rgba(15, 49, 221, 0.5);
    color: gray;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:focus {
    border-color: rgba(15, 49, 221, 0.5);
    outline: none;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.0125),
      0 0 8px rgba(34, 139, 230, 0.5);
    transition: all 0.1s ease-in-out;
  }
`;
