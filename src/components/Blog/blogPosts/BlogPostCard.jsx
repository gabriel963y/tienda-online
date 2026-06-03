import { Image, Row, Col } from "react-bootstrap"
import BlogPostTags from "./BlogPostTags"
import { Link } from "react-router-dom"
function BlogPostCard({
  id,
  title,
  date,
  category,
  image,
  description,
  tags,
  seleccionarTag

}) 

{
  return (
    <Row className="mb-5 align-items-stretch">
      <Col md={5}>
        <Link
            to={`/blog/${id}`}
            className="text-decoration-none text-dark"
        >
          <Image
            src={image}
            alt={title}
            fluid
            rounded
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover"
            }}
          />
        </Link>
      </Col>

      <Col md={7} className="d-flex flex-column text-start">
        <div>
            <span className="fw-bold text-uppercase">
                {category}
            </span>

            <span className="mx-2">
                •
            </span>

            <small className="text-muted text-uppercase">
                {date}
            </small>
        </div>

        <Link
            to={`/blog/${id}`}
            className="text-decoration-none"
        >
            <h4 className="fw-bold "style={{ color: "black" }}>
                {title}
            </h4>

            <p className="text-muted">
                {description}
            </p>
        </Link>    
        <BlogPostTags
            tags={tags}
            seleccionarTag={seleccionarTag}
        />
      </Col>
    </Row>
  )
}

export default BlogPostCard