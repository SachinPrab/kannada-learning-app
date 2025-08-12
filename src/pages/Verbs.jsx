import verbs from '../data/kannada_verbs.json';

function VerbsList() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 via-white to-pink-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white/80 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Verbs List</h1>
        <ul className="space-y-4">
          {verbs.map((verb) => (
            <li
              key={verb.id}
              className="flex flex-col md:flex-row md:items-center justify-between bg-purple-50 rounded-lg px-4 py-3 shadow"
            >
              <span className="font-semibold text-lg">{verb.english}</span>
              <span className="text-purple-900">{verb.kannada}</span>
              <span className="italic text-gray-600">{verb.transliteration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VerbsList;
