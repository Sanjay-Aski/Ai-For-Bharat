# BharatAccess AI - System Design Document

---

## System Overview

BharatAccess AI is a serverless, event-driven AI communication system that converts complex public documents into understandable, localized, and accessible information for citizens.

The system is designed around a human-centered processing pipeline:

**Citizen Request → Processing Pipeline → Understanding Engine → Response Builder → Multi-Channel Delivery**

Unlike a traditional chatbot, BharatAccess AI functions as a **Civic Information Interpretation Engine**. It not only responds to queries but interprets real-world documents and communicates actionable meaning to users.

The design prioritizes:
- Accessibility
- Reliability
- Low bandwidth operation
- Massive scalability
- Real-time interaction

---

## Design Goals

### Primary Goals
1. Interpret real-world government documents automatically
2. Provide understandable explanations instead of raw text
3. Work on low-connectivity networks
4. Provide conversational follow-up support

### Technical Goals
- Serverless infrastructure
- High availability
- Horizontal scalability
- Event-driven processing
- Low operational cost

---

## Architectural Style

The system uses a **Serverless Event-Driven Microservice Architecture**.

### Why This Architecture?

| Requirement | Architectural Reason |
|------------|------|
| Rural scale usage | Auto-scaling serverless compute |
| Intermittent connectivity | Asynchronous processing |
| Document processing | Event pipeline triggers |
| AI workloads | Independent processing services |
| Cost constraints | Pay-per-use cloud services |

Each service operates independently and communicates through events instead of direct coupling.

---

## High Level System Flow

1. Citizen uploads document or message
2. API Gateway receives request
3. Cognito authenticates user
4. Orchestrator decides processing route
5. OCR extracts document text
6. Language engine interprets content
7. Generative AI simplifies meaning
8. Response Builder prepares structured output
9. Translation localizes response
10. Delivery service sends response via WhatsApp/SMS/Voice

---

## Core Components

### 1. End User Interfaces

**Channels Supported**
- WhatsApp Bot
- Mobile Application
- Web Portal
- SMS
- Voice Call

The system is designed mobile-first and messaging-first to support low digital literacy.

---

### 2. API Layer (AWS API Gateway)

Acts as the entry point to the system.

Responsibilities:
- Receive all incoming requests
- Validate payloads
- Route requests to processing services
- Protect backend services
- Apply rate limiting

No client directly communicates with backend services.

---

### 3. Authentication Layer (Amazon Cognito)

Handles user identity.

Responsibilities:
- OTP login
- Session management
- User profile storage
- Access authorization

Why needed:
Prevents spam, abuse, and ensures personalized service.

---

### 4. Orchestration Layer (Lambda Orchestrator)

This is the **brain of the platform**.

It decides:
- Is this a document?
- Is this a question?
- Is this a follow-up?

Responsibilities:
- Workflow control
- Context retrieval
- Trigger AI services
- Manage conversation state

The orchestrator prevents direct service-to-service dependency.

---

### 5. Storage Layer

#### Document Storage (Amazon S3)
Stores:
- uploaded images
- PDFs
- processed files

#### Chat History (DynamoDB)
Stores:
- user messages
- system responses
- conversation context

#### Knowledge Store (OpenSearch)
Stores:
- extracted entities
- document summaries
- searchable civic information

---

## AI Processing Pipeline

The AI pipeline is the most critical part of the system.

### Step 1 — OCR Processing (Amazon Textract)

Purpose:
Convert document images into machine-readable text.

Features:
- printed text recognition
- handwritten text recognition
- layout detection
- table detection

Output:
Raw extracted text + structure.

---

### Step 2 — Language Processing (NLP Engine)

The NLP engine performs semantic understanding.

It identifies:
- notice type
- authority
- important dates
- penalties
- actions required

It also cleans OCR noise and corrects errors.

---

### Step 3 — Generative AI Simplification (Amazon Bedrock)

The LLM performs:
- summarization
- simplification
- instruction generation

The output is rewritten to:
- 6th–8th grade reading level
- step-by-step actions
- clear warnings

The system converts bureaucratic language into human language.

---

### Step 4 — Conversation Engine

Maintains context awareness.

Example:
Citizen: "What happens if I ignore this?"

The system answers based on the specific uploaded document.

The engine retrieves:
- chat history
- document meaning
- previous answers

---

### Step 5 — Translation Service

The response is translated into the citizen’s preferred language.

Supported:
- Hindi
- Marathi
- Bengali
- Tamil
- Telugu (extendable)

The translation preserves meaning rather than literal words.

---

### Step 6 — Response Builder

The Response Builder formats output into a human-friendly structure.

Structure:
- What this notice means
- Why you received it
- What you must do
- Deadline
- Consequences

It also prepares:
- SMS format
- WhatsApp rich message
- Voice script

---

### Step 7 — Voice Generation (Amazon Polly)

The system generates spoken explanations.

Purpose:
Enable usage by:
- elderly citizens
- visually impaired users
- illiterate users

---

### Step 8 — Delivery Layer

Channels:

| Channel | Service |
|-------|------|
| WhatsApp | WhatsApp API + Pinpoint |
| SMS | Amazon SNS |
| Web | REST Response |
| Voice | Polly Audio |

---

## Monitoring and Reliability (CloudWatch)

The monitoring system tracks:
- failures
- response time
- OCR success rate
- delivery success rate

It also triggers alerts when:
- OCR fails
- message fails
- service crashes

---

## Data Flow Description

### Document Flow
User → API → Orchestrator → OCR → NLP → GenAI → Response Builder → Translation → Delivery → User

### Conversation Flow
User Question → API → Conversation Engine → Context Retrieval → GenAI → Response → User

---

## Security Design

Security mechanisms:

- HTTPS encrypted communication
- Encrypted storage (S3 + DynamoDB)
- IAM role-based permissions
- Access tokens
- Audit logs

Citizen personal data is never exposed publicly.

---

## Scalability Strategy

The system scales automatically because:

- Lambda scales compute
- S3 scales storage
- DynamoDB scales database
- API Gateway scales traffic

The platform can handle city-level → state-level → national-level usage without redesign.

---

## Fault Tolerance

If a service fails:

| Failure | System Action |
|------|------|
| OCR fails | Retry |
| Translation fails | Fallback language |
| Delivery fails | Retry + notify |
| AI timeout | Regenerate response |

No single failure stops the full system.

---

## Performance Targets

| Metric | Target |
|------|------|
| Response time | < 5 sec |
| OCR processing | < 15 sec |
| Message delivery | < 30 sec |
| System uptime | 99.5% |

---

## Future Expansion

Planned improvements:
- Direct government portal integration
- Automatic form filling
- IVR phone helpline
- Regional legal assistance
- Offline kiosk support

---

## Key Innovation

Most systems digitize documents.

**BharatAccess AI interprets them.**

The platform does not merely convert images to text.  
It converts official communication into understandable human guidance.

This changes public communication from:
**"Government speaks → Citizen confused"**

to

**"Government speaks → Citizen understands → Citizen acts"**
