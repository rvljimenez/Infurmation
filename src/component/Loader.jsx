function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex gap-2 text-4xl animate-bounce">🐾</div>
      <p className="text-gray-600 font-medium">Fetching treats...</p>
    </div>
  );
}

export default Loader;
