import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState<Values[]>(new Values("#f15025").all(10));

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div>
      <section>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            style={error ? { borderColor: "red" } : { borderColor: "green" }}
          />
          <button>Generate</button>
        </form>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "2%",
        }}
      >
        {list.map((color, index) => {
          console.log(color);
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </div>
  );
};

export default ColorGenerator;
