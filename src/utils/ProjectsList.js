import octodo1 from "../images/project_octodo_1.png";
import jarvis1 from "../images/project_jarvis_1.png";
import drone1 from "../images/project_drone_1.png";
import rethink1 from "../images/project_rethink_1.png";
import puppr1 from "../images/project_puppr_1.png";
import kong1 from "../images/project_kong_1.png";
import first1 from "../images/project_first_1.png";

import iconOctodo from "../images/icon_octodo.png";
import iconSmarthome from "../images/icon_smarthome.png";
import iconDrone from "../images/icon_drone.png";
import iconRethink from "../images/icon_rethink.png";
import iconPuppr from "../images/icon_puppr.png";
import iconKong from "../images/icon_kong.png";
import iconFirst from "../images/icon_first.png";

// what is it? (the what)
// [optional] what was my role (the who)
// where did the idea come from (the why)
// how did i build it / what tools did i use / process (the how)
// conclusion / future steps (the future)

export const ProjectsList = [
  // {

  // },
  {
    name: "Octo-Do",
    marqueeName: "Octo-Do",
    type: "Personal Project",
    timeframe: "May 2021 to July 2021",
    ftdescription:
      "An interactive and flexible to-do list built using ReactJS, Node.js and MySQL",
    description:
      "As a university student, I know how important a to-do list is and how it is an extremely effective time-management tool. There were many alternatives already out there, but none contained the functionality wanted. The goal for Octo-Do was to have a overall task side and a daily tasks side on same page so a user can see both sides when planning out their tasks. \nWith this in mind, Octo-Do was designed and developed using React for the frontend, Node.js and Axios for the backend and MySQL for the database, all of which is hosted on Heroku. In addition, Firebase user authentication was implemented so that each user's tasks stay separate. A large feature of Octo-Do was the ability to drag-and-drop tasks from the overall to-do list to the daily to-do list, so I used react-dnd-beautiful library to achieve this. \nOverall, I am quite happy with the outcome of Octo-Do as it meets all of the current goals that were wanted. In the future, new features and functionality may be added, including more user flexibility in terms of customizing their app settings, and possibly different timeline and calendar views as well.",
    languages: [
      "JS",
      "React",
      "CSS",
      "Node.js",
      "Axios",
      "MySQL",
      "Firebase",
      "Heroku",
    ],
    github: "https://github.com/keatonlees/octo-do",
    link: "https://octo-do.herokuapp.com/login",
    images: [octodo1],
    icon: iconOctodo,
  },
  {
    name: "Jarvis Smart Home",
    marqueeName: "Smart Home",
    type: "Personal Project",
    timeframe: "December 2020 to February 2021",
    ftdescription:
      'Combining a Raspberry Pi 4, a 5" touchscreen, Python backend, HTML frontend and 3D-printing, I designed, constructed, and developed a personal smart home',
    description:
      'I designed and developed a Smart Clock using Flask, RaspberryPi and a captive touchscreen. This Smart Clock shows the time, date, weather and other useful information. Using the touchscreen, it can interact with smart home functions, such as turning on and off lights and other features. \nTo complete my creation, I used SolidWorks to design an enclosure that would hold the Raspberry Pi, speakers, amplifier board, and wiring. I then 3D-printed the enclosure in four large parts and assembled the whole enclosure using M3 screws. I currently use this Jarvis Smart Home as my main bedroom clock and alarm. \nOriginally, I integrated Google Home API with the addition of SnowBoy for custom wake words, which I set to "Jarvis". However, since doing this the Snowboy library has been deprecated and I have not had time to find an alternative, so the Google Home functionality is currently disabled. I attempted to design both the software and enclosure with expandibility in mind. In the future, I would like to possibly add Spotify API integration, Bluetooth capabilities and possibly even a battery pack so that it can be portable.',
    languages: [
      "RaspberryPi",
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JS",
      "3DPrinting",
    ],
    github: "https://github.com/keatonlees/smart-clock",
    link: "",
    images: [jarvis1],
    icon: iconSmarthome,
  },
  {
    name: "Arduino Drone",
    marqueeName: "Drone",
    type: "Personal Project",
    timeframe: "January 2021 to March 2021",
    ftdescription: "An Arduino based drone",
    description:
      "I designed, printed, wired and programming an Arduino Drone. The body and arms are created in SolidWorks and 3D-printed on my own printer. The design is modular so that if one arm breaks, I can easily replace the part without having to reprint an entire new body. I have also constructed a radio transmitting module as well. This transmitter consists of two joysticks and two potentiometers wired into an Arduino Nano, which processes and converts the signals to transmit wirelessly by the NRF module. This entire controller is powered off six AA batteries. \nThe drone electronics consist of a receiving NRF module that is wired to another Arduino Nano to convert the signals back and then sends those signals to the brain, another Arduino Nano. Yes, this drone consists of three different Arduinos. This main Arduino Nano, the flight controller, processes the signals from the radio receiver and the gyroscopic module to calculate the angle and velocity of the drone. These calculations are then processed and send to the electronic speed controllers to speed up or slow down the motors. The drone is powered off a single 2200mAh rechargable LiPo battery. In the future, I would like to add a first-person view (FPV) camera to see what the drone is seeing, along with a Go-Pro on top of the drone to capture aerial photos and videos.",
    languages: ["Arduino", "3DPrinting", "SolidWorks", "Soldering"],
    github: "",
    link: "",
    images: [drone1],
    icon: iconDrone,
  },
  {
    name: "Rethink",
    marqueeName: "Rethink",
    type: "Adobe + Amazon Creative Jam",
    timeframe: "September 2020",
    ftdescription: "An application to teach students about design principles",
    description:
      "During the 2020 Adobe + Amazon Creative Jam, myself and two other Waterloo students constructed Rethink, an application that teaches students about the principles of design. This app was meant to allow student to discover design, learn the differences between good and bad design, and inspire them to start their design career. Rethink's high fidelity prototype was built using AdobeXD over the span of two weeks. Our project was awarded 1 of 10 honourable mentions and placed in the top 20 out of 420 teams participating.",
    languages: ["AdobeXD", "Figma"],
    github: "",
    link: "https://xd.adobe.com/view/f0025240-e2f4-45ee-80b6-5dcc01971ae3-a551/screen/03850abc-4097-4d6e-8562-99a8267bb38e?fullscreen",
    images: [rethink1],
    icon: iconRethink,
  },
  {
    name: "Puppr",
    marqueeName: "Puppr",
    type: "TOHacks 2020",
    timeframe: "May 2020",
    ftdescription: "A website to connect users with dogs in need",
    description:
      "During TOHacks 2020, myself and two other team members built Puppr, a digital platform to connect lonely, isolated users with local dogs that are available for adoption. These dogs will help with users' mental health as they continue quarintine and reimmerse themselves back into a social world. The entire website was built in 48 hours from scratch. \nPuppr's front end was written in HTML, CSS and Javascript while the backend was written in Python and Firebase. The landing and signup page are both purely HTML and CSS, while the selection page's functionality is Javascript. When selecting the dogs, you are seeing real dogs available from a real shelter. \nUsing Flask to build a web-scraping API, we were able to import that information into our page for the user to easily see. Whether you select the checkmark or not, you will cycle through a variety of dogs (however many are available at the time). If you choose to click the checkmark, the dog's profile will be saved in the left sidebar, where you can click on that saved dog to go the shelter's webpage. Since this entire app was built within a 48 hour time frame, our web-scraping is accurate, but a little slow; if we were to redo this project, that would be one of our key redesigns for Puppr.",
    languages: ["Python", "Flask", "HTML", "CSS", "JS", "Firebase"],
    github: "https://github.com/orizabal/puppr",
    link: "",
    images: [puppr1],
    icon: iconPuppr,
  },
  {
    name: "Donkey Kong",
    marqueeName: "Donkey Kong",
    type: "Personal Project",
    timeframe: "April 2019",
    ftdescription: "A re-creation of the 1980s Donkey Kong Arcade Game",
    description:
      "I decided to recreate the classic 1980s Donkey Kong Arcade game. I was able to completely adapt and re-create the first level in it's entirety. The game included accurate gameplay and exact sprite animations, with the sprites taken from the original spritesheet. Viewing the final product compared to the original, I had almost made an exact replica of the orignal arcade game. \nTo code the game, I used a combination of Java and HTML along with JGEngine to render the environment. A challenging hurdle to overcome was matching the bounding boxes to the spritesheet and create seamless animations, but it turned out quite smooth in the end. I had started with basic keyboard controls, but eventually integrated gyroscopic movement controller. This controller was an alternate way to play the game and added a level of difficulty, both in the programming acclerometer values and completing the level.",
    languages: ["Java", "JGEngine", "HTML", "Gyroscopic Sensor"],
    github: "https://github.com/keatonlees/donkey-kong",
    link: "",
    images: [kong1],
    icon: iconKong,
  },
  {
    name: "FIRST Robotics",
    marqueeName: "FIRST",
    type: "Senior Lead",
    timeframe: "2019",
    ftdescription: "Co-captain of the FIRST Robotics team",
    description:
      "I was Co-Captain of the FIRST Robotics Team that competed at the FIRST Western National Competiton. I lead the team through design, fabrication, and testing throughout the robot's construction. The FIRST team was only in it's second year and there were various hiccups along the journey to the Western National Competition. Many of the members did not have any knowledge of fabrication, electronics or programming, so myself and the other captain took it upon ourselves to educate the team as much as we could. \nI taught the students how to think about the many factors and variables that we needed to consider when designing such a robot, but keep the solutions realistic and manageable for the size of our team. We also had to consider the easiest and most efficient way to manufacture said robot within the 6 week timeframe provided. At the end of 6 intense weeks of designing and building, the team arrived at a relatively well designed robot given the materials and time.",
    languages: ["C++", "Java", "Hardware"],
    github: "",
    link: "",
    images: [first1],
    icon: iconFirst,
  },
];
