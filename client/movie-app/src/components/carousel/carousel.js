import React, {useState, useEffect, useRef} from "react";
import { ReactDOM } from "react";

function carousel() {
    const [current, setCurrent] = useState(0);
    const [style, setStyle] = useState({
        marginLeft : `-${current}00%`
    });
    const imgSize = useRef(images.current.length);

    const moveSlide = (i) => {
        let nextIndex = current + i;

        if (nextIndex < 0) nextIndex = imgSize.current -1;
        else if (nextIndex >= imgSize.current)
        nextIndex = 0;

        setCurrent(nextIndex);
    };
  return (
    <div>carousel</div>
  )
}

export default carousel