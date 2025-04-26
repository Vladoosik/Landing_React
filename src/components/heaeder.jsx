import React from "react";

const Header = (props) => {
  const { aboutClick, serviceClick, contactClick } = props;

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Золотое сечение</h1>
        <nav className="space-x-6">
          <button onClick={aboutClick} className="hover:text-blue-600">
            О нас
          </button>
          <button onClick={serviceClick} className="hover:text-blue-600">
            Услуги
          </button>
          <button onClick={contactClick} className="hover:text-blue-600">
            Контакты
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
