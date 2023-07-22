import bannerImage from "../assets/images/banner/banner.png";

export default function Header() {
  return (
    <>
      <img className="m-auto mt-4" src={bannerImage} alt="banner" />
      <h1 className="flex justify-center">Image Board !</h1>
    </>
  );
}
