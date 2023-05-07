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
  background-color: rgba(240, 240, 242, 0.7);
  border: 3px solid rgba(132, 132, 132, 0.5);
  border-radius: 4px;
  box-shadow: 5px 7px 10px -2px rgba(132, 132, 132, 0.5);
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const Content = styled.p`
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
  width: 240px;
  max-height: 100px;
  overflow-y: scroll;
`;

export { List, Item, Name, Content };
