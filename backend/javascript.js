1. Basic JavaScript/Node.js Questions:
These are the foundation questions you need to answer confidently.

Q1: What is Node.js?

Answer: Node.js is a runtime environment that allows you to run JavaScript on the server side. It is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model, making it lightweight and efficient for building scalable network applications.

Q2: What are the features of Node.js?

Answer: Some important features of Node.js are:

Asynchronous and Event-driven

Non-blocking I/O

Single-threaded model with event looping

Fast execution due to the V8 engine

Scalable and efficient for I/O bound tasks

Q3: What is the difference between require() and import in Node.js?

Answer:

require() is used in CommonJS modules, and it's synchronous.

import is used in ES6 modules, and it can be asynchronous in certain cases. ES6 modules are now supported in recent versions of Node.js.

Q4: Explain the event loop in Node.js.

Answer: The event loop is the mechanism that allows Node.js to perform non-blocking operations by putting them in a queue. It runs on a single thread and performs tasks like I/O operations asynchronously.

Q5: What are callbacks and how do they work in Node.js?

Answer: A callback is a function passed as an argument to another function and is executed once the asynchronous operation completes. It's essential for handling asynchronous operations in Node.js.

2. Advanced Node.js Questions:
Q6: What is the difference between process.nextTick(), setImmediate(), and setTimeout()?

Answer:

process.nextTick() runs a callback on the next iteration of the event loop, before I/O events.

setImmediate() schedules a callback to execute after the current event loop cycle.

setTimeout() schedules a callback to be executed after a specified delay.

Q7: What is a stream in Node.js?

Answer: Streams in Node.js are objects that allow reading and writing data in a continuous flow. There are four types of streams:

Readable streams

Writable streams

Duplex streams

Transform streams

Q8: What is the purpose of Buffer in Node.js?

Answer: Buffers are used to handle binary data in Node.js. They are used to manipulate data directly in memory, which is crucial for I/O operations.

Q9: Explain the concept of Promises in Node.js.

Answer: A Promise is an object representing the eventual completion or failure of an asynchronous operation. It is used to handle asynchronous operations more effectively than callbacks and avoid callback hell.

3. Coding Questions:
Here are some coding problems with solutions.

Q10: Write a Node.js function to read a file and print its contents to the console.

Solution:

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
  }
});

Q11: Write a function to calculate the factorial of a number using recursion.

Solution:

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120


Q12: Write a function to reverse a string in Node.js.

Solution:

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"

Q13: Implement a simple HTTP server using Node.js.

Solution:

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});


Q14: Write a Node.js function that returns the sum of all even numbers in an array.

Solution:

function sumOfEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12

4. Node.js Frameworks and Libraries:
Q15: What is Express.js and how is it used in Node.js?

Answer: Express.js is a minimal and flexible Node.js web application framework. It provides a robust set of features for building web and mobile applications, such as routing, middleware, and templating.

Q16: What is middleware in Express.js?

Answer: Middleware functions are functions that have access to the request, response, and next function in the application's request-response cycle. Middleware can modify the request and response objects, or end the request-response cycle.

Q17: How do you handle errors in Express.js?

Answer: Errors in Express.js can be handled using middleware. You can use an error-handling middleware function with four arguments: err, req, res, next. Example:


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


5. Database and Node.js:
Q18: How do you interact with a database in Node.js?

Answer: In Node.js, you can interact with databases using libraries like:

mongoose for MongoDB

pg for PostgreSQL

mysql for MySQL

sequelize for ORM-based interactions

Q19: How do you perform CRUD operations in MongoDB using Mongoose?

Answer:

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

// Create
const newUser = new User({ name: 'John', age: 30 });
newUser.save();

// Read
User.find({ name: 'John' }).then(users => console.log(users));

// Update
User.updateOne({ name: 'John' }, { $set: { age: 31 } });

// Delete
User.deleteOne({ name: 'John' });


6. Testing in Node.js:
Q20: How do you test a Node.js application?

Answer: In Node.js, you can use testing frameworks like:

Mocha for structuring the test suite

Chai for assertions

Jest for a complete testing solution

const assert = require('chai').assert;
const sum = (a, b) => a + b;

describe('Sum function', () => {
  it('should return the sum of two numbers', () => {
    assert.equal(sum(1, 2), 3);
  });
});

7. Other Advanced Topics:
Q21: How does Node.js handle scalability?

Answer: Node.js handles scalability via clustering. The cluster module allows you to create child processes (workers) that can run on different CPU cores to handle multiple requests concurrently.

Q22: What are microservices and how can Node.js be used in building microservices?

Answer: Microservices are a design approach where an application is split into smaller, independent services. Node.js, due to its lightweight and asynchronous nature, is well-suited to building microservices as it can handle numerous requests efficiently.


1. Find the Largest Number in an Array
Question: Write a function to find the largest number in an array.

Solution:

function findLargestNumber(arr) {
  return Math.max(...arr);
}

console.log(findLargestNumber([1, 4, 7, 9, 3])); // Output: 9


2. Palindrome Check
Question: Write a function to check if a given string is a palindrome.

Solution:

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal, Panama')); // Output: true
console.log(isPalindrome('hello')); // Output: false


3. Flatten a Nested Array
Question: Write a function to flatten a nested array.

Solution:

function flattenArray(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

console.log(flattenArray([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]


4. Remove Duplicates from an Array
Question: Write a function to remove duplicates from an array.

Solution:

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


5. Sum of Digits in a Number
Question: Write a function to calculate the sum of digits of a given number.

Solution:

function sumOfDigits(num) {
  return num.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}

console.log(sumOfDigits(1234)); // Output: 10


6. Fibonacci Sequence (Iterative)
Question: Write a function to generate the Fibonacci sequence up to the nth term.

Solution:

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


7. Find Factorial of a Number (Iterative)
Question: Write a function to find the factorial of a number iteratively.

Solution:

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // Output: 120


8. Count Occurrences of an Element in an Array
Question: Write a function to count the occurrences of a specific element in an array.

Solution:

function countOccurrences(arr, element) {
  return arr.filter(item => item === element).length;
}

console.log(countOccurrences([1, 2, 3, 1, 1, 4], 1)); // Output: 3


9. Find the Missing Number in an Array (1 to n)
Question: You are given an array of integers from 1 to n with one number missing. Write a function to find the missing number.

Solution:

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((acc, num) => acc + num, 0);
  return totalSum - arrSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3


10. Debounce Function (Implementation)
Question: Implement a debounce function in Node.js.

Solution:

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

const debouncedFunction = debounce(() => console.log('Function called!'), 1000);

// The following will only log once after 1 second.
debouncedFunction();
debouncedFunction();
debouncedFunction();


11. Create a Simple HTTP Request with Axios
Question: Write a function to make an HTTP GET request using Axios and log the response.

Solution:

const axios = require('axios');

async function makeRequest() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
  } catch (error) {
    console.error('Error making request:', error);
  }
}

makeRequest();


12. Find Common Elements in Two Arrays
Question: Write a function to find common elements in two arrays.

Solution:

function findCommonElements(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // Output: [2, 3]


13. Deep Clone an Object
Question: Write a function to deep clone an object (i.e., clone nested objects).

Solution:

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
clone.b.c = 3;

console.log(original); // Output: { a: 1, b: { c: 2 } }
console.log(clone); // Output: { a: 1, b: { c: 3 } }


14. Check If a Number Is Prime
Question: Write a function to check if a number is prime.

Solution:

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false


15. Sum of Array Using Reduce
Question: Write a function to calculate the sum of an array using the reduce method.

Solution:

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


1. Implement a Simple Caching System
Question: Write a simple in-memory cache system that can store key-value pairs, get values by key, and clear the cache.

Solution:

class Cache {
  constructor() {
    this.cache = {};
  }

  set(key, value) {
    this.cache[key] = value;
  }

  get(key) {
    return this.cache[key] || null;
  }

  clear() {
    this.cache = {};
  }
}

const cache = new Cache();
cache.set('user', { name: 'John', age: 30 });
console.log(cache.get('user')); // Output: { name: 'John', age: 30 }
cache.clear();
console.log(cache.get('user')); // Output: null


2. Throttling Function (Throttle)
Question: Implement a throttle function that only allows a function to execute once every n milliseconds, regardless of how frequently the user calls it.

Solution:

function throttle(func, delay) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      func(...args);
      lastTime = now;
    }
  };
}

const logMessage = throttle(() => console.log('Message logged'), 1000);

setInterval(logMessage, 200); // Will log once every 1000ms


3. Merge Two Sorted Arrays
Question: Write a function to merge two sorted arrays into one sorted array.

Solution:

function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Append remaining elements from both arrays
  return result.concat(arr1.slice(i), arr2.slice(j));
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]


4. Find All Anagrams in a String
Question: Given a string and a list of words, write a function to return all the words that are anagrams of each other.

Solution:

function findAnagrams(str, words) {
  const sortStr = (s) => s.split('').sort().join('');
  const result = [];

  const sortedStr = sortStr(str);
  for (let word of words) {
    if (sortStr(word) === sortedStr) {
      result.push(word);
    }
  }
  
  return result;
}

console.log(findAnagrams('listen', ['enlist', 'google', 'inlets', 'banana'])); // Output: ['enlist', 'inlets']


5. Group Anagrams from a List of Strings
Question: Given a list of strings, group the anagrams together.

Solution:

function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]


6. Find the Kth Largest Element in an Array
Question: Write a function to find the Kth largest element in an array.

Solution:

function findKthLargest(arr, k) {
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5


7. Debounce a Function with Leading Edge Execution
Question: Implement a debounce function that invokes the provided function after a specified delay and executes the function immediately on the leading edge of the call.

Solution:

function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    if (!timeoutId) {
      func(...args);
    }
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, delay);
  };
}

const debouncedFunc = debounce(() => console.log('Function executed!'), 1000);
debouncedFunc();
debouncedFunc();
debouncedFunc(); // Will execute immediately on the first call


8. Find Missing Number in an Array (1 to N)
Question: You are given an array with numbers from 1 to n with one number missing. Write a function to find the missing number.

Solution:
function findMissingNumber(arr) {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((acc, num) => acc + num, 0);
  return totalSum - arrSum;
}

console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3


9. Create a Simple Express.js Server with Routing
Question: Write a simple Express.js server with two routes: / and /about.

Solution:

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


10. Flatten an Object (Deep Flatten)
Question: Write a function to flatten a deeply nested object into a single level object with keys representing the path to the values.

Solution:

