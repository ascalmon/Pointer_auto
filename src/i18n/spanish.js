const k = require('./keys');

const spanish = {
  [k.WHAT_WE_DO]: `Que hacemos`,
  [k.STORY_ABOUT_US]: `Nuestra historia`,
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
  [k.POINTER_IS_PART_OF_THE_GLOBAL]: `Pointer es parte de la compañía global
                  de Internet industrial de las cosas PowerFleet® Inc (NASDAQ: PWFL).`,
  [k.POWERFLEET_IS_A_WORLDWIDE_LEAD]: `PowerFleet es líder mundial y proveedor
                  de sistemas inalámbricos basados ​​en suscripción para servicios
                  IoT y soluciones de máquina a máquina para proteger, controlar,
                  rastrear, y administrar activos corporativos de alto valor, como
                  camiones industriales, remolques de camiones, contenedores,
                  carga, vehículos y flotas de camiones. Las tecnologías patentadas
                  PowerFleet satisfacen las necesidades de las organizaciones
                  monitorear y analizar sus activos para aumentar la eficiencia
                  y la productividad, reducir costos y mejorar la rentabilidad.`,
  [k.WHAT_WE_DO1]: `Que hacemos`,
  [k.ARTIFICIAL_INTELLIGENCE]: `Inteligencia artificial`,
  [k.SOFTWARE_HARDWARE_AND_SERVIC]: `Software, hardware y servicios para
                  seguimiento de vehículos autónomos, servicios personalizados,
                  Mantenimiento predictivo, localización y mapeo, fusión de datos
                  sensores y otros casos de uso: análisis de mercado y BI.`,
  [k.ARTIFICIAL_INTELLIGENCE_AI_S]: `Sistemas de inteligencia artificial (IA),
                  que utilizan datos y algoritmos para imitar las funciones
                  cognitivas de la mente humana, y tienen la capacidad de
                  aprender y resolver problemas de forma independiente, se
                  están implementando rápidamente en una variedad de industrias
                  y casos de uso. La industria automotriz se encuentra entre las
                  industrias a la vanguardia del uso de IA para imitar, aumentar,
                  y apoyar las acciones de los seres humanos, mientras que
                  simultáneamente aprovechando los tiempos de reacción ultra
                  rápidos, identifique con precisión el comportamiento de
                  los sistemas basados ​​en máquinas. De hecho hoy
                  vehículos semiautónomos y vehículos totalmente autónomos
                  en el futuro, dependerán en gran medida de los sistemas de IA.`,
  [k.BEYOND_SELF_DRIVING_VEHICLES]: `Además de los vehículos autónomos, la IA
                  también se puede utilizar para dar vida a un vehículo más
                  conveniente y seguro, tanto para el conductor como para los
                  pasajeros. Asistentes de vehículos, guiados por recursos
                  naturales y técnicas de procesamiento. El lenguaje (PNL) y
                  el aprendizaje automático permiten que los sistemas del
                  vehículo respondan a los comandos de voz e infieran qué
                  acciones tomar, sin intervención humana. A pesar del potencial
                  tecnológico de ambas tecnologías, los vehículos y los
                  asistentes de vehículos requieren una gran precaución
                  cuando se trata de problemas de seguridad y un deseo de
                  garantizar que los usuarios disfruten de una experiencia
                  fluida e impecable, es probable que estos sistemas de IA se
                  implementen gradualmente.`,
  [k.IT_S_OUR_COMMITMENT_AND_MARKET1]: `Es nuestro compromiso y enfoque centrado
                  en el mercado lo que nos permite ayudar a nuestros clientes
                  a reducir costos, proteger activos, ganar eficiencia, mejorar
                  los recursos en uso, minimizar el fraude y, lo más importante:
                  salvar vidas, prevenir accidentes.`,
  [k.CONTACT_US]: `ENTRE EN CONTACTO`,
  [k.IT_S_A_PLEASURE_TO_HEAR_FROM_Y]: `¡Siempre es un placer saber de usted!`,
  [k.CONTACT_US1]: `Entre en Contacto`,
  [k.YOUR_NAME]: `Nombre *`,
  [k.YOUR_LASTNAME]: `Apellido *`,
  [k.YOUR_TITLE]: `E-mail *`,
  [k.YOUR_COMPANY]: `Empresa`,
  [k.YOUR_E_MAIL]: `E-mail *`,
  [k.YOUR_PHONE]: `Número de teléfono`,
  [k.REASON_FOR_YOUR_CONTACT]: 'Motivo de su contacto',
  [k.YOUR_MESSAGE]: `Mensaje`,
  [k.OEM_DESIGN_PROJECTS]: `PROYECTOS DE DISEÑO OEM`,
  [k.HAPPY_CLIENTS]: `CLIENTES FELICES`,
  [k.AWARD_WINNERS]: `GANADOR DEL PREMIOS`,
  [k.CUPS_OF_COFFEE]: `TAZAS DE CAFÉ`,
  [k.MEMBERS]: `MIEMBROS`,
  [k.FOR_ALL_DEVICES]: `Para todos los dispositivos`,
  [k.UNIQUE_DESIGN]: `DISEÑO ÚNICO`,
  [k.CREATIVE_AUTO_SOLUTIONS]: `Soluciones Creativas para Autos`,
  [k.POINTER]: `Pointer`,
  [k.AUTO]: `AUTO`,
  [k.POINTER_AUTOMOTIVE]: `Pointer Automotive`,
  [k.LEARN_MORE]: `Aprende más`,
  [k.CLOUD_BASED_SERVICES]: `Servicios basados ​​en la nube`,
  [k.OEM]: `OEM`,
  [k.APP_TAYLORED_TO_YOUR_VEHICLE]: `Aplicación adaptada a su vehículo`,
  [k.AUTOMOTIVE]: `Automotive`,
  [k.THIRD_PARTIES_INTEGRATION]: `Integración de terceros`,
  [k.OEM_AUTO]: `OEM Auto`,
  [k.MACHINE_LEARNING]: `Aprendizaje automático`,
  [k.IN_THE_AUTOMOTIVE_INDUSTRY_MA]: `En la industria automotriz, aprender a
                máquina (ML) se asocia más a menudo con innovaciones en
                productos como autos sin conductor, asistencia de estacionamiento
                 y cambio de carril y sistemas inteligentes de energía.
                Pero ML también está teniendo un efecto significativo en la función de marketing, en cómo los vendedores
                la industria automotriz establece objetivos y mide los rendimientos
                sus inversiones y cómo se conectan con
                consumidores ML está a punto de convertirse en un principio organizador y un ingrediente analítico para campañas
                sofisticadas estrategias de marketing en todas las industrias. Esto es
                especialmente cierto en el sector del automóvil. Un sector alto
                tecnología y capital intensivo dirigido a soluciones disruptivas.`,
  [k.MACHINE_LEARNING_FOR_THE_OEM_W]: `Aprendizaje automático para el mundo OEM`,
  [k.MOST_MANUFACTURING_OPERATIONS]: `La mayoría de las operaciones de
                fabricación en la industria automotriz todavía depende en gran
                medida de decisiones humanas basadas en la experiencia. La
                aparición de Big Data, junto con el aprendizaje automático (ML)
                en las empresas automotrices, preparan una metodología que ayuda
                a lograr transformaciones operativas y comerciales, elevando el
                nivel de precisión en la toma de decisiones y mejorando el
                rendimiento.`,
  [k.IN_VEHICLE_INTELLIGENCE]: `Inteligencia Embebida`,
  [k.REINFORCING_COMMUNICATION_AMON]: `Fortalecer la comunicación entre sistemas.
                sistema de navegación, interfaz hombre-máquina y ubicación para
                informar a los conductores de situaciones peligrosas en las
                carreteras.`,
  [k.PREDICTIVE_VEHICLE_MAINTENANCE]: `Mantenimiento predictivo del vehículo.`,
  [k.COLLECTING_DATA_FROM_IN_VEHICL]: `Recopile datos de las unidades de
                monitoreo de vehículos y aplique análisis predictivos para
                alertar conductores sobre mantenimiento urgente o planificado.`,
  [k.SMART_ROUTING_AND_POI_OPTIMIZA]: `Rutas inteligentes y optimización de POIs`,
  [k.TEACHING_A_VEHICLE_THE_MOST_CO]: `Enseñar a un vehículo las rutas y puntos
                de interés más utilizado a través de la inteligencia artificial
                en el sector automotriz`,
  [k.ABOUT]: `Acerca`,
  [k.ABOUT_US]: 'Sobre nosotros',
  [k.CURRENT]: `(current)`,
  [k.WORK]: `Trabajo`,
  [k.SOLUTIONS]: `Soluciones`,
  [k.SERVICES]: `Servicios`,
  [k.VEHICLE_HARMONIZATION]: `Armonización de vehículos`,
  [k.CONTACT]: `Contacto`,
  [k.LOREM_IPSUM_DOLOR_SIT_AMET_C]: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”`,
  [k.JON_DOE]: `Phil Martin Jr.`,
  [k.JANE_DOE]: `Catherine Philipet`,
  [k.BOB_DOE]: `Leon Rosenthal`,
  [k.PREVIOUS]: `Previous`,
  [k.NEXT]: `Next`,
  [k.SERVICE]: `Servicio`,
  [k.WHAT_WE_DO2]: `QUE HACEMOS`,
  [k.LOREM_IPSUM_DOLOR_SIT_AMET_CO]: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  [k.CLOUD_BASED_SERVICES1]: `SERVICIOS BASADOS EN LA NUBE`,
  [k.LOREM_IPSUM_DOLOR_SIT_AMET_CO1]: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  [k.CUSTOMIZED_OEM_AUTO_SOLUTIONS]: `SOLUCIONES PERSONALIZADAS PARA OEMs`,
  [k.APP_SYSTEM_DESIGN]: `DISEÑO DE APLICACIONES / SISTEMAS`,
  [k.SOME_OF_OUR_WORK]: `ALGUNOS DE NUESTROS TRABAJOS`,
  [k.LANGUAGES]: 'Idioma',
  [k.ENGLISH]: 'en',
  [k.PORTUGUESE]: 'pt',
  [k.HEBREW]: 'he',
  [k.SPANISH]: 'es',
  [k.INTEGRATION]: 'Integracíon',
  [k.SOLUTIONS1]: 'Soluciones',
  [k.APPS]: ' Apps',
  [k.CLOUD]: 'Nube',
  [k.DESIGN]: 'Diseño',
  [k.CERTIFICATIONS]: 'Certificationes',
  [k.ELECTRICALS]: 'Vehículos eléctricos',
  [k.SEND_MESSAGE]: 'Envía tu mensaje',
  [k.COMPANY_NAME]: 'Pointer Automotive',
  [k.INDUSTRIES]: 'Industrias',
  [k.INVESTOR_RELATIONS]: 'Relaciones con inversionistas',
  [k.PRIVACY_POLICY]: 'Política de privacidad',
  [k.COOKIES_POLICY]: 'Política de Cookies',
  [k.TERMS_OF_SERVICE]: 'Términos de servicio',
  [k.COMPANY_NAME]: 'Pointer Automotive',
  [k.COMPANY_ADDRESS]: 'Avenida Andromeda, 723 - Cj 2902',
  [k.CITY]: 'Barueri',
  [k.STATE]: 'Sao Paulo',
  [k.COUNTRY]: 'Brazil',
  [k.ZIP]: '06473-000',
  [k.PHONE]: '+55 11-5555-5555',
  [k.WHATS]: '+55 11-95555-5555',
  [k.EMAIL]: 'contato@pointer.com.br',
  [k.PROFESSIONAL]: 'Servicios profesionales',
  [k.CONSULTING]: 'Servicios de Consultoria',
  [k.INTELLIGENCE]: 'Servicios de Inteligencia',
  [k.CORPORATE_FLEET]: 'Flota corporativa',
  [k.CONNECTED_VEHICLES]: 'Vehículos conectados',
  [k.MOBILITY_SERVICES]: 'Servicios de movilidad',
  [k.DESIGN_TECHNOLOGY]: 'Tecnología y diseño',
  [k.TECHNOLOGY]: 'Technología',
  [k.CUSTOMIZATION]: 'Personalizaciones',
  [k.TELEMATICS]: `Telemática`,
  [k.TELEMATICS_TITLE]: `El poder de nuestra solución integral`,
  [k.HEADUNITS]: 'Integration with OEM Head units - Infotainment devices.',
  [k.TABLETS]: 'Tablets for professional monitoring of your vehicles.',
  [k.SPECIAL]: 'Special devices and OS integration to support your project.',
  [k.OS]: 'Operating Systems: iOS and Android ready.',
  [k.DESIGN1]: "Connection with In-Vehicle WiFi - Hotspot.",
  [k.DESIGN2]: "OEM's `Look and Feel` HMI customizations.",
  [k.DESIGN3]: "UX, UI, HMI customized by OEM vehicle personality.",
  [k.DESIGN4]: "Modularity, Flexibility, Scalability.",
  [k.APPS]: "APPS",
  [k.DESIGN_APP1]: "Design of Apps customization based in the following factors:",
  [k.DESIGN_APP2]: "APP Skin - OEM Brand, colors, logos, letter fonts, letter sizes.",
  [k.DESIGN_APP3]: "App Identity - Classic, Sports, Family, Service, Fleet vehicles, etc.",
  [k.DESIGN_APP4]: "App usage - B2B - Service Private fleet.",
  [k.DESIGN_APP5]: "App usage - B2C - Customers users of the vehicles and services.",
  [k.DESIGN_APP6]: "App Packages: Several packages available to stisfy OEM users",
  [k.DESIGN_APP7]: "App Features for the OEMs - Intelligence Services.",
  [k.DESIGN_APP8]: `App Features for the consumers - Hundreds of different functionalities
                    in several afforadable packages.`,
  [k.OUR_APP]: "Our App",
  [k.DESIGN_OUR_APP1]: "UX, UI Taylored according to OEMs specifications.",
  [k.DESIGN_OUR_APP2]: "Look and Feel based on vehicles category;",
  [k.DESIGN_OUR_APP3]: "On-board marketing toll for services and support.",
  [k.DESIGN_OUR_APP4]: "Operating Systems: iOS and Android ready.",
  [k.DESIGN_OUR_APP5]: "Vehicle Health available at your hands.",
  [k.DESIGN_OUR_APP6]: "Group information for safety, information and fun.",
  [k.DESIGN_OUR_APP7]: "Service support at your service.",
  [k.DESIGN_OUR_APP8]: "Breakdown, Medical, Safety Emergencies.",
  [k.CONNECTED_TITLE]: `Pointer Automotive - Su socio en 'Soluciones Conectadas'`,
  [k.CONNECTED_HEADER]: `Pointer Automotive is working hard in the process of
                        contibute for the Universal definition of 'Connected Vehicle'.
                        Technology is at the heart of the OEM Automotive Industry
                        and the it grows at a pace that is not yet clear where
                        'Connected car' definition will be defined.
                        Automotive manufacturers are selling ‘Connected cars’
                        from a simply connected to the internet
                        cellular connection, with limited feature set, to a fully
                        connected vehicle necessary in all stages of self-driving
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
[k.TCU1]: `High performance quad core processor.`,
[k.TCU2]: `Bluetooth 4.1 (Low Energy).`,
[k.TCU3]: `USB, Ethernet,WiFi (802.11 a/b/g/n) 2.4 GHz with Hotspot.`,
[k.TCU4]: `Scalable NAD 4G Cat12 to 5G`,
[k.TCU5]: `Scalable eMMC - 512MB to 1GB and RAM - 4GB to 16GB`,
[k.TCU6]: `Embedded LINUX Operating System `,
[k.TCU7]: `Options to DSRC.`,
[k.TCU8]: `Options to Ethernet switch and C-V2X`,
[k.DONGLES1]: `High performance quad core Qualcomm processor.`,
[k.DONGLES2]: `Bluetooth 4.1 (Low Energy), 4G/LTE.`,
[k.DONGLES3]: `USB, Ethernet,WiFi (802.11 a/b/g/n) 2.4 GHz with Hotspot.`,
[k.DONGLES4]: `GPS, A-GPS, Accelerometer/Gyroscope.`,
[k.DONGLES5]: `OBD-II or CAN interface, Full suite of OBD-II protocols, Low power consumption.`,
[k.DONGLES6]: `Battery back-up.`,
[k.DONGLES7]: `CAN security, Certifications: FCC, PTCRB`,
[k.DONGLES8]: `Secure Over-the-Air updates, Mobile application for consumer`,
[k.SELECT_ONE]: `Seleccione uno`,
[k.QUOTE]: 'Presupuesto del proyecto',
[k.NEW_PROJECT]: 'Nuevo Proyecto',
[k.SUGGESTIONS]: 'Sugerencias',
[k.TECHNICAL_SUPPORT]: 'Soporte técnico',
[k.FEEDBACK]: 'Feedback',
[k.FLEET_MNGT]: `Manejo de flota`,
[k.DRIVER_BEHAVIOR]: `Conductor Conducta`,
[k.ROAD]: `Condiciones del Camino`,
[k.SMART_APPS]: `Smart Apps`,
[k.PREDICTIVE]: `Mantenimiento predictivo`,
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
[k.MOBILITY_TITLE]: `Movilidad - Oportunidades para OEM automotrices`,
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
[k.CUSTOMIZATIONS_TITLE]: 'Personalizaciones',
[k.CUSTOMIZATIONS_HEAD]: `The new Era of Connected Vehicles and Services is
                          transforming customer behavior in an unprecedent
                          speed. The way you communicate and interact with
                          you customers makes all difference to continue being
                          relevant in the future. Our Mobility & Customized
                          Services helps you to build your own App
                          (Mobile Applications) in a customized and scalable
                          way to generate new revenue business opportunities for
                          data monetization and digital service implementation.`,
[k.CUSTOMIZATIONS1]: `Some services that can be generated to your customers:`,
[k.CUSTOMIZATIONS2]: `Vehicle Health: Daily vehicle checklist. Your customer
                      know vehicle is safety for next trip.`,
[k.CUSTOMIZATIONS3]: `Curfew: Get alerts if your vehicle starts moving in
                      forbidden hours independent where you are.`,
[k.CUSTOMIZATIONS4]: `Driver Behavior: Enhance yearly customer insurance policies
                      price. Help your customers and families to have safety in
                      their heart. Provide them last trip drive behavior and
                      smart drive feedback.`,
[k.CUSTOMIZATIONS5]: `Estimated Time of Arrival: Calculate your arrival time and
                      share with your parents or friends using best routing system.`,
[k.CUSTOMIZATIONS6]: `Preventive Maintenance:  Maintenance Remind. Digital
                      Vehicle Maintenance Schedule with the Dealers.`,
[k.CUSTOMIZATIONS7]: `Anchor: Protect your vehicle! Get real time alerts if your
                      car  start moving. Your insurance know you care about your
                      assets. `,
[k.CUSTOMIZATIONS8]: `Group Interaction: Share defined notification to your family
                      or friend group about you and your car during your trips. `,
[k.CUSTOMIZATIONS9]: `Internet & Entertainment: Be updated! Extend Customer
                      connectivity experience from the house and office to the car.
                      Offer them high speed internet (Wi-Fi, BT, LTE, 5G)
                      embedded in the vehicle. `,
[k.CUSTOMIZATIONS10]: `Recall Management: Save time and resources in Recall
                      advertising by direct communication with your relevant
                      vehicle owners in case of Recalls.`,
[k.CUSTOMIZATIONS11]: `Keyless backup: Open your car with your App with security
                      code in case you lose it.`,
[k.CUSTOMIZATIONS12]: `Market Place: Let your customer get all from your App.
                      Engage them with fuel, parking, parts & pieces promotions
                      using real time data informations. `,
[k.CUSTOMIZATIONS13]: `Colision Notification: Let your customer program automatic notification in case of collision! `,
[k.CUSTOMIZATIONS14]: `Electric Vehicle Management: Keep customers updated about
                      charging location, vehicle autonomy.`,
[k.CUSTOMIZATIONS15]: `Everything that you think that can be explored
                      about vehicle information. Our expertize in customizations
                      let you dream with the App your customers deserve.`,
[k.CORPORATE_TITLE]: 'Flota corporativa',
[k.CORPORATE_HEAD]: `Pointer Connect provides secure interface with other
                     Automotive Partners to aggregate different source of raw
                     information and build a comprehensive customer service
                     package via APIs (Cloud interfaces between Service Platforms).`,
[k.CORPORATE1]: `Brand, Image and reputation are a long journey to be settled by
                OEM by in customer mind. It’s a key business success in
                Automotive segment.`,
[k.CORPORATE2]: `Pointer Connect Platform is hosted in Microsoft Azure Cloud,
                a secure, reliable, scalable and stable environment to run
                Automotive Applications. Microsoft Azure Cloud environment is
                continuously updated to make it even more secure to attend
                General Data Protection Regulation globally.`,
[k.CORPORATE3]: `Pointer performs continuous and extensive penetration tests
                 with specialized 3rd part companies to mitigate risks and to
                 guarantee continuous evolution. The data is stored on encrypted
                 Premium and Standard Storage accounts with 3 copies.
                 Data is also replicated to another backup Disaster Recovery
                 site located in the USA.
`,
[k.CORPORATE4]: `Pointer Intelligence delivers the best BI Graphs and Analytics to
                  the corporate fleet managers in order to help them to extracts the
                  best of the fleet, team and resources related to vehicles.`,
[k.CORPORATE5]: `PConnect architecture is the enabler of the Corporate Fleet Services
                 necessary for the integrations with third parties services: Fuel,
                 Parking, Road Conditions, Gas Stations, Dealer network, etc.`,
[k.CORPORATE6]: ``,
[k.CORPORATE7]: ``,
[k.CORPORATE8]: ``,

};
export { spanish };
