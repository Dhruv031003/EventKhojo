import logo_transparent from "../assets/logo_transparent.png"
import "../styles/Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="sticky top-0 w-full">
            <nav id="Navbar" className="w-full bg-white">
                <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center space-x-2">
                        <img width="100px" src={logo_transparent} alt="Official logo for Eventkhojo, EVENTKHOJO text in black, with a orange ticket or pass in the background." />
                    </div>
                    <div className="hidden grow items-start lg:flex">
                        <ul className="ml-12 inline-flex space-x-8">
                            <li>
                                <Link
                                    to="/"
                                    className="text-xl"
                                >
                                    About-Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-xl"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <button
                            type="button"
                            className="rounded-2xl px-4 text-xl text-black shadow-sm shadow-[#DD3F22] hover:shadow-md hover:shadow-[#DD3F22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dd3e225d]"
                        >
                            <Link to="/waitlist">Join Waitlist</Link>
                        </button>
                    </div>
                    <div className="lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 cursor-pointer"
                        >
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </div>
                </div>
            </nav>
        </header>
    )
}
