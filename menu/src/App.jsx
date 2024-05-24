import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterCategories = (category) => {
    const items = [...menu];
    const filteredItems =
      category === "all"
        ? [...menu]
        : items.filter((item) => item.category === category);

    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className="menu">
        <Title title={"Our Menu"} />
        <Categories
          categories={categories}
          filterCategories={filterCategories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