function flattenObject(obj, prefix = '') {
  let result = {};
  for (let key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(result, flattenObject(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

const nestedObj = {
  a: 1,
  b: { c: 2, d: { e: 3, f: 4 } },
  g: 5
};

console.log(flattenObject(nestedObj));
// Output: { a: 1, 'b.c': 2, 'b.d.e': 3, 'b.d.f': 4, g: 5 }


11. Find Longest Substring Without Repeating Characters
Question: Write a function to find the length of the longest substring without repeating characters.

Solution:

function lengthOfLongestSubstring(str) {
  let map = new Map();
  let maxLength = 0;
  let left = 0;
  
  for (let right = 0; right < str.length; right++) {
    if (map.has(str[right])) {
      left = Math.max(map.get(str[right]) + 1, left);
    }
    map.set(str[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")


12. Find the Most Frequent Element in an Array
Question: Write a function to find the most frequent element in an array.

Solution:

function mostFrequentElement(arr) {
  const freqMap = {};
  let maxFreq = 0;
  let mostFrequent = null;

  for (let num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;
    if (freqMap[num] > maxFreq) {
      maxFreq = freqMap[num];
      mostFrequent = num;
    }
  }
  return mostFrequent;
}

console.log(mostFrequentElement([1, 3, 2, 1, 4, 1])); // Output: 1


1. How Node.js Handles Asynchronous I/O
Theory Question: Explain how Node.js handles asynchronous I/O operations. Why is this important for building scalable applications?

Answer: Node.js is built on a non-blocking, event-driven model. It uses a single-threaded event loop to handle asynchronous operations, which means that the main thread is free to handle incoming requests while the I/O operations are handled by the underlying system.

Non-blocking I/O: When Node.js performs I/O operations (like reading files, making HTTP requests, or interacting with databases), it doesn't block the execution of other code. Instead, Node.js delegates these tasks to the system, and when the operation is complete, a callback is invoked to handle the result.

Event Loop: The event loop ensures that the application continues to run while waiting for I/O operations to complete. It checks for pending operations and invokes callbacks as they complete.

Callbacks/Promises/async-await: Node.js uses callbacks, Promises, and async/await to handle asynchronous code flow, ensuring that the application doesn't wait for blocking operations to complete and can handle multiple requests concurrently.

This non-blocking approach allows Node.js to build highly scalable applications, especially for real-time applications like chat apps or APIs that handle large volumes of concurrent requests.


2. Implement a Simple Promise with .then() and .catch()
Practical Question: Write a simple implementation of a Promise in Node.js that resolves after 2 seconds and rejects if the input number is negative.

Solution:

function customPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num < 0) {
        reject('Number cannot be negative');
      } else {
        resolve(`Number is: ${num}`);
      }
    }, 2000);
  });
}

// Usage
customPromise(5)
  .then((message) => console.log(message)) // Output: Number is: 5
  .catch((error) => console.log(error));

customPromise(-1)
  .then((message) => console.log(message))
  .catch((error) => console.log(error)); // Output: Number cannot be negative


  3. Debouncing and Throttling
Theory Question: What is the difference between debouncing and throttling in Node.js, and when would you use each?

Answer:

Debouncing: Debouncing is used to limit the number of times a function is called in a given time frame. It delays the function execution until after a specified time period has passed since the last time the function was called.

Use case: Use debouncing when handling events like keypresses or scrolls, where you want to wait for the user to stop typing or scrolling before executing an action (e.g., search suggestions).

Throttling: Throttling ensures that a function is only executed once in a specified time frame, regardless of how many times the event is triggered.

Use case: Use throttling when you want to limit the frequency of an action, like API calls, during continuous scrolling or window resizing.

4. Create a Simple REST API with Express
Practical Question: Create a simple RESTful API using Express where you have GET, POST, and DELETE endpoints for managing a list of users.

Solution:

const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Doe', age: 25 }
];

// GET all users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// POST a new user
app.post('/users', (req, res) => {
  const { name, age } = req.body;
  const newUser = { id: users.length + 1, name, age };
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  res.status(204).send();
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});


5. Handle Large File Uploads in Node.js
Practical Question: Write a Node.js code snippet to handle file uploads using Multer, ensuring large files are properly handled.

Solution:
const express = require('express');
const multer = require('multer');
const app = express();

// Setup Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 10000000 } // Limit file size to 10MB
}).single('file');

// Handle file upload
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).send('Error uploading file');
    }
    res.send('File uploaded successfully');
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});


6. Cluster Module for Load Balancing in Node.js
Theory Question: Explain how you can improve the performance of a Node.js application using the Cluster module.

Answer: The Cluster module in Node.js allows you to create child processes (workers) that share the same server port, enabling Node.js applications to take advantage of multi-core systems. Since Node.js runs on a single thread, the cluster module can fork multiple processes to handle more requests concurrently, improving the performance and scalability of the application.

How it works: The main process (master) forks multiple worker processes. These workers share the same server port, and the load balancer (built into the cluster module) distributes incoming requests among the workers.

Use case: Cluster is useful for CPU-bound operations or applications that need to handle a high volume of concurrent requests, such as high-traffic web applications or APIs.

Example:

const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Worker processes have a server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, world!');
  }).listen(8000);
}


7. Event Emitters and Listeners in Node.js
Theory Question: What is the purpose of Event Emitters in Node.js? Provide an example of how they are used.

Answer: In Node.js, Event Emitters are used to handle asynchronous events. They allow objects to emit events and register listeners for those events. The EventEmitter class is part of the core events module and is used extensively in Node.js for handling events such as HTTP requests, file system changes, or database updates.

EventEmitter provides methods like:

.emit(eventName, ...): To trigger an event.

.on(eventName, listener): To listen for an event.

Example:

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Define a listener
eventEmitter.on('dataReceived', (data) => {
  console.log('Data received:', data);
});

// Emit the 'dataReceived' event
eventEmitter.emit('dataReceived', { name: 'John', age: 30 });


8. Design a Simple Caching Layer in Node.js
Practical Question: Design a simple in-memory cache using Redis in Node.js. Implement set and get methods for storing and retrieving values.

Solution:

const redis = require('redis');
const client = redis.createClient();

// Set a value in Redis
function setCache(key, value, expiration = 60) {
  client.setex(key, expiration, JSON.stringify(value), (err, reply) => {
    if (err) {
      console.error('Error setting cache:', err);
    } else {
      console.log('Cache set successfully:', reply);
    }
  });
}

// Get a value from Redis
function getCache(key, callback) {
  client.get(key, (err, reply) => {
    if (err) {
      console.error('Error getting cache:', err);
    } else {
      callback(reply ? JSON.parse(reply) : null);
    }
  });
}

// Usage example
setCache('user:1', { name: 'John', age: 30 });
getCache('user:1', (data) => {
  console.log('Retrieved from cache:', data);
});



9. Optimizing Performance in Node.js
Theory Question: What are some strategies you can use to optimize the performance of a Node.js application in a production environment?

Answer:

Use Asynchronous Code: Always use asynchronous APIs in Node.js to avoid blocking the event loop.

Cluster Module: Leverage the cluster module to take advantage of multi-core CPUs.

Load Balancing: Use reverse proxies (e.g., Nginx) to distribute traffic evenly across multiple Node.js processes.

Caching: Implement caching (e.g., Redis) to store frequently accessed data and reduce the load on databases.

Minimize I/O Operations: Use tools like Streams to handle large I/O operations efficiently.

Profile and Monitor: Use tools like PM2 and New Relic to monitor and profile the performance of your application.


1. Create a RESTful API with JWT Authentication
Practical Question: Write an Express.js API that uses JWT (JSON Web Token) for authentication. Implement endpoints for login and a protected route that requires a valid JWT token.

Solution:

Install required dependencies:
npm install express jsonwebtoken bcryptjs body-parser

2. Create a simple Express API with JWT authentication:
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const users = []; // In-memory store for simplicity
const secretKey = 'your-secret-key'; // Use a strong secret in production

// Register new user (for simplicity, no database)
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).send('User registered');
});

// Login and generate JWT token
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
  res.json({ token });
});

// Protected route (requires valid JWT token)
app.get('/protected', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(403).send('Token is required');
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token');
    }
    res.json({ message: 'Protected content', user: decoded.username });
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});


2. Create a Simple Pub/Sub System Using EventEmitter
Practical Question: Implement a simple Pub/Sub (Publish/Subscribe) messaging system using Node.js's EventEmitter class.

Solution:
const EventEmitter = require('events');
class PubSub extends EventEmitter {}

const pubsub = new PubSub();

// Subscriber
pubsub.on('message', (message) => {
  console.log('Subscriber received:', message);
});

// Publisher
pubsub.emit('message', 'Hello, this is a test message!');

In this example, the publisher emits the message event, and the subscriber listens for the event and logs the message when it is received.

3. Implement a Basic File System (FS) Module in Node.js
Practical Question: Write a basic file system module that allows users to create, read, update, and delete files using the fs module in Node.js.

Solution:

const fs = require('fs');
const path = require('path');

// Create a file
function createFile(fileName, content) {
  fs.writeFile(path.join(__dirname, fileName), content, (err) => {
    if (err) throw err;
    console.log('File created!');
  });
}

// Read a file
function readFile(fileName) {
  fs.readFile(path.join(__dirname, fileName), 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
  });
}

// Update a file
function updateFile(fileName, content) {
  fs.appendFile(path.join(__dirname, fileName), content, (err) => {
    if (err) throw err;
    console.log('File updated!');
  });
}

// Delete a file
function deleteFile(fileName) {
  fs.unlink(path.join(__dirname, fileName), (err) => {
    if (err) throw err;
    console.log('File deleted!');
  });
}

// Example usage
createFile('example.txt', 'Hello, Node.js!');
readFile('example.txt');
updateFile('example.txt', ' Updated content.');
deleteFile('example.txt');


4. Use Streams to Read and Write Files Efficiently
Practical Question: Implement a Node.js script that reads a large file using streams and writes it to another file. This is to demonstrate the efficiency of streams.

Solution:

const fs = require('fs');

// Read file using stream
const readStream = fs.createReadStream('largeFile.txt', 'utf8');
const writeStream = fs.createWriteStream('copyOfLargeFile.txt');

// Pipe the read stream to the write stream
readStream.pipe(writeStream);

readStream.on('data', (chunk) => {
  console.log('Reading chunk:', chunk);
});

readStream.on('end', () => {
  console.log('File read complete');
});

writeStream.on('finish', () => {
  console.log('File write complete');
});
Streams are very efficient for handling large files as they allow processing data chunk by chunk, avoiding loading the entire file into memory.


5. Implement a Rate Limiting Middleware in Express
Practical Question: Implement a rate-limiting middleware in an Express.js app to prevent clients from making too many requests in a short period.

Solution:

const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

