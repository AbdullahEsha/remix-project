import { FC } from "react";

const ForgotPassword: FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 p-5 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold">Forgot Password</h1>
        <form method="post" action="/forgot-password" className="mt-4">
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
            <button
              type="submit"
              className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Password
            </button>
            <hr className="my-4" />
            {/* go to login */}
            <a href="/login" className="text-blue-500 underline">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
