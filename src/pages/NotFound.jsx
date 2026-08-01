import { Link } from "react-router-dom";

export default function NotFound() {
  return (

    <section className="notfound container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Sorry, the page you are looking for doesn't exist.
      </p>

      <Link to="/home">
        <button className="btn btn--primary">
          Back to Home
        </button>
      </Link>
    </section>
);
}