// Set up rate-limiting rule
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again after a minute.'
});

// Apply the rate-limiting middleware to all requests
app.use(limiter);

// Example route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
This middleware limits the number of requests a user can make in a certain period, helping to protect the application from abuse or overloading.

6. Handling Errors in Node.js (with try-catch and Promises)
Theory Question: Explain how you handle errors in Node.js applications, specifically with Promises and async/await.

Answer:

Promises: Errors in Promises are usually handled using .catch() to catch the error. If an error is thrown inside a Promise, it will be caught by .catch().

Example:
new Promise((resolve, reject) => {
  throw new Error('Something went wrong');
}).catch((err) => {
  console.error('Error caught:', err.message);
});


Async/Await: With async/await, you can use try-catch blocks to handle errors more elegantly. try is used to execute the async code, and catch is used to handle any errors that occur.

Example:

async function fetchData() {
  try {
    let data = await someAsyncFunction();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
}
In both cases, it's important to handle errors properly to ensure that your application does not crash unexpectedly.

7. Design a Microservices System with Node.js
Theory Question: Explain how you would design a microservices architecture using Node.js. Discuss the main components and how they interact.

Answer: Microservices architecture involves breaking a large monolithic application into smaller, independently deployable services. Each service focuses on a specific business function and can be developed, deployed, and scaled independently.

Components:

API Gateway: An entry point for all client requests, routing them to the appropriate service. It can also handle load balancing, authentication, and rate limiting.

Microservices: Individual Node.js applications that perform specific tasks (e.g., authentication, user management, order processing, etc.). They can communicate with each other via RESTful APIs or messaging queues.

Database: Each microservice typically has its own database to ensure decoupling. For example, you might use MongoDB for user services and MySQL for order services.

Service Discovery: A mechanism for services to discover and communicate with each other. Tools like Consul or Eureka can be used for service discovery.

Message Broker: For asynchronous communication between services, you might use a message broker like RabbitMQ or Kafka.

Example architecture:

User Service: Handles user authentication and profile data.

Order Service: Manages product orders.

API Gateway: Routes requests to either the User Service or Order Service based on the endpoint.

8. Handle Session Management in Node.js (Express)
Practical Question: Implement session management in an Express.js app using express-session.

Solution:
npm install express express-session

const express = require('express');
const session = require('express-session');
const app = express();

// Session middleware setup
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure: true for HTTPS
}));

// Set session data
app.get('/login', (req, res) => {
  req.session.user = 'JohnDoe';
  res.send('User logged in');
});

// Get session data
app.get('/profile', (req, res) => {
  if (req.session.user) {
    res.send(`Hello, ${req.session.user}`);
  } else {
    res.send('No user logged in');
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});


1. Node.js Specific Questions
You will definitely be asked questions related to Node.js since that is the core of the role. These will likely cover:

Asynchronous programming (callbacks, Promises, async/await)

Event-driven architecture and EventEmitters

Streams and Buffer handling

Modules (CommonJS and ES6 imports/exports)

File System (fs) operations

Express.js framework usage and middleware

Authentication & Authorization (JWT, OAuth)

Error handling (try-catch, Promise rejections)

Cluster and performance optimization (load balancing, worker processes)

Testing and debugging (Mocha, Chai, Jest)

Microservices architecture (communication, service discovery, load balancing)


2. JavaScript Questions
Since Node.js is built on JavaScript, you will be expected to have a strong understanding of JavaScript fundamentals. Questions could cover:

ES6+ features like:

Arrow functions, destructuring, template literals

Promises, async/await

let, const, and block-scoped variables

Spread/rest operators

Classes and inheritance in JS

Closures, hoisting, and scoping

Event Loop and how JavaScript handles asynchronous code

Callbacks and how they work in asynchronous programming

Modules and scope (local vs global scope, module.exports)

Prototypal inheritance and this keyword

Example JS Interview Question: Question: Explain how closures work in JavaScript.
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const increment = outer();
increment(); // Output: 1
increment(); // Output: 2

3. MongoDB (NoSQL) Questions
If your role involves working with databases, particularly MongoDB, you might be asked questions on:

MongoDB CRUD operations (Create, Read, Update, Delete)

Aggregation framework (filtering, grouping, sorting)

Indexes and their importance in performance optimization

Schemas and validation with Mongoose (if using Node.js with Mongoose)

Replication and Sharding for scaling

Data modeling (normalization vs denormalization)

Example MongoDB Interview Question: Explain the difference between embedded documents and referencing in MongoDB.
// MongoDB query to find users older than 25 and sort by name
db.users.find({ age: { $gt: 25 } }).sort({ name: 1 })

4. SQL Questions
Depending on the company's stack, you might also be expected to have a good understanding of SQL databases (MySQL, PostgreSQL, etc.). Common SQL-related questions may include:

SQL joins (INNER JOIN, LEFT JOIN, etc.)

Normalization and denormalization of data

Transactions and ACID properties

Writing and optimizing complex SQL queries

Indexes and optimizing query performance

Example SQL Interview Question:
-- SQL query to find the most expensive product from each category
SELECT category_id, MAX(price) AS max_price
FROM products
GROUP BY category_id;


5. React (Frontend) Questions
If the company is looking for a full-stack Node.js developer, you might be asked questions on React.js, as it's a common frontend framework used in modern applications. You may be asked:

React components, props, and state management

Hooks (useState, useEffect, custom hooks)

Context API and Redux for state management

JSX and virtual DOM in React

How to handle routing (React Router) and forms in React

Optimizing React performance (memoization, lazy loading)

Example React Interview Question:
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
Question: Explain the difference between controlled and uncontrolled components in React.

6. General Full-Stack Questions
If you're applying for a full-stack role (Node.js with React, for example), you may get questions on how the frontend and backend interact, RESTful API design, and state management across the application. These questions could include:

How to handle authentication and authorization in a full-stack app

How the backend communicates with the frontend (JSON API, WebSockets, etc.)

How to handle CORS in a full-stack app

How to implement form validation in the backend and frontend

Error handling and logging in a full-stack application

7. DevOps and Deployment Questions
As part of the deployment and maintenance process, questions about CI/CD, Docker, cloud services, and monitoring might also come up. Topics can include:

Setting up a CI/CD pipeline for Node.js applications

Using Docker for containerization

Deploying Node.js applications to cloud platforms like AWS, Azure, or Google Cloud

Load balancing and scaling applications



Example of a Full-Stack Interview Flow
Node.js:

Implement a basic RESTful API.

Work with async/await and explain the event loop.

JavaScript:

Discuss closures, hoisting, and this.

Write a debounce function in JavaScript.

MongoDB:

Write a query to get documents based on a condition.

Discuss how indexing works in MongoDB.

SQL:

Optimize a query for performance.

Explain the differences between SQL joins and subqueries.

React:

Implement a React component with state management using hooks.

Explain the difference between controlled and uncontrolled components.



Node.js Questions (Theory + Practical)
1. Theory: Explain the Event Loop in Node.js.
Answer: The Event Loop is a fundamental concept in Node.js that handles asynchronous code. Node.js operates on a single-threaded event loop, which handles multiple operations concurrently using a non-blocking I/O model. It allows Node.js to perform non-blocking operations despite being single-threaded.

Stages in Event Loop:

Timers: Executes setTimeout() or setInterval().

I/O Callbacks: Handles I/O callbacks like file system operations.

Idle, Prepare: Internal operations of Node.js.

Poll: Retrieves new I/O events.

Check: Executes setImmediate().

Close Callbacks: Handles closed event (e.g., socket closure).

2. Practical: Write a Node.js code to read a file asynchronously.
Solution:
const fs = require('fs');

// Read file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});


JavaScript Questions (Theory + Practical)
1. Theory: What is a closure in JavaScript?
Answer: A closure is a function that remembers its lexical scope, even when the function is executed outside that scope. Closures allow a function to access variables from its outer scope even after the outer function has finished executing.

2. Practical: Write a function to create a closure that maintains a counter.
Solution:

function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2


MongoDB Questions (Theory + Practical)
1. Theory: Explain the difference between Normalization and Denormalization in MongoDB.
Answer:

Normalization: Storing data in separate collections to eliminate redundancy, often done in relational databases. It ensures that data is updated consistently.

Denormalization: Embedding data within documents to optimize read operations, which increases redundancy. This is useful for performance when querying large datasets in MongoDB.

2. Practical: Write a MongoDB query to get all users older than 30, sorted by name.
Solution:

db.users.find({ age: { $gt: 30 } }).sort({ name: 1 });


3. Theory: What are indexes in MongoDB?
Answer: Indexes in MongoDB improve the speed of search queries by allowing MongoDB to quickly locate the required documents. By default, MongoDB creates an index on the _id field. You can create custom indexes on other fields to optimize queries.



SQL Questions (Theory + Practical)
1. Theory: What is the difference between INNER JOIN and LEFT JOIN?
Answer:

INNER JOIN: Returns only the rows that have matching values in both tables.

LEFT JOIN: Returns all the rows from the left table, and the matched rows from the right table. If there’s no match, it returns NULL for the right table’s columns.

2. Practical: Write an SQL query to find the highest-paid employee from each department.
Solution:

SELECT department_id, MAX(salary) AS highest_salary
FROM employees
GROUP BY department_id;

3. Theory: What is a transaction in SQL?
Answer: A transaction is a sequence of one or more SQL operations that are executed as a single unit. A transaction must satisfy the ACID properties (Atomicity, Consistency, Isolation, Durability) to ensure reliable and accurate database operations.

React Questions (Theory + Practical)
1. Theory: What are the differences between controlled and uncontrolled components in React?
Answer:

Controlled Components: Components whose form data is controlled by the state of the React component. The value of the input is controlled by React via useState.

Uncontrolled Components: Components whose form data is controlled by the DOM itself. React doesn't control the value of the form inputs.

2. Practical: Write a simple form with controlled inputs in React.
Solution:

import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
        placeholder="Enter your name" 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;


3. Theory: What is JSX in React?
Answer: JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML elements in JavaScript and place them in the DOM. JSX is then compiled to React.createElement calls that React uses to build the virtual DOM.

Advanced Questions (Full-Stack / System Design)
1. Theory: What is the importance of microservices in a Node.js application?
Answer: Microservices architecture involves breaking down an application into smaller, independent services, each responsible for a specific task. In Node.js, microservices are useful because they allow scaling, decoupling, and independent deployment of services. They also help with fault isolation and enable the use of different technologies in different services.

2. Practical: Implement an API Gateway using Node.js and Express.
Solution:
const express = require('express');
const axios = require('axios');

const app = express();

// Route for user service
app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('http://userservice.com/api/users');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from user service');
  }
});

