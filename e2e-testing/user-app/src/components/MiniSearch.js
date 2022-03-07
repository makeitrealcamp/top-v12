import styled from 'styled-components';

const ContainerTitleSearch = styled.div`
  border-bottom: 1px solid gray;
`;

export function MiniSearch({ title }) {
  return (
    <ContainerTitleSearch>
      <p>{title}</p>
    </ContainerTitleSearch>
  );
}
