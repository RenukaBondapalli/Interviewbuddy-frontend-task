import React, { useState } from 'react';
import { Eye, Trash2 } from 'lucide-react';
import Button from './Button';
import AddUserModal from './AddUserModal';
import { Link } from 'react-router-dom';

const initialUsers = [
  { id: 1, name: 'Dave Richards', email: 'dave@mail.com' },
  { id: 2, name: 'Abhishek Hari', email: 'hari@mail.com' },
  { id: 3, name: 'Nishta Gupta', email: 'nishta@mail.com' },
];

const UserList = () => {
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (newUser) => {
    setUsers([newUser, ...users]);
  };

  const handleDeleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <>
      <main className="p-6 md:p-8 font-sans">
        <div 
          className="
            max-w-[1216px] mx-auto
            h-[532px]
            bg-white 
            rounded-lg 
            shadow-sm
            border border-gray-200
            p-6 md:p-8
            flex flex-col gap-6
          "
        >
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-normal text-gray-900">
              Users
            </h1>
            <Button onClick={() => setIsModalOpen(true)}>
              Add user
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 font-medium text-gray-500 text-sm">Sr. No</th>
                  <th className="px-6 py-4 font-medium text-gray-500 text-sm">User name</th>
                  <th className="px-6 py-4 font-medium text-gray-500 text-sm">E-mail</th>
                  <th className="px-6 py-4 font-medium text-gray-500 text-sm">Action</th>
                </tr>
              </thead>
              
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className="border-b border-gray-200 last:border-b-0">
                    <td className="px-6 py-4 text-gray-700 text-sm">{index + 1}</td>
                    <td className="px-6 py-4 text-gray-900 text-sm">{user.name}</td>
                    <td className="px-6 py-4 text-gray-700 text-sm">{user.email}</td>
                    <td className="px-6 py-4 text-gray-700">
                      <div className="flex items-center gap-4">
                        <Link 
                          to="/profile" 
                          className="text-gray-500 hover:text-indigo-600"
                        >
                          <Eye size={18} />
                        </Link>
                        <button onClick={() => handleDeleteUser(user.id)} className="text-gray-500 hover:text-red-600">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <AddUserModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddUser={handleAddUser}
      />
    </>
  );
};

export default UserList;
