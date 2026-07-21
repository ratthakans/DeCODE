/**
 * Real-world identity and contact facts for the institute.
 *
 * Everything here is intentionally EMPTY until verified. Nothing in this file
 * may be filled with placeholder or example values: the footer contact block,
 * the PDPA privacy notice, and the JSON-LD contact fields all read from here,
 * so a guessed value would be published as fact.
 *
 * `isPublishable` gates the surfaces that legally require a named controller —
 * they stay hidden (and /privacy stays 404 + noindex) until the fields are set.
 */
type OrganizationFacts = {
  legalName: string;
  taxId: string;
  address: string;
  email: string;
  privacyEmail: string;
  phone: string;
  lineOa: string;
  privacyUpdated: string;
};

export const ORG: OrganizationFacts = {
  /** Registered company name, e.g. "บริษัท ... จำกัด" */
  legalName: "",
  /** 13-digit Thai tax ID (เลขประจำตัวผู้เสียภาษี) */
  taxId: "",
  /** Registered address shown on invoices and in the privacy notice */
  address: "",
  /** Primary contact address for enquiries */
  email: "",
  /** Address for PDPA data-subject requests — may be the same as `email` */
  privacyEmail: "",
  phone: "",
  /** LINE Official Account id, including the leading @ */
  lineOa: "",
  /** Date the privacy notice last changed, ISO yyyy-mm-dd */
  privacyUpdated: "",
};

/** True once the identity required to publish a lawful privacy notice exists. */
export const isPublishable = Boolean(ORG.legalName && ORG.address && (ORG.privacyEmail || ORG.email));

export const contactEmail = ORG.email || ORG.privacyEmail;
export const privacyContactEmail = ORG.privacyEmail || ORG.email;
