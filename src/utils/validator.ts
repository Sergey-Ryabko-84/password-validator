import { PasswordEntry } from "./parser";

export const isPasswordValid = (entry: PasswordEntry): boolean => {
  const count = entry.password.split("").filter((ch) => ch === entry.character).length;
  return count >= entry.min && count <= entry.max;
};
