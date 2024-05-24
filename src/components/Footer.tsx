import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-fuchsia-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <img
              src="/public/img/Phantom 4 pro.webp"
              alt="Logo"
              className="w-16 mb-4"
            />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div className="mb-8">
          <div className="border-t-2 border-b-2 border-gray-400">
            <div className="grid grid-cols-6 gap-8 border-b-2 border-gray-400 pt-6 pb-6 text-xl">
              <h4 className="font-medium">Useful Link</h4>
              <h4 className="font-medium">Service</h4>
              <h4 className="font-medium col-span-2">Contact Us</h4>
              <div className="col-span-2">
                <h4 className="font-medium">^</h4>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-8 pt-6 pb-6">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Pricing
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white">
                    Drones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Discounts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Drones Discount
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Information
                  </a>
                </li>
              </ul>
              <div className=" col-span-2 space-y-3">
                <div className="bg-gradient-to-r from-gray-700 to-gray-400 rounded-2xl p-[1px]">
                  <p className="text-white p-4 bg-fuchsia-950 rounded-2xl">
                    Jamma Masjid Galli Ward No2
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-700 to-gray-400 rounded-2xl p-[1px]">
                  <p className="text-white p-4 bg-fuchsia-950 rounded-2xl">
                    +923013781848 <br /> Profilebilal1@Gmail.com
                  </p>
                </div>
              </div>
              <div className="relative w-full mt-4 col-span-2">
                <img
                  src="/public/img/capadrone.webp"
                  alt="Drone"
                  className="w-full h-56 object-cover rounded-3xl"
                />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black py-1 px-4 rounded">
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">&copy; Copyright</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
