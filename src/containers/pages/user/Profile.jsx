import { connect } from "react-redux";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { get_user_details } from "redux/actions/user";
import { MailIcon, PhoneIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import LoadingFullWidth from "components/loaders/LoadingFullWidth";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { setAlert } from "redux/actions/alert";
import { MdLocationCity } from "react-icons/md";
import { BsEmojiSunglasses } from "react-icons/bs";
import {
  FcGraduationCap,
  FcAddressBook,
  FcGlobe,
  FcLike,
} from "react-icons/fc";
import { FaBirthdayCake } from "react-icons/fa";
function Profile({ get_user_details, user, setAlert }) {
  const params = useParams();
  const user_account = params.user_account;

  useEffect(() => {
    const fetchData = async () => {
      await get_user_details(user_account);
    };
    fetchData();
  }, []);

  return (
    <FullWidthLayout>
      <div>
        <div className="z-10">
          {user ? (
            <img
              className="h-32 w-full object-cover lg:h-48"
              src={`${process.env.REACT_APP_API_URL}${user && user.banner}`}
              alt="profile banner"
            />
          ) : (
            <LoadingFullWidth />
          )}
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              {user ? (
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white dark:ring-dark-third sm:h-32 sm:w-32"
                  src={`${process.env.REACT_APP_API_URL}${
                    user && user.picture
                  }`}
                  alt="profile picture"
                />
              ) : (
                <div className="animate-pulse">
                  <span className="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100 dark:bg-dark-third">
                    <svg
                      className="h-full w-full text-gray-300 dark:text-dark-third dark:bg-dark-main"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                </div>
              )}
            </div>
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  {user ? (
                    <>
                      {user.username === user.account ? (
                        <>
                          {user && user.account.slice(0, 6)}
                          ...
                          {user && user.account.slice(-4)}
                        </>
                      ) : (
                        <>{user && user.username}</>
                      )}
                    </>
                  ) : (
                    <LoadingFullWidth />
                  )}
                  {user && user.verified ? (
                    <BadgeCheckIcon
                      className="ml-2 h-4 w-4 text-blue-500 inline-flex"
                      aria-hidden="true"
                    />
                  ) : (
                    <></>
                  )}
                </h1>
                <p className="text-sm font-gilroy-medium text-gray-500">
                  Account: {user && user.account.slice(0, 6)}
                  ...{user && user.account.slice(-4)}
                  <CopyToClipboard text={user && user.account}>
                    <button
                      onClick={() => {
                        setAlert("Copiado", "green");
                      }}
                      className="ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                    </button>
                  </CopyToClipboard>
                </p>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"></div>
            </div>
          </div>
          <div className="flex space-x-72  mt-8 dark:text-dark-txt text-gray-700 font-gilroy-regular  ">
            <BsEmojiSunglasses
              className="inline-flex ml-6 h-6 w-6 text-blue-500  mx-auto  mr-4 "
              aria-hidden="true"
            />
            {user && user.first_name} {user && user.last_name}
            <FcGraduationCap
              className="inline-flex  h-6 w-6 text-blue-500   mr-4 "
              aria-hidden="true"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user && user.profesion}
          </div>

          <div className="flex space-x-96 mt-4 dark:text-dark-txt text-gray-700 font-gilroy-regular ">
            <PhoneIcon
              className="ml-6 h-6 w-6 text-yellow-500  mx-auto inline-flex mr-4"
              aria-hidden="true"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {user && user.telefon}
            <FcGlobe
              className="inline-flex  h-6 w-6 text-yellow-500  mr-4 "
              aria-hidden="true"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user && user.location}
          </div>
          <div className="flex space-x-72 mt-4 dark:text-dark-txt text-gray-700 font-gilroy-regular ">
            <FcAddressBook
              className="ml-6 h-6 w-6  mx-auto inline-flex mr-4"
              aria-hidden="true"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {user && user.email}
            <FaBirthdayCake
              className="inline-flex  h-6 w-6 text-pink-500  mr-4 "
              aria-hidden="true"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user && user.birthday}
          </div>
          <div>
            <div className="flex space-x-72 mt-20 dark:text-dark-txt text-gray-700 font-gilroy-regular ml-5">
              <FcLike
                className="inline-flex  h-6 w-6 text-pink-500  mr-4 "
                aria-hidden="true"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user && user.profile_info}
            </div>
          </div>
          <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {user ? (
                <>
                  {user.username === user.account ? (
                    <>
                      {user && user.account.slice(0, 6)}
                      ...
                      {user && user.account.slice(-4)}
                    </>
                  ) : (
                    <>{user && user.username}</>
                  )}
                </>
              ) : (
                <LoadingFullWidth />
              )}
              {user && user.verified ? (
                <BadgeCheckIcon
                  className="ml-2 h-4 w-4 text-blue-500 inline-flex"
                  aria-hidden="true"
                />
              ) : (
                <></>
              )}
            </h1>
            <p className="text-sm font-gilroy-medium text-gray-500">
              Account: {user && user.account.slice(0, 6)}...
              {user && user.account.slice(-4)}
              <CopyToClipboard text={user && user.account}>
                <button
                  onClick={() => {
                    setAlert("Kopiert", "green");
                  }}
                  className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 hover:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                </button>
              </CopyToClipboard>
            </p>
          </div>
        </div>
      </div>
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, {
  get_user_details,
  setAlert,
})(Profile);
