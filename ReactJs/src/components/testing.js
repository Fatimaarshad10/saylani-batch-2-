import React from "react";
import { useButton } from "../hooks/toggle";
function Testing() {
  const { show, clickMe } = useButton();
  const { check, ClickCheck } = useButton();
  return (
    <div>
      <button onClick={() => clickMe()}>
        {show ? <p>show me</p> : <p>hide</p>}
      </button>
      {show ? <h1>hello show</h1> : <></>}
      <button onClick={() => ClickCheck()}>
        {check ? <p>show me</p> : <p>hide</p>}
      </button>
      {check ? <h1>hello show</h1> : <></>}
    </div>
  );
}

export default Testing;
