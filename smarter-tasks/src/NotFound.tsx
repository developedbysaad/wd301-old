import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mt-10 text-center text-4xl font-bold">
      <h1 className="mb-10">404 error page not found</h1>
      <button id="backToHomeButton">
        <Link to="/" className="text-blue-600 hover:text-black">
          Home
        </Link>
      </button>
    </div>
  );
};
export default NotFound;