// Route for order service
app.get('/orders', async (req, res) => {
  try {
    const response = await axios.get('http://orderservice.com/api/orders');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from order service');
  }
});

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});


3. Theory: How do you optimize the performance of a Node.js application?
Answer:

Load balancing: Distribute traffic across multiple servers.

Caching: Use caching strategies (e.g., Redis) to reduce repeated database queries.

Cluster Module: Use the Node.js cluster module to take advantage of multi-core processors.

Async I/O: Make sure I/O operations (like database queries or file reads) are non-blocking.

Memory management: Regularly monitor and optimize memory usage to prevent memory leaks.



Bonus: Full-Stack Scenario Questions
1. Theory: How do you implement JWT Authentication in a full-stack application?
Answer:

Frontend: When a user logs in, send the credentials (username/password) to the backend. Upon successful validation, the backend generates a JWT and sends it to the frontend.

Backend: Use jsonwebtoken to generate a token containing user details. For protected routes, require the client to send the JWT in the Authorization header, which the backend verifies using the secret key.

2. Practical: Create a simple React app that displays data from a Node.js API (using JWT authentication).
Solution (React + Node.js):

Frontend (React):
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:5000/protected', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        setData(response.data);
      }).catch((err) => {
        console.error(err);
      });
    }
  }, [token]);

  return (
    <div>
      <h1>Protected Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default App;

Backend (Node.js + Express):

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const secretKey = 'your-secret-key';

app.get('/protected', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(403).send('Token required');
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token');
    }
    res.json({ data: 'This is protected data', user: decoded.username });
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});



1. Node.js Questions (Theory + Practical)
1.1 Theory: What is Event Loop in Node.js, and how does it work?
Answer:
The Event Loop in Node.js is responsible for executing non-blocking I/O operations. Node.js runs on a single thread, but it handles multiple operations using an asynchronous, event-driven model. The Event Loop allows Node.js to perform non-blocking operations (such as file I/O, database queries, etc.) despite being single-threaded.

Phases of the Event Loop:

Timers: Executes scheduled callbacks (e.g., setTimeout).

I/O Callbacks: Executes callbacks for I/O operations (e.g., reading a file).

Poll: Retrieves new I/O events.

Check: Executes setImmediate callbacks.

Close Callbacks: Executes callbacks for closed connections (e.g., socket closure).

1.2 Practical: Write a basic HTTP server in Node.js.
Solution:

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});


2. JavaScript Questions (Theory + Practical)
2.1 Theory: What is a closure in JavaScript?
Answer:
A closure is a function that retains access to variables from its lexical scope, even after the function has finished executing. In other words, closures allow a function to "remember" the environment in which it was created.

2.2 Practical: Write a JavaScript function to create a simple counter using closures.
Solution:

function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2


3. MongoDB Questions (Theory + Practical)
3.1 Theory: What are the differences between SQL and NoSQL databases?
Answer:

SQL databases are relational, using structured schemas, tables, and rows. They are ideal for transactional applications and complex queries (e.g., joins). Examples include MySQL and PostgreSQL.

NoSQL databases are non-relational, allowing flexible schema design and are often used for applications requiring scalability and high availability. Examples include MongoDB, Cassandra, and Redis.

3.2 Practical: Write a MongoDB query to fetch all users who are older than 25 and sort them by name.
Solution:

db.users.find({ age: { $gt: 25 } }).sort({ name: 1 });


4. SQL Questions (Theory + Practical)
4.1 Theory: What is the difference between INNER JOIN and LEFT JOIN in SQL?
Answer:

INNER JOIN returns only the rows where there is a match in both tables.

LEFT JOIN (or LEFT OUTER JOIN) returns all rows from the left table, and the matched rows from the right table. If there is no match, NULL values are returned for the right table’s columns.

4.2 Practical: Write an SQL query to find the top 3 highest paid employees.
Solution:

SELECT name, salary
FROM employees
ORDER BY salary DESC
LIMIT 3;


5. React Questions (Theory + Practical)
5.1 Theory: What is the purpose of useEffect in React?
Answer:
useEffect is a hook that allows you to perform side effects (e.g., data fetching, subscriptions, or manual DOM manipulations) in function components. It runs after every render by default, but you can specify dependencies to control when it runs.

5.2 Practical: Write a React component that fetches data from an API and displays it.
Solution:

import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty dependency array means this runs once after the component mounts

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default FetchData;


6. Full-Stack / System Design Questions (Theory + Practical)
6.1 Theory: What is the difference between monolithic and microservices architecture?
Answer:

Monolithic architecture: The application is built as a single, unified unit where all components are tightly coupled and share the same database.

Microservices architecture: The application is broken into small, independent services that each focus on a specific task. Each service communicates with others over a network (e.g., HTTP or messaging queues).

6.2 Practical: Implement a simple API in Node.js for user registration and login with JWT authentication.
Solution (Node.js + JWT):

Install necessary packages:

npm install express bcryptjs jsonwebtoken body-parser

Server Code:

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const secretKey = 'your-secret-key';
const users = []; // In-memory "database"

app.use(bodyParser.json());

// User registration
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).send('User registered');
});

// User login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  
  if (!user) {
    return res.status(400).send('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  
  if (!isMatch) {
    return res.status(400).send('Invalid credentials');
  }

  const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
  res.json({ token });
});

// Protected route
app.get('/protected', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(403).send('Token required');
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token');
    }
    res.json({ data: 'Protected data', user: decoded.username });
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


7. Performance Optimization / Best Practices
7.1 Theory: How can you optimize the performance of a Node.js application?
Answer:

Use clustering: Leverage multiple CPU cores to handle concurrent requests by using Node.js's cluster module.

Caching: Implement caching strategies (e.g., Redis) to minimize database load for frequently accessed data.

Asynchronous code: Ensure that I/O operations (e.g., file reading, database queries) are non-blocking to avoid blocking the event loop.

Avoid blocking the event loop: Use workers or child processes for CPU-intensive tasks.

Use a load balancer: Distribute traffic across multiple instances of the application.

SQL Interview Questions (Theory + Practical)
Theory Questions:
1. What is the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN?
Answer:

INNER JOIN: Returns only the rows where there is a match in both tables.

LEFT JOIN (or LEFT OUTER JOIN): Returns all rows from the left table and the matching rows from the right table. If no match, returns NULL for the right table.

RIGHT JOIN (or RIGHT OUTER JOIN): Similar to LEFT JOIN but returns all rows from the right table and NULL for non-matching rows from the left table.

FULL OUTER JOIN: Returns all rows from both tables. Where there is no match, NULL is returned for the missing side.

2. What are ACID properties in SQL?
Answer:

Atomicity: Ensures that all operations in a transaction are completed. If not, the transaction is aborted.

Consistency: Ensures the database is in a valid state after the transaction.

Isolation: Ensures that transactions are executed independently, even if they run concurrently.

Durability: Ensures that once a transaction is committed, it is permanent, even in the event of a system failure.

3. Explain the difference between GROUP BY and HAVING.
Answer:

GROUP BY: Groups rows that have the same values into summary rows, like "total sales by product".

HAVING: Is used to filter records after the GROUP BY clause. It is often used with aggregate functions (e.g., COUNT, SUM, AVG).

Practical Questions:
1. Write an SQL query to find the second highest salary from an employees table.
Solution:
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);


Alternatively, using LIMIT (for MySQL/PostgreSQL):
SELECT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;


2. Write a SQL query to get all employees who have been working for more than 5 years.
Solution:

SELECT * 
FROM employees 
WHERE DATEDIFF(CURDATE(), hire_date) > 5 * 365;

In PostgreSQL:

SELECT * 
FROM employees 
WHERE hire_date < CURRENT_DATE - INTERVAL '5 years';


3. Write an SQL query to find employees who have not reported to anyone (i.e., no manager).
Solution:

SELECT * 
FROM employees 
WHERE manager_id IS NULL;


MongoDB Interview Questions (Theory + Practical)
Theory Questions:
1. What is the difference between SQL and NoSQL databases?
Answer:

SQL Databases: Use relational data models (tables, rows). They require a predefined schema, and queries are done using SQL. Examples: MySQL, PostgreSQL.

NoSQL Databases: Are non-relational and flexible in terms of data storage. They can store structured, semi-structured, or unstructured data. Examples: MongoDB, Cassandra, Redis.

2. What is the difference between embedded documents and referenced documents in MongoDB?
Answer:

Embedded Documents: Store related data within the same document. It improves read performance but can lead to data redundancy.

Referenced Documents: Store related data in separate collections and link them using references (e.g., ObjectId). This minimizes data redundancy and is ideal for large datasets.

3. What are indexes in MongoDB, and why are they important?
Answer: Indexes in MongoDB improve query performance by allowing the database to quickly locate data without scanning the entire collection. Without indexes, MongoDB performs a collection scan, which can be slow for large datasets. By default, MongoDB creates an index on the _id field.

4. Explain the concept of sharding in MongoDB.
Answer: Sharding is a method used to distribute data across multiple machines. It splits large datasets into smaller, more manageable pieces (called chunks) and distributes them across a cluster of MongoDB servers. Sharding ensures that large datasets can be horizontally scaled and that the database remains highly available.

Practical Questions:
1. Write a MongoDB query to find all users who are older than 30 and sort them by name in ascending order.
Solution:
db.users.find({ age: { $gt: 30 } }).sort({ name: 1 });

2. Write a MongoDB query to count the number of documents in the orders collection for each status field.
Solution:
db.orders.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } }
]);

3. Write a MongoDB query to find all products that have been sold more than 100 times.
Solution:
db.products.find({ sales_count: { $gt: 100 } });

4. Write a MongoDB query to update the email address of a user with a specific username.
Solution:
db.users.updateOne(
  { username: "john_doe" },
  { $set: { email: "new_email@example.com" } }
);

5. Write a MongoDB query to delete all documents in the sessions collection where last_accessed is older than 30 days.
Solution:
db.sessions.deleteMany({
  last_accessed: { $lt: new Date(new Date() - 30 * 24 * 60 * 60 * 1000) }
});


Advanced MongoDB Questions:
1. How would you handle large-scale data in MongoDB?
Answer:
For large-scale data, you can use sharding to distribute data across multiple nodes. Additionally, indexing (especially compound indexes) can speed up query execution, and replica sets can be used to ensure high availability and data redundancy.

2. What are aggregation pipelines in MongoDB, and when would you use them?
Answer:
Aggregation pipelines in MongoDB allow you to process and transform data within the database. It provides a powerful way to perform operations like grouping, filtering, sorting, and projecting data in a more efficient and flexible manner compared to traditional SQL operations. It's used for tasks like reporting, data transformation, and data analysis.

