import React from 'react';

export interface WorkshopFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactFormState {
  name: string;
  phone: string;
  email: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}