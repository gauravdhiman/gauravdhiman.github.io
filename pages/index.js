import Head from 'next/head'
const discussion_im_url = "https://discussion-im.herokuapp.com"

const Home = () => (
    <div>
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-6297967-3"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                {/* function gtag() {
          window.dataLayer.push(arguments)
        } */}
                window.dataLayer.push(['js', new Date()])
                window.dataLayer.push(['config', 'UA-6297967-3'])
                {/* gtag('js', new Date());

        gtag('config', 'UA-6297967-3'); */}
            </script>

            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            <link rel="shortcut icon" href="assets/images/dsc-260-98x65.jpeg" type="image/x-icon" />
            <meta name="description" content="Personal website of technology leader with multiple years of software industry experience in web, mobile, big-data and machine learning space." />
            <meta name="fo-verify" content="6b09b4d0-cd16-46b0-9c4a-de8c165521c8"></meta>

            <title>Gaurav Dhiman - Technology leader with 20+ experience.</title>
            <link rel="stylesheet" href="assets/web/assets/mobirise-icons-bold/mobirise-icons-bold.css" />
            <link rel="stylesheet" href="assets/web/assets/mobirise-icons/mobirise-icons.css" />
            <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
            <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-grid.min.css" />
            <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-reboot.min.css" />
            <link rel="stylesheet" href="assets/dropdown/css/style.css" />
            <link rel="stylesheet" href="assets/as-pie-progress/css/progress.min.css" />
            <link rel="stylesheet" href="assets/tether/tether.min.css" />
            <link rel="stylesheet" href="assets/datatables/data-tables.bootstrap4.min.css" />
            <link rel="stylesheet" href="assets/socicon/css/styles.css" />
            <link rel="stylesheet" href="assets/theme/css/style.css" />
            <link rel="stylesheet" href="assets/gallery/style.css" />
            <link rel="preload" as="style" href="assets/mobirise/css/mbr-additional.css" />
            <link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css" />

        </Head>


        <body>
            <section class="menu cid-qTkzRZLJNu" once="menu" id="menu1-0">

                <nav class="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div class="hamburger">
                            <span>
                            </span>
                            <span>
                            </span>
                            <span>
                            </span>
                            <span>
                            </span>
                        </div>
                    </button>
                    <div class="menu-logo">
                        <div class="navbar-brand">
                            <span class="navbar-logo">
                                <a href="https://gaurav-dhiman.com">
                                    <img src="assets/images/dsc-260-98x65.jpeg" alt="Gaurav Dhiman" title="Gaurav Dhiman" />
                                </a>
                            </span>
                            <span class="navbar-caption-wrap">
                                <a class="navbar-caption text-white display-5" href="https://gaurav-dhiman.com">
                                    Gaurav Dhiman</a>
                            </span>
                        </div>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <div class="navbar-buttons mbr-section-btn">
                            <a class="btn btn-sm btn-primary display-4" href="https://blog.gaurav-dhiman.com" target="_blank">
                                <span class="mbri-edit mbr-iconfont mbr-iconfont-btn ">
                                </span>
                                MY BLOG
                            </a>
                            <a class="btn btn-sm btn-primary display-4" href="assets/files/gaurav-dhiman-resume.pdf" target="_blank">
                                <span class="mbri-save mbr-iconfont mbr-iconfont-btn ">
                                </span>
                                Resume
                            </a>
                        </div>
                    </div>
                </nav>
            </section>

            {/* <section class="engine">
        <a href="https://mobirise.info/v">html templates</a>
      </section> */}
            <section class="header9 cid-rUA45ilrql mbr-fullscreen mbr-parallax-background" id="header9-4">
                <div class="mbr-overlay">
                </div>

                <div class="container">
                    <div class="media-container-column mbr-white col-lg-8 col-md-10">
                        <h1 class="mbr-section-title align-left mbr-bold pb-3 mbr-fonts-style display-1">
                            Hands-on Technology Leader</h1>
                        <h3 class="mbr-section-subtitle align-left mbr-light pb-3 mbr-fonts-style display-2">
                            with 20+ years experience&nbsp;</h3>
                        <p class="mbr-text align-left pb-3 mbr-fonts-style display-5">Thanks for visiting my website. I am a software professional with extensive experience in leading tech initiatives and teams related to web, mobile and big-data applications for industry leading companies. Feel free to explore my website and social profiles to know more about me.</p>
                        <div class="mbr-section-btn align-left">
                            <a class="btn btn-md btn-primary display-4" href="https://blog.gaurav-dhiman.com" target="_blank">MY BLOG</a>
                            <a class="btn btn-md btn-black-outline display-4" href="assets/files/gaurav-dhiman-resume.pdf" target="_blank">RESUME</a>
                        </div>
                    </div>
                </div>

                <div class="mbr-arrow hidden-sm-down" aria-hidden="true">
                    <a href="#next">
                        <i class="mbri-down mbr-iconfont">
                        </i>
                    </a>
                </div>
            </section>

            <a id="next" />
            <section class="testimonials3 cid-rUGdmmDuMx" id="testimonials3-c">
                <div class="container">
                    <div class="media-container-row">
                        <div class="media-content px-3 align-self-center mbr-white py-2">
                            <p class="mbr-text testimonial-text mbr-fonts-style display-7">
                                I feel fortunate to get opportunities throughout my career to work in different domains of the software industry, ranging from kernel development in my initial years of career to semiconductor design to technical pre-sales to scalable web / hybrid apps and then to big-data processing space. I strongly believe this diverse experience gives me an ability to look at problems in hand from different perspectives and helps me be a better technology leader and decision maker.
                            </p>
                            <p class="mbr-author-name pt-4 mb-2 mbr-fonts-style display-7">
                                Gaurav Dhiman</p>
                            <p class="mbr-author-desc mbr-fonts-style display-7">
                                Technology Leader</p>
                        </div>

                        <div class="mbr-figure pl-lg-5">
                            <img title="" alt="" src="assets/images/p-20160509-83811-1162x654.jpeg" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="progress-bars3 cid-rUGd2yeESq" id="progress-bars3-b">
                <div class="container">
                    <h2 class="mbr-section-title pb-3 align-center mbr-fonts-style display-2">Experience Snapshot</h2>

                    <h3 class="mbr-section-subtitle mbr-fonts-style display-5">
                        Snapshot of what percent of my total experience I worked in different domains and technologies.
                    </h3>

                    <div class="media-container-row pt-5 mt-2">
                        <div class="card p-3 align-center">
                            <div class="wrap">
                                <div class="pie_progress progress1" role="progressbar" aria-valuenow="66" data-goal="66">
                                    <p class="pie_progress__number mbr-fonts-style display-5">66%</p>
                                    <div class="undefined"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" preserveAspectRatio="xMinYMin meet" version="1.1"><ellipse fill="none" stroke="#f2f2f2" stroke-width="8" cx="75" cy="75" rx="71" ry="71" /><path class="pei66" fill="none" stroke="url(#progress-bars3-b-svg-gradient)" stroke-width="8" d="M 75 4 A 71 71 0 1 1 15.0527 113.044" /></svg></div></div>
                            </div>
                            <div class="mbr-crt-title pt-3">
                                <h4 class="card-title py-2 mbr-fonts-style display-5">Technology Leadership</h4>
                            </div>
                        </div>

                        <div class="card p-3 align-center">
                            <div class="wrap">
                                <div class="pie_progress progress2" role="progressbar" aria-valuenow="50" data-goal="50">
                                    <p class="pie_progress__number mbr-fonts-style display-5">50%</p>
                                    <div class="undefined"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" preserveAspectRatio="xMinYMin meet" version="1.1"><ellipse fill="none" stroke="#f2f2f2" stroke-width="8" cx="75" cy="75" rx="71" ry="71" /><path class="pie50" fill="none" stroke="url(#progress-bars3-b-svg-gradient)" stroke-width="8" d="M 75 4 A 71 71 0 0 1 75 146" /></svg></div></div>
                            </div>
                            <div class="mbr-crt-title pt-3">
                                <h4 class="card-title py-2 mbr-fonts-style display-5">Web &amp; Cross Platform Mobile Apps</h4>
                            </div>
                        </div>

                        <div class="card p-3 align-center">
                            <div class="wrap">
                                <div class="pie_progress progress3" role="progressbar" aria-valuenow="26" data-goal="26">
                                    <p class="pie_progress__number mbr-fonts-style display-5">26%</p>
                                    <div class="undefined"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" preserveAspectRatio="xMinYMin meet" version="1.1"><ellipse fill="none" stroke="#f2f2f2" stroke-width="8" cx="75" cy="75" rx="71" ry="71" /><path class="pie26" fill="none" stroke="url(#progress-bars3-b-svg-gradient)" stroke-width="8" d="M 75 4 A 71 71 0 0 1 145.86 79.4581" /></svg></div></div>
                            </div>
                            <div class="mbr-crt-title pt-3">
                                <h4 class="card-title py-2 mbr-fonts-style display-5">
                                    Big Data Apps</h4>
                            </div>
                        </div>

                        <div class="card p-3 align-center">
                            <div class="wrap">
                                <div class="pie_progress progress4" role="progressbar" aria-valuenow="20" data-goal="20">
                                    <p class="pie_progress__number mbr-fonts-style display-5">20%</p>
                                    <div class="undefined"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" preserveAspectRatio="xMinYMin meet" version="1.1"><ellipse fill="none" stroke="#f2f2f2" stroke-width="8" cx="75" cy="75" rx="71" ry="71" /><path class="pie20" fill="none" stroke="url(#progress-bars3-b-svg-gradient)" stroke-width="8" d="M 75 4 A 71 71 0 0 1 142.525 53.0598" /></svg></div></div>
                            </div>
                            <div class="mbr-crt-title pt-3">
                                <h4 class="card-title py-2 mbr-fonts-style display-5">Technical Presales</h4>
                            </div>
                        </div>

                        <div class="card p-3 align-center">
                            <div class="wrap">
                                <div class="pie_progress progress5" role="progressbar" aria-valuenow="22" data-goal="22">
                                    <p class="pie_progress__number mbr-fonts-style display-5">22%</p>
                                    <div class="undefined"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" preserveAspectRatio="xMinYMin meet" version="1.1"><ellipse fill="none" stroke="#f2f2f2" stroke-width="8" cx="75" cy="75" rx="71" ry="71" /><path class="pie22" fill="none" stroke="url(#progress-bars3-b-svg-gradient)" stroke-width="8" d="M 75 4 A 71 71 0 0 1 144.742 61.6959" /></svg></div></div>
                            </div>
                            <div class="mbr-crt-title pt-3">
                                <h4 class="card-title py-2 mbr-fonts-style display-5">Kernel Development</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="counters5 counters cid-rUAbaQVKMd" id="counters5-6">
                <div class="container pt-4 mt-2">
                    <h2 class="mbr-section-title pb-3 align-center mbr-fonts-style display-2">Key Skills</h2>

                    <div class="row justify-content-center">
                        <div class="cards-block">
                            <div class="cards-container">
                                <div class="card px-3 align-left col-12">
                                    <div class="panel-item p-4 d-flex">
                                        <div class="card-img pr-3">
                                            <h3 class="img-text d-flex align-items-center justify-content-center">1</h3>
                                        </div>
                                        <div class="card-text">
                                            <h4 class="mbr-content-title mbr-bold mbr-fonts-style display-7">Technical skills</h4>
                                            <p class="mbr-content-text mbr-fonts-style display-7">- Understanding of broader technology landscape across Web, Mobile, Cloud, IoT, Big-Data and ML space.<br />
                                                - Practioner of software development best practices like Agile &amp; iterative dev cycles, BDD, TDD, Code-Reviews (PRs), Automated CI/CD pipeline.<br />
                                                - Building solutions using event-driven microservices and cloud native architectures that are scalable using Docker and Kubernetes.<br />
                                                - Extensive experience with big data ETL and analytics applications based on PySpark and Hadoop technologies.<br />
                                                - Extensive experience with development and delivery of full-stack web and cross platform mobile applications.<br />
                                                - Hands-on with development technologies like Python, SQL/NoSQL DBs, PySpark, Pandas Hadoop, Hive, Kafka, NodeJS, ReactJS, Redux, C/C++, Linux/Unix.<br />
                                                - Hands on with testing frameworks like MochaJS, ChaiJS, SinonJS, Cypress, Behave (Cucumber), Pytest.<br />
                                                - Well versed with tools like Git, JIRA, NPM, PIP, Jenkins, Containers (Dockers), Kubernetes.<br />
                                                - Knowledge of Machine Learning (ML) landscape; Deep neural networks, Convolutional neural networks, Recurrent Neural networks, Re-enforcement learning, Keras, TesorFlow.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card px-3 align-left col-12">
                                    <div class="panel-item p-4 d-flex">
                                        <div class="card-img pr-3">
                                            <h3 class="img-text d-flex align-items-center justify-content-center">2</h3>
                                        </div>
                                        <div class="card-text">
                                            <h4 class="mbr-content-title mbr-bold mbr-fonts-style display-7">Leadership skills</h4>
                                            <p class="mbr-content-text mbr-fonts-style display-7">- Keeping up to date with latest technology trends and innovations.<br />
                                                - Leading initiatives for technology transformation - from old tech stack to latest tech stacks.<br />
                                                - Capturing business problems and leading teams to build and deliver customer focused technology solutions for the same.<br />
                                                - Aligning teams on technical achitecture across enterprise or business units to achieve larger business objectives.<br />
                                                - Managing, guiding and mentoring team members to achieve their long-term as well as short-term career goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="timeline1 cid-rUGx1HugoE" id="timeline1-d">
                <div class="container align-center">
                    <h2 class="mbr-section-title pb-3 mbr-fonts-style display-2">Professional Experience</h2>
                    <div class="container timelines-container" mbri-timelines="">
                        <div class="row timeline-element reverse separline">
                            <div class="timeline-date-panel col-xs-12 col-md-6  align-left">
                                <div class="time-line-date-content">
                                    <p class="mbr-timeline-date mbr-fonts-style display-5">Aug 2022 - till now</p>
                                </div>
                            </div>
                            <span class="iconBackground">
                            </span>
                            <div class="col-xs-12 col-md-6 align-right">
                                <div class="timeline-text-content">
                                    <h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-5">
                                        Senior Software Engineer
                                    </h4>
                                    <p class="mbr-timeline-text mbr-fonts-style display-7">
                                        <strong>@ <a href="https://www.meta.com" target="_blank">Meta</a> (originally <a href="https://www.facebook.com" target="_blank">Facebook.com</a>)</strong>
                                        <br />
                                        - Lead design and development of software products for Meta's Sales & Ads group. Lead and represent team in multi-team initiatives.<br />
                                        - Closely work with Cross-Functional (XFN) teams & technically lead business requirement discussions. Provide relevant suggestions.<br />
                                        - Design large scale, highly-available, low-latency & fault-tolerant distributed systems. Create system design documentations.<br />
                                        - Help team break down business requirements into actionable tasks and organize them.<br />
                                        - Write code and perform code reviews to ensure high code quality. Mentor & unblock engineers when required.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row timeline-element separline">
                            <div class="timeline-date-panel col-xs-12 col-md-6  align-left">
                                <div class="time-line-date-content">
                                    <p class="mbr-timeline-date mbr-fonts-style display-5">Jan 2021 - July 2022</p>
                                </div>
                            </div>
                            <span class="iconBackground">
                            </span>
                            <div class="col-xs-12 col-md-6 align-right">
                                <div class="timeline-text-content">
                                    <h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-5">
                                        Senior Architect
                                    </h4>
                                    <p class="mbr-timeline-text mbr-fonts-style display-7">
                                        <strong>@ <a href="https://www.pennymacusa.com" target="_blank"><strong>PennyMac Loan Services</strong></a></strong>
                                        <br />
                                        - Leading Analytics & Reporting team for loan processing system. Directing team towards adoption of big-data analytics.<br />
                                        - Driving effort towards transition of batch reports from DB stored procedures to Spark based processes, to off-load the DB workload and improve DB performance.<br />
                                        - Led and delivered an initiative to transition a batch loan processing pipeline report to real-time incremental Pandas based report, processing around 0.5 million events per hour using AWS lambdas.<br />
                                        - Hiring, mentoring and building teams of software engineers, software architects & managers to fulfill the resource needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row timeline-element reverse separline">
                            <div class="timeline-date-panel col-xs-12 col-md-6  align-left">
                                <div class="time-line-date-content">
                                    <p class="mbr-timeline-date mbr-fonts-style display-5">Jul 2014 - Jan 2021</p>
                                </div>
                            </div>
                            <span class="iconBackground">
                            </span>
                            <div class="col-xs-12 col-md-6 align-right">
                                <div class="timeline-text-content">
                                    <h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-5">
                                        Senior Engineering Manager / Senior Architect
                                    </h4>
                                    <p class="mbr-timeline-text mbr-fonts-style display-7">
                                        <strong>@ <a href="https://www.cognizant.com" target="_blank"><strong>Cognizant Technology Solutions</strong></a> (working with <a href="https://www.americanexpress.com" target="_blank"><strong>American Express</strong></a>)</strong>
                                        <br />
                                        - Technically lead teams to build customer facing web apps and big-data ETL pipelines in the Marketing group of American Expess. Portfolio's objective is to re-enage customer by sending relevant and personalized marketing emails to customers at right time.<br />
                                        - Customer facing web applications are built using technologies like NodeJS, NextJS, ReactJS, Redux and MongoDB.<br />
                                        - Backend big-data processing ETL pipeline is built using HIVE, Python, Spark (PySpark) and HBase technologies. This ETL pipeline is responsible for processing more than 100 million customer records per month for delivery of marketing emails to customers.<br />
                                        - Contribute to code development, pull requests (PR) reviews and unit as well as end-to-end cucumber tests.<br />
                                        - Motivate, mentor and drive the team members to achieve their respective delivery goals.<br />
                                        - Continuously review the development processes to ensure best practices are followed across teams for development, code reviews, testing and release cycles.<br />
                                        - Working with the product management teams to refine, align and implement the product roadmaps for these applications.<br />
                                        - Prepare the mid and long term architectural vision and align other teams in the email marketing ecosystem to achieve it.<br />
                                        - Participate in hiring process to build right team of engineers and senior engineers for Cognizant.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row timeline-element  separline">
                            <div class="timeline-date-panel col-xs-12 col-md-6 align-right">
                                <div class="time-line-date-content">
                                    <p class="mbr-timeline-date mbr-fonts-style display-5">Oct 2012 - Jun 2014</p>
                                </div>
                            </div>
                            <span class="iconBackground">
                            </span>
                            <div class="col-xs-12 col-md-6 align-left ">
                                <div class="timeline-text-content">
                                    <h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-5">Co-Founder &amp; Entreprenuer</h4>
                                    <p class="mbr-timeline-text mbr-fonts-style display-7">
                                        <strong>@ <a href="https://web.archive.org/web/20150823031746/http://www.techzulla.com/" target="_blank"><strong>S3 TechZulla Pvt. Ltd.</strong></a></strong>
                                        <br />
                                        - Started an entrepreneurial venture to build SaaS based e-commerce and travel solutions for small and medium enterprises (SMEs). Built a team from scratch and led it to develop three online software products - RetailEMall.com, DesignStudio and TravelCRM. Scaled up operations to around 80 customers. Media coverage on: <a href="https://yourstory.com/2013/06/if-ecommerce-is-the-space-you-are-interested-in-techzulla-can-help-you-set-up-shop" target="_blank">YourStory.com</a>, <a href="https://nextbigwhat.com/saas-startup-retailemall-enables-businesses-to-sell-digital-downloadable-files-with-multiple-currency-feature/" target="_blank">NextBigWhat.com</a><br />
                                        - RetailEMall was a cloud based SaaS solution for small and mid sized retailers to set up online stores in a few clicks. Reference link: <a href="https://web.archive.org/web/20150302160817/http:/retailemall.com/store/" target="_blank">RetailEMall.com</a><br />
                                        - DesignStudio was a web solution to build online stores for selling apparel with customized designs. Reference link: <a href="https://web.archive.org/web/20150827053731/http:/www.techzulla.com/design-studio/" target="_blank">DesignStudio</a><br />
                                        - TravelCRM was a web based solution originally developed for Travelopod.com and was later customized to sell to few other online travel agencies (OTAs). Reference link: <a href="https://web.archive.org/web/20160320174214/http:/www.techzulla.com/travelcrm/" target="_blank">TravelCRM</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row timeline-element reverse separline">
                            <div class="timeline-date-panel col-xs-12 col-md-6  align-left">
                                <div class="time-line-date-content">
                                    <p class="mbr-timeline-date mbr-fonts-style display-5">
                                        Aug 2011 - Aug 2012</p>
                                </div>
                            </div>
                            <span class="iconBackground">
                            </span>
                            <div class="col-xs-12 col-md-6 align-right">
                                <div class="timeline-text-content">
                                    <h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-5">Technical Architect</h4>
                                    <p class="mbr-timeline-text mbr-fonts-style display-7">
                                        <strong>@ <a href="https://www.infosys.com" target="_blank"><strong>Infosys Ltd.</strong></a></strong>
                                        <br />
                                        Worked as a Technical Architect for Capital Groups Companies (CGC) in the Cloud division of Infosys. I led design and architectural initiatives to move legacy applications from on-prem to hybrid cloud environment. Interviewed, hired and built the team from 2 engineers to 15 engineers for this initiative at India office.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row timeline-element  separline">
                            <div class="timeline-date-panel col-xs-12 col-md-6 align-right">
                                <div class="time-line-date-content">
                                    <p class="mbr-timeline-date mbr-fonts-style display-5">
                                        Oct 2008 - Jul 2012</p>
                                </div>
                            </div>
                            <span class="iconBackground">
                            </span>
                            <div class="col-xs-12 col-md-6 align-left ">
                                <div class="timeline-text-content">
                                    <h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-5">
                                        Technical Presales Manager</h4>
                                    <p class="mbr-timeline-text mbr-fonts-style display-7">
                                        <strong>@ <a href="https://in.nec.com/" target="_blank"><strong>NEC HCL System Technologies Ltd. (now NEC India)</strong></a></strong>
                                        <br />
                                        Started product presales unit for NEC Technologies from scratch. Grew a team from one solution engineer to 24 members. Managed the team to support NEC’s enterprise software sales team in India, Asia Pacific, Europe and US. My key responsibilities were:<br />
                                        <br />
                                        - Growing and managing a team of solution engineers in South East Asia for NEC’s Enterprise Software Group (ESG).<br />
                                        - Representing NEC and delivering tech-talks at trade shows, industry events &amp; marketing events.&nbsp;<br />
                                        - Enabling onsite sales teams across Asia-Pacific, Europe and North America with product trainings and marketing material.
                                        - Proposing Business Continuity &amp; IT Infra solutions to customers / global partners based on NEC IT Infrastructure software products like NEC’ <a href="https://www.nec.com/en/global/prod/expresscluster/index.html" target="_blank">ExpressCluster</a> (DR & BC solution) and <a href="https://www.nec.com/en/global/solutions/vpcc/index.html" target="_blank">Virtual PC Center</a> (Think client computing solution) and <a href="https://nectoday.com/tag/sphericall/" target="_blank">Sphericall</a> (Unified communication) suite of products along with virtualization software like VMware, Hyper-V, KVM etc. Used to closely work with software sales groups in NEC subsidiaries across the world.<br />
                                        - Providing market / customer feedback (feature improvements, new feature requests) to product teams in NEC Japan and ensuring high priority items get included in product roadmap.<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row timeline-element reverse separline">
                            <div class="timeline-date-panel col-xs-12 col-md-6  align-left">
                                <div class="time-line-date-content">
                                    <p class="mbr-timeline-date mbr-fonts-style display-5">
                                        Oct 2006 - Mar 2008</p>
                                </div>
                            </div>
                            <span class="iconBackground">
                            </span>
                            <div class="col-xs-12 col-md-6 align-right">
                                <div class="timeline-text-content">
                                    <h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-5">Technical Lead</h4>
                                    <p class="mbr-timeline-text mbr-fonts-style display-7">
                                        <strong>@ <a href="https://in.nec.com/" target="_blank"><strong>NEC HCL System Technologies Ltd. (now NEC India)</strong></a></strong>
                                        <br />
                                        Worked along with NEC’s core Linux kernel team in Japan to port OpenSolaris kernel on ARM platform for the infosystem that was planned to be installed in Toyota cars. Led a small team of three kernel engineers and one Japanese interpreter. Technologies used: C language, Assembly lnguage.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row timeline-element">
                            <div class="timeline-date-panel col-xs-12 col-md-6 align-right">
                                <div class="time-line-date-content">
                                    <p class="mbr-timeline-date mbr-fonts-style display-5">Sept 2002 - Oct 2006</p>
                                </div>
                            </div>
                            <span class="iconBackground">
                            </span>
                            <div class="col-xs-12 col-md-6 align-left ">
                                <div class="timeline-text-content">
                                    <h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-5">
                                        Software Engineer</h4>
                                    <p class="mbr-timeline-text mbr-fonts-style display-7">
                                        <strong>@ <a href="https://www.cadence.com/" target="_blank"><strong>Cadence Design Systems</strong></a></strong>
                                        <br />
                                        Worked as an engineer in product development team for Cadence’s RTL compiler (<a href="https://en.wikipedia.org/wiki/Logic_synthesis" target="_blank"><strong>logic synthesis</strong></a>) product. Cadence is the second largest <a href="https://en.wikipedia.org/wiki/Electronic_design_automation" target="_blank"><strong>EDA</strong></a> company in the world. Technologies used: C/C++, Linux, GDB.<br />
                                        <br />
                                        <strong>@ <a href="https://www.ca.com/" target="_blank"><strong>Computer Associates (now part of Broadcom)</strong></a></strong>
                                        <br />
                                        Worked as engineer for development of IAM (Identity and Access Management) suite of products. Technologies used: C/C++, Linux.<br />
                                        <br />
                                        <strong>@ <a href="https://www.hcltech.com/" target="_blank"><strong>HCL Technologies Ltd.</strong></a></strong>
                                        <br />
                                        Worked as an engineer on NCR Corporation’s project for ATM management software (Gasper). Technologies used: VBA, VB Script<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services5 cid-rUHdxCvBAh" id="services5-k">
                <div class="container">
                    <div class="row">
                        <div class="title pb-5 col-12">
                            <h2 class="align-left mbr-fonts-style m-0 display-2">
                                Education</h2>

                        </div>
                        <div class="card px-3 col-12">
                            <div class="card-wrapper media-container-row media-container-row">
                                <div class="card-box">
                                    <div class="top-line pb-3">
                                        <h4 class="card-title mbr-fonts-style display-5">
                                            Master of Computer Applications (MCA)</h4>
                                        <p class="mbr-text cost mbr-fonts-style m-0 display-5">1999 - 2002</p>
                                    </div>
                                    <div class="bottom-line">
                                        <p class="mbr-text mbr-fonts-style m-0 b-descr display-7">Panjab University, Chandigarh, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card px-3 col-12">
                            <div class="card-wrapper media-container-row media-container-row">
                                <div class="card-box">
                                    <div class="top-line pb-3">
                                        <h4 class="card-title mbr-fonts-style display-5">
                                            Bachelor Of Commerce (B.Com)</h4>
                                        <p class="mbr-text cost mbr-fonts-style m-0 display-5">1995 - 1998</p>
                                    </div>
                                    <div class="bottom-line">
                                        <p class="mbr-text mbr-fonts-style m-0 b-descr display-7">
                                            Kurukshetra University</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="section-table cid-rUGKfPPCp0" id="table1-e">
                <div class="container container-table">
                    <h2 class="mbr-section-title mbr-fonts-style align-center pb-3 display-2">
                        Personal Projects &amp; Blogs</h2>
                    <h3 class="mbr-section-subtitle mbr-fonts-style align-center pb-5 mbr-light display-5">
                        In my interest to keep myself abreast with new in technology, I try to build something quick and dirty.<br />
                        &nbsp;These are some sample apps that I built in my free time, just to have a feel of technology.</h3>
                    <div class="table-wrapper">
                        <div class="container">

                        </div>

                        <div class="container scroll">
                            <table class="table" cellspacing="0">
                                <thead>
                                    <tr class="table-heads ">
                                        <th class="head-item mbr-fonts-style display-7">
                                            Description</th>
                                        <th class="head-item mbr-fonts-style display-7">Hosted Link</th>
                                        <th class="head-item mbr-fonts-style display-7">Codebase</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td class="body-item mbr-fonts-style display-7">Built a <a href={discussion_im_url} target="_blank">real time discussion forum</a>, a Progressive Web App (PWA) that makes the online forums much fun to use. This app is built from scratch using <a href="https://material-ui.com/" target="_blank">MaterialUI</a> (ReactJS), <a href="https://redux.js.org/" target="_blank">Redux</a>, <a href="https://redux-orm.github.io/redux-orm/" target="_blank">Redux-ORM</a>,&nbsp;<a href="https://feathersjs.com/" target="_blank">FeathersJS</a> (Web-services) and <a href="https://nextjs.org/" target="_blank">NextJS </a>(SSR).</td>
                                        <td class="body-item mbr-fonts-style display-7">
                                            <a href={discussion_im_url} target="_blank">{discussion_im_url}</a>
                                        </td>
                                        <td class="body-item mbr-fonts-style display-7">
                                            <a href="https://bitbucket.org/gaurav-dhiman/discussion_im/src/master/" target="_blank">https://bitbucket.org/gaurav-dhiman/discussion_im/src/master/</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="body-item mbr-fonts-style display-7">A mobile app to push nearby offers to users, based on the user's interest and location. Users can set up the kind of offers they are interested in an app and then the app sends push notifications whenever the offer of given interest is published in a specific range of user’s location (geo-fencing). App is built using <a href="https://expo.io/" target="_blank">Expo</a> (React Native) and <a href="https://www.meteor.com/" target="_blank">MeteorJS</a>.</td>
                                        <td class="body-item mbr-fonts-style display-7">-NA-</td>
                                        <td class="body-item mbr-fonts-style display-7">
                                            <a href="https://bitbucket.org/gaurav-dhiman/push-notify-react-native-app/src/master/" target="_blank">https://bitbucket.org/gaurav-dhiman/push-notify-react-native-app/src/master/</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="body-item mbr-fonts-style display-7">
                                            <p>
                                                <a href="https://sailsjs.com/" target="_blank">
                                                </a>Sample project to demonstrate how to integrate <a href="https://angularjs.org/" target="_blank">AugularJS</a> with <a href="https://sailsjs.com/" target="_blank">SailsJS</a> and <a href="https://orientdb.com/" target="_blank">OrientDB</a> to build web app from scratch.</p>
                                        </td>
                                        <td class="body-item mbr-fonts-style display-7">-NA-</td>
                                        <td class="body-item mbr-fonts-style display-7">
                                            <a href="https://github.com/gauravdhiman/sailsjs-angularjs-orientdb-poc" target="_blank">https://github.com/gauravdhiman/sailsjs-angularjs-orientdb-poc</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="body-item mbr-fonts-style display-7">ORM Adaptor / library written to connect <a href="https://sailsjs.com/" target="_blank">SailsJS</a> (<a href="https://nodejs.org/en/" target="_blank">NodeJS</a> framework) with <a href="https://orientdb.com/" target="_blank">OrientDB </a>(Graph based DB). Made it open-source on NPM too.</td>
                                        <td class="body-item mbr-fonts-style display-7">
                                            <a href="https://www.npmjs.com/package/sails-orientdb-binary" target="_blank">https://www.npmjs.com/package/sails-orientdb-binary</a>
                                        </td>
                                        <td class="body-item mbr-fonts-style display-7">
                                            <a href="https://github.com/gauravdhiman/sails-orientdb-binary" target="_blank">https://github.com/gauravdhiman/sails-orientdb-binary</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="body-item mbr-fonts-style display-7">My blog about <a href="https://www.kernel.org/" target="_blank">Linux Kernel</a> Internals that I used to maintain long back when I was working in Linux Kernel space.</td>
                                        <td class="body-item mbr-fonts-style display-7">
                                            <a href="http://lkdp.blogspot.com/" target="_blank">http://lkdp.blogspot.com/</a>
                                        </td>
                                        <td class="body-item mbr-fonts-style display-7">-NA-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="container table-info-container"></div>
                    </div>
                </div>
            </section>

            <section class="mbr-section content4 cid-rUGRHTIxlI" id="content4-g">
                <div class="container">
                    <div class="media-container-row">
                        <div class="title col-12 col-md-8">
                            <h2 class="align-center pb-3 mbr-fonts-style display-2">My Personal Life</h2>
                            <h3 class="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5">
                                I am blessed and thank god to have a wonderful family and extended family who supports me in all ups and down of life.<br />
                                <br />
                                I have a beautiful and caring wife as well as two little packets of happiness (my daughters).<br />
                                <br />
                                In my free time, I love to be around kids and nature. I try to be a regular hiker on trails of Phoenix. I am a person who loves to do adventurous sports like long bike drives, camping trips and rafting etc. I would not say, I am fitness freak, but I like to have regular dose of excercise. Along with all this, I like listening to Punjabi, Hindi &amp; Bollywood songs.</h3>

                        </div>
                    </div>
                </div>
            </section>

            <section class="mbr-gallery mbr-slider-carousel cid-rUGRgoLLG2" id="gallery3-f">
                <div>
                    <div>
                        <div class="mbr-gallery-row">
                            <div class="mbr-gallery-layout-default">
                                <div>
                                    <div>
                                        <div class="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                                            <div href="#lb-gallery3-f" data-slide-to="0" data-toggle="modal">
                                                <img src="assets/images/p-20160513-133553-2000x1125-800x600.jpeg" alt="" title="" />
                                                <span class="icon-focus">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Responsive">
                                            <div href="#lb-gallery3-f" data-slide-to="1" data-toggle="modal">
                                                <img src="assets/images/img-20200116-142051-2000x1287-800x600.jpeg" alt="" title="" />
                                                <span class="icon-focus">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Creative">
                                            <div href="#lb-gallery3-f" data-slide-to="2" data-toggle="modal">
                                                <img src="assets/images/img-20190604-201853-2000x944-800x600.jpeg" alt="" title="" />
                                                <span class="icon-focus">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Animated">
                                            <div href="#lb-gallery3-f" data-slide-to="3" data-toggle="modal">
                                                <img src="assets/images/img-20190120-153013-2000x944-800x600.jpeg" alt="" title="" />
                                                <span class="icon-focus">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                                            <div href="#lb-gallery3-f" data-slide-to="4" data-toggle="modal">
                                                <img src="assets/images/nishi-20190503-131943-640x640-640x480.jpeg" alt="" title="" />
                                                <span class="icon-focus">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Awesome">
                                            <div href="#lb-gallery3-f" data-slide-to="5" data-toggle="modal">
                                                <img src="assets/images/img-20191226-154830-2000x944-800x600.jpeg" alt="" title="" />
                                                <span class="icon-focus">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Responsive">
                                            <div href="#lb-gallery3-f" data-slide-to="6" data-toggle="modal">
                                                <img src="assets/images/img-20200209-172553-2000x944-800x600.jpeg" alt="" title="" />
                                                <span class="icon-focus">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Animated">
                                            <div href="#lb-gallery3-f" data-slide-to="7" data-toggle="modal">
                                                <img src="assets/images/img-20190311-124953-2000x944-800x600.jpeg" alt="" title="" />
                                                <span class="icon-focus">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Animated">
                                            <div href="#lb-gallery3-f" data-slide-to="8" data-toggle="modal">
                                                <img src="assets/images/dsc-1080-2-2000x1333-800x533.jpg" alt="" title="" />
                                                <span class="icon-focus">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Animated">
                                            <div href="#lb-gallery3-f" data-slide-to="9" data-toggle="modal">
                                                <img src="assets/images/dsc-284-1620x1080-800x533.jpg" alt="" title="" />
                                                <span class="icon-focus">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Animated">
                                            <div href="#lb-gallery3-f" data-slide-to="10" data-toggle="modal">
                                                <img src="assets/images/dsc-401-1620x1080-800x533.jpg" alt="" title="" />
                                                <span class="icon-focus">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mbr-gallery-item mbr-gallery-item--p0" data-video-url="false" data-tags="Animated">
                                            <div href="#lb-gallery3-f" data-slide-to="11" data-toggle="modal">
                                                <img src="assets/images/dsc-0389-3-2000x1318-800x527.jpg" alt="" title="" />
                                                <span class="icon-focus">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix">
                                </div>
                            </div>
                        </div>
                        <div data-app-prevent-settings="" class="mbr-slider modal fade carousel slide" tabindex="-1" data-keyboard="true" data-interval="false" id="lb-gallery3-f">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <div class="carousel-inner">
                                            <div class="carousel-item">
                                                <img class="carousel-img" src="assets/images/p-20160513-133553-2000x1125.jpeg" alt="" title="" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="carousel-img" src="assets/images/img-20200116-142051-2000x1287.jpeg" alt="" title="" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="carousel-img" src="assets/images/img-20190604-201853-2000x944.jpeg" alt="" title="" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="carousel-img" src="assets/images/img-20190120-153013-2000x944.jpeg" alt="" title="" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="carousel-img" src="assets/images/nishi-20190503-131943-640x640.jpeg" alt="" title="" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="carousel-img" src="assets/images/img-20191226-154830-2000x944.jpeg" alt="" title="" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="carousel-img" src="assets/images/img-20200209-172553-2000x944.jpeg" alt="" title="" />
                                            </div>
                                            <div class="carousel-item active">
                                                <img class="carousel-img" src="assets/images/img-20190311-124953-2000x944.jpeg" alt="" title="" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="carousel-img" src="assets/images/dsc-1080-2-2000x1333.jpg" alt="" title="" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="carousel-img" src="assets/images/dsc-284-1620x1080.jpg" alt="" title="" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="carousel-img" src="assets/images/dsc-401-1620x1080.jpg" alt="" title="" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="carousel-img" src="assets/images/dsc-0389-3-2000x1318.jpg" alt="" title="" />
                                            </div>
                                        </div>
                                        <a class="carousel-control carousel-control-prev" role="button" data-slide="prev" href="#lb-gallery3-f">
                                            <span class="mbri-left mbr-iconfont" aria-hidden="true">
                                            </span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control carousel-control-next" role="button" data-slide="next" href="#lb-gallery3-f">
                                            <span class="mbri-right mbr-iconfont" aria-hidden="true">
                                            </span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                        <a class="close" href="#" role="button" data-dismiss="modal">
                                            <span class="sr-only">Close</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="cid-qTkAaeaxX5" id="footer1-2">
                <div class="container">
                    <div class="media-container-row content text-white">
                        <div class="col-12 col-md-3">
                            <div class="media-wrap">
                                <a href="https://gaurav-dhiman.com/">
                                    {/* <img src="assets/images/logo2.png" alt="Mobirise" /> */}
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 mbr-fonts-style display-7">
                            <h5 class="pb-3">
                                Address
                            </h5>
                            <p class="mbr-text">Lives in:<br />
                                Peoria, AZ, USA<br />
                                85383</p>
                        </div>
                        <div class="col-12 col-md-3 mbr-fonts-style display-7">
                            <h5 class="pb-3">
                                Contacts
                            </h5>
                            <p class="mbr-text">
                                Email: gauravd.chd@gmail.com &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br />
                                Phone: +1 &nbsp;(480) 494 6684 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br />
                            </p>
                        </div>
                        <div class="col-12 col-md-3 mbr-fonts-style display-7">
                            <h5 class="pb-3">
                                Links
                            </h5>
                            <p>
                                <a class="text-primary" href="assets/files/gaurav-dhiman-resume.pdf" target="_blank">Download my Resume</a>
                                <br />
                                <a class="text-primary" href={discussion_im_url} target="_blank">Real time discussion forum app</a>
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                    <div class="footer-lower">
                        <div class="media-container-row">
                            <div class="col-sm-12">
                                <hr />
                            </div>
                        </div>
                        <div class="media-container-row mbr-white">
                            <div class="col-sm-6 copyright">
                                <p class="mbr-text mbr-fonts-style display-7">Thanks for visting my website.</p>
                            </div>
                            <div class="col-md-6">
                                <div class="social-list align-right">
                                    <div class="soc-item">
                                        <a href="https://www.linkedin.com/in/gauravdhiman/" target="_blank">
                                            <span class="mbr-iconfont mbr-iconfont-social socicon-linkedin socicon">
                                            </span>
                                        </a>
                                    </div>
                                    <div class="soc-item">
                                        <a href="https://twitter.com/gaurav_dhiman/" target="_blank">
                                            <span class="mbr-iconfont mbr-iconfont-social socicon-twitter socicon">
                                            </span>
                                        </a>
                                    </div>
                                    <div class="soc-item">
                                        <a href="https://github.com/gauravdhiman/" target="_blank">
                                            <span class="mbr-iconfont mbr-iconfont-social socicon-github socicon">
                                            </span>
                                        </a>
                                    </div>
                                    <div class="soc-item">
                                        <a href="https://www.kaggle.com/gauravdhiman05/notebooks" target="_blank">
                                            <span class="mbr-iconfont mbr-iconfont-social mbrib-sites">
                                            </span>
                                        </a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <script src="assets/web/assets/jquery/jquery.min.js">
            </script>
            <script src="assets/popper/popper.min.js">
            </script>
            <script src="assets/bootstrap/js/bootstrap.min.js">
            </script>
            <script src="assets/smoothscroll/smooth-scroll.js">
            </script>
            <script src="assets/dropdown/js/nav-dropdown.js">
            </script>
            <script src="assets/dropdown/js/navbar-dropdown.js">
            </script>
            <script src="assets/touchswipe/jquery.touch-swipe.min.js">
            </script>
            <script src="assets/parallax/jarallax.min.js">
            </script>
            <script src="assets/as-pie-progress/jquery-as-pie-progress.min.js">
            </script>
            <script src="assets/tether/tether.min.js">
            </script>
            <script src="assets/datatables/jquery.data-tables.min.js">
            </script>
            <script src="assets/datatables/data-tables.bootstrap4.min.js">
            </script>
            <script src="assets/masonry/masonry.pkgd.min.js">
            </script>
            <script src="assets/imagesloaded/imagesloaded.pkgd.min.js">
            </script>
            <script src="assets/bootstrapcarouselswipe/bootstrap-carousel-swipe.js">
            </script>
            <script src="assets/vimeoplayer/jquery.mb.vimeo_player.js">
            </script>
            <script src="assets/viewportchecker/jquery.viewportchecker.js">
            </script>
            <script src="assets/theme/js/script.js">
            </script>
            <script src="assets/slidervideo/script.js">
            </script>
            <script src="assets/gallery/player.min.js">
            </script>
            <script src="assets/gallery/script.js">
            </script>

        </body>
    </div>
)

export default Home
