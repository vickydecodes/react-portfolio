const logotext = "Vicky";
const meta = {
  title: "Vignesh Karthikeyan",
  description:
    "I’m Vicky, Founder & CEO of Cookie Inc. , a tech-driven creative studio.",
};

const github_username = "vickydecodes";

const introdata = {
  title: "I’m Vicky",
  animated: {
    first: "Crafting innovative code",
    second: "Building dynamic websites",
    third: "Developing robust web apps",
  },
  description:
    "Founder & CEO of Cookie Inc. — a tech-driven creative studio where strategy meets execution. With a passion for smart solutions and modern design, I lead Cookie Inc. to build meaningful digital products that scale, connect, and inspire. From bold ideas to polished launches, I’m all about creating impact through clean code and sharp thinking.",
  your_img_url: "/resume/my_img6.png",
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "Hi, I'm Vignesh — Founder & CEO of Cookie Inc. I lead with vision, passion, and a mission to turn bold ideas into real impact. From building strong teams to crafting smart strategies, I’m all about driving Cookie Inc. forward with creativity and purpose. Let’s make something unforgettable.",
};
const worktimeline = [
  {
    jobtitle: "Founder & CEO",
    where: "Cookie Inc.",
    date: "2025 - present",
  },

  {
    jobtitle: "Web Developer",
    where: "Innotech Titans",
    date: "2024 - present",
  },
  {
    jobtitle: "Full Stack Web Developer",
    where: "Freelance",
    date: "2023 - present",
  },
];

const skills = [
  { name: "JavaScript", value: 88 },
  { name: "TypeScript", value: 80 },
  { name: "React / Next.js", value: 85 },
  { name: "Node.js", value: 88 },
  { name: "Express.js", value: 85 },
  { name: "MongoDB", value: 80 },
  { name: "REST API Architecture", value: 88 },
  { name: "Authentication & Authorization (JWT, Role-based)", value: 82 },
  { name: "Tailwind CSS", value: 90 },
  { name: "CSS / Responsive Design", value: 85 },
  { name: "Git & GitHub", value: 85 },
  { name: "Firebase", value: 75 },
  { name: "Docker", value: 65 },
  { name: "Deployment (Vercel / Render / VPS)", value: 75 },
  { name: "System Design (Small–Mid Scale Apps)", value: 70 }
];

export const beyondProfession = [
  {
    title: "Anime",
    description:
      "I enjoy watching anime, especially One Piece and Attack on Titan. Stories of freedom, ambition, and determination deeply resonate with me. As Luffy says, 「海賊王に俺はなる！」 and from Attack on Titan, 「駆逐してやる！」 — powerful reminders to chase dreams and face challenges head-on."
  },
  {
    title: "Movies",
    description:
      "I enjoy watching movies across different genres. Cinema helps me relax, think differently, and appreciate creativity."
  },
  {
    title: "Reading",
    description:
      "I recently started building a reading habit to improve my mindset, focus, and knowledge."
  }
];




