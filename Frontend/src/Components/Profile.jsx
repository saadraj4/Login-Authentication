import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    // Retrieve user data from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    // Logout function
    const handleLogout = () => {
        // localStorage.removeItem('authToken');
        // localStorage.removeItem('user');
        localStorage.clear()
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center">Profile</h2>
                <div className="text-center">
                    <img
                        src={`data:image/png;base64,${user.image}`} // Assuming the image is stored as a base64 string
                        alt="Profile"
                        className="w-32 h-32 rounded-full mx-auto"
                    />
                    <h3 className="text-lg font-medium mt-4">{user.username}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <br />
                    <br />

                    <button
                        onClick={handleLogout}
                        className="mt-6 px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
