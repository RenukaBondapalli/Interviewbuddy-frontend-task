import React, { useState } from 'react';
import { User, Mail, Copy, Edit, Phone, FileText } from 'lucide-react';

// Input field (no changes needed)
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

// Dropdown field (no changes needed)
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

// Textarea field (no changes needed)
const Textarea = ({ label, id, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-xs font-medium text-gray-600 mb-1.5">
      {label}
    </label>
    <textarea
      id={id}
      {...props}
      className="block w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
    />
  </div>
);

// Static profile info
const staticUser = {
  name: 'Dave Richards',
  email: 'dave@mail.com',
  phone: '+91 8332883854',
  phoneShort: '8332883854'
};

const MyProfile = () => {
  const user = staticUser;
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <main className="bg-gray-50 min-h-screen p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Profile card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* RESPONSIVE: Stacked on mobile, side-by-side on desktop */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Profile picture */}
            <div className="relative flex-shrink-0">
              {/* RESPONSIVE: Smaller avatar on mobile */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-indigo-100 flex items-center justify-center">
                <User className="w-20 h-20 md:w-24 md:h-24 text-indigo-400" strokeWidth={1.5} />
              </div>
              <button 
                className="absolute bottom-1 right-1 md:bottom-2 md:right-2 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-md"
                aria-label="Edit profile picture"
              >
                <Edit size={16} />
              </button>
            </div>

            {/* Basic info */}
            {/* RESPONSIVE: Centered text on mobile, left-aligned on desktop */}
            <div className="space-y-2.5 text-center md:text-left">
              {/* RESPONSIVE: Smaller font on mobile */}
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">{user.name}</h1>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <Mail size={18} />
                {/* RESPONSIVE: Smaller font on mobile */}
                <span className="text-sm md:text-base">{user.email}</span>
                <button className="ml-1 text-gray-400 hover:text-gray-600">
                  <Copy size={16} />
                </button>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <Phone size={18} />
                <span className="text-sm md:text-base">{user.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        {/* RESPONSIVE: Wraps on mobile, smaller padding */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          <button
            onClick={() => setActiveTab('basic')}
            className={`py-2.5 px-4 md:py-3 md:px-5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'basic'
                ? 'bg-indigo-100 text-indigo-600'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Basic Info
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`py-2.5 px-4 md:py-3 md:px-5 rounded-lg text-sm font-medium transition-colors relative ${
              activeTab === 'education'
                ? 'bg-indigo-100 text-indigo-600'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Education & Skills
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-orange-500 rounded-full"></span>
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`py-2.5 px-4 md:py-3 md:px-5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'experience'
                ? 'bg-indigo-100 text-indigo-600'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Experience
          </button>
        </div>

        {/* Basic Info form */}
        {activeTab === 'basic' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            {/* RESPONSIVE: Smaller padding/font on mobile */}
            <div className="p-4 md:p-6 flex justify-between items-center border-b border-gray-100">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">Basic Details</h2>
              <button className="p-2.5 rounded-full text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <Edit size={18} />
              </button>
            </div>
            
            {/* RESPONSIVE: Smaller padding on mobile */}
            <form className="p-4 md:p-8 space-y-6">
              {/* Name & Email (Already responsive) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input label="First name" id="firstName" placeholder="e.g. John" />
                <Input label="Last name" id="lastName" placeholder="e.g. Doe" />
                <Input label="Email ID" id="email" type="email" placeholder="e.g. mrnobody@mail.com" />
              </div>
              
              {/* DOB, Gender, Phone (Already responsive) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Select label="Year of birth" id="year" defaultValue="">
                  <option value="" disabled>YYYY</option>
                  <option>1990</option>
                  <option>1991</option>
                  <option>1992</option>
                </Select>
                <Select label="Gender" id="gender" defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Select>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-gray-600 mb-1.5">
                    Phone number
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg">
                      <span className="text-xl">🇮🇳</span>
                      <svg className="w-4 h-4 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      defaultValue={user.phoneShort}
                      className="flex-1 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Address (Already responsive) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Textarea label="Address" id="address" rows="4" placeholder="Enter here" />
                </div>
                <Input label="Pincode" id="pincode" placeholder="Enter here" />
              </div>

              {/* Domicile info (Already responsive) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Select label="Country" id="country" defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </Select>
                <Select label="State" id="state" defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>California</option>
                  <option>Texas</option>
                </Select>
              </div>
            </form>
          </div>
        )}

        {/* Education & Skills */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              {/* RESPONSIVE: Smaller padding/font on mobile */}
              <div className="p-4 md:p-6 flex justify-between items-center border-b border-gray-100">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">Education Details</h2>
                <button className="p-2.5 rounded-full text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                  <Edit size={18} />
                </button>
              </div>
              {/* RESPONSIVE: Smaller padding on mobile */}
              <form className="p-4 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="School / College" id="school" placeholder="e.g. Lincoln College" />
                  <Input label="Degree" id="degree" placeholder="e.g. B.Tech" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Input label="Course" id="course" placeholder="e.g. CSE" />
                  <Select label="Year of completion" id="yearCompletion" defaultValue="">
                    <option value="" disabled>YYYY</option>
                    <option>2024</option>
                    <option>2023</option>
                  </Select>
                  <Input label="Grade" id="grade" placeholder="Enter here" />
                </div>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              {/* RESPONSIVE: Smaller padding/font on mobile */}
              <div className="p-4 md:p-6 flex justify-between items-center border-b border-gray-100">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">Skills & Projects</h2>
                <button className="p-2.5 rounded-full text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                  <Edit size={18} />
                </button>
              </div>
              {/* RESPONSIVE: Smaller padding on mobile */}
              <form className="p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Textarea label="Skills" id="skills" rows="6" placeholder="Enter here" />
                  <Textarea label="Projects" id="projects" rows="6" placeholder="Enter here" />
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              {/* RESPONSIVE: Smaller padding/font on mobile */}
              <div className="p-4 md:p-6 flex justify-between items-center border-b border-gray-100">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">Work Experience</h2>
                <button className="p-2.5 rounded-full text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                  <Edit size={18} />
                </button>
              </div>
              {/* RESPONSIVE: Smaller padding on mobile */}
              <form className="p-4 md:p-8 space-y-6">
                <div className="space-y-4">
                  <Input label="Domain" id="domain1" placeholder="e.g. Technology" />
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="Sub-domain" id="subdomain1" placeholder="e.g. MERN Stack" />
                      <Select label="Experience" id="experience1" defaultValue="">
                        <option value="" disabled>Select</option>
                        <option>0-1 years</option>
                        <option>1-2 years</option>
                      </Select>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* LinkedIn & Resume */}
            {/* RESPONSIVE: 1 column on mobile, 2 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                {/* RESPONSIVE: Smaller padding/font on mobile */}
                <div className="p-4 md:p-6 flex justify-between items-center border-b border-gray-100">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900">LinkedIn</h2>
                  <button className="p-2.5 rounded-full text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                    <Edit size={18} />
                  </button>
                </div>
                {/* RESPONSIVE: Smaller padding on mobile */}
                <form className="p-4 md:p-6">
                  <Input label="Profile URL" id="linkedinUrl" defaultValue="linkedin.com/in/mrbean" />
                </form>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-20all">
                {/* RESPONSIVE: Smaller padding/font on mobile */}
                <div className="p-4 md:p-6 flex justify-between items-center border-b border-gray-100">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900">Resume</h2>
                  <button className="p-2.5 rounded-full text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                    <Edit size={18} />
                  </button>
                </div>
                {/* RESPONSIVE: Smaller padding on mobile */}
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <FileText className="w-5 h-5 text-indigo-600" />
                      </div>
                      <span className="text-sm text-gray-900 font-medium">myresume.pdf</span>
                    </div>
                    <button className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-200 transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyProfile;