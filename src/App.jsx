import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Data from "./Data.js";
import "./custom.css";
function App() {
  const [text, setText] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h2>Frequenty Asked Questions</h2>
        </div>

        {Data.map((item, index) => {
          const { ques, ans } = item;
          return (
            <div className="accordian-container" key={index}>
              <h4 onClick={() => setText(!text)}>
                <FaAngleDown />
                {ques}
              </h4>
              {text && <p>{ans}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
