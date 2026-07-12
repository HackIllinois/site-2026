import { MentorProfile } from "../types";

const mentors = [
    {
        _id: "69a18e0da691540f7185af9d",
        name: "Arjun Sivaraman",
        description:
            "A CS graduate student at UIUC, and have worked in the industry as a software engineer for a while. I'm passionate about databases, distributed systems, and their intersection with data science and machine learning. I've been a hackathon enthusiast myself, winning many along the way, and I'm excited to now be on the other side as a mentor!",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Arjun%20Sivaraman.jpg?raw=true",
        mentorId: "arjun-sivaraman-1a20fd"
    },
    {
        _id: "69a18e0da691540f7185af9e",
        name: "Artem Tikhonov",
        description:
            "Artem Tikhonov is an AI/ML Doctoral Researcher in Computer Science & Engineering at the University of Cincinnati, working at the intersection of computer vision and machine cognition. He has worked on projects with MIT, NASA, UVA, and UC Davis. Artem received awards at MIT and Princeton for ML in assistive technology, contributed as an inventor to NASA's New Technology Report, chaired a NASA L'SPACE review panel, and judged/mentored at HackMIT, HackPrinceton, MHacks, HackMerced, and MakeUC by IEEE@UC.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Artem%20Tikhonov.jpg?raw=true",
        mentorId: "artem-tikhonov-98238c"
    },
    {
        _id: "69a18e0da691540f7185af9f",
        name: "Athena Tang",
        description:
            "Hi there, I'm Athena! I'm a UX Designer @ Amazon based in Seattle, where I've been designing for almost 3 years. I graduated from UIUC in 2023, and led design for HackIllinois '22. In my free time, I like playing mahjong and going to concerts. Happy to be back :)",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Athena%20Tang.jpg?raw=true",
        mentorId: "athena-tang-8ef552"
    },
    {
        _id: "69a18e0da691540f7185afa0",
        name: "Ayah Almusaddy",
        description:
            "I'm a UIC Computer Science graduate, working at Fulcrum GT as a Software Engineer. I've participated in hackathons, and this will be my first time being a mentor in one. I enjoy full stack development and talking to people, so I'm excited to put the two together and hopefully help teams with their own projects!",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Ayah%20Almusaddy.jpg?raw=true",
        mentorId: "ayah-almusaddy-d2d44c"
    },
    {
        _id: "69e96429aac58a102c24a94a",
        mentorId: "10819d28b0affbd3f14ccbe929a67913",
        name: "Bhanu Reddy",
        description:
            "Forward Deployed Engineer and product builder passionate about building at the intersection of AI and the manufacturing industry. Ask me about hackathons and rapid prototyping.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/judges/Bhanu%20Reddy.png?raw=true"
    },
    {
        _id: "69a18e0da691540f7185afa1",
        name: "Brian Rosca",
        description:
            "I'm a software engineer at Fulcrum GT. 4x head TA, taught CS courses at Northwestern for a bit. Here to help strengthen your pitching!",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Brian%20Rosca.jpg?raw=true",
        mentorId: "brian-rosca-a7531b"
    },
    {
        _id: "69a18e0da691540f7185afa2",
        name: "Divya Ratra",
        description:
            "Hi, I am a product manager with a background in software engineering, currently working on AI-driven products in the legal-tech space. I've experience building products from early ideas to real-world launch.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Divya%20Ratra.jpg?raw=true",
        mentorId: "divya-ratra-7f7cd9"
    },
    {
        _id: "69a18e0da691540f7185afa3",
        name: "Geoffrey Challen",
        description:
            "Hi, I'm Geoff! I love to teach, and I love to code. I teach students to code, and I write code that helps them learn. My goal is to teach as many students as possible. I do this by creating interactive learning environments that scale.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Geoffrey%20Challen.jpg?raw=true",
        mentorId: "geoffrey-challen-8db72c"
    },
    {
        _id: "69a3188318defa06ce5a9d79",
        mentorId: "e1664765c403d0728692bf2d1c605e58",
        name: "Jason R. Coombs",
        description:
            "Jason is a Principal Software Engineer at Microsoft working in Azure Observability. Jason is co-founder of the Coherent build system (http://bit.ly/coherent-system). Jason is very active in the Python open source community and a maintainer of or direct contributor to hundreds of projects including CPython, CherryPy, setuptools, and others. Jason serves as a community manager for the emerging Git client jj-vcs/jj.",
        imageUrl:
            "https://raw.githubusercontent.com/HackIllinois/site/refs/heads/main/public/mentors-judges/mentors/Jason%20Coombs.jpg"
    },
    {
        _id: "69a18e0da691540f7185afa4",
        name: "Kanishka Patel",
        description:
            "I'm a Digital Business Analyst at Caterpillar and a proud University of Illinois Urbana‑Champaign alum. I'm excited to return to HackIllinois as a mentor and judge for the second year, learning from students and supporting them as they build impactful, real‑world solutions.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Kanishka%20Patel.jpg?raw=true",
        mentorId: "kanishka-patel-177bda"
    },
    {
        _id: "69a18e0da691540f7185afa5",
        name: "Kashvi Panjolia",
        description:
            "I'm an Illinois CS alum ('25) currently working as a software developer at Aviatrix. I have full-stack experience through my projects and I mostly enjoy backend work. When I'm not coding, you can find me baking or reading.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Kashvi%20Panjolia.jpg?raw=true",
        mentorId: "kashvi-panjolia-091369"
    },
    {
        _id: "69a18e0da691540f7185afa6",
        name: "Kasun",
        description:
            "Software engineer at Aviatrix in the office at research park of UIUC. Purdue alumni.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Kasun.jpg?raw=true",
        mentorId: "kasun-296158"
    },
    {
        _id: "69a18e0da691540f7185afa7",
        name: "Linh Cao",
        description:
            "I am currently working at Aviatrix. Prior to that, I have spent 5+ years working on revenue data pipelines at Yahoo. Expertise in AWS, infrastructure automation, monitoring, and CI/CD pipelines. Passionate about creating efficient, resilient distributed systems with a focus on observability and security.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Linh%20Cao.jpg?raw=true",
        mentorId: "linh-cao-5a0332"
    },
    {
        _id: "69a18e0ea691540f7185afa8",
        name: "Manthan Lad",
        description:
            "Manthan Lad is an Advanced Purchasing and Strategic Sourcing leader at Nidec Mobility America Corporation with 13+ years in automotive and manufacturing. He leads mechanical commodity sourcing across North America, managing 150+ suppliers and multimillion-dollar spend portfolios. He is leading a team developing sourcing strategy for Nidec and driving supplier development for the North America business. Manthan has presented research at IEEE conferences and writes on advanced purchasing and innovation in automotive systems.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Manthan%20Lad.jpg?raw=true",
        mentorId: "manthan-lad-133347"
    },
    {
        _id: "69a18e0ea691540f7185afa9",
        name: "Mohak Rajendra",
        description:
            "Mohak Rajendra is a Senior Software Engineer at Google with over 13 years of experience building large-scale distributed systems, cloud infrastructure, and applied AI/ML platforms. He has worked across Google, Microsoft, and Broadcom on high-impact projects spanning GPU-backed inference systems, cloud storage services managing billions of objects, and petabyte-scale data transfer platforms. His expertise includes system architecture, performance optimization, reliability engineering, and production ML deployment. Mohak is passionate about mentoring students and supporting innovation through hackathons, technical reviews, and engineering guidance.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Mohak%20Rajendra.jpg?raw=true",
        mentorId: "mohak-rajendra-51d03a"
    },
    {
        _id: "69a18e0ea691540f7185afaa",
        name: "Naga Maddipudi",
        description:
            "Hi! My name is Naga, and I'm an AI Software Developer at Fulcrum GT. I recently graduated from UIC with a bachelor's degree in Computer Science. I'm passionate about software development and have experience building AI-powered tools, including a legal timesheet automation system.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Naga%20Maddipudi.jpg?raw=true",
        mentorId: "naga-maddipudi-c9f525"
    },
    {
        _id: "69a18e0ea691540f7185afab",
        name: "Peter Iordanov",
        description:
            "I'm a Senior Software Engineering Manager at Fulcrum GT in Chicago, focused on frontend architecture and product-driven engineering. I enjoy mentoring hackathon teams on shipping fast and building intuitive user experiences. UIUC Computer Science, Class of 2017.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Peter%20Iordanov.jpg?raw=true",
        mentorId: "peter-iordanov-fdd694"
    },
    {
        _id: "69a18e0ea691540f7185afac",
        name: "Prathamesh Nadkarni",
        description:
            "Prathamesh is a Senior MTS with Aviatrix and a mentor passionate about cloud infrastructure, security, and AI-driven systems. He works on building scalable, reliable platforms across Kubernetes and distributed systems, and enjoys helping students turn ambitious ideas into shippable products. At HackIllinois, he's here to unblock teams and ship impact. He is also experienced in Android Application Development.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Prathamesh%20Nadkarni.jpg?raw=true",
        mentorId: "prathamesh-nadkarni-10f96b"
    },
    {
        _id: "69a18e0ea691540f7185afad",
        name: "Pulakanti Sri Vardhan Reddy",
        description:
            "I'm a Software Engineer at Aviatrix, where I work on large-scale systems that power reliable and secure cloud infrastructure. I enjoy tackling complex engineering challenges and building resilient infrastructure. This is my first time mentoring at HackIllinois, and I'm excited to support hackers as they explore new ideas and grow their technical skills.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Pulakanti%20Sri%20Vardhan%20Reddy.jpg?raw=true",
        mentorId: "pulakanti-sri-vardhan-reddy-c79d06"
    },
    {
        _id: "69a3188e18defa06ce5a9d87",
        mentorId: "659553cd3fe64217555a28625492692f",
        name: "Rajasekhara Duggimpudi",
        description:
            "With over 11 years in the FinTech industry , I currently serve as a Senior Staff Software Engineer at CME Group , where I architect high-performance, distributed systems. My core technical focus is designing fault-tolerant, ultra-low latency trading platforms. Beyond hands-on architecture, I act as a technical evaluator for our engineering teams—conducting strict code reviews, mentoring developers , and spearheading the adoption of advanced middleware. I am also proud to be an eight-time recipient of employee excellence awards for my cross-functional collaboration and impact.",
        imageUrl:
            "https://raw.githubusercontent.com/HackIllinois/site/refs/heads/main/public/mentors-judges/mentors/Raja%20Duggimpudi.jpg"
    },
    {
        _id: "69a2869036920a9140b05675",
        mentorId: "ce07ddd56e127d9a3b3f60403e212b1b",
        name: "Ram Prakash Reddy",
        description:
            "UIUC CS grad student and serial hackathon winner who loves hackathons. They’re my favorite playground for fast ideas, caffeine powered builds, and late night coding sprints 🚀",
        imageUrl:
            "https://media.licdn.com/dms/image/v2/D5603AQFg5WbieziLlg/profile-displayphoto-crop_800_800/B56ZxEvoETIYAI-/0/1770679864014?e=1773878400&v=beta&t=eiKYvi96lf6cendagLBR5iudiRCVcx6O35K3an1VL88"
    },
    {
        _id: "69a18e0ea691540f7185afae",
        name: "Saloni Kataria",
        description:
            "Saloni Kataria is a data and analytics professional with 3+ years of experience, currently working in analytics and competitive intelligence. She has worked on AI-assisted automation, data validation pipelines, internal tools, and analytics dashboards using Python, SQL, and cloud technologies. Saloni enjoys supporting hackathon teams with problem framing, analytics, and execution.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Saloni%20Kataria.jpg?raw=true",
        mentorId: "saloni-kataria-0fefa2"
    },
    {
        _id: "69a18e0ea691540f7185afaf",
        name: "Saransh Bhardwaj",
        description:
            "Hello, My name is Saransh, I am a software engineer. For over an decade, I have led and developed multiple applications. From startup projects where I build zero-to-one apps to large organizations where I scaled the products to millions of users.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Saransh%20Bhardwaj.jpg?raw=true",
        mentorId: "saransh-bhardwaj-2b6790"
    },
    {
        _id: "69a3188a18defa06ce5a9d7f",
        mentorId: "2ef684d0929959b483dad1d6bc9b7b60",
        name: "Shashivrat Pandey",
        description:
            "Shashivrat Pandey is Principal Solution Architect at CDW with experience with experience in eCommerce, Supply chain and Retail & Payment domains, Microservices, Product Information Management, Cloud computing etc. Shashi is also UIUC Alumni with Master in computer science -data science.",
        imageUrl:
            "https://raw.githubusercontent.com/HackIllinois/site/refs/heads/main/public/mentors-judges/mentors/Shashivrat%20Pandey.jpg"
    },
    {
        _id: "69a18e0ea691540f7185afb0",
        name: "Shree Sevak",
        description:
            "Hi! I am currently a UX AI Project Manager at Caterpillar and UIUC alum, super excited to connect with students and help turn big ideas into meaningful impact!",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Shree%20Sevak.jpg?raw=true",
        mentorId: "shree-sevak-3acdb9"
    },
    {
        _id: "69a18e0ea691540f7185afb1",
        name: "Shreyas Chate",
        description:
            "I am a Conversational AI engineer in Chicago building LLM‑powered agents, RAG workflows, and cloud‑native apps with React/Node and ServiceNow/Amelia. I've won Best Overall Hack at AEC+ Tech 2025 and an AI research award, and I love helping student teams turn rough ideas into focused, demo‑ready projects.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Shreyas%20Chate.jpg?raw=true",
        mentorId: "shreyas-chate-26e3a0"
    },
    {
        _id: "69a3189218defa06ce5a9d8b",
        mentorId: "2460900d8d933ae66f2bf981d70c572a",
        name: "Siddharth Phatak",
        description:
            "Hey! My name’s Sidd! I grew up in New Jersey and went to Haverford College for a major in Computer Science and minor in Pure Math. Some of my hobbies include playing sports like cricket, Nintendo games, and having a good time :). I work as an AI Engineer at Fulcrum GT looking to bring cutting edge of AI to our suite of legal tech. products. Looking forward to getting to know you all!",
        imageUrl:
            "https://raw.githubusercontent.com/HackIllinois/site/refs/heads/main/public/mentors-judges/mentors/Sidd%20Pathak.jpg"
    },
    {
        _id: "69a18e0ea691540f7185afb2",
        name: "Sreekar Gadasu",
        description:
            "Sreekar is a software engineer with a Master's in Computer Science from Arizona State University. He builds AI-powered applications, agentic systems, and scalable full-stack products, with a focus on LLM-driven tools and intelligent automation.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Sreekar%20Gadasu.jpg?raw=true",
        mentorId: "sreekar-gadasu-cc944d"
    },
    {
        _id: "69a18e0ea691540f7185afb3",
        name: "Sridharan Chinnaswamy",
        description:
            "Currently working as ALM Program Manager at Birlasoft, INC and previous I have done mentoring and judging at hackOhio 2025. I'm thrilled to be Part of Hackillinois 2026, Share & learning from all of you and supporting students in achieving their goals with my knowledge as much as possible.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Sridharan%20Chinnaswamy.jpg?raw=true",
        mentorId: "sridharan-chinnaswamy-4222ca"
    },
    {
        _id: "69a18e0fa691540f7185afb4",
        name: "Suvrat Jain",
        description:
            "I'm a software engineer with experience in building scalable, production-ready systems across full-stack and cloud environments. I've worked on platforms combining several full stack frameworks with a focus on clean architecture, API design, and performance optimization. I enjoy working at the intersection of product thinking and engineering execution. I value practical problem-solving, thoughtful system design, and building real-world solutions that are both technically sound and user friendly.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Suvrat%20Jain.jpg?raw=true",
        mentorId: "suvrat-jain-2d1b29"
    },
    {
        _id: "69a3188618defa06ce5a9d7c",
        mentorId: "aed7847ffe0b6667ce14f1e7d929b8d5",
        name: "T. Andrew Manning",
        description: "NCSA across the courtyard :-)",
        imageUrl:
            "https://raw.githubusercontent.com/HackIllinois/site/refs/heads/main/public/mentors-judges/mentors/Timothy%20Manning.jpg"
    },
    {
        _id: "69a18e0fa691540f7185afb5",
        name: "Victoria Rossi",
        description:
            "Hey! I'm Victoria. I'm a software engineer at Fulcrum GT. I've done research on LLMs, specifically related to sentiment analysis and theory of mind. Excited to help you discover new gaps in the cutting edge! In my free time you can find me planning vacations and learning languages!",
        imageUrl:
            "https://raw.githubusercontent.com/HackIllinois/mobile/main/assets/point-shop/point-shop-shopkeeper-2.png",
        mentorId: "victoria-rossi-a34718"
    },
    {
        _id: "69a18e0fa691540f7185afb6",
        name: "Wilson Chay",
        description:
            "I'm a Software Engineer at Fulcrum GT working in ML/AI. I graduated from the University of Michigan in 2024 (CS + Statistics) and have experience across sports, healthcare, and tech. I enjoy meeting people building interesting things — feel free to reach out at wilsonwc@umich.edu",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Wilson%20Chay.jpg?raw=true",
        mentorId: "wilson-chay-8a34ee"
    },
    {
        _id: "69a18e0fa691540f7185afb7",
        name: "Zhuo Chen",
        description:
            "Joe is a software engineer with over four years of experience in software development. He has worked at Amazon and three startups, gaining experience across both large-scale systems and fast-paced startup environments. He enjoys vibe coding and frequently uses tools such as Claude Code, Cursor, and GitHub Copilot to enhance productivity. Joe is currently working at Aedify, a cloud infrastructure company based in Champaign.",
        imageUrl:
            "https://github.com/HackIllinois/site/blob/main/public/mentors-judges/mentors/Zhuo%20Chen.jpg?raw=true",
        mentorId: "zhuo-chen-f717f2"
    }
];

export const getMentors = () => {
    return mentors as MentorProfile[];
};
