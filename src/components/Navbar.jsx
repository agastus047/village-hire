export default function Navbar() {
  return (
    <div>
      <header style={{ backgroundColor: 'rgba(139, 178, 178, 1)', padding: '1rem' }} className="text-center">
        <h2 className="text-5xl font-bold">VillageHire</h2> {/* Adjusted font size from text-lg to text-2xl */}
        <nav className="flex space-x-4">
          <a href="/" className="text-gray-800 font-semibold hover:text-blue-600">Home</a>
          <a href="/jobs" className="text-gray-800 hover:text-blue-600">Available Jobs</a>
          <a href="/locality" className="text-gray-800 hover:text-blue-600">Locality</a>
          <a href="/profile" className="text-gray-800 hover:text-blue-600">Profile</a>
        </nav>
      </header>
    </div>
  );
}