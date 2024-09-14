import React, { useEffect, useRef, useState } from "react";
import "./style.css";

function Shape() {
  const selectedBox = useRef([]);
  const shapContainer = useRef(null);
  const deseting = useRef(false);

  useEffect(() => {
    if (
      shapContainer.current &&
      shapContainer.current.childNodes.length === 0
    ) {
      for (let i = 0; i < 9; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.addEventListener("click", () => selectedBoxI(box));
        shapContainer.current.appendChild(box);
      }
    }
  }, []);

  const selectedBoxI = (box) => {
    if (deseting.current) return;
    if (!box.classList.contains("selected")) {
      box.classList.add("selected");
      selectedBox.current.push(box);
      if (selectedBox.current.length === 9) {
        startDeselcting();
      }
    }
  };

  const startDeselcting = () => {
    deseting.current = true;
    let index = selectedBox.current.length - 1;
    let timer = setInterval(() => {
      if (index >= 0) {
        selectedBox.current[index].classList.remove("selected");
        index--;
      } else {
        clearInterval(timer);
        deseting.current = false;
        selectedBox.current.length = 0;
      }
    }, 1000);
  };

  return <div id="shap-container" ref={shapContainer}></div>;
}

export default Shape;
