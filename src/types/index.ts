export interface Student {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  studentId: string;
  photo?: string;
  document?: string;
  event: string;
  createdAt: string;
}

export type EventType = 'Trip Day' | 'ID' | 'School ID' | 'Yearbook' | 'Picnic';

export const EVENT_OPTIONS: EventType[] = [
  'Trip Day',
  'ID', 
  'School ID',
  'Yearbook',
  'Picnic'
];