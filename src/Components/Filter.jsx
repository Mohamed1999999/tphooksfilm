import React from "react";

const Filter = ({
  titleFilter,
  rateFilter,
  onTitleFilterChange,
  onRateFilterChange,
}) => {
  return (
    <div className="filter">
      <label>
        Title:
        <input type="text" value={titleFilter} onChange={onTitleFilterChange} />
      </label>
      <label>
        Rating:
        <input
          type="number"
          min="1"
          max="10"
          value={rateFilter}
          onChange={onRateFilterChange}
        />
      </label>
    </div>
  );
};

export default Filter;
