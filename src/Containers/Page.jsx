import React, { useState, useEffect } from "react";
import { getPageData } from "../Api/Api";
import Spinner from "../Components/Spinner/Spinner";
import Title from "../Components/Title/Title";
import Hero from "../Components/Hero/Hero";
import Standfirst from "../Components/Standfirst/Standfirst";
import Category from "../Components/Category/Category";

const Home = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    getPageData().then((data) => setPageData(data));
  }, []);

  return pageData ? (
    <section>
      {console.log(pageData)}
      <Category category={pageData.acf.category} />
      <Hero heroImage={pageData.acf.hero_image} />
      <Title title={pageData.title.rendered} />
      <Standfirst standfirst={pageData.acf.standfirst} />
    </section>
  ) : (
    <Spinner />
  );
};

export default Home;
