import { AppWrapper, Main, MainWrapper } from "./App.styles";
import TabComponent from "./components/TabComponent/TabComponent";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <h1>#todo</h1>
        <MainWrapper>
          <Main>
            <TabComponent/>
          </Main>
        </MainWrapper>
      </AppWrapper>
    </>
  );
}

export default App;
