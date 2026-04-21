# Section 20 Product Copilot Knowledge Base (Prototype)
Version: Master Prototype  
Date: 30 March 2026  
Audience: Copilot/Agent knowledge upload  
Purpose: Enable detailed, accurate answers about current prototype behavior.

---

## 1) Product Summary
This product is a **Section 20 major works management prototype** for property managers.  
It supports creating and managing major works, consultation timelines, documents, delivery actions, leaseholder observations, comments, and activity/audit context.

The prototype focuses on:
- Reducing PM error through guided workflow and status-driven UI.
- Keeping consultation document handling, delivery, and observations connected.
- Surfacing risk and action clarity in overview.

---

## 2) Authentication and Access (Prototype)
- Prototype has a simple password gate in app shell.
- Password is currently: `majorworks-demo`.
- Authentication is session-based (browser session storage), not database-backed.

---

## 3) Major Works Lifecycle Model
### Status values
- In progress
- On hold
- Completed
- Delayed
- Cancelled
- Dispensation
- Archived

### Consultation stages supported
- Notice of intention
- First notice (mapped label behavior)
- Tenders
- Statement of estimate
- Notice of reasons
- Ongoing works
- Completion

### High-level app views
- Major works list
- Major works detail
- Create/edit major works form

---

## 4) Major Works List Capabilities
- KPI cards (counts, estimated total cost, estimated fee).
- Search/filter controls:
  - Estate
  - Building
  - Property manager
  - Archived toggle
- Sortable columns in list.
- Pagination.
- Download report (prototype PDF output).
- New major works creation.
- Archive / unarchive workflow:
  - Confirmation modal
  - Archive changes status to `Archived`
  - Unarchive changes status to `On hold`
- Archived items appear visually disabled/dulled.

---

## 5) Major Works Detail Navigation
Tabs include:
- Overview
- Issues
- Documents
- Comments
- Audit trail

---

## 6) Overview Tab (Current Behavior)
### A) Timeline forecast card
- Uses each major work’s own inputs (not one generic graph):
  - work start date / created date fallback
  - completion date / stage fallback
  - stage progress defaults
  - status impact (In progress, Delayed, On hold, Completed, Cancelled)
- Chart shows planned vs expected progression.
- Expected line is dashed.
- Displays:
  - Started
  - Planned completion
  - Expected completion
  - Estimated completion duration

### B) Status-aware behavior in forecast
- On hold: expected timeline pauses from cutoff.
- Cancelled: progression cut off after cutoff.
- Completed: progression resolves to completed state.

### C) Needs attention widget
Purpose: unresolved items requiring PM attention.

Severity labels currently used in pill:
- Very urgent
- Urgent
- Immidiate (prototype spelling)

Typical item types:
- Unresolved objections
- Open leaseholder responses
- Draft consultation docs blocking progression
- Generated but not marked sent
- Bounced emails needing re-serve

Rules:
- Completed works can show no actionable items.
- Specific in-progress demo works can show no-action/on-track scenario.
- Empty/all-clear message:
  - “All good. No immediate actions are needed and this major works is currently on track.”

### D) Key updates widget
Purpose: informational feed of **actions already taken**.

Behavior:
- Shows “who did what and when” style updates.
- Includes source/type pill.
- Uses neutral visuals (no severity coloring).
- CTA is a text link under left content.

Typical entries:
- Notice sent by PM
- Observation logged
- Contractor quote/selection progress update
- CDM compliance update
- Internal comment added

---

## 7) Timeline Stage Progression Logic
- Stage progression is sequential.
- Next stage actions are blocked if previous stage tasks are incomplete.
- User gets warning modal when trying to progress with unchecked prior tasks.
- Timeline/forecast should reflect stage and status state, not static assumptions.

---

## 8) Documents Tab
### Core capabilities
- Consultation vs project document segmentation.
- Search and filtering.
- Sorting by multiple columns.
- Pagination.
- Column visibility controls.
- Document open into detail modal.

