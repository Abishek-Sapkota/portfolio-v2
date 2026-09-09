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
      technologies: tech('Celery', 'DRF', 'Django', 'Docker', 'PostgreSQL', 'React', 'Redis', 'TypeScript'),
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
      'A student asking about their own syllabus gets generic answers from a general-purpose chatbot, with no grounding in the lesson material the course actually uses — and no way for a teacher to control what the tutor draws on.',
    solution:
      'Built a Django REST backend that ingests lesson content with topic and grade metadata, embeds it with sentence-transformers, indexes it in FAISS for semantic retrieval, and answers questions through LangChain and Hugging Face models using only the retrieved context. Tutor personas are configurable, and the service is deployed under Gunicorn behind Nginx.',
    challenges:
      'Keeping answers anchored to the retrieved passages rather than the model’s own priors, and fitting embedding and vector-index work into a request cycle Django could serve.',
    learnings:
      'A retrieval pipeline is mostly a data-modeling problem: how content is chunked and tagged decides answer quality far more than which model sits at the end of the chain.',
    thumbnail: null,
    tech_stack: tech('Django', 'DRF', 'LangChain', 'FAISS', 'Sentence-Transformers', 'Hugging Face', 'Gunicorn'),
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
      'A delivery platform serving several business customers has to keep each one’s data strictly separate, without running and maintaining a separate deployment per customer.',
    solution:
      'Built a Django REST service using django-tenants for per-tenant schema isolation on PostgreSQL, with JWT authentication, filterable endpoints, tenant, user and delivery concerns split into separate apps, environment-driven configuration, and Docker Compose plus Fabric scripts for deployment.',
    challenges:
      'Routing every request to the correct tenant schema while keeping the apps themselves unaware of which tenant they were serving.',
    learnings:
      'Schema-per-tenant isolation is worth its migration complexity: it removes an entire category of cross-tenant data leaks from application code, where they are easy to introduce and hard to notice.',
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
      'Riders and drivers need a dependable way to find each other for a trip, on a platform where an unverified account on either side is a safety problem rather than a support ticket.',
    solution:
      'Built a Django REST API where the phone number is the identity and is confirmed by one-time code, drivers are vetted through uploaded citizenship and ID documents, trips carry origin and destination places through an open-to-complete status lifecycle, and nearby matching is computed from geodesic distance with geopy. Profile and document images are stored in Cloudinary.',
    challenges:
      'Matching riders to nearby drivers as reported locations changed, without a spatial database to query against.',
    learnings:
      'Distance matching with geopy is quick to build but recomputes on every request; a spatial index such as PostGIS is what makes that pattern scale beyond a small fleet.',
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
      'Students lacked one focused space for sharing academic resources, discussing them as they read, and passing textbooks on to the next year’s cohort.',
    solution:
      'Developed a Django platform where students publish reading materials and list books to buy and sell, with real-time chat served over Django Channels and Daphne alongside the standard request/response pages, and uploaded images handled through Cloudinary.',
    challenges:
      'Running WebSocket chat and conventional page rendering inside one Django project over ASGI.',
    learnings:
      'Keeping the community app and the marketplace app separate made each easier to extend, since a change to listings never had to reason about the chat consumers.',
    thumbnail: null,
    tech_stack: tech('Django', 'Django Channels', 'WebSockets', 'Daphne', 'Cloudinary', 'JavaScript'),
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
      'A trained classifier is useless to an application while it lives in a notebook: it needs a stable interface, a versioned artifact, and somewhere to run.',
    solution:
      'Wrapped a scikit-learn model in a Django service that accepts reported symptoms over HTTP and returns a prediction from a set of just over forty conditions, loading the serialized model artifact with joblib at startup and enabling CORS so a browser client can call it directly.',
    challenges:
      'Keeping the serialized model artifact and the serving code in step as the model was retrained.',
    learnings:
      'Serving a model is mostly an interface problem: validate inputs at the boundary and version the artifact alongside the code that loads it.',
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
      'A support desk spanning several departments needs two things a flat role table cannot express: each department defining its own intake fields, and a person’s access to a ticket depending on their relationship to that specific ticket — reporter, assignee, watcher, concerned party — rather than on one global role.',
    solution:
      'Wrote 208 of the 229 commits on this Django 6 / DRF backend. Authorization asks one question of each ticket, most-privileged relation first: what is this user to it? Every DRF permission class reads that answer instead of re-deriving department membership itself. Departments define their own intake fields through a dynamic field registry backed by JSON. Every change to a ticket is recorded with its old and new value, alongside the django-auditlog entry it came from. Threaded comments carry read receipts and go out over Django Channels WebSockets, as do notifications, which Celery also mails according to each user’s quiet hours and digest setting. Attachments are generic relations, swept periodically for orphans. Sign-in runs through Keycloak or domain-allowlisted Google OAuth, and unfamiliar devices are recognized by hashed IP and GeoIP before the account owner gets an alert.',
    challenges:
      'The permission checks were correct but expensive — resolving a role against a ticket touched department membership, watchers and concerned users for every object, so list endpoints multiplied queries per row.',
    learnings:
      'Resolving the role once per ticket and handing that answer to every permission class kept the query count flat as the role matrix grew, and made the rules readable enough to argue about.',
    thumbnail: null,
    tech_stack: tech('Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Django Channels', 'WebSockets', 'Keycloak', 'Docker', 'S3'),
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
      'A report card is not one table. Each one pulls marks per subject variation, attendance, co-curricular activities, coordinator remarks and generated performance graphs into a single multi-page document, and an entire grade has to be produced in one run, on deadline.',
    solution:
      'Contributed roughly 200 commits over two years to the Django platform behind it. Built the Excel marks import: sheet metadata validation, per-student skip rules for unassigned subjects, symbol-number checks and structured error responses for invalid rows. Also worked across the report generation and publish pipeline, which runs as Celery tasks that render documents with WeasyPrint, draw performance-analysis graphs with Matplotlib, and store output in S3-compatible object storage. Also wrote permission classes for the report tracker and the section and semester scoping behind the marks views.',
    challenges:
      'Generating a grade’s worth of cards reissued the same nested queries for every student, and the save path wrote rows one at a time, so whole-grade runs timed out.',
    learnings:
      'Moving the filtering inside the prefetches, and replacing per-row saves with bulk_create and bulk_update, turned a whole-grade run from a timeout into a background job that finishes.',
    thumbnail: null,
    tech_stack: tech('Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'WeasyPrint', 'Matplotlib', 'openpyxl', 'Django Channels', 'Docker'),
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
      'A digital certificate is worth little if the recipient cannot prove it is genuine and the issuer cannot tell whether anyone ever looked at it.',
    solution:
      'Joined the Django 6 backend to build certificate template CRUD, with placeholder definitions imported from spreadsheets, plus the QR generation endpoint and the analytics behind the verification page. Visits are attributed to one of four sources: an email click, a QR scan, a plain link, or anything else. A denormalized per-source counter answers the cheap question of how many, while a raw event log carrying device and geography answers when and from where. Also built the LinkedIn sharing flow. An opaque per-certificate token is what reveals the share options at all, the OAuth exchange is cached server-side against a single-use state key, and the recipient edits the caption before anything is posted. Replaced the project’s hand-rolled Keycloak app with the shared authentication package.',
    challenges:
      'Concurrent visits to the same certificate lost counter increments, and arbitrary query parameters on the verification URL could create unbounded rows in the per-source counter table.',
    learnings:
      'An F() update fixes the lost increments, and clamping utm_source to the four known values is what stops a query string from inventing counter rows. Keeping the event log append-only meant the totals never had to be recomputed from it.',
    thumbnail: null,
    tech_stack: tech('Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Keycloak', 'LinkedIn OAuth', 'Django Channels', 'Docker', 'S3'),
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
      'An SPA talking directly to Keycloak has to hold tokens in the browser and, for the authorization code exchange, a client secret it cannot keep secret.',
    solution:
      'A packaged Django app, published to a private index and used by several services, that makes the backend the only party talking to Keycloak. It runs the code exchange server-side, hands the frontend a short-lived single-use code to redeem for a session, proxies refreshes so the client secret never leaves the server, and validates every access token against Keycloak’s JWKS with cached public keys. It ships both a DRF authentication class and a Django authentication backend, provisions users on first login, and is fully typed. Contributed the session handling: an independent login token per device set as a cookie, a rework of the login signals and their signature, an opt-out flag so a service can authenticate without having its user record overwritten, and handling for claim-to-user mismatches in the default provisioning path.',
    challenges:
      'The same account signing in from several devices had to yield an independent session per device, without re-provisioning the user or overwriting fields the consuming service considered its own.',
    learnings:
      'Every service that adopted the package disagreed about which system owned user data. The additions that earned their place were the ones that let a service turn something off: a flag to skip user updates, and processors it could override.',
    thumbnail: null,
    tech_stack: tech('Django', 'DRF', 'Keycloak', 'OAuth 2.0', 'OIDC', 'PyJWT', 'drf-spectacular', 'Hatchling'),
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
      'One deployment serving many client organizations cannot let a single query leak across them. Inside a tenant, the same people still need work partitioned by workspace and project.',
    solution:
      'Contributed to the Django backend, which gives each client its own PostgreSQL schema through django-tenants, then partitions work inside a tenant by workspace, project and status. Recurrence is stored as an rrule configuration, validated per frequency, and expanded nightly by a Celery task that clones a template task with its many-to-many properties intact. A GitLab webhook ingests push events, pulls task codes out of commit messages, and links the commits to the tasks they mention. My share was smaller: a workspace-scoping bug where a task 404ed while a different workspace was active, a backfill of task descriptions, a fix to the daily summary digest, and removing the bespoke status-update endpoint by folding its logic into the standard update path behind a signal.',
    challenges:
      'A task reachable under one workspace returned 404 when another workspace was active, because the scoping filter and the object lookup disagreed about which workspace applied.',
    learnings:
      'The bespoke status endpoint had drifted from the general update path, so the same change behaved differently depending on which one the client called. Moving status onto the default path and reacting with a signal ended that whole class of bug report.',
    thumbnail: null,
    tech_stack: tech('Django', 'DRF', 'django-tenants', 'PostgreSQL', 'Celery', 'Redis', 'Django Channels', 'GitLab Webhooks', 'Docker'),
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
      'Before several services could hand identity over to a central Keycloak-backed IAM, someone had to establish two things concretely: how OIDC claims map onto a Django user, and which direction user records should flow.',
    solution:
      'A deliberately small Django service that answered both. It subclasses the mozilla-django-oidc backend to map incoming claims onto the user model, and pushes newly created users into the IAM users API from a post_save signal, deriving the role list IAM requires from the user’s Django group membership and tagging each request with tenant and application codes through a thin requests.Session client.',
    challenges:
      'IAM rejects a user created without a role, so Django group membership had to be translated into IAM roles at the moment of creation rather than synced afterwards.',
    learnings:
      'Both questions were cheaper to answer in a service nobody depended on. Deriving IAM roles from Django groups is the mapping the production services ended up using.',
    thumbnail: null,
    tech_stack: tech('Django', 'DRF', 'Keycloak', 'OIDC', 'mozilla-django-oidc', 'python-keycloak', 'PyJWT'),
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
      'A courier operation is a chain of handoffs. An order becomes a pickup request, joins a manifest, gets assigned to a runsheet, is loaded onto a vehicle, and ends as a delivery or a return to the vendor. Each stage has its own rules and its own rate of change, so keeping the whole chain in one deployment means a pricing tweak in one stage redeploys all of them.',
    solution:
      'Worked on the platform as a backend developer at Careinfo Solutions. Each stage of the chain owns its own Django service — order, pickup request, manifest, runsheet, vehicle loading, delivery, and RTV for returns — with fleet, location, inventory, invoice, accounting, customer and merchant services beside them, and shared services for notifications, SMS and email, push, webhooks, caching and scheduled task running. Services call each other over REST and hand off longer work through Celery. Rather than reach across a boundary to read, each service keeps local tables for the entities it only consumes: tenant, user, branch, customer, merchant, fleet, location, order and status. Materialized views cover the reads that had to stay cheap regardless. My own work was on the APIs across these services, PostgreSQL schema and query optimization, Redis caching, and deployments on EC2, S3 and RDS.',
    challenges:
      'Every service needed customer, merchant, branch and status records it did not own. Fetching them from the owning service per request would have made one delivery lookup depend on six services being healthy at once.',
    learnings:
      'Keeping a local read copy in each service costs storage and a synchronization path to maintain. What it buys is a service that can still answer while the service owning that data is mid-redeploy.',
    thumbnail: null,
    tech_stack: tech('Django', 'DRF', 'Microservices', 'PostgreSQL', 'Celery', 'Redis', 'Docker', 'AWS'),
    github_url: '',
    live_url: '',
    is_featured: true,
    order: 2,
  },
].sort((a, b) => a.order - b.order)

export const featuredProjects = projects.filter((project) => project.is_featured)

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)
