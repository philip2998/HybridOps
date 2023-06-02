import protection from '../../assets/img/protection.jpg';

const ProtectionPicture = () => {
  return (
    <div className="prot-picture d-flex flex-wrap">
      <div className="row">
        <div className="col d-flex flex-wrap">
          <div className="opportunities w-100">
            <div className="opportunity-box h-100 d-flex flex-wrap">
              <div className="main-pic position-relative d-flex flex-wrap">
                <img
                  className="img-fluid d-flex flex-wrap rounded opacity-75"
                  src={protection}
                  alt="Protection"
                ></img>
                <div className="position-absolute opportunity-caption d-flex flex-wrap">
                  <div className="w-40 h-30 rounded py-4 px-4 d-flex flex-wrap">
                    <h1 className="fs-5 fw-bold w-100 d-flex flex-wrap">
                      We Are Open For Opportunities!
                    </h1>
                    <p className="fs-xs w-100 d-flex flex-wrap">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectionPicture;
