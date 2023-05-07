import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  width: 100%;
  height: auto;
  border: 3px solid rgba(132, 132, 132, 0.5);
  border-radius: 4px;
  box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5);
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100px;
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const Content = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

export { List, Item, Image, TextWrapper, Name, Content };
