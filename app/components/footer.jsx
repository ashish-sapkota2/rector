import { FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2b007b] to-[#0065a8] text-white overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12">
        {/* Logo & Contact Info */}
        <div>
          <img src="/logoneww.png" alt="Company Logo" className="w-40 mb-5" />
          <p className="font-semibold">Shankhamul, Kathmandu</p>
          <p className="flex items-center mt-2">
            <FaPhone size={20} className="mr-2" /> (+977) 9804750584
          </p>
          <p className="flex items-center mt-2">
            <CiMail size={20} className="mr-2" />
            contact.rectoreng@gmail.com
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61575217594162"
              className="text-white hover:text-gray-200"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/rectoreng/"
              className="text-white hover:text-gray-200"
            >
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-lg mb-4 mt-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/aboutus" className="hover:text-gray-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="hover:text-gray-200">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-gray-200">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-lg mb-4 mt-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/services#product-design" className="hover:text-gray-200">
                Product Design
              </Link>
            </li>
            <li>
              <Link href="/services#ux-design" className="hover:text-gray-200">
                UX Design
              </Link>
            </li>
            <li>
              <Link href="/services#web-development" className="hover:text-gray-200">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services#digital-marketing" className="hover:text-gray-200">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/services#app-development" className="hover:text-gray-200">
                App Development
              </Link>
            </li>
            <li>
              <Link href="/services#quality-assurance" className="hover:text-gray-200">
                Quality Assurance
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div>
          <h4 className="font-bold text-lg mb-4 mt-4">Ready to get started?</h4>
          <Link href="/contactus">
            <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all hover:cursor-pointer">
              Innovate With Us →
            </button>
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 mt-6 bg-gray-900 text-white">
        <p>&copy; 2025 RectorEng Pvt. Ltd.</p>
      </div>
    </footer>
  );
}
