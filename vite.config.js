import react from "@vitejs/plugin-react-swc";
import { json } from "react-router-dom";
import { defineConfig } from "vite";
import envCompatible from "vite-plugin-env-compatible";
// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  plugins: [react()],
});
