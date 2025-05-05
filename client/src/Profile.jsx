import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div className="text-center mt-10 text-white">Loading...</div>;
  if (!isAuthenticated) return <div className="text-center mt-10 text-white">You need to log in to view this page.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-red-600 flex flex-col items-center justify-center text-white p-6">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg max-w-sm w-full text-center">
        <img
          src={user.picture}
          alt={user.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
        />
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <p className="text-white/80">{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
