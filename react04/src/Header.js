function Header(props) {
    return (
        <ul>
            {props.monga}
            {/* {props.member[0].name}
            {props.member[1].name}
            {props.member[2].name}
            {props.member[3].name} */}
            {props.member.map(el => <li key={el.id}>{el.name}</li>)}
        </ul>
    )
}

export default Header;