### Important constraints implemented
- Only one notice template per notice stage category where enforced.
- If relevant notice already exists, duplicate creation is blocked in modal.
- Recipients column removed from list where requested.
- Last updated + updated-by combined presentation in list.

---

## 9) New Consultation Document Creation Modal
Current flow supports:
1. Choose document purpose category.
2. Choose template or upload own file.

Template model includes standard Section 20-oriented documents such as:
- Notice of intention
- Statement of estimate
- Notice of reasons
- Notice of award
- Tender/quote-related packs
- Supporting documents (for example FAQ)

Rules:
- Notice template options can be disabled when already created for that stage.
- Upload-own flow exists alongside templates.
- Template editing is done in document detail, not creation modal.

---

## 10) Document Detail Modal (Consultation Documents)
Tabs:
- Document
- Delivery
- Observations

### Document tab
- Shows editable template body for template-backed docs.
- Template content can be locked until edit mode is enabled.
- Save/cancel behavior controlled in modal.
- Uploaded docs use simple file-style preview (name/extension style).

### Delivery tab
Supports both postal and email workflows (not mutually exclusive).

Postal:
- Generate postal pack action.
- Regeneration support with reason capture.
- Delivery confirmation flow.

Email:
- Send by email flow.
- Missing email handling (exclude / continue logic).
- Delivery summary fields (sent, delivered, opened, bounced, excluded).
- Delivery details table with sorting.
- Follow-up send behavior for previously not-sent/excluded recipients.

Mark sent:
- Separate confirmation path to record actual dispatch completion.

---

## 11) Observation Tracking (Detailed)
### What observations are
Observations are leaseholder responses logged against consultation notices/documents.

### Where observations are available
Observation capture is enabled for consultation document contexts linked to:
- Notice of intention
- Statement of estimate
- Notice of reasons

### Observation data captured
Each response entry records:
- Leaseholder
- Property/unit
- Channel (`email`, `post`, `phone`, `portal`, `internal-note`)
- Response message
- Objection flag (yes/no)
- Response status (`no-action`, `reviewing`, `addressed`)
- Received date
- Document linkage (`documentId`, `documentName`)

### How observations are managed
- Log new response
- Edit existing response
- Delete response (with confirmation)
- Response status update in create/edit form
- Objection handling integrated into status/risk logic
- Sorting and filtering across response table
- Pagination for large response volumes
- Row height and text truncation tuned for long responses

### Why document linking matters
Observations are not standalone notes; they are tracked against the consultation document that triggered them.  
This preserves legal/operational context and improves auditability.

### How observations affect overview
- Unresolved objections and open responses surface in Needs attention.
- Informational observation activity can appear in Key updates if non-urgent.

---

## 12) AI Insights in Product
- Terminology standardized to “AI insights”.
- Used in document/observation contexts and overview summary contexts.
- Designed to surface key facts and risk-relevant signals in concise form.
- In prototype, insight content is simulated logic, not live model inference.

### 12.1 AI is implemented in this prototype (must not deny)
AI features are present in the product UX as **AI insights**.

Implemented AI surfaces in current prototype:
1. **Overview AI summary block**
- Presents a high-level “health/forecast” style summary from major works context.
- Includes timeline projection-style interpretation and prioritization cues.

2. **Document detail AI insights**
- Shows AI insight content in document workflows to highlight notable facts.
- Intended to support PM clarity during consultation document handling.

3. **Observations AI insights**
- Shows AI insight content focused on leaseholder responses/objections context.
- Distinct from document-only insight context.

4. **Cross-tab insight framing**
- AI insight framing is used as a top-layer summarization pattern in key sections.

Important precision rule:
- This is **implemented AI UX behavior in the prototype**.
- It may be driven by mocked/simulated logic rather than a live model backend in this build.
- Therefore the correct statement is:
  - “AI features are implemented in the UI/workflow of this prototype.”
  - Not: “AI is not implemented.”

