import React, { useState } from "react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    "home",
    "menu",
    "about",
    "gallery",
    "event",
    "review",
    "faq",
    "location",
    "contact",
  ];

  const menuItems = [
    {
      image: "gambar/singkong 1.png",
      name: "Singkong Goreng",
      price: "75 k",
      desc: "Singkong goreng (fried cassava) is a popular Indonesian snack made from cassava pieces deep-fried until golden and crispy, often served with cheese or spicy seasonings.",
    },
    {
      image: "gambar/whitecofee.png",
      name: "White Coffee",
      price: "60 k",
      desc: "White coffee is made from coffee beans roasted at a lower temperature, resulting in a lighter color and a milder, nuttier flavor. Often served with sweetened condensed milk.",
    },
    {
      image: "gambar/frenchfrice.png",
      name: "French fries",
      price: "65 k",
      desc: "French fries, also known as fries or frites, are long, thin strips of potato that have been deep-fried. They are a popular side dish or snack, often served hot and seasoned with salt.",
    },
    {
      image: "gambar/capuchino.jpeg",
      name: "Cappuccino",
      price: "55 k",
      desc: "Classic Italian coffee drink with espresso, steamed milk, and a thick layer of foam, dusted with cocoa powder.",
    },
    {
      image: "gambar/croisant.png",
      name: "Croissant",
      price: "40 k",
      desc: "Freshly baked croissant with a golden, flaky crust and buttery layers, perfect for pairing with your morning coffee.",
    },
    {
      image: "gambar/espresso 1.png",
      name: "Americano",
      price: "45 k",
      desc: "Espresso diluted with hot water, resulting in a lighter, smooth cup with a rich espresso aroma.",
    },
    {
      image: "gambar/brownies.png",
      name: "Brownies",
      price: "35 k",
      desc: "Homemade chocolate brownies, moist and rich, a perfect sweet treat for your coffee break.",
    },
    {
      image: "gambar/matchalatte.png",
      name: "Matcha Latte",
      price: "65 k",
      desc: "Creamy latte made with premium Japanese matcha powder and steamed milk, served hot or iced.",
    },
    {
      image: "gambar/cheesecake.png",
      name: "Cheesecake",
      price: "70 k",
      desc: "Creamy, smooth cheesecake with a buttery biscuit base, topped with fresh fruit or chocolate drizzle.",
    },
    {
      image: "gambar/blackcoffe.png",
      name: "Black Coffee",
      price: "50 k",
      desc: "Black coffee is a simple beverage made by brewing ground coffee beans with hot water, without adding milk or sugar. It has a rich, bold flavor and is often enjoyed for its pure coffee taste.",
    },
  ];

  // Navbar Component
  function Navbar({ links, mobileOpen, toggleMobile }) {
    return (
      <nav className="w-full bg-black/60 text-white fixed top-0 left-0 z-10 shadow-lg">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-2 px-4">
          <button
            onClick={toggleMobile}
            className="md:hidden flex flex-col gap-1 focus:outline-none"
            aria-label="Open Menu"
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
          <div className="hidden md:flex gap-2 md:gap-4">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="px-4 py-2 hover:bg-yellow-800 transition rounded font-semibold text-sm uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        {mobileOpen && (
          <div className="fixed inset-0 bg-black/90 z-20 flex flex-col items-center justify-center space-y-6 md:hidden">
            <div className="text-2xl font-bold mb-6">LOGO</div>
            {links.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="px-4 py-2 hover:bg-yellow-800 transition rounded font-semibold text-lg uppercase"
                onClick={toggleMobile}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    );
  }

  // MenuItem Component
  function MenuItem({ image, name, price, desc }) {
    return (
      <div className="bg-white/60 rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 shadow-lg hover:shadow-2xl transition duration-300">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 object-cover rounded shadow"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="text-black font-semibold">{name}</span>
            <span className="text-yellow-700 font-bold">{price}</span>
          </div>
          <p className="text-black text-sm">{desc}</p>
        </div>
      </div>
    );
  }

  // MenuList Component
  function MenuList({ items }) {
    return (
      <section id="menu" className="pt-20 pb-8 max-w-5xl mx-auto w-full px-2">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8 drop-shadow">
          Menu List
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </section>
    );
  }

  // Hero Component
  function Hero() {
    const galleryImages = [
      { src: "gambar/blackcoffe.png", alt: "Latte" },
      { src: "gambar/matchalatte.png", alt: "Black Coffee" },
      { src: "gambar/singkong 1.png", alt: "Singkong Goreng" },
    ];

    return (
      <section
        id="home"
        className="flex flex-col items-center pt-28 pb-10 min-h-[90vh] text-center"
      >
        <img
          src="gambar/logo.png"
          alt="Premium Coffee House"
          className="w-[400px] mb-4 animate-fade-in"
        />
        <h1
          className="text-white text-2xl md:text-3xl font-semibold drop-shadow mb-3 animate-fade-in"
          style={{ animationDelay: ".2s" }}
        >
          A Cozy Place to Enjoy Every Sip
        </h1>
        <a
          href="#menu"
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded shadow transition mb-8 animate-bounce"
        >
          visit us
        </a>
        <div className="flex flex-col md:flex-row gap-6 mb-10 justify-center items-center w-full px-4">
          {galleryImages.map(({ src, alt }, i) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="w-full md:w-1/5 h-40 object-cover rounded-lg shadow-lg hover:scale-110 transition duration-500 animate-fade-in"
              style={{ animationDelay: `${0.4 + i * 0.2}s` }}
            />
          ))}
        </div>
        <div
          className="w-full max-w-md bg-black/70 rounded-lg p-6 flex flex-col items-center animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <h2 className="text-white text-lg font-semibold mb-2">
            Get News and Updates
          </h2>
          <form
            className="flex flex-col sm:flex-row gap-3 w-full"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-3 py-2 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-yellow-600 transition"
              required
            />
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded font-semibold transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }

  // About Component
  function About() {
    return (
      <section id="about" className="pt-20 pb-8 max-w-5xl mx-auto w-full px-2">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-6 drop-shadow">
          About Premium Coffee House
        </h2>
        <p className="text-white text-center mb-6 max-w-2xl mx-auto">
          Premium Coffee House is dedicated to delivering an exceptional coffee
          experience by creating the best beans and a warm, inviting atmosphere
          for every customer. Our passion for coffee is reflected in every cup,
          crafted with care and expertise. Whether you're here for a quick
          pick-me-up or a relaxing break, we strive to make every visit
          memorable. Enjoy our renowned specialties and discover why our
          customers return again and again.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
          <img
            src="gambar/bgcafe.png"
            alt="Coffee House Interior"
            className="w-full max-w-3xl h-auto rounded-lg shadow-lg mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center mb-6">
          <div>
            <h3 className="text-yellow-300 text-lg font-semibold mb-2">
              Our Specialties
            </h3>
            <ul className="text-white list-disc list-inside">
              <li>Black Coffee</li>
              <li>White Coffee</li>
              <li>Singkong Goreng</li>
              <li>Croissant</li>
              <li>Cappuccino</li>
              <li>Americano</li>
              <li>Brownies</li>
              <li>Matcha Latte</li>
              <li>Cheesecake</li>
            </ul>
          </div>
          <div>
            <h3 className="text-yellow-300 text-lg font-semibold mb-2">
              Visit Us
            </h3>
            <p className="text-white text-sm mb-1">
              123 Coffee Street, Coffee City
            </p>
            <p className="text-white text-sm mb-1">Open daily: 7 AM - 9 PM</p>
            <p className="text-white text-sm mb-1">Contact: (123) 456-7890</p>
            <p className="text-white text-sm">info@premiumcoffeehouse.com</p>
          </div>
        </div>
      </section>
    );
  }

  // Gallery Component
  function Gallery() {
    const images = [
      "gambar/singkong 1.png",
      "gambar/capuchino.jpeg",
      "gambar/brownies.png",
      "gambar/blackcoffe.png",
      "gambar/frenchfrice.png",
      "gambar/matchalatte.png",
    ];
    return (
      <section id="gallery" className="pt-20 pb-8 max-w-5xl mx-auto w-full px-2">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8 drop-shadow">
          Gallery
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </section>
    );
  }

  // Event Component
  function Event() {
    return (
      <section id="event" className="pt-20 pb-8 max-w-5xl mx-auto w-full px-2">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8 drop-shadow">
          Upcoming Events
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white/60 rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-yellow-700 text-lg font-bold mb-2">
              Coffee Workshop
            </h3>
            <p className="text-gray-800 mb-2">
              Learn how to brew the perfect cup with our baristas. Free for all
              customers!
            </p>
            <span className="text-xs text-gray-600">22 June 2025, 10:00 AM</span>
          </div>
          <div className="flex-1 bg-white/60 rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-yellow-700 text-lg font-bold mb-2">
              Live Acoustic Night
            </h3>
            <p className="text-gray-800 mb-2">
              Enjoy live music performances every Saturday night in our cozy
              lounge.
            </p>
            <span className="text-xs text-gray-600">Every Saturday, 7:00 PM</span>
          </div>
        </div>
      </section>
    );
  }

  // Review Component
  function Review() {
    const reviews = [
      {
        text: "Best coffee in town! The atmosphere is relaxing and the staff are super friendly.",
        author: "Andi, Jakarta",
      },
      {
        text: "Love the snacks and the cozy interior. Will definitely come back!",
        author: "Rina, Bandung",
      },
      {
        text: "Their matcha latte is a must-try, and the cheesecake is perfect.",
        author: "Budi, Surabaya",
      },
    ];
    return (
      <section id="review" className="pt-20 pb-8 max-w-5xl mx-auto w-full px-2">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8 drop-shadow">
          Customer Reviews
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(({ text, author }, i) => (
            <div
              key={i}
              className="bg-white/70 rounded-lg p-5 shadow-lg hover:scale-105 transition duration-300"
            >
              <p className="text-gray-800 italic mb-2">{`"${text}"`}</p>
              <span className="text-yellow-700 font-semibold">– {author}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // FAQ Component
  function FAQ() {
    const faqs = [
      {
        question: "Do you offer vegan options?",
        answer: "Yes, we have plant-based milk and vegan snacks available.",
      },
      {
        question: "Can I reserve a table?",
        answer: "Absolutely! Please call us in advance to reserve your spot.",
      },
      {
        question: "Is Wi-Fi available?",
        answer: "Yes, free Wi-Fi is available for all customers.",
      },
    ];
    return (
      <section id="faq" className="pt-20 pb-8 max-w-5xl mx-auto w-full px-2">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-6 drop-shadow">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map(({ question, answer }, i) => (
            <div key={i} className="bg-white/70 rounded-lg p-4 shadow">
              <h3 className="text-yellow-700 font-semibold mb-1">{question}</h3>
              <p className="text-gray-800 text-sm">{answer}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Location Component
  function Location() {
    return (
      <section id="location" className="pt-20 pb-8 max-w-5xl mx-auto w-full px-2">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-6 drop-shadow">
          Our Location
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253615.8758253612!2d106.57584768671877!3d-6.678103499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c548577cd41d%3A0x6f0857d2af195a28!2sPadre%20-%20Italian%20Cuisine%20in%20Bogor!5e0!3m2!1sen!2sid!4v1750249234520!5m2!1sen!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location"
            ></iframe>
          </div>
          <div className="flex-1 text-white">
            <p className="mb-2">
              <span className="font-bold">Address:</span> 123 Coffee Street,
              Coffee City
            </p>
            <p className="mb-2">
              <span className="font-bold">Open:</span> 7 AM – 9 PM
            </p>
            <p className="mb-2">
              <span className="font-bold">Phone:</span> (123) 456-7890
            </p>
            <p>
              <span className="font-bold">Email:</span>{" "}
              info@premiumcoffeehouse.com
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Contact Component
  function Contact() {
    return (
      <section id="contact" className="pt-24 max-w-xl mx-auto mb-8">
        <h2 className="text-white text-2xl text-center md:text-3xl font-bold mb-4 drop-shadow">
          Contact
        </h2>
        <p className="text-white text-2xl md:text-2xl  mb-3 drop-shadow">
          We'd love to hear from you! Reach out to us for any questions,
          feedback, or reservations.
        </p>
        <form
          className="bg-white/90 rounded-lg p-6 shadow-lg flex flex-col gap-4 items-stretch max-w-lg mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for your message!");
          }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="flex-1 px-4 py-2 rounded border focus:ring-2 focus:ring-yellow-600 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="flex-1 px-4 py-2 rounded border focus:ring-2 focus:ring-yellow-600 transition"
            />
          </div>
          <textarea
            name="message"
            placeholder="Type your message here..."
            rows="4"
            required
            className="px-4 py-2 rounded border focus:ring-2 focus:ring-yellow-600 transition"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded shadow transition w-full md:w-auto self-center"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }

  // Footer Component
  function Footer() {
    return (
      <footer className="bg-black/70 text-yellow-100 text-center py-3 text-xs mt-auto">
        Premium Coffee House | (+62) 123 - 4567 - 8901 | @PremiumCoffeeHouse.com
      </footer>
    );
  }

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: "url('gambar/latar 1.png')" }}
    >
      <Navbar
        links={navLinks}
        mobileOpen={mobileMenuOpen}
        toggleMobile={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      <main className="flex-grow">
        <Hero />
        <MenuList items={menuItems} />
        <About />
        <Gallery />
        <Event />
        <Review />
        <FAQ />
        <Location />
        <Contact />
      </main>
      <Footer />

      {/* Animasi fade-in */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
      `}</style>
    </div>
  );
}
