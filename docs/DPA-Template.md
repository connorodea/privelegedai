# Data Processing Agreement

**Parties**

- **Processor:** Privileged AI, Inc. ("Privileged")
- **Controller:** the law firm or corporate legal department executing this Agreement (the "Firm")

---

> **Template notice.** This document is a template prepared for review by counsel on both
> sides. It is not legal advice, and it does not by itself create a binding obligation.
> Privileged and the Firm should negotiate any terms their counsel identifies before
> signature. Section references below are stable and may be cited in negotiation notes.

---

## 1. Definitions

- **1.1 — "User Data"** means any prompt, uploaded document or context, query, system
  instruction, or other content the Firm transmits to the Service, and any token, embedding,
  or output generated from it.
- **1.2 — "Service"** means the Privileged serverless inference platform and its supporting
  gateway, orchestration, and storage infrastructure.
- **1.3 — "Session"** means a single, isolated invocation of the Service, from the Firm's
  request through termination of the compute environment that served it.
- **1.4 — "Model"** means any base model or any customer-specific fine-tune, LoRA adapter, or
  other adaptation deployed for the Firm.
- **1.5 — "Persistent Storage"** means any non-volatile storage medium, including but not
  limited to object stores, block volumes, databases, caches that outlive a Session, logs,
  and backups.
- **1.6 — "Sub-processor"** means any third party engaged by Privileged to process User Data.

## 2. Scope and Roles

- **2.1** Privileged processes User Data solely as a Processor on the Firm's documented
  instructions, to provide the Service. The Firm is the Controller of User Data.
- **2.2** The instructions are limited to: receiving User Data, running inference, returning
  generated output, and operating the security and governance controls in this Agreement.
- **2.3** Privileged will not process User Data for any purpose other than providing the
  Service unless the Firm gives additional written instructions.

## 3. Ephemeral Processing Mandate

- **3.1** Privileged will process all User Data strictly in temporary, volatile memory (RAM).
- **3.2** User Data will at no time be placed in Persistent Storage by Privileged.
- **3.3** Each Session runs in an isolated compute environment. Memory assigned to a Session
  is discarded and rendered unrecoverable at Session termination.

## 4. Absolute Non-Retention Guarantee

- **4.1** Privileged will not write User Data to any persistent or non-volatile storage medium.
- **4.2** On Session termination, Privileged will decommission and wipe all container
  infrastructure, memory volumes, and runtime state associated with that Session.
- **4.3** Privileged retains no copy, snapshot, or reconstruction of User Data after Session
  termination, and will certify compliance with this clause in writing on the Firm's request.

## 5. No AI Training Exclusivity

- **5.1** Privileged will not use User Data — including prompts, uploaded context, and
  generated output — to train, fine-tune, evaluate, or otherwise develop any model, whether
  public or private, for Privileged or any third party.
- **5.2** Privileged will not inspect, read, or review User Data except as strictly necessary
  to provide the Service or to meet a legal obligation, and any such access is logged.
- **5.3** Privileged will not distribute, sell, license, or otherwise exploit User Data or
  output derived from it.

## 6. Encryption

- **6.1 — In transit:** Privileged will encrypt all User Data in transit using TLS 1.3 or a
  successor version. Legacy protocols will not be used.
- **6.2 — At rest:** to the extent any configuration, credential, or Model data must be
  stored, Privileged will encrypt it using AES-256.
- **6.3 — Customer-managed keys:** the Firm controls the cryptographic keys for such stored
  data through a customer-managed key (CMK) facility. Privileged does not hold the keys and
  cannot decrypt the data without the Firm's key release.

## 7. Model Isolation

- **7.1** The Firm's custom Models and LoRA adapters are injected into temporary
  shared-memory volumes scoped to the Firm's Session.
- **7.2** Model weights and adapters are isolated per Firm; no Model, adapter, or weight
  belonging to one Firm is exposed to, mounted in, or readable by another Firm's Session.
- **7.3** Privileged will maintain and test controls preventing cross-client leakage of
  Models, adapters, and User Data, and will evidence those controls on request.

## 8. Static-IP Egress

- **8.1** All outbound traffic from the Service that may transit User Data will egress through
  a fixed, high-availability static-IP gateway.
- **8.2** Privileged will provide the Firm with the egress IP ranges and keep them current, to
  permit the Firm to firewall-whitelist them.
- **8.3** Privileged will notify the Firm before any change to the egress IP ranges.

## 9. Governance and Sub-processors

- **9.1** The Firm may audit Privileged's compliance with this Agreement, including by
  questionnaire, documentation review, or a mutually agreed assessment, no more than once per
  twelve months except following a confirmed incident.
- **9.2** Privileged will notify the Firm of any personal data or confidentiality breach
  affecting User Data without undue delay and no later than 72 hours after discovery.
- **9.3** Privileged will maintain a list of Sub-processors and make it available to the Firm.
  Privileged will give the Firm at least 14 days' prior notice before engaging a new
  Sub-processor that may process User Data, and the Firm may object on reasonable grounds.
- **9.4** Any Sub-processor is bound by written terms no less protective than this Agreement,
  including the retention, training, and encryption obligations in Sections 3 through 6.

## 10. Term and Termination

- **10.1** This Agreement takes effect on the date of the last signature below and continues
  until the underlying service agreement terminates.
- **10.2** On termination, Sections 3 through 6 and this Section 10 survive, and Privileged
  will certify completion of the wipe described in Section 4.
- **10.3** Either party may terminate this Agreement immediately on the other's material
  breach that is not cured within 30 days of written notice.

---

## Signatures

**Privileged AI, Inc.**

Signature: ____________________________

Name: ____________________________

Title: ____________________________

Date: ____________________________

---

**The Firm**

Signature: ____________________________

Name: ____________________________

Title: ____________________________

Date: ____________________________
