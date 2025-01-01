import { readPasswordsFile } from "./utils/fileReader.js";
import { parseLine, PasswordEntry } from "./utils/parser.js";
import { isPasswordValid } from "./utils/validator.js";

// Path to the password file
const filePath = "./passwords.txt";

// Read the file and get the lines
const lines = readPasswordsFile(filePath);

// Parse the lines into password entries
const entries: PasswordEntry[] = lines.map(parseLine);

// Filter out valid passwords
const validPasswords = entries.filter(isPasswordValid);

// Log the number of valid passwords
console.log(`Number of valid passwords: ${validPasswords.length}`);