Example:
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customer_id", totalAmount: { $sum: "$amount" } } },
  { $sort: { totalAmount: -1 } }
]);


SQL Coding Challenges
1. SQL Coding Challenge: Find Employees with Maximum Salary
Problem: Write a SQL query to find all the employees who have the highest salary.

Solution:
SELECT name, salary
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);

Explanation:
This query finds the employee(s) with the maximum salary by first identifying the highest salary with the subquery SELECT MAX(salary) FROM employees, and then selecting all employees with that salary.

2. SQL Coding Challenge: Get All Orders in the Last 30 Days
Problem: Write a SQL query to find all orders that were placed in the last 30 days. Assume that the orders table has a created_at field.

Solution:
SELECT * 
FROM orders 
WHERE created_at >= NOW() - INTERVAL 30 DAY;

Explanation:
This query retrieves all orders placed in the last 30 days using the NOW() function to get the current date and subtracting 30 days using INTERVAL.

3. SQL Coding Challenge: Employees without Manager
Problem: Write a SQL query to find all employees who don't have a manager (i.e., manager_id is NULL).

Solution:
SELECT name 
FROM employees
WHERE manager_id IS NULL;

Explanation:
This query uses IS NULL to check for employees who do not have a manager by filtering those whose manager_id field is null.

4. SQL Coding Challenge: Find Orders with More Than One Item
Problem: Write a SQL query to find all orders that have more than one item in the order_items table, assuming each order has a unique order_id and item_id.

Solution:
SELECT order_id, COUNT(*) AS item_count
FROM order_items
GROUP BY order_id
HAVING COUNT(*) > 1;

Explanation:
This query groups the order_items by order_id and counts the number of items in each order using COUNT(). It then filters out orders with only one item using the HAVING clause.

5. SQL Coding Challenge: Average Salary by Department
Problem: Write a SQL query to find the average salary for each department in the employees table. Assume the employees table has salary and department_id fields.

Solution:
SELECT department_id, AVG(salary) AS average_salary
FROM employees
GROUP BY department_id;


Explanation:
This query uses the GROUP BY clause to group employees by their department and calculates the average salary for each department using AVG().


MongoDB Coding Challenges
1. MongoDB Coding Challenge: Get Users with Multiple Orders
Problem: Write a MongoDB query to find users who have placed more than 3 orders. Assume the orders collection has a user_id field and an order_date field.

Solution:
db.orders.aggregate([
  { $group: { _id: "$user_id", total_orders: { $sum: 1 } } },
  { $match: { total_orders: { $gt: 3 } } }
]);


Explanation:
This aggregation pipeline first groups the orders by user_id and counts the number of orders each user has placed using $sum. Then, it filters out users who have placed fewer than 3 orders with the $match stage.

2. MongoDB Coding Challenge: Find Products Sold More Than 100 Times
Problem: Write a MongoDB query to find all products that have been sold more than 100 times. Assume the products collection has a sales_count field.

Solution:
db.products.find({ sales_count: { $gt: 100 } });

Explanation:
This query simply uses the find() method to retrieve products where the sales_count is greater than 100.

3. MongoDB Coding Challenge: Get Users with Recent Orders
Problem: Write a MongoDB query to find users who placed orders within the last 7 days. Assume the orders collection has a user_id and order_date field.

Solution:
db.orders.aggregate([
  { $match: { order_date: { $gte: new Date(new Date() - 7 * 24 * 60 * 60 * 1000) } } },
  { $group: { _id: "$user_id", recent_orders: { $sum: 1 } } }
]);

Explanation:
This aggregation pipeline first filters the orders placed within the last 7 days using $match and the date comparison. Then, it groups by user_id to count how many orders each user placed during this period.

4. MongoDB Coding Challenge: Update Stock Quantity for Products
Problem: Write a MongoDB query to update the stock quantity of a product. Assume the products collection has a stock_quantity field.

Solution:
db.products.updateOne(
  { _id: ObjectId("product_id_here") },
  { $inc: { stock_quantity: -1 } }  // Decrease stock by 1
);


Explanation:
This query uses updateOne() to find a product by its _id and decrease its stock_quantity by 1 using the $inc operator.

5. MongoDB Coding Challenge: Delete Orders Older Than 30 Days
Problem: Write a MongoDB query to delete all orders in the orders collection that are older than 30 days. Assume the orders collection has an order_date field.

Solution:
db.orders.deleteMany({
  order_date: { $lt: new Date(new Date() - 30 * 24 * 60 * 60 * 1000) }
});

Explanation:
This query uses the deleteMany() method to remove orders that are older than 30 days by comparing the order_date with the current date minus 30 days.

Advanced MongoDB Coding Challenges
1. MongoDB Coding Challenge: Aggregate Total Sales by Month
Problem: Write a MongoDB query to calculate the total sales for each month from an orders collection. Assume that orders has a total_amount field and an order_date field.

Solution:
db.orders.aggregate([
  { $project: { 
      month: { $month: "$order_date" }, 
      year: { $year: "$order_date" }, 
      total_amount: 1 
    } 
  },
  { $group: { 
      _id: { year: "$year", month: "$month" }, 
      total_sales: { $sum: "$total_amount" } 
    } 
  },
  { $sort: { "_id.year": 1, "_id.month": 1 } }
]);


Explanation:
The first stage of the aggregation pipeline extracts the month and year from the order_date. The second stage groups the documents by year and month and sums the total_amount to get total sales for each month. The last stage sorts the results in ascending order of year and month.

2. MongoDB Coding Challenge: Top 5 Products by Sales
Problem: Write a MongoDB query to find the top 5 products with the highest sales. Assume that products collection has a sales field.

Solution:
db.products.aggregate([
  { $sort: { sales: -1 } },
  { $limit: 5 },
  { $project: { name: 1, sales: 1 } }
]);

Explanation:
This query first sorts the products by sales in descending order. Then, it limits the result to the top 5 products using $limit. Finally, it projects only the name and sales fields in the result.


1. JavaScript Challenge: Deep Clone an Object
Problem: Write a function that deeply clones an object. The object may contain nested objects and arrays.

Solution:
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  
  let clone = Array.isArray(obj) ? [] : {};
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  
  return clone;
}

const original = { a: 1, b: { c: 2, d: [3, 4] } };
const cloned = deepClone(original);
console.log(cloned);

Explanation:

The function recursively checks whether the value is an object or an array and clones each nested value.

It handles both objects and arrays by checking the type and using recursion to clone deeply.

2. JavaScript Challenge: Debounce Function
Problem: Write a debounce function that delays the invocation of a function until after a certain amount of time has passed since the last call.

Solution:

function debounce(func, delay) {
  let timer;
  
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const log = () => console.log('Debounced!');
const debouncedLog = debounce(log, 2000);

// Test
debouncedLog();
debouncedLog();
debouncedLog(); // This will only log once after 2 seconds


Explanation:

This debounce function ensures that the given function (func) will only be executed after a specified delay has passed since the last time the debounced function was called.

It uses clearTimeout() to clear any previous timers and sets a new one on each invocation.

3. JavaScript Challenge: Throttle Function
Problem: Write a throttle function that ensures the provided function (func) is only executed at most once every n milliseconds.

Solution:

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  
  return function(...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

const log = () => console.log('Throttled!');
const throttledLog = throttle(log, 2000);

// Test
throttledLog();
throttledLog();
throttledLog(); // Will log once every 2 seconds


Explanation:

This function ensures that the provided function (func) is executed at most once every limit milliseconds.

It maintains the lastRan timestamp to keep track of when the function was last executed.

4. JavaScript Challenge: Flatten Nested Arrays
Problem: Write a function that flattens an array of nested arrays (with arbitrary depth) into a single-level array.

Solution:

function flatten(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

const nestedArray = [1, [2, 3, [4, 5]], 6, [7, [8, 9]]];
const flattened = flatten(nestedArray);
console.log(flattened);


Explanation:

This function uses recursion to check if an element is an array.

If it is, the function flattens it further; if not, it adds the element to the accumulator.

5. JavaScript Challenge: Create a Custom Promise.all
Problem: Implement your own version of Promise.all that accepts an array of promises and returns a single promise that resolves when all the promises are resolved, or rejects if any promise rejects.

Solution:
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    
    promises.forEach((promise, index) => {
      promise.then(value => {
        results[index] = value;
        completed += 1;
        
        if (completed === promises.length) {
          resolve(results);
        }
      }).catch(err => reject(err));
    });
  });
}

const p1 = Promise.resolve(3);
const p2 = Promise.resolve(4);
const p3 = new Promise((resolve, reject) => setTimeout(() => resolve(5), 1000));

myPromiseAll([p1, p2, p3]).then(result => console.log(result)); // [3, 4, 5]


Explanation:

The custom myPromiseAll function works by iterating over all promises, resolving each one, and collecting their results.

It resolves when all promises have completed and rejects if any promise fails.

6. JavaScript Challenge: Implement a Simple Event Emitter
Problem: Write a simple EventEmitter class that can register event listeners, trigger events, and remove event listeners.

Solution:

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  off(event, listener) {
    if (this.events[event]) {
      const index = this.events[event].indexOf(listener);
      if (index !== -1) {
        this.events[event].splice(index, 1);
      }
    }
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(...args));
    }
  }
}

// Test
const emitter = new EventEmitter();
const greet = (name) => console.log(`Hello, ${name}`);
emitter.on('greet', greet);
emitter.emit('greet', 'John');  // Hello, John
emitter.off('greet', greet);
emitter.emit('greet', 'John');  // No output


Explanation:

The EventEmitter class allows you to register event listeners with on(), remove them with off(), and trigger them with emit().

It uses an object (this.events) to store event listeners, with event names as keys and listener arrays as values.

7. JavaScript Challenge: Find Longest Substring Without Repeating Characters
Problem: Given a string, find the length of the longest substring without repeating characters.

Solution:

function longestSubstring(str) {
  let map = new Map();
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < str.length; end++) {
    if (map.has(str[end])) {
      start = Math.max(map.get(str[end]) + 1, start);
    }
    map.set(str[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(longestSubstring("abcabcbb"));  // 3 ("abc")
console.log(longestSubstring("bbbbb"));     // 1 ("b")
console.log(longestSubstring("pwwkew"));    // 3 ("wke")


Explanation:

This solution uses the sliding window technique with two pointers (start and end) and a map to track the indices of characters.

It adjusts the start pointer whenever a repeating character is found, ensuring a substring with no repeated characters.



8. JavaScript Challenge: Implement a LRU Cache
Problem: Implement a Least Recently Used (LRU) Cache. The cache should have the following operations:

get(key): Return the value of the key if it exists, otherwise return -1.

put(key, value): Insert or update the value of the key.

If the cache exceeds its capacity, it should remove the least recently used item.

Solution:
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);  // Remove the first/oldest entry
    }
  }
}

