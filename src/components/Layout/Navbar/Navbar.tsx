import NavbarEnd from "./NavbarEnd/NavbarEnd";

export default function Navbar() {
  return (
    <div className="w-full navbar bg-base-300">
      <div className="navbar-start">
        <label
          htmlFor="drawer"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="navbar-center">
        Farabaugh&apos;s Precision Pressure Washing
      </div>
      <NavbarEnd />
    </div>
  );
}
