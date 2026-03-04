const logotext = "Vicky";
const meta = {
  title: "Vignesh Karthikeyan",
  description:
    "Full Stack Developer & Founder of Cookie Inc. I write code, ship products, and occasionally pretend I know what I'm doing.",
};

const github_username = "vickydecodes";

const introdata = {
  title: "I'm Vicky",
  animated: {
    first: "Crafting innovative code",
    second: "Building dynamic websites",
    third: "Developing robust web apps",
  },
  description:
    "Full Stack Developer. Founder of Cookie Inc. I build products end-to-end  from the database all the way to the pixel. Clean code, sharp UI, zero nonsense. Also probably thinking about what is One Piece right now.",
  your_img_url: "/resume/my_img6.png",
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "I'm Vignesh — Full Stack Dev, Founder of Cookie Inc., and someone who takes code very seriously but himself not so much. I build across the full stack: architecture, APIs, UI, deployment — the whole thing. Started Cookie because I got tired of seeing mediocre software win. No trends, no templates. Just well-built products that do exactly what they promise.",
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
  { name: "System Design (Small–Mid Scale Apps)", value: 70 },
];

export const beyondProfession = [
  {
    title: "Anime",
    description:
      "I enjoy watching anime, especially One Piece and Attack on Titan. Stories of freedom, ambition, and determination deeply resonate with me. As Luffy says, 「海賊王に俺はなる！」 and from Attack on Titan, 「駆逐してやる！」 — powerful reminders to chase dreams and face challenges head-on.",
  },
  {
    title: "Movies",
    description:
      "I watch across genres — not just for entertainment, but for perspective. Good cinema shifts how you think.",
  },
  {
    title: "Reading",
    description:
      "Recently building a consistent reading habit. Books slow me down in the best way — better focus, clearer thinking.",
  },
];

