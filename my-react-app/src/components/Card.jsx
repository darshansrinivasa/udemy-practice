function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h1 className="name">{props.name}</h1>
                <img className="circle-img" src={props.image} alt="avatar" />
            </div>
            <div className="bottom">
                <p>{props.contact}</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;