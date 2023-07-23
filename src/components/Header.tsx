import HorizontalRule from "./HorizontalRule";
import bannerImage from "../assets/images/banner/banner.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to={`/`}>
        <img className="m-auto mt-4" src={bannerImage} alt="banner" />
      </Link>
      <h1 className="flex justify-center text-2xl font-semi-bold">
        Image Board !
      </h1>
      <HorizontalRule />
    </>
  );
}
