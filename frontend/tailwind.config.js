export default {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        ai: "0 0 20px rgba(99,102,241,.35), inset 0 0 10px rgba(16,185,129,.25)",
      },
      backgroundImage: {
        "ai-grid":
          "linear-gradient(135deg, rgba(99,102,241,.08) 25%, transparent 25%), linear-gradient(225deg, rgba(99,102,241,.08) 25%, transparent 25%), linear-gradient(45deg, rgba(34,197,94,.08) 25%, transparent 25%), linear-gradient(315deg, rgba(34,197,94,.08) 25%, rgba(255,255,255,0) 25%)",
      },
    },
  },
  plugins: [],
};
