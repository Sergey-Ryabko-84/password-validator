import * as fs from "fs";
import * as path from "path";

export const readPasswordsFile = (filePath: string): string[] => {
  const absolutePath = path.resolve(filePath);
  const data = fs.readFileSync(absolutePath, "utf-8");
  return data.trim().split("\n");
};
