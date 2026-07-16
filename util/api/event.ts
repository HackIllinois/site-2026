import { EventType } from "../types";

const events = [
    {
        id: "6973e9cac0901c088b8d2c33",
        eventId: "ac49f5813c92452cc8240e99766410c8",
        isStaff: false,
        name: "Attendee Check-In",
        description:
            "Please install the HackIllinois mobile app and sign in with your Github account before arriving. Note that Check-in is required to submit a project and be eligible for prizes!",
        startTime: 1772222400,
        endTime: 1772233200,
        eventType: "OTHER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1st Floor Lobby",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: true,
        isMandatory: false,
        isPro: false,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png",
        menu: [],
        rafflePoints: 0
    },
    {
        id: "6973e9e8c0901c088b8d2c3f",
        eventId: "a709ce5d06d5ae8a2df8e31366185066",
        isStaff: false,
        name: "Opening Ceremony",
        description: "",
        startTime: 1772233200,
        endTime: 1772236800,
        eventType: "OTHER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1404",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png",
        rafflePoints: 0
    },
    {
        id: "6973ea08c0901c088b8d2c45",
        eventId: "290b73fd03cd4c56d3bb71015752437a",
        isStaff: false,
        name: "Dinner - Sponsored by Fulcrum",
        description:
            "Take off your HackIllinois journey with Jet’s Pizza! Grab a slice and power up for liftoff.",
        startTime: 1772236800,
        endTime: 1772242200,
        eventType: "MEAL",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 2nd Floor Atrium",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: true,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor2.png"
    },
    {
        id: "698ff1fc24d8351e754a636e",
        eventId: "beb194ef52ecdecfe5fe80f4605e4c15",
        isStaff: false,
        name: "Solar Search",
        description:
            "Your spaceship is lost in the galaxy! To get your ship back on trajectory, complete the four cosmic tasks located at different planets’ outposts throughout the building. \n",
        startTime: 1772224200,
        endTime: 1772231400,
        eventType: "MINIEVENT",
        exp: 1772233200,
        locations: [
            {
                description: "Siebel CS Basement, 1st Floor, 2nd Floor",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor0.png",
        rafflePoints: 0
    },
    {
        id: "698ff53c24d8351e754a63a1",
        eventId: "59df90c8d8080ca76f9db37b2bc9fe0f",
        isStaff: false,
        name: "Company Expo",
        description:
            "The galaxy hinges on the innovation and investment of companies. Come to the Company Expo to find and join the brightest of companies. Rumors across the galaxies say these companies shine brighter than the stars themselves!",
        startTime: 1772226000,
        endTime: 1772233200,
        eventType: "OTHER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1st & 2nd Floor Atrium ",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png",
        rafflePoints: 0
    },
    {
        id: "698ff68c24d8351e754a63c2",
        eventId: "920e5232bd5c4ad98f358f51406549b4",
        isStaff: false,
        name: "RSO Expo",
        description:
            "Our large crew size for this mission has brought together space cadets of many diverse backgrounds. Finding a community you love is pivotal to your success. Come to the RSO Expo to explore some opportunities! ",
        startTime: 1772236800,
        endTime: 1772242200,
        eventType: "OTHER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1st Floor Atrium",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png",
        rafflePoints: 0
    },
    {
        id: "698ff87024d8351e754a63f3",
        eventId: "4b5786c63a5def61b8862ae983ac0349",
        isStaff: false,
        name: "Modal Track Introduction",
        description:
            "Modal is AI infrastructure developers love, used by companies like Ramp, Suno and Lovable. With flexible GPU compute, code sandboxes, and storage, you can use Modal to run inference or train coding agents, voice agents and more. For the Inference Track, submissions should showcase ambitious applications running inference on Modal to solve a real-world problem.",
        startTime: 1772242200,
        endTime: 1772245800,
        eventType: "OTHER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 2405",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "Modal",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png",
        rafflePoints: 0
    },
    {
        id: "698ff90c24d8351e754a640e",
        eventId: "54347d28ca57dd5c21a1b323c9199c78",
        isStaff: false,
        name: "John Deere Track Introduction",
        description:
            "Join John Deere to learn more about what their track entails! After this workshop, attendees will be given autonomous vehicle kits on a first-come-first-server basis (RSVP form to be released soon). \nNote: this workshop is mandatory to attend if you wish to participate in John Deere’s track. Located @ the Jackson Innovation Studio in the basement of Sidney Lu Mechanical Engineering Building. ",
        startTime: 1772242200,
        endTime: 1772245800,
        eventType: "OTHER",
        exp: 0,
        locations: [
            {
                description: "Sidney Lu Mechanical Engineering Building 4100",
                latitude: 40.1107766,
                longitude: -88.2273495
            }
        ],
        isAsync: false,
        sponsor: "John Deere",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0
    },
    {
        id: "698ff94a24d8351e754a6421",
        eventId: "bc4233ed921ed4e811f0647ae16f6f2f",
        isStaff: false,
        name: "Stripe Track Introduction",
        description:
            "APIs are the heart of modern software systems, enabling services to communicate and evolve independently. In the Stripe Track, you will build a well-designed, documented, and usable API that helps a user accomplish a meaningful goal.\n",
        startTime: 1772242200,
        endTime: 1772245800,
        eventType: "OTHER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1404",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "Stripe",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor0.png"
    },
    {
        id: "698ff99124d8351e754a642a",
        eventId: "7efd1b791157549006234798df2d2c12",
        isStaff: false,
        name: "Caterpillar Track Introduction",
        description:
            "The future of intelligent field inspection lies in your hands, the mission being to redefine what’s possible in field operations. In the CAT track, you will create a next-generation AI tool that should revolutionize how inspections, safety, and logistics are performed by making field operations smarter, faster, and safer at scale.\n",
        startTime: 1772242200,
        endTime: 1772245800,
        eventType: "OTHER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 0216",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "Caterpillar",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor2.png"
    },
    {
        id: "698ffa7f24d8351e754a645b",
        eventId: "0ae0887d0c8887441012b44008176b2e",
        isStaff: false,
        name: "Team Matching",
        description:
            "Full team-less Hackstronauts, come one, come all! Find your squad, find your track, and kickstart your mission!\n",
        startTime: 1772245800,
        endTime: 1772249400,
        eventType: "WORKSHOP",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 0218",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor0.png"
    },
    {
        id: "698ffabf24d8351e754a6461",
        eventId: "ea262d7a62602158d69e54135f58f6b2",
        isStaff: false,
        name: "HackVoyagers Talk w/ Fulcrum",
        description: "",
        startTime: 1772245800,
        endTime: 1772247600,
        eventType: "OTHER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 2405",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "Fulcrum",
        points: 50,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor2.png"
    },
    {
        id: "698ffb3e24d8351e754a646a",
        eventId: "cd2c19d68b170a7826c4bd9c1ca91f4c",
        isStaff: false,
        name: "Project Development Session w/ Fulcrum",
        description:
            "All discoveries are made through trial and error. Fear not the unknown! Fulcrum will be present to bring your ideas into fruition and provide further guidance. \n",
        startTime: 1772247600,
        endTime: 1772251200,
        eventType: "WORKSHOP",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 2405",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "Fulcrum",
        points: 20,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor2.png"
    },
    {
        id: "698ffbd924d8351e754a6477",
        eventId: "b126bf2ba3c945d54301f84849c5f407",
        isStaff: false,
        name: "Deployment Workshop w/ Women in Computer Science",
        description:
            "Each planet’s work flow environment throws its own challenges at you. WCS is here to help you launch into the unknown with a project deployment workshop!\n",
        startTime: 1772251200,
        endTime: 1772254800,
        eventType: "WORKSHOP",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 0216",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor0.png"
    },
    {
        id: "698ffe0924d8351e754a652a",
        eventId: "c9d3a83e577314418042c307cecd8b7d",
        isStaff: false,
        name: "Startup Workshop w/ Telora",
        description:
            "Join us to hear from Eliam, the founder of Telora and a previous founder of a startup that was backed by YC and Founders Fund before being acquired by MetLife. You'll learn why you need a cofounder, what makes a good startup idea, and how to find your first few customers.",
        startTime: 1772253000,
        endTime: 1772256600,
        eventType: "WORKSHOP",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1302",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "Telora",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png"
    },
    {
        id: "698fff2624d8351e754a6564",
        eventId: "5e4473f0ebe8fd4b7d7add911912fe3d",
        isStaff: false,
        name: "IMC Poker Tournament",
        description:
            "The intergalactic navigation skills you possess translate well to other activities…come show off your skills to the rest of the space crew at HackIllinois’ first ever Poker Tournament, brought to you by IMC. \n",
        startTime: 1772254800,
        endTime: 1772262000,
        eventType: "MINIEVENT",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 2405",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "IMC",
        points: 50,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor2.png"
    },
    {
        id: "698fffc524d8351e754a6589",
        eventId: "daf157002f6761adb429ba4bb50ec43a",
        isStaff: false,
        name: "Quiet Workspace",
        description:
            "The mission is of utmost importance. This designated Quiet Workspace will be provided to those who work best in starlit silence. \n",
        startTime: 1772254800,
        endTime: 1772262000,
        eventType: "MINIEVENT",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1302",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png"
    },
    {
        id: "6990003024d8351e754a65b6",
        eventId: "f2f794661d746dce2bb8789af45b4c4b",
        isStaff: false,
        name: "Late Night Snack",
        description:
            "Sustenance is pivotal for our success. Thankfully, we have treats to replenish your energy! Powered by Fulcrum GT.",
        startTime: 1772254800,
        endTime: 1772258400,
        eventType: "MEAL",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1st Floor Atrium",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: true,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png"
    },
    {
        id: "6990036624d8351e754a65f2",
        eventId: "568b6c22c9f64a8a4002d6aa37ef8c2f",
        isStaff: false,
        name: "Transition to Overnight Hacking Space",
        description:
            "Guided transition to Siebel Center for Design, where designated spaces are available for those wishing to continue their work overnight. Information for the procedure is available in the Attendee Guide.",
        startTime: 1772260200,
        endTime: 1772265600,
        eventType: "OTHER",
        exp: 0,
        locations: [
            {
                description: "Siebel Center for Design ",
                latitude: 40.1026852,
                longitude: -88.235361
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0
    },
    {
        id: "699004c124d8351e754a6691",
        eventId: "fbf957460265c31e62954c9aa066fb56",
        isStaff: false,
        name: "Brunch ",
        description: "Take a break from hacking and fuel up with brunch : )",
        startTime: 1772298000,
        endTime: 1772303400,
        eventType: "MEAL",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 2nd Floor Atrium",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: true,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor2.png"
    },
    {
        id: "6990050d24d8351e754a669e",
        eventId: "a9099905c1996a2af2da4f8cec5b0f88",
        isStaff: false,
        name: "Blockchain Workshop w/ Solana",
        description:
            "Solana is powering fast and modern blockchain applications. It would be wise to learn from their expertise. See what you can build and how it can fit into your hack.\n",
        startTime: 1772301600,
        endTime: 1772305200,
        eventType: "WORKSHOP",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1302",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "Solana",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png"
    },
    {
        id: "6990069e24d8351e754a66ba",
        eventId: "1bb03cc8d9f9d4b9429c69240c0b44e1",
        isStaff: false,
        name: "Cosmic CTF Challenge",
        description:
            "The engines cut out, the power disappeared, you’re adrift in the void of space. What would you do in this hypothetical situation? Prove yourself to be the worthiest of Hackstronauts with a gauntlet of technical challenges we have prepared especially for you.\nLink: https://2026.hackillinois.org/ctf \n",
        startTime: 1772305200,
        endTime: 1772308800,
        eventType: "MINIEVENT",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 2405",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor2.png"
    },
    {
        id: "699006e924d8351e754a66c0",
        eventId: "96c44e91ca6a98d59a2ea60f6d27a185",
        isStaff: false,
        name: "Endeavor AI Talk",
        description:
            "In all galaxies, intelligence of life and machines drives societies. Curious about AI in the real world? Join this session to hear how Endeavor AI builds and uses intelligent systems.\n",
        startTime: 1772328600,
        endTime: 1772330400,
        eventType: "SPEAKER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 0218",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "Endeavor AI",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor0.png"
    },
    {
        id: "699007f124d8351e754a66d0",
        eventId: "4ff975242d04b4827f1d01d9311bede3",
        isStaff: false,
        name: "Tech Talk w/ IMC",
        description:
            "Join us for an inside look at Tech @ IMC! You’ll hear from engineers across our tech organization about the challenges they tackle daily, from optimizing low-latency systems to scaling infrastructure that supports real-time decision-making. Learn how our teams are structured, how technologists collaborate with traders and researchers, and why opportunities within trading are exciting for technologists.",
        startTime: 1772312400,
        endTime: 1772316000,
        eventType: "SPEAKER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 2405",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "IMC Trading",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor2.png"
    },
    {
        id: "6990086624d8351e754a66d7",
        eventId: "a50016398e814ff0bb338d4c1e87b49a",
        isStaff: false,
        name: "Tech Talk w/ T-Mobile",
        description:
            "Join us to hear how T-Mobile is using AI-powered live translation to break down language barriers in real time across our retail and care groups. We’ll share how speech recognition, advanced translation models, and voice technology are coming together to create more seamless and inclusive experiences. If you’re excited about building AI that removes friction at scale, this session is for you.",
        startTime: 1772316000,
        endTime: 1772319600,
        eventType: "SPEAKER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 0216",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "T-Mobile",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor0.png"
    },
    {
        id: "699008c924d8351e754a66dd",
        eventId: "5726796262617e5879e8aa9b2bcb67b3",
        isStaff: false,
        name: "Capital One Smash Bros Tournament",
        description:
            "Ready to change gaming for good? Come join us for a Super Smash Bros Ultimate tournament sponsored by Capital One! Whether you’re interested in battling for glory or just want to cheer on your favorite fighter, everyone is invited to the fun! This tournament is open to ALL hackers of ALL skill levels: to secure a spot in our tournament bracket, be on the lookout for signup announcements, or come check us out right before we start to ask about walk-in availability. Winners of the tournament (and maybe some lucky audience members) will receive exclusive Capital One swag. So don’t miss out on the event of the season, and may the best hacker win!",
        startTime: 1772321400,
        endTime: 1772325000,
        eventType: "SPEAKER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 2405",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "Capital One",
        points: 50,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor2.png"
    },
    {
        id: "699009f324d8351e754a66ea",
        eventId: "0838e5081bc0370916f7ab1908f5c772",
        isStaff: false,
        name: "The Astral Exhibition",
        description:
            "While we explore this galaxy, the locals have provided an exhibition to share their cultures! Calling all Hackstronauts: taste and experience this once-in-a-lifetime opportunity!",
        startTime: 1772319600,
        endTime: 1772326800,
        eventType: "MINIEVENT",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1st Floor Atrium",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png"
    },
    {
        id: "69900b1c24d8351e754a6708",
        eventId: "595dd86483997cf1160fca2f338cc851",
        isStaff: false,
        name: "Dinner - Sponsored by Exa",
        description:
            "Wrap up your hunger with Shawarma Joint and keep the momentum going into the night.",
        startTime: 1772325000,
        endTime: 1772330400,
        eventType: "MEAL",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 2nd Floor Atrium",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: true,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor2.png"
    },
    {
        id: "69900bbe24d8351e754a670e",
        eventId: "9c69bca0e365e07bae66bbac6ac4898f",
        isStaff: false,
        name: "MLH Hacking with GitHub Copilot",
        description:
            "Prepare for launch into AI-powered development with MLH. In this hands-on workshop, you’ll explore how GitHub Copilot can serve as your coding co-pilot, helping you streamline your workflow and build a personalized GitHub profile.",
        startTime: 1772307000,
        endTime: 1772310600,
        eventType: "MINIEVENT",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 0220",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor0.png"
    },
    {
        id: "69900c1624d8351e754a6724",
        eventId: "378cdbea1551477a42aa382a4652dc2a",
        isStaff: false,
        name: "Code in the Dark w/ Caterpillar",
        description:
            "Far too often the beauty of space is ignored. In the silence, the glistening stars provide comfort. Caterpillar has found the best location to enjoy the darkness. Report in for galaxy expanding vibe coding.",
        startTime: 1772334000,
        endTime: 1772337600,
        eventType: "WORKSHOP",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 2405",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "Caterpillar",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor2.png"
    },
    {
        id: "69900c9124d8351e754a672a",
        eventId: "effab8707c2ecf3a9df032041268317b",
        isStaff: false,
        name: "Clash Royale Tournament",
        description:
            "Put on your space suits, gather your elixirs, and build your deck! Compete in a Clash Royale tourney to declare yourself the strongest of the crew! Prizes and intergalactic glory await! HEE HEE HEE HAW!",
        startTime: 1772339400,
        endTime: 1772343000,
        eventType: "MINIEVENT",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1404",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 73,
        isPrivate: false,
        displayOnStaffCheckIn: true,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png"
    },
    {
        id: "69900d0724d8351e754a6733",
        eventId: "0ddd3c311bd6951ab4efe5ffd6d64082",
        isStaff: false,
        name: "Late Night Snacks",
        description:
            "The galaxy has a variety of tastes. Our finest local guides have found some treats to keep you Hacking! Powered by Fulcrum GT.",
        startTime: 1772339400,
        endTime: 1772343000,
        eventType: "MEAL",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1st Floor Atrium",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: true,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png"
    },
    {
        id: "69900d7e24d8351e754a673d",
        eventId: "4c2ed6002e22a8c5e27d33b2b0cdaa50",
        isStaff: false,
        name: "Transition to Overnight Hacking Space",
        description:
            "Guided transition to Siebel Center for Design, where designated spaces are available for those wishing to continue their work overnight. Information for the procedure is available in the Attendee Guide.",
        startTime: 1772346600,
        endTime: 1772352000,
        eventType: "OTHER",
        exp: 0,
        locations: [
            {
                description: "Siebel Center for Design ",
                latitude: 40.1026852,
                longitude: -88.235361
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0
    },
    {
        id: "69900dba24d8351e754a6743",
        eventId: "30ef3bd1f25ae3a5902f9975dd9045ea",
        isStaff: false,
        name: "SUBMISSION DEADLINE",
        description:
            "Your expedition is coming to an end. Make sure to submit your project to the DevPost before the deadline!\n",
        startTime: 1772366400,
        endTime: 1772366400,
        eventType: "OTHER",
        exp: 0,
        locations: [],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: []
    },
    {
        id: "69900dfa24d8351e754a6749",
        eventId: "102388c694360a4f93216c15b5979ab1",
        isStaff: false,
        name: "[ALL ATTENDEES] Project Showcase",
        description:
            "Hackers, prepare for landing and showcase what you’ve built. Mission control is watching—let your project make history among the stars. Please arrive by 8:45am.",
        startTime: 1772377200,
        endTime: 1772386200,
        eventType: "OTHER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS ",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0
    },
    {
        id: "69900e3924d8351e754a6750",
        eventId: "d4a8b0319b88e9dbbf4baac2d5421ac5",
        isStaff: false,
        name: "Lunch",
        description:
            "Treat yourself with Jimmy John's after a weekend of exploration and discoveries!",
        startTime: 1772386200,
        endTime: 1772389800,
        eventType: "MEAL",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 2nd Floor Atrium",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: true,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor2.png"
    },
    {
        id: "69900e9124d8351e754a6756",
        eventId: "1def0b2a622fd64b36e0007eca7d184b",
        isStaff: false,
        name: "Closing Ceremonies",
        description:
            "The voyage is now complete. Mission control has been watching as your ideas took flight. Teams rise and projects shine, as HackAstra fades into the starry night.\n",
        startTime: 1772396100,
        endTime: 1772399700,
        eventType: "OTHER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1404",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 0,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        rafflePoints: 0,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png"
    },
    {
        id: "699a413593ae0db46b648148",
        eventId: "961ed57a5f3d65359142e10d81c2bbad",
        isStaff: false,
        name: "Fireside Chat w/ Cory Levy & Jvala",
        description: "",
        startTime: 1772330400,
        endTime: 1772334000,
        eventType: "SPEAKER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 0216",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor0.png"
    },
    {
        id: "699f6ae350a1836b9cee9a38",
        eventId: "89ebb58c8b14804bd48f86eef1714894",
        isStaff: false,
        name: "MLH Google AI Studio Workshop",
        description: "",
        startTime: 1772251200,
        endTime: 1772253000,
        eventType: "WORKSHOP",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 0220",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        sponsor: "",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: [],
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor0.png"
    },
    {
        id: "699f75f550a1836b9cee9eeb",
        eventId: "5354d2544a92c4bdef5ebfa6cd7350f3",
        isStaff: false,
        name: "OpenAI API Workshop & Fireside Chat",
        description:
            "Get hands-on with the OpenAI API and learn how to build practical, hackathon-ready AI workflows. We’ll wrap up with a candid fireside chat about life after graduation — the skills that matter and how to navigate the transition from college to industry. All experience levels welcome!",
        startTime: 1772294400,
        endTime: 1772298000,
        eventType: "SPEAKER",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 2405",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor2.png",
        sponsor: "OpenAI",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: []
    },
    {
        id: "69a1341e21795121c8db7b55",
        eventId: "a4d7e186481877b73f9a89b595667304",
        isStaff: false,
        name: "5 Engineering Truths We Learned The Hard Way",
        description:
            "School teaches you how systems should work. Industry teaches you how they actually fail. Join FulcrumGT for a candid session on five engineering lessons you won’t find in a lecture hall plus practical advice you can apply immediately.\n\n*Note: make sure to bring your computers!",
        startTime: 1772308800,
        endTime: 1772312400,
        eventType: "WORKSHOP",
        exp: 0,
        locations: [
            {
                description: "Siebel CS 1302",
                latitude: 40.113812,
                longitude: -88.224937
            }
        ],
        isAsync: false,
        mapImageUrl:
            "https://raw.githubusercontent.com/HackIllinois/adonix-metadata/refs/heads/main/maps/SiebelFloor1.png",
        sponsor: "FulcrumGT",
        points: 75,
        isPrivate: false,
        displayOnStaffCheckIn: false,
        isMandatory: false,
        isPro: false,
        menu: []
    }
];

export async function getEvents() {
    return events as EventType[];
}
