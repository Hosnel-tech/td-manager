export default function NavBar() {
  return (
    <div className="flex justify-between p-6">
      <h1 className="text-2xl font-semibold">TD Manager</h1>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Register
      </button>
    </div>
  );
}
