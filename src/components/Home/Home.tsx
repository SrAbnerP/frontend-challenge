// import { useEffect } from "react";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import ProductCard from "../ProductCard/ProductCard";
import "./Home.scss";

import axios from "axios";

import { useQuery } from "react-query";

interface Product {
  brand: string;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  updatedAt: string;
}

const url =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=name&orderBy=DESC";

function Home() {
  const { data, isLoading } = useQuery("products", () => {
    return axios.get(url).then((response) => response.data);
  });

  return (
    <div className="containerHome">
      <section className="containerProducts">
        {isLoading && <CardSkeleton cards={8} />}
        {data?.products?.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </div>
  );
}

export default Home;
