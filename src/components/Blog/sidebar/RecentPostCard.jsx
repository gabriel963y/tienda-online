import { Image } from "react-bootstrap"

function RecentPostCard({ title, date, image }) {
    return (
        <div className="d-flex gap-3 mb-3">

            <Image
                src={image}

                alt={title}
                rounded
                width={70}
                height={70}
            />

            <div className="text-start">
                <small className="text-muted text-uppercase">
                    {date}
                </small>

                <h6 className="fw-bold mb-0 mt-1">
                    {title}
                </h6>
            </div>

        </div>
    )
}

export default RecentPostCard