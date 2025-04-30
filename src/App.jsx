import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./app.css";
import mainImage from "./assets/mainImage.png";
import experienceImage from "./assets/experienceImg.png";
import {
  advantagesList,
  chooseUs,
  clientList,
  experienceList,
  ourServices,
} from "./constants/index.js";
import { useForm } from "@formspree/react";

function App() {
  const [state, handleSubmit] = useForm("xzzrdynz");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest("nav") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  // Animation variants for sections
  const sectionVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };
  return (
    <div className="container">
      {/* Header */}
      <motion.header
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="header-inner">
          <h1 className="logo">ТР Девелопмент</h1>
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
          <nav className={isMenuOpen ? "mobile-menu-open" : ""}>
            <button onClick={() => scrollToSection("why-us")}>Почему мы</button>
            <button onClick={() => scrollToSection("services")}>Услуги</button>
            <button onClick={() => scrollToSection("experience")}>Опыт</button>
            <button onClick={() => scrollToSection("advantages")}>
              Преимущества
            </button>
            <button onClick={() => scrollToSection("clients")}>
              Заказчики
            </button>
            <button onClick={() => scrollToSection("contact")}>Контакты</button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="hero"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.img
            src={mainImage}
            className="mainImage"
            alt=""
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <div className="mainContent">
            <motion.p
              className="mainTitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              «ТР Девелопмент»
            </motion.p>
            <motion.p
              className="mainTitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Антикоррозионная защита, огнезащита, теплоизоляция, монтажные
              работы.
            </motion.p>
            <motion.p
              className="mainDescription"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              «ТР Девелопмент» — ведущая компания в сфере антикоррозионной
              защиты, огнезащитной обработки и монтажа тепловой изоляции. Мы
              предлагаем полный спектр услуг, работая на рынке с 2024 года.
            </motion.p>
            <motion.form
              className={`hero-quick-form${state.succeeded ? ' sent' : ''}`}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {state.succeeded ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="success-message"
                >
                  {/*<span style={{fontSize: 32, display: 'block', marginBottom: 8}}>✅</span>*/}
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </motion.p>
              ) : (
                <>
                  <input type="text" name={'text'} placeholder="Ваше имя" required />
                  <input type="tel" name={'phone'} placeholder="Телефон" required />
                  <button type="submit">Получить консультацию</button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* Why Us Section */}
      <motion.section
        id="why-us"
        className="why-us"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3>Почему выбирают нас</h3>
        <div className="why-us-grid">
          {chooseUs.map((card, index) => (
            <motion.div
              key={index}
              className="why-us-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="why-us-number">{card.number}</span>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="services"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="services-inner">
          <h3>Наши услуги</h3>
          <div className="services-grid">
            {ourServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="experience"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="expContainer">
          <div className="expContent">
            <motion.p
              className="expTitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Опыт работы
            </motion.p>
            <div className="exp-list">
              {experienceList.map((block, index) => (
                <motion.div
                  key={index}
                  className="exp-block"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h5>{block.title}</h5>
                  <ul>
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.img
            src={experienceImage}
            className="expImage"
            alt=""
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.section>

      {/* Advantages Section */}
      <motion.section
        id="advantages"
        className="advantages"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3>Наши преимущества</h3>
        <div className="advantages-grid">
          {advantagesList.map((adv, index) => (
            <motion.div
              key={index}
              className="adv-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4>{adv.title}</h4>
              <p>{adv.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Clients Section */}
      <motion.section
        id="clients"
        className="clients"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3>Основные заказчики</h3>
        <div className="clients-grid">
          {clientList.map((client, index) => (
            <motion.div
              key={index}
              className="client-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={client.image}
                className={`client-logo ${client.logo}`}
                alt={"client logo"}
              />
              <p>{client.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3>Связаться с нами</h3>
        <form onSubmit={handleSubmit}>
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {state.succeeded ? (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="success-message"
              >
                Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время
              </motion.p>
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  required
                />
                <input type="tel" name="phone" placeholder="Телефон" required />
                <textarea name="message" placeholder="Сообщение" rows={5} />
                <button type="submit" disabled={state.submitting}>
                  Отправить сообщение
                </button>
              </>
            )}
          </motion.div>
        </form>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p>© {new Date().getFullYear()} ТР Девелопмент. Все права защищены.</p>
      </motion.footer>
    </div>
  );
}

export default App;