// Test
const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1));  // 1
lru.put(3, 3);            // evicts key 2
console.log(lru.get(2));  // -1 (not found)


Explanation:

We use a Map to keep track of the cache entries, and the Map preserves the order of insertion.

When we exceed the cache's capacity, the least recently used item is deleted by removing the first key using this.cache.keys().next().value.



1. Node.js Challenge: HTTP Server for CRUD Operations
Problem: Create an HTTP server in Node.js that can handle basic CRUD operations for a simple in-memory data store (e.g., a list of users). The server should support:

GET to fetch all users

POST to add a new user

PUT to update an existing user

DELETE to remove a user

Solution:
const http = require('http');
const url = require('url');

let users = [];

const server = http.createServer((req, res) => {
  const { method, url: requestUrl } = req;
  const { pathname } = url.parse(requestUrl, true);
  
  if (method === 'GET' && pathname === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }

  if (method === 'POST' && pathname === '/users') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const newUser = JSON.parse(body);
      users.push(newUser);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newUser));
    });
  }

  if (method === 'PUT' && pathname.startsWith('/users/')) {
    const userId = parseInt(pathname.split('/')[2]);
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const updatedUser = JSON.parse(body);
      users = users.map(user => user.id === userId ? updatedUser : user);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(updatedUser));
    });
  }

  if (method === 'DELETE' && pathname.startsWith('/users/')) {
    const userId = parseInt(pathname.split('/')[2]);
    users = users.filter(user => user.id !== userId);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: `User ${userId} deleted` }));
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

Explanation:

The server listens for HTTP requests and handles each request based on the HTTP method and URL path.

For GET requests, it returns the list of users.

For POST, it adds a new user.

For PUT, it updates an existing user by their id.

For DELETE, it removes a user by their id.



2. Node.js Challenge: Read and Write to a File Using Streams
Problem: Write a Node.js program that reads a file, processes its content (e.g., converts all text to uppercase), and writes the processed content to a new file. Use streams for efficient memory usage.

Solution:

const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname, 'input.txt'), 'utf8');
const writeStream = fs.createWriteStream(path.join(__dirname, 'output.txt'));

readStream.on('data', chunk => {
  const upperCaseChunk = chunk.toUpperCase();
  writeStream.write(upperCaseChunk);
});

readStream.on('end', () => {
  console.log('File processing complete!');
});

readStream.on('error', err => {
  console.error('Error reading file:', err);
});

writeStream.on('error', err => {
  console.error('Error writing file:', err);
});


Explanation:

The program uses streams to read the input.txt file in chunks and process each chunk by converting it to uppercase.

The processed chunks are written to the output.txt file.

Error handling is done on both the read and write streams.



3. Node.js Challenge: Asynchronous File Operations with Promises
Problem: Create a function that reads a file and returns a promise that resolves with the content of the file or rejects if an error occurs. Implement it using fs.promises.

Solution:

const fs = require('fs').promises;

async function readFileAsync(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return data;
  } catch (error) {
    throw new Error('Error reading file: ' + error.message);
  }
}

readFileAsync('example.txt')
  .then(data => console.log('File Content:', data))
  .catch(error => console.error(error.message));


Explanation:

The function readFileAsync uses async/await and fs.promises.readFile to read the file asynchronously.

It returns the file content or throws an error if there is an issue.

4. Node.js Challenge: Create a Simple HTTP Server with Error Handling
Problem: Create a simple HTTP server in Node.js that handles different types of errors gracefully, including 404 (Not Found) and 500 (Internal Server Error).

Solution:

const http = require('http');

const server = http.createServer((req, res) => {
  try {
    if (req.url === '/error') {
      throw new Error('Internal Server Error');
    }

    if (req.url === '/hello') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello, World!');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Page Not Found');
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});


Explanation:

This server handles errors by catching them with try/catch and sending appropriate error responses (404 for not found, 500 for server errors).

It also has a /hello endpoint that returns a success message, and /error that triggers an internal error.

5. Node.js Challenge: Event-Driven System with EventEmitter
Problem: Write a Node.js program that implements an event-driven system where events like orderPlaced and orderShipped are emitted, and listeners handle those events.

Solution:

const EventEmitter = require('events');
const orderEmitter = new EventEmitter();

orderEmitter.on('orderPlaced', (orderId) => {
  console.log(`Order ${orderId} has been placed.`);
});

orderEmitter.on('orderShipped', (orderId) => {
  console.log(`Order ${orderId} has been shipped.`);
});

function placeOrder(orderId) {
  console.log('Placing order...');
  orderEmitter.emit('orderPlaced', orderId);
  setTimeout(() => {
    orderEmitter.emit('orderShipped', orderId);
  }, 2000);
}

// Test the system
placeOrder(123);

Explanation:

The program creates an instance of EventEmitter and listens for two events: orderPlaced and orderShipped.

The placeOrder function emits the orderPlaced event immediately and the orderShipped event after 2 seconds.



6. Node.js Challenge: Concurrent Requests with Promise.all
Problem: Write a function that makes concurrent HTTP requests to two APIs and processes their responses. Use Promise.all to ensure both requests are completed before proceeding.

Solution:

const http = require('http');

