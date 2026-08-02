export type ConceptKind =
  | 'form'
  | 'class'
  | 'operation'
  | 'failure-mode'
  | 'law';

interface BaseConcept {
  id: string;
  name: string;
  definition: string;
}

export interface FormConcept extends BaseConcept {
  kind: 'form';
  distinguishingFeatures: string[];
  applicableConditions?: string[];
}

export interface ClassConcept extends BaseConcept {
  kind: 'class';
  membershipCriteria: string[];
}

export interface OperationConcept extends BaseConcept {
  kind: 'operation';
  inputKinds: string[];
  preconditions?: string[];
  transformation: string;
  expectedOutput: string;
}

export interface FailureModeConcept extends BaseConcept {
  kind: 'failure-mode';
  triggeringConditions: string[];
  observableSignals: string[];
  consequences: string[];
  recoveryOperations?: string[];
}

export interface LawConcept extends BaseConcept {
  kind: 'law';
  statement: string;
  scope: string[];
  conditions?: string[];
  implications: string[];
  violations?: string[];
}

export type Concept =
  | FormConcept
  | ClassConcept
  | OperationConcept
  | FailureModeConcept
  | LawConcept;
