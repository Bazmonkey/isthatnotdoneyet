// =============================================================================
// HOW LONG HAS THIS TAKEN? — CONTENT FILE
// =============================================================================
// Edit this file freely. Paste back into the <script> block of index.html
// when you're done, replacing the existing arrays.
//
// CARD THEMES:
//   Card 1 — 🌍  Global:           Nearest project from GLOBAL_PROJECTS
//   Card 2 — 🚀  Beyond the globe: Random pick from WILD_COMPARISONS
//   Card 3 — 🏴󠁧󠁢󠁳󠁣󠁴󠁿  Closer to home:  Nearest project from LOCAL_PROJECTS
//
// ADDING ENTRIES:
//   Global/Local: { name, days, category, detail, quip }
//   Wild:         { id, getDuration(days) → { count, unit, detail, quip } }
//   Counter quips: arrow function receiving `d` (elapsed days), returns string
//
// TIP ON PARTIAL SCOPES:
//   Where the total project was long but a famous phase was shorter, use the
//   phase duration and name it clearly: "Empire State Building (steel frame)"
//   rather than the full construction. This keeps results relevant for
//   projects in the 200–600 day range and makes the comparison more vivid.
// =============================================================================


// -----------------------------------------------------------------------------
// GLOBAL PROJECTS
// The tool finds the entry with the highest `days` value still below the
// user's elapsed days. Aim for density in the 200–600 day range.
// Format: { name, days, category, detail, quip }
// -----------------------------------------------------------------------------
const GLOBAL_PROJECTS = [

  // -- Under 30 days --
  { name: "D-Day landings (Operation Neptune)", days: 1, category: "Military logistics", detail: "Normandy, June 6, 1944", quip: "The largest seaborne invasion in history. No steering committee required." },
  { name: "First powered aeroplane flight (Wright Brothers)", days: 1, category: "Engineering", detail: "Kitty Hawk, December 17, 1903", quip: "Achieved controlled powered flight on the day. Paperwork: none." },
  { name: "Apollo 11 mission (Earth to Moon to Earth)", days: 8, category: "Space", detail: "July 1969", quip: "Landed on the Moon, planted a flag, came home. Eight days total." },
  { name: "Dunkirk evacuation (Operation Dynamo)", days: 9, category: "Military logistics", detail: "May-June 1940", quip: "Evacuated 338,000 soldiers using civilian boats. Nine days. No project board required." },
  { name: "Sputnik 1 in-orbit phase", days: 21, category: "Space", detail: "USSR, October-November 1957", quip: "The first satellite in space completed its mission in three weeks. Nobody asked for a phased rollout." },

  // -- 30-100 days --
  { name: "Facebook: dorm room to Harvard launch", days: 60, category: "Technology", detail: "Mark Zuckerberg, January-February 2004", quip: "Two months, one dorm room. Still faster." },
  { name: "NASA Ingenuity: Mars landing to first helicopter flight", days: 64, category: "Space", detail: "Jezero Crater, February-April 2021", quip: "Flew a helicopter on another planet. Your Jira board still says 'In Progress'." },
  { name: "SpaceX Falcon 9: static fire to first orbital launch", days: 84, category: "Engineering", detail: "SpaceX, June-September 2010", quip: "From engine test to orbital launch in twelve weeks. Elon Musk's tolerance for dependencies is limited." },
  { name: "Google: working prototype to public launch", days: 90, category: "Technology", detail: "Brin & Page, Stanford, 1997", quip: "Indexed the internet and opened it to the public in three months. The requirements document was apparently quite short." },

  // -- 100-200 days --
  { name: "North American P-51 Mustang: design contract to first flight", days: 117, category: "Engineering", detail: "North American Aviation, April-September 1940", quip: "One of the finest fighter aircraft ever built, designed and flown in 117 days. The team had not yet discovered the retrospective." },
  { name: "Empire State Building -- steel frame (all 102 floors)", days: 180, category: "Construction", detail: "New York, April-September 1930", quip: "The entire structural steel frame of 102 floors erected in six months. No RAG status updates required." },
  { name: "Lockheed U-2 spy plane: design to first flight", days: 224, category: "Engineering", detail: "Skunk Works, California, 1954-1955", quip: "A high-altitude reconnaissance aircraft designed in secret and flown in under eight months. Kelly Johnson considered two years a reasonable upper bound for any project." },

  // -- 200-300 days --
  { name: "Mars Curiosity rover: launch to landing", days: 254, category: "Space", detail: "NASA, November 2011-August 2012", quip: "Launched, flew 352 million miles, landed with pinpoint precision. Under nine months." },
  { name: "Deepwater Horizon oil well drilled (MC252)", days: 259, category: "Engineering", detail: "Gulf of Mexico, October 2009-April 2010 (to blowout)", quip: "An exploratory well drilled to 35,000 feet in under nine months. The subsequent plugging operation ran to a different schedule entirely." },
  { name: "Instagram: concept to App Store launch", days: 270, category: "Technology", detail: "Systrom & Krieger, January-October 2010", quip: "A photo app that later sold for $1 billion. Nine months, two people." },
  { name: "Burj Al Arab -- structural frame", days: 270, category: "Construction", detail: "Dubai, approximately 1995 structural phase", quip: "The structural frame of the world's most recognisable hotel. Nine months. No one was going to argue with the timeline." },

  // -- 300-400 days --
  { name: "Original Wembley Stadium", days: 300, category: "Construction", detail: "London, January 1922-April 1923", quip: "Built in 300 days for the British Empire Exhibition. Hosted the 'White Horse' FA Cup Final on opening day." },
  { name: "WhatsApp: initial build to App Store", days: 300, category: "Technology", detail: "Koum & Acton, 2009", quip: "Built by two people. Now has 2 billion users. Ten months." },
  { name: "Viking 1: launch to Mars landing", days: 304, category: "Space", detail: "NASA, August 1975-July 1976", quip: "The 1970s apparently had better delivery timelines than most digital transformation programmes." },
  { name: "Spitfire prototype: design brief to first flight", days: 306, category: "Engineering", detail: "Supermarine Aviation, 1934-1936", quip: "One of history's most celebrated aircraft -- designed and flown in about ten months." },
  { name: "Oxford-AstraZeneca COVID-19 vaccine: trial start to emergency authorisation", days: 310, category: "Science", detail: "April-December 2020", quip: "A vaccine developed across three continents and authorised for use in ten months. The phase III trial involved 24,000 participants. Paperwork was not the bottleneck." },
  { name: "Pfizer-BioNTech COVID-19 vaccine: trial start to emergency authorisation", days: 312, category: "Science", detail: "April-December 2020", quip: "Phase III trial to emergency use authorisation in ten months. Full regulatory review apparently optional when sufficiently motivated." },
  { name: "Berlin Airlift", days: 321, category: "Military logistics", detail: "June 1948-May 1949", quip: "Supplied an entire city by air for almost a year. Improvised from scratch with no prior playbook." },
  { name: "HMS Dreadnought: keel laid to commissioned", days: 366, category: "Engineering", detail: "Portsmouth, October 1905-December 1906", quip: "Laid, launched, and commissioned in 366 days. Made every other battleship in the world obsolete immediately upon arrival. No lessons learned session was held." },
  { name: "Twitter: concept to public launch", days: 365, category: "Technology", detail: "Jack Dorsey, 2006", quip: "A globally used social network -- designed, built, and launched in one year." },
  { name: "App Store: iPhone launch to App Store opening", days: 365, category: "Technology", detail: "Apple, June 2007-July 2008", quip: "An entire app ecosystem -- platform, SDK, developer tools, review process, launch. One year." },
  { name: "Manhattan Project: Trinity test site construction to detonation", days: 365, category: "Engineering", detail: "New Mexico, July 1944-July 1945", quip: "Built and detonated a nuclear device in one year. Classified, obviously. Unlike your project's status." },

  // -- 400-550 days --
  { name: "Boeing 314 Clipper flying boat: contract to first flight", days: 395, category: "Engineering", detail: "Boeing, July 1936-June 1938", quip: "A transatlantic passenger flying boat carrying 74 people, designed and built in just over a year. Pre-CAD." },
  { name: "Empire State Building (full construction)", days: 410, category: "Construction", detail: "New York, March 1930-April 1931", quip: "The full building: 410 days, 102 floors, 3,400 workers per day. Built during the Great Depression." },
  { name: "Panama Canal -- Culebra Cut (main excavation phase)", days: 425, category: "Construction", detail: "Panama, approx active cut 1911-1913", quip: "They dug a nine-mile channel through a mountain range. With steam shovels. No contractor claims were approved either." },
  { name: "Glenfinnan Viaduct (the 'Harry Potter Bridge')", days: 456, category: "Construction", detail: "Scottish Highlands, July 1897-October 1898", quip: "21 concrete arches over the River Finnan. Built in 15 months using pioneering mass concrete. Now on the Bank of Scotland £10 note." },
  { name: "Pentagon", days: 491, category: "Construction", detail: "Arlington, Virginia, September 1941-January 1943", quip: "The world's largest office building. Built during an active world war. No change freeze required." },
  { name: "Wikipedia: launch to 1 million English articles", days: 503, category: "Technology", detail: "January 2001-September 2002", quip: "One million encyclopaedia articles written voluntarily by strangers in 16 months. No one had a job title. No one was waiting for a content strategy." },

  // -- 550-800 days --
  { name: "Millau Viaduct (main construction phase)", days: 548, category: "Construction", detail: "Southern France, 2001-2004", quip: "The world's tallest bridge, with a pier taller than the Eiffel Tower. The main structure took about 18 months." },
  { name: "Large Hadron Collider -- final installation and commissioning", days: 548, category: "Science", detail: "CERN, Geneva, approximately 2007-2008", quip: "Assembled the most complex scientific instrument ever built and smashed protons in 18 months. Still awaiting sign-off on your requirements doc." },
  { name: "Chrysler Building", days: 609, category: "Construction", detail: "New York, September 1928-May 1930", quip: "An Art Deco icon, briefly the world's tallest building. Built at four floors per week. Zero worker fatalities." },
  { name: "USS Enterprise (CV-6): keel to commissioning", days: 730, category: "Engineering", detail: "Newport News, Virginia, July 1934-May 1938", quip: "One of the most celebrated aircraft carriers in US naval history. Keel to commission in approximately two years. She earned 20 battle stars. The project board did not query the scope." },
  { name: "International Space Station -- first module to first crew", days: 728, category: "Space", detail: "November 1998-November 2000", quip: "Assembled a habitable space station in orbit and moved people in. Two years. Nobody got stuck in discovery." },
  { name: "World Wide Web: proposal to first public website", days: 730, category: "Technology", detail: "CERN, Geneva, March 1989-August 1991", quip: "Invented the internet as we know it. Two years, one man, one NeXT cube." },
  { name: "Trans-Siberian Railway -- first through service (Manchurian route)", days: 730, category: "Construction", detail: "Russia, first through service ~1903", quip: "9,289km of railway across a continent. The first trains ran roughly within schedule. That was before agile methodology." },
  { name: "Android: Google acquisition to public launch (Android 1.0)", days: 730, category: "Technology", detail: "Google, August 2005-September 2008", quip: "Bought a small startup and built a mobile operating system now running 3 billion devices. Two years of focused effort, no Agile ceremonies on record." },
  { name: "Eiffel Tower", days: 777, category: "Construction", detail: "Paris, January 1887-March 1889", quip: "Critics called it an eyesore. Took just over two years. Now defines a city." },

  // -- 800-1100 days --
  { name: "ENIAC: world's first general-purpose programmable computer", days: 912, category: "Engineering", detail: "University of Pennsylvania, 1943-1945", quip: "Filled an entire room and weighed 27 tonnes. Still built in under three years." },
  { name: "Apollo programme: Kennedy's speech to first crewed lunar orbit (Apollo 8)", days: 912, category: "Space", detail: "May 1961-December 1968", quip: "From 'we choose to go to the Moon' to men actually orbiting it. Seven and a half years. This project has a different relationship with ambition." },
  { name: "Lockheed SR-71 Blackbird: concept to first flight", days: 994, category: "Engineering", detail: "Skunk Works, 1959-1962", quip: "A Mach 3 spy plane developed in under three years. Kelly Johnson ran a very tight ship." },

  // -- 1000-2000 days --
  { name: "iPhone: conception to public launch", days: 1001, category: "Technology", detail: "Apple, 2004-June 2007", quip: "Changed how every human on Earth communicates. Under three years. One keynote." },
  { name: "Concorde: first commercial flight to last (full service life)", days: 1003, category: "Engineering", detail: "British Airways/Air France, January 1976-October 2003", quip: "Flew passengers at twice the speed of sound for 27 years. Retired before most organisational strategies get implemented." },
  { name: "Titanic: keel laid to departure on maiden voyage", days: 1041, category: "Construction", detail: "Harland & Wolff, Belfast, 1909-1912", quip: "Built in under three years. The iceberg took two hours. Not the ship's fault." },
  { name: "Channel Tunnel: first TBM launch to breakthrough", days: 1095, category: "Construction", detail: "UK-France, December 1988-December 1991", quip: "Dug a tunnel under the sea from both ends and met in the middle. Nailed it." },
  { name: "Salk polio vaccine: field trial start to FDA licence", days: 1095, category: "Science", detail: "USA, April 1954-April 1957", quip: "Tested on 1.8 million children, analysed, and licensed in three years. It ended a disease that had paralysed tens of thousands annually. The stakeholder group was motivated." },
  { name: "Windows 95", days: 1096, category: "Technology", detail: "Microsoft, 1992-August 1995", quip: "Defined a generation of computing. Three years. Launched with a Rolling Stones soundtrack and a prayer." },
  { name: "Boeing 747: programme launch to first flight", days: 1096, category: "Engineering", detail: "Boeing, March 1966-February 1969", quip: "The largest commercial aircraft in the world at the time. Three years from programme launch to first flight. Boeing's entire workforce reportedly held its breath." },
  { name: "Linux: first kernel to version 1.0", days: 1096, category: "Technology", detail: "Linus Torvalds, August 1991-March 1994", quip: "An operating system written by a student in his spare time, now running most of the internet. Three years. No budget." },
  { name: "Hubble Space Telescope: launch to corrected optics", days: 1317, category: "Space", detail: "April 1990-December 1993", quip: "Launched with a flawed mirror, then fixed it. In space. Three years and the most audacious repair job in history." },
  { name: "LHC: first proton collision to Higgs boson confirmation", days: 1461, category: "Science", detail: "CERN, November 2009-July 2012", quip: "Found a particle that had been theorised for 48 years. Four years of collisions, petabytes of data, a press conference. No one asked for a progress update in month three." },
  { name: "Saturn V rocket: contract award to first launch", days: 1461, category: "Engineering", detail: "NASA, 1963-November 1967", quip: "The most powerful rocket ever built. Four years from contract to first launch." },
  { name: "Golden Gate Bridge", days: 1568, category: "Construction", detail: "San Francisco, January 1933-May 1937", quip: "One of the most recognisable structures on Earth. Just over four years." },
  { name: "Heathrow Terminal 5 -- main construction phase", days: 1644, category: "Construction", detail: "London, approx September 2002-March 2008", quip: "Europe's largest free-standing building and the UK's busiest terminal. Main construction took about four and a half years. The baggage system's readiness on opening day is a separate matter." },
  { name: "Hoover Dam", days: 1744, category: "Construction", detail: "Nevada/Arizona, April 1931-March 1936", quip: "Tamed the Colorado River and powered the American south-west. Five years. Finished two years ahead of schedule." },
  { name: "Windows Vista: public announcement to release", days: 1825, category: "Technology", detail: "Microsoft, April 2003-January 2007", quip: "Announced, delayed, delayed again, and eventually shipped five years later. It was not worth the wait. This is its legacy and its gift to you: context." },
  { name: "USS Nautilus: keel to first nuclear power", days: 1825, category: "Engineering", detail: "Groton, Connecticut, June 1952-January 1955", quip: "The world's first nuclear-powered submarine. Keel laid to reactor going critical: five years. It was a new kind of engineering. There was no template. Still faster." },

  // -- 2000+ days --
  { name: "Burj Khalifa", days: 2190, category: "Construction", detail: "Dubai, September 2004-January 2010", quip: "The world's tallest building. Six years. Constructed in 50 degree heat with 12,000 workers on site daily." },
  { name: "RMS Queen Mary: keel laid to maiden voyage", days: 2190, category: "Engineering", detail: "John Brown & Co., Clydebank, December 1930-May 1936", quip: "One of the greatest ocean liners ever built, launched from the Clyde and completed in six years -- including a two-year halt during the Depression when the money ran out. She re-entered service without holding a lessons learned session." },
  { name: "Concorde: first flight to entering passenger service", days: 2557, category: "Engineering", detail: "January 1969-January 1976", quip: "A supersonic passenger jet cleared for commercial flight. About seven years from first flight to service." },
  { name: "Three Gorges Dam -- main construction phase", days: 3287, category: "Construction", detail: "China, December 1994-October 2008 (first full power)", quip: "The world's largest hydroelectric power station. Nine years of main construction, involving 27,000 workers at peak. The river was diverted on schedule. It did not wait for a business case refresh." },
  { name: "Panama Canal (US construction phase)", days: 3652, category: "Construction", detail: "1904-1914", quip: "Joined two oceans. Ten years. Still finished it." },
  { name: "Human Genome Project", days: 4745, category: "Science", detail: "International consortium, 1990-2003", quip: "Mapped every gene in the human body. 13 years, 20 institutions, 6 countries. Worth it." },
  { name: "Brooklyn Bridge", days: 5020, category: "Construction", detail: "New York, January 1869-May 1883", quip: "14 years, three chief engineers, multiple deaths. Still standing after 140 years." },
  { name: "Sydney Opera House", days: 5478, category: "Construction", detail: "Sydney, 1958-1973", quip: "Yes, it took 15 years. But at least it's not still in the approval phase." },
];


