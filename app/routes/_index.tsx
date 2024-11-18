import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-96 p-5 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold">Welcome to Remix!</h1>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <a href="/register" className="text-blue-500 underline">
            Register
          </a>
          <a href="/login" className="text-blue-500 underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
