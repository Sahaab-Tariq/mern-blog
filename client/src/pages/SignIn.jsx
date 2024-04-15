import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedFormData = {
      username: formData.username ? formData.username.trim() : '',
      email: formData.email ? formData.email.trim() : '',
      password: formData.password ? formData.password.trim() : ''
    };
    if (!trimmedFormData.email || !trimmedFormData.password) {
      setErrorMessage('Please fill out all fields!');
      return;
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trimmedFormData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Signin failed. Please try again.');
      }
      // Navigate to sign-in page if signin is successful
      navigate('/'); // Ensure that navigate is being called properly
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
};

  
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side div */}
        <div className="flex-1">
            <Link
              to="/"
              className="font-bold dark:text-white text-4xl"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg text-white">
                Sahaab's
              </span>
              Blog
            </Link>
            <p className="text-sm mt-5">
              This is a demo project. you can sign in with your email and password or with google
            </p>
        </div>
        {/* right side div */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value="Your email"/>
              <TextInput type="email" placeholder="name@company.com" id="email" onChange={handleChange} autoComplete="off"/>
            </div>
            <div className="">
              <Label value="Your password"/>
              <TextInput type="password" placeholder="********" id="password" onChange={handleChange} autoComplete="off"/>
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : 'Sign In'
              }
              </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to='/sign-up' className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {
            errorMessage &&(
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}
