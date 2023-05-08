import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  margin-bottom: 20px;
  margin-right: auto;
`;

const Item = styled.li`
  padding-bottom: 5px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;

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

export { List, Item, StyledLink, Name };
