// Portfolio content. This is the single source of truth for the site.
//
// The shape mirrors the JSON the Django REST API used to return from
// /api/v1/profile/ and /api/v1/projects/, captured from the live database on
// 2026-09-04, so the components consuming it did not have to change. Edit this
// file to update the site; there is no database and no build step beyond Vite.

const tech = (...names) => names.map((name) => ({ name, icon: '' }))

export const profile = {
  name: 'Abishek Sapkota',
  title: 'Software Engineer',
  tagline: 'Building secure, scalable backend systems with Django & Django REST Framework',
  bio: 'I’m a software engineer focused on clean, scalable APIs and practical systems. My experience includes authentication, multi-tenant SaaS architecture, PostgreSQL query optimization, Celery background tasks, Redis caching, and Jinja templates. I also build and maintain the React and TypeScript frontends that sit in front of those APIs. I also deploy and operate applications on AWS using EC2, S3, and RDS, with an emphasis on security, flexibility, and maintainable architecture.',
  avatar: null,
  resume: null,
  email: 'abishek.sapkota2020@gmail.com',
  phone: '+977 9866550884',
  location: 'Dhungedhara, Kathmandu, Nepal',
  github_url: 'https://github.com/Abishek-Sapkota',
  linkedin_url: 'https://www.linkedin.com/in/abishek-sapkota-a1a967289',
  twitter_url: '',
  years_of_experience: 2,

  // Flat lists per category on the About page. No proficiency scores: a
  // self-assigned percentage tells a reader nothing the project pages don't.
  skills: [
    { name: 'Python', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'SQL', category: 'Languages' },
    { name: 'HTML', category: 'Languages' },
    { name: 'CSS', category: 'Languages' },

    { name: 'Django', category: 'Backend' },
    { name: 'Django REST Framework', category: 'Backend' },
    { name: 'Celery', category: 'Backend' },
    { name: 'FastAPI', category: 'Backend' },
    { name: 'Flask', category: 'Backend' },

    { name: 'React', category: 'Frontend' },
    { name: 'Redux', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Vite', category: 'Frontend' },

    { name: 'PostgreSQL', category: 'Databases' },
    { name: 'Redis', category: 'Databases' },
    { name: 'SQLite', category: 'Databases' },

    { name: 'Git', category: 'Tools' },
    { name: 'Docker', category: 'Tools' },
    { name: 'Nginx', category: 'Tools' },
    { name: 'Gunicorn', category: 'Tools' },
    { name: 'Postman', category: 'Tools' },
    { name: 'Keycloak', category: 'Tools' },
    { name: 'GitHub Actions', category: 'Tools' },
    { name: 'GitLab CI', category: 'Tools' },

    { name: 'Arch Linux', category: 'Platforms & OS' },
    { name: 'Ubuntu', category: 'Platforms & OS' },
    { name: 'AWS (EC2, S3, RDS)', category: 'Platforms & OS' },

    { name: 'Pytest', category: 'Testing' },
    { name: 'Vitest', category: 'Testing' },
    { name: 'Jest', category: 'Testing' },
    { name: 'React Testing Library', category: 'Testing' },
    { name: 'API Testing', category: 'Testing' },

    { name: 'Data Modeling', category: 'Practices' },
    { name: 'Query Optimization', category: 'Practices' },
    { name: 'REST API Design', category: 'Practices' },
    { name: 'CI/CD', category: 'Practices' },
  ].map((skill, index) => ({ id: index + 1, icon: '', ...skill })),

  // Newest first; `end_date: null` renders as "Now".
  experience: [
    {
      id: 1,
      company: 'PExus Tech',
      role: 'Software Engineer',
      start_date: '2025-10-01',
      end_date: null,
      description:
        'Developing and maintaining backend services with Django and Django REST Framework, with a focus on scalable APIs, reliable data models, and production-ready delivery. Also work on the React and TypeScript frontends those APIs serve, from feature work to tracking down state-scoping bugs across the two sides.',
      technologies: tech(
        'Celery',
        'DRF',
        'Django',
        'Docker',
        'PostgreSQL',
        'React',
        'Redis',
        'TypeScript',
      ),
    },
    {
      id: 2,
      company: 'Careinfo Solutions',
      role: 'Backend Developer',
      start_date: '2024-03-01',
      end_date: '2025-09-30',
      description:
        'Developed scalable APIs for a multi-tenant SaaS platform, split core functionality into Django microservices communicating through REST and Celery, optimized PostgreSQL schemas and queries, automated AWS deployments across EC2, S3, and RDS, and introduced Redis caching.',
      technologies: tech('Celery', 'DRF', 'Django', 'Docker', 'PostgreSQL', 'Redis'),
    },
  ],

  education: [
    {
      id: 1,
      institution: 'Kathmandu Engineering College',
      degree: 'Bachelor of Computer Engineering',
      field: 'Computer Engineering',
      start_date: '2020-01-01',
      end_date: '2024-05-31',
    },
    {
      id: 2,
      institution: 'GoldenGate International College',
      degree: 'Higher Secondary Education',
      field: 'Science',
      start_date: '2017-05-01',
      end_date: '2019-06-30',
    },
    {
      id: 3,
      institution: 'ChildrenLife English Boarding School',
      degree: 'Secondary Education',
      field: 'General Studies',
      start_date: '2016-02-01',
      end_date: '2017-03-31',
    },
  ],
}

// `order` sets the sequence on /projects; `is_featured` selects the Home page grid.
// Personal projects link a public repository at github.com/Abishek-Sapkota; the
// professional entries below are private work and carry no `github_url`.
export const projects = [
  {
    id: 1,
    title: 'EduRAG Intelligent Tutor',
    slug: 'edurag-intelligent-tutor',
    short_description:
      'A Django backend that answers student questions from uploaded lesson material using retrieval-augmented generation.',
    problem:
      'A student revising for an exam asks a general-purpose chatbot about their own syllabus and gets a confident answer drawn from somewhere else entirely. The teacher who set that syllabus has no say in what the tutor may draw on, and no way to tell whether a given answer came from the course material or from the model’s own guesswork.',
    solution:
      'A tutoring service that answers only from lesson material a teacher has uploaded and labeled by topic and grade. A question is matched against that material first, and the reply is assembled from what was found rather than from the model’s general knowledge, so any answer can be traced back to the passage behind it. The tutor’s voice and level are configurable, letting the same material be explained differently to a younger class.',
    challenges:
      'Keeping the tutor honest. A model asked something the material does not cover will answer anyway, and a reply that sounds authoritative while coming from outside the syllabus is worse for a student than no reply at all.',
    learnings:
      'Answer quality was settled long before the model saw the question. How the material was divided up and labeled mattered far more than which model sat at the end of the chain, which makes this largely a content problem rather than a modeling one.',
    thumbnail: null,
    tech_stack: tech(
      'Django',
      'DRF',
      'LangChain',
      'FAISS',
      'Sentence-Transformers',
      'Hugging Face',
      'Gunicorn',
    ),
    github_url: 'https://github.com/Abishek-Sapkota/EduRAG',
    live_url: '',
    is_featured: false,
    order: 4,
  },
  {
    id: 3,
    title: 'Multi-Tenant Delivery Service',
    slug: 'multi-tenant-delivery-service',
    short_description:
      'A delivery platform backend that isolates every business customer in its own PostgreSQL schema.',
    problem:
      'A delivery platform signs up several businesses, and each one assumes its orders, customers and couriers are nobody else’s concern. Honoring that by running a separate installation per client means every fix and every upgrade has to be repeated as many times as there are clients.',
    solution:
      'One deployment that keeps each business’s records in a compartment of its own, so a query written for one client cannot reach another client’s data even by mistake. Accounts sign in against their own compartment, and the code handling businesses, people and deliveries is kept separate so each can change without disturbing the others.',
    challenges:
      'Every request had to arrive at the right compartment before any code touched the data, while the features themselves stayed unaware that compartments existed at all.',
    learnings:
      'Isolation enforced beneath the application is worth the ceremony it adds to upgrades. It removes a kind of mistake that is easy to make during ordinary feature work and very hard to catch in review.',
    thumbnail: null,
    tech_stack: tech('Django', 'DRF', 'PostgreSQL', 'Django Tenants', 'JWT', 'Docker'),
    github_url: 'https://github.com/Abishek-Sapkota/delivery-service',
    live_url: '',
    is_featured: false,
    order: 5,
  },
  {
    id: 4,
    title: 'RideSharing Application',
    slug: 'ride-sharing-application',
    short_description:
      'A ride sharing REST API that verifies riders by phone, vets drivers by document, and matches trips by distance.',
    problem:
      'On a ride sharing platform an unverified account is not a support ticket, it is a stranger in someone’s car. Riders and drivers need a dependable way to find each other for a trip, and a reason to believe the person at the other end is who the app says they are.',
    solution:
      'A booking service built around identity. A rider’s phone number is their account and has to be confirmed before they can travel; a driver additionally submits identity documents and is vetted before taking anyone anywhere. Each trip moves through a defined lifecycle from open to complete, and riders are matched to drivers by how far away they actually are.',
    challenges:
      'Drivers move while they wait. Matching a rider to the nearest one meant working from reported positions that were already out of date by the time the request was answered.',
    learnings:
      'Measuring the distance to every available driver on every request is the obvious first version and the one that stops working as the fleet grows. Location is a specialized kind of data, and it eventually wants a database that understands it as such.',
    thumbnail: null,
    tech_stack: tech('Django', 'DRF', 'JWT', 'GeoPy', 'Cloudinary', 'Gunicorn'),
    github_url: 'https://github.com/Abishek-Sapkota/hikeit',
    live_url: '',
    is_featured: false,
    order: 6,
  },
  {
    id: 5,
    title: 'Student Forum',
    slug: 'student-forum',
    short_description:
      'A community platform where students share reading material, trade textbooks, and chat in real time.',
    problem:
      'Course reading gets passed around in group chats, the questions about it get asked somewhere else, and last year’s textbooks sit in a cupboard while this year’s cohort buys new ones. Students had no single place where the material, the conversation about it, and the books themselves lived together.',
    solution:
      'A student community with three things happening in one place: reading material published and discussed, textbooks listed for sale to the next cohort, and conversation that arrives live while a page stays open. The discussion side and the marketplace side are built as separate halves of the same site, so each can grow without complicating the other.',
    challenges:
      'Live conversation and ordinary page loads want different things from a server. Getting both to work inside one application, without a second system running alongside it, was most of the work.',
    learnings:
      'Drawing a hard line between the community half and the marketplace half kept both cheap to change. A change to book listings never had to reason about what the chat was doing.',
    thumbnail: null,
    tech_stack: tech(
      'Django',
      'Django Channels',
      'WebSockets',
      'Daphne',
      'Cloudinary',
      'JavaScript',
    ),
    github_url: 'https://github.com/Abishek-Sapkota/forum',
    live_url: '',
    is_featured: true,
    order: 3,
  },
  {
    id: 6,
    title: 'Disease Prediction API',
    slug: 'disease-prediction-api',
    short_description:
      'An HTTP endpoint that returns a likely condition from reported symptoms using a trained classifier.',
    problem:
      'A model that predicts well in a researcher’s notebook is worth nothing to anyone until an application can ask it a question. Getting it there means agreeing on what a question looks like, what the answer means, and where the thing runs once the researcher closes their laptop.',
    solution:
      'A small service that takes a set of reported symptoms and returns the most likely condition from a list of just over forty. The trained model is treated as a released artifact rather than a file someone had lying around: it is loaded once when the service starts, and the service can be called straight from a browser so a front end can be built against it without anything in between.',
    challenges:
      'The model kept being retrained. Each new version had to be picked up by the running service without the two drifting into disagreement about what the inputs meant.',
    learnings:
      'Serving a model is mostly a question of contracts rather than statistics. Check the inputs at the front door and version the model alongside the code that loads it, or you will eventually be investigating a prediction nobody can reproduce.',
    thumbnail: null,
    tech_stack: tech('Django', 'scikit-learn', 'NumPy', 'SciPy', 'Joblib'),
    github_url: 'https://github.com/Abishek-Sapkota/Disease-PredictionAPI',
    live_url: '',
    is_featured: false,
    order: 7,
  },
  // Professional work at INGTech. These are private, internally hosted
  // repositories, so no `github_url` is available; each entry describes only
  // architecture and the author's own contribution.
  {
    id: 7,
    title: 'Ticket System API',
    slug: 'ticket-system-api',
    short_description:
      'A multi-department helpdesk backend where a user’s access to a ticket is derived from their relationship to it, with real-time comments and notifications.',
    problem:
      'A support desk spanning several departments runs into two things a simple list of job titles cannot express. Each department wants to ask its own questions when a ticket is raised, and a person’s right to see a ticket depends on their relationship to that particular ticket. The same employee may be the reporter on one, the assignee on another, and a bystander on a third they should not see at all.',
    solution:
      'Wrote 208 of the 229 commits on this helpdesk backend. Access is decided by asking one question of each ticket, most-privileged relationship first: what is this person to it? Every rule then reads that single answer instead of working it out again for itself. Departments define their own intake questions without needing a developer, every edit to a ticket is kept with what it was before and after, and comments and notifications arrive live, with email following each person’s quiet hours and digest preference. Sign-in runs through the organization’s identity provider, and a login from an unfamiliar device is flagged to the account owner before it is trusted.',
    challenges:
      'The access rules were correct and far too expensive. Establishing one person’s standing on one ticket meant checking several kinds of membership, so a page listing fifty tickets did that work fifty times over and slowed to a crawl.',
    learnings:
      'Settling someone’s standing once per ticket and handing that answer to every rule that needed it kept the cost flat as the rules multiplied. It also left the rules plain enough that people could argue about them productively, which mattered as much as the speed did.',
    thumbnail: null,
    tech_stack: tech(
      'Django',
      'DRF',
      'PostgreSQL',
      'Celery',
      'Redis',
      'Django Channels',
      'WebSockets',
      'Keycloak',
      'Docker',
      'S3',
    ),
    github_url: '',
    live_url: '',
    is_featured: true,
    order: 0,
  },
  {
    id: 8,
    title: 'Report Card System',
    slug: 'report-card-system',
    short_description:
      'A school reporting platform that assembles multi-page PDF report cards for a whole grade from marks, attendance, co-curricular records and generated graphs.',
    problem:
      'A report card looks like a document and behaves like a small database. One card gathers marks for every subject a student took, their attendance, their co-curricular record, a coordinator’s remarks and charts of their progress. An entire grade has to be produced together, correctly, in the days before parents expect it.',
    solution:
      'Contributed roughly 200 commits over two years to the platform behind it. Built the route by which a school’s existing marks spreadsheets become records the system trusts: the sheet is checked before anything is taken from it, students who never sat a subject are skipped rather than failed, and a bad row comes back naming what was wrong with it instead of sinking the whole upload. Also worked across the pipeline that assembles and publishes the finished cards in the background, and on the rules deciding who may see which section’s results.',
    challenges:
      'Producing a whole grade repeated the same lookups for every student and saved each result one row at a time. Runs that had to be finished by a deadline instead ran until they gave up.',
    learnings:
      'The answer was not a faster machine but fewer round trips: gather what the whole batch needs up front, then write the results together. A job that used to time out became one that finishes quietly in the background.',
    thumbnail: null,
    tech_stack: tech(
      'Django',
      'DRF',
      'PostgreSQL',
      'Celery',
      'Redis',
      'WeasyPrint',
      'Matplotlib',
      'openpyxl',
      'Django Channels',
      'Docker',
    ),
    github_url: '',
    live_url: '',
    is_featured: true,
    order: 1,
  },
  {
    id: 9,
    title: 'Certify Certificate Platform',
    slug: 'certify-certificate-platform',
    short_description:
      'A certificate issuing backend where every certificate carries a verifiable link and QR code, and issuers can see how recipients actually reached it.',
    problem:
      'A digital certificate is only as good as the two questions people ask of it. The person holding it needs to prove it is genuine, and the organization that issued it wants to know whether anyone ever looked.',
    solution:
      'Joined the backend to build the parts surrounding the certificate itself. Issuers design templates and fill them from a spreadsheet of recipients, and every certificate carries a link and a scannable code leading to a page that confirms it is real. That page reports how people arrived, telling an email click apart from a scanned code apart from a plain shared link, with running totals for the quick question and a detailed record behind them for the specific one. Also built sharing to LinkedIn, where the recipient reads and edits the wording before anything is posted in their name, and replaced the project’s own sign-in code with the shared authentication package.',
    challenges:
      'Two people opening the same certificate at the same moment could each miss the other’s visit, and a link with junk appended to it could invent new categories in the tally.',
    learnings:
      'A number that several people increase at once has to be increased by the database, not by an application reading it and writing it back. Keeping the detailed record append-only meant the totals never had to be rebuilt from it to be believed.',
    thumbnail: null,
    tech_stack: tech(
      'Django',
      'DRF',
      'PostgreSQL',
      'Celery',
      'Redis',
      'Keycloak',
      'LinkedIn OAuth',
      'Django Channels',
      'Docker',
      'S3',
    ),
    github_url: '',
    live_url: '',
    is_featured: false,
    order: 8,
  },
  {
    id: 10,
    title: 'Django Keycloak Auth',
    slug: 'django-keycloak-auth',
    short_description:
      'A reusable Django/DRF package implementing Keycloak authentication with the Backend-For-Frontend pattern, so tokens and client secrets never reach the browser.',
    problem:
      'An application running in a browser and talking straight to an identity provider ends up holding two things it cannot protect: the user’s credentials for every onward request, and a secret it is meant to keep secret while shipping it to every visitor.',
    solution:
      'A reusable package, published internally and adopted by several services, that moves the entire conversation with the identity provider behind the server. The browser never receives a token or a secret; it trades a short-lived, single-use code for a session and leaves renewals to the server. Contributed the session handling: an independent session per device rather than one per account, a rework of the login events other services hook into, and an opt-out for services that consider their own user records authoritative.',
    challenges:
      'One person signing in from a phone and a laptop had to end up with two independent sessions, without the second sign-in quietly overwriting details the consuming service treated as its own.',
    learnings:
      'Every service that adopted the package disagreed about who owned user data. The additions that earned their place were the ones letting a service switch behavior off, not the ones adding more behavior.',
    thumbnail: null,
    tech_stack: tech(
      'Django',
      'DRF',
      'Keycloak',
      'OAuth 2.0',
      'OIDC',
      'PyJWT',
      'drf-spectacular',
      'Hatchling',
    ),
    github_url: '',
    live_url: '',
    is_featured: false,
    order: 9,
  },
  {
    id: 11,
    title: 'TasQ Task Management',
    slug: 'tasq-task-management',
    short_description:
      'A schema-isolated multi-tenant task manager with workspaces, recurring tasks and GitLab commits linked back to the tasks they mention.',
    problem:
      'One installation serving many client organizations cannot let a single query wander across them. Within any one client, the same people still need their work divided by team and project, or everybody sees everything.',
    solution:
      'Contributed to the backend of a task manager that keeps each client organization’s data in a compartment of its own, then divides the work inside it by workspace, project and status. Work that repeats is described once and created afresh each night. Commits pushed to the team’s repositories are matched to the tasks their messages mention, so the work and the record of it stay attached. My share was the smaller part: a bug where a task disappeared depending on which workspace was open, a backfill of missing descriptions, a fix to the daily summary, and the removal of a redundant second way to change a task’s status.',
    challenges:
      'A task was reachable from one workspace and reported missing from another, because the filter deciding what was visible and the lookup fetching the task disagreed about which workspace applied.',
    learnings:
      'A second, special-purpose way to do something ordinary will drift from the first one. Folding status changes back onto the normal path ended a recurring kind of bug report rather than fixing one instance of it.',
    thumbnail: null,
    tech_stack: tech(
      'Django',
      'DRF',
      'django-tenants',
      'PostgreSQL',
      'Celery',
      'Redis',
      'Django Channels',
      'GitLab Webhooks',
      'Docker',
    ),
    github_url: '',
    live_url: '',
    is_featured: false,
    order: 10,
  },
  {
    id: 12,
    title: 'Keycloak IAM Integration Prototype',
    slug: 'keycloak-iam-integration-prototype',
    short_description:
      'A proof-of-concept Django service that delegates sign-in to Keycloak over OIDC and provisions each new user into a central IAM API.',
    problem:
      'Before a group of services could hand identity over to a central system, two questions needed concrete answers rather than opinions: what an account from the identity provider becomes inside each application, and which side owns the user’s record once both have one.',
    solution:
      'A deliberately small service built to answer both and nothing else. It signs people in against the central provider, decides how the details that come back map onto a local account, and registers each new account with the central directory as it is created, working out the permissions that directory demands from the groups the person already belongs to.',
    challenges:
      'The central directory refuses to create a user with no role attached, so local group membership had to be translated into roles at the moment of creation rather than reconciled afterwards.',
    learnings:
      'Both questions were far cheaper to answer inside something nobody depended on yet. The mapping this prototype settled on is the one the production services went on to use, which is the whole return on having built it.',
    thumbnail: null,
    tech_stack: tech(
      'Django',
      'DRF',
      'Keycloak',
      'OIDC',
      'mozilla-django-oidc',
      'python-keycloak',
      'PyJWT',
    ),
    github_url: '',
    live_url: '',
    is_featured: false,
    order: 11,
  },
  {
    id: 13,
    title: 'Logistics & Courier Platform',
    slug: 'logistics-courier-platform',
    short_description:
      'A multi-tenant courier platform split across more than forty Django services, one per stage of the delivery chain.',
    problem:
      'A courier operation is a chain of handoffs. An order becomes a pickup request, joins a manifest, is assigned to a route, is loaded onto a vehicle, and ends as either a delivery or a journey back to the vendor. Each link has its own rules and changes at its own pace, so running the chain as a single system means a change to pricing puts the entire delivery network at risk.',
    solution:
      'Worked on the platform as a backend developer at Careinfo Solutions. Each stage of the chain is a service of its own: orders, pickups, manifests, routes, vehicle loading, delivery and returns, alongside services for the fleet, locations, inventory, invoicing, accounts, customers and merchants, plus shared services for notifications and scheduled work. Rather than reach across a boundary every time it needs a customer or a branch, each service keeps its own copy of the details it only ever reads. My own work was on the interfaces between these services, the database schemas and queries underneath them, caching, and the deployments.',
    challenges:
      'Every service needed customer, merchant, branch and status details it did not own. Fetching each one from its owner on demand would have left a single delivery lookup depending on six other services being healthy at that moment.',
    learnings:
      'A local copy of somebody else’s data costs storage and buys independence: the service can still answer while the service that owns that data is mid-redeploy. The price is a synchronization path you are then responsible for keeping honest.',
    thumbnail: null,
    tech_stack: tech(
      'Django',
      'DRF',
      'Microservices',
      'PostgreSQL',
      'Celery',
      'Redis',
      'Docker',
      'AWS',
    ),
    github_url: '',
    live_url: '',
    is_featured: true,
    order: 2,
  },
].sort((a, b) => a.order - b.order)

export const featuredProjects = projects.filter((project) => project.is_featured)

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)
