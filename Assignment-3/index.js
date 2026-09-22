const fs = require("fs");

const studentFile = "student.txt";
const renamedFile = "studentDetails.txt";


const studentData = `Name: Azmaan Baig
Course: Full Stack Development
Technology: Node.js`;

fs.writeFile(studentFile, studentData, (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully");


    fs.readFile(studentFile, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("\nStudent Information:");
        console.log(data);

        // Task 3: Update Student Information
        const additionalData = `
Experience: 1 Year
City: Kolkata`;

        fs.appendFile(studentFile, additionalData, (err) => {
            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("\nData updated successfully");

            // Task 4: Rename File
            fs.rename(studentFile, renamedFile, (err) => {
                if (err) {
                    console.log("Error renaming file:", err);
                    return;
                }

                console.log("File renamed successfully to studentDetails.txt");


                fs.unlink(renamedFile, (err) => {
                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }

                    console.log("File deleted successfully");
                    console.log("All file operations completed successfully.");
                });
            });
        });
    });
});