export default function Header(props) {
    return (
        <>
            <div style={props.style}>
                {props.name}는 {props.age}살 입니다.
            </div>
        </>
    )
}

// props : 속성을 나타내는 데이터 (property들)
// export를 한번에 주는 방법