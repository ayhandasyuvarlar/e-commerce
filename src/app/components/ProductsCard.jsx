import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";

const ProductsCard = ({
  id,
  title,
  category,
  price,
  description,
  image,
  rating,
}) => {
  const header = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt="Card"
      src={image}
      className="h-10rem"
      style={{
        objectFit: "contain",
      }}
    />
  );
  return (
    <Card
      id={id}
      title={title.slice(0,20) + '...'}
      subTitle={category[0].toUpperCase() + category.slice(1)}
      header={header}
      className="p-3 h-25rem max-h-25rem border-1 border-round-xl border-gray-300"
      style={{ width: "24%", boxShadow: "none" }}
    >
      <p className="mt-2 w-11 text-gray-600">{description.slice(0, 60)}...</p>
      <div className="flex align-items-end mt-6 justify-content-between w-full">
        <p className="mt-2 font-semibold text-lg">{price} ₺</p>
        <div className="flex align-items-end justify-content-center gap-2">
        <Button className="p-1 px-3">More</Button>
        <Button className="p-1 px-3">Add</Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductsCard;
