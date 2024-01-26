"use client"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig.js";
import { useRouter } from 'next/navigation';
export default function LogInPage() {
  const router = useRouter();
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        router.push("/HomePage");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md p-6 space-y-8 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold font-serif text-center text-gray-800 mb-6">
          Login
        </h1>
        <button
          className="w-full py-3 px-4 bg-white text-gray-800 rounded-md flex items-center justify-center space-x-2 border border-gray-300 focus:outline-none hover:shadow-md"
          onClick={handleGoogle}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M23.7662 9.64963H22.7996V9.59983H11.9998V14.3998H18.7815C17.7921 17.1939 15.1335 19.1997 11.9998 19.1997C8.02366 19.1997 4.79992 15.9759 4.79992 11.9998C4.79992 8.02366 8.02366 4.79992 11.9998 4.79992C13.8352 4.79992 15.5049 5.4923 16.7763 6.62329L20.1705 3.22914C18.0273 1.23178 15.1605 0 11.9998 0C5.37291 0 0 5.37291 0 11.9998C0 18.6267 5.37291 23.9996 11.9998 23.9996C18.6267 23.9996 23.9996 18.6267 23.9996 11.9998C23.9996 11.1952 23.9168 10.4098 23.7662 9.64963Z"
              fill="#FFC107"
            />
            <path
              d="M1.38278 6.41449L5.32531 9.30584C6.3921 6.66468 8.97565 4.79992 11.999 4.79992C13.8344 4.79992 15.5041 5.4923 16.7755 6.62328L20.1697 3.22914C18.0265 1.23178 15.1597 0 11.999 0C7.38988 0 3.39275 2.60215 1.38278 6.41449Z"
              fill="#FF3D00"
            />
            <path
              d="M12 24C15.0995 24 17.9159 22.8138 20.0452 20.8848L16.3313 17.7421C15.0861 18.6891 13.5644 19.2013 12 19.2001C8.87884 19.2001 6.22868 17.2099 5.2303 14.4326L1.31717 17.4475C3.30313 21.3336 7.33627 24 12 24Z"
              fill="#4CAF50"
            />
            <path
              d="M23.7662 9.64964H22.7996V9.59984H11.9998V14.3998H18.7815C18.3082 15.7296 17.4557 16.8916 16.3293 17.7423L16.3311 17.7411L20.045 20.8838C19.7823 21.1226 23.9996 17.9997 23.9996 11.9998C23.9996 11.1952 23.9168 10.4098 23.7662 9.64964Z"
              fill="#1976D2"
            />
          </svg>
          <p className="text-base font-semibold">Sign in with Google</p>
        </button>
      </div>
    </div>
  );
}
