import Vegetables from '../data/kannada_vegetables.json';

function VegetablesList() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 via-white to-pink-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white/80 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Vegetables List</h1>
        <ul className="space-y-4">
          {Vegetables.map((vegetable) => (
            <li
              key={vegetable.id}
              className="flex flex-col md:flex-row md:items-center justify-between bg-green-50 rounded-lg px-4 py-3 shadow"
            >
              <span className="font-semibold text-lg">{vegetable.english}</span>
              <span className="text-green-900">{vegetable.kannada}</span>
              <span className="italic text-gray-600">{vegetable.transliteration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VegetablesList;
