import { Skeleton } from "primereact/skeleton";
import React from "react";

const Skelton = ({ itemCount }) => {
  // Verilen itemCount'e göre bir dizi oluşturun
  const skeletonArray = Array.from({ length: itemCount });

  // Dizi üzerinde map fonksiyonunu kullanarak her bir eleman için Skeleton bileşenlerini oluşturun
  const skeletonList = skeletonArray.map((_, index) => (
    <article
      key={index}
      className="w-2 border-1 p-2 border-round-lg overflow-hidden"
    >
      <Skeleton height="10rem" className="w-full "></Skeleton>
      <Skeleton height="3rem" className="mt-2 w-11"></Skeleton>
      <Skeleton height="2rem" className="mt-2 w-4"></Skeleton>
      <div className="flex justify-content-start gap-2 mt-3">
        <Skeleton width="4rem" height="2rem"></Skeleton>
        <Skeleton width="4rem" height="2rem"></Skeleton>
      </div>
    </article>
  ));

  // Oluşturulan Skeleton bileşenlerini içeren JSX'i döndürün
  return (
    <main className="flex w-full gap-5 flex-wrap justify-content-center items-center h-20rem">
      {skeletonList}
    </main>
  );
};

export default Skelton;
