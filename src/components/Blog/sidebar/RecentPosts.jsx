import RecentPostCard from './RecentPostCard';
import posts from '../postsTest';
import { FiClock } from 'react-icons/fi';

function RecentPosts() {
    const recentPosts = posts.slice(0, 3);

    return (
        <div className="mb-5">
            <h5
                className="mb-4 d-flex align-items-center gap-2"
                style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    color: 'var(--text-main)',
                    letterSpacing: '-0.02em',
                }}
            >
                <FiClock className="text-muted" /> Posts Recientes
            </h5>

            <div className="d-flex flex-column">
                {recentPosts.map((post) => (
                    <RecentPostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        date={post.date}
                        image={post.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecentPosts;
