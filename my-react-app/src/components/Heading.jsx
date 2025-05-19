function Heading() {
    let color;
    let size = '40px';
    let text;

    const time = new Date().getHours();
    if (time > 0 && time < 12) {
        color = 'red';
        text = 'Good Morning';
    } else if (time >= 12 && time < 18) {
        color = 'green';
        text = 'Good Afternoon';
    } else {
        color = 'blue';
        text = 'Good Night';
    }

    const customStyle = {
        color: color,
        fontSize: size
    };
    
    return <h1 style={customStyle}>{text}</h1>;
}

export default Heading;