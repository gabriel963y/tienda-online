import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

function BlogSearch() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="mb-5">
            <h5
                className="mb-3"
                style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    color: 'var(--text-main)',
                    letterSpacing: '-0.02em',
                }}
            >
                Buscar
            </h5>
            <div
                className="d-flex align-items-center p-2 rounded"
                style={{
                    background: 'var(--bg-light)',
                    border: '1px solid',
                    borderColor: isFocused ? 'var(--accent-primary)' : 'var(--border-light)',
                    boxShadow: isFocused
                        ? '0 0 0 3px rgba(16, 185, 129, 0.1)'
                        : 'var(--card-shadow)',
                    transition: 'all 0.3s ease',
                }}
            >
                <FiSearch
                    className="mx-2"
                    style={{
                        color: isFocused ? 'var(--accent-primary)' : 'var(--text-muted)',
                        transition: 'color 0.3s ease',
                    }}
                />
                <input
                    type="text"
                    placeholder="Buscar artículos..."
                    className="border-0 bg-transparent w-100"
                    style={{
                        outline: 'none',
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>
        </div>
    );
}

export default BlogSearch;
