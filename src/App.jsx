import { useRef, useState, useEffect } from "react";
import {  AnimatePresence } from "framer-motion";
import "./app.css";
import mainImage from "./assets/mainImage.png";
import experienceImage from "./assets/experienceImg.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const whyUsRef = useRef(null);
  const advantagesRef = useRef(null);
  const clientsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav') && !event.target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const scrollToSection = (ref) => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const elementPosition = ref.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
      <div className="container">
        {/* Header */}
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <div className="header-inner">
            <h1 className="logo">ТР Девелопмент</h1>
            <button
                className="mobile-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                  <motion.nav
                      className="mobile-menu-open"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                  >
                    <button onClick={() => scrollToSection(whyUsRef)}>Почему мы</button>
                    <button onClick={() => scrollToSection(servicesRef)}>Услуги</button>
                    <button onClick={() => scrollToSection(experienceRef)}>Опыт</button>
                    <button onClick={() => scrollToSection(advantagesRef)}>Преимущества</button>
                    <button onClick={() => scrollToSection(clientsRef)}>Заказчики</button>
                    <button onClick={() => scrollToSection(contactRef)}>Контакты</button>
                  </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </motion.header>

        {/* Hero Section */}
        <motion.section
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
                Антикоррозионная защита, огнезащита, теплоизоляция, монтажные работы.
              </motion.p>
              <motion.p
                  className="mainDescription"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
              >
                «ТР Девелопмент» — ведущая компания в сфере антикоррозионной защиты,
                огнезащитной обработки и монтажа тепловой изоляции. Мы предлагаем полный
                спектр услуг, работая на рынке с 2024 года.
              </motion.p>
              <motion.form
                  className="hero-quick-form"
                  onSubmit={(e) => e.preventDefault()}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
              >
                <input type="text" placeholder="Ваше имя" required />
                <input type="tel" placeholder="Телефон" required />
                <button type="submit">Получить консультацию</button>
              </motion.form>
            </div>
          </div>
        </motion.section>

        {/* Why Us Section */}
        <motion.section
            ref={whyUsRef}
            className="why-us"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
          <h3>Почему выбирают нас</h3>
          <div className="why-us-grid">
            {[
              { number: 1, title: "Качество", text: "Соблюдение международных и отечественных стандартов качества." },
              { number: 2, title: "Надежность", text: "Долговечность и эффективность всех применяемых решений." },
              { number: 3, title: "Индивидуальный подход", text: "Оптимальные решения с учетом специфики объекта и требований клиента." },
              { number: 4, title: "Профессионализм", text: "Высококвалифицированные специалисты с богатым опытом." }
            ].map((card, index) => (
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
            ref={servicesRef}
            className="services"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
          <div className="services-inner">
            <h3>Наши услуги</h3>
            <div className="services-grid">
              {[
                { title: "Антикоррозионная защита", text: "Защита металлических и железобетонных конструкций: резервуары, трубопроводы, мосты, эстакады." },
                { title: "Огнезащита", text: "Нанесение огнезащитных покрытий для защиты от высоких температур и прямого огня." },
                { title: "Теплоизоляция", text: "Монтаж теплоизоляции любой сложности для трубопроводов, аппаратов и оборудования." },
                { title: "Монтажные работы", text: "Установка металлоконструкций и трубопроводов с применением промышленного альпинизма." }
              ].map((service, index) => (
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
            ref={experienceRef}
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
                {[
                  {
                    title: "Антикоррозионная защита",
                    items: [
                      "Резервуары, трубопроводы, эстакады, мосты, вышки ЛЭП",
                      "Нефтегазовые месторождения",
                      "Химические и нефтеперерабатывающие предприятия",
                      "Металлургия"
                    ]
                  },
                  {
                    title: "Монтаж теплоизоляции",
                    items: ["Теплоизоляция любой сложности", "Изоляция трубопроводов и оборудования"]
                  },
                  {
                    title: "Нанесение огнезащиты",
                    items: ["Огнезащита металлоконструкций и дерева", "Все виды огнезащитных составов"]
                  },
                  { title: "Монтаж", items: ["Монтаж металлоконструкций любой сложности"] }
                ].map((block, index) => (
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
            ref={advantagesRef}
            className="advantages"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
          <h3>Наши преимущества</h3>
          <div className="advantages-grid">
            {[
              {
                title: "Сертифицированные специалисты",
                text: "Обучены и имеют удостоверения «Промышленный альпинист», «Маляр», «Монтажник» и «Антикоррозийщик»."
              },
              {
                title: "Инженерный состав",
                text: "Сертифицированные инспекторы по качеству антикоррозионных работ, обучены в ведущих центрах, имеют удостоверения по контролю и выполнению сложных работ."
              },
              {
                title: "Индивидуальный подход",
                text: "Регулярное обучение, знание рынка материалов, помощь в выборе оптимального решения для каждого объекта и условий эксплуатации."
              }
            ].map((adv, index) => (
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
            ref={clientsRef}
            className="clients"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
          <h3>Основные заказчики</h3>
          <div className="clients-grid">
            {[
              { logo: "afip", text: "Афипский нефтеперерабатывающий завод" },
              { logo: "evraz", text: "Международная вертикально-интегрированная металлургическая и горнодобывающая компания" },
              {
                logo: "kemazot",
                text: "«Кемерово Азот» — предприятие химической отрасли России, специализирующееся на производстве азотных удобрений и аммиачной селитры."
              }
            ].map((client, index) => (
                <motion.div
                    key={index}
                    className="client-card"
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                  <div className={`client-logo ${client.logo}`}></div>
                  <p>{client.text}</p>
                </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
            ref={contactRef}
            className="contact"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
          <h3>Связаться с нами</h3>
          <motion.div
              className="contact-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
          >
            <input type="text" placeholder="Ваше имя" required />
            <input type="tel" placeholder="Телефон" required />
            <textarea placeholder="Сообщение" rows={5}></textarea>
            <button>Отправить сообщение</button>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
          <p>
            © {new Date().getFullYear()} Золотое сечение. Все права защищены.
          </p>
        </motion.footer>
      </div>
  );
}

export default App;
