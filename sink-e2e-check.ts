// Sink e2e test file; safe to delete.

export function average(values: number[]): number {
  // Bug on purpose: divides by zero for an empty list.
  return values.reduce((a, b) => a + b, 0) / values.length;
}

export function firstName(user?: { name: string }): string {
  // Bug on purpose: crashes when user is undefined.
  return user!.name.split(" ")[0];
}
