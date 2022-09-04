import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_categories } from "redux/actions/categories";
import { get_network_id, loadWeb3, load_token } from "redux/actions/web3";
import Alert from "components/alert";
import { get_my_user_details } from "redux/actions/user";
const FullWidthLayout = ({
  children,
  categories,
  loadWeb3,
  load_token,
  get_network_id,
  account,
  my_user,
  get_my_user_details
}) => {
   if (window.ethereum) {
     window.ethereum.on("chainChanged", handleChainChanged);
     function handleChainChanged(_chainId) {
       // We recommend reloading the page, unless you must do otherwise
       window.location.reload();
     }
   }
  useEffect(() => {
    categories ? <></> : get_categories();

    if (localStorage.getItem("account")) {
      loadWeb3();
      load_token();
    }

    if (window.ethereum) {
      get_network_id();
    }
   
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("account")) {
        loadWeb3();
        my_user ? <></> : get_my_user_details();
      }
    };
    fetchData();

    if (window.ethereum) {
      get_network_id();
    }
  }, []);


  return (
    <>
      <Navbar account={account} />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-full mx-auto">
          {/* Content goes here */}
          {children}
        </div>
      </div>
      <Footer />
      <Alert />
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  account: state.web3.account,
  my_user: state.user.my_user,
});

export default connect(mapStateToProps, {
  loadWeb3,
  load_token,
  get_network_id,
  get_my_user_details
})(FullWidthLayout);
