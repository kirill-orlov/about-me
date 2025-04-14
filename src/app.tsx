import './app.css';

function App() {
  const handleOpen = () => {
    window.open('https://career.habr.com/orlov_kirill', '_blank', 'noopener,noreferrer');
  };

  const currentYear = new Date().getFullYear();

  return (
    <main className="app-container">
      <header className="header">
        <h1>Кирилл Орлов</h1>
        <p className="subtitle">
          Инженер-программист с {currentYear - 2021} годами опыта, специализирующийся на
          Frontend-разработке
        </p>
        <button onClick={handleOpen} className="download-button" aria-label="Скачать резюме">
          Смотреть резюме
        </button>
      </header>

      <section className="social-links">
        <ul className="links-list">
          <li>
            <a href="https://github.com/kirill-orlov" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://t.me/orlovkirill" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </li>
          <li>
            <a href="mailto:kirillorlovufa@gmail.com" target="_blank" rel="noopener noreferrer">
              kirillorlovufa@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
