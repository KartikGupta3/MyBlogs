export default function Nav() {
  return (
    <nav className="flex justify-between bg-white p-8">
      <ul>
        <li className="text-[#333333] font-bold">My Blog</li>
      </ul>
      <ul className="flex gap-16">
        <li>Blog</li>
        <li>
          <button>Log in</button>
        </li>
        <li>
          <button>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}
