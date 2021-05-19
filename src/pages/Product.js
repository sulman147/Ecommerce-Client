import React, { useEffect, useState } from "react";
import { getProduct } from "../functions/product";
import SingleProduct from "../components/cards/SingleProduct";
import { Divider } from "antd";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});

  const { slug } = match.params;

  useEffect(() => {
    loadSingleProduct();
  }, [slug]);

  const loadSingleProduct = () =>
    getProduct(slug).then((res) => setProduct(res.data));

  return (
    <div className="container-fluid">
      <div className="row pt-4">
        <SingleProduct product={product} />
      </div>

      <div className="row">
        <div className="col text-center pt-5 pb-5">
          <Divider
            style={{
              borderTop: "1px solid lightgray",
            }}
          />
          <h4>Related products</h4>
          <Divider
            style={{
              borderBottom: "1px solid lightgray",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
