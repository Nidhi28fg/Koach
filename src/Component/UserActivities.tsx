import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from "./Loading.gif";




interface UserActivitiesProps {
  userId: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const UserActivities: React.FC<UserActivitiesProps> = ({ userId }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch user activities');
        setLoading(false);
      });
  }, [userId]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <img src={Loading} alt="Loading..." className="w-18 h-18" />
    </div>
  );
  if (error) return <p> {error}</p>;

  return (
    <div className="user-activities bg-gradient-to-br from-indigo-600 to-blue-500 p-6 rounded-xl shadow-lg max-w-5xl mx-auto mt-8">
      <h3 className="text-white text-3xl font-extrabold text-center mb-8">
        User Activities
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <li key={post.id} className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:-translate-y-2 hover:shadow-xl">
            <h4 className="text-lg font-bold text-indigo-700 mb-3 hover:text-indigo-900">
              {post.title}
            </h4>
            <p className="text-gray-700">
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivities;
