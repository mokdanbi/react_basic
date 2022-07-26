import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main mok="목단비" work="음주" />
      <Main mok="금단비" work="가무" />
      <Main mok="토단비" work="알바" />
      <Main mok="일단비" />
      <Footer />
    </Wrapper>
  )
}

// 첫 글자는 대문자

export default App;