// -----------------------------------------------------------------------------
// LOCAL PROJECTS -- "Closer to home"
// Scottish and UK projects. Dense coverage in 300-600 days especially useful.
// Format: { name, days, category, detail, quip }
// -----------------------------------------------------------------------------
const LOCAL_PROJECTS = [

  // -- Under 200 days --
  { name: "Falkirk Tunnel (Union Canal restoration)", days: 120, category: "Engineering", detail: "Scotland, 2000-2001", quip: "A 183-metre canal tunnel drained, repaired, and reopened in four months as part of the Millennium Link project. The Union Canal had been closed since 1965. Nobody needed a workshop to decide if it was worth doing." },
  { name: "Stansted Airport -- terminal fit-out (Foster + Partners)", days: 180, category: "Construction", detail: "Stansted, Essex, approx 1990-1991 fit-out phase", quip: "A landmark terminal building for a major international airport, completed in roughly six months of main fit-out works." },

  // -- 200-300 days --
  { name: "Tay Road Bridge -- main deck installation", days: 240, category: "Construction", detail: "Dundee, approx 1965-66 deck phase", quip: "The longest road bridge in the UK at the time. The main deck sections were installed in eight months." },
  { name: "M80 Stepps to Haggs upgrade (main carriageway works)", days: 270, category: "Construction", detail: "Scotland, approx 2009-2011 active works phase", quip: "22km of Scottish motorway upgraded in under a year of active works. The surrounding roads showed no such urgency." },
  { name: "Commonwealth Games 2014 athletes' village, Glasgow (structural phase)", days: 270, category: "Construction", detail: "Glasgow, approx 2012 structural works", quip: "The structural shell of housing for 6,500 athletes, erected in about nine months. Later converted to flats. Neither phase took as long as your project." },
  { name: "Borders Railway: track-laying and fit-out phase", days: 300, category: "Construction", detail: "Scotland, 2014-2015", quip: "35 miles of new railway track laid in roughly ten months. The line had been closed for 46 years, which put a certain pressure on the schedule." },

  // -- 300-500 days --
  { name: "Original Wembley Stadium", days: 300, category: "Construction", detail: "London, January 1922-April 1923", quip: "300 days, 25,000 tonnes of concrete. Hosted the FA Cup Final on opening weekend." },
  { name: "Cairngorm Mountain Railway", days: 365, category: "Engineering", detail: "Highland, construction phase 2000-2001", quip: "Britain's highest railway. Built on a mountain. Under a year." },
  { name: "Forth Road Bridge: main span erection", days: 365, category: "Construction", detail: "Scotland, approx structural phase 1963-64", quip: "The main span of what was Europe's longest suspension bridge at opening. One year." },
  { name: "Falkirk Wheel: construction phase", days: 365, category: "Construction", detail: "Scotland, 2001-2002", quip: "An entirely unique rotating boat lift, assembled in roughly 12 months. Nothing remotely like it existed beforehand." },
  { name: "Edinburgh Park tram extension (Ingliston branch)", days: 365, category: "Construction", detail: "Edinburgh, 2013-2014", quip: "Extended the tram network to Edinburgh Airport in just over a year. Quietly delivered, unlike its predecessor." },
  { name: "Edinburgh Gateway station (Gogar interchange)", days: 365, category: "Construction", detail: "Edinburgh, 2015-2016", quip: "A new transport interchange connecting tram and rail, built in a year. Opened with minimal fanfare, which is how delivery should feel." },
  { name: "Glenfinnan Viaduct (the 'Harry Potter Bridge')", days: 456, category: "Construction", detail: "Scottish Highlands, July 1897-October 1898", quip: "21 concrete arches over the River Finnan. 15 months. Pioneering mass concrete construction. On the Bank of Scotland £10 note." },
  { name: "Glasgow Velodrome (Sir Chris Hoy Velodrome)", days: 456, category: "Construction", detail: "Glasgow, 2011-2012", quip: "A world-class cycling venue delivered for the 2014 Commonwealth Games. Under 18 months." },
  { name: "Perth Concert Hall -- construction phase", days: 456, category: "Construction", detail: "Perth, approx 2003-2005", quip: "A purpose-built concert hall for a Scottish city. About 15 months of main construction. Opened without incident. No subsequent inquiry." },
  { name: "HS2 Phase 1: Old Oak Common station (main structure)", days: 480, category: "Construction", detail: "London, approx 2022 main pour phase", quip: "One of Europe's largest railway stations -- box structure and platforms poured in about 16 months. The wider project's schedule is a separate matter." },

  // -- 500-1000 days --
  { name: "M8 widening between Glasgow and Edinburgh (main works)", days: 548, category: "Construction", detail: "Scotland, approx 2015-2017 main phases", quip: "Scotland's busiest motorway widened while carrying 90,000 vehicles a day. 18 months of live carriageway works. Zero sympathy from the drivers sitting in it." },
  { name: "Queensferry Crossing -- cable installation", days: 548, category: "Construction", detail: "Scotland, approx 2015-2016 cabling phase", quip: "23,000 miles of cable strung across the Forth in 18 months. That's nearly the circumference of the Earth. The programme board presumably noticed." },
  { name: "A9 dualling (Luncarty to Pass of Birnam) -- main works", days: 548, category: "Construction", detail: "Perthshire, approx 2022-2024", quip: "One completed section of the A9 dualling. The rest of the scheme is on a schedule best described as ambitious." },
  { name: "Inverness Airport -- new terminal building", days: 548, category: "Construction", detail: "Inverness, approx 2022-2024", quip: "A new terminal for the Highlands' main airport, built in about 18 months. Opened on time. Inverness did not hold a public inquiry about it." },
  { name: "Beatrice Offshore Wind Farm -- main installation phase", days: 548, category: "Engineering", detail: "Moray Firth, approx 2017-2019 offshore works", quip: "84 turbines installed in the Moray Firth in roughly 18 months. In the North Sea. In winter. The weather did not submit a change request." },
  { name: "Gleneagles Hotel", days: 730, category: "Construction", detail: "Perthshire, 1922-1924", quip: "A luxury hotel in the Scottish countryside. Two years. No Gantt chart required." },
  { name: "National Museum of Scotland -- renovation and extension", days: 730, category: "Construction", detail: "Edinburgh, approx 2009-2011 main works", quip: "Closed for two years, gutted, and reopened to international acclaim. The project team was not invited to explain themselves to a public inquiry." },
  { name: "Edinburgh Tram extension to Newhaven (main works)", days: 730, category: "Construction", detail: "Edinburgh, approx 2019-2021 main construction", quip: "A tram extension that actually ran broadly to time. Remarkable given the first line's history." },
  { name: "Dundee Waterfront -- central plaza and V&A approach (main works)", days: 820, category: "Construction", detail: "Dundee, approx 2015-2017", quip: "Two years to transform a post-industrial riverside into an award-winning public space. The ambition was considerable. The delivery, for once, matched it." },
  { name: "M74 completion through Glasgow", days: 912, category: "Construction", detail: "Glasgow, approx 2008-2011", quip: "Extended the motorway into central Glasgow in under three years. The city's transport network remains a work in progress." },
  { name: "Glasgow Queen Street station -- main reconstruction", days: 912, category: "Construction", detail: "Glasgow, 2016-2020 phased works", quip: "Rebuilt Scotland's second-busiest station while trains kept running. Three years. Apparently no one thought to mention this level of inconvenience in advance." },
  { name: "Aberdeen Western Peripheral Route (AWPR) -- main construction", days: 912, category: "Construction", detail: "Aberdeen bypass, 2016-2019", quip: "A bypass around Scotland's third-largest city. Three years. The consultation took almost as long." },

  // -- 1000-2000 days --
  { name: "Kessock Bridge, Inverness", days: 1461, category: "Construction", detail: "Highland, 1978-1982", quip: "Connected the Black Isle to Inverness. Four years. Now carries 30,000 vehicles a day." },
  { name: "Beauly-Denny power line upgrade", days: 1460, category: "Engineering", detail: "Scotland, approx 2010-2015 construction phase", quip: "220km of high-voltage power line through some of Scotland's finest scenery. Four years of planning battles, four years of building." },
  { name: "V&A Dundee", days: 1826, category: "Construction", detail: "Dundee, 2014-2018", quip: "Scotland's first design museum, designed by Kengo Kuma. Five years from groundbreak to opening." },
  { name: "Queensferry Crossing: main construction", days: 1826, category: "Construction", detail: "Scotland, 2011-2017", quip: "A cable-stayed bridge across the Firth of Forth with 23,000 miles of cabling. Less than five years to build." },
  { name: "Edinburgh St James Quarter", days: 1826, category: "Construction", detail: "Edinburgh, 2016-2021", quip: "Demolished and replaced a major chunk of the east end of Princes Street in five years. Planning took longer than construction." },
  { name: "Cruachan Power Station -- main construction", days: 2190, category: "Engineering", detail: "Argyll, 1959-1966 (first power 1965)", quip: "A hydroelectric power station carved inside a mountain. The machine hall is large enough to fit the Albert Hall. Six years. Nobody asked whether hollowing out a mountain was in scope." },

  // -- 2000+ days --
  { name: "Forth Bridge (original railway bridge)", days: 2556, category: "Construction", detail: "Scotland, 1883-1890", quip: "The first major structure in Britain built from steel. Still carries rail traffic today. A UNESCO World Heritage Site." },
  { name: "Edinburgh Tram: contract award to first passenger service", days: 2556, category: "Construction", detail: "Edinburgh, 2008-2014", quip: "Arrived six years late, on a truncated route, at roughly triple the original budget. Now inexplicably cherished." },
  { name: "Scottish Parliament Building, Holyrood", days: 2557, category: "Construction", detail: "Edinburgh, 1999-2004", quip: "Came in ten times over budget and three years late. You're in good company." },
  { name: "Crossrail / Elizabeth line", days: 4745, category: "Construction", detail: "London, contracted works 2010-2022", quip: "Goes under London in both directions. Also ran considerably late. Solidarity." },
];


