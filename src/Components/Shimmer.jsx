const Shimmer = () => {
  return (
    <div className="mx-auto px-2 bg-gray-100 sm:px-6 lg:px-8">
      <div className="p-4 m-4">
        {/* <div className="filter">
          <button className=" bg-green-100 rounded-lg px-4">
            Click Me for Top Rated Restuarants
          </button>
        </div> */}
        <hr className="text-gray-300 border-1 my-10" />

        <div className="flex flex-col gap-4 items-baseline">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Search Bar (styled like filter buttons) */}
            <input
              type="search"
              className="px-4 py-2 rounded-full border shadow text-sm text-gray-900 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Search Restaurants"
            />

            {/* Filter Buttons */}
            <div className="flex gap-3 flex-wrap">
              {["", "", "", "", ""].map((label, i) => (
                <button
                  key={i}
                  className="px-16 py-6 w-10 rounded-full border shadow text-black hover:bg-gray-200"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

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
