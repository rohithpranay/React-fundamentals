import React from "react";
import { nanoid } from "nanoid";
import { SingleColor } from "./SingleColor";

export const ColorList = ({ colorList }) => {
  return (
    <section className="colors">
      {colorList.map((color, index) => {
        return <SingleColor color={color} key={nanoid()} index={index} />;
      })}
    </section>
  );
};
