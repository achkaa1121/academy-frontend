import { useState } from "react";
import "./App.css";

function App() {}
function Ex4() {
  const [name, nameSetter] = useState("");
  const [age, ageSetter] = useState(0);
  const [active, isActive] = useState(false);
  return (
    <div>
      <div className="INameAge">
        <input
          type="text"
          placeholder="Name"
          onChange={(input) => nameSetter(input.target.value)}
        />
        <input
          type="number"
          value={age}
          onChange={(input) => {
            if (Number.isNaN(parseInt(input.target.value))) {
              ageSetter(0);
            } else {
              ageSetter(parseInt(input.target.value));
            }
          }}
        />
      </div>
      <label>
        <input type="checkbox" defaultChecked />
        Is Active
      </label>
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    </div>
  );
}
function Ex3() {
  const [click, isClicked] = useState(false);
  const notClicked = () => {
    return (
      <button
        onClick={() => {
          isClicked(true);
        }}
      >
        👁 Reveal Secret
      </button>
    );
  };
  const clicked = () => {
    return (
      <div>
        <button
          onClick={() => {
            isClicked(false);
          }}
        >
          🙈 Hide Secret
        </button>
        <p>✨ React is awesome! ✨</p>
      </div>
    );
  };
  return <>{click ? clicked() : notClicked()}</>;
}
function Ex2() {
  const [count, countSetter] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          countSetter(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          countSetter(0);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          countSetter(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}
function Ex1() {
  const [text, textSetter] = useState("Hello, ...!");
  return (
    <>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(input) => {
          console.log(input.target.value, "input");
          if (input.target.value === "") {
            textSetter("Hello, ...!");
          } else {
            textSetter(`Hello, ${input.target.value}!`);
          }
        }}
      />
      <p>{text}</p>
    </>
  );
}

export default Ex4;
