import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;

const BoxDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 4px;
  overflow: hidden;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: rgb(0, 0, 0);
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.33;
`;

const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.33;
`;

const Description = styled.p`
  max-height: 250px;
  max-width: 270px;
  overflow-y: auto;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.33;
  margin-top: -5px;
`;

const Count = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #090979;
`;

const BoxAdditional = styled.div`
  margin-top: 30px;
`;

const List = styled.ul`
  display: inline-flex;
  gap: 20px;
`;

const ItemLink = styled(NavLink)`
  display: flex;
  align-content: center;
  align-items: center;
  padding: 6px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  background-color: #090979;
  border: 1px solid rgba(132, 132, 132, 0.5);
  border-radius: 4px;
  box-shadow: 4px 5px 10px -2px rgba(132, 132, 132, 0.5);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &.active {
    color: #090979;
    background-color: #fff;
    box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5) inset;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #090979;
    background-color: #fff;
    box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5) inset;
  }
`;

export {
  MovieContainer,
  BoxDetails,
  BoxAdditional,
  Image,
  InfoWrapper,
  Title,
  SubTitle,
  Description,
  Count,
  List,
  ItemLink,
};
