// main.js
(function ($) {
  "use strict";

  /* ==========================================================================
     Theme toggle
     ========================================================================== */

  // 获取本地存储中的主题
  const getStoredTheme = () => localStorage.getItem("theme");

  // 设置主题并应用到 document root
  const setTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }

    // 更换主题图标
    $("#theme-icon")
      .removeClass("fa-sun fa-moon")
      .addClass(theme === "dark" ? "fa-moon" : "fa-sun");

    // Plotly 主题切换
    if (typeof Plotly !== "undefined") {
      const newTheme = theme === "dark" ? "plotly_dark" : "plotly";
      const plots = document.querySelectorAll(".js-plotly-plot");
      plots.forEach((plot) => {
        Plotly.relayout(plot, { template: newTheme });
      });
    }
  };

  // 主题切换函数
  const toggleTheme = (e) => {
    e.preventDefault();
    const currentTheme = getStoredTheme() || getPreferredTheme();
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  // 获取系统偏好
  const getPreferredTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  // 页面加载时设置主题
  const initTheme = () => {
    const storedTheme = getStoredTheme();
    const useTheme = storedTheme || getPreferredTheme();
    setTheme(useTheme);

    // 响应系统主题变化（可选）
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!getStoredTheme()) {
        setTheme(e.matches ? "dark" : "light");
      }
    });
  };

  // 初始化主题切换器监听器
  $(document).ready(function () {
    initTheme();
    $("#theme-toggle").on("click", toggleTheme);
  });

})(jQuery);
