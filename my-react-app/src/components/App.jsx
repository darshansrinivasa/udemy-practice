import * as PI from './Math.jsx';

console.log(PI);
function App() {
    return (
        <div>
            <li>{PI.default()}</li>
            <li>{PI.DoublePi()}</li>
            <li>{PI.TriplePi()}</li>
        </div>
    )
}

export default App;