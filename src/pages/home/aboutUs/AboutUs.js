
import React, { Fragment } from 'react';
import classes from "./AboutUs.module.css";





const AboutUs = () => {
  return (
    <Fragment>
      {/* {
        4.	Recipient registration : The system should have a mechanism for registering potential organ recipients. The registration process should capture the relevant medical data and prioritize the recipients based on the NOTTO guidelines.
        5.	Allocation and distribution : The system should have a transparent and objective mechanism for allocating and distributing organs to potential recipients. The allocation should be based on the medical urgency, compatibility, waiting time, and geographic location of the recipients. The system should also ensure that the distribution is fair and equitable.
        6.	Reporting and monitoring : The system should generate regular reports on the organ donation and transplantation activities. The reports should provide insights into the donor and recipient profiles, waiting lists, and outcomes. The system should also have a mechanism for monitoring and addressing any discrepancies or irregularities.
      } */}
      <div className={classes['dis-det']}>
        <h3>ORGAN DONATION GUIDELINES WE FOLLOW</h3>
        <p>To create a system that handles organ donation and
          distribution in accordance with NOTTO's guidelines,
          the following aspects should be considered:
        </p>
        <p>
          <span>1. Legal framework :</span>
          The organ donation and transplantation process in
          India is governed by a set of legal regulations
          and guidelines. It is important to comply with these
          regulations and guidelines while creating the system.
          The Transplantation of Human Organs and Tissues Act,
          1994 and its amendments, and the rules issued by the
          Ministry of Health and Family Welfare, provide the legal
          framework for organ donation and transplantation in India.
        </p>
        <p>
          <span>2. Data security :</span>
          Organ donation and transplantation involve the collection
          and processing of sensitive medical and personal data.
          The system should ensure the security and confidentiality
          of the data by using appropriate encryption and access controls.
        </p>
        <p>
          <span>3. Donor registration </span>
          The system should have a mechanism for registering potential organ donors.
          The registration process should be easy, user-friendly, and secure.
          The donors should be able to provide their consent and specify their
          organ donation preferences.

        </p>
        <p>
          <span>4. Recipient registration :</span>
          The system should have a mechanism for registering potential
          organ recipients. The registration process should capture the
          relevant medical data and prioritize the recipients based on the
          NOTTO guidelines.

        </p>
        <p>
          <span>5. Allocation and distribution :</span>
          The system should have a transparent and objective
          mechanism for allocating and distributing organs to potential
          recipients. The allocation should be based on the medical urgency,
          compatibility, waiting time, and geographic location of the recipients.
          The system should also ensure that the distribution is fair and equitable.
        </p>

        <p>
          <span>6. Reporting and monitoring :</span>
          The system should generate regular reports
          on the organ donation and transplantation activities.
          The reports should provide insights into the donor and
          recipient profiles, waiting lists, and outcomes.
          The system should also have a mechanism for monitoring
          and addressing any discrepancies or irregularities.
        </p>
      </div>

      <div className={classes['dis-det']}>
        <h3>BLOOD DONATION GUIDELINES WE FOLLOW</h3>
        <p>The National Blood Transfusion Council (NBTC)
          and State Blood Transfusion Councils (SBTCs) in 
          India have established standards for the collection,
          processing, storage, and distribution of blood and 
          blood products. These standards are designed to ensure
          the safety and quality of blood and blood products for
          use in transfusion.
        </p>
        <p>
          <span>1. Collection :</span>
          Blood should be collected only 
          from voluntary, non-remunerated blood donors.
           The donor should be screened for any infections, 
           medical conditions, and risk factors that could 
           affect the safety of the blood. The collection process 
           should follow strict protocols to minimize the risk of 
          contamination and ensure the integrity of the blood.
        </p>
        <p>
          <span>2. Processing :</span>
          Once collected, the blood should be processed in a 
          designated laboratory under controlled conditions. 
          This includes separating the blood into its various 
          components (red blood cells, plasma, platelets) 
          and performing tests to detect any infectious agents or 
          other abnormalities.
        </p>
        <p>
          <span>3. Storage :</span>
          Blood and blood components should be stored
           under controlled conditions to maintain their 
           integrity and prevent contamination. 
          This includes proper temperature control, labeling,
           and tracking of the blood products.
        </p>
        <p>
          <span>4. Distribution :</span>
          Blood and blood products should be distributed to hospitals
           and clinics in a timely and efficient manner to ensure that 
           they are available when needed. The distribution process 
           should follow strict protocols to ensure the traceability 
           and safety of the blood products. In addition to these standards,
            NBTC and SBTCs also have guidelines for the use of blood and blood 
            products in transfusions. These guidelines include criteria for 
            selecting the appropriate blood product for a patient, 
            as well as procedures for administering the blood product 
            and monitoring the patient's response. Overall, the standards 
            established by NBTC and SBTCs are designed to ensure the safety
             and quality of blood and blood products for use in transfusion,
              and to minimize the risk of adverse reactions or other complications.
        </p>
      </div>


    </Fragment>
  )
}

export default AboutUs;
