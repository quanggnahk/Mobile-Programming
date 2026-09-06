// ==========================================
// A. Basics with Promise (Câu 1 - 10)
// ==========================================

// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
const p1 = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});

p1.then((res) => console.log(`[Q1 Result]: ${res}`));


// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.
function getTenAfterOneSecond(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

getTenAfterOneSecond().then((res) => console.log(`[Q2 Result]: ${res}`));


// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
function throwErrorAfterOneSecond(): Promise<never> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}

throwErrorAfterOneSecond().catch((err) => console.log(`[Q3 Result]: Caught Error - ${err.message}`));


// 4. Use .then() and .catch() to handle a Promise that returns a random number.
const randomPromise = new Promise<number>((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
        resolve(randomNum);
    } else {
        reject(`Number ${randomNum.toFixed(2)} is too small!`);
    }
});

randomPromise
    .then((res) => console.log(`[Q4 Result]: Success with ${res.toFixed(2)}`))
    .catch((err) => console.log(`[Q4 Result]: Rejected - ${err}`));


// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.
function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done in ${time}ms`);
        }, time);
    });
}

simulateTask(500).then((res) => console.log(`[Q5 Result]: ${res}`));


// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
Promise.all([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(1500)
]).then((results) => {
    console.log(`[Q6 Result - Promise.all]:`, results);
});


// 7. Use Promise.race() to return whichever Promise resolves first.
Promise.race([
    simulateTask(1200),
    simulateTask(800), // Thằng này sẽ thắng vì thời gian ngắn nhất
    simulateTask(2000)
]).then((result) => {
    console.log(`[Q7 Result - Promise.race]: The first one is -> ${result}`);
});


// 8. Create a Promise chain: square the number 2, then double it, then add 5.
Promise.resolve(2)
    .then((num) => num * num) // Square: 2 * 2 = 4
    .then((num) => num * 2)   // Double: 4 * 2 = 8
    .then((num) => num + 5)   // Add 5: 8 + 5 = 13
    .then((finalResult) => {
        console.log(`[Q8 Result - Promise Chain]: Final number is ${finalResult}`);
    });


// 9. Write a Promise that reads an array after 1 second and filters even numbers.
const arrayPromise = new Promise<number[]>((resolve) => {
    setTimeout(() => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        resolve(data);
    }, 1000);
});

arrayPromise
    .then((arr) => arr.filter((num) => num % 2 === 0))
    .then((filteredArr) => {
        console.log(`[Q9 Result - Filter Even Numbers]:`, filteredArr);
    });


// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
const taskWithFinally = new Promise<string>((resolve, reject) => {
    const isSuccess = true; // Đổi thành false để test nhánh reject
    setTimeout(() => {
        isSuccess ? resolve("Task Succeeded") : reject("Task Failed");
    }, 1500);
});

taskWithFinally
    .then((res) => console.log(`[Q10 Result]: ${res}`))
    .catch((err) => console.log(`[Q10 Result]: ${err}`))
    .finally(() => {
        console.log(`[Q10 Result - finally()]: Done (This runs no matter what)`);
    });

// ==========================================
// B. Async/Await (Câu 11 - 20)
// ==========================================

// 11. Convert Exercise 1 into async/await.
async function q11_helloAsync(): Promise<void> {
    const message = await new Promise<string>((resolve) => {
        setTimeout(() => resolve("Hello Async"), 2000);
    });
    console.log(`[Q11 Result]: ${message}`);
}

// 12. Write an async function that calls simulateTask(2000) and logs the result.
async function q12_callSimulateTask(): Promise<void> {
    const result = await simulateTask(2000);
    console.log(`[Q12 Result]: ${result}`);
}

// 13. Handle errors using try/catch with async/await.
async function q13_handleErrors(): Promise<void> {
    try {
        const errorPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error("Oops! Something went wrong.")), 1000);
        });
        await errorPromise;
    } catch (error: any) {
        console.log(`[Q13 Result]: Caught an error -> ${error.message}`);
    }
}

// 14. Write an async function that takes a number, waits 1 second, and returns the number * 3.
async function q14_multiplyByThree(num: number): Promise<number> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return num * 3;
}

// 15. Call multiple async functions sequentially using await.
async function q15_callSequentially(): Promise<void> {
    console.log(`[Q15 Result]: Starting sequential tasks...`);
    const task1 = await simulateTask(500);
    console.log(task1);
    const task2 = await simulateTask(500);
    console.log(task2);
}

// 16. Call multiple async functions in parallel using Promise.all().
async function q16_callInParallel(): Promise<void> {
    console.log(`[Q16 Result]: Starting parallel tasks...`);
    const results = await Promise.all([
        simulateTask(600),
        simulateTask(400),
        simulateTask(500)
    ]);
    console.log(results);
}

// 17. Use for await...of to iterate over an array of Promises.
async function q17_forAwaitOf(): Promise<void> {
    console.log(`[Q17 Result]: Iterating with for await...of`);
    const promises = [simulateTask(300), simulateTask(400), simulateTask(200)];
    
    for await (const result of promises) {
        console.log(`- ${result}`);
    }
}

// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).
async function fetchUser(id: number): Promise<{ id: number; name: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { id, name: `User_${id}` };
}

// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
async function q19_fetchUsers(ids: number[]): Promise<void> {
    console.log(`[Q19 Result]: Fetching users for IDs [${ids.join(", ")}]...`);
    // Sử dụng Promise.all để gọi song song nhằm tiết kiệm thời gian
    const users = await Promise.all(ids.map(id => fetchUser(id)));
    console.log(users);
}

// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
async function q20_fetchWithTimeout(apiCall: Promise<any>, timeoutMs: number): Promise<void> {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Request timed out!")), timeoutMs);
    });

    try {
        console.log(`[Q20 Result]: Starting API call with ${timeoutMs}ms timeout...`);
        // Promise.race sẽ trả về kết quả của Promise nào chạy xong trước (hoặc lỗi trước)
        const result = await Promise.race([apiCall, timeoutPromise]);
        console.log(`Success:`, result);
    } catch (error: any) {
        console.log(`Error:`, error.message);
    }
}

// ==========================================
// HÀM CHẠY TUẦN TỰ ĐỂ KIỂM TRA KẾT QUẢ
// ==========================================
async function runAllExercises() {
    console.log("=== BẮT ĐẦU CHẠY PHẦN B ===");
    
    await q11_helloAsync();
    await q12_callSimulateTask();
    await q13_handleErrors();
    
    const q14Res = await q14_multiplyByThree(5);
    console.log(`[Q14 Result]: 5 * 3 = ${q14Res}`);
    
    await q15_callSequentially();
    await q16_callInParallel();
    await q17_forAwaitOf();
    
    const user1 = await fetchUser(101);
    console.log(`[Q18 Result]: Fetched User ->`, user1);
    
    await q19_fetchUsers([1, 2, 3]);
    
    // Test Q20 với hàm fetchUser chạy mất 1s (nhanh hơn timeout 2s) -> Thành công
    await q20_fetchWithTimeout(fetchUser(999), 2000);
    
    // Test Q20 với hàm simulateTask chạy mất 3s (chậm hơn timeout 2s) -> Báo lỗi Timeout
    await q20_fetchWithTimeout(simulateTask(3000), 2000);

    console.log("=== HOÀN TẤT ===");
}

// Kích hoạt chạy toàn bộ
runAllExercises();
// ==========================================
// C. Fetch API & Simulated I/O (Câu 21 - 30)
// ==========================================

// 21. Use fetch to get data from a public API
async function q21_fetchTodo(): Promise<void> {
    console.log("\n[Q21] Fetching single todo...");
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}

// 22. Call the API multiple times and log the results.
async function q22_callMultipleTimes(): Promise<void> {
    console.log("\n[Q22] Calling API multiple times...");
    const urls = [
        'https://jsonplaceholder.typicode.com/todos/1',
        'https://jsonplaceholder.typicode.com/todos/2'
    ];
    for (const url of urls) {
        const res = await fetch(url);
        const data = await res.json();
        console.log(`Fetched ID ${data.id}: ${data.title}`);
    }
}

// 23. Write an async function that fetches a list of todos and filters out those that are not completed.
async function q23_fetchAndFilter(): Promise<void> {
    console.log("\n[Q23] Fetching and filtering completed todos...");
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data: { id: number; title: string; completed: boolean }[] = await response.json();
    
    // Filter out not completed (keep only completed === true)
    const completedTodos = data.filter(todo => todo.completed);
    console.log(`Total completed todos: ${completedTodos.length}. Here are the first 2:`);
    console.log(completedTodos.slice(0, 2)); // Chỉ in 2 cái đầu cho đỡ dài log
}

// 24. Write an async function postData() that sends a POST request to a test API.
async function q24_postData(): Promise<void> {
    console.log("\n[Q24] Sending POST request...");
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'My Custom Post',
            body: 'This is the content of the post',
            userId: 1,
        }),
    });
    const result = await response.json();
    console.log("Post Created:", result);
}

// 25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.
function q25_downloadFile(): Promise<void> {
    console.log("\n[Q25] Starting file download (takes 3 seconds)...");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("File downloaded successfully!");
            resolve();
        }, 3000);
    });
}

// 26. Use async/await with setTimeout to simulate a 5-second wait.
async function q26_wait5Seconds(): Promise<void> {
    console.log("\n[Q26] Waiting for 5 seconds...");
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Finished waiting 5 seconds!");
}

// 27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.
async function q27_fetchWithRetry(url: string, retries: number): Promise<any> {
    console.log(`\n[Q27] Attempting to fetch with ${retries} retries...`);
    for (let i = 1; i <= retries; i++) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            console.log(`Success on attempt ${i}`);
            return await res.json();
        } catch (error: any) {
            console.log(`Attempt ${i} failed: ${error.message}`);
            if (i === retries) {
                console.log("All retries exhausted.");
            }
        }
    }
}

// 28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).
async function q28_batchProcess(): Promise<void> {
    console.log("\n[Q28] Processing 5 tasks at once...");
    const createSimulatedTask = (id: number) => 
        new Promise(resolve => setTimeout(() => resolve(`Task ${id} Done`), 1000));

    const tasks = [1, 2, 3, 4, 5].map(id => createSimulatedTask(id));
    const results = await Promise.all(tasks); // Chạy song song
    console.log("Batch process results:", results);
}

// 29. Write an async function queueProcess() that processes tasks sequentially in a queue.
async function q29_queueProcess(): Promise<void> {
    console.log("\n[Q29] Processing tasks sequentially...");
    const tasks = [1, 2, 3];
    for (const task of tasks) {
        console.log(`Processing task ${task}...`);
        await new Promise(resolve => setTimeout(resolve, 500)); // Đợi task trước xong mới chạy task sau
    }
    console.log("Queue processed completely.");
}

// 30. Use async/await + Promise.allSettled() to handle multiple API calls and display their success/failure status.
async function q30_allSettledExample(): Promise<void> {
    console.log("\n[Q30] Using Promise.allSettled() for mixed success/failure...");
    const apiCalls = [
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(r => r.json()),
        fetch('https://invalid-url-for-testing-failure.com'), // Sẽ gây lỗi
        fetch('https://jsonplaceholder.typicode.com/todos/2').then(r => r.json())
    ];

    const results = await Promise.allSettled(apiCalls);
    
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Task ${index + 1} - SUCCESS: ID ${result.value.id}`);
        } else {
            console.log(`Task ${index + 1} - FAILED: ${result.reason.message || result.reason}`);
        }
    });
}

// ==========================================
// HÀM CHẠY TẤT CẢ (Main Runner)
// ==========================================
async function runPartC() {
    console.log("=== BẮT ĐẦU CHẠY PHẦN C ===");
    
    await q21_fetchTodo();
    await q22_callMultipleTimes();
    await q23_fetchAndFilter();
    await q24_postData();
    await q25_downloadFile();
    await q26_wait5Seconds();
    
    // Test Q27 với 1 URL cố tình sai để xem cơ chế retry hoạt động
    await q27_fetchWithRetry('https://this-domain-does-not-exist.org', 3);
    
    await q28_batchProcess();
    await q29_queueProcess();
    await q30_allSettledExample();

    console.log("\n=== HOÀN TẤT TOÀN BỘ BÀI TẬP ===");
}

runPartC();