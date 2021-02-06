import React, { useState, useEffect } from "react";
import { getPageData } from "../Api/Api";
import Spinner from "../Components/Spinner/Spinner";
import Title from "../Components/Title/Title";
import Hero from "../Components/Hero/Hero";
import Standfirst from "../Components/Standfirst/Standfirst";
import Category from "../Components/Category/Category";
import Author from "../Components/Author/Author";
import PublishDate from "../Components/PublishDate/PublishDate";
import Tags from "../Components/Tags/Tags";

const Home = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    getPageData().then((data) => setPageData(data));
  }, []);

  return pageData ? (
    <>
      <section>
        {console.log(pageData)}
        <Category category={pageData.acf.category} />
        <Hero heroImage={pageData.acf.hero_image} />
        <Title title={pageData.title.rendered} />
        <PublishDate date={pageData.date} />
        <Standfirst
          standfirst={pageData.acf.standfirst}
          author={<Author authors={pageData._embedded.author} />}
        />
      </section>
      <footer>
        <Tags tags={pageData.acf.tags} />
      </footer>
    </>
  ) : (
    <Spinner />
  );
};

export default Home;
