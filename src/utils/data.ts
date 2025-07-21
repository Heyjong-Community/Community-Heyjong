import { listJongers } from './jongers';

export const managerKomunitas = listJongers.find((j) => j.division === 'Manager');
export const sekretaris = listJongers.filter((j) => j.division === 'Sekretaris');
export const bendahara = listJongers.find((j) => j.division === 'Bendahara');
export const kadivCreative = listJongers.filter((j) => j.division === 'Creative' && j.status === 'Kadiv');
export const staffCreative = listJongers.filter((j) => j.division === 'Creative' && j.status === 'Staff');
export const kadivEvent = listJongers.filter((j) => j.division === 'Event' && j.status === 'Kadiv');
export const staffEvent = listJongers.filter((j) => j.division === 'Event' && j.status === 'Staff');
export const kadivComdev = listJongers.filter((j) => j.division === 'Comdev' && j.status === 'Kadiv');
export const staffComdev = listJongers.filter((j) => j.division === 'Comdev' && j.status === 'Staff');
export const member = listJongers.filter((j) => j.status === 'Member');

export const orderedCreative = [...kadivCreative, ...staffCreative];
export const orderedEvent = [...kadivEvent, ...staffEvent];
export const orderedComdev = [...kadivComdev, ...staffComdev];
