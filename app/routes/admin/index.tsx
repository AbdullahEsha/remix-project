import { FC, MouseEvent } from "react";
import { useNavigate } from "@remix-run/react";
import { useProtectAdmin } from "~/customHooks/protectAdmin";

interface LogoutResponse {
  message?: string;
}

const AdminIndex: FC = () => {
  useProtectAdmin();
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:5000/api/v1";

  const handleLogout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/auth/logout`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const result: LogoutResponse = await response.json();

      if (result?.message?.includes("successful")) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      } else {
        alert("Failed to logout. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("An error occurred while logging out.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 p-5 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold">Welcome to Admin Panel</h1>
        <hr className="my-4" />
        <button
          onClick={handleLogout}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminIndex;
