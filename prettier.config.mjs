// prettier.config.mjs
export default {
    plugins: [
      "@trivago/prettier-plugin-sort-imports", 
      "@prettier/plugin-php", 
      "@prettier/plugin-tailwindcss", 
      "@prettier/plugin-html", 
      "@prettier/plugin-xml", 
      "@prettier/plugin-yaml", 
      "@prettier/plugin-markdown"
    ],
    // 4 space tabs for all code
    tabWidth: 4,
    useTabs: false,
    
    // Common formatting options
    semi: true,
    singleQuote: false,
    trailingComma: "es5",
    bracketSpacing: true,
    arrowParens: "avoid",
    endOfLine: "lf",
    printWidth: 80,
    
    // Plugin specific configurations
    importOrder: [
      "^react",
      "^next",
      "^@core/(.*)$",
      "^@server/(.*)$", 
      "^@ui/(.*)$",
      "^[./]"
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true
};