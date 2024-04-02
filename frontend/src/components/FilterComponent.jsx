import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters, fetchData } from '../redus/actions/dataActions';

const FilterComponent = () => {
  const dispatch = useDispatch();
  const [filters, setLocalFilters] = useState({});
  const handleChange = (e) => {
    setLocalFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilters(filters));
    dispatch(fetchData(filters));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="state" placeholder="State" onChange={handleChange} />
        <input type="text" name="status" placeholder="Status" onChange={handleChange} />
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default FilterComponent;