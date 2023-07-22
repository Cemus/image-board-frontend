import bannerImage from "../assets/images/banner/banner.png";

export default function Header() {
  return (
    <>
      <img className="m-auto mt-4" src={bannerImage} alt="banner" />
      <h1 className="flex justify-center text-2xl font-semi-bold">
        Image Board !
      </h1>
      <hr className="bg-gray-200 h-0.5 w-3/4 mx-auto" />
    </>
  );
}
