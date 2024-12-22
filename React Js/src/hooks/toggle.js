import { useState } from "react";
export function useButton() {
  const [show, setShows] = useState(true);
  function clickMe() {
    show ? setShows(false) : setShows(true);
  }
  return {show, clickMe};
}
