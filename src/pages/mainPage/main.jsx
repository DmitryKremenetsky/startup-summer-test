import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./mainPage.css";

export default function MainPage() {
  const [setCurrentPage] = useState(0);

  const jobs = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `Job ${index + 1}`,
  }));

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
        <aside className="filters-block">
          <div className="filters">
            <p className="filters-title">Фильтры</p>
            <button className="filters-button">
              Сбросить все
              <img src="../src/assets/close.svg" alt="close" />
            </button>
          </div>
          <div className="filters-form">
            <p className="form-title">Отрасель</p>
            <div className="form-select">
              <select>
                <option value="" disabled selected>
                  Выберете отрасль
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="input-price">
              <p className="price-title">Оклад</p>
              <div className="block-price">
                <input
                  type="number"
                  className="price-from"
                  name="price-from"
                  placeholder="От"
                />
              </div>
              <div className="block-price">
                <input
                  type="number"
                  className="price-from"
                  name="price-from"
                  placeholder="До"
                />
              </div>
            </div>
            <button className="filters-submit">Применить</button>
          </div>
        </aside>
        <div className="search-jobs">
          <div className="search-box">
            <img src="../src/assets/search.svg" alt="search" />
            <input type="text" placeholder="Введите название вакансии" />
            <button type="submit">Поиск</button>
          </div>
          <div className="jobs"></div>
          <div className="jobs"></div>
          <div className="jobs"></div>
          <div className="jobs"></div>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={Math.ceil(jobs.length / 7)}
            onPageChange={(data) => {
              setCurrentPage(data.selected);
            }}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </>
  );
}
