// Backend Development Assignment
// Student: Azmaan Baig
// Course: B.Tech CSE
// Subject: Backend Development

function registerCandidate(name, age, email, phone) {
    return new Promise((resolve, reject) => {
        if (name.trim() === "") {
            reject("Name cannot be empty.");
            return;
        }

        if (age < 18 || age > 35) {
            reject("Age must be between 18 and 35.");
            return;
        }

        if (!email.includes("@")) {
            reject("Invalid email address.");
            return;
        }

        if (phone.length !== 10 || isNaN(phone)) {
            reject("Phone number must contain exactly 10 digits.");
            return;
        }

        resolve("Candidate registered successfully.");
    });
}

function codingScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let total = 0;

            for (let i = 0; i < marks.length; i++) {
                total += marks[i];
            }

            let average = total / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject(
                    "Sorry, you have not cleared the Coding Assessment."
                );
            }
        }, 2000);
    });
}

function technicalInterviewCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let total = 0;

            for (let i = 0; i < marks.length; i++) {
                total += marks[i];
            }

            let average = total / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject(
                    "Sorry, you have not cleared the Technical Interview."
                );
            }
        }, 2000);
    });
}

function finalSelectionCheck(
    codingAverage,
    technicalAverage,
    cutoff
) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let finalAverage =
                (codingAverage + technicalAverage) / 2;

            if (finalAverage >= cutoff) {
                resolve(finalAverage);
            } else {
                reject(
                    "Sorry, you have not cleared the final selection cutoff."
                );
            }
        }, 2000);
    });
}

registerCandidate(
        "Azmaan Baig",
        18,
        "azmaan@gmail.com",
        "9876543210"
    )
    .then((message) => {
        console.log(message);

        return codingScoreCheck(
            [80, 75, 85],
            70
        );
    })

.then((codingAverage) => {
    console.log(
        "Coding Assessment Cleared."
    );

    console.log(
        "Coding Average:",
        codingAverage
    );

    return technicalInterviewCheck(
        [78, 82, 90],
        75
    ).then((technicalAverage) => ({
        codingAverage,
        technicalAverage
    }));
})

.then(
    ({
        codingAverage,
        technicalAverage
    }) => {
        console.log(
            "Technical Interview Cleared."
        );

        console.log(
            "Technical Average:",
            technicalAverage
        );

        return finalSelectionCheck(
            codingAverage,
            technicalAverage,
            80
        );
    }
)

.then((finalAverage) => {
    console.log(
        "Final Selection Cleared."
    );

    console.log(
        "Final Average:",
        finalAverage
    );
})

.catch((error) => {
    console.log(error);
});