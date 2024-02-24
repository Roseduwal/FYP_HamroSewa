import ProductCard from "../../components/product-card";

export default function ProductList({ serviceName, data, home }) {
  return (
    <>
      <div className="mt-4 fs-1 fw-bold ms-4">{serviceName}</div>

      <div className="container-fluid mt-3">
        <div className="row mt-4">
          {data?.map((data, index) => (
            <ProductCard
              key={index}
              description={data.description}
              image={data.image}
              name={data.name}
              price={data.price}
              home={home}
            />
          ))}
        </div>
      </div>
    </>
  );
}
