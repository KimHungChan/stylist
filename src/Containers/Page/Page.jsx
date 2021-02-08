import React, { useState, useEffect } from "react";
import { getPageData } from "../../Api/Api";
import Spinner from "../../Components/Spinner/Spinner";
import Title from "../../Components/Title/Title";
import Hero from "../../Components/Hero/Hero";
import Standfirst from "../../Components/Standfirst/Standfirst";
import Category from "../../Components/Category/Category";
import Author from "../../Components/Author/Author";
import PublishDate from "../../Components/PublishDate/PublishDate";
import Tags from "../../Components/Tags/Tags";
import WidgetSection from "../WidgetSection/WidgetSection";
import "./Page.scss";

const Home = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    getPageData().then((data) => setPageData(data));
  }, []);

  return pageData ? (
    <>
      <section className="page-section">
        <Hero heroImage={pageData.acf.hero_image} />
        <header>
          <Category category={pageData.acf.category} />
          <Title title={pageData.title.rendered} />
          <PublishDate date={pageData.date} />
        </header>
        <Standfirst
          standfirst={pageData.acf.standfirst}
          author={<Author authors={pageData._embedded.author} />}
        />
        <WidgetSection widgets={pageData.acf.widgets} />
        <footer style={{ margin: "0 2rem" }}>
          <Tags tags={pageData.acf.tags} />
        </footer>
      </section>
      <footer className="page-footer"></footer>
    </>
  ) : (
    <Spinner />
  );
};

export default Home;
