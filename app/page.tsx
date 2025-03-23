import { IoFishOutline, IoSunnyOutline } from "react-icons/io5";
import { MdCardTravel } from "react-icons/md";

export default function Main() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-teal-500">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Bocas Explorer</div>
          <div className="hidden md:flex space-x-6">
            {[
              "Home",
              "About",
              "Destinations",
              "Activities",
              "Accommodations",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-yellow-300 transition"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Paradise in Bocas del Toro
          </h1>
          <p className="text-xl text-white max-w-2xl mb-10">
            Experience the stunning beaches, vibrant coral reefs, and lush
            rainforests of Panama&apos;s Caribbean archipelago
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105">
            Plan Your Adventure
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Why Visit Bocas del Toro?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pristine Beaches",
                description:
                  "Relax on white sand beaches surrounded by crystal clear turquoise waters",
                icon: <IoSunnyOutline size={40} />,
              },
              {
                title: "Rich Marine Life",
                description:
                  "Snorkel or dive among vibrant coral reefs and encounter diverse marine species",
                icon: <IoFishOutline size={40} />,
              },
              {
                title: "Adventure Activities",
                description:
                  "Experience the unique blend of Caribbean, indigenous, and Latin American cultures",
                icon: <MdCardTravel size={40} />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-xl p-8 shadow-md hover:shadow-lg transition"
              >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-blue-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Popular Destinations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Isla Colón",
                description:
                  "The main island and hub of activity with beautiful beaches and vibrant nightlife",
                image: "/isla-colon.webp",
              },
              {
                name: "Red Frog Beach",
                description:
                  "Famous for its stunning coastline and tiny red poison dart frogs",
                image: "/red-frog-beach.webp",
              },
              {
                name: "Starfish Beach",
                description:
                  "Shallow crystal waters home to numerous large starfish",
                image: "/starfish-beach.webp",
              },
              {
                name: "Isla Bastimentos",
                description:
                  "Wild and beautiful island with national marine park protection",
                image: "/isla-bastimentos.webp",
              },
              {
                name: "Bocas Town",
                description:
                  "Colorful Caribbean architecture and the archipelago&apos;s main town",
                image: "/bocas-town.webp",
              },
              {
                name: "Dolphin Bay",
                description:
                  "Natural habitat where bottlenose dolphins can frequently be spotted",
                image: "/dolphin-bay.webp",
              },
            ].map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 font-medium hover:text-blue-700 transition"
                  >
                    Explore &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Travel Tips & Exclusive Offers
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-blue-100">
            Subscribe to our newsletter and be the first to know about special
            deals and seasonal activities in Bocas del Toro
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 text-gray-800"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full shadow-md transform transition hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            What Travelers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Bocas del Toro was the highlight of our Panama trip. The beaches are incredible and the locals are so welcoming!",
                author: "Sarah L.",
                location: "United States",
              },
              {
                quote:
                  "I came for the diving and stayed for the vibe. This place has a special energy you won&apos;t find anywhere else.",
                author: "Miguel R.",
                location: "Spain",
              },
              {
                quote:
                  "From jungle tours to beach hopping, there&apos;s no shortage of adventures. I&apos;ll definitely be coming back!",
                author: "Emma T.",
                location: "Canada",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-8 shadow-md">
                <div className="text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="font-medium text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-400 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Bocas del Toro?
          </h2>
          <p className="max-w-2xl mx-auto mb-10">
            Let us help you plan the perfect getaway to this tropical paradise.
            Our local experts will create a customized itinerary based on your
            interests.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105">
              Browse Packages
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Bocas Explorer</h3>
              <p className="text-blue-300 mb-4">
                Your guide to the beautiful archipelago of Bocas del Toro,
                Panama.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "youtube"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="text-blue-300 hover:text-white transition"
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="w-6 h-6 bg-blue-300 rounded-full"></div>
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Destinations</h3>
              <ul className="space-y-2">
                {[
                  "Isla Colón",
                  "Bocas Town",
                  "Isla Bastimentos",
                  "Red Frog Beach",
                  "Starfish Beach",
                  "Dolphin Bay",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-blue-300 hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Activities</h3>
              <ul className="space-y-2">
                {[
                  "Snorkeling & Diving",
                  "Island Hopping",
                  "Surfing",
                  "Wildlife Tours",
                  "Chocolate Tours",
                  "Nightlife",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-blue-300 hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-blue-300">
                <li>Email: info@bocasexplorer.com</li>
                <li>Phone: +507 123 4567</li>
                <li>Address: Main Street, Bocas Town, Isla Colón, Panama</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center text-blue-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Bocas Explorer. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
