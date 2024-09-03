import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UserProfileProps {
  userId: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface User {
  website: string;
  id: number;
  name: string;
  email: string;
  phone: string;
  address: Address;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch user data');
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="user-profile bg-gradient-to-r from-purple-500 to-pink-300 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      {user && (
        <>
          <div className="flex flex-col items-center mb-6">
            <img
              className="h-24 w-24 rounded-full border-4 border-gray-300 shadow-sm"
              src={`https://picsum.photos/id/${user.id}/200/200`}
              alt={`Profile of ${user.name}`}
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600 font-medium">Phone:</span>
              <span className="text-gray-900">{user.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Website:</span>
              <a href={`https://${user.website}`} className="text-blue-500 hover:underline">
                {user.website}
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Address:</span>
              <span className="text-gray-900">
                {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
