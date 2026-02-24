import { ethers } from "ethers";

function stringToBytes32RightPad(str) {
    const bytes = ethers.toUtf8Bytes(str);
    if (bytes.length > 32) throw new Error("String too long");
    const padded = new Uint8Array(32);
    padded.set(bytes); // 默认右边全是 0
    return ethers.hexlify(padded);
}

const orderId = ethers.zeroPadValue(
  ethers.toUtf8Bytes("MERCHANT_ORD1"), // 先转 utf8 bytes
  32                                   // 再补齐到 32 字节
);
console.log(orderId);
console.log(ethers.zeroPadValue("0x4d45524348414e545f4f524431", 32))
console.log(stringToBytes32RightPad("MERCHANT_ORD1"));