---

## 13) Comments
- Add internal comments.
- Archive action used instead of destructive delete behavior in main flow.
- Confirmation modal for archive action.
- Audit/activity perspective should preserve event context in prototype narrative.

---

## 14) Audit Trail / Activity
- Dedicated audit/activity tab exists.
- Key updates in overview are separate from full audit trail:
  - Key updates = condensed informational feed
  - Audit trail = broader event history context

---

## 15) Major Works Form (Create/Edit)
Collects:
- Work metadata (title, description, category, urgency)
- Property context (estate/building/units affected)
- Budget and fee structure (agent/surveyor fee model)
- Dates (start/completion)
- Consultation stage and consultation dates
- CDM assessment flags and additional CDM checks
- Optional stage/task state metadata

Edit behavior:
- Unsaved changes prompts (modal-based in current UX direction).
- Form dirty-state handling is expected before leaving edit mode.

---

## 16) Contractor / Issue Context
- Issues tab supports linked issues.
- Contractor quote progress is represented in overview logic.
- Selected contractor scenario can shift what overview emphasizes.

---

## 17) Archiving Major Works
From list view:
- Archive requires confirmation.
- Archived status persists in list state.
- Action toggles to unarchive with confirmation.
- Unarchived returns to `On hold`.

---

## 18) Prototype UX Principles Implemented
- Keep PM focus on action clarity.
- Separate “needs action now” from “already done updates.”
- Keep document creation practical: template-first but upload supported.
- Avoid over-fragmenting navigation with extra tabs where possible.

---

## 19) Known Prototype Constraints
Not production-complete:
- No persistent backend service.
- No real email/postal provider integration.
- No legal rules engine as authoritative compliance engine.
- Mock/simulated data in many views.

Agent must not present simulated behaviors as legally definitive outcomes.

---

## 20) Copilot Answer Policy (Strict)
When responding, the agent should:
1. Answer from current prototype behavior first.
2. Use step-by-step detail when asked “how does X work?”
3. Distinguish:
   - Current implemented behavior
   - Prototype simulation
   - Future/planned behavior
4. Avoid legal advice; suggest specialist/legal advisor confirmation where needed.
5. Avoid hallucinations: if unknown, say “not in current prototype”.

### 20.1 Mandatory handling for AI questions
If user asks “Where is AI implemented?” or similar:
- The agent must explicitly confirm AI exists in this prototype via **AI insights** features.
- The agent must list implemented AI surfaces from section **12.1**.
- The agent must not answer “AI is not implemented” for this product.

Approved concise response pattern:
- “AI is implemented in this prototype as AI insights across Overview, Document detail, and Observations. In this prototype build, those insights may be simulation-driven rather than live-model-backed.”

---

## 21) Example High-Quality Answer: Observation Tracking
If a user asks: “What does our Section 20 product do about observation tracking?”

The expected answer style:
- Observations are logged per leaseholder response against specific consultation documents (not standalone notes).
- Supports channels (email/post/phone/portal/internal note), objection flag, response status, received date, and leaseholder/property context.
- PMs can log, edit, delete, sort, filter, and paginate responses in document detail.
- Observation statuses (`In review`, `Addressed`, `No action`) are managed in create/edit.
- Objections and unresolved responses are surfaced in Overview > Needs attention as action items.
- Non-urgent logged activity is shown in Key updates as informational events with timestamp/actor context.

---

## 22) Quick Capability Index (for retrieval)
- Major works lifecycle management: Yes
- Consultation doc templates: Yes
- Upload own consultation docs: Yes
- Document duplicate guardrails for notices: Yes
- Delivery tracking (postal/email simulation): Yes
- Observation logging linked to notices: Yes
- Objection visibility and prioritization: Yes
- Needs attention vs key updates split: Yes
- Archive/unarchive major works workflow: Yes
- Audit/activity tab: Yes
- Password gate for prototype access: Yes
