import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib-compres.mjs.txt");
console.info(result.toString());

const result = zlib.unzipSync(source);
console.info(result.toString());