
const k = require('./keys');

const english = {
  [k.WHAT_WE_DO]: `What We Do`,
  [k.STORY_ABOUT_US]: `STORY ABOUT US`,
  [k.ABOUT_PART_1]: `Pointer Automotive is part of PowerFleet, a worldwide leader
                  and provider of subscription-based wireless IoT and Machine-to-Machine
                  solutions for securing, controlling, tracking, and managing
                  enterprise assets.`,
  [k.ABOUT_PART_2]: `Power Fleet and Pointer have over 25 years of experience
                  delivering innovative and reliable products and solutions for
                  different industries.
                  Pointer Automotive provides specialized and customized solutions
                  and services to the OEMs in the Automotive Industry with focus
                  in Connected Vehicles and Mobility Services.`,
  [k.ABOUT_PART_3]: `We understand that no two fleets are alike. And that every customer of ours is
                   unique and treated as such. They are our partners and assigned their own
                   dedicate analyst whose singular task is to enhance the value of their
                   business. That enables us to deliver precisely the information they require
                   and that makes a real impact.`,
  [k.ABOUT_PART_4]: `It’s our commitment and market-focused approach that allows us to help our
                  customers reduce costs, protect assets, gain efficiencies, improve resource
                  utilization, minimize fraud and most importantly: save lives by preventing
                  accidents.`,
  [k.ABOUT_PART_5]: `•	Customer Digital Services through a comprehensive package
                  of services to cover vehicle health, vehicle maintenance remind
                  automation, recalls information, digital vehicle manual,
                  24 x 7 hs customer support in case of accident, stolen vehicle
                  recovery and other customer support services.`,
  [k.ABOUT_PART_6]: `•	Customer Connectivity Experience through embedded vehicle
                  high speed internet access, enabling the extension of online
                  services & entertainment during individual and family trips.`,
  [k.ABOUT_PART_7]: `•	In-Vehicle Marketing, enabling Auto OEMs to expand their
                  market access through Connected Vehicle technology.`,
  [k.ABOUT_PART_8]:  `•	Customer Loyalty by enabling a new Automotive Service Ecosystem
                  Creation by connecting 3rd part Service Providers in a single platform.`,
  [k.ABOUT_PART_9]: `•	Auto OEM Private Fleet Management, capturing from the
                  installed vehicle base in real time vehicle diagnosis´ data,
                  helping OEMs to manage actionable insights that substantially
                  impact the business, the time to market for solutions and the
                  enhancement of future vehicle´s development.`,
  [k.POINTER_IS_PART_OF_THE_GLOBAL]: `Pointer is part of the global Industrial Internet of Things company
                PowerFleet ® Inc (NASDAQ: PWFL).`,
  [k.POWERFLEET_IS_A_WORLDWIDE_LEAD]: `PowerFleet is a worldwide leader and provider of subscription-based wireless
                  IoT and Machine to Machine solutions for securing, controlling, tracking,
                  and managing high-value enterprise assets such as industrial trucks,
                  tractor trailers, containers, cargo, and vehicles and truck fleets.
                  PowerFleet’s patented technologies address the needs of organizations to
                  monitor and analyze their assets to increase efficiency and productivity,
                  reduce costs, and improve profitability.`,
  [k.WHAT_WE_DO1]: `What we do`,
  [k.ARTIFICIAL_INTELLIGENCE]: `Artificial Intelligence`,
  [k.SOFTWARE_HARDWARE_AND_SERVIC]: `Software, Hardware, and Services for Monitoring Autonomous
                  Driving, Personalized Services, Predictive Maintenance,
                  Localization and Mapping, Sensor Data Fusion, and Other
                  Use Cases: Market Analysis and BI.`,
  [k.ARTIFICIAL_INTELLIGENCE_AI_S]: `Artificial intelligence (AI) systems, which use data and
                  algorithms to mimic the cognitive functions of the human mind,
                  and have the ability to learn and solve problems
                  independently, are rapidly being deployed across a variety of
                  industries and use cases. The automotive industry is among the
                   industries at the forefront of using AI to mimic, augment,
                   and support the actions of humans, while simultaneously
                   leveraging the advanced reaction times and pinpoint
                   precision of machine-based systems. Indeed, today’s
                   semi-autonomous vehicles and the fully autonomous vehicles
                   of the future will rely heavily on AI systems.`,
  [k.BEYOND_SELF_DRIVING_VEHICLES]: `Beyond self-driving vehicles, AI can also be used to make life
                   in the car more convenient and safer, for both the driver
                   and the passengers.  In-car assistants, driven by natural
                   language processing (NLP) and machine learning techniques,
                   allow the vehicle’s systems to respond to voice commands
                   and infer what actions to take, without human intervention.
                   Despite the technological potential of both autonomous
                   vehicles and in-car assistants, an abundance of caution
                   relating to safety concerns, and a desire to ensure users
                   enjoy a smooth, glitch-free experience, these AI systems
                   likely will be deployed gradually.`,
  [k.IT_S_OUR_COMMITMENT_AND_MARKET1]: `It’s our commitment and market-focused approach that allows us
                   to help our customers reduce costs, protect assets, gain
                   efficiencies, improve resource utilization, minimize fraud
                   and most importantly: save lives by preventing accidents.`,
  [k.CONTACT_US]: `CONTACT US`,
  [k.IT_S_A_PLEASURE_TO_HEAR_FROM_Y]: `It's a pleasure to hear from you`,
  [k.CONTACT_US1]: `Contact us`,
  [k.YOUR_NAME]: `Name *`,
  [k.YOUR_LASTNAME]: `Lastname *`,
  [k.YOUR_TITLE]: `Title`,
  [k.YOUR_COMPANY]: `Company`,
  [k.YOUR_E_MAIL]: `Your e-mail *`,
  [k.YOUR_PHONE]: `Phone`,
  [k.REASON_FOR_YOUR_CONTACT]: 'Reason for your contact',
  [k.YOUR_MESSAGE]: `Your message`,
  [k.OEM_DESIGN_PROJECTS]: `OEM DESIGN PROJECTS`,
  [k.HAPPY_CLIENTS]: `HAPPY CLIENTS`,
  [k.AWARD_WINNERS]: `AWARD WINNERS`,
  [k.CUPS_OF_COFFEE]: `CUPS OF COFFEE`,
  [k.MEMBERS]: `MEMBERS`,
  [k.FOR_ALL_DEVICES]: `For all devices`,
  [k.UNIQUE_DESIGN]: `UNIQUE DESIGN`,
  [k.CREATIVE_AUTO_SOLUTIONS]: `Creative Auto Solutions`,
  [k.POINTER]: `Pointer`,
  [k.AUTO]: `AUTO`,
  [k.LEARN_MORE]: `Learn More`,
  [k.CLOUD_BASED_SERVICES]: `Cloud Based Services`,
  [k.OEM]: `OEM`,
  [k.APP_TAYLORED_TO_YOUR_VEHICLE]: `App taylored to your vehicle`,
  [k.AUTOMOTIVE]: `Automotive`,
  [k.THIRD_PARTIES_INTEGRATION]: `Third Party Integration`,
  [k.OEM_AUTO]: `OEM Auto`,
  [k.MACHINE_LEARNING]: `Machine Learning`,
  [k.IN_THE_AUTOMOTIVE_INDUSTRY_MA]: `In the automotive industry, machine learning (ML) is most
                  often associated with product innovations, such as
                  self-driving cars, parking and lane-change assists, and
                  smart energy systems. But ML is also having a significant
                  effect on the marketing function, from how marketers in the
                  automotive sector establish goals and measure returns on
                  their investments to how they connect with consumers.
                  ML is poised to become as much an organizing principle as an
                  analytic ingredient for sophisticated marketing campaigns
                  across industries. This is especially true in the automotive
                  industry, a capital-intensive, high-tech sector riven
                  by disruption.`,
  [k.MACHINE_LEARNING_FOR_THE_OEM_W]: `Machine-Learning for the OEM world`,
  [k.MOST_MANUFACTURING_OPERATIONS]: `Most manufacturing operations in automotive industries are still
                largely dependent on experience-based human decisions.
                The emergence of Big Data, in conjunction with machine learning
                in automotive companies, has paved a way that is helping bring
                operational and business transformations, thereby leading to
                an increased level of accuracy in decision-making and improved
                performance.`,
  [k.IN_VEHICLE_INTELLIGENCE]: `In-vehicle intelligence`,
  [k.REINFORCING_COMMUNICATION_AMON]: `Reinforcing communication among navigation systems, human
                machine interfaces, and location platforms to inform drivers
                about hazardous road situations.`,
  [k.PREDICTIVE_VEHICLE_MAINTENANCE]: `Predictive vehicle maintenance`,
  [k.COLLECTING_DATA_FROM_IN_VEHICL]: `Collecting data from in-vehicle units and applying predictive
                analytics to alert drivers about urgent or planned maintenance.`,
  [k.SMART_ROUTING_AND_POI_OPTIMIZA]: `Smart routing and POI optimization`,
  [k.TEACHING_A_VEHICLE_THE_MOST_CO]: `Teaching a vehicle the most commonly used routes and points of
                interest with artificial intelligence in automotive.`,
  [k.ABOUT]: `About`,
  [k.ABOUT_US]: 'About us',
  [k.CURRENT]: `(current)`,
  [k.WORK]: `Work`,
  [k.SOLUTIONS]: `Solutions`,
  [k.SERVICES]: `Services`,
  [k.VEHICLE_HARMONIZATION]: `Vehicle Harmonization`,
  [k.CONTACT]: `Contact`,
  [k.LOREM_IPSUM_DOLOR_SIT_AMET_C]: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”`,
  [k.JON_DOE]: `Phil Martin Jr.`,
  [k.JANE_DOE]: `Catherine Philipet`,
  [k.BOB_DOE]: `Leon Rosenthal`,
  [k.PREVIOUS]: `Previous`,
  [k.NEXT]: `Next`,
  [k.SERVICE]: `Service`,
  [k.WHAT_WE_DO2]: `WHAT WE DO`,
  [k.LOREM_IPSUM_DOLOR_SIT_AMET_CO]: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  [k.CLOUD_BASED_SERVICES1]: `CLOUD BASED SERVICES`,
  [k.LOREM_IPSUM_DOLOR_SIT_AMET_CO1]: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  [k.CUSTOMIZED_OEM_AUTO_SOLUTIONS]: `CUSTOMIZED OEM AUTO SOLUTIONS`,
  [k.APP_SYSTEM_DESIGN]: `APP / SYSTEM DESIGN`,
  [k.SOME_OF_OUR_WORK]: `SOME OF OUR WORK`,
  [k.LANGUAGES]: 'Lang',
  [k.ENGLISH]: 'en',
  [k.PORTUGUESE]: 'pt',
  [k.HEBREW]: 'he',
  [k.SPANISH]: 'es',
  [k.INTEGRATION]: ' Integration',
  [k.SOLUTIONS1]: ' Solutions',
  [k.APPS]: ' Apps',
  [k.CLOUD]: ' Cloud',
  [k.DESIGN]: 'Design',
  [k.CERTIFICATIONS]: 'Certifications',
  [k.ELECTRICALS]: 'Electrical Vehicles',
  [k.SEND_MESSAGE]: 'Send your message',
  [k.COMPANY_NAME]: 'Pointer Automotive',
  [k.INDUSTRIES]: 'Industries',
  [k.INVESTOR_RELATIONS]: 'Investor relations',
  [k.PRIVACY_POLICY]: 'Privacy Policy',
  [k.COOKIES_POLICY]: 'Cookies Policy',
  [k.TERMS_OF_SERVICE]: 'Terms of Service',
  [k.COMPANY_NAME]: 'Pointer Automotive',
  [k.COMPANY_ADDRESS]: 'Avenida Andromeda, 723 - Cj 2902',
  [k.CITY]: 'Barueri',
  [k.STATE]: 'Sao Paulo',
  [k.COUNTRY]: 'Brazil',
  [k.ZIP]: '06473-000',
  [k.PHONE]: '+55 11-5555-5555',
  [k.WHATS]: '+55 11-95555-5555',
  [k.EMAIL]: 'contato@pointer.com.br',
  [k.PROFESSIONAL]: 'Professional Services',
  [k.CONSULTING]: 'Consulting Services',
  [k.INTELLIGENCE]: 'Intelligence Services',
  [k.CORPORATE_FLEET]: 'Corporate Fleet',
  [k.CONNECTED_VEHICLES]: 'Connected Vehicles',
  [k.MOBILITY_SERVICES]: 'Mobility',
  [k.DESIGN_TECHNOLOGY]: 'Design & Technology',
  [k.TECHNOLOGY]: 'Technology',
  [k.CUSTOMIZATION]: 'Customizations',
  [k.TELEMATICS]: `Telematics`,
  [k.TELEMATICS_TITLE]: `The power of our end-to-end solution`,
  [k.HEADUNITS]: 'Integration with OEM Head units - Infotainment devices.',
  [k.TABLETS]: 'Tablets for professional monitoring of your vehicles.',
  [k.SPECIAL]: 'Special devices and OS integration to support your project.',
  [k.OS]: 'Operating Systems: iOS and Android ready.',
  [k.DESIGN1]: "Connection with In-Vehicle WiFi - Hotspot.",
  [k.DESIGN2]: "OEM's `Look and Feel` HMI customizations.",
  [k.DESIGN3]: "UX, UI, HMI customized by OEM vehicle personality.",
  [k.DESIGN4]: "Modularity, Flexibility, Scalability.",
  [k.APPS]: "APPS",
  [k.DESIGN_APP1]: "Design App 1",
  [k.DESIGN_APP2]: "Design App 2",
  [k.DESIGN_APP3]: "Design App 3",
  [k.DESIGN_APP4]: "Design App 4",
  [k.DESIGN_APP5]: "Design App 5",
  [k.DESIGN_APP6]: "Design App 6",
  [k.DESIGN_APP7]: "Design App 7",
  [k.DESIGN_APP8]: "Design App 8",
  [k.OUR_APP]: "Our App",
  [k.DESIGN_OUR_APP1]: "UX, UI Taylored according to OEMs specifications.",
  [k.DESIGN_OUR_APP2]: "Look and Feel based on vehicles category;",
  [k.DESIGN_OUR_APP3]: "On-board marketing toll for services and support.",
  [k.DESIGN_OUR_APP4]: "Operating Systems: iOS and Android ready.",
  [k.DESIGN_OUR_APP5]: "Vehicle Health available at your hands.",
  [k.DESIGN_OUR_APP6]: "Group information for safety, information and fun.",
  [k.DESIGN_OUR_APP7]: "Service support at your service.",
  [k.DESIGN_OUR_APP8]: "Breakdown, Medical, Safety Emergencies.",
  [k.CONNECTED_HEADER]: `Pointer Automotive is working hard in the process of
                        contibute for the Universal definition of 'Connected Vehicle'.
                        Technology is at the heart of the OEM Automotive Industry
                        and the it grows at a pace that is not yet clear where
                        'Connected car' definition will be defined.
                        Automotive manufacturers are selling ‘Connected cars’
                        from a simply connected to the internet
                        cellular connection, with limited feature set, to a fully
                        connected vehicle necessary in all stages of Autonomous-driving
                        technology.
                        A real Connected Car, must be much more than a simple
                        WiFi hotspot and become part of peoples life, conneted
                        all times, and sharing information as it is desired
                        in a real connecte world.`,
[k.WHAT1]: `For the Vehicle users:`,
[k.WHAT2]: `   -  Connected to Internet All times.`,
[k.WHAT3]: `   -  Smooth transition - House / Office lifestyle to 'Connected car'.`,
[k.WHAT4]: `   -  User interaction with Digital world in a seamless way.`,
[k.WHAT5]: `For the Vehicle manufacturers:`,
[k.WHAT6]: `   -  Reliable Telematics Units for a seamless connection.`,
[k.WHAT7]: `   -  Easy installation with 'Plug and Play' connection to Cloud.`,
[k.WHAT8]: `   -  Diagnosis, BI, Data analysis, FOTA/OTA in one tool.`,
[k.AI1]: `Data & algorithms mimic the cognitive functions of the human mind.`,
[k.AI2]: `Ability to learn and solve problems independently.`,
[k.AI3]: `Deployed across a variety of industries and use cases.`,
[k.AI4]: `Advanced reaction times - precision of machine-based systems`,
[k.AI5]: `The automotive industry is using AI for:`,
[k.AI6]: `   -  To mimic, augment, and support the actions of humans.`,
[k.AI7]: `   -  Make driver's life in the car more convenient and safer.`,
[k.AI8]: `   -  In-car assistants, driven by natural language processing.`,
[k.AI9]: `   -  Systems to respond to voice commands and infer what actions to take.`,
[k.ML1]: `ML is helping to bring operational and business transformations`,
[k.ML2]: `Big Data and machine learning are remodeling the automotive companies processes.`,
[k.ML3]: `Increased level of accuracy in decision-making and improved performance.`,
[k.ML4]: `In-vehicle intelligence Reinforcing communication among navigation systems,
          human machine interfaces, and location platforms to inform drivers about
          hazardous road situations.`,
[k.ML5]: `Predictive vehicle maintenance Collecting data from in-vehicle units and
          applying predictive analytics to alert drivers about urgent or planned maintenance.`,
[k.ML6]: `Smart routing and POI optimization Teaching a vehicle the most commonly used
          routes and points of interest with artificial intelligence in automotive.`,
[k.ML7]: ``,
[k.ML8]: ``,
[k.ML9]: ``,
[k.TESTIMONIAL1]: `Automakers and dealers want their customers to return to them
                  so they can raise customer retention throughout a car’s
                  lifecycle. To accomplish that, they need to know more about
                  their customers. Dealers can make personalized offers or even send
                  important push notifications when they need to through a 'Connected car'.`,
[k.TESTIMONIAL2]: `An added benefit for dealers who rent or lend cars is that they
                  can quickly locate and monitor mileage on those connected vehicles.
                  They can also receive alerts when specific vehicles enter —
                  or leave — pre-set geographic regions.`,
[k.TESTIMONIAL3]: `Car buyers can get greater value from their investment with a host
                  of driver-centric features. Connected-car technology make vehicles
                  more attractive with features like car health-check, vehicle status
                  indicators, smartphone Apps,and other convenient features.`,
[k.TELEMATICS_HEADER]: `The Pointer Automotive cloud based platform is called Pointer Connect™
                        and is an Intelligent Cloud Based SW Platform that normalizes different
                        sources of raw data into a well-structured information center,
                        generating insights and formatted information to feed OEMs, Dealer´s
                        network, OEM´ customers and key business partners as insurance companies,
                        financial groups and other relevant automotive players.`,
[k.TELEMATICS1]: `Flexible architecture ready to integrate with OEM´s Manufacturing,
                  Marketing, Sales, Planning and other specific applications.`,
[k.TELEMATICS2]: `powerful tool to enable OEMs to customize and develop unique
                  features, implemented smoothly, in phases, unlocking hidden
                  data information in the new Digital Automotive Environment.
                  System flexibility allows development from Fleet & Mobility
                  Service Applications, customized to your needs, to
                  Machine Learning and Artificial Intelligence.`,
[k.TELEMATICS3]: `Manages secure links to professional databases, created specifically
                  to store OEM´s customer data in a secure environment guaranteeing
                  privacy of the user´s data.`,
[k.TELEMATICS4]: `Business improvements by harmonizing, structuring and correlating
                  vehicle raw data into relevant information, your entire business
                  can be enhanced, enabling significant improvements in a new vehicle launching`,
[k.TELEMATICS5]: `Build your own App in a customized and scalable way to generate new revenue business
                  opportunities for data monetization and digital service implementation.`,
[k.TELEMATICS6]: `Full integration with vehicle's electronic modules through devices that
                  sense changes in the vehicle behavior and feed the PConnect™ with
                  information for the driver and the OEMs.`,
[k.TELEMATICS7]: ``,
[k.TELEMATICS8]: ``,
[k.TCU1]: `TCU 1`,
[k.TCU2]: `TCU 2`,
[k.TCU3]: `TCU 3`,
[k.TCU4]: `TCU 4`,
[k.TCU5]: `TCU 5`,
[k.TCU6]: `TCU 6`,
[k.TCU7]: `TCU 7`,
[k.TCU8]: `TCU 8`,
[k.DONGLES1]: `DONGLES 1`,
[k.DONGLES2]: `DONGLES 2`,
[k.DONGLES3]: `DONGLES 3`,
[k.DONGLES4]: `DONGLES 4`,
[k.DONGLES5]: `DONGLES 5`,
[k.DONGLES6]: `DONGLES 6`,
[k.DONGLES7]: `DONGLES 7`,
[k.DONGLES8]: `DONGLES 8`,
[k.SELECT_ONE]: `Select One`,
[k.QUOTE]: 'Project Quote',
[k.NEW_PROJECT]: 'New Project',
[k.SUGGESTIONS]: 'Suggestions',
[k.TECHNICAL_SUPPORT]: 'Technical Support',
[k.FEEDBACK]: 'Feedback',
[k.FLEET_MNGT]: `Fleet Management`,
[k.DRIVER_BEHAVIOR]: `Driver behavior`,
[k.ROAD]: `Road Conditions`,
[k.SMART_APPS]: `Smart Apps`,
[k.PREDICTIVE]: `Predictive Maintenance`,
[k.CAR_SHARING]: `Car Sharing`,
[k.PROFESSIONAL_HEAD]: `In the digital Era, Services need to be simple, friendly
                        and automatized. New technologies bring new kind of customers,
                        who expect quick answers. Customers are more connected with
                        technology and expect to have everything in a toutch of a button.

                        Pointer Professional Services is a 24 x 7 hs Support Center
                        available to attend OEM's customers based on established procedures,
                        with a relyable Service Level Agreement (SLA) and scripts defined with
                        Automotive Customers. The Connected Vehicle Service
                        should come together with Customer Care Services for
                        Support and Emergency during working hours or 24 x 7 hs.`,
[k.PROFESSIONAL1]: `App Support and Training for OEM Apps and use the best of your App resources.`,
[k.PROFESSIONAL2]: `Medical Emergencies: Support you and connect you with your parents in case of medical emergency or accidents.`,
[k.PROFESSIONAL3]: `Breakdown Emergencies: Help your customers to get support in case of vehicle problem. The vehicle can be quickly in your dealers, not in other 3rd part repair centers. `,
[k.PROFESSIONAL4]: `Stolen Vehicle Recovery: In countries with high theft rates, we provide 24 x 7 hs vehicle recovery service in case of robbery or stolen vehicle. Active risk assessment in boarders or theft risk areas can be an important service to reduce insurance policy price.`,
[k.PROFESSIONAL5]: `Marketing Campaigns: Support OEM Customers with questions during marketing campaigns directed to OEM Customers Apps.`,
[k.PROFESSIONAL6]: `Mobility Services: Support customer mobility services field emergency as a 24 x 7 hs emergency center.`,
[k.PROFESSIONAL7]: `Concierge: Concierge for OEM customers during working hours or 24 x 7 hs.`,
[k.PROFESSIONAL8]: ``,
[k.PROFESSIONAL9]: ``,
[k.CONSULTING_HEAD]: `Pointer team has experience to help OEMs in the whole process
                      of designing a 'Connected Vehicle' and Mobility Services Strategy.
                      Design and development support until project rollout.
                      Below services we can offer to OEMs:`,
[k.CONSULTING1]: `Connected Vehicle and Mobility Service Package Definition and Customization.`,
[k.CONSULTING2]: `Manufacturing Automotive TCU activation procedures and connectivity validation with Cloud Services.`,
[k.CONSULTING3]: `Integration with Legacy Systems.`,
[k.CONSULTING4]: `SIM Card data package definition and SIM management.`,
[k.CONSULTING5]: `Business Monetization - Vehicle high speed data embedded.`,
[k.CONSULTING6]: `Vehicle Service Activation, update and upgrade methologies.`,
[k.CONSULTING7]: `Automotive ecosystem development & integration.`,
[k.CONSULTING8]: `3rd Part Platform Integration.`,
[k.CONSULTING9]: `Customer Service / Subscription engagement .`,
[k.CONSULTING10]: `Customized Design of OEMs App.`,
[k.CONSULTING11]: `Vehicle data harmonization and much more .............`,
[k.INTELLIGENCE_HEAD]: `Pointer Automotive Intelligence Services, connects the existing
                        and future 5G wireless networks that enables vehicles and
                        smart devices, installed by the OEMs, to communicate in intelligent
                        mode and analyses real-time data to optimize vehicle experience.
                        Intelligent services allows the OEMs to securely start challenging
                        projects with the support of our package of Intelligence solutions.
                        An overview of the Pointer Automotive Intelligence Services are bellow:`,
[k.INTELLIGENCE1]: `Recall Management: Save millions of dollars in Recall advertising
                    and management by direct communication with your relevant vehicle
                    owners in case of Recalls, structuring digital reports about recall
                    evolution and customer acknowledges.`,
[k.INTELLIGENCE2]: `Collision and theft rate per region, medical / breakdown
                    service utilization rate per region, among other intelligence report services.`,
[k.INTELLIGENCE3]: `Business Intelligence: Customized BI development for operations and business management.`,
[k.INTELLIGENCE4]: `Electric Vehicle Management: Keep customers updated about charging
                    location (private and and OEM partners updated about key location
                    for charging installation. Notify customer about charging remaining time.`,
[k.INTELLIGENCE5]: `Warranty Management: Deep analysis of vehicle diagnosis information drives to
                    efficient mechanisms of informing customers, dealers and save a considerable
                    ammout of resources.`,
[k.INTELLIGENCE6]: `Marketing Management: Helps the OEMs to manage leads, vehicle
                    conditions for negotiations of a new one, send real-time information
                    to customers based on driving behavior, region of driving, promotions on
                    important items for the vehicle, etc. Ex: Vehicle reaching oil / tires usage limit - inform
                    customers about promotions or benefits of replacing it on time in a dealer site.`,
[k.INTELLIGENCE7]: ``,
[k.INTELLIGENCE8]: ``,
[k.INTELLIGENCE9]: ``,
[k.INTELLIGENCE10]: ``,
[k.INTELLIGENCE11]: ``,
[k.ELECTRIC_HEAD]: `Pointer Automotive Intelligence Services, connects the existing
                        and future 5G wireless networks that enables vehicles and
                        smart devices, installed by the OEMs, to communicate in intelligent
                        mode and analyses real-time data to optimize vehicle experience.
                        Electrical, semi-autonomous and autonomous vehicles need close
                        supervision to offer a reliable and enjoyable experience to the users.
                        Pointer Automotive is ready to play this role in this new and exciting segment.
                        An overview of the Pointer Automotive Electrical vehicles Services are bellow:`,
[k.ELECTRIC1]: `Monitoring Hardware and software failures. Electronic systems fail due to false sensors,
               noise in signals and software errors. Electric vehicles will certainly have failures that
               could cause crashes, Pointer Automotive can analyze data and take quick actions to avoid
               risk situations.`,
[k.ELECTRIC2]: `Electric Vehicle Management: Keep customers updated about charging
               location (private and and OEM partners updated about key location
               for charging installation. Notify customer about charging remaining time`,
[k.ELECTRIC3]: `Services provided by Pointer Automotive: Battery reports, Remaining range
                Driver data analytics, DTCs notifications, Customized alerts, Mileage reports,
                Remote diagnoses, Warranty management monitoring, OTA / FOTA, Charger status,
                Charging Public / Private locations, Remote charger resets, Smart charging,
                Best route based on charger locations, etc.`,
[k.ELECTRIC4]: `Integration with the Battery Monitoring System. BMS provides status information in real
                time to vehicle owners and send that information to the cloud to be processed
                and trigger actions to provide the best user experience to the vehicle owners.`,
[k.ELECTRIC5]: ``,
[k.ELECTRIC6]: ``,
[k.ELECTRIC7]: ``,
[k.ELECTRIC8]: ``,
[k.ELECTRIC9]: ``,
[k.ELECTRIC10]: ``,
[k.ELECTRIC11]: ``,
[k.MOBILITY_TITLE]: 'Mobility',
[k.MOBILITY_HEAD]: `Automotive industry transformation drives OEM´s to diversified
                    business offering beyond vehicle sales. Vehicle short and long
                    term leasing, Car Sharing and other Vehicle Collaborative Use
                    business model drives OEM to the era of Mobility Services.`,
[k.MOBILITY1]: `Pointer Connect helps OEM´s to operate and manage Mobility Services
                in real time, assuring fleet full visibility, security and control.`,
[k.MOBILITY2]: `Open API´s engage different Mobility Ecosystem partners as Specialized
                CRM System, Ticket Fine Systems, Car Sharing Platform, Fuel Card
                Companies, financial institution and insurance company partners,
                among others to consume and make available valuable data.
                Pointer Connect harmonize all the data in a single customized Mobility
                 Service Business Intelligence (BI) Dashboard.`,
[k.MOBILITY3]: `Machine Learning (ML) engine helps OEM, OEM Dealers Mobility
                Service Partners and other OEM Mobility Business Partners to
                use valuable information to have actionable insights to
                substantially impact bottom line business performance,
                sustainable business growth and customer satisfaction.`,
[k.MOBILITY4]: `Building Blocks Service Dashboard in the picture:`,
[k.MOBILITY5]: ``,
[k.MOBILITY6]: ``,
[k.MOBILITY7]: ``,
[k.MOBILITY8]: ``,
[k.MOBILITY9]: ``,
[k.MOBILITY10]: ``,
[k.MOBILITY11]: ``,


}
export { english };
