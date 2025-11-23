export const aboutMe = `Hi, I’m Bhavesh Verma — a Software Engineer focused on building high-performance systems, distributed architectures, and full-stack applications. At Sound of Meme, an AI-driven music generation platform, I’ve scaled infrastructure to support millions of tracks during viral spikes, migrated systems to Kubernetes (EKS), and re-architected the backend for improved reliability and speed.

I'm passionate about solving complex problems at scale. Always open to new opportunities and collaborations — let’s connect!`;

export const experience = [
  {
    title: "Software Engineer / Platform Engineer",
    company: "Sound of Meme – Music Generation Platform",
    duration: "October 2024 - Present",
    description: [
      "Led the scaling of core platform infrastructure, enabling the system to reliably handle 800K+ AI-generated songs per day during traffic spikes and viral events, improving peak-load stability by 40%.",
      "Migrated infrastructure from EC2 to Kubernetes (Amazon EKS), improving deployment agility, resource utilization, and scalability.",
      "Re-architected the backend from a monolithic codebase to a distributed worker-based architecture, increasing parallel processing throughput by 3× and improving system fault tolerance by 50%.",
      "Built and maintained media-integration pipelines with platforms like YouTube, enabling users to generate music from extracted audio and supporting 10,000+ media ingestion requests daily.",
      "Developed an AWS Lambda image-processing service that dynamically adjusts resolution and quality via URL parameters, integrated with CloudFront caching, reducing global image load latency by 35%.",
      "Migrated the song leaderboard system from complex Postgres read/write queries to an event-driven architecture using Apache Kafka, an aggregation service, and Redis, reducing leaderboard query latency by 70% and improving system scalability and write throughput by 3×.",
      "Provided cross-functional support in frontend development during capacity gaps, helping maintain feature velocity and reducing delivery delays by 20%."
    ]
  },
  // {
  //   title: "Full Stack Developer",
  //   company: "Persist Ventures",
  //   duration: "October 2024 - Present",
  //   description: "Collaborated with Persist Ventures through one of their supported ventures, Sound of Meme."
  // },
  {
    title: "Software Engineer Intern",
    company: "Ekalakaar",
    duration: "August 2023 - October 2023",
    description: [
      "Decoupled image processing tasks using Amazon SQS workers, resulting in a 40% reduction in server load, thereby decreasing latency by 30%.",
      "Implemented Redis caching for hot queries, reducing access time by over 90% and significantly improving user experience."
    ]
  }
];

// image path relative to public
export const skillData = [
  {
    heading: "Basic",
    data: [
      { name: "html5", imgUrl: "/images/html5.png" },
      { name: "css", imgUrl: "/images/css.png" },
      { name: "tailwind" },
      { name: "python", imgUrl: "/images/python.png" },
      { name: "javascript", imgUrl: "/images/javascript.png" },
      { name: "typescript", imgUrl: "/images/typescript.png" },
      { name: "dart" },
      { name: "flutter", imgUrl: "/images/flutter.png" },
      { name: "docker" },
      { name: "git" },
      { name: "linux" },
      { name: "bash" },
    ],
  },
  {
    heading: "Server",
    data: [
      {
        name: "nodejs",
        imgUrl: "/images/nodejs.png",
      },
    ],
  },
  {
    heading: "Database",
    data: [
      { name: "mongodb", imgUrl: "/images/db.png" },
      { name: "postgresql", imgUrl: "/images/db.png" },
      { name: "redis" },
    ],
  },
  {
    heading: "React",
    data: [
      { name: "react js", imgUrl: "/images/reactjs.png" },
      { name: "redux", imgUrl: "/images/redux.png" },
      { name: "nextjs", imgUrl: "/images/nextjs.png" },
    ],
  },
  {
    heading: "AI",
    data: [
      { name: "openai apis" },
      { name: "google gemini apis" },
      { name: "langchain" },
      { name: "langgraph" },
    ],
  },
  {
    heading: "GraphQL",
    data: [
      { name: "apollo server and client", imgUrl: "/images/apollo.png" },
    ],
  },
  {
    heading: "AWS",
    data: [{ name: "EC2" }, { name: "S3" }, { name: "SQS" }],
  },
  {
    heading: "Others",
    data: [{ name: "RabbitMQ" }, { name: "socket.io" }, { name: "Webrtc" }, { name: "Apache Kafka" }],
  },
  //   {
  //     heading: "Angular",
  //     data: [{ name: "Angular", imgUrl: "/images/angular.png" }],
  //   },
];

export const projects = [
  {
    name: "movies app",
    imageUrl: "/images/projects/movies_app.png",
    deployLink: "https://movies-app-client-psi.vercel.app/",
    githubRepoLink: "https://github.com/Bhaveshverma2077/Movies-App",
  },
  {
    name: "shopping app",
    imageUrl: "/images/projects/shopping_app.png",
    deployLink: "#",
    githubRepoLink: "https://github.com/Bhaveshverma2077/shopping-app",
  },
  {
    name: "portfolio",
    imageUrl: "/images/projects/portfolio.png",
    deployLink: "https://portfolio-2vug.vercel.app/",
    githubRepoLink: "https://github.com/Bhaveshverma2077/portfolio",
  },
];
