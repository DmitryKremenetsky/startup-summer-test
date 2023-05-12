import "./favorite.css";

export default function FavoritePage() {
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
    </>
  );
}
