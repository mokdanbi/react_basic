import Header from "./Header";

function App() {
  // jsx 밖의 주석
  return (
    <header>
      {/* jsx 안의 주석 */}
      <Header style={{ color: 'red' }} name="목단비" age={18} />
      {/* component 자체에는 style을 적용할 수 없다 */}
      <nav>
        <ul>
          {/* ; 대신 , 를 사용한다. font-size > fontSize 로 사용한다. */}
          <li><a href="" style={{ color: 'red', fontSize: '40px' }}>menu01</a></li>
          <li><a href="">menu02</a></li>
          <li><a href="">menu03</a></li>
          <li><a href="">menu04</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default App;