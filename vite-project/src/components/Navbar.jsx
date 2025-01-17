import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-zinc-900 p-4">
            <h1 className="font-mono text-7xl text-3xl text-white mb-4">sAm Kelly </h1>
            <ul className="font-sometype text-2xl tracking-widest flex space-x-6">
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive 
                            ? "text-gray-500 underline" 
                            : "text-gray-300 hover:text-white"
                        }
                    >
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/portfolio" 
                        className={({ isActive }) => 
                            isActive 
                            ? "text-orange-500 underline" 
                            : "text-gray-300 hover:text-white"
                        }
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => 
                            isActive 
                            ? "text-orange-500 underline" 
                            : "text-gray-300 hover:text-white"
                        }
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/resume" 
                        className={({ isActive }) => 
                            isActive 
                            ? "text-orange-500 underline" 
                            : "text-gray-300 hover:text-white"
                        }
                    >
                        Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
