import ProductList from "../../home/product-list";
import cleaningDate from "../../home/data.json";

export default function ServiceView() {
  return (
    <>
      <div className="mt-4 fw-bold fs-1 text-center">Services</div>
      <ProductList serviceName={"Cleaning"} data={cleaningDate.Cleaning} />

      <ProductList serviceName={"Plumbing"} data={cleaningDate.Plumbing} />

      <ProductList
        serviceName={"Electrician"}
        data={cleaningDate.Electrician}
      />

      <ProductList serviceName={"Flooring"} data={cleaningDate.Plumbing} />
    </>
  );
}
