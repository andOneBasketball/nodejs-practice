import { config } from "dotenv";

config();

console.log("Hello from TypeScript demo");

const sum = (a: number, b: number): number => a + b;
console.log(`2 + 3 = ${sum(2, 3)}`);

async function main(): Promise<void> {
    console.log("Environment variables loaded (if any). Ready.");
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
