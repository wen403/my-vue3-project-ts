import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from "path";
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [VantResolver()],
      dts: 'src/components.d.ts',
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        // 'vue-router',
        'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        //  '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unocss
    Unocss(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  }
});
