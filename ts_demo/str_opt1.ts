import { toUtf8Bytes, zeroPadValue, getBytes } from "ethers";

const orderIdStr = "PAYnqZbkpL0CgCGRD4";
console.log("orderIdStr:", orderIdStr);
const bytes = toUtf8Bytes(orderIdStr);

// zeroPadValue 返回十六进制字符串
const paddedHex = zeroPadValue(bytes, 32);
console.log("Padded Hex:", paddedHex);

// 转回 Uint8Array
const orderId = getBytes(paddedHex);
console.log("Uint8Array:", orderId);