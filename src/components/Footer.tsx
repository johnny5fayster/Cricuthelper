import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✂️</span>
              <span className="font-bold text-xl text-gray-800">
                Cricut<span className="text-pink-500">Helper</span>
              </span>
            </div>
            <p className="text-gray-600 max-w-md">
              Free troubleshooting guides and material settings for Cricut crafters. 
              Get perfect cuts every time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/troubleshoot" className="text-gray-600 hover:text-pink-500">Troubleshoot</Link></li>
              <li><Link href="/materials" className="text-gray-600 hover:text-pink-500">Material Settings</Link></li>
              <li><Link href="/calculator" className="text-gray-600 hover:text-pink-500">Cut Calculator</Link></li>
              <li><Link href="/guides" className="text-gray-600 hover:text-pink-500">Guides</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-pink-500">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-pink-500">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-pink-500">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} CricutHelper. Not affiliated with Cricut, Inc.</p>
          <p className="mt-1">Made with ❤️ for the crafting community</p>
        </div>
      </div>
    </footer>
  );
}