const blogs = [
  {
    title: "The Unexpected Idea Behind My New CLI Tool",
    date: "November 14, 2025",
    slug: "the-unexpected-idea-behind-my-cli",
    description:
      "I accidentally built something that might actually be useful. No OpenAPI, no Swagger, no code gen. Just a manifest file, one sync step, and a lot of 'wait, why does this work?'",
    fullContent: `
Some ideas come from planning. Others appear out of nowhere.
This one was the second kind.

While working on a small personal project, I found a new way to sync backend routes with the frontend — **without OpenAPI, Swagger, GraphQL, or any code generators**.

It started simple:
I exported all my backend routes into a tiny manifest file.
Then I piped that manifest directly into my frontend.

Suddenly, the frontend automatically knew:

- every available backend endpoint
- how to auto-generate request functions
- how to stay type-consistent with backend changes
- how to update instantly without touching client-side code

One **sync step**. That's it.

The more I tested it, the stranger it felt — *why hasn't anyone tried something this simple?*

Everything I found online was extremely heavy:

- OpenAPI
- Swagger
- tRPC
- GraphQL
- RPC frameworks

But this solution was **minimal, clean, and shockingly effective**.

This discovery became the foundation of my CLI tool —
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
      "No investors. No co-founder. Just a problem, a laptop, and the audacity to think I could build a company. Here's what actually happened.",
    fullContent: `
Every startup begins somewhere.

Mine started with a problem I kept running into and a stubbornness to fix it properly.

No investors. No big team. Just late nights, a lot of iteration, and a belief that good software solves real problems quietly — without needing to shout about it.

Pitching to friends. Scrapping features. Rebuilding from scratch.
Cookie wasn't just a project — it was where I figured out how to actually build something.

If you're starting out: the process teaches you more than any outcome will.
Keep shipping.
    `,
  },
  {
    title: "Fail Fast, Learn Faster",
    date: "May 15, 2025",
    slug: "fail-fast-learn-faster",
    description:
      "Breaking things is fine. Not learning from them isn't. Here's how I stopped treating failure like a verdict and started treating it like a bug report.",
    fullContent: `
"Fail fast" is overused. But it's overused because it works.

Early on at Cookie, things broke. Features missed the mark. Decisions didn't pan out.

The shift was treating failure as **feedback** — not as a verdict.

Every bad call revealed something. A wrong assumption. A missed user need. A gap in thinking.

Failure isn't defeat. It's information.
Fail fast, yes — but the real edge is **learning faster than everyone else**.
    `,
  },
  {
    title: "Balancing Vision and Execution",
    date: "May 10, 2025",
    slug: "balancing-vision-and-execution",
    description:
      "Big vision, zero execution = a really nice Notion doc. Pure execution, no vision = a hamster wheel. Here's how I try not to be either.",
    fullContent: `
Vision and execution pull in different directions if you let them.

Vision without execution stays a concept.
Execution without vision burns time on the wrong things.

At Cookie, the direction is clear: build technology that genuinely moves the needle for businesses.

But that only matters if we execute — small, deliberate, consistent steps every day.

Don't just imagine the future. Show up and build it.
    `,
  },
  {
    title: "Why Smart Work Beats Hard Work",
    date: "May 5, 2025",
    slug: "why-smart-work-beats-hard-work",
    description:
      "Grinding 20-hour days used to feel productive. Then I realized I was just busy. Here's the switch that actually changed output.",
    fullContent: `
Grinding 20 hours a day isn't a flex. It's usually a sign something's broken.

Smart work is about **leverage** — systems, delegation, automation.
It's making 4 focused hours do the work of 20 scattered ones.

I stopped treating busyness as productivity.

The rule I follow now: think before you work twice.
Effort matters. But directed effort is what compounds.
    `,
  },
  {
    title: "The Power of Saying No",
    date: "May 1, 2025",
    slug: "the-power-of-saying-no",
    description:
      "Turns out 'no' is a full sentence. Took me embarrassingly long to figure that out — but once I did, everything got cleaner.",
    fullContent: `
No is one of the most underrated words in building a company.

Every yes to a distraction, a misaligned project, or a low-leverage task
is a quiet no to the thing that actually matters.

Saying no isn't arrogance. It's prioritisation.
It protects time, energy, and direction.

Clarity is a competitive advantage.
And clarity starts with what you refuse.
    `,
  },
];

const services = [
  {
    title: "Website Development",
    description:
      "Fast, responsive, built-to-last websites. React on the front, Node + MongoDB on the back. No page builder. No drag-and-drop. Just real code that actually works when you need it to.",
  },
  {
    title: "Web Apps",
    description:
      "Full-stack web apps built for real users doing real things. Performant, maintainable, and won't fall apart the moment two people use it at the same time.",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform apps for Android and iOS using React Native. Feels native, ships fast, scales without drama. Your users won't know the difference — and that's the point.",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, intentional interfaces. I design from wireframe to final build — no clutter, no mystery meat navigation, no 'what does this button do'. Just clarity.",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, content, and social strategy that moves the needle — not just the vanity metrics. Show up where it matters, say something worth reading.",
  },
];

const education = [
  {
    title: "Bachelor Of Computer Applications",
    duration: "2022 - 2025",
    school: "Gurunanak College, Velachery",
    description:
      "Covered web technologies, programming languages, data structures, mobile app development, operating systems, and databases.",
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
    link: "https://app.sampathacademy.in",
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771328904/Fashbridge-logo_c4na8q.png",
    description: "FashBridge – AI-Powered Styling Assistant",
    tech: ["React Native", "AI API", "Node.js"],
    link: "https://github.com/codesbycookie/weatherdress_frontend",
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771328904/iqbridge_cs_gocl5m.jpg",
    description: "IQBridge – EdTech Corporate Website",
    tech: ["React", "Bootstrap"],
    link: "https://iqbridge.com",
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771331184/Decode_CLI_q5e7nj.png",
    description: "Decode CLI – Custom Boilerplate Automation Tool",
    tech: ["Node.js", "CLI", "File System"],
    link: `https://github.com/${github_username}/decode`,
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771328905/sap_checklist_mj3pd5.jpg",
    description: "SAP Checklist – Workflow & Task Automation System",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://www.tasklist.co.in",
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771331181/Decode_CLI_2_uggnvv.png",
    description: "AI Web Scraper – Intelligent Content Extraction & Q&A",
    tech: ["Python", "BeautifulSoup", "OpenAI API"],
    link: `https://github.com/${github_username}/ai-webscraper`,
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1725289558/portfolio/project/k6nggfjaza3sbum1cntd.png",
    description: "Temple Website – Official Organization Site",
    tech: ["React", "Responsive Design"],
    link: "https://www.arulmigusreebalamuneeswarantemple.org",
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1725179388/portfolio/project/uul4yhztqhhfkmqdh8k6.png",
    description: "YelpCamp – Full-Stack Booking Platform",
    tech: ["Node.js", "Express", "MongoDB"],
    link: `https://github.com/${github_username}/yelpcamp`,
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771331181/Decode_CLI_3_fnntr9.png",
    description: "Sentiment Analysis – NLP Text Classification Engine",
    tech: ["Python", "NLP", "Scikit-learn"],
    link: `https://github.com/${github_username}/sentiment_analysis_app`,
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771331182/Decode_CLI_1_rvxiiq.png",
    description: "PDF-to-Audio Converter – Automated TTS Processor",
    tech: ["Python", "PDF Parsing", "TTS"],
    link: `https://github.com/${github_username}/audio-converter`,
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1771331180/Decode_CLI_4_hpxkbp.png",
    description: "Media Downloader – yt-dlp Video Processing Tool",
    tech: ["Python", "yt-dlp"],
    link: `https://github.com/${github_username}/yt-videos_downloader`,
  },
  {
    img: "https://res.cloudinary.com/dyrcq4l1g/image/upload/v1725178942/portfolio/project/tp5dt5umbitbxhm6fbkv.png",
    description: "The Tribute to Virat Kohli – My First Web Project",
    tech: ["HTML", "CSS"],
    link: "https://vickydecodes.github.io/viratkohli18/viraat2.html",
  },
];

const contactConfig = {
  YOUR_EMAIL: "hello@vickify.in",
  YOUR_FONE: "+91 63851 38282",
  description:
    "I'm Vignesh — Full Stack Developer and Founder of Cookie Inc. I build things end-to-end and I don't half-ship. If you've got a real problem that needs a real product, I'm in. Let's talk.",
  YOUR_SERVICE_ID: "service_w1ccqt4",
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
