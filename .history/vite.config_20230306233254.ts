import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      resolvers: [VantResolver()],
    }),
  ],
});
