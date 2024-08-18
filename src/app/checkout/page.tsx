import { FaHeart } from "react-icons/fa6";
import Link from "next/link";

const Checkout = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen items-center justify-center gap-6 text-[#151875]">
        <div className="flex items-center justify-center gap-6">
          <h2 className="text-[48px]">Order has been placed</h2>
          <FaHeart color="#FB2E86" fontSize={48} />
        </div>
        <h3 className="text-3xl">Thank You</h3>
        <Link
          href="/"
          className="italic font-semibold border-b-2 border-[#FB2E86]"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default Checkout;
