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
  { keyword: "digital marketing course", url: "https://data-softwareanalysis.com/" },

    // Operating Systems
  { keyword: "linux operating system", url: "https://www.kernel.org" },
  { keyword: "windows operating system", url: "https://www.microsoft.com/windows" },
  { keyword: "macos", url: "https://www.apple.com/macos" },

  // Programming Concepts
  { keyword: "object oriented programming", url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" },
  { keyword: "functional programming", url: "https://developer.mozilla.org/en-US/docs/Glossary/Functional_programming" },
  { keyword: "design patterns", url: "https://refactoring.guru/design-patterns" },
  { keyword: "clean code", url: "https://www.investigatii.md/uploads/resurse/Clean_Code.pdf" },

  // Web Basics
  { keyword: "html", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { keyword: "css", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { keyword: "responsive web design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
  { keyword: "web accessibility", url: "https://www.w3.org/WAI/" },

  // APIs & Protocols
  { keyword: "rest api", url: "https://restfulapi.net" },
  { keyword: "http protocol", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
  { keyword: "web sockets", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
  { keyword: "oauth", url: "https://oauth.net" },

  // Security
  { keyword: "web security", url: "https://owasp.org/www-project-top-ten/" },
  { keyword: "authentication", url: "https://auth0.com/docs/authenticate" },
  { keyword: "authorization", url: "https://auth0.com/docs/manage-users/access-control" },
  { keyword: "jwt", url: "https://jwt.io" },
  { keyword: "https", url: "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS" },

  // Cloud Services
  { keyword: "aws ec2", url: "https://aws.amazon.com/ec2/" },
  { keyword: "aws s3", url: "https://aws.amazon.com/s3/" },
  { keyword: "azure devops", url: "https://azure.microsoft.com/services/devops/" },
  { keyword: "google firebase hosting", url: "https://firebase.google.com/products/hosting" },

  // DevOps Practices
  { keyword: "continuous integration", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
  { keyword: "continuous deployment", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
  { keyword: "infrastructure as code", url: "https://www.terraform.io/intro" },
  { keyword: "site reliability engineering", url: "https://sre.google" },

  // Testing & Quality
  { keyword: "unit testing", url: "https://martinfowler.com/bliki/UnitTest.html" },
  { keyword: "integration testing", url: "https://martinfowler.com/bliki/IntegrationTest.html" },
  { keyword: "end to end testing", url: "https://www.cypress.io" },
  { keyword: "test driven development", url: "https://martinfowler.com/bliki/TestDrivenDevelopment.html" },

  // Software Architecture
  { keyword: "monolithic architecture", url: "https://martinfowler.com/bliki/MonolithFirst.html" },
  { keyword: "event driven architecture", url: "https://martinfowler.com/articles/201701-event-driven.html" },
  { keyword: "serverless architecture", url: "https://aws.amazon.com/serverless/" },

  // Blockchain & Web3
  { keyword: "blockchain", url: "https://www.ibm.com/topics/blockchain" },
  { keyword: "ethereum", url: "https://ethereum.org" },
  { keyword: "smart contracts", url: "https://ethereum.org/en/smart-contracts/" },
  { keyword: "web3", url: "https://web3.foundation" },

  // AI Tools
  { keyword: "openai api", url: "https://platform.openai.com/docs" },
  { keyword: "hugging face", url: "https://huggingface.co" },
  { keyword: "langchain", url: "https://www.langchain.com" },
  { keyword: "prompt engineering", url: "https://www.promptingguide.ai" },

  // Career & Professional
  { keyword: "resume building", url: "https://data-softwareanalysis.com/" },
  { keyword: "interview preparation", url: "https://data-softwareanalysis.com/" },
  { keyword: "system design interview", url: "https://data-softwareanalysis.com/" },
  { keyword: "coding interview", url: "https://data-softwareanalysis.com/" },

  // Communities
  { keyword: "github open source", url: "https://opensource.guide" },
  { keyword: "stack overflow developer survey", url: "https://survey.stackoverflow.co" },
  { keyword: "google developers", url: "https://developers.google.com" },
  { keyword: "microsoft learn", url: "https://learn.microsoft.com" },

    // ===== NORTH AMERICA =====
  { keyword: "ibm", url: "https://www.ibm.com" },
  { keyword: "oracle cloud", url: "https://www.oracle.com/cloud/" },
  { keyword: "salesforce", url: "https://www.salesforce.com" },
  { keyword: "snowflake", url: "https://www.snowflake.com" },

  // ===== EUROPE =====
  { keyword: "sap", url: "https://www.sap.com" },
  { keyword: "siemens digital", url: "https://www.siemens.com/digital-enterprise" },
  { keyword: "spotify engineering", url: "https://engineering.atspotify.com" },
  { keyword: "elastic", url: "https://www.elastic.co" },

  // ===== ASIA =====
  { keyword: "tencent cloud", url: "https://intl.cloud.tencent.com" },
  { keyword: "alibaba cloud", url: "https://www.alibabacloud.com" },
  { keyword: "baidu ai", url: "https://ai.baidu.com" },
  { keyword: "rakuten developers", url: "https://developers.rakuten.com" },

  // ===== INDIA =====
  { keyword: "tcs", url: "https://www.tcs.com" },
  { keyword: "infosys", url: "https://www.infosys.com" },
  { keyword: "wipro", url: "https://www.wipro.com" },
  { keyword: "hcl technologies", url: "https://www.hcltech.com" },

  // ===== AFRICA =====
  { keyword: "andela", url: "https://andela.com" },
  { keyword: "flutterwave", url: "https://www.flutterwave.com" },
  { keyword: "paystack", url: "https://paystack.com" },

  // ===== SOUTH AMERICA =====
  { keyword: "mercado libre tech", url: "https://developers.mercadolibre.com" },
  { keyword: "nubank", url: "https://www.nu.com.br" },
  { keyword: "globant", url: "https://www.globant.com" },

  // ===== AUSTRALIA / OCEANIA =====
  { keyword: "atlassian", url: "https://www.atlassian.com" },
  { keyword: "canva developers", url: "https://www.canva.com/developers/" },

  // ===== OPEN SOURCE ECOSYSTEM =====
  { keyword: "git", url: "https://git-scm.com" },
  { keyword: "gnu project", url: "https://www.gnu.org" },
  { keyword: "kde", url: "https://kde.org" },
  { keyword: "eclipse foundation", url: "https://www.eclipse.org" },

  // ===== CLOUD NATIVE =====
  { keyword: "cloud native computing foundation", url: "https://www.cncf.io" },
  { keyword: "helm", url: "https://helm.sh" },
  { keyword: "argo cd", url: "https://argo-cd.readthedocs.io" },

  // ===== AI & DATA (GLOBAL) =====
  { keyword: "openai research", url: "https://openai.com/research" },
  { keyword: "google deepmind", url: "https://deepmind.google" },
  { keyword: "meta ai", url: "https://ai.facebook.com" },
  { keyword: "aws machine learning", url: "https://aws.amazon.com/machine-learning/" },

  // ===== SECURITY (GLOBAL) =====
  { keyword: "kali linux", url: "https://www.kali.org" },
  { keyword: "burp suite", url: "https://portswigger.net/burp" },
  { keyword: "nmap", url: "https://nmap.org" },
  { keyword: "mitre attack", url: "https://attack.mitre.org" },

  // ===== DEVOPS & SRE =====
  { keyword: "gitops", url: "https://www.gitops.tech" },
  { keyword: "chaos engineering", url: "https://principlesofchaos.org" },
  { keyword: "pagerduty", url: "https://www.pagerduty.com" },

  // ===== CAREERS & REMOTE WORK =====
  { keyword: "remote jobs", url: "https://remoteok.com" },
  { keyword: "we work remotely", url: "https://weworkremotely.com" },
  { keyword: "stackoverflow jobs", url: "https://stackoverflow.com/jobs" },

  // ===== TECH EVENTS & CONFERENCES =====
  { keyword: "google io", url: "https://io.google" },
  { keyword: "aws reinvent", url: "https://reinvent.awsevents.com" },
  { keyword: "microsoft ignite", url: "https://ignite.microsoft.com" },

  // ===== STANDARD BODIES =====
  { keyword: "w3c", url: "https://www.w3.org" },
  { keyword: "ietf", url: "https://www.ietf.org" },
  { keyword: "iso standards", url: "https://www.iso.org" }

];

export default words;
