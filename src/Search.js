import React, { useState } from "react";
import data from "./data/MOCK_DATA.json";

function Search() {
  const [value, setValue] = useState("");

  const searchValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-body">
      <div className="search-input-div">
        <input
          className="search-input"
          type="text"
          onChange={searchValue}
          value={value}
          placeholder="Search..."
        />
      </div>

      <div className="data-body">
        {data
          .filter((filVal) => {
            if (value === "") {
              return filVal;
            } else if (
              filVal.first_name
                .toLocaleLowerCase()
                .includes(value.toLocaleLowerCase()) ||
              filVal.last_name
                .toLocaleLowerCase()
                .includes(value.toLocaleLowerCase())
            ) {
              return filVal;
            }
          })
          .map((val, key) => {
            return (
              <div key={key} className="each-data">
                {val.id < 10 ? "0" + val.id + ". " : val.id + ". "}
                <span> {val.first_name + " "}</span>
                <span>{val.last_name}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Search;
