import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Arrow from "../assets/Icons/arrowDown.png";
import Photo from "../assets/Images/AproposImg.jpeg";
import GithubIcon from "../assets/Icons/GithubIcon.png";
import LinkedinIcon from "../assets/Icons/LinkedinIcon.png";
import FacebookIcon from "../assets/Icons/FacebookIcon.png";
import InstaIcon from "../assets/Icons/InstaIcon.png";
import "../style/Home.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export default function Home() {
  const form = useRef();
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const toastifySuccess = () => {
    toast.success("Le message à bien été envoyé à Etienne");
  };
  const toastifyError = () => {
    toast.error("Veuillez remplir tous les champs");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        e.target.reset();
        toastifySuccess();
      },
      (error) => {
        toastifyError(error);
      }
    );
  };

  const titleRef = useRef();
  const onLoad = () => {
    gsap
      .timeline()
      .fromTo(
        ".letter",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.12,
          delay: 0.9,
        }
      )

      .to(".letter1", {
        animation: "linear, ease",
        color: "#F47121",
        delay: 0.3,
      })
      .to(".letter1", {
        margin: "0 0.7vw",
        delay: 0.4,
        duration: 0.5,
      })
      .to(".h1-header", {
        x: 0,
        opacity: 1,
        delay: 0.4,
        duration: 0.8,
      })
      .to(".letter1", {
        textDecoration: "none",
        margin: "0 0.2vw",
        opacity: 1,
        animation: "linear, ease-in",
        color: "#F47121",
        duration: 0.6,
        delay: 0.5,
      });
  };
  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 1,
        x: -10000,
      },
      {
        x: 0,
        delay: delay || 0.15,
        duration: duration || 1.5,
        scrollTrigger: {
          trigger: elem,
        },
      }
    );
  };
  const slideInRight = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 1,
        x: 10000,
      },
      {
        x: 0,
        delay: delay || 0.15,
        duration: duration || 1.5,
        scrollTrigger: {
          trigger: elem,
        },
      }
    );
  };

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    slideInLeft("#apropos-container");
  }, []);

  useEffect(() => {
    slideInRight(".parcours-container");
  }, []);

  useEffect(() => {
    slideInLeft(".competences-container");
  }, []);

  useEffect(() => {
    slideInRight(".contact-container");
  }, []);

  return (
    <div className="all-container">
      <section className="header-container">
        <div className="background-img-filter" />
        <div className="title-header-container">
          <h1 className="h1-header">
            <span className="letter1" ref={titleRef}>
              B
            </span>
            <span className="letter1" ref={titleRef}>
              I
            </span>
            <span className="letter1" ref={titleRef}>
              E
            </span>
            <span className="letter1" ref={titleRef}>
              N
            </span>
            <span className="letter1" ref={titleRef}>
              V
            </span>
            <span className="letter1" ref={titleRef}>
              E
            </span>
            <span className="letter1" ref={titleRef}>
              N
            </span>
            <span className="letter1" ref={titleRef}>
              U
            </span>
            <span className="letter1" ref={titleRef}>
              E
            </span>
          </h1>
          <h2 className="title-header">
            <span className="letter">J</span>
            <span className="letter">e</span>
            <span className="letter"> </span>
            <span className="letter">s</span>
            <span className="letter">u</span>
            <span className="letter">i</span>
            <span className="letter">s</span>
            <br />
            <span className="letter">E</span>
            <span className="letter">t</span>
            <span className="letter">i</span>
            <span className="letter">e</span>
            <span className="letter">n</span>
            <span className="letter">n</span>
            <span className="letter">e</span>
            <span className="letter"> </span>
            <span className="letter">B</span>
            <span className="letter">a</span>
            <span className="letter">c</span>
            <span className="letter">l</span>
            <span className="letter">e</span>
            <br />
            <span className="letter">D</span>
            <span className="letter">é</span>
            <span className="letter">v</span>
            <span className="letter">e</span>
            <span className="letter">l</span>
            <span className="letter">o</span>
            <span className="letter">p</span>
            <span className="letter">p</span>
            <span className="letter">e</span>
            <span className="letter">u</span>
            <span className="letter">r</span>
            <span className="letter"> </span>
            <span className="letter">W</span>
            <span className="letter">e</span>
            <span className="letter">b</span>
            <span className="letter"> </span>
            <span className="letter">F</span>
            <span className="letter">u</span>
            <span className="letter">l</span>
            <span className="letter">l</span>
            <span className="letter">-</span>
            <span className="letter">S</span>
            <span className="letter">t</span>
            <span className="letter">a</span>
            <span className="letter">c</span>
            <span className="letter">k</span>
          </h2>
        </div>
        <a href="#apropos-container">
          <img className="arrow-header" src={Arrow} alt="" />
        </a>
      </section>
      <section className="apropos-container" id="apropos-container">
        <div className="apropos-title-container">
          <h2 className="apropos-title">A propos</h2>
        </div>
        <div className="flex-apropos">
          <div className="apropos-text-container">
            <p>
              Bonjour je m'appelle
              <strong className="str-etiennebacle">Etienne Bacle,</strong> j'ai
              36 ans, je suis développeur web full-stack. Je vis actuellement
              dans la région Bordelaise. Passionné par le développement web,
              j'aime expérimenter, découvrir et apprendre de nouvelles
              technologies. Je suis rigoureux, ce qui me permet de mener à bien
              mes projets et activités confiées de A à Z et de bien gérer mon
              temps de travail. Je sais aussi faire preuve de créativité et
              d'imagination, et répondre aux besoins des clients par des
              solutions innovantes et originales. Dans ce portfolio que j'ai
              réalisé, je vous présente mes compétences et mon parcours. Pour
              toute question, n’hésitez pas à me contacter !
            </p>
          </div>
          <div className="apropos-img-container">
            <img className="apropos-img" src={Photo} alt="Etienne Bacle" />
          </div>
        </div>
      </section>
      <section className="parcours-container" id="parcours-container">
        <h2 className="parcours-title">Mon Parcours</h2>
        <div className="flex-container">
          <div className="parcours-dates">
            <h3 className="parcours-title-date">2022 - 2023</h3>
          </div>
          <div className="parcours-paragraphs">
            <p className="p-parcours-paragraphs">
              Formation de développeur web et web-mobile au sein de la Wild Code
              School. Cette formation intensive, m'a permis d'acquérir les
              compétences nécessaires pour devenir développeur web full-stack.
            </p>
          </div>
        </div>
        <div className="flex-container">
          <div className="parcours-dates">
            <h3 className="parcours-title-date">2019 - 2022</h3>
          </div>
          <div className="parcours-paragraphs">
            <p className="p-parcours-paragraphs">
              Responsable de boutique de cigarettes électroniques. Gestion des
              stocks, des commandes et des ventes en magasin.
            </p>
          </div>
        </div>
        <div className="flex-container">
          <div className="parcours-dates">
            <h3 className="parcours-title-date">2017 - 2018</h3>
          </div>
          <div className="parcours-paragraphs">
            <p className="p-parcours-paragraphs">
              Dirigeant associé d'un restaurant sur la commune de Montalivet.
              Gestion du personnel, des stocks, des commandes, confection des
              préparations culinaires, service en salle.
            </p>
          </div>
        </div>
        <div className="flex-container">
          <div className="parcours-dates">
            <h3 className="parcours-title-date">2007 - 2016</h3>
          </div>
          <div className="parcours-paragraphs">
            <p className="p-parcours-paragraphs">
              Agent immobilier / Responsable d'agence.
            </p>
          </div>
        </div>
      </section>
      <section className="competences-container" id="competences-container">
        <h1 className="title-competences">Mes compétences</h1>
        <h5 className="subtitle-competences">Techniques :</h5>
        <div className="flex-container-competences">
          <div className="techniques">
            <button type="button" className="technique-title">
              Html
            </button>

            <button type="button" className="technique-title">
              CSS
            </button>

            <button type="button" className="technique-title">
              Bootstrap
            </button>

            <button type="button" className="technique-title">
              Tailwind
            </button>
            <button type="button" className="technique-title">
              Gsap
            </button>

            <button type="button" className="technique-title">
              JavaScript
            </button>

            <button type="button" className="technique-title">
              React JS
            </button>

            <button type="button" className="technique-title">
              Express.js{" "}
            </button>

            <button type="button" className="technique-title">
              Node.js{" "}
            </button>

            <button type="button" className="technique-title">
              MySQL
            </button>

            <button type="button" className="technique-title">
              Responsive
            </button>
          </div>
          <div className="outils">
            <h3 className="subtitle-outils">Outils</h3>
            <li className="li-outils">
              <strong className="li-outils-strong"> Graphisme:</strong> Figma,
              Photoshop
            </li>
            <li className="li-outils">
              <strong className="li-outils-strong">Systèmes:</strong> Git,
              Github
            </li>
            <li className="li-outils">
              <strong className="li-outils-strong">Bureautique:</strong> MS
              Office, Libre Office
            </li>
            <h3 className="subtitle-outils">Savoir-être</h3>
            <li className="li-savoir-etre">
              <strong className="li-savoir-etre-strong">Rigoureux</strong>
            </li>
            <li className="li-savoir-etre">
              <strong className="li-savoir-etre-strong">Autonome</strong>
            </li>
            <li className="li-savoir-etre">
              <strong className="li-savoir-etre-strong">Adaptable</strong>
            </li>
            <li className="li-savoir-etre">
              <strong className="li-savoir-etre-strong">Organisé</strong>
            </li>
          </div>
        </div>
      </section>
      <section className="contact-container" id="contact-container">
        <h5 className="title-contact">Contactez-moi</h5>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label className="contact-form-label" htmlFor="nameInput">
            Nom:
          </label>
          <div>
            <input
              className="contact-form-input"
              type="text"
              name="user_name"
              required
            />
          </div>
          <label className="contact-form-label" htmlFor="surnameInput">
            Prénom:
          </label>
          <div>
            <input
              className="contact-form-input"
              type="text"
              name="user_surname"
              required
            />
          </div>
          <label className="contact-form-label" htmlFor="emailInput">
            Email:
          </label>
          <div>
            <input
              className="contact-form-input"
              type="email"
              name="user_email"
              required
            />
          </div>
          <label className="contact-form-label" htmlFor="messageInput">
            Message:
          </label>
          <div>
            <textarea className="message-input" name="message" required />
          </div>
          <button
            className="btn-contact"
            type="submit"
            onClick={
              toastifySuccess
                ? ("user_name",
                  "user_surname",
                  "user_email",
                  "message-input" !== "")
                : toastifyError
            }
          >
            Envoyer
          </button>
          <ToastContainer
            icon="🚀"
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </form>
      </section>
      <section className="footer-container">
        <div className="footer-title-container">
          <h5 className="footer-title">Get in Touch</h5>
        </div>
        <div className="footer-socials-container">
          <li className="list-footer-social">
            <a
              href="https://github.com/EtienneApi"
              target="_blank"
              rel="noreferrer"
            >
              <img className="github-icon" src={GithubIcon} alt="" />
            </a>
          </li>
          <li className="list-footer-social">
            <a
              href="https://fr.linkedin.com/in/etienne-bacle-a297a0200"
              target="_blank"
              rel="noreferrer"
            >
              <img className="linkedin-icon" src={LinkedinIcon} alt="" />
            </a>
          </li>
          <li className="list-footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=100090243471283"
              target="_blank"
              rel="noreferrer"
            >
              <img className="facebook-icon" src={FacebookIcon} alt="" />
            </a>
          </li>
          <li className="list-footer-social">
            <a
              href="https://www.instagram.com/freeebdev/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="insta-icon" src={InstaIcon} alt="" />
            </a>
          </li>
        </div>
        <div className="footer-copyright-container">
          <h6 className="footer-copyright">© 2023 | Etienne Bacle </h6>
        </div>
      </section>
    </div>
  );
}
