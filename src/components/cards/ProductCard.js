import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  // destructure
  const { images, title, description, slug } = product;
  return (
    <Card
      hoverable
      actions={[
        <Link to={`/product/${slug}`}>
          <EyeOutlined className="text-warning" />
          <br /> View Product
        </Link>,
        <>
          <ShoppingCartOutlined className="text-danger" />
          <br /> Add to Cart
        </>,
      ]}
      cover={
        <img
          alt="IMG"
          src={images && images.length ? images[0].url : laptop}
          style={{
            height: "200px",
            objectFit: "cover",
            padding: "20px",
            borderBottom: "2px solid lightgray",
          }}
          className="p-1 "
        />
      }
    >
      <Meta
        style={{
          padding: "20px",
        }}
        title={title}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
  );
};

export default ProductCard;
