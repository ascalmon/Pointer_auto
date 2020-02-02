const k = require('./keys');

const hebrew = {
  [k.WHAT_WE_DO]: `מה אנחנו עושים`,
  [k.STORY_ABOUT_US]: `סיפור על ארה"ב`,
  [k.MORE_THAN_YEARS_OF_REWRITIN]: `More than 25 years of rewriting MRM rules.`,
  [k.MORE_THAN_YEARS_OF_REWRITIN1]: `More than 25 years of rewriting MRM rules.
                  Our innovative and reliable cloud-based software platform extracts and captures
                  all of your organization’s critical data points – from your office, drivers,
                  routes, points-of-interest, logistic-network, vehicles, trailers, containers,
                  and cargo. It then takes the next and most important step, and analyzes it,
                  converting raw data into valuable information. What you get are actionable
                  insights. The kind that substantially impact your bottom line to help you not
                  only sustain your business, but profitably grow it.`,
  [k.WE_UNDERSTAND_THAT_NO_TWO_FLEE]: `We understand that no two fleets are alike. And that every customer of ours is
                   unique and treated as such. They are our partners and assigned their own
                   dedicate analyst whose singular task is to enhance the value of their
                   business. That enables us to deliver precisely the information they require
                   and that makes a real impact.`,
  [k.IT_S_OUR_COMMITMENT_AND_MARKET]: `It’s our commitment and market-focused approach that allows us to help our
                  customers reduce costs, protect assets, gain efficiencies, improve resource
                  utilization, minimize fraud and most importantly: save lives by preventing
                  accidents.`,
  [k.POINTER_IS_PART_OF_THE_GLOBAL]: `Pointer is part of the global Industrial Internet of Things company
                PowerFleet ® Inc (NASDAQ: PWFL).`,
  [k.POWERFLEET_IS_A_WORLDWIDE_LEAD]: `PowerFleet is a worldwide leader and provider of subscription-based wireless
                  IoT and Machine to Machine solutions for securing, controlling, tracking,
                  and managing high-value enterprise assets such as industrial trucks,
                  tractor trailers, containers, cargo, and vehicles and truck fleets.
                  PowerFleet’s patented technologies address the needs of organizations to
                  monitor and analyze their assets to increase efficiency and productivity,
                  reduce costs, and improve profitability.`,
  [k.WHAT_WE_DO1]: `מה אנחנו עושי`,
  [k.ARTIFICIAL_INTELLIGENCE]: `בינה מלאכותית`,
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
  [k.CONTACT_US]: `צור קשר`,
  [k.IT_S_A_PLEASURE_TO_HEAR_FROM_Y]: `!תענוג לשמוע ממך`,
  [k.CONTACT_US1]: `צור קשר`,
  [k.YOUR_NAME]: `שם*`,
  [k.YOUR_E_MAIL]: `אימייל*`,
  [k.YOUR_MESSAGE]: `הודעה`,
  [k.OEM_DESIGN_PROJECTS]: `OEM פרויקטים לעיצוב`,
  [k.HAPPY_CLIENTS]: `לקוחות שמחים`,
  [k.AWARD_WINNERS]: `זוכים בפרסים`,
  [k.CUPS_OF_COFFEE]: `כוסות קפה`,
  [k.MEMBERS]: `חברים`,
  [k.FOR_ALL_DEVICES]: `לכל המכשירים`,
  [k.UNIQUE_DESIGN]: `עיצוב מיוחד`,
  [k.CREATIVE_AUTO_SOLUTIONS]: `פתרונות אוטומטיים יצירתיים`,
  [k.POINTER]: `Pointer`,
  [k.AUTO]: `AUTO`,
  [k.LEARN_MORE]: `למד עוד`,
  [k.CLOUD_BASED_SERVICES]: `שירותים מבוססי ענן`,
  [k.OEM]: `OEM`,
  [k.APP_TAYLORED_TO_YOUR_VEHICLE]: `יישום מותאם לרכב שלך`,
  [k.AUTOMOTIVE]: `Automotive`,
  [k.THIRD_PARTIES_INTEGRATION]: `שילוב צדדים שלישיים`,
  [k.OEM_AUTO]: `OEM Auto`,
  [k.MACHINE_LEARNING]: `למידת מכונה`,
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
  [k.ABOUT]: `עלינו`,
  [k.ABOUT_US]: `עלינו`,
  [k.CURRENT]: `(current)`,
  [k.WORK]: `עבודה`,
  [k.SOLUTIONS]: `פתרונות`,
  [k.SERVICES]: `שירותים`,
  [k.VEHICLE_HARMONIZATION]: `הרמוניזציה של כלי רכב`,
  [k.CONTACT]: `איש קשר`,
  [k.LOREM_IPSUM_DOLOR_SIT_AMET_C]: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”`,
  [k.JON_DOE]: `Jon Doe`,
  [k.JANE_DOE]: `Jane Doe`,
  [k.PREVIOUS]: `קודם`,
  [k.NEXT]: `הבא`,
  [k.SERVICE]: `שירות`,
  [k.WHAT_WE_DO2]: `מה אנחנו עושים`,
  [k.LOREM_IPSUM_DOLOR_SIT_AMET_CO]: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  [k.CLOUD_BASED_SERVICES1]: `CLOUD BASED SERVICES`,
  [k.LOREM_IPSUM_DOLOR_SIT_AMET_CO1]: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  [k.CUSTOMIZED_OEM_AUTO_SOLUTIONS]: `CUSTOMIZED OEM AUTO SOLUTIONS`,
  [k.APP_SYSTEM_DESIGN]: `APP / SYSTEM DESIGN`,
  [k.SOME_OF_OUR_WORK]: `כמה מהעבודה שלנו`,
  [k.LANGUAGES]: 'אידיומה',
  [k.ENGLISH]: 'en',
  [k.PORTUGUESE]: 'pt-BR',
  [k.HEBREW]: 'he',
  [k.SPANISH]: 'es',
  [k.INTEGRATION]: ' שילוב',
  [k.SOLUTIONS1]: ' פתרונות',
  [k.APPS]: ' אפליקציות',
  [k.CLOUD]: ' ענן',
  [k.DESIGN]: 'עיצוב',
  [k.CERTIFICATIONS]: 'הסמכות',
  [k.ELECTRICALS]: 'כלי רכב חשמליים',
  [k.SEND_MESSAGE]: 'שלח את ההודעה שלך',
  [k.COMPANY_NAME]: 'Pointer Automotive',
  [k.INDUSTRIES]: 'תעשיות',
  [k.INVESTOR_RELATIONS]: 'יחסי משקיעים',
  [k.PRIVACY_POLICY]: 'מדיניות פרטיות',
  [k.COOKIES_POLICY]: 'מדיניות עוגיות',
  [k.TERMS_OF_SERVICE]: 'תנאי השירות',
};
export { hebrew };
