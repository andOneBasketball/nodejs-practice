import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { getMint } from "@solana/spl-token";

// 创建连接到主网
const connection = new Connection(clusterApiUrl("mainnet-beta"));

// 查询 USDC Mint 信息
const mintPubkey = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
const mintInfo = await getMint(connection, mintPubkey);

console.log("Mint Info:", mintInfo);
