import React from "react";
import NewsImg from "../../assets/images/news.png";
import News1 from "../../assets/images/news1.png";

const News = () => {
  const articles = [
    {
      title: "HyperX named peripherals partner for Red Bull Racing Esports",
      image: News1,
      author: "Jonno Nicholson",
      date: "April 27, 2021",
      label: "Partnership & Sponsorship",
    },
    {
      title: "HyperX named peripherals partner for Red Bull Racing Esports",
      image: News1,
      author: "Jonno Nicholson",
      date: "April 27, 2021",
      label: "Partnership & Sponsorship",
    },
  ];
  return (
    <div className="category-block">
      <div className="category-block__label">
        <img src={NewsImg} alt="NEWS" />
      </div>
      {articles.map((article, i) => (
        <NewsArticle
          key={i}
          title={article.title}
          image={article.image}
          author={article.author}
          date={article.date}
          label={article.label}
        />
      ))}
    </div>
  );
};
export default News;

const NewsArticle = ({ title, image, author, date, label }) => {
  return (
    <div className="news-article">
      <div className="news-article-top">
        <img src={image} alt={title} />
        <div className="news-article-top__label">{label}</div>
      </div>
      <div className="news-article__title">{title}</div>
      <div className="news-article-bottom">
        <div className="news-article__author">{author}</div>
        <div className="news-article__date">{date}</div>

        <div className="news-article__comments">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H16V12H4L0 16V0Z" fill="#4C4F7A" />
          </svg>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};
