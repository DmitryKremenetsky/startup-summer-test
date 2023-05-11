import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./mainPage.css";

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState(0);

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
            <button>Сбросить все</button>
          </div>
          <div className="filters-form">
            <div className="select">
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="select">
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <button className="filters-submit">Применить</button>
          </div>
        </aside>
        <div className="search-jobs">
          <form className="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="Поиск на сайте"
            />
            <button type="submit" className="search-button">
              Найти
            </button>
          </form>
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
