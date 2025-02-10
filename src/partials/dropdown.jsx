import React from "react";

function dropdown({ func, options }) {
  return (
    <div className="flex gap-4">
      {/* Category Dropdown */}
      <select
        className="p-2 bg-zinc-800 text-white rounded-sm border-none w-40 outline-none cursor-pointer capitalize"
        onChange={(e) => func(e.target.value)} // Pass selected value to parent
      >
        {options &&
          options.map((item, index) => (
            <option className='capitalize' key={index} value={item}>
              {item} {/* Capitalize first letter */}
            </option>
          ))}
      </select>
    </div>
  );
}

export default dropdown;
