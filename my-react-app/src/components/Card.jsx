import Avatar from './Avatar';

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h1 className="name">{props.name}</h1>
                <Avatar image={props.image} />
            </div>
            <div className="bottom">
                <p>{props.contact}</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;