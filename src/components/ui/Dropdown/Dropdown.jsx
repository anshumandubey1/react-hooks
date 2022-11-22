import React, { useEffect, useState } from 'react';
import './Dropdown.css';

function List({
  values, selected, selectValue, unselectValue,
}) {
  const unselected = values.filter((x) => !selected.includes(x));
  const Items = [...selected.map((value) => (
    <button
      type="button"
      className="item selected"
      key={value}
      onClick={() => { unselectValue(value); }}
    >
      {value}
    </button>
  )), ...unselected.map((value) => (
    <button
      type="button"
      className="item"
      key={value}
      onClick={() => { selectValue(value); }}
    >
      {value}
    </button>
  ))];
  return (
    <div className="list">{Items}</div>
  );
}

function Dropdown({ current, options, onChange }) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(options);
  const [filter, setFilter] = useState('');
  const selectOption = (option) => {
    setOpen(false);
    current.push(option);
    setFilter('');
    onChange(current);
  };

  const unselectOption = (option) => {
    const latest = current.filter((x) => x !== option);
    if (latest.length === 0) { return; }
    setOpen(false);
    setFilter('');
    onChange(latest);
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
        placeholder="Select Location"
      />
      {open && (
      <List
        values={items}
        selected={current}
        selectValue={selectOption}
        unselectValue={unselectOption}
      />
      )}
    </div>
  );
}

export default Dropdown;
