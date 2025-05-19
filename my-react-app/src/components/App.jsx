import Header from './Header';
import Card from './Card';

function App() {
    return (
        <div>
            <Header />
            <Card className="card" name="Virat kohli" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qIivAq9P3NUfmSK7jgnujOpYPFN2fcELqg&s" contact="+91 1234567890" email="vk18@gmail.com" />
            <Card className="card" name="Anushka Sharma" image="https://static.toiimg.com/thumb/msid-59646360,width-400,resizemode-4/59646360.jpg" contact="+91 9876123405" email="anushkasharmat@gmail.com" />
            <Card className="card" name="Sharukh Khan" image="https://images.firstpost.com/wp-content/uploads/2020/11/shah-rukh-khan-1579698057.jpg?im=FitAndFill=(596,336)" contact="+91 9876543210" email="srk@gmail.com" />
        </div>
    )
}

export default App;