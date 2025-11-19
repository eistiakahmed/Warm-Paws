import React, { useState, use } from 'react';
// import { useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const { email, setEmail, resetPassword } = use(AuthContext);


  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email.');
      return;
    }

    setLoading(true);

    resetPassword(email)
      .then(() => {
        toast.success('Password reset email sent! Check your inbox.');
        setTimeout(() => {
          window.location.href = 'https://mail.google.com/mail/u/0/#all';
        }, 2000);
      })
      .catch((err) => {
        console.error('Reset error:', err);
        if (err.code === 'auth/user-not-found') {
          toast.error('No user found with this email.');
        } else if (err.code === 'auth/invalid-email') {
          toast.error('Invalid email address.');
        } else {
          toast.error('Failed to send reset email. Try again later.');
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <title>WarmPaws | ForgetPassword</title>
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter your email
            </label>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="btn bg-blue-600 hover:bg-blue-700 text-white w-full font-semibold"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Reset Password'}
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default ForgetPassword;
