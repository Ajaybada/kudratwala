import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from './ProductList';
import ProductFilter from './ProductFilter';
import './ProductPage.css';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [searchParams] = useSearchParams();

  // Extract category from URL
  const categoryFromURL = searchParams.get("category") || "All";

  const [filter, setFilter] = useState({
    category: categoryFromURL,
    priceRange: [0, 1000],
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${backendUrl}/products/getproducts`, {
          params: { page, filter }
        });
        setProducts(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, [page, filter]);

  const nextpage = () => setPage((old) => old + 1);
  const prevpage = () => setPage((old) => (old > 0 ? old - 1 : 0));

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="product-page">
      <ProductFilter filter={filter} setFilter={setFilter} setPage={setPage} />
      <div className="product-catalogue">
        {products.map((product) => <ProductList key={product.id} product={product} />)}
      </div>
      <button className='button-products' onClick={nextpage}>Next Page</button>
      {page !== 0 && <button className='button-products' onClick={prevpage}>Prev Page</button>}
    </div>
  );
};

export default ProductPage;
