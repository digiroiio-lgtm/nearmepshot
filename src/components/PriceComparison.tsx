interface PriceComparisonProps {
  cityName?: string;
}

export function PriceComparison({ cityName = 'UK' }: PriceComparisonProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-semibold text-gray-700 border border-gray-200">Location</th>
            <th className="px-6 py-4 font-semibold text-gray-700 border border-gray-200">Price</th>
            <th className="px-6 py-4 font-semibold text-gray-700 border border-gray-200">Wait Time</th>
            <th className="px-6 py-4 font-semibold text-gray-700 border border-gray-200">Package Included</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-red-50">
            <td className="px-6 py-4 border border-gray-200 font-medium text-gray-800">{cityName}</td>
            <td className="px-6 py-4 border border-gray-200 font-bold text-red-600">£1,200 – £2,000</td>
            <td className="px-6 py-4 border border-gray-200 text-gray-600">2–6 weeks</td>
            <td className="px-6 py-4 border border-gray-200 text-gray-600">Treatment only</td>
          </tr>
          <tr className="bg-green-50">
            <td className="px-6 py-4 border border-gray-200 font-medium text-gray-800">🇹🇷 Turkey (Antalya)</td>
            <td className="px-6 py-4 border border-gray-200 font-bold text-green-600">£250 – £400</td>
            <td className="px-6 py-4 border border-gray-200 text-gray-600">Within days</td>
            <td className="px-6 py-4 border border-gray-200 text-gray-600">Treatment + Hotel + VIP Transfer</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm text-gray-500 mt-2 text-center">
        💰 Save up to 70% — even after flights and accommodation
      </p>
    </div>
  );
}
