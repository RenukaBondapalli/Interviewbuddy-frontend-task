import React from 'react';

const Input = ({ label, id, ...props }) => {
  return (
    <div>
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        {...props}
        className="
          block w-full
          border-gray-300
          rounded-md
          shadow-sm
          focus:border-indigo-500 focus:ring-indigo-500
          sm:text-sm
        "
      />
    </div>
  );
};

export default Input;