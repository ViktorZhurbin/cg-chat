const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
        },
    },
    babel: {
        plugins: [
            [
                "babel-plugin-styled-components",
                {
                    ssr: false,
                    fileName: false,
                },
            ],
        ],
    },
};
