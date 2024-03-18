import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <h1>Product list</h1>
      <button onClick={() => navigate("add-product")}>Add Product</button>
    </div>
  );
}
