import { useEffect, useState } from "react";
import rgbToHex from "./utils";

interface SingleColorInterface {
  index: number;
  alpha: number;
  rgb: [number, number, number];
  type: string;
  weight: number;
  hex: string;
  key: number;
}

const SingleColor = ({ rgb, weight, index, alpha }: SingleColorInterface) => {
  const [alert, setAlert] = useState(false);
  const hexValue = rgbToHex(...rgb);

  useEffect(() => {
    const timeOutFunction = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeOutFunction);
  }, [alert]);
  
  return (
    <div
      style={{
        cursor: "pointer",
        height: "200px",
        width: "14%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: `rgb(${rgb.join(",")})`,
        color: index > 10 ? "white" : "black",
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <span style={{ fontWeight: "bolder", margin: "2%" }}> {weight}%</span>
      <span>{hexValue}</span>
      {alert && <p>Copied to Clipboard</p>}
    </div>
  );
};

export default SingleColor;
