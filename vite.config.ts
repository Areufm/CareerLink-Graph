import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { viteMockServe } from "vite-plugin-mock";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { visualizer } from "rollup-plugin-visualizer";
import viteImagemin from "vite-plugin-imagemin";
import viteCompression from "vite-plugin-compression";

const pathSrc = resolve(__dirname, "src");

export default defineConfig({
  resolve: {
    alias: {
      "@": pathSrc,
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "./mock", // 存放mock数据的文件夹
      enable: true, // 是否启用本地 mock
      logger: true, // 启用日志输出，便于调试
    }),
    AutoImport({
      imports: ["vue"],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: "Icon",
        }),
      ],
      dts: resolve(pathSrc, "auto-imports.d.ts"),
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        ElementPlusResolver(),
      ],
      dts: resolve(pathSrc, "components.d.ts"),
    }),
    Icons({
      autoInstall: true,
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: "test.html", //分析图生成的文件名
      open: true, //如果存在本地服务端口，将在打包后自动展示
    }),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 70 },
      pngquant: { quality: [0.8, 0.9] },
      svgo: {
        plugins: [{ removeViewBox: false }],
      },
    }),
    // viteCompression({
    //   algorithm: "gzip", // 使用 gzip 压缩
    //   threshold: 10240, // 超过 10KB 的文件才会压缩
    //   ext: ".gz", // 压缩文件的扩展名
    // }),
  ],
  // 依赖优化配置
  optimizeDeps: {
    include: ["axios", "echarts", "element-plus"], // 强制预构建的依赖
    exclude: [""], // 排除不需要预构建的依赖
  },
  build: {
    minify: "terser", // 使用 terser 进行压缩
    terserOptions: {
      compress: {
        // 移除所有 console 语句
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false, // 移除所有注释
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // if (id.includes("/element-plus/")) return "element-plus";
            // if (id.includes("/echarts/")) return "echarts";
            // // 合并高频小库
            // if (
            //   id.includes("/lodash/") ||
            //   id.includes("/dayjs/") ||
            //   id.includes("/vue/")
            // ) {
            //   return "vendor-core";
            // }
            // return "vendor";

            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        // experimentalMinChunkSize: 20000, // 调整最小 chunk 大小
      },
    },
    chunkSizeWarningLimit: 1000, // 调整警告阈值
    assetsInlineLimit: 4096, // 4KB 以下文件转 base64
    cssTarget: "chrome80", // 防止 CSS 被转换
  },
});
