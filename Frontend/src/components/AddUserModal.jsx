import React, { useState, Fragment } from 'react';
import { X } from 'lucide-react';
import Input from './Input';

const AddUserModal = ({ isOpen, onClose, onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill in Name and Email.');
      return;
    }
    
    onAddUser({ name, email, contact, id: Date.now() });
    handleClose();
  };

  const handleClose = () => {
    setName('');
    setEmail('');
    setContact('');
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Fragment>
      {/* 1. Backdrop Overlay */}
      <div 
        onClick={handleClose} 
        className="fixed inset-0 bg-gray-900 bg-opacity-60 z-40" 
      />

      {/* 2. Modal Panel */}
      <div 
        className="
          fixed top-0 right-0 z-50          // <-- z-50
          w-[623px]
          h-app                           // <--  h-screen to h-app (720px)
          bg-white
          shadow-app
          flex flex-col
        "
      >
      
        <header 
          className="
            flex items-center justify-between 
            p-6 border-b border-gray-200
          "
        >
          <h2 className="text-xl font-semibold text-gray-900">
            Add User
          </h2>
          <button 
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </header>

        
        <form 
          onSubmit={handleSubmit} 
          className="flex-1 flex flex-col justify-between"
        >
          
          <div className="p-6 space-y-6">
            <Input
              label="Name of the user"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type here"
            />
            
            <div className="grid grid-cols-2 gap-6">
              <Input
                label="E-mail"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type here"
              />
              <Input
                label="Contact"
                id="contact"
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Type here"
              />
            </div>
          </div>

         
          <footer 
            className="
              flex items-center justify-end gap-4 
              p-6 border-t border-gray-200
            "
          >
            <button
              type="button" 
              onClick={handleClose}
              className="
                px-4 py-2.5 text-sm font-medium text-indigo-700 
                bg-indigo-100 rounded-lg hover:bg-indigo-200
              "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="
                px-4 py-2.5 text-sm font-medium text-white 
                bg-indigo-600 rounded-lg hover:bg-indigo-700
              "
            >
              Add
            </button>
          </footer>
        </form>
      </div>
    </Fragment>
  );
};

export default AddUserModal;