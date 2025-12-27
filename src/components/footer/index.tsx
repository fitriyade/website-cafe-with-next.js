import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-purple-500 to-pink-500 text-white pt-10 pb-5 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2">
            <i className="bx bx-phone"></i> +62 812-3456-7890
          </p>
          <p className="mb-2">
            <i className="bx bx-envelope"></i> happysip.cafe@gmail.com
          </p>
          <p>
            <i className="bx bx-map"></i> Jalan Mango No. 21, Jakarta
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover-footer">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover-footer">
                Menu
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover-footer">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover-footer">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover-footer">
              <FaFacebook />
            </a>
            <a href="#" className="hover-footer">
              <FaTiktok />
            </a>
            <a href="#" className="hover-footer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/30 mt-4 pt-6 text-center text-sm">
        © 2025 HappySip. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
