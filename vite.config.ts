import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "vite1deploy",
    server: {
        port: 5173
    },
    preview: {
        port: 8080
    }
});



