import BlogSearch from './BlogSearch';
import RecentPosts from './RecentPosts';
import BlogSideBarCTA from './BlogSideBarCTA';

function BlogSideBar() {
    return (
        <div className="sticky-top" style={{ top: '100px', transition: 'all 0.3s ease' }}>
            <BlogSearch />
            <BlogSideBarCTA />
            <RecentPosts />
        </div>
    );
}

export default BlogSideBar;
