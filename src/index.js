import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

const App = (props) => {
  return (
    <div>
      <h1>{props.contadorInicial}</h1>
    </div>
  );
};

let contador = 0;

const refresh = () => {
  ReactDOM.render(<App contadorInicial={contador} />, rootElement);
};

setInterval(() => {
  refresh();
  contador++;
}, 1000);
