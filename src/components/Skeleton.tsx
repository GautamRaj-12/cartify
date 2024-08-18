"use client";

const Skeleton = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto my-6 w-[90%] max-w-[1200px] gap-6">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-6 shadow-lg bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
            >
              <div className="h-64 shadow-xl bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex justify-center items-center"></div>
              <div className="p-2 flex justify-between g-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                <h1 className="g-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"></h1>
                <h2 className="g-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"></h2>
              </div>
              <div className="flex justify-center p-2">
                <div className="g-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10opacity-3 text-white px-3 py-[10px] font-semibold"></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Skeleton;
