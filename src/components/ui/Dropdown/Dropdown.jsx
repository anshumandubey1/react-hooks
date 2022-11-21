import React, { useEffect, useState } from 'react';
import './Dropdown.css';

function List({ values, setValue }) {
  const Items = values.map((value) => (
    <button
      type="button"
      className="item"
      key={value}
      onClick={() => setValue(value)}
    >
      {value}
    </button>
  ));
  return (
    <div className="list">{Items}</div>
  );
}

function Dropdown({ current, options, onChange }) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(options);
  const [filter, setFilter] = useState(current);
  const selectOption = (option) => {
    setOpen(false);
    setFilter(option);
    onChange(option);
  };

  useEffect(() => {
    if (filter === '') {
      setItems(options);
    } else {
      const re = new RegExp(filter, 'i');
      setItems(options.filter((x) => x.search(re) !== -1));
    }
  }, [filter]);

  return (
    <div>
      <input
        onFocus={() => setOpen(true)}
        value={filter}
        onChange={(x) => setFilter(x.target.value)}
      />
      {open && <List values={items} setValue={selectOption} />}
    </div>
  );
}

export default Dropdown;
