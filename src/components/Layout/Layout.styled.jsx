import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  overflow-x: hidden;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #d6cbbd;
    z-index: -1;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 50px;
  border-bottom: 1px solid black;
  box-shadow: 0 2px 39px rgba(0, 0, 0, 1.2);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-left: 8px;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
