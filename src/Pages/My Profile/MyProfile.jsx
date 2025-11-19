import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
import toast, { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { FaUserEdit, FaSave, FaTimes } from 'react-icons/fa';

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });
      toast.success('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 px-4">
      <title>WarmPaws | My Profile</title>
      <Toaster position="top-center" reverseOrder={false} />

      <div
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center animate__animated animate__fadeInUp"
        data-aos="zoom-in"
      >
        {!isEditing ? (
          <>
            <div className="flex justify-center mb-4">
              <img
                src={
                  user?.photoURL ||
                  'https://i.ibb.co/PvRSp73D/Winter-Coat-Fitting-for-Dogs.jpg'
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 animate__animated animate__pulse animate__infinite"
                data-aos="flip-left"
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              {user?.displayName || 'Unknown User'}
            </h2>
            <p className="text-gray-600 mb-6">
              {user?.email || 'No Email Found'}
            </p>

            <button
              className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 mx-auto animate__animated animate__fadeIn"
              onClick={() => setIsEditing(true)}
              data-aos="fade-up"
            >
              <FaUserEdit />
              Update Profile
            </button>
          </>
        ) : (
          <form
            onSubmit={handleUpdateProfile}
            className="space-y-4 animate__animated animate__fadeIn"
            data-aos="fade-right"
          >
            <div>
              <label className="block text-left text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 font-medium mb-1">
                Profile Image URL
              </label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex justify-center gap-3 mt-5">
              <button
                type="submit"
                className="flex items-center gap-2 bg-green-600 text-white py-2 px-5 rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-300"
              >
                <FaSave /> Save
              </button>

              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="flex items-center gap-2 bg-gray-500 text-white py-2 px-5 rounded-lg hover:bg-gray-600 hover:scale-105 transition-all duration-300"
              >
                <FaTimes /> Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
