
import BlogSearch from "./BlogSearch"
import RecentPosts from "./RecentPosts"
import BlogSideBarCTA from "./BlogSideBarCTA"
function BlogSideBar() {
    return (
        <>
            <BlogSearch></BlogSearch>
            <BlogSideBarCTA></BlogSideBarCTA>
            <RecentPosts/>
        </>
    )
}

export default BlogSideBar  