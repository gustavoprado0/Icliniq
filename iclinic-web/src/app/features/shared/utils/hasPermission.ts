import { UserRole } from "../types/role";

export function hasPermission(
  userRole: UserRole,
  allowedRoles: UserRole[]
) {
  return allowedRoles.includes(userRole);
}
