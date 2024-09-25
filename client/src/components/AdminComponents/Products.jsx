import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <h1>Products</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Item Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td>Apple</td>
            <td>snjfhsufhh</td>
            <td>
              <a href="" className="btn btn-warning">
                Edit
              </a>
              <a className="btn btn-danger ms-2">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/admin/dashboard/addproducts" className="btn btn-success">
        Add Products
      </Link>
    </>
  );
}

export default Products;
