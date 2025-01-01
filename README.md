# Password Validator

This is a simple TypeScript application that validates passwords based on given policies. The application reads password rules and passwords from a text file, checks them against the rules, and outputs the number of valid passwords.

## Features

- Reads passwords and their validation rules from a file.
- Parses each line into a structured object.
- Validates passwords based on the given rules.
- Outputs the total number of valid passwords.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later)
- [Yarn](https://yarnpkg.com/) or npm
- TypeScript (installed globally or locally in the project)

### Project Structure

The project is organized as follows:

```
password-validator/
├── src/
│   ├── index.ts          # Main entry point
│   ├── utils/
│   │   ├── fileReader.ts # Reads the input file
│   │   ├── parser.ts     # Parses the input lines
│   │   ├── validator.ts  # Validates the passwords
├── passwords.txt         # Input file containing password rules and passwords
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project metadata and dependencies
├── README.md             # Project documentation
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sergey-Ryabko-84/password-validator.git
   cd password-validator
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

### Usage

1. Add a `passwords.txt` file in the root directory with the following format:

   ```
   a 1-5: abcdj
   z 2-4: asfalseiruqwo
   b 3-6: bhhkkbbjjjb
   ```

   Each line contains:

   - A character and its range (e.g., `a 1-5`)
   - A password (e.g., `abcdj`)

2. Run the application:

   ```bash
   yarn start
   ```

3. Output example:

   ```
   Number of valid passwords: 2
   ```
