import { useState } from "react";
import { Form } from "./Form";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import { Items } from "./Items";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items") || [])
  );
  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
    toast.success("item added to the list ");
  };
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id != id);
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
    toast.success("item deleted");
  };
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  return (
    <>
      <section className="section-center">
        <ToastContainer position="top-center" />
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </section>
      {/* <ToastContainer position="top" /> */}
    </>
  );
};

export default App;
