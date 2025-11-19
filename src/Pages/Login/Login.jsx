import React, { use, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const Login = () => {
  const [show, setShow] = useState(false);

  const { signInUser, googleSignIn, setEmail, email } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    navigate('/forget-password', { state: { email } });

    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }

    setEmail(email)
    signInUser(email, password)
      .then((res) => {
        console.log('Logged in user:', res.user);
        toast.success('Login successful! Welcome back 🐾');
        e.target.reset();
        navigate(location?.state || '/');
      })
      .catch((err) => {
        console.error('Login error:', err);

        if (err.code === 'auth/invalid-email') {
          toast.error('Invalid email address. Please check and try again.');
        } else if (err.code === 'auth/user-not-found') {
          toast.error(
            'No account found with this email. Please register first.'
          );
        } else if (err.code === 'auth/wrong-password') {
          toast.error('Incorrect password. Please try again.');
        } else if (err.code === 'auth/missing-password') {
          toast.error('Please enter your password.');
        } else if (err.code === 'auth/too-many-requests') {
          toast.error('Too many failed attempts. Try again later.');
        } else if (err.code === 'auth/network-request-failed') {
          toast.error('Network error. Please check your connection.');
        } else {
          toast.error('Login failed. Please try again later.');
        }
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        console.log('Google user:', res.user);
        toast.success(`Welcome, ${res.user.displayName || 'User'} 🐾`);
        navigate(location?.state || '/');
      })
      .catch((err) => {
        console.error('Google login error:', err);
        if (err.code === 'auth/popup-closed-by-user') {
          toast.error('Google login canceled. Please try again.');
        } else if (err.code === 'auth/network-request-failed') {
          toast.error('Network error. Check your internet connection.');
        } else {
          toast.error('Google login failed. Please try again.');
        }
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-amber-50 px-4">
      <title>WarmPaws | Login</title>
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col lg:flex-row overflow-hidden max-w-4xl w-full animate__animated animate__fadeIn">
        <div
          className="flex-1 flex flex-col justify-center items-center bg-linear-to-br from-blue-600 to-yellow-500 text-white p-10 animate__animated animate__fadeInLeft"
          data-aos="fade-right"
        >
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg text-center max-w-md">
            Stay connected with your pet’s health, comfort, and care this
            winter.
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Pet Icon"
            className="w-24 mt-6 opacity-90 animate__animated animate__bounce"
          />
        </div>

        <div
          className="flex-1 flex items-center justify-center p-10 animate__animated animate__fadeInRight"
          data-aos="fade-left"
        >
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate__animated animate__fadeInDown">
              Login to <span className="text-blue-600">Warm</span>
              <span className="text-yellow-600">Paws</span>
            </h2>

            <form
              onSubmit={handleLogin}
              className="space-y-5 animate__animated animate__fadeInUp"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type={show ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  required
                />
                <button
                  onClick={() => setShow(!show)}
                  type="button"
                  className="absolute right-3 top-9"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              <div className="flex justify-between text-sm">
                <Link
                  to="/forget-password"
                  className="text-blue-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="btn bg-blue-600 hover:bg-blue-700 text-white w-full font-semibold animate__animated animate__pulse"
              >
                Login
              </button>

              <div className="divider">OR</div>

              <button
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border-[#e5e5e5] w-full animate__animated animate__fadeIn"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              New to WarmPaws?{' '}
              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
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

export default Login;
