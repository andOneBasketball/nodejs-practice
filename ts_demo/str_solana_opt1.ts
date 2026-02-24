function stringToBytes32(str: string): Uint8Array {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);

    if (bytes.length > 32) {
        throw new Error("字符串过长");
    }

    const result = new Uint8Array(32);
    // 从后面开始填充，前面自动为 0
    result.set(bytes, 32 - bytes.length);
    return result;
}

const orderId = stringToBytes32("PAYnqZbkpL0CgCGRD4");
console.log("Array:", Array.from(orderId));
console.log("Hex:", Buffer.from(orderId).toString("hex"));