const blogs = [
  {
    title: "The Unexpected Idea Behind My New CLI Tool",
    date: "November 14, 2025",
    slug: "the-unexpected-idea-behind-my-cli",
    description:
      "How I accidentally stumbled onto a unique backend-to-frontend sync concept while building a simple developer tool.",
    fullContent: `

Some ideas come from planning. Others appear out of nowhere.  
This one was the second kind.

While working on a small personal project, I discovered a new way to sync backend routes with the frontend — **without OpenAPI, Swagger, GraphQL, or any code generators**.

It started simple:  
I exported all my backend routes into a tiny manifest file.  
Then I piped that manifest directly into my frontend.

Suddenly, the frontend automatically knew:

- every available backend endpoint  
- how to auto-generate request functions  
- how to stay type-consistent with backend changes  
- how to update instantly without touching client-side code  

One **sync step**. That’s it.

The more I tested it, the stranger it felt — *why hasn't anyone tried something this simple?*

Everything I found online was extremely heavy:

- OpenAPI  
- Swagger  
- tRPC  
- GraphQL  
- RPC frameworks  

But this solution was **minimal, clean, and shockingly effective**.

This discovery eventually became the foundation of my CLI tool —  
a lightweight utility that bridges backend → frontend seamlessly.

Sometimes the best ideas appear when you're simply solving your own problem.

More updates soon.
    `,
  },

  {
    title: "How I Started My Startup Journey",
    date: "May 20, 2025",
    slug: "how-i-started-my-startup-journey",
    description:
      "A story of how an idea turned into Cookie and the lessons I learned along the way.",
    fullContent: `

Every startup begins with a story.  
For me, it started with a simple problem and a desire to build something meaningful.

I didn’t have investors or a large team.  
Just passion, late nights, and the belief that technology can solve everyday problems.

From sketching ideas on paper to pitching to friends,  
every step taught me patience and perseverance.

Cookie wasn’t just a project —  
it became my journey of **growth, failure, learning, and progress**.

If you’re starting your own journey, remember:

> The journey is as important as the destination.  
> Keep pushing. Keep learning.
    `,
  },

  {
    title: "Fail Fast, Learn Faster",
    date: "May 15, 2025",
    slug: "fail-fast-learn-faster",
    description:
      "Breaking down the philosophy of failing fast, and how it helped me grow faster.",
    fullContent: `

"Fail fast" sounds cliché —  
but it genuinely changed the way I build.

In the early days of Cookie, we made decisions that didn’t work.  
Features failed. Ideas fell flat.

Instead of fearing failure, I treated it as **feedback**.

Every failure brought clarity and forced better decisions.

Failure isn’t defeat —  
**it’s data**.

Fail fast, yes.  
But more importantly — **learn faster**.
    `,
  },

  {
    title: "Balancing Vision and Execution",
    date: "May 10, 2025",
    slug: "balancing-vision-and-execution",
    description:
      "Vision gives direction. Execution brings results. Here's how to balance both.",
    fullContent: `

Vision and execution are two sides of the same coin.

- Vision without execution is just a dream.  
- Execution without vision is just busywork.

At Cookie, we keep the vision clear:  
**Build tech that genuinely helps businesses grow.**

But that vision only matters if we execute daily —  
small, deliberate steps.

If you want to lead, don’t just imagine the future.  
**Build it.**
    `,
  },

  {
    title: "Why Smart Work Beats Hard Work",
    date: "May 5, 2025",
    slug: "why-smart-work-beats-hard-work",
    description:
      "It's not about working 20 hours. It's about making 4 hours work like 20.",
    fullContent: `

Working 20 hours a day sounds impressive —  
until it burns you out.

Smart work isn't laziness —  
it's **leverage**.

Instead of doing everything myself, I focus on:

- systems  
- delegation  
- automation  

That’s how 4 focused hours can outperform 20 scattered ones.

A rule I follow now:

> Think twice before working twice.  
> Hustle hard — but think smarter.
    `,
  },

  {
    title: "The Power of Saying No",
    date: "May 1, 2025",
    slug: "the-power-of-saying-no",
    description:
      "Every 'yes' costs energy. Saying 'no' gave me clarity, focus, and control.",
    fullContent: `
# The Power of Saying No

"No" is underrated.

Every time I say no to:

- distractions  
- side projects  
- low-value tasks  

I’m saying **yes** to focus and growth.

Not every opportunity aligns with the mission.

Saying no helped protect my time, energy, and identity.

Learning to say no isn’t arrogance —  
**it’s clarity.**

And clarity builds momentum.
    `,
  },
];



const services = [
  {
    title: "Website Development",
    description:
      "I specialize in creating user-focused applications, leveraging my skills in both front-end and back-end technologies. I use React and Bootstrap for the front end, and Firebase and MongoDB for the back end, to build efficient, scalable, and visually appealing solutions.",
  },
  {
    title: "Web Apps",
    description:
      "I design and build user-friendly applications. My focus is on ensuring efficiency, scalability, and visual appeal. I strive to create solutions that meet both user needs and project goals.",
  },
  {
    title: "Mobile App Development",
    description:
      "I craft cross-platform mobile applications with intuitive interfaces and smooth performance, using modern frameworks like Flutter and React Native to bring ideas to life on both Android and iOS.",
  },
  {
    title: "UI/UX Design",
    description:
      "I focus on creating clean, modern, and user-friendly interfaces that enhance user experience. From wireframes to polished visuals, I ensure every product feels intuitive and looks stunning.",
  },
  {
    title: "Digital Marketing",
    description:
      "I help brands grow through targeted digital strategies, including SEO, social media marketing, and content creation. My goal is to increase visibility and drive meaningful engagement online.",
  },
];

