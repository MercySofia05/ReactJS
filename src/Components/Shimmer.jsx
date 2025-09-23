const Shimmer = () => {
  return (
    <div className="mx-auto px-2 bg-gray-100 sm:px-6 lg:px-8">
      <div className="p-4 m-4">
        <div className="filter">
          <button className=" bg-green-100 rounded-lg px-4">
            Click Me for Top Rated Restuarants
          </button>
        </div>
        <hr className="text-gray-300 border-1 my-10" />

        <div className="flex flex-col gap-4 items-baseline">
          <div className="mx-4">
            <h3 className="font-bold italic">
              Looking for great food near you &#128523;
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <div className="w-64 h-100 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-300">
              <div className="p-5"></div>
            </div>
            <div className="w-64 h-100 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-300">
              <div className="p-5"></div>
            </div>
            <div className="w-64 h-100 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-300">
              <div className="p-5"></div>
            </div>
            <div className="w-64 h-100 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-300">
              <div className="p-5"></div>
            </div>
            <div className="w-64 h-100 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-300">
              <div className="p-5"></div>
            </div>
            <div className="w-64 h-100 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-300">
              <div className="p-5"></div>
            </div>
            <div className="w-64 h-100 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-300">
              <div className="p-5"></div>
            </div>
            <div className="w-64 h-100 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-300">
              <div className="p-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
