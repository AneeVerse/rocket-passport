export default function ContactForm() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md lg:max-w-sm relative before:absolute before:inset-0 before:rounded-lg before:shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.3),0_10px_25px_-5px_rgba(0,0,0,0.3)] before:-z-10">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
        Start Your Passport Application Today
      </h3>
      <p className="text-gray-600 text-sm mb-4 sm:mb-6 leading-relaxed">
        Ready to get your passport without the bureaucratic hassles? Our certified consultants have successfully processed over 100,000 applications with a 100% approval rate.
      </p>
      
      <form className="space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#027b7a] focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#027b7a] focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#027b7a] focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#027b7a] focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>
        
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#027b7a] focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
          />
        </div>
        
        <div>
          <textarea
            placeholder="Message"
            rows={3}
            className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#027b7a] focus:border-transparent text-sm resize-none text-gray-900 placeholder-gray-500"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#027b7a] text-white py-3 sm:py-2 px-4 rounded-md hover:bg-[#026968] transition-colors text-sm font-medium"
        >
          Send Now →
        </button>
      </form>
    </div>
  );
}
