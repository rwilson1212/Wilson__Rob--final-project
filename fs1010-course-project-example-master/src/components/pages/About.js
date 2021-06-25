import React from 'react'
import CarouselComp from '../shared/carousel.js'
import { Container, Row, Col, Button, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'
import prhc from '../../assets/images/PRHCLogo.png'
import tchc from '../../assets/images/TCHCLogo.png'



const About = () => {
    return (
        <main className="containerMainLong">

        
        <div className="contentMainLong">
        
        <div className="containerCarousel">
            <CarouselComp />      
        </div>

        <div id="resume">   
        <hr className="mainHr" />  
        
        <div className="resumeSubContainer">
          <h2>Employment History</h2>
          <table>
            <tbody><tr>
                <td><img className="workLogo" src={prhc} height="115rem" /></td>
                <td><h4> Total Rewards, HR Systems and Reporting Lead - Human Resources – June 2020 – Present</h4></td>
              </tr>
            </tbody></table>
          <ul>
            <li>Provide guidance, supervision and work direction to the Total Rewards and HR Systems team, including HRIS and HR Specialists.</li>
            <li>Design and analyze Job Evaluation impact models to participate in union mediation.</li>
            <li>Participate in the development, implementation and delivery of policies, practices and procedures
              as they relate to HR systems and Compensation. Review existing programs and utilize compensation
              expertise to recommend options and enable effective business decisions with various stakeholders.</li>
            <li>Provide a range of human resources expertise, consultation and services in all aspects of
              compensation including salary recommendations, internal and external equity, job evaluation,</li>
            <li>Oversee and manage HRIS data and systems, including auditing, analyzing, retrieving and
              manipulating data. Manage the function of maintaining data integrity of HRIS information and
              managing interfaces with payroll, benefits, applicant tracking and outside providers.</li>
          </ul>
          <table>  
            <tbody><tr>
                <td><img className="workLogo" src={tchc} height="115rem" /></td>
                <td><h4>Compensation &amp; Workforce Analytics - Human Resources - December 2016 – May 2020</h4></td>
              </tr>
            </tbody></table>       
          <ul>
            <li>Provide guidance, supervision and work direction to the Compensation and Workforce Analytics
              team, including HRIS and Compensation Analysts.</li> 
            <li>Lead the annual processing cycle for all union and non-union salary increases and associated
              costings. Facilitate and oversee the analysis of all related compensation data, trends and forecasting
              (internal and external).</li>
            <li>Design and analyze financial models to participate in union negotiation costing analysis. Led the
              redesign of new wage grids for two separate bargaining units through the collective bargaining
              process.</li>
            <li>Participate in the development, implementation and delivery of policies, practices and procedures
              as they relate to compensation. Review existing programs and utilize compensation expertise to
              recommend options and enable effective business decisions with various stakeholders.</li> 
            <li>Successfully designed and implemented a new compensation placement framework for all
              Management and Exempt promotions and acting assignments at TCHC. Framework was developed
              to enhance retention and motivation for high performers. Supervise and approve all promotional
              salary reviews using this framework.</li>
            <li>Successfully led the implementation of a new job evaluation system for the CUPE 79 bargaining unit
              to achieve pay equity compliance.</li>
            <li>Provide a range of human resources expertise, consultation and services in all aspects of
              compensation including salary recommendations, internal and external equity, job evaluation, job
              design, pay equity, salary administration and the interpretation and application of compensation
              policies and programs.</li>
            <li>Oversee and manage HRIS data and systems, including auditing, analyzing, retrieving and
              manipulating data. Manage the function of maintaining data integrity of HRIS information and
              managing interfaces with payroll, benefits, applicant tracking and outside providers.</li> 
            <li>Successfully co-led the implementation of a new HRIS time and attendance/payroll system in 2017.
              Led the data migration, configuration, testing, and go-live process. Participated in and directed
              steering committee meetings with TCHC stakeholders.</li> 
            <li>Design and oversee the development of all required HR customized reports to support HR and
              internal client needs.</li>
            <li>Manage and facilitate the analysis of workforce trends, cost implications, potential risks,
              opportunities, and internal performance metrics.</li>
            <li>Responsible for overseeing and managing the audit and maintenance of HRIS data for completeness,
              accuracy and adherence to HR standards.</li>
          </ul>
          <h3>Technical Skills</h3>
          <ul>
            <li>HR Information Systems: experience with system implementations, designing and troubleshooting
              configurations, creating queries and reports, performing system validations.</li>
            <li>Microsoft Office: advanced skills with PowerPoint, Excel and Word. Experience using pivot tables,
              vlookups, arrays, macros, flat pivot tables, regression analysis.</li>
          </ul>
          <h3>Education</h3>
          <ul>
            <li>2011 - 2012 Post-Grad. Certificate, Human Resources Management
              - Humber College, Lakeshore</li>
            <li>2006 - 2010 Honours B.A, Criminology, Political Science
              - University of Toronto, St. George</li>
          </ul>
          <h4>Continuing Education</h4>
          <ul>
            <li>2021 Full Stack Development - York School of Continuing Studies</li>
          </ul>
          <br />
        </div>
      </div>
    );
        </div>
    </main>
    )
}

export default About