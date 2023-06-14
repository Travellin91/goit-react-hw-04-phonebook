import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './filter.css';

function Filter({ value, setFilter }) {
  const [filterValue, setFilterValue] = useState(value); 

  const filterChange = (event) => {
    const newValue = event.target.value;
    setFilterValue(newValue);
    setFilter(newValue);
  }

  return (
    <InputGroup className="filter-input">
      <FormControl
        type="text"
        name="filter"
        placeholder="Пошук за ім'ям"
        value={filterValue}
        onChange={filterChange}
      />
    </InputGroup>
  );
}

export default Filter;
