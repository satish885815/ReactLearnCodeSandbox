import { useState, useCallback } from "react";
import { styled } from "styled-components";

export const Input = styled.input`
  height: 40px;
  width: 500px;
  border-radius: 10px;
`;
export const SearchResult = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 500px;
  margin: auto;
`;
export const SearchElement = styled.div`
  color: gray;
`;
export const ErrorMessage = styled.div`
  color: red;
`;

function debounce(cb) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      cb.call(this, ...args);
    }, 500);
  };
}

export const Search = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    setLoading(true);
    const { value, name } = event.target;
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((data) => setData(data.data.items))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  };

  const optimizeVarsion = useCallback(debounce(handleChange), []);

  return (
    <div>
      <Input
        type={"text"}
        placeholder="Search the Product"
        onChange={optimizeVarsion}
      />
      {loading && <h1>Loading....</h1>}
      {data?.length > 0 && (
        <SearchResult>
          {data.map((ele, index) => {
            return <SearchElement key={index}>{ele.name}</SearchElement>;
          })}
        </SearchResult>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};
