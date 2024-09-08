import React, { useState } from 'react';

const MyForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected option: ${selectedOption}`);
    // Here you can handle the form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        id="my-select"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">Shop by Category</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default MyForm;