function fetchData(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function fetchMultipleData() {
  try {
    const [data1, data2] = await Promise.all([
      fetchData('http://api.example1.com/data'),
      fetchData('http://api.example2.com/data')
    ]);
    console.log('Data 1:', data1);
    console.log('Data 2:', data2);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchMultipleData();


Explanation:

The function fetchData performs HTTP GET requests and resolves with the parsed JSON data.

Promise.all is used to fetch data from two APIs concurrently, ensuring that both requests are completed before the results are processed.

7. Node.js Challenge: Rate Limiting Middleware
Problem: Write a rate limiting middleware for an Express.js app that allows each IP address to make a maximum of 5 requests per minute.

Solution:

const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many requests, please try again later.'
});

app.use('/api/', limiter);

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is some data' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

Explanation:

This example uses the express-rate-limit library to create a rate limiter middleware that restricts each IP address to a maximum of 5 requests per minute for the /api/ route.

After 5 requests, the client will receive a rate limit message.

1. Node.js Challenge: Implement a Simple Logger with Rotating Files
Problem: Implement a logger that writes log messages to a file. After the file reaches a certain size (e.g., 1MB), it should rotate the file by renaming the current log file and starting a new one. Each log file should be named with a timestamp.

Solution:
const fs = require('fs');
const path = require('path');

class Logger {
  constructor(logDirectory, maxFileSize = 1 * 1024 * 1024) {
    this.logDirectory = logDirectory;
    this.maxFileSize = maxFileSize;
    this.logFileName = path.join(logDirectory, `log-${this.getTimestamp()}.txt`);
  }

  getTimestamp() {
    return new Date().toISOString().replace(/:/g, '-');
  }

  writeLog(message) {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;

    fs.stat(this.logFileName, (err, stats) => {
      if (err || stats.size > this.maxFileSize) {
        // Rotate the log file by renaming it and creating a new one
        this.logFileName = path.join(this.logDirectory, `log-${this.getTimestamp()}.txt`);
      }

      fs.appendFile(this.logFileName, logMessage, (err) => {
        if (err) {
          console.error('Failed to write log:', err);
        }
      });
    });
  }
}

const logger = new Logger('./logs');
logger.writeLog('This is a log message.');
logger.writeLog('This is another log message.');


Explanation:

The Logger class manages log files, and when a log file exceeds the specified size (1MB), it renames the current file (rotates it) and starts a new log file with a timestamp.

It uses the fs.stat method to check the file size and fs.appendFile to write logs to the file.


2. Node.js Challenge: Event-Driven Task Queue
Problem: Implement an event-driven task queue in Node.js that processes tasks asynchronously. The task queue should allow tasks to be added dynamically, process them in the background, and emit events like taskAdded, taskProcessed, and queueEmpty.

Solution:

const EventEmitter = require('events');

class TaskQueue extends EventEmitter {
  constructor() {
    super();
    this.queue = [];
    this.isProcessing = false;
  }

  addTask(task) {
    this.queue.push(task);
    this.emit('taskAdded', task);
    this.processQueue();
  }

  async processQueue() {
    if (this.isProcessing || this.queue.length === 0) return;

    this.isProcessing = true;
    while (this.queue.length > 0) {
      const task = this.queue.shift();
      this.emit('taskProcessed', task);
      await this.processTask(task);
    }
    this.isProcessing = false;
    if (this.queue.length === 0) {
      this.emit('queueEmpty');
    }
  }

  async processTask(task) {
    // Simulate task processing (e.g., I/O operation)
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Processed task: ${task}`);
        resolve();
      }, 1000);
    });
  }
}

const taskQueue = new TaskQueue();
taskQueue.on('taskAdded', (task) => console.log(`Task added: ${task}`));
taskQueue.on('taskProcessed', (task) => console.log(`Task processed: ${task}`));
taskQueue.on('queueEmpty', () => console.log('Queue is empty.'));

taskQueue.addTask('Task 1');
taskQueue.addTask('Task 2');
taskQueue.addTask('Task 3');


Explanation:

The TaskQueue class processes tasks asynchronously.

Tasks are added to the queue using the addTask method, and when the queue is not being processed, it starts processing tasks in order.

Events like taskAdded, taskProcessed, and queueEmpty are emitted during the process.



3. Node.js Challenge: File Upload Server
Problem: Create an HTTP server in Node.js that allows users to upload files. After a file is uploaded, it should be saved to the server's file system and respond with a success message. Implement multipart/form-data handling for file uploads.

Solution:

const http = require('http');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload') {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, 'uploads');
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error processing file upload');
        return;
      }

      const file = files.file[0];
      fs.rename(file.path, path.join(form.uploadDir, file.name), (err) => {
        if (err) {
          res.statusCode = 500;
          res.end('Error saving file');
          return;
        }
        res.statusCode = 200;
        res.end(`File uploaded successfully: ${file.name}`);
      });
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});


Explanation:

The server uses the formidable package to handle multipart/form-data for file uploads.

The uploaded file is saved to the uploads directory, and upon completion, a success message is sent to the client.

4. Node.js Challenge: Implementing a Caching Layer
Problem: Implement a simple in-memory cache in Node.js with get, set, and delete methods. The cache should expire an item after a certain TTL (Time To Live) period.

Solution:
class Cache {
  constructor(ttl = 60000) {
    this.cache = new Map();
    this.ttl = ttl; // TTL in milliseconds
  }

  set(key, value) {
    const expireAt = Date.now() + this.ttl;
    this.cache.set(key, { value, expireAt });
  }

  get(key) {
    const data = this.cache.get(key);
    if (!data) return null;
    if (data.expireAt < Date.now()) {
      this.cache.delete(key);
      return null;
    }
    return data.value;
  }

  delete(key) {
    this.cache.delete(key);
  }
}

const cache = new Cache(5000); // Items expire after 5 seconds
cache.set('username', 'john_doe');

setTimeout(() => {
  console.log(cache.get('username')); // Should be 'john_doe'
}, 3000);

setTimeout(() => {
  console.log(cache.get('username')); // Should be null (expired)
}, 6000);


Explanation:

This Cache class uses a Map to store key-value pairs along with an expiration time (expireAt).

When the cache item is requested, it checks if it has expired and deletes it if necessary.

5. Node.js Challenge: Worker Threads for CPU-bound Tasks
Problem: Implement a CPU-bound task (like calculating the Fibonacci series) using worker threads in Node.js to offload the computation and prevent blocking the main thread.

Solution:

main.js:
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  // Main thread
  const worker = new Worker(__filename);
  worker.on('message', (result) => {
    console.log('Fibonacci result:', result);
  });
  worker.postMessage(40); // Send the number to calculate Fibonacci for
} else {
  // Worker thread
  parentPort.on('message', (num) => {
    const fib = fibonacci(num);
    parentPort.postMessage(fib);
  });

  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}


Explanation:

This solution uses worker threads to offload the Fibonacci calculation to a separate thread, ensuring the main thread is not blocked.

The worker receives a message with the number to calculate the Fibonacci for and then sends the result back to the main thread.

6. Node.js Challenge: Implement a Basic HTTP Proxy
Problem: Create a simple HTTP proxy server in Node.js that forwards requests to another server. The proxy should handle both GET and POST requests.

Solution:
const http = require('http');
const { request } = require('http');

const proxyServer = http.createServer((req, res) => {
  const options = {
    hostname: 'example.com', // Target server
    port: 80,
    path: req.url,
    method: req.method,
    headers: req.headers
  };

  const proxyRequest = request(options, (proxyResponse) => {
    res.writeHead(proxyResponse.statusCode, proxyResponse.headers);
    proxyResponse.pipe(res);
  });

  req.pipe(proxyRequest);

  proxyRequest.on('error', (err) => {
    console.error('Proxy error:', err);
    res.statusCode = 500;
    res.end('Proxy error');
  });
});

proxyServer.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});


Explanation:

The proxy server forwards incoming requests to example.com and relays the response back to the client.

It uses http.request to create a request to the target server, and pipe() to forward the data between the proxy and the client.

Conclusion
These additional Node.js coding challenges cover various advanced topics, including:

Event-driven architectures

File uploads

Caching strategies

Worker threads for parallel processing

HTTP proxy servers

Tackling these challenges will give you hands-on experience with more advanced features of Node.js, particularly with regard to building efficient and scalable applications. Feel free to reach out if you'd like further explanations or additional challenges!

1. Node.js Challenge: Building a Simple Rate Limiter
Problem: Implement a rate limiter for an HTTP API in Node.js. The API should limit the number of requests a client can make within a specified time window (e.g., 100 requests per minute per IP address). Use an in-memory store for simplicity.

Solution:
const http = require('http');
const redis = require('redis');
const redisClient = redis.createClient();
const rateLimitWindow = 60 * 1000; // 1 minute in milliseconds
const maxRequests = 100;

const server = http.createServer((req, res) => {
  const ip = req.connection.remoteAddress;

  // Check Redis to see how many requests have been made from this IP
  redisClient.get(ip, (err, requests) => {
    if (err) {
      console.error('Error with Redis:', err);
      res.statusCode = 500;
      res.end('Server Error');
      return;
    }

    const currentRequests = requests ? parseInt(requests, 10) : 0;

    if (currentRequests >= maxRequests) {
      res.statusCode = 429; // Too Many Requests
      res.end('Rate limit exceeded');
    } else {
      // Increment the request count and set an expiration time of 1 minute
      redisClient.multi()
        .incr(ip)
        .expire(ip, rateLimitWindow / 1000)
        .exec(() => {
          res.statusCode = 200;
          res.end('Request processed successfully');
        });
    }
  });
});

server.listen(3000, () => {
  console.log('Rate limiter server is running on port 3000');
});


Explanation:

The rate limiter uses Redis to track the number of requests for each IP.

GET retrieves the number of requests made by the IP, and if it exceeds the limit, it returns a 429 Too Many Requests status.

INCR and EXPIRE Redis commands are used to increment the request count and set an expiration time for each IP address.

2. Node.js Challenge: Implementing a Microservice Architecture
Problem: Create two microservices in Node.js. One service should handle user authentication and return a JWT token, while the other service should protect routes and authenticate requests using the JWT token.

Solution:

Authentication Service (authService.js):

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 4000;

app.post('/login', (req, res) => {
  const user = { id: 1, username: 'john_doe' }; // For demo purposes, using a static user
  const token = jwt.sign(user, 'secretKey', { expiresIn: '1h' });

  res.json({ token });
});

app.listen(port, () => {
  console.log(`Auth service listening on port ${port}`);
});


Protected Service (protectedService.js):

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 5000;

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send('Access Denied');
  }

  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) {
      return res.status(403).send('Invalid Token');
    }
    req.user = user;
    next();
  });
}

app.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

app.listen(port, () => {
  console.log(`Protected service listening on port ${port}`);
});

Explanation:

Authentication Service generates a JWT token when a user logs in. The token includes the user information and is signed with a secret key.

Protected Service has a middleware to verify the JWT token for any request to protected routes (e.g., /protected).

3. Node.js Challenge: Data Aggregator Using Streams
Problem: Implement a Node.js service that aggregates data from multiple CSV files using streams. Each CSV file has rows of data that need to be summed or averaged, and the results are returned once all files are processed.

Solution:
const fs = require('fs');
const readline = require('readline');

const aggregateCSV = (filePaths) => {
  const results = [];

  const processFile = async (filePath) => {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      const data = line.split(',');
      results.push(Number(data[1])); // Assuming the second column contains numeric values
    }
  };

  const processFiles = async () => {
    for (const filePath of filePaths) {
      await processFile(filePath);
    }

    const total = results.reduce((acc, val) => acc + val, 0);
    const average = total / results.length;

    console.log('Total:', total);
    console.log('Average:', average);
  };

  processFiles().catch((err) => console.error(err));
};

aggregateCSV(['file1.csv', 'file2.csv']);


Explanation:

readline is used to process each line of the CSV file.

Data is aggregated into an array, and after processing all files, it calculates the sum and average of the values in the second column.

4. Node.js Challenge: File Comparison Service
Problem: Implement a Node.js service that compares two files (e.g., text files). The service should return a report showing the differences between the two files (line by line).

Solution:

const fs = require('fs');

const compareFiles = (file1Path, file2Path) => {
  const file1 = fs.readFileSync(file1Path, 'utf8').split('\n');
  const file2 = fs.readFileSync(file2Path, 'utf8').split('\n');

  const maxLength = Math.max(file1.length, file2.length);
  const differences = [];

  for (let i = 0; i < maxLength; i++) {
    if (file1[i] !== file2[i]) {
      differences.push({
        line: i + 1,
        file1Line: file1[i] || 'N/A',
        file2Line: file2[i] || 'N/A',
      });
    }
  }

  return differences;
};

const differences = compareFiles('file1.txt', 'file2.txt');
console.log('Differences:', differences);


Explanation:

The function compareFiles reads both files, splits them by lines, and compares them line by line.

It returns the differences, showing which lines differ between the two files.

5. Node.js Challenge: Implementing a Priority Queue
Problem: Implement a priority queue in Node.js. Each task should have a priority, and tasks with higher priority should be processed first.

Solution:

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(task, priority) {
    this.queue.push({ task, priority });
    this.queue.sort((a, b) => b.priority - a.priority); // Sort by priority (descending)
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }
}

const pq = new PriorityQueue();
pq.enqueue('Task 1', 3);
pq.enqueue('Task 2', 1);
pq.enqueue('Task 3', 2);

console.log(pq.dequeue()); // Task 1 with priority 3
console.log(pq.peek()); // Task 3 with priority 2


Explanation:

The priority queue uses a simple array to store tasks along with their priorities.

enqueue adds a task and sorts the queue by priority, while dequeue removes the highest priority task.

6. Node.js Challenge: Parallel API Calls with Throttling
Problem: Write a Node.js function that makes multiple API calls in parallel but throttles the number of concurrent requests to avoid overwhelming the server (e.g., limit to 5 concurrent requests at a time).

Solution:

const axios = require('axios');

const throttleRequests = async (urls, limit) => {
  const results = [];
  const executing = [];

  for (const url of urls) {
    const promise = axios.get(url).then(response => results.push(response.data));
    executing.push(promise);

    if (executing.length >= limit) {
      await Promise.race(executing); // Wait until one of the promises resolves
      executing.splice(executing.findIndex(p => p === promise), 1); // Remove the resolved promise
    }
  }

  await Promise.all(executing); // Wait for any remaining promises to resolve
  return results;
};

const urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2', /* more URLs */];
throttleRequests(urls, 5).then(results => {
  console.log(results);
});

Explanation:

This function makes parallel API calls but ensures that no more than a specified number of requests (limit) are executed concurrently.

It uses Promise.race to wait for one of the promises to resolve before allowing more concurrent requests.

1. Node.js Challenge: Implement a Simple Chat Server
Problem: Create a simple chat server using WebSockets where multiple clients can connect and send messages to each other in real-time. Use Socket.io for the WebSocket implementation.

Solution:

// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.send('Chat Server Running');
});

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('Message received: ' + msg);
    io.emit('chat message', msg);  // Broadcast message to all connected clients
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


Explanation:

Socket.io is used for real-time communication.

When a client sends a "chat message", it is broadcasted to all other connected clients.

The server listens for the chat message event and broadcasts it using io.emit().

2. Node.js Challenge: Implement a Basic API Rate Limiting Middleware
Problem: Implement rate limiting for an API in Node.js, restricting the number of requests an individual IP can make in a specified time window (e.g., 10 requests per minute).

Solution:

const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');

// Create a rate limiter for the API
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute window
  max: 10, // Limit each IP to 10 requests per windowMs
  message: 'Too many requests, please try again later.',
});

app.use(limiter);

// Example route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


Explanation:

express-rate-limit is used to create a rate limiter that restricts each IP to 10 requests per minute.

If a user exceeds the limit, the server responds with a 429 Too Many Requests status.

3. Node.js Challenge: Implement a Simple To-Do List API (CRUD Operations)
Problem: Implement a simple To-Do List API that supports the following operations:

Create a to-do item (POST)

Read all to-do items (GET)

Update a to-do item (PUT)

Delete a to-do item (DELETE)

Use MongoDB for storing the to-do items.

Solution:
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/todolist', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// To-Do model
const Todo = mongoose.model('Todo', new mongoose.Schema({
  title: String,
  completed: Boolean,
}));

// Create a new to-do
app.post('/todos', async (req, res) => {
  const { title } = req.body;
  const newTodo = new Todo({
    title,
    completed: false,
  });
  await newTodo.save();
  res.status(201).json(newTodo);
});

// Get all to-dos
app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

// Update a to-do
app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const todo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true });
  if (!todo) {
    return res.status(404).json({ message: 'To-do not found' });
  }
  res.status(200).json(todo);
});

// Delete a to-do
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndDelete(id);
  if (!todo) {
    return res.status(404).json({ message: 'To-do not found' });
  }
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


Explanation:

MongoDB is used to persist to-do items, with basic CRUD operations.

The API supports creating, reading, updating, and deleting to-do items.



4. Node.js Challenge: Implementing a Simple File Compression Service
Problem: Create a service that takes a text file, compresses its content using gzip compression, and returns the compressed file.

Solution:
const fs = require('fs');
const zlib = require('zlib');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/compress') {
    const filePath = path.join(__dirname, 'file.txt');
    const gzip = zlib.createGzip();
    const input = fs.createReadStream(filePath);
    const output = fs.createWriteStream(path.join(__dirname, 'file.txt.gz'));

    res.writeHead(200, { 'Content-Type': 'application/gzip' });

    input.pipe(gzip).pipe(output);
    output.on('finish', () => {
      res.end('File compressed successfully');
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Compression service running on port 3000');
});


Explanation:

The zlib.createGzip() method is used to compress the file.

The service accepts a POST request to compress the file.txt file into a .gz compressed version.

5. Node.js Challenge: Create a Job Queue with Retries and Delays
Problem: Implement a job queue that processes jobs in a first-in, first-out (FIFO) manner. Each job should be processed asynchronously, and if a job fails, it should be retried after a delay. Implement this using setTimeout for retries.

Solution:

class JobQueue {
  constructor() {
    this.jobs = [];
  }

  addJob(job) {
    this.jobs.push(job);
  }

  processJobs() {
    const processNextJob = () => {
      if (this.jobs.length === 0) return;

      const job = this.jobs.shift();
      job()
        .then(() => {
          console.log('Job completed');
          processNextJob(); // Process the next job
        })
        .catch((err) => {
          console.error('Job failed, retrying...', err);
          setTimeout(() => {
            this.jobs.push(job); // Retry failed job
            processNextJob(); // Continue processing
          }, 2000); // Retry after 2 seconds
        });
    };

    processNextJob();
  }
}

const queue = new JobQueue();

// Example job that fails randomly
const job = () => new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve();
  } else {
    reject('Random failure');
  }
});

queue.addJob(job);
queue.addJob(job);
queue.processJobs();


Explanation:

Jobs are added to a queue, and processed one at a time.

If a job fails (simulated randomly), it is retried after a 2-second delay.

Jobs are processed asynchronously with Promise.

6. Node.js Challenge: Implement a Simple Pub/Sub System
Problem: Implement a basic publish/subscribe (pub/sub) system using EventEmitter. Publishers send messages, and subscribers receive and process these messages.

Solution:
const EventEmitter = require('events');

class PubSubSystem extends EventEmitter {
  publish(channel, message) {
    this.emit(channel, message);
  }

  subscribe(channel, listener) {
    this.on(channel, listener);
  }
}

const pubSub = new PubSubSystem();

// Subscriber 1
pubSub.subscribe('news', (msg) => {
  console.log('Subscriber 1 received:', msg);
});

// Subscriber 2
pubSub.subscribe('news', (msg) => {
  console.log('Subscriber 2 received:', msg);
});

// Publisher
setTimeout(() => {
  pubSub.publish('news', 'Breaking News: Node.js is awesome!');
}, 1000);


Explanation:

The PubSubSystem class extends EventEmitter and provides publish and subscribe methods.

Publishers send messages on a channel (news in this case), and subscribers listen to those channels.

1. Node.js Challenge: Implementing a Simple Task Scheduler
Problem: Create a task scheduler in Node.js that allows you to schedule tasks at a future time or at regular intervals (like cron jobs). The scheduler should execute tasks asynchronously.

Solution:

const schedule = require('node-schedule');

const taskScheduler = () => {
  // Schedule a task to run every minute
  const job = schedule.scheduleJob('* * * * *', () => {
    console.log('Task executed at:', new Date());
  });

  // Schedule a task to run once at a specific time
  const oneTimeJob = schedule.scheduleJob(new Date(Date.now() + 5000), () => {
    console.log('One-time task executed at:', new Date());
  });
};

taskScheduler();


Explanation:

node-schedule is used to schedule tasks.

The first job runs every minute, and the second one runs once after a 5-second delay.

2. Node.js Challenge: Create a Simple Reverse Proxy
Problem: Build a simple reverse proxy using Node.js that forwards requests from a client to a target server. You should also implement load balancing where requests are distributed evenly between multiple backend servers.

Solution:

const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});
const servers = [
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:3003'
];
let currentIndex = 0;

const server = http.createServer((req, res) => {
  // Load balance between backend servers
  const targetServer = servers[currentIndex % servers.length];
  currentIndex++;

  console.log(`Proxying request to ${targetServer}`);
  proxy.web(req, res, { target: targetServer });
});

server.listen(3000, () => {
  console.log('Reverse proxy server listening on port 3000');
});

Explanation:

http-proxy is used to create the reverse proxy.

Requests are distributed across multiple backend servers in a round-robin manner using the currentIndex variable.


3. Node.js Challenge: Implementing a Simple Session Management System
Problem: Create a session management system in Node.js that assigns a unique session ID to each client. The system should store session data in memory and allow session expiration after a certain period of inactivity.
Solution:
const express = require('express');
const app = express();
const sessionStore = {}; // In-memory session store
const SESSION_TIMEOUT = 60000; // 1-minute session timeout

const generateSessionId = () => {
  return Math.random().toString(36).substr(2, 9); // Simple session ID generation
};

const createSession = (req, res, next) => {
  const sessionId = req.headers['x-session-id'] || generateSessionId();
  req.sessionId = sessionId;

  if (!sessionStore[sessionId]) {
    sessionStore[sessionId] = {
      lastActivity: Date.now(),
      data: {},
    };
  }

  sessionStore[sessionId].lastActivity = Date.now();

  // Expire session if last activity was more than SESSION_TIMEOUT ago
  setTimeout(() => {
    if (Date.now() - sessionStore[sessionId].lastActivity > SESSION_TIMEOUT) {
      delete sessionStore[sessionId];
      console.log('Session expired:', sessionId);
    }
  }, SESSION_TIMEOUT);

  next();
};

app.use(createSession);

app.get('/', (req, res) => {
  res.json({ message: 'Session created', sessionId: req.sessionId });
});

app.listen(3000, () => {
  console.log('Session management service running on port 3000');
});

Explanation:

A unique session ID is created for each client, stored in an in-memory store (sessionStore), and expires after the SESSION_TIMEOUT period of inactivity.
The createSession middleware ensures that each request checks and updates session activity.

4. Node.js Challenge: Building a Simple File Upload API
Problem: Create an API that allows clients to upload files (e.g., images, PDFs) to the server. Store the uploaded files in a directory, and return a URL to access the file after the upload.

Solution:

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up multer storage and file name configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Save files to the 'uploads' directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({
    message: 'File uploaded successfully',
    fileUrl: `/uploads/${req.file.filename}`,
  });
});

app.use('/uploads', express.static('uploads')); // Serve files in 'uploads' directory

app.listen(3000, () => {
  console.log('File upload service running on port 3000');
});

Explanation:

Multer is used for handling multipart/form-data requests (file uploads).

The file is saved in the uploads directory and a URL to access it is returned in the response.

5. Node.js Challenge: Implementing Caching in API Requests
Problem: Implement caching in an API where frequently requested data is stored in memory. If the data has been requested recently, serve it from the cache instead of fetching it again from the database.

Solution:
const express = require('express');
const app = express();
const cache = {};

const fetchDataFromDatabase = (id) => {
  // Simulate fetching data from a database
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data for ID ${id}`);
    }, 2000); // Simulate database delay
  });
};

