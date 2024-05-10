import { Skeleton } from "primereact/skeleton";
import React from "react";

const Skelton = ({ itemCount }) => {
  // Verilen itemCount'e göre bir dizi oluşturun
  const skeletonArray = Array.from({ length: itemCount });

  // Dizi üzerinde map fonksiyonunu kullanarak her bir eleman için Skeleton bileşenlerini oluşturun
  const skeletonList = skeletonArray.map((_, index) => (
    <article
      key={index}
      style={{ width: "24%" }}
      className=" border-1 p-2 h-26rem border-gray-300 border-round-lg overflow-hidden"
    >
      <Skeleton height="12rem" className="w-full "></Skeleton>
      <Skeleton height="2rem" className="mt-2 w-11"></Skeleton>
      <Skeleton height="1rem" className="mt-2 w-7"></Skeleton>
      <Skeleton height="2rem" className="mt-3 w-11"></Skeleton>
      <div className="flex justify-content-between gap-2 mt-6">
        <Skeleton width="4rem" height="2rem"></Skeleton>
        <div className="flex justify-content-start gap-2 ">
          <Skeleton width="4rem" height="2rem"></Skeleton>
          <Skeleton width="4rem" height="2rem"></Skeleton>
        </div>
      </div>
    </article>
  ));

  // Oluşturulan Skeleton bileşenlerini içeren JSX'i döndürün
  return (
    <main className="flex w-full gap-3 flex-wrap justify-content-start items-center h-30rem">
      {skeletonList}
    </main>
  );
};

export default Skelton;
