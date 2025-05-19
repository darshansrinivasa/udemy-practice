import Header from './Header';
import Card from './Card';
import Contacts from './Contacts';

function App() {
    return (
        <div>
            <Header />
            <Card className="card" name={Contacts[0].name} image={Contacts[0].image} contact={Contacts[0].contact} email={Contacts[0].email} />
            <Card className="card" name={Contacts[1].name} image={Contacts[1].image} contact={Contacts[1].contact} email={Contacts[1].email} />
            <Card className="card" name={Contacts[2].name} image={Contacts[2].image} contact={Contacts[2].contact} email={Contacts[2].email} />
        </div>
    )
}

export default App;