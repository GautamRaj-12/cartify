import Image from "next/image";
import Link from "next/link";
const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <h2 className="sm:text-3xl text-xl font-bold">
          Uh! Oh! Page Not Found...
        </h2>
        <Image src="./404.svg" alt="" width={800} height={800} />
        <Link href="/" className="text-lg underline">
          Back to home
        </Link>
      </div>
    </>
  );
};
export default NotFound;
