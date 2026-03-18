export type Role = 'SuperAdmin' | 'Admin' | 'Staff' | 'Member';

// Hirarki role: index lebih tinggi = akses lebih luas
export const ROLE_HIERARCHY: Record<Role, number> = {
  Member: 1,
  Staff: 2,
  Admin: 3,
  SuperAdmin: 4,
};

// Definisi route dan minimum role yang dibutuhkan
export const ROUTE_PERMISSIONS: { pattern: string; minRole: Role }[] = [
  { pattern: '/access-user', minRole: 'SuperAdmin' },
  { pattern: '/admin', minRole: 'Admin' },
  { pattern: '/staff', minRole: 'Staff' },
  { pattern: '/dashboard', minRole: 'Member' },
];

export function hasAccess(userRole: Role, minRole: Role): boolean {
  return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[minRole];
}

export function getRequiredRole(pathname: string): Role | null {
  const match = ROUTE_PERMISSIONS.find((r) => pathname.startsWith(r.pattern));
  return match ? match.minRole : null;
}
