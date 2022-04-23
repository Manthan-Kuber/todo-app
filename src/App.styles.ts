import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 3.2rem;

  h1{
      font: 700 3.6rem var(--ff-raleway);
      text-align: center;
  }
`;

export const Main = styled.main`
    width:min(100%,48rem);
    border:1px solid red;
    margin-top:6rem;
`
export const MainWrapper= styled.div`
display: grid;
justify-items: center;
`
