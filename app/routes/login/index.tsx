import { FC, FormEvent } from "react";
import { useNavigate } from "@remix-run/react";

const Login: FC = () => {
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:5000/api/v1";

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (result?.message?.includes("successful")) {
      localStorage.setItem("token", result.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/admin");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-96 p-5 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold">Login</h1>
        <form method="post" className="mt-4" onSubmit={handleLogin}>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mt-4"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="submit"
              className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
            <hr className="my-4" />
            {/* go to register */}
            <div className="flex justify-between items-center">
              <a href="/register" className="text-blue-500 underline">
                Register
              </a>
              <a
                href="/forgot-password"
                className="text-blue-500 underline ml-2"
              >
                Forgot Password
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
