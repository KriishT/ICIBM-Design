export default function Calendar() {
  const dates = [
    { event: "Paper Submission Deadline", date: "March 31, 2026" },
    { event: "Notification to Authors", date: "June 1, 2026" },
    { event: "Abstract Submission Deadline", date: "June 15, 2026" },
    { event: "Early Registration Opens", date: "June 1, 2026" },
    { event: "Early Registration Deadline", date: "July 1, 2026" },
    { event: "ICIBM Conference", date: "August 2-5, 2026" },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Important Dates
        </h1>

        <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <tbody className="divide-y divide-gray-200">
              {dates.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700">{item.event}</td>
                  <td className="px-6 py-4 text-right font-semibold text-[#005bbb]">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
