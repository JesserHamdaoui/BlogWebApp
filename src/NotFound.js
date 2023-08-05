import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="404">
      <h1>404 NOT FOUND</h1>
      <Link to="/">Go back to home page</Link>
    </div>
  );
};

export default NotFound;
