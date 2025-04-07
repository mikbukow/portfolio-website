import './Experience.css';
import { Card } from '../components/Card';
import PlayStation from '../assets/playstation.png';
import Cisco from '../assets/cisco.png';
import RPI from '../assets/rpi.webp';

export default function Experience() {
    return (
        <div className='experience'>
            <h1>Experience</h1>
            <div className='experience-container'>
                <h2 className='experience-title'>Professional Experience</h2>
                <div className='experience-cards'>
                    <Card>
                        <img src={PlayStation} /> 
                        <h2>PlayStation (SIE)</h2>
                        <h3>Software Engineer - San Francisco, CA</h3>
                        <h4>September 2022 - Present</h4>
                        <p>Designed and implemented a web-based automation framework from scratch using Python, PyTest, and Playwright; integrated plugins for third-party tools such as qTest and Applitools for enhanced test execution and reporting.</p>
                        <p>Dockerized the QA environment, enabling developers to run tests seamlessly without the need for manual dependency installation or complex configuration setups. </p>
                        <p>Maintained and enhanced the existing automation framework to test PlayStation 5’s Home and Library Console Applications, while adhering to the Page Object Model to ensure consistent test coverage and product quality.</p>
                        <p>Contributed to a common library used by QE engineers across the organization to build and scale their own test automation frameworks.</p>
                        <p>Integrated Jenkins CI/CD pipeline with Git to automatically trigger sanity and smoke builds on pull requests and run nightly regression test suites </p>
                        <p>Automated testing the functionality of JS modules written in TypeScript with Javascript and Jest</p>
                        <p>Lead all testing efforts for major and minor releases, including functional, longevity, stress, localization, accessibility, app dependency, performance, and telemetry testing.</p>
                    </Card>
                    <Card>
                        <img src={Cisco} />
                        <h2>Cisco Systems</h2>
                        <h3>Software Engineer - San Jose, CA</h3>
                        <h4>July 2020 - August 2022</h4>
                        <p>Created and maintained automation frameworks as well as utilized scripting languages such as Python to automate feature test scripts for the pre-release software of Cisco’s SDA web application </p>
                        <p>Tested and automated Rest API’s, network traffic flows and Cisco Cat9k switching device side triggers for each new feature release</p>
                        <p>Worked on a scrum methodology using CDETS and Jira for defect tracking as well as collaborated with developers to follow up on and verify defects and issues</p>
                        <p>Followed protocol for defect tracking and reporting, which included logging bugs in a detailed and reproducible way and provide relevant error logs and screenshots/recordings</p>
                        <p>Designed and implemented automation framework to maintain the data integrity and validity of Microsoft Power BI dashboards by using Python and query languages such as DAX and PSQL </p>
                    </Card>
                    <Card>
                        <img src={Cisco} />
                        <h2>Cisco Systems</h2>
                        <h3>Software Engineering Intern - Durham, NC</h3>
                        <h4>May 2019 - August 2019</h4>
                        <p>Assisted on the ETL process from Teradata to Postgres within the CCFS organization </p>
                        <p>Utilized the Python packages sqlalchemy and teradatasql to extract data from Teradata and load it onto Postgres </p>
                        <p>Designed a program to preserve the integrity of the data after it was transformed </p>
                        <p>Led and organized weekly meetings where interns learned to improve presentation skills </p>
                    </Card>
                </div>
                <h2 className='experience-title'> Education </h2>
                <div className='experience-cards'>
                    <Card>
                        <h2>Rensselear Polytechnic Institute</h2>
                        <img src={RPI} />
                        <h5>B.S in Computer Science</h5>
                        <h5>Graduation: May 2020</h5>
                        <h5>Graduated Cum Laude</h5>
                    </Card>
                </div>
            </div>
        </div>
    );
}