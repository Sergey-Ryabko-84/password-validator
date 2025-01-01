export type PasswordEntry = {
  character: string;
  min: number;
  max: number;
  password: string;
};

export const parseLine = (line: string): PasswordEntry => {
  const [policy, password] = line.split(": ");
  const [character, range] = policy.split(" ");
  const [min, max] = range.split("-").map(Number);

  return { character, min, max, password: password.trim() };
};
