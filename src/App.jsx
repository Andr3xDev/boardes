import { useRef } from "react";
import p5 from "p5";
import "./app.css";

function App() {
  const sketch = function (p) {
    let x = 1200;
    let y = 800;
    p.setup = function () {
      p.createCanvas(x, y);
    };
    p.draw = function () {
      if (p.mouseIsPressed === true) {
        p.fill(0, 0, 0);
        p.ellipse(p.mouseX, p.mouseY, 20, 20);
      }
      if (p.mouseIsPressed === false) {
        p.fill(255, 255, 255);
      }
    };
  };

  const myp5 = useRef(new p5(sketch, "container"));

  return (
    <div className="container">
      <hr className="board" />
      <div id="container"></div>
      <hr />
    </div>
  );
}

export default App;
