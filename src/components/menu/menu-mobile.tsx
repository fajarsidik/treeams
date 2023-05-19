const MenuMobile = () => {
  return (
    <>
      <div id="sidenav-mobile" className="sidenav-mobile">
        <div className="box d-flex flex-column justify-content-between">
          <div className="top">
            <div className="brand-name mb-4">
              <div className="dropdown your-brand-name">
                <button
                  className="btn p-0 d-flex align-items-center w-100 justify-content-between"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h4 className="mb-0 mr-3">Your Brand Name</h4>
                  <i className="fa-solid fa-caret-down"></i>
                </button>
                <div className="dropdown-menu w-100">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <a href="#">
              <img src="@/images/sidebar-icons/Dashboard.png" alt="" />
              <span>Dashboard</span>
            </a>
            <a href="#">
              <img src="./images/sidebar-icons/Operations Library.png" alt="" />
              <span>Manuals Library</span>
            </a>
            <a href="#">
              <img src="./images/sidebar-icons/Training.png" alt="" />
              <span>Training</span>
            </a>
            <a href="#">
              <img src="./images/sidebar-icons/Audits.png" alt="" />
              <span>Audits</span>
            </a>
          </div>
        </div>
        <div className="close">
          <button className="btn">
            <i className=" fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div id="notif-mobile" className="notif-mobile">
        <div className="notif-title p-3">
          <h4>Notifications</h4>
          <div className="close">
            <a href="#">
              <i className="fa-solid fa-check-double"></i> Mark all as read
            </a>
            <button className="btn">
              <i className=" fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <div className="p-3">
          <div className="notif">
            <div className="photo-area">
              <div className="dot"></div>
              <img src="https://picsum.photos/100" alt="" />
            </div>
            <div className="text-area">
              <p>
                <strong>Wei Si</strong> assigned a new task{" "}
                <strong>Task Name</strong> to you.
              </p>
              <span>1 week ago</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
