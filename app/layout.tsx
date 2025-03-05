import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <nav className="bg-primary text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Triple A</h1>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#membership" className="hover:underline">Membership</a></li>
              <li><a href="#news" className="hover:underline">News</a></li>
              <li><a href="#directives" className="hover:underline">Directives</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </nav>

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
