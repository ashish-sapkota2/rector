import { FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900  overflow-hidden ">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Contact Info */}
        <div>
          <img src="/logo4.png" alt="Company Logo" className="w-32 mb-4" />
          <p className="font-semibold">Shankhamul, Kathmandu</p>
          <p className="flex items-center">
            <FaPhone size={20} className="mr-2" /> (+977) 9804750584
          </p>
          <p className="flex items-center">
            <CiMail size={20} className="mr-2" />
            contact.rectoreng@gmail.com
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61575217594162"
              className="text-gray-700 hover:text-gray-900"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/rectoreng/ "
              className="text-gray-700 hover:text-gray-900"
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
              <Link href="/aboutus" className="hover:text-gray-600">
                About Us
              </Link>
            </li>
            {/* <li>
              <Link href="/blogs" className="hover:text-gray-600">Blogs</Link>
            </li> */}
            <li>
              <Link href="/contactus" className="hover:text-gray-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        {/* Services */}
        <div>
          <h4 className="font-bold text-lg mb-4 mt-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services#product-design"
                className="hover:text-gray-600"
              >
                Product Design
              </Link>
            </li>
            <li>
              <Link href="/services#ux-design" className="hover:text-gray-600">
                UX Design
              </Link>
            </li>
            <li>
              <Link
                href="/services#web-development"
                className="hover:text-gray-600"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                href="/services#digital-marketing"
                className="hover:text-gray-600"
              >
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link
                href="/services#app-development"
                className="hover:text-gray-600"
              >
                App Development
              </Link>
            </li>
            <li>
              <Link
                href="/services#quality-assurance"
                className="hover:text-gray-600"
              >
                Quality Assurance
              </Link>
            </li>
          </ul>
        </div>

        {/* Ready to Get Started */}
        <div>
          <h4 className="font-bold text-lg mb-4 mt-4">Ready to get started?</h4>
          <Link href="/contactus">
            <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-white hover:text-blue-600 transition-all hover:cursor-pointer">
              Innovate With Us →
            </button>
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 mt-6 bg-gray-900 text-white">
        <p>
          &copy; 2025 Rector Engineering Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
}
