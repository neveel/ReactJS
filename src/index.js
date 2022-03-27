import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import { App } from "./App";

const age = 12;
const obj = { name: "test" };
const arr2 = [1, 2, 3];
const films = [
  { title: "film 1", age: 2020 },
  { title: "film 2", age: 2021 },
];

const Info = ({ title }) => {
  // console.log("props", props);
  return (
    <div>
      <h1>Hello from {title}</h1>
      <h2>Лет: {age}</h2>
      <h2>Имя: {obj.name}</h2>
      {arr2}
    </div>
  );
};

const ComponentWitoutJSX = () => {
  return React.createElement(
    "div",
    {},
    "Ребенок",
    React.createElement("h1", {}, `возвраст: ${age}`)
  );
};

const Films = () => {
  return (
    <div>
      <h2>Films:</h2>
      {films.map((film) => (
        <div>
          <h2>{film.title}</h2>
          <h2>{film.age}</h2>
        </div>
      ))}
    </div>
  );
};

// const reactElement = (
//   <div>
//       <h1>Hello React</h1>
//       <h2>Лет: {age}</h2>
//       <h2>Имя: {obj.name}</h2>

//       {arr2}

//       <h2>films:</h2>

//       {films.map((film) => (
//       <div>
//         <h2>{film.title}</h2>
//         <h2>{film.age}</h2>
//       </div>
//     ))}
//     </div>
// );

const FunctionComponent = ({ onClick }) => {
  return (
    <div>
      <Info title="FuctionComponent" />
      <Films />
      <button onClick={onClick}>кнопка</button>
    </div>
  );
};

class ClassComponent extends React.Component {
  render() {
    console.log("class props", this.props);
    const { onClick } = this.props;
    return (
      <div>
        <Info title="ClassComponent" />
        <Films />
        <button onClick={() => onClick("ClassComponent")}>click</button>
        {/* Для реакта передачу кнопк нужно делать через стрелочную функцию */}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ComponentWitoutJSX />
    <hr />
    <FunctionComponent
      test={{ age: 12 }}
      onClick={() => {
        console.log("кликнул:");
      }}
    />
    <hr />
    <ClassComponent
      test={{ age: 12 }}
      test2={[]}
      test3={false}
      test4={null}
      onClick={(target) => {
        console.log("кликнул по компаненту:", target);
      }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
