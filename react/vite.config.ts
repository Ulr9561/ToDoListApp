import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    /*server: {
        https: {
            key: fs.readFileSync(
                path.resolve(__dirname, "D:/Projets/HTML/ToDoListApp/react/localhost-key.pem"),
            ),
            cert: fs.readFileSync(
                path.resolve(__dirname, "D:/Projets/HTML/ToDoListApp/react/localhost.pem"),
            ),
        },
        host: "0.0.0.0",
    },*/
});