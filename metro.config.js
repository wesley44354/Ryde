const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.server = {
    ...config.server,
    enhanceMiddleware: (middleware) => {
        return (req, res, next) => {
            if (req.url.startsWith("/_expo/")) {
                req.url = req.url.replace(/^\/_expo\//, "./_expo/");
            }
            next();
        };
    },
};

module.exports = withNativeWind(config, { input: "./global.css" });
