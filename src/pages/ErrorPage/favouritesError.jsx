import "./favouritesError.css";

export default function FavoritesError() {
  return (
    <>
      <div className="header">
        <div className="logo-block">
          <img src="../src/assets/logo.svg" alt="logo image" />
        </div>
        <div className="jobs-block">
          <p className="jobs-title">Поиск Вакансий</p>
          <p className="jobs-title">Избранное</p>
        </div>
      </div>
      <div className="main">
        <div className="search-job">
          <img src="../src/assets/search-men.png" alt="search-men" />
          <p className="search-title">Упс, здесь еще ничего нет!</p>
          <button className="search-btn">Поиск Вакансий</button>
        </div>
      </div>
    </>
  );
}
