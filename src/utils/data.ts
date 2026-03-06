import { listJongers } from './jongers';

export const managerKomunitas = listJongers.find((j) => j.division === 'Manager');
export const assitenManagerKomunitas = listJongers.find((j) => j.division === 'Asisten Manager');
export const sekretaris = listJongers.filter((j) => j.division === 'Sekretaris');
export const bendahara = listJongers.filter((j) => j.division?.includes('Bendahara'));
export const kadivSocmedOfficer = listJongers.filter((j) => j.division === 'Socmed Officer' && j.status === 'Kadiv');
export const staffSocmedOfficer = listJongers.filter((j) => j.division === 'Socmed Officer' && j.status === 'Staff');
export const kadivEventOrganizer = listJongers.filter((j) => j.division === 'Event Organizer' && j.status === 'Kadiv');
export const staffEventOrganizer = listJongers.filter((j) => j.division === 'Event Organizer' && j.status === 'Staff');
export const kadivHRD = listJongers.filter((j) => j.division === 'Human Resource Development' && j.status === 'Kadiv');
export const staffHRD = listJongers.filter((j) => j.division === 'Human Resource Development' && j.status === 'Staff');
export const member = listJongers.filter((j) => j.status === 'Member');

export const orderedSocmedOfficer = [...kadivSocmedOfficer, ...staffSocmedOfficer];
export const orderedEventOrganizer = [...kadivEventOrganizer, ...staffEventOrganizer];
export const orderedHRD = [...kadivHRD, ...staffHRD];
