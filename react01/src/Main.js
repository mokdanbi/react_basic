const Main = ({ mok, work }) => {
    return (
        <main>
            {mok}는 {work}를 하고있다.
        </main>
    )
}
// return 안은 문자로 나타나고 그게 아니라면 {} 사용

// 전달받은 값이 없을 때 기본으로 설정해놓은 값
Main.defaultProps = {
    work : '백수'
}

export default Main;