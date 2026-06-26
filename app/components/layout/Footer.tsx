import { ZapIcon } from "lucide-react";
import styles from "~/styles/layout/utils.module.css"

export default function Footer() {
  return (
    <footer className="">
      <div className={styles.layout}>
        <section>
          <img
            src="./assets/icons/logo.svg"
            alt="Lorecers logo image"
            className="min-w-35.5"
          />
          <ul>
            <li>About us</li>
            <li>Conditions</li>
            <li>Careers</li>
            <li>Returns & Refunds</li>
            <li>Cookie guidelines</li>
          </ul>
        </section>
        <section>
          <h1 className="text-accent-dark text-2xl font-bold">Customer service</h1>
          <ul>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Privacy policy</li>
            <li>Delivery information</li>
          </ul>
        </section>
        <section>
          <h1>Contact us</h1>
          <ul>
            <li>Do you have any questions or suggestions?</li>
            <li>ourservices@templatesjungle.com</li>
            <li>Do you need assistance? Give us a call.</li>
            <li>+57 444 11 00 35</li>
          </ul>
        </section>
        <section>
          <h1>Our socials</h1>
          <p>Follow us on all our social media handles</p>
          <div className="flex">
            <ZapIcon />
            <ZapIcon />
            <ZapIcon />
            <ZapIcon />
          </div>
        </section>
      </div>
      <div className="flex justify-center items-center text-xl font-display text-white bg-accent-dark p-2">
        <p>© Copyrights 2025 Florecers. All Rights Reserved</p>
      </div>
    </footer>
  );
}
