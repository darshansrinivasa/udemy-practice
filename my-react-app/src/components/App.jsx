import * as Calculator from './Calculator';

function App() {
    return (
        <ul>
            <li>{Calculator.Subtract(5, 2)}</li>
            <li>{Calculator.Add(5, 1)}</li>
            <li>{Calculator.Multiply(5, 1)}</li>
            <li>{Calculator.Divide(5, 2)}</li>
        </ul>
    )
}

export default App;