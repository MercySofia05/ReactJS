const Help = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-2xl space-y-8">
          <h2 className="text-3xl font-bold text-center mb-6">Need Help?</h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center p-4 border rounded-xl hover:shadow-md transition">
              <div>
                <p className="font-semibold">FAQs</p>
                <p className="text-gray-700">Find answers to the most common questions about our service.</p>
              </div>
            </div>
    
            <div className="flex items-center p-4 border rounded-xl hover:shadow-md transition">
              <div>
                <p className="font-semibold">Contact Support</p>
                <p className="text-gray-700">Reach out to our support team for personalized assistance.</p>
              </div>
            </div>
          </div>
        </div>
      );
 }
 
 export default Help;