// -----------------------------------------------------------------------------
// WILD COMPARISONS -- "Beyond the globe"
// One is picked at random each time. Add new entries following the pattern.
// getDuration(days) must return: { count, unit, detail, quip }
// -----------------------------------------------------------------------------
const WILD_COMPARISONS = [
  { id: "apollo", getDuration: days => { const missions = Math.floor(days / 8.5); return { count: missions, unit: "Apollo-style Moon missions", detail: `~${Math.round(missions * 477000 * 2).toLocaleString()} miles of crewed lunar travel`, quip: `Each Apollo round trip took about 8-9 days. That's ${missions} complete missions -- flags planted, Moon rocks collected, splashdowns. All while this has been in the backlog.` }; } },
  { id: "artemis2", getDuration: days => { const missions = Math.floor(days / 10); return { count: missions, unit: "Artemis II-style crewed lunar flybys", detail: `~${(missions * 590000).toLocaleString()} miles of deep-space crewed travel`, quip: `Artemis II is a ~10-day crewed lunar flyby -- further from Earth than any human since Apollo 17. That's ${missions} full missions done and dusted while this has been running.` }; } },
  { id: "voyager", getDuration: days => { const au = (days / 93).toFixed(1); return { count: (days * 1000000).toLocaleString(), unit: "miles Voyager 1 has travelled", detail: `~${au} AU -- Earth to Sun is 1 AU`, quip: `Launched in 1977, Voyager 1 covers about a million miles a day and is now in interstellar space. It has not paused for a retrospective or waited for stakeholder sign-off.` }; } },
  { id: "iss", getDuration: days => { const orbits = Math.round(days * 15.5).toLocaleString(); return { count: orbits, unit: "orbits of Earth by the ISS", detail: `~${Math.round(days * 15.5 * 27600).toLocaleString()} miles at 17,500 mph`, quip: `The International Space Station orbits Earth about 15-16 times a day. It has lapped the planet ${orbits} times since this kicked off. It has never asked for more resource.` }; } },
  { id: "lightyears", getDuration: days => { const ly = (days / 365.25).toFixed(3); return { count: ly, unit: "light-years of photon travel", detail: `Light covers ~300,000 km every second`, quip: `Since this started, light has travelled ${ly} light-years. Somewhere out there, photons from the day it kicked off are still going. They have made considerably more progress.` }; } },
  { id: "heartbeats", getDuration: days => { const beats = Math.round(days * 24 * 60 * 70).toLocaleString(); return { count: beats, unit: "human heartbeats (avg resting rate)", detail: `At 70 bpm, 24 hours a day, every day`, quip: `Your heart has beaten roughly ${beats} times since this started. It remains committed to delivering. Unlike the timeline.` }; } },
  { id: "moonorbits", getDuration: days => { const orbits = Math.floor(days / 27.3); return { count: orbits, unit: "times the Moon has orbited Earth", detail: `The Moon completes one orbit every ~27.3 days`, quip: `The Moon has completed ${orbits} full orbits of Earth since this project started. It does not require sign-off to proceed. It doesn't even have a project manager.` }; } },
  { id: "lightning", getDuration: days => { const strikes = Math.round(days * 24 * 60 * 60 * 100).toLocaleString(); return { count: strikes, unit: "lightning strikes on Earth", detail: `Earth sees ~100 lightning strikes per second`, quip: `Roughly ${strikes} lightning bolts have hit the Earth since this started. Each one resolved faster than the average action item.` }; } },
  { id: "saturndays", getDuration: days => { const saturnDays = Math.round(days * (24 / 10.7)).toLocaleString(); return { count: saturnDays, unit: "days on Saturn", detail: `Saturn's day is only 10.7 hours long`, quip: `Saturn has experienced ${saturnDays} complete days since your project started. It has rings, which is something. It has not scheduled a single check-in.` }; } },
  { id: "birch", getDuration: days => { const cm = Math.round(days * (100 / 365)); return { count: cm, unit: "cm a silver birch has grown", detail: `Silver birch grows ~1 metre per year in good conditions`, quip: `A silver birch planted on your project start date has grown approximately ${cm}cm. No dependencies. No blockers. Clear upward momentum.` }; } },
  { id: "nile", getDuration: days => { const km = Math.round(days * 2.9).toLocaleString(); return { count: km, unit: "km of water the Nile has carried to the sea", detail: `Based on average current speed near the delta`, quip: `The Nile has moved an estimated ${km}km worth of water to the Mediterranean since this project began. It has done so without a single escalation email.` }; } },
  { id: "earthrotations", getDuration: days => { return { count: Math.round(days).toLocaleString(), unit: "complete rotations of the Earth", detail: `The Earth turns ~${Math.round(days * 360).toLocaleString()} degrees since your start date`, quip: `The Earth has spun on its axis ${Math.round(days).toLocaleString()} times since this started. Every single rotation: on time, on spec, no dependencies outstanding.` }; } },
  { id: "tides", getDuration: days => { const tides = Math.round(days * 2).toLocaleString(); return { count: tides, unit: "tides in and out around the UK coast", detail: `Approximately 2 tidal cycles per day at most UK locations`, quip: `The tide has come in and gone out roughly ${tides} times since this project started. It has never missed a deadline. It is not available for a lessons learned workshop.` }; } },
  { id: "babies", getDuration: days => { const babies = Math.round(days * 24 * 60 * 4.5).toLocaleString(); return { count: babies, unit: "babies born worldwide", detail: `~4.5 births per minute globally`, quip: `Approximately ${babies} people have entered the world since this project started. Some of them will be old enough to work on the next version by the time this one is done.` }; } },
  { id: "flights", getDuration: days => { const flights = Math.round(days * 110000).toLocaleString(); return { count: flights, unit: "commercial flights completed globally", detail: `~110,000 commercial flights depart worldwide each day`, quip: `An estimated ${flights} commercial flights have taken off and landed since this project began. All of them had a departure time, an arrival time, and a gate. Several were even on time.` }; } },
  { id: "emailssent", getDuration: days => { const emails = Math.round(days * 347000000000).toLocaleString(); return { count: emails, unit: "emails sent globally", detail: `~347 billion emails are sent every day worldwide`, quip: `Roughly ${emails} emails have been sent since this project started. A meaningful proportion of them were probably status updates saying it was on track.` }; } },
  { id: "irnbru", getDuration: days => { const cans = Math.round(days * 820000).toLocaleString(); return { count: cans, unit: "cans of Irn-Bru produced", detail: `AG Barr produces approximately 300 million units of Irn-Bru per year`, quip: `An estimated ${cans} cans of Irn-Bru have rolled off the line in Cumbernauld since this project started. Each one ready for consumption within seconds. Benchmark figures are available on request.` }; } },
  { id: "scotsrain", getDuration: days => { const litres = Math.round(days * 320000000000).toLocaleString(); return { count: litres, unit: "litres of rain fallen on Scotland", detail: `Scotland averages ~1,500mm of rainfall per year across 78,000 km2`, quip: `An estimated ${litres} litres of rain have fallen on Scotland since this started. It got back up, dried off, and got on with things. No retrospective was held.` }; } },
  { id: "spotify", getDuration: days => { const streams = Math.round(days * 620000000).toLocaleString(); return { count: streams, unit: "songs streamed on Spotify globally", detail: `~620 million streams per day worldwide`, quip: `An estimated ${streams} songs have been streamed on Spotify since this project started. Every single one had a defined start, a defined end, and delivered what it promised.` }; } },
  { id: "scottishprem", getDuration: days => { const matches = Math.round(days * (198 / 280)); const seasons = (days / 280).toFixed(1); return { count: matches, unit: "Scottish Premiership matches played", detail: `198 league matches per season over ~280 days`, quip: `Approximately ${matches} Scottish Premiership matches have been played since this project started -- roughly ${seasons} full seasons. Each one had a result by 90 minutes. None are still in progress.` }; } },
  { id: "wheelrevs", getDuration: days => { const revs = Math.round(days * 1152000).toLocaleString(); return { count: revs, unit: "wheel revolutions at 60mph", detail: `A car wheel at 60mph rotates ~48,000 times per hour`, quip: `If a car had been doing 60mph since this project started, its wheels would have completed approximately ${revs} full revolutions. The car would have gone nowhere useful either, but at least it was moving.` }; } },
  { id: "treesplanted", getDuration: days => { const trees = Math.round(days * 41000000).toLocaleString(); return { count: trees, unit: "trees planted globally", detail: `~15 billion trees are planted worldwide each year`, quip: `An estimated ${trees} trees have been planted around the world since this project started. Each one: in the ground, growing, making progress. Not one of them waiting for stakeholder alignment.` }; } },
  { id: "teacups", getDuration: days => { const cups = Math.round(days * 100000000).toLocaleString(); return { count: cups, unit: "cups of tea drunk in the UK", detail: `~100 million cups of tea are consumed in the UK every day`, quip: `An estimated ${cups} cups of tea have been drunk in the UK since this project started. Every single one was ready in under five minutes. None required sign-off from a steering group.` }; } },
  { id: "earthorbit", getDuration: days => { const km = Math.round(days * 2570000).toLocaleString(); return { count: km, unit: "km the Earth has travelled around the Sun", detail: `Earth orbits the Sun at ~107,000 km/h, covering ~940 million km per year`, quip: `The Earth has travelled approximately ${km}km around the Sun since this project started. It completes the full 940-million-kilometre lap every year, without a single planning meeting.` }; } },
  { id: "beerpints", getDuration: days => { const pints = Math.round(days * 428000).toLocaleString(); return { count: pints, unit: "pints of beer consumed in Scotland", detail: `~3 million pints per week consumed across Scotland`, quip: `An estimated ${pints} pints of beer have been consumed in Scotland since this project started. Each one ordered, delivered, and completed in under ten minutes. A model of end-to-end delivery.` }; } },
  { id: "steps", getDuration: days => { const steps = Math.round(days * 8000).toLocaleString(); const jogles = (days * 8000 / 3000000).toFixed(2); return { count: steps, unit: "steps taken by an average person", detail: `At 8,000 steps/day; Land's End to John o' Groats is ~3 million steps`, quip: `An average person walking 8,000 steps a day would have taken ${steps} steps since this project started -- about ${jogles} end-to-end walks of Britain. They would have arrived. Multiple times.` }; } },
];


