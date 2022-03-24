import { useSelector } from "react-redux";

function Categories() {
  const categories = useSelector((state) => state.shop.categories);

  return categories.map((cat) => (
    <div className="col-4 me-3 mb-3 border text-center p-2" key={cat._id}>
      {cat.name}
    </div>
  ));
}

export default Categories;
