import { FaCheckCircle } from "react-icons/fa";

const Notifications = () => {
  return (
    <>
      <div className="absolute bottom-6 right-2 p-4 bg-[#F2F0FF] text-[151875] text-xl shadow-lg flex justify-center items-center">
        <div className="flex items-center gap-2 justify-center">
          <FaCheckCircle color="green" /> Item added to cart
        </div>
      </div>
    </>
  );
};
export default Notifications;
