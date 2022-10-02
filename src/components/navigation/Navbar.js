import { Fragment, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { SearchIcon,ChevronDownIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import useDarkMode from 'hooks/useDarkMode'
import {Helmet} from 'react-helmet'
import DarkModeSwitch from "components/darkmode";
import { connect } from "react-redux";
const navigation = [
    { name: 'AI', href: '/ai', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Servicios', href: '/blog', current: false },
    { name: 'Nosotros', href: '/nosotros', current: false },
    { name: 'Contacto', href: '/contacto', current: false },
    { name: 'Ntf Market', href: '/nfmarket', current: false}
]


const social = {
  solutions: [
    { name: 'Marketing', href: '/servicios/marketing' },
    { name: 'Desarrollo Web', href: '/servicios/desarrollo_web' },
  ],
  support: [
    { name: 'Guias', href: '/guias' },
    { name: 'Blog', href: '/blog' },
  ],
  company: [
    { name: 'Contacto', href: '/contacto' },
    { name: 'Nosotros', href: '/nosotros' },
  ],
  legal: [
    { name: 'Privacidad', href: '/privacidad' },
    { name: 'Terminos', href: '/terminos' },
  ],
  social: [
    {
      name: 'YouTube',
      href: 'https://youtube.com/solopython',
      icon: (props) => (
        <i className='bx bxl-youtube text-xl mt-0.5'></i>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/apholdings',
      icon: (props) => (
        <i className='bx bxl-github text-xl mt-0.5' ></i>
      ),
    },
  ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar({ account, ethereum_balance,network, my_user }) {
  const [effectLogin, setEffectLogin] = useState(false);

  function popoverTransition() {
    return (
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1">
        <Popover.Panel className="absolute left-1/2 z-50 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 2xl:max-w-md">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-8 bg-white dark:bg-dark-main p-7">
              <NavLink
                to={`/perfil/${my_user && my_user.account}`}
                className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out border dark:border-dark-third shadow dark:hover:bg-dark-third hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center text-white dark:text-dark-txt sm:h-12 sm:w-12">
                  <img
                    src={`${process.env.REACT_APP_API_URL}${
                      my_user && my_user.picture
                    }`}
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-gilroy-medium dark:text-dark-txt text-gray-900">
                    Perfil
                  </p>
                </div>
              </NavLink>

              <NavLink
                to={`/`}
                className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out dark:hover:bg-dark-third hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-700 dark:text-dark-txt bg-gray-100 dark:bg-dark-second rounded-xl p-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-gilroy-medium dark:text-dark-txt text-gray-900">
                    Wishlist
                  </p>
                </div>
              </NavLink>
            </div>
            <div className="bg-gray-50 dark:bg-dark-second p-4">
              <div
                onClick={() => {
                  localStorage.removeItem("account");
                  setTimeout((window.location.href = "/"), 500);
                }}
                className="cursor-pointer w-full flow-root rounded-md px-4 py-2 transition duration-150 ease-in-out dark:hover:bg-dark-main hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
                <span className="flex items-center">
                  <span className="text-sm font-gilroy-medium dark:text-dark-txt text-gray-900">
                    Desconectar
                  </span>
                </span>
                <span className="block text-sm text-gray-500">Logout</span>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    );
  }

  // SEARCH
  const [effectSearch, setEffectSearch] = useState(false);
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => (window.location.href = "/search/" + term), 0.2);
    setTerm("");
  };

  const authLinks = (
    <Fragment>
      <Popover as="div" className="relative">
        <Popover.Button
          onMouseDown={() => setEffectLogin(true)}
          onMouseUp={() => setEffectLogin(false)}
          className={`${
            effectLogin && "animate-click"
          } lg:hidden inline-flex bx bx-user-circle text-3xl mx-1 rounded-md p-2 items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
        />
        {popoverTransition()}
      </Popover>
      <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4 m-4">
        {ethereum_balance && (
          <p className="inline-flex mt-1.5 mr-2 text-sm font-gilroy-semibold text-gray-700  dark:bg-white">
            {ethereum_balance.length > 8
              ? `${ethereum_balance.slice(0, 7)}...`
              : ethereum_balance}{" "}
            ETH
          </p>
        )}
        <Popover
          as="div"
          className="lg:inline-flex relative hidden rounded-xl ml-2 py-0.5 pl-4 bg-gray-50 dark:bg-black border dark:border-dark-third">
          <>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    onMouseDown={() => setEffectLogin(true)}
                    onMouseUp={() => setEffectLogin(false)}
                    className={`
                          ${open ? "" : "text-opacity-90"}
                          group inline-flex items-center ${
                            effectLogin && "animate-click"
                          } rounded-xl mx-1 py-1 pl-4 inline-flex items-center px- border border-transparent text-sm leading-4 font-gilroy-semibold text-black dark:text-dark-txt dark:bg-dark-third bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300`}>
                    {account ? (
                      <>
                        {account.slice(0, 6)}...
                        {account.slice(-4)}
                      </>
                    ) : (
                      <></>
                    )}
                    <img
                      className="h-6 w-6 rounded-full text-gray-400 dark:text-white inline-flex ml-1.5 mx-1"
                      // src={my_user && my_user.picture}
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Popover.Button>
                  {popoverTransition()}
                </>
              )}
            </Popover>
          </>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                                        ${open ? "" : "text-opacity-90"}
                                        group inline-flex items-center rounded-xl mr-0.5 bg-rose-200 hover:bg-rose-300 px-3 py-2 text-sm font-gilroy-semibold text-rose-700 hover:text-rose-800 hover:text-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                  <span>Change Network</span>
                  <ChevronDownIcon
                    className={`${open ? "" : "text-opacity-70"}
                                            ml-2 h-5 w-5 text-rose-400 hover:text-rose-500 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1">
                  <Popover.Panel className="absolute left-2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-8 dark:bg-dark-third bg-white p-7">
                        <button
                          onClick={async () => {
                            await window.ethereum.request({
                              method: "wallet_switchEthereumChain",
                              params: [
                                {
                                  chainId: "0x1",
                                },
                              ], // chainId must be in hexadecimal numbers
                            });
                          }}
                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out dark:bg-dark-third bg-gray-50 dark:hover:bg-dark-main hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-50">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-gray-300 sm:h-12 sm:w-12">
                            <img
                              className="h-8 w-8 inline-flex mr-1"
                              src="https://bafybeibwzivmmcrtqb3ofqzagnal2xp7efe5uwqxvxtphf2fr4u7xbtecy.ipfs.dweb.link/ethereum.png"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-gilroy-medium dark:text-white text-gray-900">
                              Ethereum
                            </p>
                            <p className="text-sm text-gray-500">mainnet</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover>
      </div>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <NavLink
        to="/connect"
        className="bg-[#29e39c] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#119963] text-indigo-900 text-bold   motion-safe:animate-bounce">
        Acceder
      </NavLink>
    </Fragment>
  );

  return (
    <>
      <Helmet>
        <title>Carednewhope - </title>
        <meta
          name="description"
          content="Initial Page - kaufen und verkaufen Ntfs und coins Carednewhope"
        />
        <link rel="canonical" href="https://carednewhope.com" />
      </Helmet>

      {/* Top navigation */}
      <div className="bg-white dark:bg-dark-main ">
        <div className="max-w-7xl mx-auto h-11 px-4 flex items-center justify-between sm:px-6 lg:px-8 ">
          {/* Currency selector */}
          <form className="hidden lg:block lg:flex-1">
            <div className="flex">
              <i className="bx bx-phone mt-0.5 mr-1 text-gray-500 dark:text-dark-txt"></i>{" "}
              <span className="text-gray-500 dark:text-dark-txt text-xs font-gilroy-bold">
                +49 0163/82-60-784
              </span>
              <span
                className="h-6 w-px bg-gray-400 dark:bg-dark-third mx-2"
                aria-hidden="true"
              />
              <i className="bx bxl-gmail mt-0.5 mr-1 text-gray-500 dark:text-dark-txt"></i>{" "}
              <span className="text-gray-500 dark:text-dark-txt text-xs font-gilroy-bold">
                <a href="mailto: gottfugthinzu@gmail.com">
                  gottfugthinzu@gmail
                </a>
              </span>
            </div>
          </form>

          <p className="flex-1 text-center text-sm font-gilroy-medium text-white lg:flex-none"></p>

          <div className="flex lg:flex-1 lg:items-center lg:justify-end space-x-5">
            <a
              href="https://ethereum.org"
              target="_blank"
              className="text-sm font-gilroy-semibold text-gray-400 hover:text-blue-600">
              Ethereum
            </a>
            <a
              href="https://go.coinmama.com/visit/?bta=68123&brand=coinmama"
              target="_blank"
              className="text-sm font-gilroy-semibold text-gray-400 hover:text-blue-600">
              Kaufen
            </a>
            {social.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-gray-400 hover:text-blue-600 border px-1 rounded-full">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          {account ? authLinks : guestLinks}
        </div>
      </div>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-50 overflow-y-auto" : "",
            "bg-white dark:bg-dark-main border-t border-gray-200 dark:border-dark-third lg:static lg:overflow-y-visible"
          )
        }>
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <NavLink to="/">
                      {/* Dark Image */}
                      <img
                        src="https://res.cloudinary.com/jasaf77/image/upload/v1662358846/logo_lter4i.gif"
                        width={65}
                        height={25}
                        layout="fixed"
                        alt=""
                        className="dark:hidden  flex"
                      />
                      {/* White Image */}
                      <img
                        src="https://res.cloudinary.com/jasaf77/image/upload/v1662358846/logo_lter4i.gif"
                        width={65}
                        height={55}
                        layout="fixed"
                        alt=""
                        className="hidden md:hidden dark:flex"
                      />
                    </NavLink>
                    <button className="ml-1">
                      <DarkModeSwitch />
                    </button>
                    <NavLink
                      to="/datasets"
                      className="mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
                      Datensätze
                    </NavLink>
                  </div>
                </div>

                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6 ml-[60px]">
                  <div className="flex items-center px-6 py-4 md:max-w-md md:mx-auto lg:max-w-auto lg:mx-0 xl:px-0">
                    <form onSubmit={(e) => onSubmit(e)} className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Suche
                      </label>
                      <div className="relative">
                        <button
                          type="submit"
                          className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </button>
                        <input
                          id="search"
                          name="search"
                          required
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          className="block w-full font-gilroy-light bg-white dark:bg-dark-bg border dark:border-dark-bg border-gray-300 rounded-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Menu öffnen</span>
                    {open ? (
                      <XIcon
                        className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                        aria-hidden="true"
                      />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>

                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4 ml-[500px]">
                  <NavLink
                    to="/cursos"
                    className="mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
                    Kursen
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className="mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
                    Blog
                  </NavLink>
                  <NavLink
                    to="/servicios"
                    className="mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
                    Dienstleistungen
                  </NavLink>
                  <NavLink
                    to="/nosotros"
                    className="mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
                    Über Uns
                  </NavLink>
                  <NavLink
                    to="/contacto"
                    className="mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
                    Kontakt
                  </NavLink>
                  <NavLink
                    to="/NTF Market"
                    className="mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
                    NTF Market
                  </NavLink>
                  {/*                     
                    {
                      account ?
                      authLinks:guestLinks
                    } */}
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-gray-50",
                      "block rounded-md py-2 px-3 text-base font-gilroy-medium"
                    )}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}

const mapStateToProps = (state) => ({
  account: state.web3.account,
  ethereum_balance: state.web3.ethereum_balance,
  my_user: state.user.my_user
});

export default connect(mapStateToProps, {})(Navbar);
