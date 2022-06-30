import logo from "../assets/images/logo.svg";
import bookIcon from "../assets/images/book-icon.svg";
import cardIcon from "../assets/images/card-icon.svg";
import downIcon from "../assets/images/down-icon.svg";
import ideaIcon from "../assets/images/idea-icon.svg";
import userIcon from "../assets/images/user-icon.svg";

function NavBar() {
  return (
    <nav
      className="navbar py-8 px-10 text-white absolute z-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(217,217,217,0) 100%)",
      }}
    >
      <div className="lg:hidden flex-none">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#" className="text-black text-xs gap-[0.4rem]">
                <img
                  src={bookIcon}
                  alt="whitepaper"
                  className="w-[16px] h-[16px]"
                />
                <span>Whitepaper</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs gap-[0.4rem]">
                <img
                  src={ideaIcon}
                  alt="Tokenomics"
                  className="w-[16px] h-[16px]"
                />
                <span>Tokenomics</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs gap-[0.4rem]">
                <img
                  src={cardIcon}
                  alt="Marketplace"
                  className="w-[16px] h-[16px]"
                />
                <span>Marketplace</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs gap-[0.4rem]">
                <img
                  src={downIcon}
                  alt="Contact Us"
                  className="w-[16px] h-[16px]"
                />
                <span>Contact Us</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs gap-[0.4rem]">
                <img src={userIcon} alt="user" className="w-[16px] h-[16px]" />
                <span>Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 ml-[1rem] sm:ml-[3rem] lg:ml-[12rem]">
        <a className="w-[80px]" href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="hidden lg:block flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="#" className="text-white text-xs gap-[0.4rem]">
              <img
                src={bookIcon}
                alt="whitepaper"
                className="w-[16px] h-[16px]"
              />
              <span>Whitepaper</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-xs gap-[0.4rem]">
              <img
                src={ideaIcon}
                alt="Tokenomics"
                className="w-[16px] h-[16px]"
              />
              <span>Tokenomics</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-xs gap-[0.4rem]">
              <img
                src={cardIcon}
                alt="Marketplace"
                className="w-[16px] h-[16px]"
              />
              <span>Marketplace</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-xs gap-[0.4rem]">
              <img
                src={downIcon}
                alt="Contact Us"
                className="w-[16px] h-[16px]"
              />
              <span>Contact Us</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={userIcon} alt="user" className="w-[16px] h-[16px]" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
