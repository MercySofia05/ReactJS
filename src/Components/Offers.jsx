const Offers = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-2xl space-y-8">
          <h2 className="text-3xl font-bold text-center mb-6">Latest Offers</h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center p-4 border rounded-xl hover:shadow-md transition">
              <div>
                <p className="font-semibold">Festive Discount</p>
                <p className="text-gray-700">Get 20% off on all orders this festive season!</p>
              </div>
            </div>
    
            <div className="flex items-center p-4 border rounded-xl hover:shadow-md transition">
              <div>
                <p className="font-semibold">Referral Offer</p>
                <p className="text-gray-700">Invite a friend and both get ₹100 off on your next order.</p>
              </div>
            </div>
          </div>
        </div>
      );
 }
 
 export default Offers;