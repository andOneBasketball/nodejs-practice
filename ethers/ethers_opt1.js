import { ethers } from "ethers";

function drawPets(random) {
  const DRAWS = 12;
  let pool = [];
  // poolTemplate: 0=Red,1=Blue,2=Yellow
  for (let i = 0; i < 8; i++) pool.push(0);
  for (let i = 0; i < 8; i++) pool.push(1);
  for (let i = 0; i < 8; i++) pool.push(2);

  let counts = [0, 0, 0];
  let remaining = pool.length;

  for (let i = 0; i < DRAWS; i++) {
    const r = ethers.keccak256(
      ethers.solidityPacked(["uint256", "uint8"], [random, i])
    );
    const idx = Number(BigInt(r) % BigInt(remaining));
    const color = pool[idx];
    counts[color]++;
    pool[idx] = pool[remaining - 1];
    remaining--;
  }

  return counts;
}

function simulate(trials = 10000) {
  let totalCounts = [0, 0, 0];

  for (let t = 0; t < trials; t++) {
    const random = ethers.hexlify(ethers.randomBytes(32)); // 模拟 VRF 随机数
    const counts = drawPets(random);
    totalCounts[0] += counts[0];
    totalCounts[1] += counts[1];
    totalCounts[2] += counts[2];
  }

  console.log(`模拟次数: ${trials}`);
  console.log(`红色平均: ${(totalCounts[0] / trials).toFixed(2)}`);
  console.log(`蓝色平均: ${(totalCounts[1] / trials).toFixed(2)}`);
  console.log(`黄色平均: ${(totalCounts[2] / trials).toFixed(2)}`);
}

simulate(10000);
