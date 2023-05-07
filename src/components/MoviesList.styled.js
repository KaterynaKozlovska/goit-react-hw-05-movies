import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  list-style: none;
  margin-bottom: 20px;
  margin-right: auto;
`;

const Item = styled.li`
  padding-bottom: 5px;

  color: #020024;

  :hover {
    box-shadow: 0 4px 10px #000;
    scale: 1.01;
  }
`;

const Image = styled.img`
  display: block;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  :hover,
  :focus {
    color: #3f93b9;
    text-decoration: underline;
  }
`;

const Name = styled.p`
  font-size: 18px;

  text-align: center;
`;

export { List, Item, StyledLink, Image, Name };
