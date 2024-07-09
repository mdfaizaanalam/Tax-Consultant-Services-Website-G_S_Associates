import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.css';


const App = () => {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwEEjl730E7NGo9pNWPL33bmoifxR6UzBvXHr3EVbBdyIz1HSKATGAoVZzaD21awxlL/exec";
    const form = document.forms["submit-to-google-sheet"];
    const msg = document.getElementById("msg");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            msg.innerHTML = "Message Sent Successfully";
            setTimeout(() => {
              msg.innerHTML = "";
            }, 3000);
            form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      });
    }

    const handleNavigationClick = (event) => {
      event.preventDefault();
      const links = document.querySelectorAll("nav ul li");
      links.forEach((link) => {
        link.classList.remove("active");
      });

      event.target.parentNode.classList.add("active");
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    };

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavigationClick);
    });
  }, []);

  const services = [
    {
      img: "/images/income-tax.jpg",
      alt: "Tax Preparation and Planning",
      title: "Tax Preparation and Planning",
      description: "Maximize your returns by ensuring compliance with tax regulations and optimize financial planning.",
      link: "https://en.wikipedia.org/wiki/Income_tax_in_India"
    },
    {
      img: "/images/Accounting.jpg",
      alt: "Bookkeeping and Financial Statements",
      title: "Bookkeeping and Financial Statements",
      description: "Maintain accurate records and generate financial statements for informed decision-making.",
      link: "https://en.wikipedia.org/wiki/Bookkeeping"
    },
    {
      img: "/images/PF.jpg",
      alt: "Payroll Management",
      title: "Payroll Management",
      description: "Efficiently managed employee payroll, taxes, and deductions for hassle-free operations.",
      link: "https://en.wikipedia.org/wiki/Payroll"
    },
    {
      img: "/images/GST.jpg",
      alt: "GST Management",
      title: "GST Management",
      description: "Streamline Your Business with Proactive GST Management Solutions.",
      link: "https://en.wikipedia.org/wiki/Goods_and_Services_Tax_(India)"
    },
    {
      img: "/images/TDS.jpg",
      alt: "TDS / TCS Return's",
      title: "TDS / TCS Return's",
      description: "Simplify TDS/TCS Return Filing with Our Comprehensive Solutions.",
      link: "https://en.wikipedia.org/wiki/Tax_deduction_at_source"
    },
    {
      img: "/images/service6.jpg",
      alt: "Accounting Management",
      title: "Accounting Management",
      description: "Elevate Your Financial Performance with Streamlined Accounting Management Solutions.",
      link: "https://en.wikipedia.org/wiki/Management_accounting"
    }
  ];


  return (
    <div>
      {/* Nav Bar */}
      <motion.div
        id="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="containers">
          <nav>
            <h1 className="logo">G S Associates</h1>
            <ul id="sidemenu">
              <li>
                <a href="#home" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#our-works">How It Works</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <i
                className="fa-solid fa-xmark"
                onClick={() =>
                  (document.getElementById("sidemenu").style.right = "-200px")
                }
              ></i>
            </ul>
            <i
              className="fa-solid fa-bars"
              onClick={() =>
                (document.getElementById("sidemenu").style.right = "0")
              }
            ></i>
          </nav>
        </div>
      </motion.div>

      {/* Header Text */}
      <motion.div
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div className="banner">
          <img src="/images/introduction.jpg" alt="Wallpaper" />
        </div>
        <div className="introduction">
          <p>
            Introducing G S Associates, a leading accounting firm based in Patna
            Division, BR. With a wealth of experience in the industry, we
            provide comprehensive accounting services tailored to meet the
            unique needs of businesses. Our team of highly skilled professionals
            is dedicated to delivering accurate financial insights, maximizing
            profitability, and ensuring compliance with regulations. Trust G S
            Associates to handle your accounting needs efficiently and
            effectively, allowing you to focus on what you do best – growing
            your business.
            <br />
            <br />
            Contact us today for personalized solutions that drive success.
          </p>
        </div>
      </motion.div>

      {/* About */}
      <div className="line1"></div>
      <motion.div
        id="about"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-us">
          <h2>About Us..</h2>
          <p>
            Welcome to G S Associates, your trusted partner in accounting
            services. With our extensive experience and expertise in the field,
            we are committed to providing top-notch financial solutions to
            businesses in the Patna Division, BR area.
            <br />
            <br />
            At G S Associates, we understand the challenges that businesses face
            when it comes to managing their finances. That's why we offer a
            comprehensive range of accounting services tailored to meet the
            unique needs of each client. Our team of skilled professionals is
            dedicated to delivering accurate, timely, and reliable financial
            information, allowing our clients to make informed decisions and
            achieve their financial goals. Partner with us today and experience
            the difference that our expertise can make for your business..
          </p>
        </div>
        <div className="about-img">
          <img src="/images/about.jpg" alt="About US" />
        </div>
      </motion.div>

      {/* Testimonial */}
      <motion.div
        className="testimonial"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          "I am extremely grateful for the exceptional accounting services
          provided by G S Associates! Their attention to detail and
          professionalism have been instrumental in managing my business
          finances. Highly recommended!"
        </p>
        <span>- John Doe </span>
      </motion.div>

       {/* Services */}
       <div class="line2"></div>
      <motion.div
        id="services"
        initial={{ x: -100, opacity: 0 }}
        animate={{ opacity: 1, x: -10, y: 30, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
      >

        <div class="container">
          <div class="sub-title">
            <h2>Accounting Services</h2>
            <div class="services-list">
              {services.map((service, index) => (
                <motion.div
                  className="card"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={service.img} alt={service.alt} />
                  <div className="layer">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <a href={service.link}>
                      <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* How It Works */}
      <div className="line3"></div>
      <div id="our-works">
        <div className="container">
          <div className="sub-title">
            <h2>How It Works</h2>
            <div className="work-list">
              {["Consultation", "Strategize", "Take Action"].map(
                (work, index) => (
                  <motion.div
                    className="work"
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: 5,
                      y: 10,
                      scale: 1,
                      rotate: 0 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <h2>{`0${index + 1}`}</h2>
                    <h3>{work}</h3>
                    <p>
                      {work === "Consultation"
                        ? "We offer personalized consultations to thoroughly understand your financial situation and provide expert guidance on the best accounting and tax solutions for your needs."
                        : work === "Strategize"
                        ? "We develop customized tax and accounting strategies, based on a thorough analysis of your situation, to optimize your financial situation, ensure compliance and maximize savings."
                        : "We implement tailored accounting and tax solutions, including setting up new processes and using the latest software to efficiently manage your finances and ensure compliance with regulations."}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="btn">
        <motion.a
          href="https://eportal.incometax.gov.in/iec/foservices/#/TaxCalc/calculator"
          className="btn btn2"
          whileHover={{ scale: 1.1 }}
        >
          Income & Tax Calculator
        </motion.a>
      </div>

      {/* Contact */}
      <div className="line4"></div>
      <motion.div
        id="contact"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="content">
          <h2>Get in touch with Us.</h2>
          <div className="row">
            <div className="contact-left">
              <h3 className="title">Contact Us Now..</h3>
              <p>
                Fill out the form below to get in touch with our team. We are
                here to assist you with any accounting inquiries or services you
                may need.
              </p>
              <p>
                <i className="fa-solid fa-paper-plane"></i> sarfraz813@gmail.com
              </p>
              <p>
                <i className="fa-sharp fa-solid fa-phone"></i> 8539892793
              </p>
              <p>
                <i className="fa-solid fa-map-location-dot"></i> Office No. -
                307, Aashiya Palaza, Budh Marg, Kali Asthan, Patna, Bihar 800001
              </p>
              <div className="social-icons">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZNwlJhMMxtwMqJlXNqQLKgxhXfrkDTSMJDjnhMTDJjQCXxZLJlxntqjkNRpVbpSbHJCXx">
                  <i className="fa-regular fa-envelope"></i>
                </a>
                <a href="https://www.facebook.com/share/89N2doGLy2GKGDLF/?mibextid=qi2Omg">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/_sarfraz_ahmad?utm_source=qr&igsh=MW0yZXZ3ZXFiMWZxOQ==">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="text"
                  name="Number"
                  placeholder="Your Mobile Number"
                  required
                />
                <textarea
                  name="Message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
                <button type="submit" className="btn btn2">
                  Submit
                </button>
              </form>
              <span id="msg"></span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="footer">
        <p>
          Copyright © 2024 G S Associates.
          <br />
          <span>All rights reserved..</span>
        </p>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
