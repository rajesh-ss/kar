// packages imoprt
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Local imports
import doctor from "../../../assests/doctor.png";
import donor from "../../../assests/donor.png";
import hospital from "../../../assests/hospital.png";
import classes from "./Home.module.css";



const Home = (props) => {
    return (
        <Fragment>
            <div className={classes['outer-cont']}>
                <div className="row">
                    <div className={`col-lg ${classes['cont-one']}`}>
                        <div className={` ${classes['box']}`}>
                            <h3>Hospital</h3>
                            <img src={doctor} alt='docter img' />
                            <div>
                                <Link to='/hospital/login'>
                                    <button>login</button>
                                </Link>
                                <Link to='/hospital/register'>
                                    <button>signup</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg ${classes['cont-two']}`}>
                        <div className={` ${classes['box']}`}>
                            <h3>Donor</h3>
                            <img src={donor} alt='donor img' />
                            <div>
                                <Link to='/donor/login'>
                                    <button>login</button>
                                </Link>
                                <Link to='/donor/register'>
                                    <button>signup</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg ${classes['cont-three']}`}>
                        <div className={` ${classes['box']}`}>
                            <h3>Blood Bank</h3>
                            <img src={hospital} alt='blood bank img' />
                            <div>
                                <Link to='/bloodBank/login'>
                                    <button>login</button>
                                </Link>
                                <Link to='/bloodBank/register'>
                                    <button>signup</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes['dis-det']}>
                <h3>WHY SHOULD I DONATE ?</h3>
                <p>Nearly 5 lakh people die a year due to organ
                    scarcityAround 2 lakh people die of liver disease, 50,000 die from heart disease,
                    1,50,000 people await a kidney transplant but only 5,000 get one.
                    Each day, 17 people die waiting for a life-saving organ transplant.
                    New name is added to the transplant waiting list every 9 minutes.
                    Currently, there are more than 100,000 people waiting for a second
                    chance.
                </p>
                <p>Nearly 12,000 individuals die every day due to
                    lack of quality blood
                </p>
                <p>India's annual blood requirement is around 1.5 crore units.
                    In every two seconds, a patient in India needs blood and one
                    out of every three people will need blood in their lifetime.
                    A person has five to six liters of blood in his or her body
                    and can donate blood every 90 days.
                </p>
            </div>
            <div className={classes['dis-det']}>
                <h3>IMPORTANCE</h3>
                <p>
                    <span>No Substitute for Blood :</span>  Despite advances in medical science,
                    there is no substitute for human blood. Blood can only be obtained
                    from donors, making blood donation a critical part of healthcare.<br />
                </p>
                <p>
                    <span>Easy and Safe Process :</span>  Blood donation is a safe and easy process
                    that can be completed in about an hour. Donors are screened for
                    eligibility, and the process is supervised by trained medical professionals.<br />
                </p>
                <p>
                    <span>Community Responsibility :</span> Blood donation is a community responsibility.
                    It is a way for people to come together and support one another by
                    providing a critical resource that is essential for healthcare.<br />
                </p>
                <p>
                    <span>Improved Health :</span> Donating blood can have health benefits for the
                    donor, such as reducing the risk of heart disease and stroke by
                    lowering blood viscosity. <br />
                </p>
                <p>   <span>Cost-Effective :</span> Blood donation is
                    cost-effective compared to the cost of providing blood products
                    to patients who need them. By donating blood, donors can help
                    reduce the cost of healthcare for themselves and their community.<br />
                </p>
                <p>
                    <span>Honoring a loved one's legacy :</span> For families of donors,
                    organ donation can be a way to honor the legacy of a loved one and help others.
                    Knowing that their loved one's organs have helped to save lives can bring a sense
                    of comfort and closure.<br />
                </p>
                <p>    <span>Supporting medical research :</span> In addition to transplantation, donated
                    organs can also be used for medical research, helping to advance our understanding
                    of diseases and develop new treatments.
                </p>

            </div>
        </Fragment>
    );
}

export default Home;