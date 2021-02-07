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
        {console.log(pageData)}
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
        <footer>
          <Tags tags={pageData.acf.tags} />
        </footer>
      </section>
    </>
  ) : (
    <Spinner />
  );
};

export default Home;
