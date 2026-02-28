# BharatAccess AI  
### Inclusive Civic Intelligence & Action Platform (AI for Bharat Hackathon)


&nbsp; 🏗️ [Design](design.md) &nbsp;|&nbsp; 📋 [Requirements](requirements.md)

---
🔗 **WhatsApp Bot UI** — [Figma](https://parrot-iso-35487658.figma.site) &nbsp;|&nbsp; 🔗 **Admin Dashboard UI** — [Figma](https://whirl-hand-43016860.figma.site)


BharatAccess AI is a **WhatsApp-native civic intelligence platform** that transforms complex government notices, welfare schemes, and legal documents into **simple, regional-language, step-by-step action workflows** for Indian citizens.

The platform is designed for **low-literacy, low-bandwidth, and high-regulation environments**, ensuring factual correctness, explainability, and compliance-first AI usage.

---

## 🚨 Problem Statement

India generates thousands of government notices, schemes, and legal documents every year. However:

- Language is highly **bureaucratic (“officialese”)**
- Many notices are **scanned PDFs or handwritten**
- Citizens lack **context, eligibility clarity, and next steps**
- Missed deadlines and dependence on intermediaries are common
- Simple translation tools fail to preserve **legal meaning**

**Access ≠ Understanding**

BharatAccess AI closes this gap by converting documents into **guided civic workflows**, not just summaries.

---

## 🎯 Solution Overview

BharatAccess AI acts as an **Intelligent Civic Orchestration Engine**:

1. Ingests government notices (PDF/image)
2. Digitizes content using OCR
3. Extracts meaning using structured GenAI
4. Simplifies language without hallucination
5. Identifies eligibility conditions
6. Generates step-by-step actions
7. Tracks deadlines and sends reminders
8. Delivers everything via WhatsApp

---

## 🧠 Core Principles

- **No hallucination** (extractive summarization preferred)
- **Predictable structured output**
- **Consent-driven data usage**
- **Low cognitive load**
- **WhatsApp-first accessibility**
- **Serverless & scalable**

---

## 🏗️ System Architecture (AWS Native)

### 🔹 Access Layer
- WhatsApp Cloud API (Primary)
- Web Admin Dashboard (Next.js)

### 🔹 Orchestration Layer
- Amazon API Gateway
- AWS Lambda (Python 3.12)

### 🔹 AI & Civic Intelligence
- Amazon Textract (OCR: printed + handwritten)
- Amazon Bedrock  
  - Mistral Large 3  
  - Mistral Small 3.2  
  - Claude 3.5 Sonnet (selective reasoning)
- Amazon Comprehend (intent extraction)

### 🔹 Data & Knowledge Layer
- Amazon S3 – Document storage
- Amazon DynamoDB – User state & context
- Amazon OpenSearch – Civic rulebook vector index (RAG)

### 🔹 Notifications & Monitoring
- Amazon SNS – Alerts & reminders
- Amazon CloudWatch – Logs & metrics

---

## 🔐 Security, Privacy & Compliance

BharatAccess AI is designed for **regulated civic environments**.

- Aadhaar numbers are **never stored in raw form**
- Tokenization via **Reference Keys**
- Encryption at rest and in transit
- Least-privilege IAM policies
- Explicit user consent for:
  - Eligibility checks
  - Form pre-filling
  - Reminders
- DPDP Act & UIDAI-compliant architecture (Aadhaar Data Vault ready)

---

## 📱 User Interfaces

### ✅ WhatsApp Bot (Citizen Interface)
- Upload government notices
- Receive simplified summaries
- Check eligibility
- View step-by-step workflows
- Set deadline reminders

🔗 **WhatsApp Bot UI (Figma)**  
👉 https://parrot-iso-35487658.figma.site

---

### 🖥️ Admin Dashboard (Web)
- View uploaded notices
- Verify OCR output
- Inspect extracted summaries
- Monitor eligibility rules
- Track reminder logs

🔗 **Admin Dashboard UI (Figma)**  
👉 https://whirl-hand-43016860.figma.site

---

## 🧩 Key Features

- 📄 Notice upload (PDF / image)
- ✍️ Handwritten + printed OCR
- 🧠 Semantic simplification (not translation)
- 🪜 Step-by-step action workflows
- ⏰ Deadline detection & reminders
- 🌐 Multilingual support
- 🔄 Long-term context persistence
- 🔐 Consent-driven data usage

---

## 🛠️ Prompt Engineering Strategy

All GenAI interactions follow a **strict role-based prompt structure**:

- **Role**: Civic Analyst / Welfare Coordinator
- **Objective**: Extract eligibility, steps, deadlines
- **Context**: Verified document + user metadata (with consent)
- **Output Format**: JSON / Markdown only
- **Constraints**: No assumptions, no hallucinations

This ensures **predictable, automatable outputs**.

---

## 🧪 24-Hour Hackathon Goal

Within the first 24 hours of AWS credits:

- Upload a government notice
- OCR via Textract
- Extractive multilingual summary via Mistral (Bedrock)
- Generate structured JSON action plan
- Deliver response via WhatsApp sandbox

---

## 📈 Scalability & Future Roadmap

### Phase 1 — B2G (Government)
- Custom deployments for state departments
- White-labeled dashboards
- Reduced RTI and grievance load

### Phase 2 — B2G White Label
- Department-specific civic bots
- Agriculture, Health, Social Welfare

### Phase 3 — B2B SaaS
- Legal & compliance document processing
- Subscription-based model
- Advanced analytics modules

---

## 💰 Cost Efficiency (Prototype Scale)

- Serverless-first → near-zero idle cost
- AWS Free Tier covers early usage
- Pay-as-you-go GenAI inference
- Linear scaling with demand

---

## 📂 Repository Structure (Planned)
bharataccess-ai/
│
├── backend/
│ ├── lambdas/
│ ├── prompts/
│ ├── orchestration/
│
├── frontend/
│ ├── whatsapp-bot/
│ └── admin-dashboard/
│
├── infra/
│ ├── api-gateway/
│ ├── iam/
│ └── cloudformation/
│
├── docs/
│ ├── architecture.md
│ ├── security.md
│ └── prompts.md
│
└── README.md


---

## 🤝 Team

**Team Name:** Angreziyoo  
**Project:** BharatAccess AI  
**Hackathon:** AWS AI for Bharat Hackathon

---

## 📜 License

This project is currently developed for **hackathon and research purposes**.  
Licensing will be finalized before production deployment.

---

## 🙌 Acknowledgements

- AWS AI for Bharat Hackathon
- Amazon Bedrock & Textract teams
- Civic open-data contributors
- Community feedback from grassroots users

---

> BharatAccess AI is not just an AI project —  
> it is **civic infrastructure for the next billion users**.