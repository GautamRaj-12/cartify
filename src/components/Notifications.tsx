import { FaCheckCircle } from "react-icons/fa";

const Notifications = () => {
  return (
    <>
      <div className="bottom-6 right-2 bg-[#F2F0FF] text-[151875] text-xl shadow-lg flex flex-col justify-center items-center fixed after:h-1 after:w-full after:bg-[#FB2E86] after:block after:animate-noti-animation">
        <div className="flex items-center gap-2 justify-center p-8">
          <FaCheckCircle color="green" /> Item added to cart
        </div>
      </div>
    </>
  );
};
export default Notifications;
