import MenuItem from "./MenuItem";

function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Menu;
