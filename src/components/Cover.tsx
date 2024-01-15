export default function Cover() {
  return (
    <div className="bg-gradient-to-b from-teal-400 via-blue-500 to-indigo-500 h-screen flex items-center justify-center flex-col text-white">
      <h1 className="text-5xl font-extrabold mb-4">Hi, I&apos;m Kartik Gupta</h1>
      <p className="text-lg text-gray-100 mb-8">
        Welcome to my blog - a place where my stories come to life.
      </p>
      <button className="text-white flex items-center rounded-full focus:outline-none bg-opacity-50 hover:bg-opacity-75">
        <span className="font-semibold text-lg">Get Started</span>
        <span className="ml-2 text-2xl">&#10132;</span>
      </button>
    </div>
  );
}
