import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const monga = "무엇인가";
  const DATA = [
    { id: 1, name: "목단비" },
    { id: 2, name: "금단비" },
    { id: 3, name: "토단비" },
    { id: 4, name: "일단비" },
  ]

  return (
    <>
      <Header monga={monga} member={DATA} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
