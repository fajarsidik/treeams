const BannerHeader = () => {
  return (
    <div className="container-fluid mb-4">
      <div className="row">
        <div className="col-md-12">
          <div className="top-brand-name d-flex flex-column justify-content-between p-4">
            <div
              className="brand-title d-flex align-items-end"
              style={{ paddingTop: "100px" }}
            >
              <img src="https://picsum.photos/300" className="me-3" alt="" />
              <h1 className="mb-3">
                Hello, welcome to <br />
                [Brand Name] dashboard!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
