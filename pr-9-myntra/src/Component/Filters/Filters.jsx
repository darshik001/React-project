// Filters.jsx
import React, { useState } from "react";
import { Form, InputGroup, FormControl, Card } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";      // react-icons instead of react-bootstrap-icons
import "./Filters.css";

const Filters = ({ category, filters, setFilters }) => {
  const getBrandOptions = () => {
    switch (category) {
      case "men":
        return ["Louis Philippe", "Allen Solly", "Park Avenue", "Peter England"];
      default:
        return [];
    }
  };

  const [brandSearch, setBrandSearch] = useState("");

  const categories = [
    { name: "Tshirts", count: 240048 },
    { name: "Lounge Tshirts", count: 1258 },
  ];

  const filteredBrands = getBrandOptions().filter((b) =>
    b.toLowerCase().includes(brandSearch.toLowerCase())
  );

  // Discount Options
  const discountOptions = [
   0, 10, 20, 30, 40, 50, 60, 70, 80, 90
  ];

  return (
    <Card className="p-3 shadow-sm" style={{ width: "260px" }}>
      <h5 className="fw-bold mb-3">FILTERS</h5>

      {/* CATEGORY */}
      <div className="mb-4">
        <h6 className="fw-bold text-uppercase">CATEGORIES</h6>

        {categories.map((c, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            className="my-2 custom-checkbox"
            label={`${c.name} (${c.count})`}
            checked={filters.category.includes(c.name)}
            onChange={() => {
              setFilters({
                ...filters,
                category: filters.category.includes(c.name)
                  ? filters.category.filter((x) => x !== c.name)
                  : [...filters.category, c.name]
              });
            }}
          />
        ))}
      </div>

      {/* BRAND */}
      <div className="mb-4">
        <h6 className="fw-bold text-uppercase">BRAND</h6>

        <InputGroup className="mb-2">
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>

          <FormControl
            placeholder="Search brand"
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
          />
        </InputGroup>

        <div style={{ maxHeight: "180px", overflowY: "auto" }}>
          {filteredBrands.map((brand, i) => (
            <Form.Check
              key={i}
              type="checkbox"
              className="my-2 custom-checkbox"
              label={brand}
              checked={filters.brand.includes(brand)}
              onChange={() => {
                setFilters({
                  ...filters,
                  brand: filters.brand.includes(brand)
                    ? filters.brand.filter((x) => x !== brand)
                    : [...filters.brand, brand]
                });
              }}
            />
          ))}
        </div>
      </div>

      {/* DISCOUNT RANGE */}
      <div className="mb-4">
        <h6 className="fw-bold text-uppercase">DISCOUNT RANGE</h6>

        {discountOptions.map((d, idx) => (
          <Form.Check
            key={idx}
            type="radio"
            name="discount"
            className="my-1"
            label={`${d}% and above`}
            checked={filters.discount === d}
            onChange={() =>
              setFilters({
                ...filters,
                discount: d,
              })
            }
          />
        ))}
      </div>

      {/* PRICE RANGE */}
      <div className="mb-4">
        <h6 className="fw-bold text-uppercase">PRICE</h6>

        <Form.Range
          className="custom-range"
          value={10000}
          onChange={(e) =>
            setFilters({
              ...filters,
              price: e.target.value
            })
          }
        />

        <div className="d-flex justify-content-between mt-2">
          <span>₹0</span>
          <span>₹{filters.price}</span>
        </div>
      </div>
    </Card>
  );
};

export default Filters;
