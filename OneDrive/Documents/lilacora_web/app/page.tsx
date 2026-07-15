export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7fc]">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-3xl font-bold text-purple-700">
          Lilacora 🎀
        </h1>

        <div className="space-x-8 font-medium text-gray-700">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Collections</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">

        <p className="text-purple-500 font-semibold uppercase tracking-[5px]">
          Handmade Bracelet Collection
        </p>

        <h1 className="mt-5 text-6xl font-bold text-gray-900">
          Lilacora
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Elegant handmade bracelets crafted with love,
          designed to make every moment special.
        </p>

        <p className="mt-6 text-purple-700 font-semibold text-xl">
          Crafted with ❤️ by
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Tejaswini Pandurang Khelkar
        </h2>

        <button className="mt-10 rounded-full bg-purple-600 px-8 py-4 text-white hover:bg-purple-700 transition">
          Shop Collection
        </button>

      </section>

    </main>
  );
}