import { FaHeart } from "react-icons/fa6";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen items-center justify-center gap-6 text-textPrimary">
        <div className="flex items-center justify-center gap-6">
          <h2 className="sm:text-[48px] text-3xl">Order has been placed</h2>
          <FaHeart color="#FB2E86" className="sm:text-[48px] text-3xl" />
        </div>
        <h3 className="text-3xl">Thank You</h3>
        <Link
          href="/"
          className="italic font-semibold border-b-2 border-accent"
        >
          Continue Shopping
        </Link>
      </div>
    </>
  );
}
