import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [isSearchHovered, setIsSearchHovered] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.search-bar-container')) {
                setShowSearch(false);
            }
        };

        if (showSearch) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showSearch]);

    const handleSearchClick = (e) => {
        if (!showSearch) {
            setShowSearch(true);
            const button = e.currentTarget;
            setTimeout(() => {
                const input = button.closest('.search-bar-container')?.querySelector('input');
                input?.focus();
            }, 80);
        } else {
            setShowSearch(false);
        }
    };

    return (
        <div className="search-bar-container position-relative d-flex align-items-center flex-shrink-0">
            <div
                className="d-flex align-items-center rounded-pill"
                onMouseEnter={() => setIsSearchHovered(true)}
                onMouseLeave={() => setIsSearchHovered(false)}
                style={{
                    width: showSearch ? 'var(--search-expanded-width, 220px)' : '40px',
                    height: '40px',
                    backgroundColor: 'var(--bg-subtle)',
                    border:
                        (isSearchHovered || isSearchFocused) && showSearch
                            ? '1px solid rgba(16, 185, 129, 0.45)'
                            : '1px solid var(--border-light)',
                    boxShadow:
                        isSearchFocused && showSearch
                            ? '0 0 0 3px rgba(16, 185, 129, 0.08)'
                            : 'none',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    padding: showSearch ? '0 12px 0 16px' : '0',
                    justifyContent: 'center',
                }}
            >
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="border-0 bg-transparent"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    style={{
                        width: showSearch ? '100%' : '0px',
                        opacity: showSearch ? 1 : 0,
                        display: showSearch ? 'block' : 'none',
                        transition: 'all 0.3s ease-in-out',
                        outline: 'none',
                        fontSize: '0.85rem',
                        padding: 0,
                        margin: 0,
                        color: 'var(--text-main)',
                    }}
                />
                <FiSearch
                    size={18}
                    style={{
                        cursor: 'pointer',
                        minWidth: '18px',
                        transition: 'color 0.3s ease',
                        color:
                            isSearchFocused || isSearchHovered
                                ? 'var(--accent-primary)'
                                : 'var(--text-muted)',
                    }}
                    onClick={handleSearchClick}
                />
            </div>
        </div>
    );
};

export default SearchBar;
