import React from "react";
import {AiOutlineUpload} from "react-icons/ai"

const Form = () => {
  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="row padding-10">
            <div
              className="col-lg-8 z-index-10 banner-details"
              data-offset-top-md="-60"
              style={{background:'none'}}
            ></div>
            <div className="col-lg-4 pr-lg-5 z-index-10 banner-form" id="start">
              <div
                className="bg-white rounded px-4 py-4 shadow-v2 text-center wow zoomIn"
                style={{ visibility: 'visible', animationName: 'zoomIn' }}
              >
                <h5 className="mb-3 text-primary">ENQUIRE NOW </h5>
                <form
                  method="post"
                  action="Process.php"
                  id="ContactForm"
                  className="pt-3"
                  onSubmit="en.disabled = true; return true;"
                >
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Patient Full Name  * "
                    required
                    id="name"
                    name="name"
                  />
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email * "
                    required
                    id="email"
                    name="email"
                  />
                  <div className="loc1" style={{width:"100%"}}>
                    <div>
                      <select
                        name="countryCode"
                        id=""
                        required=""
                        style={{ width: '35%', float: 'left', paddingLeft: '10px' }}
                      >
                        <option value="44" selected="">
                          Norway (+47)
                        </option>
                        <option value="1">UK (+44)</option>

                        <option value="213">Algeria (+213)</option>
                        <option value="376">Andorra (+376)</option>
                        <option value="244">Angola (+244)</option>
                        <option value="1264">Anguilla (+1264)</option>
                        <option value="1268">
                          Antigua &amp; Barbuda (+1268)
                        </option>
                        <option value="54">Argentina (+54)</option>
                        <option value="374">Armenia (+374)</option>
                        <option value="297">Aruba (+297)</option>
                        <option value="61">Australia (+61)</option>
                        <option value="43">Austria (+43)</option>
                        <option value="994">Azerbaijan (+994)</option>
                        <option value="1242">Bahamas (+1242)</option>
                        <option value="973">Bahrain (+973)</option>
                        <option value="880">Bangladesh (+880)</option>
                        <option value="1246">Barbados (+1246)</option>
                        <option value="375">Belarus (+375)</option>
                        <option value="32">Belgium (+32)</option>
                        <option value="501">Belize (+501)</option>
                        <option value="229">Benin (+229)</option>
                        <option value="1441">Bermuda (+1441)</option>
                        <option value="975">Bhutan (+975)</option>
                        <option value="591">Bolivia (+591)</option>
                        <option value="387">Bosnia Herzegovina (+387)</option>
                        <option value="267">Botswana (+267)</option>
                        <option value="55">Brazil (+55)</option>
                        <option value="673">Brunei (+673)</option>
                        <option value="359">Bulgaria (+359)</option>
                        <option value="226">Burkina Faso (+226)</option>
                        <option value="257">Burundi (+257)</option>
                        <option value="855">Cambodia (+855)</option>
                      </select>
                      <div
                        className="phone-icon"
                        style={{ position: 'relative', float: 'left', width: '65%' }}
                      >
                        <input
                          type="tel"
                          className="form-control mb-3"
                          placeholder="Phone * "
                          required
                          id="phone"
                          name="phone"
                          maxLength="10"
                        />
                      </div>
                    </div>
                  </div>

                  <textarea
                    className="box-now1"
                    type="textarea"
                    name="query"
                    id="query"
                    placeholder="Your Query"
                    rows="2"
                    style={{ 
                        height: '80px',
                        width: '100%',
                        border: '1px solid #e4e4e7',
                        fontSize: '14px',
                        paddingLeft: '20px',
                        paddingTop: '10px',
                        borderRadius: '.25rem'
                      }}
                  ></textarea>

                  <div className="loc" style={{width:"100%", paddingTop:'12px'}}>
                    <div
                      className="upload-btn-wrapper box-now1"
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        
                      }}
                    >
                      <button
                        className="btn1"
                        style={{background:"#fff" ,color:"#444" }}
                      >
                        {/* <img
                          src="./x-u.png"
                          className="img-fluid"
                          alt=""
                          style={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            
                          }}
                        />{" "} */}
                        <AiOutlineUpload  />
                        &nbsp; Upload report
                      </button>
                      <input type="file" name="file" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <button
                        className="btn btn-lg btn-apply btn-inline-block btnh mt-3 px-5"
                        type="submit"
                        name="en"
                        id="requestInfo2"
                        style={{minWidth:"100%"}}
                      >
                        Submit Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
