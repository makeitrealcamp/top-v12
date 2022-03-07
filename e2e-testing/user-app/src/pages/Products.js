import { Product } from '../components/Products/Product';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { InputForm } from '../components/styled/FormStyles';
import { MiniSearch } from '../components/MiniSearch';

function Products() {

  const [data, setData] = useState([]);
  const [errors, setErrors] = useState();
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com/',
      url: 'posts',
    })
      .then(({ data}) => setData(data) )
      .catch(err => {
        setErrors(err);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredProducts = useMemo(() =>
    data.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    }),[data, search]
  );

  const ContainerProducts = styled.section`
    display: grid;
    display: grid;
    grid-template-columns: repeat(3, [col-start] minmax(100px, 1fr) [col-end]);
    grid-gap: 18px;
    justify-content: space-around;
    padding: 15px;
  `;

  const ContainerInputSearch = styled.div`
    display: flex;
    justify-content: center;
  `;

  const ContainerSearch = styled.div`
    position: absolute;
    background-color: white;
    width: 245px;
    padding: 0 15px;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 22%);
    top: 208px;
  `;

  return (
    <div className="Container__products">
      <h1 className="Title__products">List of Products</h1>
      <ContainerInputSearch className="Container__Search">
        <InputForm
          type="text"
          className="Input__search"
          placeholder="Search a product"
          value={search}
          onChange={handleSearch}
        />
        <ContainerSearch className="Container__result-search">
          {search.length > 0 && filteredProducts.map(( { title, id }) => {
            return (
              <MiniSearch
                key={id}
                title={title}
              />
            );
          })}
        </ContainerSearch>
      </ContainerInputSearch>
      <ContainerProducts className="Container__section-product">
        {!!data && data.length > 0 && data.map(product => (
          <Product
            key={product.id}
            title={product.title}
            description={product.body}
            errors={errors}
          />
        ))}
      </ContainerProducts>
    </div>
  );
}

export default Products;
