// Project content. Add a new object here and it appears in the project browser automatically.
// The list is shown in this order, newest first.
// featured: true also shows the project in the Featured row at the top of the section, in this same order.
// tags: professional | software | embedded | hardware | product
// fit: "cover" crops a photo to fill the frame, "contain" shows a whole screenshot or diagram.
// icon: shown in place of an image for projects that don't have one (see PROJECT_ICONS below).
const IMG = "assets/img/";

const PROJECTS = [
  {
    slug: "mobile-apps",
    featured: true,
    title: "iOS and Android Apps",
    shortTitle: "iOS and Android Apps",
    date: "2022 – present",
    context: "IDEX Biometrics",
    tags: ["professional", "software"],
    icon: "smartphone",
    summary: "Leading the development and release of 4 iOS and 4 Android apps, including IDEXCard on the App Store, used by internal engineering and sales teams, as well as customers.",
    body: [
      "Leading development and release of four iOS and four Android apps (Swift, SwiftUI, React JS and Java) from requirements to release, used by internal engineering and sales teams, as well as customers.",
      "IDEXCard is a production App Store app that customers and the sales team use to set up and manage their cards and for live demos. Features include viewing card status, enrolling and managing one or more fingerprints, setting up the card PIN for enrolment and FIDO credentials, and resetting cards.",
      "Building automated tests (XCTest, unit, and UI tests) for the IDEXCard iOS app and SDK, run through CI/CD with Jenkins, covering key user flows, edge cases, and regressions.",
      "Conducting on-device testing and improving error handling across devices and demo cards on all apps.",
      "Collaborating with designers, testers, and engineers on requirements and code reviews."
    ],
    links: [
      { url: "https://apps.apple.com/gb/app/idex-card/id6748902933", label: "View IDEXCard on the App Store" },
      { url: "https://support.idexbiometrics.com/hc/en-gb/articles/6141996774175-Enrol-your-fingerprint-with-the-IDEX-Card-app-iPhone", label: "Read the IDEXCard app guide" }
    ],
    result: "Shipped to internal teams and customers via TestFlight, Firebase, APKs and the App Store.",
    featuresLabel: "The apps",
    features: [
      "IDEXCard (iOS, App Store)",
      "IDEXUpload (iOS, TestFlight)",
      "IDEXVerify (iOS, TestFlight)",
      "IDEX mobile FPstudio (iOS, TestFlight)",
      "IDEXPOS Mobile (Android, APK)",
      "IDEXPOS WCT (Android, APK)",
      "IDEXVerify (Android, Firebase)",
      "IDEXPayUtility (Android, Firebase)"
    ],
    tools: [
      { label: "Languages and frameworks", items: ["Swift", "SwiftUI", "React JS", "Java"] },
      { label: "Testing", items: ["XCTest", "Unit testing", "UI testing", "Jenkins (CI/CD)"] },
      { label: "Release channels", items: ["TestFlight", "Firebase", "APKs", "App Store"] }
    ]
  },
  {
    slug: "robotic-emvco-testing",
    title: "Robotic EMVCo Contactless Standards Testing",
    shortTitle: "Robotic EMVCo Standards Testing",
    date: "2022 – present",
    context: "IDEX Biometrics",
    tags: ["professional", "software", "hardware"],
    icon: "bot",
    summary: "Python test automation for robotic analogue and digital EMVCo contactless (CL) standards testing, including a GUI and WebSocket-based device interfaces.",
    body: [
      "Developed Python test automation for robotic analogue and digital EMVCo contactless (CL) standards testing, including a GUI and WebSocket-based device interfaces.",
      "Designed and 3D printed fixtures, holders, and robot end effectors to support hardware testing."
    ],
    result: "The system is still in use for testing.",
    tools: [{ label: "Software and tools used", items: ["Python", "GUI", "WebSockets", "Robot control", "Object Oriented Programming", "Algorithms", "3D printing"] }]
  },
  {
    slug: "spaceman",
    featured: true,
    title: "Final Year Project: Wireless Power Transmission and Telemetry for SPACEMAN",
    shortTitle: "Wireless Power and Telemetry for SPACEMAN",
    date: "2021 – 22",
    context: "MEng Final Year Project, Imperial College London",
    tags: ["hardware", "embedded"],
    summary: "The design of a portable Wireless Powering and Data Receiving system for SPACEMAN, a medical device for biofluid analysis, using a multiple sub-board PCB design and Arduino control via a web server.",
    cover: IMG + "spaceman-cover.jpg",
    coverAlt: "The power downlink setup and data uplink setup, side by side, with the boards connected",
    fit: "contain",
    body: [
      "The design of a Wireless Powering and a Data Receiving system for SPACEMAN using an Arduino Nano to control and an Arduino Uno Web Server for system control via a web server connection. The system involves a multiple sub-board PCB design and uses 4 AA batteries and a Power Board for system powering. The Power Downlink subsystem involves a PLL, a Power Amplifier and a transmitter capacitor and inductor-coil pairing. The Data Receiving subsystem involves a receiver inductor coil and capacitor pairing, a mixer, a PLL for signal generation and an OpAmp circuit with discrete components for LSK signal demodulation.",
      "This project aims to design and implement a transmitter for SPACEMAN. SPACEMAN is a medical device which uses potentiometric and amperometric sensing for biofluid (e.g. saliva or sweat) analysis [1]. SPACEMAN will use an inductive link for both wireless power and the wireless transmission of data, as demonstrated in Ma, 2021 [1]. Such devices are important to help with measuring or monitoring biological functions and have numerous possible applications, such as monitoring salivary uric acid using a wireless device within a mouth guard, as seen in Kim, 2015 [2].",
      "The transmitter created in this project will both power and retrieve data from sensors on the SPACEMAN device wirelessly. The specific focus of the project is in creating a portable device/system which does not require any bench-top power supplies or signal generators. A portable device will enable the use of devices such as SPACEMAN in more applications and general layperson use where bench-top supplies are impractical."
    ],
    result: "A client connected to the web server is successfully able to control the PLL output frequency and switch the output on and off, which is useful for both the power downlink and the mixer input used in the data uplink subsystem.",
    sections: [
      {
        heading: "Testing",
        paragraphs: [
          "The Arduino Web Server was tested in a web browser and also via a separate client connection. It behaves as expected and correctly connects and receives messages and JSON data from the client, parsing to remove any unnecessary received data.",
          "The serial connection between the two Arduinos was tested and is working correctly. The controller Arduino is able to parse received JSON data from the Web Server Arduino and control the PLL as required by the control signal and its parameters contained within the JSON data.",
          "The LSK mixer and demodulators were shown working both in simulation and in the real world, as seen in the results below."
        ]
      }
    ],
    references: [
      { text: "D. Ma, Y. Chen, S. S. Ghoreishizadeh, and P. Georgiou, “Spaceman: Wireless SoC for concurrent potentiometry and amperometry,” May 2021, pp. 1–5." },
      { text: "J. Kim, S. Imani, W. R. de Araujo, J. Warchall, G. Valdés-Ramírez, T. R. L. C. Paixão, P. P. Mercier, and J. Wang, “Wearable salivary uric acid mouthguard biosensor with integrated wireless electronics,” Biosensors and Bioelectronics, vol. 74, pp. 1061–1068, December 15, 2015." }
    ],
    note: "Further design detail available upon request",
    tools: [
      { label: "Software and tools used", items: ["Altium Designer", "Schematic Design", "PCB Layout", "LTspice", "Oscilloscope", "Power Supply", "RF System Design"] },
      { label: "Hardware used", items: ["Arduino Nano", "Arduino Uno", "PLL", "Power Amplifier", "Mixer", "OpAmp"] }
    ],
    gallery: [
      { group: "System design", src: IMG + "spaceman-2.jpg", alt: "High level system diagram showing the power downlink and data uplink subsystems", fit: "contain" },
      { group: "System design", src: IMG + "spaceman-3.jpg", alt: "Detailed system diagram with the PLL, power amplifier, mixer, LSK demodulation circuit and web server", fit: "contain" },
      { group: "System design", src: IMG + "spaceman-4.jpg", alt: "Diagram of the transmitter and receiver coils passing power and data between the system and SPACEMAN", fit: "contain" },
      { group: "Boards", src: IMG + "spaceman-1.jpg", alt: "Power board", fit: "contain" },
      { group: "Boards", src: IMG + "spaceman-5.jpg", alt: "Mixer board", fit: "contain" },
      { group: "Boards", src: IMG + "spaceman-6.jpg", alt: "LSK demodulator board", fit: "contain" },
      { group: "Boards", src: IMG + "spaceman-7.jpg", alt: "Power transmitter and receiver board with its coil", fit: "contain" },
      { group: "Boards", src: IMG + "spaceman-8.jpg", alt: "Assembled power transceiver test board", fit: "contain" },
      { group: "Test setups", src: IMG + "spaceman-9.jpg", alt: "Power downlink setup with the boards connected", fit: "contain" },
      { group: "Test setups", src: IMG + "spaceman-10.jpg", alt: "Power downlink setup from a different angle", fit: "contain" },
      { group: "Test setups", src: IMG + "spaceman-11.jpg", alt: "Data uplink setup with the boards connected", fit: "contain" },
      { group: "Test setups", src: IMG + "spaceman-12.jpg", alt: "Serial connection between the Arduino Nano on a breadboard and the Arduino Uno web server", fit: "contain" },
      { group: "Test setups", src: IMG + "spaceman-13.jpg", alt: "Annotated evaluation board setup on the lab bench", fit: "contain" },
      { group: "Test setups", src: IMG + "spaceman-14.jpg", alt: "Board under test with its LED turned on", fit: "contain" },
      { group: "Test setups", src: IMG + "spaceman-15.jpg", alt: "Lab bench setup for the modulated signal test", fit: "contain" },
      { group: "Test setups", src: IMG + "spaceman-16.jpg", alt: "Lab bench setup for the demodulated signal test", fit: "contain" },
      { group: "Results", src: IMG + "spaceman-17.jpg", alt: "LSK demodulator simulation results", fit: "contain" },
      { group: "Results", src: IMG + "spaceman-18.jpg", alt: "Oscilloscope trace of the PLL output", fit: "contain" },
      { group: "Results", src: IMG + "spaceman-19.jpg", alt: "Oscilloscope trace of the modulated signal waveform", fit: "contain" },
      { group: "Results", src: IMG + "spaceman-20.jpg", alt: "Oscilloscope trace of the mixer output", fit: "contain" },
      { group: "Results", src: IMG + "spaceman-21.jpg", alt: "Oscilloscope trace of the LSK mixer output", fit: "contain" },
      { group: "Results", src: IMG + "spaceman-22.jpg", alt: "Oscilloscope trace of the LSK mixer output, with the change in the signal circled in red", fit: "contain" },
      { group: "Results", src: IMG + "spaceman-23.jpg", alt: "Oscilloscope trace of the LSK demodulator with a 500 mV signal", fit: "contain" },
      { group: "Results", src: IMG + "spaceman-24.jpg", alt: "Oscilloscope trace of the LSK demodulator at the first test point with a 500 mV signal", fit: "contain" },
      { group: "Results", src: IMG + "spaceman-25.jpg", alt: "Oscilloscope trace of the LSK demodulator at the second test point with a 500 mV signal", fit: "contain" }
    ]
  },
  {
    slug: "robot-dance-instructor",
    featured: true,
    title: "5678: The Robot Dance Instructor",
    shortTitle: "5678: The Robot Dance Instructor",
    date: "2021 – 22",
    context: "Group Project of 12, Imperial College London",
    tags: ["software"],
    summary: "A robotic dance partner that teaches ballroom-style partner dancing. I designed, programmed and tested its user interface app.",
    cover: IMG + "robot-dance-1.jpg",
    coverAlt: "5678 app home page with the 5678 logo and six navigation buttons on a purple and blue background",
    fit: "cover",
    video: "assets/video/robot-dance-guide.mp4",
    captions: "assets/video/robot-dance-guide-captions.vtt",
    videoDescription: "Video with spoken commentary: the app's user guide, showing steps training, play mode, creating a routine and the history page.",
    body: [
      "5678 is a robotic dance partner that teaches ballroom-style partner dancing. The project explores how humans engage with and learn from close-quarters human-robot interaction. The robot uses close-contact physical feedback to teach movement and augmented reality to demonstrate footwork. Foot detection is used for a scoring system.",
      "I designed, programmed and tested the user interface app, as part of a team of 12."
    ],
    sections: [
      {
        heading: "How the app works",
        paragraphs: [
          "A web server hosts the web app, which is written using HTML, CSS, JavaScript and React JS. The web app connects to the main master ROS node of the robot via a WebSocket server running on the master ROS node, using rosbridge, and the roslib-reactjs library within the web app. React-router-dom is used to route to different React component files, which act as different web pages. Communication between the app and the master node is done through publishing and subscribing to various ROS topics.",
          "Text-to-speech has been implemented using the react-speech-kit library and provides audio feedback for any button presses on any of the pages, reminding the user of what has been selected and what the next steps are for setup."
        ]
      },
      {
        heading: "App pages",
        list: [
          "Home Page: App logo, displays a user friendly face upon tapping the logo.",
          "Play Page: The mode of play can be selected: Easy, Medium, Hard or Custom Routine. The song can be selected from a drop-down list and then pressing start enters the play mode. In play mode, the music and dance can be controlled using play, pause, stop, next song and previous song. The song title appears at the top of the screen and while the music is playing, gifs of the corresponding moves which the user is performing appear on the screen as extra assistance. If the user lets go at any point of the touchpads, the music will stop and text appears on the screen prompting the user to hold on again to continue. Pressing the stop button will not only stop the music but also reset it back to the start. Speech recognition has been implemented in this page, using react-speech-kit, where the user can say play or pause to control the music and thus the dance. Music is output using native speakers of the host device and the volume can be controlled locally.",
          "History Page: User score from the most recent play is displayed as it is received from the master /magni ROS node via a ROS message.",
          "Info Page: Displays a video with controls, which provides a user guide on how to use the app.",
          "Steps Training Page: Any of the available moves can be selected and the page displays gifs of both the exact foot placements and a view of people performing the move.",
          "Create Routine Page: The user can select various moves, but only ones which are valid based on the last move selected, and create their own dance routine which can then be sent to the master /magni ROS node using the finish button. Any custom routine can then be selected in the play page as a mode and used for play."
        ]
      }
    ],
    links: [{ url: "https://youtu.be/LdlrDExkAhU", label: "Watch the project video on YouTube" }],
    tools: [
      { label: "Software and tools used", items: ["HTML", "CSS", "JavaScript", "React JS", "ROS"] },
      { label: "Libraries and frameworks", items: ["rosbridge", "roslib-reactjs", "react-router-dom", "react-speech-kit"] }
    ],
    gallery: [
      { src: IMG + "robot-dance-2.jpg", alt: "The 5678 robot under purple and blue light, with the app's face shown on a screen above a torso and two arms, on a wheeled base", fit: "contain" },
      { src: IMG + "robot-dance-1.jpg", alt: "5678 app home page", fit: "contain" }
    ]
  },
  {
    slug: "linear-voltage-regulator",
    title: "Linear Voltage Regulator",
    shortTitle: "Linear Voltage Regulator",
    date: "2021 – 22",
    context: "Individual Project, Imperial College London",
    tags: ["hardware"],
    icon: "cpu",
    summary: "Designed and tested a Linear Voltage Regulator.",
    tools: [{ label: "Software and tools used", items: ["Cadence", "Schematic Design of IC"] }]
  },
  {
    slug: "spoof-finger-rail",
    featured: true,
    title: "Three Spoof Finger Linear Rail Mechanism",
    shortTitle: "Spoof Finger Linear Rail",
    date: "Apr – Sep 2021",
    context: "IDEX Biometrics",
    tags: ["professional", "embedded", "hardware"],
    summary: "An automated test system for multiple “spoof” fingers on fingerprint sensors, now used across the engineering team for release testing.",
    cover: IMG + "spoof-1.jpg",
    coverAlt: "Stepper motor mounted above stacked Arduino boards",
    fit: "cover",
    body: ["Designed an Arduino-based (C/C++) automated test system for “spoof” fingers on fingerprint sensors within the Systems Validation team, using Grbl firmware and G-code for stepper motor control and a Python TCP/IP interface for remote operation."],
    result: "Adopted across the engineering team, with 5+ systems in use for release testing.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "The movement of the spoof fingers is along a linear rail mechanism. A stepper motor controls the movement of the spoof fingers. At each end of the linear rail, there are optical sensors, to act as limit and homing switches.",
          "There are two main sections to the system: a server Arduino and a motor driver Arduino.",
          "The server Arduino uses an Ethernet Shield to set up a server, which allows connection to other devices on the local area network (LAN) via Telnet. This shield is connected via Ethernet to an Ethernet switch, which is connected to a Wi-Fi router, to which any other devices in the LAN can be connected. The server Arduino translates user commands sent to it from clients that are connected via Telnet. These commands are then translated into specific G Code commands to be sent to the second Arduino to perform various actions using the stepper motor or to set certain G Code parameters.",
          "The motor driver Arduino has a G shield connected, which uses grbl firmware to control the stepper motor connected to it. The open-source grbl firmware controls the motor by receiving G Code commands via Serial.",
          "The two Arduinos are connected together via a Serial connection to allow the main server Arduino to send G Code commands to the G shield Arduino. All the limit switches are connected to the G shield Arduino, as well as other control switches for the spoof finger's vertical movement. The mechanism for vertical spoof finger movement and the stepper motor are also connected to the G shield Arduino, as well as an external control switch."
        ]
      },
      {
        heading: "Safety and control of the system",
        paragraphs: [
          "In order to ensure precise use of the system and safety, upon startup of the system, a homing cycle is done. For this the belt is driven to the end limit switch on one side till it is triggered to set that location as the 0 point for the coordinate axis. Homing ensures the motor knows exactly where it is in the system and can go to the exact same points every time.",
          "A hard limit has also been set up, so if during any normal operation of the system, either of the limit switches are triggered then the system will stop and enter alarm mode, which requires a full restart to get out of and a homing cycle again.",
          "A soft limit has also been set up in the software, which prevents any commands from running which would take the belt and spoof fingers further than a certain point, coded as the soft limit. If any commands are sent which would take the spoof fingers beyond this point, then the system enters an alarm state where no commands work and the system needs to be restarted.",
          "There are also switches on the finger mechanism, which feed back whether or not the finger is down, so that the server can prevent any movement while the finger is down on the sensor, avoiding collisions."
        ]
      }
    ],
    tools: [
      { label: "Software and tools used", items: ["Arduino", "Arduino C Programming", "G Code", "Python"] },
      { label: "Arduino libraries and firmware used", items: ["grbl", "Ethernet", "SD", "SPI"] }
    ],
    gallery: [
      { src: IMG + "spoof-3.jpg", alt: "3D model of the linear rail mechanism", fit: "contain" },
      { src: IMG + "spoof-4.jpg", alt: "System diagram showing the two Arduinos, Ethernet switch, power supplies and stepper motor", fit: "contain" },
      { src: IMG + "spoof-5.jpg", alt: "Close-up of an optical limit sensor at the end of the linear rail", fit: "contain" },
      { src: IMG + "spoof-2.jpg", alt: "Stepper motor with the Arduino and shield stack" }
    ]
  },
  {
    slug: "test-scripts",
    title: "Test Scripts for Software Development",
    shortTitle: "Test Scripts for Software Development",
    date: "Apr – Sep 2021",
    context: "IDEX Biometrics",
    tags: ["professional", "software", "embedded"],
    icon: "terminal",
    summary: "A temperature sensor driver in C and Python test scripts covering multiple software and system features, working in the Software team.",
    body: ["Developed a temperature sensor driver in C with a Python test script, debugged embedded C code and wrote Python test scripts covering multiple software and system features in the Software team."],
    features: [
      "Updating the current test scripts, which test various commands performed using the sensor and provide the results of the tests with any errors given as feedback to the user. The test scripts were adapted to fix any bugs and make them easier to use, by allowing the user to input the build type or port used and having them return the results of any command performed. In addition, updating the messages sent back to the user to make the test scripts easier to follow.",
      "Temperature driver work to allow the temperature of the sensor to be read as the output of a command and test scripts to test the temperature command is giving an accurate reading of temperature. The test script stores the data of the actual temperature and the temperature returned by the command in a .csv file.",
      "Secure channel test scripts to test the secure channel between the Secure Element (SE) and the sensor is set up correctly and all secure commands work.",
      "Debugging of errors in main C code for the sensor as requested by the team."
    ],
    tools: [
      { label: "Software, tools and project management used", items: ["C Embedded Programming", "Python Programming", "Jira", "Bitbucket", "Git", "Jenkins", "Agile", "SCRUM", "Kanban"] }
    ]
  },
  {
    slug: "hyperloop-propulsion",
    featured: true,
    title: "Schematic Capture and PCB Design for the Propulsion Board of a Hyperloop Pod",
    shortTitle: "Hyperloop Propulsion PCB",
    date: "2020 – 21",
    context: "London Hyperlink Society, Queen Mary University of London",
    tags: ["hardware"],
    summary: "Led the design of the propulsion board powering the linear induction motors of a hyperloop pod, as one of three electronics engineers within a wider engineering team.",
    cover: IMG + "hyperloop-1.jpg",
    coverAlt: "Assembled green propulsion PCB",
    fit: "cover",
    body: [
      "Led design of the propulsion board (with the schematic and PCB designed in Altium) powering the linear induction motors of a hyperloop pod, as one of three electronics engineers within a wider engineering team.",
      "Designed the board to interface with the pod's main control board and the team's other boards."
    ],
    result: "The design was subsequently manufactured, integrated, and tested.",
    note: "PCB design and schematics available upon request",
    tools: [{ label: "Software and tools used", items: ["Altium Designer"] }],
    gallery: [
      { src: IMG + "hyperloop-2.jpg", alt: "Top side of the assembled propulsion board" },
      { src: IMG + "hyperloop-3.jpg", alt: "Underside of the board, labelled Hyperlink Propulsion and Designed by Isabella Breslin" },
      { src: IMG + "hyperloop-4.jpg", alt: "Propulsion board alongside other pod boards" },
      { src: IMG + "hyperloop-5.jpg", alt: "Propulsion boards laid out on a table" }
    ]
  },
  {
    slug: "evergreen",
    title: "EverGreen Plant Management System",
    shortTitle: "EverGreen Plant Management",
    date: "2020 – 21",
    context: "3rd Year Embedded Systems IoT Group Project",
    tags: ["embedded", "software"],
    summary: "Developing an IoT plant management system, controlled via an app, using a Raspberry Pi Zero and MQTT.",
    cover: IMG + "evergreen-1.jpg",
    coverAlt: "Potted plant in an orange pot sitting on the EverGreen sensor device",
    fit: "cover",
    body: [
      "For the project, we designed a system to monitor plants and provide data and feedback to the user via LEDs, a buzzer and a phone app. The aim of the project is to enable users to ensure the right conditions for optimal plant growth of their specific plant.",
      "I wrote microcontroller firmware to read sensor data and communicate with the server, and built the Waterfill feature to guide users on when to start and stop watering the plant."
    ],
    note: "Code available on request",
    links: [{ url: "https://azaninportfolio.wixsite.com/evergreen", label: "View the project website and video" }],
    tools: [
      { label: "Software and tools used", items: ["Raspberry Pi Zero", "Python Programming", "MQTT", "I2C"] },
      { label: "Python libraries", items: ["smbus2", "time", "paho.mqtt.client", "json", "ssl", "RPi.GPIO", "sys"] },
      { label: "Sensors", items: ["Load Cell", "Humidity Sensor", "Temperature Sensor", "Air Pressure Sensor", "Moisture Sensor"] }
    ]
  },
  {
    slug: "synthesiser",
    title: "Real Time Synthesiser",
    shortTitle: "Real Time Synthesiser",
    date: "2020 – 21",
    context: "3rd Year Embedded Systems Group Project",
    tags: ["embedded"],
    summary: "The creation of a musical synthesiser with various effects and additional features, such as vibrato and waveform selection. Built using FreeRTOS and Embedded C programming.",
    cover: IMG + "synth-1.jpg",
    coverAlt: "Synthesiser keyboard with a display and control knobs",
    fit: "cover",
    video: "assets/video/synth.mp4",
    captions: "assets/video/synth-captions.vtt",
    videoDescription: "Video with spoken commentary, demonstrating each feature.",
    body: ["A real time synthesiser keyboard with various features and a user interface. Each key press produces the correct frequency for that key of the keyboard and the selected octave. All features of the synthesiser can be used in conjunction."],
    featuresLabel: "Features include",
    features: [
      "UI displaying the note played, octave, tremolo level, vibrato level, selected waveform and volume level",
      "Polyphony - playing multiple notes at once and getting a combined sound",
      "Vibrato - can be increased or decreased using a knob",
      "Tremolo - can be increased or decreased using a knob",
      "Can change octave of notes",
      "Envelope added to each sound, so the sound fades in and out like a piano key",
      "Ability to change type of wave: sine, sawtooth, triangle",
      "Volume control - can be increased or decreased using a knob"
    ],
    note: "Code available upon request",
    tools: [
      { label: "Software and tools used", items: ["ST NUCLEO-L432KC", "Embedded C / Arduino Programming", "FreeRTOS", "Multithreading"] },
      { label: "C / Arduino libraries used", items: ["STM32FreeRTOS", "Arduino", "U8g2lib", "Wire", "HardwareTimer", "semphr", "stm32l432xx"] }
    ]
  },
  {
    slug: "schematic-app",
    title: "2D Schematic Drawing Application",
    shortTitle: "2D Schematic Drawing App",
    date: "2020 – 21",
    context: "High Level Programming Group Project",
    tags: ["software"],
    summary: "A schematic drawing application that allows the connection of various types of logic components with different bus sizes, wires connecting them and error indicators when a connection cannot be made. Built using Functional Programming, F# and the Elmish MVU framework.",
    cover: IMG + "schematic-1.jpg",
    coverAlt: "Schematic editor with connected logic components and a component catalogue",
    fit: "contain",
    video: "assets/video/schematic.mp4",
    videoDescription: "Silent screen recording of the schematic drawing application in use.",
    body: [
      "A schematic drawing application that allows the connection of various types of logic components with different bus sizes, wires connecting them and error indicators when a connection cannot be made. Built using Functional Programming and F#.",
      "The application is designed to replace the existing Draw2D JavaScript library used by ISSIE and improve upon it."
    ],
    featuresLabel: "Features",
    features: [
      "Adding various different types of components, including custom ones, with different bus sizes",
      "Creation of wires to connect the components, with the ability to adapt the wire shape",
      "Snap to grid functionality",
      "Highlighting of input and output ports upon hovering above components",
      "Selection of multiple components using a select box",
      "Deletion of selected components",
      "Copy and paste of selected components",
      "Highlighting of selected components",
      "Not allowing wires to connect ports of the same type together, such as two input or two output ports",
      "Showing borders of components when they overlap",
      "Dragging and dropping of selected components",
      "Error highlighting of invalid connections, such as a wire connecting two ports with different bus widths"
    ],
    note: "Code available upon request",
    tools: [{ label: "Software and tools used", items: ["F# Programming", "Fable Compiler", "Elmish MVU", "Functional Programming"] }]
  },
  {
    slug: "calculator",
    title: "Scientific Calculator GUI",
    shortTitle: "Scientific Calculator GUI",
    date: "2020 – 21",
    context: "Individual Project",
    tags: ["software"],
    summary: "An interactive scientific calculator application, created using Python, that allows the input of various different kinds of operations on numbers, using BIDMAS, including factorial and square root.",
    cover: IMG + "calculator-1.jpg",
    coverAlt: "Calculator window with a teal button grid",
    fit: "contain",
    video: "assets/video/calculator.mp4",
    videoDescription: "Silent screen recording of the calculator being used.",
    body: ["An interactive scientific calculator application, created using Python and tkinter, that allows the input of various different kinds of operations on numbers, using BIDMAS, including factorial and square root."],
    featuresLabel: "Features",
    features: ["Addition", "Subtraction", "Multiplication", "Division", "Decimal Point", "Negation", "Reciprocal", "Factorial", "Square Root", "Brackets"],
    note: "Code available on GitHub and upon request",
    codeUrl: "https://github.com/inabreslin/Calculator_GUI",
    tools: [
      { label: "Software and tools used", items: ["Python Programming"] },
      { label: "Python modules used", items: ["tkinter", "math"] }
    ]
  },
  {
    slug: "plant-growth",
    title: "Product to Automate Plant Growth",
    shortTitle: "Product to Automate Plant Growth",
    date: "2019 – 20",
    context: "2nd Year Group Project",
    tags: ["product"],
    summary: "A plant container designed to automate the growth of plants remotely and take various measurements from the plant, such as the soil moisture, to optimise the conditions for growth of that specific plant.",
    cover: IMG + "plant-1.jpg",
    coverAlt: "Clear plant container with a red-trimmed lid and black water reservoir",
    fit: "cover",
    body: [
      "A plant container designed to automate the growth of plants remotely and take various measurements from the plant, such as the soil moisture, to optimise the conditions for growth of that specific plant.",
      "I was responsible for the design and creation of the casing and body of the product, based on feedback from the other teams creating the app and sensor control."
    ],
    tools: [{ label: "Software and tools used", items: ["Autodesk Fusion 360", "Laser Cutting", "3D Printing"] }],
    gallery: [
      { src: IMG + "plant-6.jpg", alt: "Finished plant container with its lid raised" },
      { src: IMG + "plant-2.jpg", alt: "CAD designs of the product", fit: "contain" },
      { src: IMG + "plant-3.jpg", alt: "Design of the water reservoir", fit: "contain" },
      { src: IMG + "plant-4.jpg", alt: "Design of the lid", fit: "contain" },
      { src: IMG + "plant-5.jpg", alt: "Design of the main case and product as a whole", fit: "contain" }
    ]
  },
  {
    slug: "bcd-arithmetic",
    title: "BCD Signed Ten’s Complement Arithmetic",
    shortTitle: "BCD Ten’s Complement Arithmetic",
    date: "2019 – 20",
    context: "Computer Architecture Module Individual Project",
    tags: ["software"],
    summary: "A program used to perform the addition of two Ten's Complement Signed BCD numbers, using ARM Assembly.",
    cover: IMG + "bcd-1.jpg",
    coverAlt: "ARM Assembly source code",
    fit: "contain",
    note: "Code available on request",
    tools: [{ label: "Software and tools used", items: ["ARM Assembly"] }]
  },
  {
    slug: "eerover",
    title: "EERover – Find and Detect Different Types of Signals Emitted",
    shortTitle: "EERover Signal Detection",
    date: "2018 – 19",
    context: "1st Year Group Project",
    tags: ["embedded", "product"],
    summary: "A rover designed to be remotely controlled via an app, with the ability to detect various signals, such as infrared and magnetic fields, and report the detected signals back to the user.",
    cover: IMG + "rover-1.jpg",
    coverAlt: "Wheeled rover with Arduino boards and sensors, viewed from above",
    fit: "cover",
    features: [
      "Designing and building the chassis using Google SketchUp and technical drawings and then 3D printing and manufacturing processes",
      "Design and creation of an app, using AppInventor, and C/C++ programming of the Arduino to control movement and display the results from sensors on a webpage"
    ],
    tools: [{ label: "Software and tools used", items: ["Arduino", "Google SketchUp", "3D Printing", "C/C++ Programming of Arduino"] }],
    gallery: [
      { src: IMG + "rover-2.jpg", alt: "Rover on the bench with an ultrasonic sensor at the front" },
      { src: IMG + "rover-3.jpg", alt: "Rover with stacked Arduino boards" },
      { src: IMG + "rover-4.jpg", alt: "Rover from above" },
      { src: IMG + "rover-5.jpg", alt: "App design development screens", fit: "contain" },
      { src: IMG + "rover-6.jpg", alt: "Stages of rover design development", fit: "contain" },
      { src: IMG + "rover-7.jpg", alt: "Chassis design development renders", fit: "contain" },
      { src: IMG + "rover-8.jpg", alt: "Final 3D printable rover chassis parts", fit: "contain" }
    ]
  },
  {
    slug: "mastermind",
    title: "Mastermind Solver Using Knuth’s Algorithm",
    shortTitle: "Mastermind Solver",
    date: "2018 – 19",
    context: "Software Engineering Module Individual Project",
    tags: ["software"],
    summary: "Using Knuth's algorithm to create a Mastermind game solver, based on the outcomes from each round of the game, using C++.",
    cover: IMG + "mastermind-1.jpg",
    coverAlt: "Mastermind solver output in a terminal",
    fit: "contain",
    video: "assets/video/mastermind.mp4",
    videoDescription: "Silent screen recording of the solver running in a terminal window, listing each attempt and its black and white pegs until it finds the sequence.",
    note: "Code available on request",
    tools: [{ label: "Software and tools used", items: ["C++ Programming"] }]
  },
  {
    slug: "2048",
    title: "2048 Game",
    shortTitle: "2048 Game",
    date: "2018 – 19",
    context: "Software Engineering Module Individual Project",
    tags: ["software"],
    summary: "The creation of the 2048 game using C++, where the user has to move numbers in all four directions in order to combine numbers of the same value and create more space for new numbers.",
    cover: IMG + "game2048-1.jpg",
    coverAlt: "2048 game running in a terminal",
    fit: "contain",
    video: "assets/video/game2048.mp4",
    videoDescription: "Silent screen recording of the game being played in a terminal window.",
    body: [
      "The creation of the 2048 game using C++, where the user has to move numbers in all four directions in order to combine numbers of the same value and create more space for new numbers. The aim of the game is to continue combining numbers until the number 2048 is reached, without filling the whole game board with numbers.",
      "The user can start a game from any .txt file with an n x n grid of numbers, separated by spaces, or play a new game with an empty grid. The user types \"w\", \"a\", \"s\", \"d\" to get the grid movements of up, left, down and right respectively."
    ],
    note: "Code available on request",
    tools: [{ label: "Software and tools used", items: ["C++ Programming"] }]
  },
  {
    slug: "sudoku",
    title: "Valid Sudoku Checker",
    shortTitle: "Valid Sudoku Checker",
    date: "2018 – 19",
    context: "Software Engineering Module Individual Project",
    tags: ["software"],
    summary: "A program used to check if any n x n Sudoku grid of numbers is valid, using C++.",
    cover: IMG + "sudoku-1.jpg",
    coverAlt: "Sudoku checker output in a terminal",
    fit: "contain",
    video: "assets/video/sudoku.mp4",
    videoDescription: "Silent screen recording of the checker being run on Sudoku grid files in a terminal window.",
    body: [
      "A program used to check if any n x n Sudoku grid of numbers is valid, using C++.",
      "The Sudoku grid is input as a .txt file with a grid of numbers all separated by spaces."
    ],
    note: "Code available on request",
    tools: [{ label: "Software and tools used", items: ["C++ Programming"] }]
  },
  {
    slug: "magic-case",
    title: "Research, Design, Building and Marketing of a Multipurpose Carrying Case and Passive Amplifier for Magicians",
    shortTitle: "Multipurpose Magic Case",
    date: "2016 – 18",
    context: "A Level Design and Technology: Product Design Individual Project",
    tags: ["product", "hardware"],
    summary: "A storage case designed for magicians, with a modular storage system inside that can be adapted to suit the user. The case also contains a wipe board for magic tricks and a remotely controlled seven segment display to show a spectator's chosen card. In addition, the case comes with removable legs to create a stand, a separable levitating table and a passive amplifier.",
    cover: IMG + "magic-1.jpg",
    coverAlt: "Black carrying case with a white wipe board on top",
    fit: "contain",
    body: ["Designing and building a multipurpose case for magicians, with a modular design."],
    featuresLabel: "The case includes",
    features: [
      "A lock for security",
      "A wipe board for magic tricks",
      "A removable levitating table for magic",
      "Removable legs, so the case can become a table to perform on and also be easy to transport",
      "Wheels",
      "A seven segment display, which is remote controlled to allow the magician to display a chosen card on the case",
      "A modular compartment system with padding to protect magic props and to allow the magician to customise the interior to fit their specific props"
    ],
    links: [{ url: "https://inabreslin.wixsite.com/magicase", label: "View the project website and video" }],
    tools: [{ label: "Software and tools used", items: ["Circuit Wizard for schematic and PCB design", "Google SketchUp", "PCB UV Exposure, Developing, Etching", "CorelDRAW", "Creo", "Laser Cutting", "3D Printing", "Vacuum Forming", "Line Bending", "Drilling", "Soldering"] }],
    gallery: [
      { src: IMG + "magic-2.jpg", alt: "Hand-drawn design sketch of the case", fit: "contain" },
      { src: IMG + "magic-3.jpg", alt: "Hand-drawn sketch of the table section", fit: "contain" },
      { src: IMG + "magic-4.jpg", alt: "Hand-drawn sketch of the case base and compartments", fit: "contain" },
      { src: IMG + "magic-5.jpg", alt: "Circuit schematics, PCB layouts and the finished PCB", fit: "contain" },
      { src: IMG + "magic-6.jpg", alt: "Finished case with locks on the front" },
      { src: IMG + "magic-7.jpg", alt: "Modular compartments inside the case" },
      { src: IMG + "magic-8.jpg", alt: "Case legs assembled into a table" },
      { src: IMG + "magic-9.jpg", alt: "Removable black legs laid side by side" },
      { src: IMG + "magic-10.jpg", alt: "Vacuum-formed passive amplifier", fit: "contain" }
    ]
  },
  {
    slug: "clothes-peg",
    title: "Redesigning a Clothes Peg",
    shortTitle: "Redesigning a Clothes Peg",
    date: "2016 – 18",
    context: "A Level Design and Technology: Product Design Individual Project",
    tags: ["product"],
    summary: "Developing the design of a clothes peg to make it more accessible for people with arthritis, to have increased functionality and improved storage capabilities.",
    cover: IMG + "peg-1.jpg",
    coverAlt: "Purple 3D printed clothes peg",
    fit: "contain",
    body: [
      "Developing the current design of a clothes peg to make it more accessible and easy to use for people with arthritis, as well as having more features and easier storage capabilities.",
      "The user slides the clothes peg over the clothes on the line to secure them in place. There is a hook for additional storage on the peg and two different slots for different grip strengths of the peg, secured with an elastic band. Each peg has Velcro on both sides so multiple pegs can be attached together for easy storage, or hung up using the hooks."
    ],
    tools: [{ label: "Software and tools used", items: ["Google SketchUp", "3D Printing"] }],
    gallery: [
      { src: IMG + "peg-2.jpg", alt: "Two 3D printed peg designs in purple", fit: "contain" },
      { src: IMG + "peg-3.jpg", alt: "Pencil sketches of the peg", fit: "contain" },
      { src: IMG + "peg-4.jpg", alt: "Design development board", fit: "contain" },
      { src: IMG + "peg-5.jpg", alt: "Design development board", fit: "contain" },
      { src: IMG + "peg-6.jpg", alt: "Idea 3 design board", fit: "contain" },
      { src: IMG + "peg-7.jpg", alt: "Idea 2 design board", fit: "contain" },
      { src: IMG + "peg-8.jpg", alt: "Idea 1 design board", fit: "contain" },
      { src: IMG + "peg-9.jpg", alt: "Design development board with user testing", fit: "contain" }
    ]
  }
];

const PROJECT_FILTERS = [
  { id: "all", label: "All" },
  { id: "professional", label: "Professional" },
  { id: "software", label: "Software" },
  { id: "embedded", label: "Embedded" },
  { id: "hardware", label: "Hardware & PCB" },
  { id: "product", label: "Product design" }
];

// Icons: Lucide (lucide.dev), ISC License
const PROJECT_ICONS = {
  smartphone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
  terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>'
};
