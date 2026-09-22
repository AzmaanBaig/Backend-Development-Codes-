# Student File Management Assignment

## Student Information

**Name:** Azmaan Baig
**Course:** Full Stack Development
**Technology:** Node.js

---

## Assignment Overview

This assignment demonstrates basic file management operations in Node.js using the built-in `fs` (File System) module.

The program performs the following operations:

1. Creates a student information file using `fs.writeFile()`.
2. Reads the file using `fs.readFile()`.
3. Adds additional information using `fs.appendFile()`.
4. Renames the file using `fs.rename()`.
5. Deletes the file using `fs.unlink()`.

Error handling has been included for each file operation.

---

## Project Structure

```text
StudentFileAssignment/
│
├── index.js
├── student.txt
├── package.json
└── README.md
```

---

## Tasks Completed

### Task 1: Create Student Information File

The program uses `fs.writeFile()` to create `student.txt` and store the following information:

```text
Name: Azmaan Baig
Course: Full Stack Development
Technology: Node.js
```

**Expected Output:**

```text
File created successfully
```

---

### Task 2: Read Student Information

The program uses `fs.readFile()` to read the complete contents of `student.txt`.

**Expected Output:**

```text
Student Information:
Name: Azmaan Baig
Course: Full Stack Development
Technology: Node.js
```

Error handling is included in case the file cannot be read.

---

### Task 3: Update Student Information

The program uses `fs.appendFile()` to add additional information without deleting the existing content.

The following information is added:

```text
Experience: 1 Year
City: Kolkata
```

**Expected Output:**

```text
Data updated successfully
```

---

### Task 4: Manage File Name

The program uses `fs.rename()` to change the file name from:

```text
student.txt
```

to:

```text
studentDetails.txt
```

**Expected Output:**

```text
File renamed successfully to studentDetails.txt
```

---

### Task 5: Remove File

After all other operations are completed, the program uses `fs.unlink()` to delete `studentDetails.txt`.

Error handling is included to handle any deletion errors.

**Expected Output:**

```text
File deleted successfully
All file operations completed successfully.
```

---

## Complete Expected Output

When the program is executed, the terminal should display:

```text
File created successfully

Student Information:
Name: Azmaan Baig
Course: Full Stack Development
Technology: Node.js

Data updated successfully
File renamed successfully to studentDetails.txt
File deleted successfully
All file operations completed successfully.
```

---

## How to Run the Program

### Step 1: Open the Project Folder

Open the project folder in Visual Studio Code.

### Step 2: Open the Terminal

Open the VS Code terminal using:

```text
Terminal → New Terminal
```

### Step 3: Check Node.js Installation

Run:

```bash
node --version
```

If Node.js is installed, its version will be displayed.

### Step 4: Run the Program

Run:

```bash
node index.js
```

Or use the npm script:

```bash
npm start
```

---

## Technologies Used

* Node.js
* JavaScript
* File System (`fs`) module
* VS Code

---

## File System Methods Used

| Method            | Purpose                           |
| ----------------- | --------------------------------- |
| `fs.writeFile()`  | Creates and writes data to a file |
| `fs.readFile()`   | Reads data from a file            |
| `fs.appendFile()` | Adds data to an existing file     |
| `fs.rename()`     | Changes the file name             |
| `fs.unlink()`     | Deletes a file                    |

---

## Error Handling

The program checks for errors after every file operation.

For example:

```javascript
if (err) {
    console.log("Error:", err);
    return;
}
```

This prevents the program from continuing with the next operation when a file operation fails.

---

## Output Screenshots

Add screenshots of the terminal output in this section after running the program.

### Screenshot 1: File Creation and Reading

<img width="495" height="81" alt="Screenshot 2026-09-22 at 3 20 55 PM" src="https://github.com/user-attachments/assets/fe42ac76-b47b-450f-ab47-96fc62acb540" />


### Screenshot 2: File Update

<img width="407" height="141" alt="Screenshot 2026-09-22 at 3 21 13 PM" src="https://github.com/user-attachments/assets/22b062b2-9889-4ef2-b69f-15ff2b82f918" />


### Screenshot 3: File Rename and Delete

<img width="431" height="54" alt="Screenshot 2026-09-22 at 3 21 19 PM" src="https://github.com/user-attachments/assets/7f3650ee-5e3d-45e6-b17a-206e8e1badff" />


---

## Conclusion

This assignment demonstrates how Node.js can be used to perform basic file management operations. The `fs` module provides methods for creating, reading, updating, renaming, and deleting files. The program successfully performs all five required operations with appropriate error handling.
