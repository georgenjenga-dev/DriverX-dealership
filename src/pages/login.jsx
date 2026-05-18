import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

function Login() {
  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Login Successful");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl mb-6">Login</h1>

        <button
          onClick={login}
          className="bg-red-500 px-6 py-3 rounded-lg"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;