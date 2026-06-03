import RecentPostCard from "./RecentPostCard"
import posts from "../postsTest"
function RecentPosts() {
    const recentPosts = posts.slice(0, 3)
    return (
        <>
            <h5 className="text-start fw-bold text-secondary mb-4">
                Recent Posts
            </h5>
            {recentPosts.map((post)=> (
                <RecentPostCard
                    key={post.id}
                    title={post.title}
                    date= {post.date}
                    image = {post.image}
                />
            ))}
        </>
    )
}

export default RecentPosts