export default function TravelPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Travel</h1>

        <div className="space-y-8">
          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Conference Venue
            </h2>
            <div className="text-gray-700 space-y-2">
              <p className="font-semibold text-lg">University at Buffalo</p>
              <p>Buffalo, New York 14260</p>
              <p>United States</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Getting to Buffalo
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold mb-2">By Air</h3>
                <p>
                  Buffalo Niagara International Airport (BUF) is located
                  approximately 15 miles from the University at Buffalo campus.
                  The airport offers numerous daily flights from major cities
                  across North America.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">By Car</h3>
                <p>
                  Buffalo is easily accessible via major highways including I-90
                  (New York State Thruway) and I-190.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">By Train</h3>
                <p>
                  Amtrak provides service to Buffalo-Depew Station and
                  Buffalo-Exchange Street Station.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Accommodation
            </h2>
            <p className="text-gray-700 mb-4">
              Information about recommended hotels and special conference rates
              will be available soon. Please check back for updates.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#005bbb]">
              Local Transportation
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                • Taxi and rideshare services (Uber, Lyft) are readily available
              </p>
              <p>• NFTA Metro Rail and bus system serves the Buffalo area</p>
              <p>
                • Rental cars available at the airport and throughout the city
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
