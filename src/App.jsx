import { useRef, useState, useEffect } from "react";
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
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // 20px дополнительный отступ

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="container">
      {/* Header */}
      <header>
        <div className="header-inner">
          <h1 className="logo">ТР Девелопмент</h1>
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <nav className={isMenuOpen ? 'mobile-menu-open' : ''}>
            <button onClick={() => scrollToSection(whyUsRef)}>Почему мы</button>
            <button onClick={() => scrollToSection(servicesRef)}>Услуги</button>
            <button onClick={() => scrollToSection(experienceRef)}>Опыт</button>
            <button onClick={() => scrollToSection(advantagesRef)}>
              Преимущества
            </button>
            <button onClick={() => scrollToSection(clientsRef)}>
              Заказчики
            </button>
            <button onClick={() => scrollToSection(contactRef)}>
              Контакты
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src={mainImage} className={"mainImage"} alt="" />
          <div className={"mainContent"}>
            <p className={"mainTitle"}>«ТР Девелопмент»</p>
            <p className={"mainTitle"}>
              Антикоррозионная защита, огнезащита, теплоизоляция, монтажные
              работы.
            </p>
            <p className={"mainDescription"}>
              «ТР Девелопмент» — ведущая компания в сфере антикоррозионной
              защиты, огнезащитной обработки и монтажа тепловой изоляции. Мы
              предлагаем полный спектр услуг, работая на рынке с 2024 года.
            </p>
            <form
              className="hero-quick-form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input type="text" placeholder="Ваше имя" required />
              <input type="tel" placeholder="Телефон" required />
              <button type="submit">Получить консультацию</button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section ref={whyUsRef} className="why-us">
        <h3>Почему выбирают нас</h3>
        <div className="why-us-grid">
          <div className="why-us-card">
            <span className="why-us-number">1</span>
            <h4>Качество</h4>
            <p>Соблюдение международных и отечественных стандартов качества.</p>
          </div>
          <div className="why-us-card">
            <span className="why-us-number">2</span>
            <h4>Надежность</h4>
            <p>Долговечность и эффективность всех применяемых решений.</p>
          </div>
          <div className="why-us-card">
            <span className="why-us-number">3</span>
            <h4>Индивидуальный подход</h4>
            <p>
              Оптимальные решения с учетом специфики объекта и требований
              клиента.
            </p>
          </div>
          <div className="why-us-card">
            <span className="why-us-number">4</span>
            <h4>Профессионализм</h4>
            <p>Высококвалифицированные специалисты с богатым опытом.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="services">
        <div className="services-inner">
          <h3>Наши услуги</h3>
          <div className="services-grid">
            <div className="service-card">
              <h4>Антикоррозионная защита</h4>
              <p>
                Защита металлических и железобетонных конструкций: резервуары,
                трубопроводы, мосты, эстакады.
              </p>
            </div>
            <div className="service-card">
              <h4>Огнезащита</h4>
              <p>
                Нанесение огнезащитных покрытий для защиты от высоких температур
                и прямого огня.
              </p>
            </div>
            <div className="service-card">
              <h4>Теплоизоляция</h4>
              <p>
                Монтаж теплоизоляции любой сложности для трубопроводов,
                аппаратов и оборудования.
              </p>
            </div>
            <div className="service-card">
              <h4>Монтажные работы</h4>
              <p>
                Установка металлоконструкций и трубопроводов с применением
                промышленного альпинизма.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="experience">
        <div className={"expContainer"}>
          <div className={"expContent"}>
            <p className={"expTitle"}>Опыт работы</p>
            <div className="exp-list">
              <div className="exp-block">
                <h5>Антикоррозионная защита</h5>
                <ul>
                  <li>Резервуары, трубопроводы, эстакады, мосты, вышки ЛЭП</li>
                  <li>Нефтегазовые месторождения</li>
                  <li>Химические и нефтеперерабатывающие предприятия</li>
                  <li>Металлургия</li>
                </ul>
              </div>
              <div className="exp-block">
                <h5>Монтаж теплоизоляции</h5>
                <ul>
                  <li>Теплоизоляция любой сложности</li>
                  <li>Изоляция трубопроводов и оборудования</li>
                </ul>
              </div>
              <div className="exp-block">
                <h5>Нанесение огнезащиты</h5>
                <ul>
                  <li>Огнезащита металлоконструкций и дерева</li>
                  <li>Все виды огнезащитных составов</li>
                </ul>
              </div>
              <div className="exp-block">
                <h5>Монтаж</h5>
                <ul>
                  <li>Монтаж металлоконструкций любой сложности</li>
                </ul>
              </div>
            </div>
          </div>
          <img src={experienceImage} className={"expImage"} alt="" />
        </div>
      </section>

      {/* Advantages Section */}
      <section ref={advantagesRef} className="advantages">
        <h3>Наши преимущества</h3>
        <div className="advantages-grid">
          <div className="adv-card">
            <h4>Сертифицированные специалисты</h4>
            <p>
              Обучены и имеют удостоверения «Промышленный альпинист», «Маляр»,
              «Монтажник» и «Антикоррозийщик».
            </p>
          </div>
          <div className="adv-card">
            <h4>Инженерный состав</h4>
            <p>
              Сертифицированные инспекторы по качеству антикоррозионных работ,
              обучены в ведущих центрах, имеют удостоверения по контролю и
              выполнению сложных работ.
            </p>
          </div>
          <div className="adv-card">
            <h4>Индивидуальный подход</h4>
            <p>
              Регулярное обучение, знание рынка материалов, помощь в выборе
              оптимального решения для каждого объекта и условий эксплуатации.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section ref={clientsRef} className="clients">
        <h3>Основные заказчики</h3>
        <div className="clients-grid">
          <div className="client-card">
            <div className="client-logo afip"></div>
            <p>Афипский нефтеперерабатывающий завод</p>
          </div>
          <div className="client-card">
            <div className="client-logo evraz"></div>
            <p>
              Международная вертикально-интегрированная металлургическая и
              горнодобывающая компания
            </p>
          </div>
          <div className="client-card">
            <div className="client-logo kemazot"></div>
            <p>
              "Кемерово Азот" — предприятие химической отрасли России,
              специализирующееся на производстве азотных удобрений и аммиачной
              селитры.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact">
        <h3>Связаться с нами</h3>
        <div className="contact-form">
          <input type="text" placeholder="Ваше имя" required />
          <input type="tel" placeholder="Телефон" required />
          <textarea placeholder="Сообщение" rows={5}></textarea>
          <button>Отправить сообщение</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © {new Date().getFullYear()} Золотое сечение. Все права защищены.
        </p>
      </footer>
    </div>
  );
}

export default App;
