export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold">Welcome to Triple A</h1>
          <p className="mt-4 text-lg">
            Ambassadors Align - Building a Better Future Together
          </p>
        </div>
      </section>
            {/* About Us Section */}
            <section id="about" className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary">About Us</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Triple A is a school association dedicated to aligning ambassadors toward a shared vision of progress, leadership, and collaboration.
          </p>
        </div>
      </section>
            {/* Membership Section */}
            <section id="membership" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary">Membership</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Become a part of Triple A and connect with like-minded individuals passionate about leadership and change.
          </p>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-purple-700 transition">
            Join Now
          </button>
        </div>
      </section>
            {/* News Section */}
            <section id="news" className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary">Latest News</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Stay updated with the latest happenings, events, and announcements from Triple A.
          </p>

          {/* News Items */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-primary">Upcoming Event</h3>
              <p className="mt-2 text-gray-700">Join us for our leadership summit next month!</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-primary">New Partnership</h3>
              <p className="mt-2 text-gray-700">Triple A collaborates with top schools for new programs.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-primary">Volunteer Opportunities</h3>
              <p className="mt-2 text-gray-700">Sign up to be part of our next community project.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
