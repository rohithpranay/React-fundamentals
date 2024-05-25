import { useState } from "react";
import { ColorList } from "./components/ColorList";
import { Form } from "./components/Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colorList, setColorList] = useState(new Values("#fff").all(10));
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColorList(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colorList={colorList} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
