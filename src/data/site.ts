export const site = {
  name: 'Joey Sheridan',
  title: 'Senior Data Engineer',
  focus: 'Data Infrastructure + Applied AI',
  location: 'Simi Valley, CA',
  coords: '34.27°N 118.78°W',
  education: 'M.S. AI · Johns Hopkins (in progress)',
  resume: '/Joey_Sheridan_Resume.pdf',
  github: 'https://github.com/Agamago',
  // Set once the LinkedIn profile refresh is done.
  linkedin: null as string | null,
  // Set at build time (see .env.example); hidden when unset.
  email: (import.meta.env.PUBLIC_CONTACT_EMAIL as string | undefined) || null,
};

export const nav = [
  { n: '01', label: 'Work', href: '/work/' },
  { n: '02', label: 'Lab', href: '/lab/' },
  { n: '03', label: 'Notes', href: '/notes/' },
  { n: '04', label: 'About', href: '/about/' },
  { n: '05', label: 'Contact', href: '/contact/' },
];

export type Project = {
  id: string; // catalog path shown on the card, e.g. "lab / 01"
  title: string;
  blurb: string;
  kind: 'Demo' | 'Case study' | 'Project';
  status: 'live' | 'planned';
  href?: string;
  tags: string[];
};

// Each lab project gets its own repo later; until then these are placeholders.
export const labProjects: Project[] = [
  {
    id: 'lab / 01',
    title: 'Medallion stepper',
    blurb: 'Step raw readings through bronze, silver and gold, with the SQL at each layer.',
    kind: 'Demo',
    status: 'live',
    href: '/lab/medallion/',
    tags: ['SQL', 'Data modeling', 'Data quality'],
  },
  {
    id: 'lab / 02',
    title: 'Home lakehouse',
    blurb: 'Bronze, silver and gold on a home server, end to end, with live dashboards.',
    kind: 'Project',
    status: 'planned',
    tags: ['Iceberg', 'Trino', 'dbt', 'Airflow'],
  },
  {
    id: 'lab / 03',
    title: 'Ask my résumé',
    blurb: 'A small RAG app that answers questions about my experience, with sources.',
    kind: 'Demo',
    status: 'planned',
    tags: ['RAG', 'Vector search', 'LLM'],
  },
  {
    id: 'lab / 04',
    title: 'SQL playground',
    blurb: 'Run queries in the browser against a sample warehouse.',
    kind: 'Demo',
    status: 'planned',
    tags: ['SQL', 'DuckDB'],
  },
  {
    id: 'lab / 05',
    title: 'Pipeline visualizer',
    blurb: 'Watch a DAG run: tasks, retries, and where a bad batch gets stopped.',
    kind: 'Demo',
    status: 'planned',
    tags: ['Airflow', 'Orchestration'],
  },
  {
    id: 'lab / 06',
    title: 'Second brain',
    blurb: 'A personal knowledge graph that agents can read and extend.',
    kind: 'Project',
    status: 'planned',
    tags: ['Knowledge graph', 'Agents', 'MCP'],
  },
];

export const workProjects: Project[] = [
  {
    id: 'work / 01',
    title: 'Research data platform',
    blurb: 'Standardized ingestion and a shared data model for lab instruments. Kept general.',
    kind: 'Case study',
    status: 'planned',
    tags: ['Airflow', 'SQL Server', 'Python', 'Go'],
  },
  {
    id: 'work / 02',
    title: 'Defect-detection inference',
    blurb: 'Taking a vision model from prototype to a production inference pipeline.',
    kind: 'Case study',
    status: 'planned',
    tags: ['PyTorch', 'GPU inference', 'MLOps'],
  },
  {
    id: 'work / 03',
    title: 'Entertainment data backend + RAG',
    blurb: 'The relational backend, APIs and a production RAG agent for a content-metadata product.',
    kind: 'Case study',
    status: 'planned',
    tags: ['PostgreSQL', 'AWS Lambda', 'LangChain'],
  },
];