const education = [
  {
    title: "Bachelor Of Computer Applications",
    duration: "2022 - 2025",
    school: "Gurunanak College, Velachery",
    description:
      "Learned various technologies Web Technologies, Programming Languages, Data Structures, Mobile App Development, OS, Databases",
    cgpa: "CGPA: 7.85 out of 9.5",
  },
  {
    title: "11th - 12th",
    duration: "2021 - 2022",
    school: "Holy Family Convent Matriculation Hr Sec School, Keelkatalai",
    description: "Secured 72% in HSC Examination.",
  },
  {
    title: "1st - 10th",
    duration: "2010 - 2020",
    school: "Good Shepherd Matriculation Hr Sec School, Old Pallavaram",
    description: "Secured 98.7% in SSLC Examination.",
  },
];

const dataportfolio = [
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771329119/Screenshot_2026-02-17_172135_aje76e.png",
    description: "SAP CRM – Multi-Module Tuition ERP (4-Role Access)",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    link: "https://app.sampathacademy.in"
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771328904/Fashbridge-logo_c4na8q.png",
    description: "FashBridge – AI-Powered Styling Assistant",
    tech: ["React Native", "AI API", "Node.js"],
    link: "https://github.com/codesbycookie/weatherdress_frontend"
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771328904/iqbridge_cs_gocl5m.jpg",
    description: "IQBridge – EdTech Corporate Website",
    tech: ["React", "Bootstrap"],
    link: "https://iqbridge.com"
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771331184/Decode_CLI_q5e7nj.png",
    description: "Decode CLI – Custom Boilerplate Automation Tool",
    tech: ["Node.js", "CLI", "File System"],
    link: `https://github.com/${github_username}/decode`
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771328905/sap_checklist_mj3pd5.jpg",
    description: "SAP Checklist – Workflow & Task Automation System",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://www.tasklist.co.in"
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771331181/Decode_CLI_2_uggnvv.png",
    description: "AI Web Scraper – Intelligent Content Extraction & Q&A",
    tech: ["Python", "BeautifulSoup", "OpenAI API"],
    link: `https://github.com/${github_username}/ai-webscraper`
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1725289558/portfolio/project/k6nggfjaza3sbum1cntd.png",
    description: "Temple Website – Official Organization Site",
    tech: ["React", "Responsive Design"],
    link: "https://www.arulmigusreebalamuneeswarantemple.org"
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1725179388/portfolio/project/uul4yhztqhhfkmqdh8k6.png",
    description: "YelpCamp – Full-Stack Booking Platform",
    tech: ["Node.js", "Express", "MongoDB"],
    link: `https://github.com/${github_username}/yelpcamp`
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771331181/Decode_CLI_3_fnntr9.png",
    description: "Sentiment Analysis – NLP Text Classification Engine",
    tech: ["Python", "NLP", "Scikit-learn"],
    link: `https://github.com/${github_username}/sentiment_analysis_app`
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771331182/Decode_CLI_1_rvxiiq.png",
    description: "PDF-to-Audio Converter – Automated TTS Processor",
    tech: ["Python", "PDF Parsing", "TTS"],
    link: `https://github.com/${github_username}/audio-converter`
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771331180/Decode_CLI_4_hpxkbp.png",
    description: "Media Downloader – yt-dlp Video Processing Tool",
    tech: ["Python", "yt-dlp"],
    link: `https://github.com/${github_username}/yt-videos_downloader`
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1725178942/portfolio/project/tp5dt5umbitbxhm6fbkv.png",
    description: "The Tribute to Virat Kohli – My First Web Project",
    tech: ["HTML", "CSS"],
    link: "https://vickydecodes.github.io/viratkohli18/viraat2.html"
  }
];


const contactConfig = {
  YOUR_EMAIL: "hello@vickify.in",
  YOUR_FONE: "+91 63851 38282",
  description:
    "I'm Vignesh, a Full Stack Developer and the mind behind Cookie, with a passion for building user-centric digital experiences. I specialize in crafting scalable, efficient, and visually engaging web solutions using modern tech stacks. Fueled by innovation and a drive for excellence, I turn bold ideas into impactful applications that deliver real value.",
  YOUR_SERVICE_ID: "service_r97lzna",
  YOUR_TEMPLATE_ID: "template_wtvoz0q",
  YOUR_USER_ID: "tZ6uCr0jgGzlfsL97",
};

const socialprofils = {
  github: "https://github.com/vickydecodes",
  linkedin: "https://www.linkedin.com/in/vickyatln26/",
  twitter: "https://x.com/vickify_exe",
  instagram: "https://www.instagram.com/vickify.exe",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  education,
  blogs,
};
