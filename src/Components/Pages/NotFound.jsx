import { Link } from "react-router-dom";
import errorImg from "../../assets/Error-page-img.jpg";

const ErrorPage = () => {
  return (
    <div className="max-w-screen-xl max-h-screen mx-auto px-5 md:px-10 py-4">
      <div className="w-full flex justify-center ">
        <img
          src={errorImg}
          alt=""
          className="w-5/6 md:w-3/5 lg:w-[500px] object-cover"
        />
      </div>
      <div className="text-center">
        <Link to={"/"}>
          <button className="bg-[#008FD4] hover:bg-[#0870A1] text-white py-2 px-5 rounded-md duration-300">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