// -----------------------------------------------------------------------------
// COUNTER QUIPS
// Shown under the large day count. One picked at random each time.
// `d` = elapsed days
// -----------------------------------------------------------------------------
const COUNTER_QUIPS = [
  d => `Rome wasn't built in a day. Probably didn't take this long though.`,
  d => `Good things come to those who wait. Anyone waiting for this to be done will be expecting a massive lottery win any day now.`,
  d => `It'll be ready when it's ready. We might all be dead first though.`,
  d => `Slow and steady wins the race. If there is a limit to just how slow, you will find it.`,
  d => `The wheels of progress turn slowly. Your wheels fell off.`,
  d => `You can't rush perfection. Which is why we call you Perfection behind your back.`,
  d => `It's a marathon, not a sprint. No one is mistaking you for a sprinter.`,
  d => `Better late than never. Feels like a coin toss for which one we are going to get though.`,
  d => `Patience is a virtue. We must all be the most virtuous people alive with the patience this is taking.`,
  d => `A watched pot never boils. There must be a ridiculous number of eyes on this then.`,
  d => `There aren't enough hours in the day. It's not really about the hours though when you can barely measure this with a calendar.`,
  d => `It's about the journey, not the destination. Because no one is expecting to see this finished.`,
  d => `We're nearly there. Except we're really not.`,
  d => `Time waits for no man, but it will need to be more patient if it wants to see this finished.`,
  d => `Nothing in life is certain, except death and taxes... oh, and this task still being in progress next year.`,
  d => `Every journey begins with a single step. With this task it feels like you took that one step, fell over, and then couldn't get back up.`,
  d => `The best time to plant a tree was 20 years ago. Roughly the same time that backwards scheduling would have told you to start this.`,
  d => `Time flies when you are having fun. This isn't fun for anyone though.`,
  d => `${Math.floor(d / 7).toLocaleString()} weekly status updates. Every one said 'on track'.`,
  d => `At four floors per week -- the pace of the Empire State Building -- you'd have built ${Math.floor(d / 7 * 4).toLocaleString()} floors by now.`,
  d => `The Spitfire went from design brief to first flight in 306 days. It had rather fewer approval gates.`,
  d => `NASA launched, flew to Mars, and landed a rover in 254 days. Asking for a friend.`,
  d => `The Pentagon was built during an active world war in 491 days. No stand-up required.`,
  d => `The P-51 Mustang -- one of the finest fighters ever built -- went from contract to first flight in 117 days. No one told them it wasn't possible.`,
  d => `HMS Dreadnought made every other warship in the world obsolete within 366 days of its keel being laid. Scope: rather well-defined.`,
  d => d >= 730 ? `Two years in. Instagram went from idea to a $1 billion acquisition in about that time. Different sector, granted.` : `Keep going. Breakthroughs are just around the corner. Probably.`,
  d => d >= 365 ? `You've officially been at this for over a year. The Eiffel Tower took two.` : `Rome wasn't built in a day. It took about 1,000 years, actually.`,
  d => d >= 500 ? `At the pace of the Millau Viaduct, you'd have built the world's tallest bridge by now. Instead: this.` : `The tide has come in and gone out ${Math.round(d * 2).toLocaleString()} times. It hasn't asked for a dependency review once.`,
  d => `The Edinburgh tram took 6 years and cost triple the budget. Even by that standard, there are questions.`,
  d => `${Math.round(d * 820000).toLocaleString()} cans of Irn-Bru have been produced since this started. Every one of them: ready on day one.`,
  d => `${Math.round(d * 41000000).toLocaleString()} trees have been planted globally since this project started. Each one made a decision and got on with it.`,
  d => `The Salk polio vaccine was tested on 1.8 million children and licensed in three years. The stakeholders were motivated.`,
  d => d >= 1825 ? `Windows Vista was announced and then delivered five years later. It was not worth the wait. You have reached Vista territory.` : `${Math.round(d * 100000000).toLocaleString()} cups of tea have been drunk in the UK since this started. Every one ready in under five minutes.`,
  d => `The RMS Queen Mary was built on the Clyde in six years -- including a two-year halt when the money ran out. She still sailed. On schedule.`,
  d => `The Earth has travelled ${Math.round(d * 2570000).toLocaleString()}km around the Sun since this project started. It has not once asked for an extension.`,
];
