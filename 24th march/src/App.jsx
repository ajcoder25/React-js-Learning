import './App.css'
import { useState } from "react";

const Increment = () => {
  const [increment, setIncrement] = useState(0);

  return (
    <div>
      <p>{increment}</p>
      <button onClick={() => setIncrement(increment + 1)}>Increment</button>
      <button onClick={() => setIncrement(increment - 1)}>Decrement</button>
    </div>
  );
};

const ShowMessage = () => {
  const [message, setMessage] = useState("Show Message");
  const [visible, setVisible] = useState(false);

  const changeMessage = () => {
    setVisible(!visible);
    setMessage(visible ? "Show Message" : "Hide Message");
  };

  return (
    <div>
      <button onClick={changeMessage}>{message}</button>
      {visible && <p>This is togglable message </p>}
    </div>
  );
};

const TextColor = () => {
  const [color, changeColor] = useState("red");

  const newColor = () => {
    changeColor(color === "red" ? "green" : "red");
  };

  return (
    <div>
      <p style={{ color: color }}>Text Color Toggler</p>
      <button onClick={newColor}>Toggle Color</button>
    </div>
  );
};

const SelectFruit = () => {
  const fruit = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
  const [selectedFruit, setSeltectedFruit] = useState(" ");

  const fruitSelect = (fruitItem) => {
    setSeltectedFruit(`You Selected : ${fruitItem}`);
  };

  return (
    <>
      <h2>Select a Fruit</h2>
      <ul>
        {fruit.map((fruit, index) => (
          <li key={index} onClick={() => fruitSelect(fruit)}>
            {fruit}
          </li>
        ))}
      </ul>
      {selectedFruit && <p>{selectedFruit}</p>}
    </>
  );
};

const ChangeColor = () => {
  const [color, setColor] = useState("grey");

  const toggleButton = () => {
    setColor(color === "grey" ? "yellow" : "grey");
  };

  return (
    <>
      <button style={{ backgroundColor: color }} onClick={toggleButton}>
        Toggle Background
      </button>
    </>
  );
};

export default function App() {
  return (
    <>
      <Increment />
      <hr />
      <ChangeColor />
      <hr />
      <ShowMessage />
      <hr />
      <TextColor />
      <hr />
      <SelectFruit />
    </>
  );
}
