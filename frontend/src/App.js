import {useState} from "react";
import './App.css';
import StripeContainer from "./components/StripeContainer";
import spatula from "../src/assets/red-silicone-spatula.jpg"

function App() {
    const [showItem, setShowItem] = useState(false)
    return (
        <div className="App">
            <h1>The Spatula Store</h1>
            {showItem ? <StripeContainer/> :
                <>
                    <h3>$10.00</h3>
                    <img src={spatula} alt="Spatula"/>
                    <button className="button" onClick={() => setShowItem(true)}>Purchase Spatula</button>
                </>}
        </div>
    );
}

export default App;
