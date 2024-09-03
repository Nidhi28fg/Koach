import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface User {
  website: string;
  phone: number;
  id: number;
  name: string;
  email: string;
}

function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch user data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (users.length === 0) return <p>No users available.</p>;

  return (
    <div className="user-activities bg-gradient-to-br from-gray-50 to-gray-200 p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
      <h1 className="text-3xl text-blue-800 font-extrabold text-center mb-8">
        User Directory
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id} className="hover:no-underline">
            <li className="bg-white rounded-xl shadow-md transform transition-transform hover:scale-105 p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <img
                    className="h-20 w-20 rounded-full bg-gray-100"
                    src={`https://picsum.photos/id/${user.id}/200/200`}
                    alt={`Profile picture of ${user.name}`}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-400 h-4 w-4 rounded-full border-2 border-white"></div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {user.name}
                </h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <div className="mt-4 flex justify-between items-center text-gray-700">
                <p className="text-sm font-medium">
                  <span className="font-bold">Phone:</span> {user.phone}
                </p>
                <p className="text-sm font-medium">
                  <span className="font-bold">Website:</span> {user.website}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Home;
