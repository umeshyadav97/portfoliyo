import HTML from "../../assets/images/icons/html.svg";
import CSS from "../../assets/images/icons/css.svg";
import JS from "../../assets/images/icons/js.svg";
import React from "../../assets/images/icons/react.svg";
import Next from "../../assets/images/icons/next.svg";
import Mui from "../../assets/images/icons/mui.svg";
import Tailwind from "../../assets/images/icons/tailwind.svg";
export function useHomeController() {
  const techStackList = [
    { id: 1, src: HTML, alt: "Image 1" },
    { id: 2, src: CSS, alt: "Image 2" },
    { id: 3, src: JS, alt: "Image 3" },
    { id: 4, src: React, alt: "Image 4" },
    { id: 5, src: Next, alt: "Image 5" },
    { id: 6, src: Mui, alt: "Image 6" },
    { id: 7, src: Tailwind, alt: "Image 7" },
  ];
  return { techStackList };
}
