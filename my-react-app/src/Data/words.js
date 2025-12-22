const words = [
  // Frontend
  { keyword: "react", url: "https://react.dev" },
  { keyword: "redux", url: "https://redux.js.org" },
  { keyword: "react router", url: "https://reactrouter.com" },
  { keyword: "vue js", url: "https://vuejs.org" },
  { keyword: "angular", url: "https://angular.io" },
  { keyword: "svelte", url: "https://svelte.dev" },
  { keyword: "next js", url: "https://nextjs.org" },
  { keyword: "nuxt js", url: "https://nuxt.com" },
  { keyword: "tailwind css", url: "https://tailwindcss.com" },
  { keyword: "bootstrap", url: "https://getbootstrap.com" },
  { keyword: "material ui", url: "https://mui.com" },

  // Programming Languages
  { keyword: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { keyword: "typescript", url: "https://www.typescriptlang.org" },
  { keyword: "java", url: "https://www.oracle.com/java/" },
  { keyword: "python", url: "https://www.python.org" },
  { keyword: "c++", url: "https://www.cplusplus.com" },
  { keyword: "c#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { keyword: "go", url: "https://golang.org" },
  { keyword: "rust", url: "https://www.rust-lang.org" },
  { keyword: "kotlin", url: "https://kotlinlang.org" },
  { keyword: "swift", url: "https://developer.apple.com/swift/" },
  { keyword: "dart", url: "https://dart.dev" },

  // Backend & Frameworks
  { keyword: "node js", url: "https://nodejs.org" },
  { keyword: "express js", url: "https://expressjs.com" },
  { keyword: "django", url: "https://www.djangoproject.com" },
  { keyword: "flask", url: "https://flask.palletsprojects.com" },
  { keyword: "spring boot", url: "https://spring.io/projects/spring-boot" },
  { keyword: "laravel", url: "https://laravel.com" },
  { keyword: "fastapi", url: "https://fastapi.tiangolo.com" },
  { keyword: "ruby on rails", url: "https://rubyonrails.org" },

  // Databases
  { keyword: "mongodb", url: "https://www.mongodb.com" },
  { keyword: "mysql", url: "https://www.mysql.com" },
  { keyword: "postgresql", url: "https://www.postgresql.org" },
  { keyword: "sqlite", url: "https://www.sqlite.org" },
  { keyword: "redis", url: "https://redis.io" },
  { keyword: "cassandra", url: "https://cassandra.apache.org" },
  { keyword: "firebase", url: "https://firebase.google.com" },
  { keyword: "dynamodb", url: "https://aws.amazon.com/dynamodb/" },

  // Data Structures & Algorithms
  { keyword: "data structures", url: "https://www.geeksforgeeks.org/data-structures/" },
  { keyword: "algorithms", url: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/" },
  { keyword: "competitive programming", url: "https://www.codeforces.com" },
  { keyword: "dynamic programming", url: "https://www.geeksforgeeks.org/dynamic-programming/" },
  { keyword: "graph algorithms", url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/" },
  { keyword: "sorting algorithms", url: "https://www.geeksforgeeks.org/sorting-algorithms/" },
  { keyword: "searching algorithms", url: "https://www.geeksforgeeks.org/searching-algorithms/" },

  // Software & System
  { keyword: "software engineering", url: "https://www.tutorialspoint.com/software_engineering/index.htm" },
  { keyword: "system design", url: "https://www.educative.io/courses/grokking-the-system-design-interview" },
  { keyword: "operating system", url: "https://www.geeksforgeeks.org/operating-systems/" },
  { keyword: "networking", url: "https://www.cisco.com/c/en/us/solutions/enterprise-networks/index.html" },
  { keyword: "computer architecture", url: "https://www.tutorialspoint.com/computer_fundamentals/computer_architecture.htm" },
  { keyword: "microservices architecture", url: "https://martinfowler.com/articles/microservices.html" },

  // Web Development
  { keyword: "web development", url: "https://developer.mozilla.org/en-US/docs/Learn" },
  { keyword: "frontend development", url: "https://www.w3schools.com/" },
  { keyword: "backend development", url: "https://www.w3schools.com/" },
  { keyword: "fullstack development", url: "https://www.w3schools.com/" },
  { keyword: "api development", url: "https://restfulapi.net" },
  { keyword: "graphql", url: "https://graphql.org" },

  // Cloud & DevOps
  { keyword: "aws", url: "https://aws.amazon.com" },
  { keyword: "azure", url: "https://azure.microsoft.com" },
  { keyword: "google cloud", url: "https://cloud.google.com" },
  { keyword: "docker", url: "https://www.docker.com" },
  { keyword: "kubernetes", url: "https://kubernetes.io" },
  { keyword: "jenkins", url: "https://www.jenkins.io" },
  { keyword: "ci/cd", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
  { keyword: "terraform", url: "https://www.terraform.io" },

  // Version Control & Platforms
  { keyword: "github", url: "https://github.com" },
  { keyword: "gitlab", url: "https://about.gitlab.com" },
  { keyword: "bitbucket", url: "https://bitbucket.org" },
  { keyword: "version control", url: "https://git-scm.com" },

  // Competitive Coding & Learning
  { keyword: "leetcode", url: "https://leetcode.com" },
  { keyword: "hackerrank", url: "https://www.hackerrank.com" },
  { keyword: "codechef", url: "https://www.codechef.com" },
  { keyword: "geeksforgeeks", url: "https://www.geeksforgeeks.org" },

  // AI & Machine Learning
  { keyword: "artificial intelligence", url: "https://www.ibm.com/cloud/learn/what-is-artificial-intelligence" },
  { keyword: "machine learning", url: "https://data-softwareanalysis.com/blog.html" },
  { keyword: "deep learning", url: "https://data-softwareanalysis.com/blog.html" },
  { keyword: "tensorflow", url: "https://www.tensorflow.org" },
  { keyword: "pytorch", url: "https://pytorch.org" },
  { keyword: "chatgpt", url: "https://openai.com/chatgpt" },
  { keyword: "natural language processing", url: "https://www.nltk.org" },
  { keyword: "computer vision", url: "https://opencv.org" },
  { keyword: "reinforcement learning", url: "https://www.coursera.org/learn/reinforcement-learning" },
  { keyword: "data science", url: "https://www.coursera.org/specializations/data-science" },
  { keyword: "big data", url: "https://www.tutorialspoint.com/big_data_analytics/index.htm" },
  { keyword: "hadoop", url: "https://hadoop.apache.org" },
  { keyword: "spark", url: "https://spark.apache.org" },
  { keyword: "ml ops", url: "https://ml-ops.org" },

  // Tools & Resources
  { keyword: "visual studio code", url: "https://code.visualstudio.com" },
  { keyword: "postman", url: "https://www.postman.com" },
  { keyword: "docker desktop", url: "https://www.docker.com/products/docker-desktop" },
  { keyword: "stackoverflow", url: "https://stackoverflow.com" },
  { keyword: "devdocs", url: "https://devdocs.io" },
  { keyword: "medium tech", url: "https://medium.com/topic/technology" },

  // New additions: Internships, IT Software Jobs, IT Services, Digital Marketing Course
  { keyword: "internships", url: "https://data-softwareanalysis.com/Carrer.html" },
  { keyword: "IT software jobs", url: "https://data-softwareanalysis.com/Carrer.html" },
  { keyword: "career opportunities", url: "https://data-softwareanalysis.com/Carrer.html" },
  // { keyword: "contact us", url: "https://data-softwareanalysis.com/contact.html" },
  { keyword: "IT services", url: "https://data-softwareanalysis.com/" },
  { keyword: "digital marketing course", url: "https://data-softwareanalysis.com/" }
];

export default words;
