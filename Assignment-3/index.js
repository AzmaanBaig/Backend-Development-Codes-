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

        const additionalData = `
Experience: 1 Year
City: Kolkata`;

        fs.appendFile(studentFile, additionalData, (err) => {
            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("\nData updated successfully");


            fs.readFile(studentFile, "utf8", (err, data) => {
                if (err) {
                    console.log("Error reading updated file:", err);
                    return;
                }

                console.log("\nUpdated Student Information:");
                console.log(data);


                fs.rename(studentFile, renamedFile, (err) => {
                    if (err) {
                        console.log("Error renaming file:", err);
                        return;
                    }

                    console.log(
                        "File renamed successfully to studentDetails.txt"
                    );

                    // Task 5: Remove File
                    fs.unlink(renamedFile, (err) => {
                        if (err) {
                            console.log("Error deleting file:", err);
                            return;
                        }

                        console.log("File deleted successfully");
                        console.log(
                            "All file operations completed successfully."
                        );
                    });
                });
            });
        });
    });
});