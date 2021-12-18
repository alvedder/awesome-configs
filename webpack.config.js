import {resolve} from "path";
import {cwd} from "process";

export default {
    entry: "./src/index.js",
    mode: "production",
    target: "node",
    output: {
        filename: "main.cjs",
        path: resolve(cwd(), "dist"),
        clean: true,
        asyncChunks: false,
    },
};
