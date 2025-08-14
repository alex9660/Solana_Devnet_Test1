// airdrop.js
// Script to request SOL from the Solana Devnet faucet
// Author: YOUR_GITHUB_USERNAME

const { exec } = require("child_process");

const WALLET_ADDRESS = "YOUR_WALLET_PUBLIC_KEY"; // Replace with your wallet address
const AMOUNT = 2; // Amount of SOL to request

console.log(`🚀 Requesting ${AMOUNT} SOL from Solana Devnet faucet for wallet: ${WALLET_ADDRESS}`);

exec(`solana airdrop ${AMOUNT} ${WALLET_ADDRESS} --url https://api.devnet.solana.com`, (error, stdout, stderr) => {
    if (error) {
        console.error(`❌ Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`⚠️ Warning: ${stderr}`);
    }
    console.log(`✅ Success:\n${stdout}`);
});
