import { Toggle } from "@radix-ui/react-toggle";

const Login = () => {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Log In</h1>
        <form className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button className="w-full bg-green-600 text-white py-2 rounded">
            Log In
          </button>
        </form>
        <Toggle />
      </div>

    );
  };
  
  export default Login;