import BlogList from "components/blog/BlogList";

import CTA from "components/home/CTA";
import FAQs from "components/home/FAQs";
import Header from "components/home/Header";
import Incentives from "components/home/Incentives";
import Logos from "components/home/Logos";
import Trending from "components/trending";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";

import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog";
import axios from "axios";
import { useEffect, useState } from "react";
import TableCoins from "../../components/TableCoins";

function Home({ blog_list, get_blog_list, get_blog_list_page }) {
  useEffect(() => {
    blog_list ? <></> : get_blog_list();
  }, []);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );

      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <FullWidthLayout>
      <div className="max-w-full mx-auto">
        <Trending />
        <Header />
    
        <TableCoins coins={coins} search={search} />
      </div>
      <Logos />
      <BlogList get_blog_list_page={get_blog_list_page} blog_list={blog_list} />
      <Incentives />
      <FAQs />
      <CTA />
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  blog_list: state.blog.blog_list,
});

export default connect(mapStateToProps, {
  get_blog_list,
  get_blog_list_page,
})(Home);
