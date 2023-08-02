// vite.config.js
import { defineConfig } from "file:///C:/Users/User/Desktop/week3_RWD%E4%BD%9C%E6%A5%AD/node_modules/vite/dist/node/index.js";
import { ViteEjsPlugin } from "file:///C:/Users/User/Desktop/week3_RWD%E4%BD%9C%E6%A5%AD/node_modules/vite-plugin-ejs/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "file:///C:/Users/User/Desktop/week3_RWD%E4%BD%9C%E6%A5%AD/node_modules/glob/dist/mjs/index.js";
import liveReload from "file:///C:/Users/User/Desktop/week3_RWD%E4%BD%9C%E6%A5%AD/node_modules/vite-plugin-live-reload/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/User/Desktop/week3_RWD%E4%BD%9C%E6%A5%AD/vite.config.js";
function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("pages/")) {
          const newFileName = fileName.slice("pages/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: "/hex_week3_RWD/",
  plugins: [
    liveReload(["./layout/**/*.ejs", "./pages/**/*.ejs", "./pages/**/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin()
  ],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "pages/index.html"
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync("pages/**/*.html").map((file) => [
          path.relative("pages", file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      )
    },
    outDir: "dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxcd2VlazNfUldEXHU0RjVDXHU2OTZEXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxcd2VlazNfUldEXHU0RjVDXHU2OTZEXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Avd2VlazNfUldEJUU0JUJEJTlDJUU2JUE1JUFEL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBWaXRlRWpzUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tZWpzJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZ2xvYiB9IGZyb20gJ2dsb2InO1xuXG5pbXBvcnQgbGl2ZVJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1saXZlLXJlbG9hZCc7XG5cbmZ1bmN0aW9uIG1vdmVPdXRwdXRQbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ21vdmUtb3V0cHV0JyxcbiAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgYXBwbHk6ICdidWlsZCcsXG4gICAgYXN5bmMgZ2VuZXJhdGVCdW5kbGUob3B0aW9ucywgYnVuZGxlKSB7XG4gICAgICBmb3IgKGNvbnN0IGZpbGVOYW1lIGluIGJ1bmRsZSkge1xuICAgICAgICBpZiAoZmlsZU5hbWUuc3RhcnRzV2l0aCgncGFnZXMvJykpIHtcbiAgICAgICAgICBjb25zdCBuZXdGaWxlTmFtZSA9IGZpbGVOYW1lLnNsaWNlKCdwYWdlcy8nLmxlbmd0aCk7XG4gICAgICAgICAgYnVuZGxlW2ZpbGVOYW1lXS5maWxlTmFtZSA9IG5ld0ZpbGVOYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLy8gYmFzZSBcdTc2ODRcdTVCRUJcdTZDRDVcdUZGMUFcbiAgLy8gYmFzZTogJy9SZXBvc2l0b3J5IFx1NzY4NFx1NTQwRFx1N0EzMS8nXG4gIGJhc2U6ICcvaGV4X3dlZWszX1JXRC8nLFxuICBwbHVnaW5zOiBbXG4gICAgbGl2ZVJlbG9hZChbJy4vbGF5b3V0LyoqLyouZWpzJywgJy4vcGFnZXMvKiovKi5lanMnLCAnLi9wYWdlcy8qKi8qLmh0bWwnXSksXG4gICAgVml0ZUVqc1BsdWdpbigpLFxuICAgIG1vdmVPdXRwdXRQbHVnaW4oKSxcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgLy8gXHU1NTVGXHU1MkQ1IHNlcnZlciBcdTY2NDJcdTk4MTBcdThBMkRcdTk1OEJcdTU1NUZcdTc2ODRcdTk4MDFcdTk3NjJcbiAgICBvcGVuOiAncGFnZXMvaW5kZXguaHRtbCcsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgZ2xvYlxuICAgICAgICAgIC5zeW5jKCdwYWdlcy8qKi8qLmh0bWwnKVxuICAgICAgICAgIC5tYXAoKGZpbGUpID0+IFtcbiAgICAgICAgICAgIHBhdGgucmVsYXRpdmUoJ3BhZ2VzJywgZmlsZS5zbGljZSgwLCBmaWxlLmxlbmd0aCAtIHBhdGguZXh0bmFtZShmaWxlKS5sZW5ndGgpKSxcbiAgICAgICAgICAgIGZpbGVVUkxUb1BhdGgobmV3IFVSTChmaWxlLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICAgICBdKVxuICAgICAgKSxcbiAgICB9LFxuICAgIG91dERpcjogJ2Rpc3QnLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStTLFNBQVMsb0JBQW9CO0FBQzVVLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sVUFBVTtBQUNqQixTQUFTLFlBQVk7QUFFckIsT0FBTyxnQkFBZ0I7QUFONEosSUFBTSwyQ0FBMkM7QUFRcE8sU0FBUyxtQkFBbUI7QUFDMUIsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsTUFBTSxlQUFlLFNBQVMsUUFBUTtBQUNwQyxpQkFBVyxZQUFZLFFBQVE7QUFDN0IsWUFBSSxTQUFTLFdBQVcsUUFBUSxHQUFHO0FBQ2pDLGdCQUFNLGNBQWMsU0FBUyxNQUFNLFNBQVMsTUFBTTtBQUNsRCxpQkFBTyxRQUFRLEVBQUUsV0FBVztBQUFBLFFBQzlCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBO0FBQUEsRUFHMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsV0FBVyxDQUFDLHFCQUFxQixvQkFBb0IsbUJBQW1CLENBQUM7QUFBQSxJQUN6RSxjQUFjO0FBQUEsSUFDZCxpQkFBaUI7QUFBQSxFQUNuQjtBQUFBLEVBQ0EsUUFBUTtBQUFBO0FBQUEsSUFFTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTyxPQUFPO0FBQUEsUUFDWixLQUNHLEtBQUssaUJBQWlCLEVBQ3RCLElBQUksQ0FBQyxTQUFTO0FBQUEsVUFDYixLQUFLLFNBQVMsU0FBUyxLQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsS0FBSyxRQUFRLElBQUksRUFBRSxNQUFNLENBQUM7QUFBQSxVQUM3RSxjQUFjLElBQUksSUFBSSxNQUFNLHdDQUFlLENBQUM7QUFBQSxRQUM5QyxDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