app.get('/data/:id', async (req, res) => {
  const { id } = req.params;

  // Check if data is cached
  if (cache[id]) {
    console.log('Serving from cache');
    return res.json({ data: cache[id], source: 'cache' });
  }

  // If data is not cached, fetch from the database
  console.log('Fetching from database');
  const data = await fetchDataFromDatabase(id);
  cache[id] = data; // Store data in cache
  res.json({ data, source: 'database' });
});

app.listen(3000, () => {
  console.log('API server with caching running on port 3000');
});

Explanation:

A simple cache is implemented using an in-memory object (cache).

The API checks the cache before fetching data from the database, improving performance for frequent requests.

6. Node.js Challenge: Building a Simple Distributed Task Queue with Redis
Problem: Implement a simple distributed task queue where workers can pick up tasks from a queue in Redis. The worker should process tasks asynchronously, and the task results should be stored in Redis.

Solution:
const redis = require('redis');
const client = redis.createClient();
const workerQueue = 'taskQueue';

// Producer (adds tasks to the queue)
const addTaskToQueue = (taskId, taskData) => {
  client.rpush(workerQueue, JSON.stringify({ taskId, taskData }));
  console.log(`Task ${taskId} added to the queue`);
};

// Consumer (worker that processes tasks)
const processTasks = () => {
  setInterval(() => {
    client.lpop(workerQueue, (err, task) => {
      if (task) {
        const { taskId, taskData } = JSON.parse(task);
        console.log(`Processing task ${taskId}:`, taskData);

        // Simulate task processing and store result in Redis
        client.set(`taskResult:${taskId}`, `Processed: ${taskData}`);
      }
    });
  }, 1000); // Process tasks every second
};

// Start worker
processTasks();

// Add tasks to the queue
addTaskToQueue(1, 'Task data 1');
addTaskToQueue(2, 'Task data 2');
addTaskToQueue(3, 'Task data 3');


Explanation:

The Producer adds tasks to a Redis queue using rpush.

The Consumer (worker) uses lpop to pull tasks from the queue and process them asynchronously.

After processing, the result is stored in Redis for later retrieval.
































