const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const fs = require('fs');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function log(message) {
    console.log(message);
    fs.appendFileSync('debug_result.txt', message + '\n', 'utf8');
}

async function run() {
    // Clear previous log
    fs.writeFileSync('debug_result.txt', '', 'utf8');

    log("Key length: " + (process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.length : "Missing"));

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Dummy model to get client? No, need ModelManager.
        // Actually, the SDK has a way to list models, but it might be on the GoogleGenerativeAI instance or separate.
        // Examining the docs or guessing: usually it's genAI.getGenerativeModel... wait.
        // It's not directly exposed in the high-level `GoogleGenerativeAI` class in some versions.
        // Let's try to just use a known older model or see if we can find the list method.
        // The error message suggests "Call ListModels".

        // Use the API directly if SDK doesn't support it easy? 
        // Or just try "gemini-1.5-flash-latest" or "gemini-1.0-pro-latest".

        // Let's try a few more specific variants first, as listing might require a different client setup.
        const models = [
            "gemini-1.5-flash-latest",
            "gemini-1.5-flash-001",
            "gemini-1.5-pro",
            "gemini-1.5-pro-latest",
            "gemini-1.5-pro-001",
            "gemini-1.0-pro-001",
            "text-embedding-004"
        ];

        for (const modelName of models) {
            log(`Testing model: ${modelName}`);
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("Hello");
                const response = await result.response;
                log(`Success with ${modelName}: ${response.text()}`);
                break;
            } catch (error) {
                log(`Failed with ${modelName}: ${error.message.split(':')[0]} ...`); // Keep short
            }
        }

    } catch (e) {
        log("Fatal error: " + e.message);
    }
}

run();
