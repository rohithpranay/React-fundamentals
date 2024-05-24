function Categories({ categories, filterCategories }) {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          onClick={() => filterCategories(category)}
          className="btn"
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
