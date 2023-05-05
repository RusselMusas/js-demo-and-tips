// Create promise
const myServerResponse = new Promise((resolve, reject) => {
    // Call the server, receive response
    const response = true;

    // Handle
    if(response) {
        resolve("Data received from server!");
    } else {
        reject("Could not fetch data from server!");
    }
});

// Resolved with then
myServerResponse.then(response => {
    console.log(response);
});

// Rejected with catch
myServerResponse.catch(error => {
    console.log(error);
});