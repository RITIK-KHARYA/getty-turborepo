import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#020817] to-[#031c52] text-white py-12 px-6 overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-800/20 to-transparent"></div>

      {/* Footer Content */}
      <div className="relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Logo and Tagline */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-8 w-8"
                >
                  <path d="M12 5l8 8-8 8-8-8 8-8z" />
                </svg>
              </div>
              <p className="text-sm">The internet is your canvas</p>
            </div>

            {/* Resources */}
            <div className="md:col-span-1">
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Academy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Desktop App
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Brand
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Wallpapers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div className="md:col-span-1">
              <h3 className="font-medium mb-4">Tools</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Figma to Framer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    HTML to Framer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Developers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Startup kit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    SaaS kit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="md:col-span-1">
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Compare */}
            <div className="md:col-span-1">
              <h3 className="font-medium mb-4">Compare</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Webflow
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Wordpress
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contentful
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Unbounce
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Figma
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Ceros
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="md:col-span-1">
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Abuse
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Charges
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-end gap-6 mt-12">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
