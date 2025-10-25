import React from 'react';
import { Plus } from 'lucide-react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center gap-2
        px-4 py-2.5                           
        bg-indigo-600                      
        text-white
        font-medium
        rounded-lg
        shadow-sm
        hover:bg-indigo-700
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        transition-colors
      "
    >
      <Plus size={18} />
      {children}
    </button>
  );
};

export default Button;