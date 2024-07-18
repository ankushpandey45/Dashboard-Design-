import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
const Icon = () => {
  return (
    <>
      <div className="icon-div">
        <div className="patient-div">
          <span>
            <img
              src="https://www.outsourcing-pharma.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/pharmaceutical-science/outsourcing-pharma.com/headlines/clinical-development/survey-on-patients-and-trial-participants-voices/10748462-1-eng-GB/Survey-on-patients-and-trial-participants-voices.jpg"
              alt="ankush"
              className="rounded-patients me-2"
            />
          </span>
          <span>
            <h6 className="icon-h">3,256</h6>
            <p className="icon-para">Total Patients</p>
          </span>
          <FontAwesomeIcon icon={faEllipsis} className="ellipsis-icon" />
        </div>
        <div className="patient-div">
          <span>
            <img
              src="https://buddypunch.com/wp-content/uploads/2018/09/Buddy-Punch-Using-Employee-Forms-1080x675.png-1.webp"
              alt="ankush"
              className="rounded-patients me-2"
            />
          </span>
          <span>
            <h6 className="icon-h">394</h6>
            <p className="icon-para">Available Staff</p>
          </span>
          <FontAwesomeIcon icon={faEllipsis} className="ellipsis-icon" />
        </div>
        <div className="patient-div">
          <span>
            <img
              src="https://i0.wp.com/www.planetcrust.com/wp-content/uploads/2021/03/Total-cost-of-ownership.png?resize=639%2C321&ssl=1"
              alt="ankush"
              className="rounded-patients me-2"
            />
          </span>
          <span>
            <h6 className="icon-h">$3,567</h6>
            <p className="icon-para">Treats Costs</p>
          </span>
          <FontAwesomeIcon icon={faEllipsis} className="ellipsis-icon" />
        </div>
        <div className="patient-div">
          <span>
            <img
              src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV700/10787/1705466588115/front-left-side-47.jpg"
              alt="ankush"
              className="rounded-patients me-2"
            />
          </span>
          <span>
            <h6 className="icon-h">40</h6>
            <p className="icon-para">Available Cars</p>
          </span>
          <FontAwesomeIcon icon={faEllipsis} className="ellipsis-icon" />
        </div>
      </div>
    </>
  );
};

export default Icon;
