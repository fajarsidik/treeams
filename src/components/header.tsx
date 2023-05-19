import { HeaderMenu } from "../types/header";

interface HeaderProps {
  handleSelect?: () => void;
  handleSelectUserSetting?: () => void;
  handleSelectBrand?: () => void;
  handleShowMenu?: () => void;
  isSettingShow?: boolean;
  isUserSettingShow?: boolean;
  headerMenu?: HeaderMenu[];
  userMenu?: HeaderMenu[];
  currentBrand?: string;
}

const HeaderBar = (
  {
    handleSelect = () => {},
    handleSelectUserSetting = () => {},
    handleSelectBrand = () => { },
    handleShowMenu = () => {},
    currentBrand = "Your Brand Name",
    isSettingShow = false,
    isUserSettingShow = false,
    headerMenu = [],
    userMenu = [],
  }: HeaderProps,
  ...props: any
) => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top d-none d-md-flex align-items-center pt-2">
        <a href="#" className="hamburger" id="open-hamburger" onClick={handleShowMenu}>
          <svg
            width="21"
            height="13"
            viewBox="0 0 21 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.440918 1.74219H20.4409"
              stroke="#5D6E82"
              stroke-width="2"
            />
            <path
              d="M0.440918 6.74219H20.4409"
              stroke="#5D6E82"
              stroke-width="2"
            />
            <path
              d="M0.440918 11.7422H20.4409"
              stroke="#5D6E82"
              stroke-width="2"
            />
          </svg>
        </a>
        <div className={"main-area"}>
          <div className={"container-fluid"}>
            <div className={"row"}>
              <div className={"col-md-6 p-0 d-flex align-items-center"}>
                <div className={"dropdown your-brand-name"}>
                  <button
                    className={"btn p-0 d-flex align-items-center"}
                    type={"button"}
                    data-toggle={"dropdown"}
                    aria-expanded={"false"}
                    onClick={handleSelect}
                  >
                    <h4 className={"mb-0 me-3"}>{currentBrand}</h4>
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.486039 1.35866C0.720449 1.12432 1.03833 0.992676 1.36979 0.992676C1.70124 0.992676 2.01913 1.12432 2.25354 1.35866L8.44104 7.54616L14.6285 1.35866C14.8643 1.13096 15.18 1.00497 15.5078 1.00782C15.8355 1.01066 16.1491 1.14213 16.3808 1.37389C16.6126 1.60565 16.744 1.91916 16.7469 2.24691C16.7497 2.57465 16.6237 2.89041 16.396 3.12616L9.32479 10.1974C9.09038 10.4317 8.77249 10.5634 8.44104 10.5634C8.10958 10.5634 7.7917 10.4317 7.55729 10.1974L0.486039 3.12616C0.2517 2.89175 0.120056 2.57386 0.120056 2.24241C0.120056 1.91095 0.2517 1.59307 0.486039 1.35866Z"
                        fill="#344050"
                      />
                    </svg>
                  </button>
                  <div
                    className={`dropdown-menu dropdown-menu-end ${
                      isSettingShow ? "show" : ""
                    }`}
                  >
                    {headerMenu &&
                      headerMenu.map((item) => (
                        <a
                          className={"dropdown-item"}
                          href={item.url}
                          onClick={handleSelectBrand}
                        >
                          {item.name}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                <div className="dropdown brand-name-dropdown ">
                  <a
                    className="dropdown-toggle d-flex align-items-center"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={handleSelectUserSetting}
                  >
                    <img
                      src="https://picsum.photos/100"
                      className="me-2"
                      alt=""
                    />
                    <p>
                      Neyna Rahmadhani <span>(Brand Owner)</span>
                    </p>
                  </a>

                  <div
                    className={`dropdown-menu dropdown-menu-end ${
                      isUserSettingShow ? "show" : ""
                    } `}
                    aria-labelledby="dropdownMenuLink"
                  >
                    {userMenu &&
                      userMenu.map((item) => (
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleSelectUserSetting}
                        >
                          {item.name}
                        </a>
                      ))}

                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {props.children}
    </header>
  );
};

export default HeaderBar;
