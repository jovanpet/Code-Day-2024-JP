'use client';
import { useState } from 'react';

/**
 * JSX Component for the Navbar of the application
 *
 * @version 0.1.0
 * @returns {JSX.Element} The Navbar Component for the application
 */
const Navbar = () => {
    const [search, setSearch] = useState<string>('');

    /**
     * Handles the search form submission
     *
     * @param e The event object from the input form
     */
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <nav className="bg-white text-black w-full flex justify-between p-2">
            <p>Logo</p>
            <form onSubmit={handleSearch} className="w-1/2">
                <input
                    className="w-full border-2 border-black rounded-2xl p-1"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                />
            </form>
            <p>Profile Icon</p>
        </nav>
    );
};

export default Navbar;
