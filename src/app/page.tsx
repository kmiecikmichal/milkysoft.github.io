import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-200/30 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-6xl sm:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 animate-gradient">
            MilkySoft
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences that blend creativity with functionality.
          </p>
          <div className="flex gap-6 justify-center">
            <a 
              href="#contact" 
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:from-violet-700 hover:to-fuchsia-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Get Started
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a 
              href="#about" 
              className="group px-8 py-4 rounded-full border-2 border-gray-200 hover:border-violet-500 transition-all duration-300 hover:scale-105 transform"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-200/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">
              Why Choose MilkySoft?
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              We combine cutting-edge technology with innovative design to create exceptional digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Modern Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                Built with the latest web technologies for optimal performance and user experience.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Scalable Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Our products grow with your business, ensuring long-term success.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated team of professionals ready to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-200/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">
              Get in Touch
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Ready to start your journey with us? Drop us a message and let's create something amazing together.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:from-violet-700 hover:to-fuchsia-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] transform"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-900 py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-medium mb-6 tracking-tight">MilkySoft</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Building the future of digital solutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-6 tracking-tight">Contact</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Email: contact@milkysoft.io
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-6 tracking-tight">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-lg font-light">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-lg font-light">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-lg font-light">GitHub</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600 font-light">
            <p>&copy; {new Date().getFullYear()} MilkySoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
