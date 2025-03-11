export default function Home() {
  return (
    <main className="bg-[#37145f] pb-32">
      {/* Hero Section */}
      <header className="text-center pt-40 pb-20 bg-[#37145f] text-white">
        <h1 className="text-5xl font-extrabold tracking-wider">
          Welcome to <span className="text-[#F5F5F5]">Triple A</span>
        </h1>
        <p className="text-xl text-gray-300 mt-4">
          Ambassadors Align - Building a Better Future Together
        </p>
      </header>

      {/* Content Sections inside Dark Purple Background */}
      <div className="container mx-auto px-4 md:px-16">
        {/* About Us Section */}
        <section id="about" className="text-center py-20 bg-white text-gray-900 rounded-lg shadow-xl mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-[#180033]">About Us</h2>
          <p className="text-lg text-gray-700 mt-4 mx-auto max-w-3xl">
            Triple A is a school association dedicated to aligning ambassadors toward a shared vision of progress, leadership, and collaboration.
          </p>
        </section>

        {/* Membership Section */}
        <section id="membership" className="text-center py-20 bg-white text-gray-900 rounded-lg shadow-xl mx-auto max-w-5xl mt-10">
          <h2 className="text-4xl font-bold text-[#37145f]">Membership</h2>
          <p className="text-lg text-gray-700 mt-4 mx-auto max-w-3xl">
            Become a part of Triple A and connect with like-minded individuals passionate about leadership and change.
          </p>
          <a href="#membership" className="mt-6 inline-block bg-[#180033] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#220044] transition">
            Join Now
          </a>
        </section>

        {/* News Section */}
        <section id="news" className="text-center py-24 bg-white text-gray-900 rounded-lg shadow-xl mx-auto max-w-5xl mt-10">
          <h2 className="text-4xl font-bold text-[#37145f] mb-10">Latest News</h2>
          <div className="grid grid-cols-1 gap-12 mt-10">
            <div className="p-8 bg-gray-100 rounded-3xl shadow-lg mx-6">
              <h3 className="text-2xl font-bold text-[#180033]">Upcoming Event</h3>
              <p className="text-gray-700 mt-4">Join us for our leadership summit next month!</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-3xl shadow-lg mx-6">
              <h3 className="text-2xl font-bold text-[#180033]">New Partnership</h3>
              <p className="text-gray-700 mt-4">Triple A collaborates with top schools for new programs.</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-3xl shadow-lg mx-6">
              <h3 className="text-2xl font-bold text-[#180033]">Volunteer Opportunities</h3>
              <p className="text-gray-700 mt-4">Sign up to be part of our next community project.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
