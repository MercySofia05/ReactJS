const ShimmerForMenuList = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold text-gray-900">Fetching your menu, <br/><br/> Dishes are still lining up 😄</h1>

      <div className="mt-4 italic mx-4 py-20">
        {/* <div className="flex items-center py-1 text-sm text-gray-700">
            <span className="font-semibold">
              {avgRating} ({totalRatingsString})
            </span>
          </div>
          <div className="flex items-center py-1 text-sm text-gray-700">
            <span className="font-semibold">
              {costForTwoMessage}
            </span>
          </div>
          <div className="flex items-center py-1 text-sm text-gray-700">
            <span className="font-semibold">
            {cuisines?.join(", ") || "—"}
            </span>
          </div>
  
          <div className="flex items-center py-1 text-sm text-gray-700">
            <span className="font-semibold">
            Outlet: {areaName}
            </span>
          </div> */}
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold border-b pb-2 mb-4">MENU</h2>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for dishes"
            className="w-full border rounded-full px-4 py-2 pl-10 focus:ring-2 focus:ring-yellow-400"
          />
          <svg
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
            />
          </svg>
        </div>

        <>
          <div className="space-y-6 py-2 mx-2.5">
            <div className="flex justify-between items-start border-b pb-4">
              <div className="">
               
              </div>
              <img
                src=""
                alt=""
                className="w-28 h-20 object-cover rounded"
              />
            </div>
          </div>

          <div className="space-y-6 py-2 mx-2.5">
            <div className="flex justify-between items-start border-b pb-4">
              <div className="">
               
              </div>
              <img
                src=""
                alt=""
                className="w-28 h-20 object-cover rounded"
              />
            </div>
          </div>

          <div className="space-y-6 py-2 mx-2.5">
            <div className="flex justify-between items-start border-b pb-4">
              <div className="">
               
              </div>
              <img
                src=""
                alt=""
                className="w-28 h-20 object-cover rounded"
              />
            </div>
          </div>

          <div className="space-y-6 py-2 mx-2.5">
            <div className="flex justify-between items-start border-b pb-4">
              <div className="">
               
              </div>
              <img
                src=""
                alt=""
                className="w-28 h-20 object-cover rounded"
              />
            </div>
          </div>

          <div className="space-y-6 py-2 mx-2.5">
            <div className="flex justify-between items-start border-b pb-4">
              <div className="">
               
              </div>
              <img
                src=""
                alt=""
                className="w-28 h-20 object-cover rounded"
              />
            </div>
          </div>

          
        </>
      </div>
    </div>
  );
};

export default ShimmerForMenuList;
