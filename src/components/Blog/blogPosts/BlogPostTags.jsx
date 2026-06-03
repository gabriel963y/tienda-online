import Badge from "react-bootstrap/Badge"

function BlogPostTags({ tags, seleccionarTag }) {
    return (
        <div className="mt-auto">
            {tags.map((tag, index) => (
                <Badge 
                    onClick={() => seleccionarTag(tag)}
                    pill
                    key={index}
                    bg="success"
                    text="light"
                    className="me-2 text-uppercase"
                    style={{ cursor: "pointer" }}
                >
                    {tag}
                </Badge>
            ))}
        </div>
    )
}
export default BlogPostTags
