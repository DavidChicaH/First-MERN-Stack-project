import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, error: authError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const submitNewUser = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {authError.map((err, i) => (
          <div key={i} className="bg-red-500 p-2">
            {err}
          </div>
        ))}
        <h1 className="text-2xl font-bold">Register</h1>
        <form onSubmit={submitNewUser}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="username"
          />
          {errors.username && <p className="text-red-500">Username Required</p>}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="email"
          />
          {errors.email && <p className="text-red-500">Email Required</p>}
          <input
            type="password"
            {...register("password", { required: true, min: 6 })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="password"
          />
          {errors.password && <p className="text-red-500">password Required</p>}
          <button type="submit" className="btn">
            Register
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
