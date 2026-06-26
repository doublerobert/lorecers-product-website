import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import styles from "~/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className="shrink-0">
      <div className={styles.gridLayout}>
        <section>
          <img
            src="./assets/icons/logo.svg"
            alt="Lorecers logo image"
            className="min-w-35.5"
          />
          <ul className="text-muted text-lg">
            <li className="text-text">About us</li>
            <li>Conditions</li>
            <li>Careers</li>
            <li>Returns & Refunds</li>
            <li>Cookie guidelines</li>
          </ul>
        </section>
        <section>
          <h2 className="text-text text-2xl font-bold">Customer service</h2>
          <ul className="text-muted text-lg">
            <li>FAQ</li>
            <li>Contact</li>
            <li>Privacy policy</li>
            <li>Delivery information</li>
          </ul>
        </section>
        <section>
          <h2 className="text-text text-2xl font-bold">Contact us</h2>
          <ul className="text-muted text-lg">
            <li>Do you have any questions or suggestions?</li>
            <li>
              <a href="" className="text-text underline hover:text-black">
                ourservices@templatesjungle.com
              </a>
            </li>
            <li>Do you need assistance? Give us a call.</li>
            <li className="font-bold">+57 444 11 00 35</li>
          </ul>
        </section>
        <section className="">
          <h2 className="text-text text-2xl font-bold">Our socials</h2>
          <p className=" text-wrap text-lg text-muted">
            Follow us on all our social media handles
          </p>
          <div className="flex text-accent-dark gap-2 h-6">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </section>
      </div>
      <div className="flex justify-center items-center text-xl font-display text-white bg-accent-dark p-2">
        <p>© Copyrights 2025 Florecers. All Rights Reserved</p>
      </div>
    </footer>
  );
}
