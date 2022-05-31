import axios from "axios";
import React, { useState } from "react";
import Switch from "./Switch";

function Filter() {
  const [value, setValue] = useState(false);
  const [category, setCategory] = useState([]);

  const [location, setLocation] = useState("");

  const [price, setPrice] = useState(0);

  const [startDate, setStartDate] = useState(0);

  const handleSearch = (e) => {
    setCategory(e.target.value);
    setLocation(e.target.value);
    setPrice(e.target.value);
    setStartDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      category,
      location,
      price,
      startDate,
    };
  };

  /* const searchFilter = (search) => {
    let filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchMovies(filteredMovies);
  } */ return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Categories</h4>
        <input
          type="checkbox"
          id="sports"
          onChange={handleSearch}
          name="sports"
          value={category}
        />
        <label htmlFor="sports">Sports</label>

        <input
          type="checkbox"
          id="social"
          onChange={handleSearch}
          name="social"
          value={category}
        />
        <label htmlFor="social">Social</label>

        <input
          type="checkbox"
          id="healthAndWellbeing"
          onChange={handleSearch}
          name="healthAndWellbeing"
          value={category}
        />
        <label htmlFor="healthAndWellbeing">HealthAndWellbeing</label>

        <input
          type="checkbox"
          id="travel"
          onChange={handleSearch}
          name="travel"
          value={category}
        />
        <label htmlFor="travel">Travel</label>

        <input
          type="checkbox"
          id="family"
          onChange={handleSearch}
          name="family"
          value={category}
        />
        <label htmlFor="family">Family</label>

        <input
          type="checkbox"
          id="brunch"
          onChange={handleSearch}
          name="brunch"
          value={category}
        />
        <label htmlFor="brunch">Brunch</label>

        <input
          type="checkbox"
          id="spirituality"
          onChange={handleSearch}
          name="spirituality"
          value={category}
        />
        <label htmlFor="spirituality">Spirituality</label>

        <input
          type="checkbox"
          id="dance"
          onChange={handleSearch}
          name="dance"
          value={category}
        />
        <label htmlFor="dance">Dance</label>

        <input
          type="checkbox"
          id="others"
          onChange={handleSearch}
          name="others"
          value={category}
        />
        <label htmlFor="others">Others</label>

        <h4>When</h4>

        <input type="date" value={startDate} onChange={handleSearch} />

        <h4>Location</h4>

        <h4>Price</h4>
        <Switch
          isOn={value}
          onColor="#06D6A0"
          handleToggle={() => setValue(!value)}
        />

        <button>Apply filters</button>
      </form>
    </div>
  );
}

export default Filter;
