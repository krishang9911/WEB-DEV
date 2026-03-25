// Async Await Practice Code

// Simulating API call (returns a promise)
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "John", age: 22 });
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}

// Another async function
function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Post 1", "Post 2", "Post 3"]);
        }, 1000);
    });
}

// Main async function
async function getUserDetails() {
    try {
        console.log("Fetching user data...");

        const user = await fetchUserData(1);
        console.log("User:", user);

        console.log("Fetching posts...");
        const posts = await fetchPosts();
        console.log("Posts:", posts);

        console.log("All data fetched successfully!");
    } catch (error) {
        console.log("Error:", error);
    }
}

// Call function
getUserDetails();