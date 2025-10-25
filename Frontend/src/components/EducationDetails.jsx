import React from 'react';
import { Edit } from 'lucide-react';


const Input = ({ label, id, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-xs font-medium text-gray-600 mb-1.5">
      {label}
    </label>
    <input
      id={id}
      {...props}
      className="block w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
    />
  </div>
);

const Select = ({ label, id, children, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-xs font-medium text-gray-600 mb-1.5">
      {label}
    </label>
    <select
      id={id}
      {...props}
      className="block w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%236b7280%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10"
    >
      {children}
    </select>
  </div>
);

const EducationDetails = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-4 md:p-6 flex justify-between items-center border-b border-gray-100">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">Education Details</h2>
        <button className="p-2.5 rounded-full text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors">
          <Edit size={18} />
        </button>
      </div>

      <form className="p-4 md:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="School / College" id="school" placeholder="e.g. Lincoln College" />
          <Input label="Highest degree or equivalent" id="degree" placeholder="e.g. Bachelors in Technology" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input label="Course" id="course" placeholder="e.g. Computer science engineering" />
          <Select label="Year of completion" id="edu_year" defaultValue="">
            <option value="" disabled>YYYY</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </Select>
          <Input label="Grade" id="grade" placeholder="Enter here" />
        </div>
      </form>
    </div>
  );
};

export default EducationDetails;
