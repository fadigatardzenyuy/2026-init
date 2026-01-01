#!/usr/bin/env node

/**
 * 🚀 System Initialization: Year 2026
 * Enhanced Version: 2026.1.1
 */

const stdout = process.stdout;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// --- Constants & Config ---
const COLORS = {
    green: "\x1b[32m",
    reset: "\x1b[0m",
    dim: "\x1b[2m",
    bright: "\x1b[1m",
    cyan: "\x1b[36m",
    yellow: "\x1b[33m",
    magenta: "\x1b[35m",
    red: "\x1b[31m",
};

const ART = `
   ___  ___  ____   __   
  |__ \\/ _ \\|___ \\ / /   
  __/ / | | | __) / /_   
 / __/| | | |/ __/ '_ \\  
/____/ \\___/|_____|_(_)  
`;

const BOOT_STEPS = [
    { msg: "Connecting to 2026 Mainframe...", time: 600 },
    { msg: "Deprecating 2025 bad habits...", time: 800 },
    { msg: "npm install new-opportunities --save-dev", time: 1200 },
    { msg: "Compiling success metrics...", time: 700 },
    { msg: "Optimizing caffeine intake levels...", time: 500 },
];

// --- UI Components ---
const UI = {
    clear: () => {
        console.clear();
    },

    divider: () => {
        console.log(COLORS.dim + "--------------------------------------------------" + COLORS.reset);
    },

    typewriter: async (text, speed = 30) => {
        for (const char of text) {
            stdout.write(COLORS.bright + COLORS.green + char + COLORS.reset);
            await wait(speed);
        }
        stdout.write("\n");
    },

    progressBar: async (label, duration) => {
        const width = 30;
        const startTime = Date.now();

        return new Promise((resolve) => {
            const interval = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const filledWidth = Math.floor(progress * width);
                const emptyWidth = width - filledWidth;

                const bar = "█".repeat(filledWidth) + "░".repeat(emptyWidth);
                const percent = Math.floor(progress * 100);

                stdout.clearLine();
                stdout.cursorTo(0);
                stdout.write(`${COLORS.cyan}[SYSTEM]${COLORS.reset} ${label.padEnd(40)} [${bar}] ${percent}%`);

                if (progress >= 1) {
                    clearInterval(interval);
                    stdout.write("\n");
                    resolve();
                }
            }, 50);
        });
    },

    deepLogs: async (count = 15) => {
        const logs = [
            "MEMORY_CHECK: 0x7FFF8000 OK",
            "KERNEL_INIT: PROTOCOL_2026 LOADED",
            "SECURITY_SCAN: VULNERABILITIES_ZERO",
            "RESOURCE_ALLOC: UNLIMITED_POTENTIAL",
            "UI_RENDERER: VORTEX_ENGINE_ACTIVE",
            "NETWORK_SYNC: NEW_REALITY_ESTABLISHED",
        ];

        for (let i = 0; i < count; i++) {
            const log = logs[Math.floor(Math.random() * logs.length)];
            const addr = `0x${Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase()}`;
            console.log(`${COLORS.dim}[${addr}] ${COLORS.yellow}${log}${COLORS.reset}`);
            await wait(Math.random() * 100 + 20);
        }
    }
};

// --- Main Sequence ---
async function main() {
    UI.clear();

    // Fancy Logo Intro
    console.log(COLORS.magenta + COLORS.bright + ART + COLORS.reset);
    UI.divider();

    await wait(500);
    console.log(`${COLORS.bright}INITIALIZING 2026_CORE_SYSTEMS...${COLORS.reset}\n`);

    // Phase 1: Deep System Logs (Hacker vibes)
    await UI.deepLogs(12);
    console.log(`\n${COLORS.green}✅ CORE SYSTEMS STABLE${COLORS.reset}\n`);

    UI.divider();

    // Phase 2: Functional Steps with Progress Bars
    for (const step of BOOT_STEPS) {
        await UI.progressBar(step.msg, step.time + Math.random() * 400);
    }

    UI.divider();
    await wait(500);

    // Phase 3: Final Success Message
    const finalMsg = "System Online. Welcome to 2026. Let's ship code. 🚀";
    await UI.typewriter(finalMsg, 40);

    console.log("\n" + COLORS.dim + "Final Commit: 2026.1.1-stable" + COLORS.reset);
}

main().catch(err => {
    console.error(`${COLORS.red}CRITICAL_FAILURE: ${err.message}${COLORS.reset}`);
    process.exit(1);
});