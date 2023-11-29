import { useState } from "react";
import ToolTipButton from "./ToolTipButton";

function App() {
  const [position, setPostion] = useState("tooltiptextright");
  return (
    <>
      <div>
        <h2>Choose the postion of your tooltip</h2>
      </div>
      <div className="postionButtons">
        <button onClick={() => setPostion("tooltiptextleft")}>Left</button>
        <button onClick={() => setPostion("tooltiptextright")}>Right</button>
        <button onClick={() => setPostion("tooltiptexttop")}>Top</button>
        <button onClick={() => setPostion("tooltiptextbottom")}>Bottom</button>
      </div>
      <ToolTipButton position={position} />
    </>
  );
}

export default App;
