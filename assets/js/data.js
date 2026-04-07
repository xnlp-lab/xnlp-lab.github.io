window.LAB_DATA = {
  lab: {
    shortName: "XLab",
    name: "X-NLP Lab",
    institution: "INSAIT, Sofia University",
    tagline: "Personal Digital Divisions, Reliable AI and NLP, and Language Models Beyond Autoregressive Decoding.",
    location: "Base in Sofia, collaborate globally",
    email: "yuxia.wang@insait.ai",
    address: "Synergy Tower, Sofia Tech Park, blvd. Tsarigradsko shose 111R, 1784 Sofia, Bulgaria",
    mapWidgetSrc: "https://mapmyvisitors.com/map.js?d=u2pJnIncaYnl6oBpFHtkCR_V2PfvI5bg_QfpLehhFy4&cl=ffffff&w=a",
    homeIntro:
      "The INSAIT X-NLP Lab explores personal digital divisions, building reliable AI and NLP systems that are safe, factual, helpful and empathetic, and advancing language models beyond auto-regressive paradigms.",
    homeBullets: [
      "Personal Digital Divisions: personalization and privacy protection, memory and continuous learning",
      "Reliable AI and NLP: LLM and agentic safety, fact-checking, uncertainty estimation",
      "Diffusion Language Model: unify multimodal generation"
    ],
    stats: [
      { value: "4", label: "Students" },
      { value: "10", label: "International Collaborators" },
      { value: "3", label: "Research Topics" },
      { value: "10", label: "On-going Projects" },
    ]
  },
  people: {
    faculty: [
      {
        name: "Dr. Yuxia Wang",
        role: "Assistant Professor",
        interests: ["Reliable AI and NLP", "Continuous Learning and Memory", "Personalization and Privacy"], 
        email: "yuxia.wang@insait.ai",
        image: "assets/img/Yuxia.jpg",
        website: "https://yuxiaw.github.io/"
      },
    ],
    phd: [
      {
        name: "Kaiyang Wan",
        role: "PhD Candidate",
        interests: ["Interpretability", "Agents"],
        image: "assets/img/kaiyang.png",
        website: "https://kaiyangwan.github.io/"
      },
      {
        name: "Jiayi Fu",
        role: "PhD Candidate",
        interests: ["Diffusion Language Models", "Continuous Learning"],
        image: "assets/img/jiayi.jpg",
        website: "https://poruna-byte.github.io/"
      },
      {
        name: "Asen Dotsinski",
        role: "PhD Candidate",
        interests: ["LLM Security", "Jailbreaking Defences", "Mechanistic Interpretability"],
        image: "assets/img/asen.jpg",
        website: "https://asendotsinski.github.io"
      }
    ],
    explorer: [
      {
        name: "Elena Dimitrova",
        role: "Explorer",
        interests: ["Bulgarian Language Processing", "AI for Education"],
        image: "assets/img/Elena.png"
      },
    ],
    visiting: [
      {
        name: "Ruihong Zeng",
        role: "Collaborating PhD · MBZUAI",
        interests: ["Factuality", "Fact-checking"],
        image: "assets/img/person-visiting-1.svg"
      },
      {
        name: "Hasan Iqbal",
        role: "Collaborating PhD · MBZUAI",
        interests: ["Fact-checking"],
        image: "assets/img/Hasan.png"
      },
      {
        name: "Minh Ngoc Ta",
        role: "Collaborating PhD · MBZUAI",
        interests: ["Machine-generated content detection", "Ambiguous Clarification"],
        image: "assets/img/Minh.png"
      },
      {
        name: "Yan Lin",
        role: "Collaborating PhD · Newcastle University",
        interests: ["Skilled agents", "AI for finance"],
        image: "assets/img/person-visiting-1.svg"
      },
      {
        name: "Yuyang Dai",
        role: "Collaborating Undergraduate · Capital University of Economics and Business",
        interests: ["Personal digital twins", "AI for finance"],
        image: "assets/img/person-visiting-1.svg"
      }
    ]
  },
  papers: [
    {
      year: 2026,
      title: "RealFin: How Well Do LLMs Reason About Finance When Users Leave Things Unsaid?",
      venue: "ACL 2026 (Findings)",
      authors: "Yuyang Dai*, Yan Lin*, Zhuohan Xie, Yuxia Wang",
      tags: ["AI for finance"],
      link: "https://arxiv.org/pdf/2602.07096"
    },
    {
      year: 2026,
      title: "Is Human-Like Text Liked by Humans? Multilingual Human Detection and Preference Against AI",
      venue: "ACL 2026 (Main)",
      authors: "Yuxia Wang, Rui Xing, et al., Iryna Gurevych, Preslav Nakov",
      tags: ["MGT Detection"],
      link: "https://arxiv.org/pdf/2502.11614"
    },
    {
      year: 2026,
      title: "A Fano-style Accuracy Upper Bound for LLM Single-pass Reasoning in Multi-hop QA",
      venue: "ICLR 2026",
      authors: "Kaiyang Wan, Lang Gao, Honglin Mu, Preslav Nakov, Yuxia Wang, Xiuying Chen",
      tags: ["Information-theoretical Limits of LLM Reasoning"],
      link: "https://arxiv.org/pdf/2509.21199"
    },
  ],
  news: [
    {
      date: "2026-04-06",
      category: "Paper",
      title: "Five papers accepted to ACL 2026: four main and one findings.",
      description: "Three papers are related to AI for finance, one for MGT detection and one for cultural bias."
    },
    {
      date: "2026-01-03",
      category: "Paper",
      title: "Two papers accepted to EACL 2026 Main.",
      description: "Two papers are related to machine-generated context including text and code detection."
    }
    // {
    //   date: "2026-03-18",
    //   category: "Award",
    //   title: "Two papers accepted to ACL 2026.",
    //   description: "Congratulations to the ESL team for new work on heterogeneous search and language-agent reward design."
    // },
    // {
    //   date: "2026-03-02",
    //   category: "Visit",
    //   title: "We welcomed visiting scholars from Kyoto Tech and the University of Edinburgh.",
    //   description: "The visit included a mini-symposium on robust reasoning and multimodal interaction."
    // },
    // {
    //   date: "2026-02-11",
    //   category: "Open Source",
    //   title: "SearchStateKit v1.0 is now open-sourced.",
    //   description: "The toolkit provides modules for explicit search-state maintenance, auditing, and evaluation."
    // }
  ],
  projects: {
    openSource: [
      {
        name: "SearchStateKit",
        status: "Open Source",
        summary: "A toolkit for maintaining explicit search states, controller policies, and audit logs for search agents.",
        stack: ["Python", "FastAPI", "Elasticsearch", "Vector DB"],
        link: "#"
      },
      {
        name: "Diff-Continuation",
        status: "Open Source",
        summary: "Reference code for converting AR language models into discrete and continuous diffusion language models.",
        stack: ["PyTorch", "DeepSpeed", "Transformers"],
        link: "#"
      },
      {
        name: "EvalForge",
        status: "Open Source",
        summary: "A benchmark harness for interactive agents with trajectory logging, reward shaping, and human review.",
        stack: ["Python", "W&B", "Docker"],
        link: "#"
      }
    ],
    ongoing: [
      {
        name: "WorldSim Reasoning Arena",
        status: "In Progress",
        summary: "An internal platform for training and evaluating language agents in tool-rich environments.",
        milestones: ["Environment feedback design", "State-level critics", "Generalization tests"]
      },
      {
        name: "Evidence Atlas",
        status: "In Progress",
        summary: "A hybrid enterprise search system for structured and unstructured evidence with precise constraint handling.",
        milestones: ["Search state controller", "Constraint verifier", "Speculative retrieval"]
      },
      {
        name: "Lab Compass",
        status: "In Progress",
        summary: "A collaborative memory and workflow layer for research planning, paper reading, and meeting follow-up.",
        milestones: ["Shared project dashboards", "Long-horizon memory", "Actionable summaries"]
      }
    ]
  },
  activities: [
    {
      title: "Annual Lab Retreat",
      caption: "A two-day retreat for research planning, lightning talks, and team building.",
      image: "assets/img/activity-retreat.svg"
    },
    {
      title: "Paper Jam Fridays",
      caption: "A lively weekly reading group with rotating discussants and critique sessions.",
      image: "assets/img/activity-paperjam.svg"
    },
    {
      title: "Open Demo Day",
      caption: "We invite collaborators and students to try our newest systems and share feedback.",
      image: "assets/img/activity-demo.svg"
    }
  ],
  connections: [
    { name: "Institute for AI Safety", type: "Research Partner" },
    { name: "Center for Language Technology", type: "Academic Collaborator" },
    { name: "Open Research Collective", type: "Open-Source Partner" },
    { name: "Global Search Systems Forum", type: "Community Partner" },
    { name: "Horizon Robotics Research", type: "Industry Collaborator" },
    { name: "Trustworthy Computing Alliance", type: "Strategic Partner" }
  ],
  recruit: {
    regular: [
      "Prospective PhD students interested in language agents, retrieval, reinforcement learning, or trustworthy AI",
      "Research interns with strong engineering skills in Python, PyTorch, and systems prototyping",
      "Visiting students eager to explore agent evaluation, memory systems, and multimodal interaction"
    ],
    urgent: [
      {
        title: "Emergent Recruit · Research Engineer",
        summary: "Build robust evaluation and logging infrastructure for long-horizon language-agent experiments.",
        needs: ["PyTorch", "Distributed training", "Benchmark tooling"],
        contact: "jobs-esl@youruniversity.edu"
      },
      {
        title: "Emergent Recruit · Search Systems Intern",
        summary: "Prototype hybrid retrieval pipelines and interface components for enterprise search scenarios.",
        needs: ["Search / IR", "APIs", "Front-end basics"],
        contact: "jobs-esl@youruniversity.edu"
      },
      {
        title: "Emergent Recruit · Visiting Student",
        summary: "Join a fast-moving project on uncertainty-aware feedback and factual revision in long-form generation.",
        needs: ["NLP", "Evaluation", "Curiosity"],
        contact: "jobs-esl@youruniversity.edu"
      }
    ]
  }
};