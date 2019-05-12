const MinecraftAddonBuilder = require("minecraft-addon-toolchain/v1");

const builder = new MinecraftAddonBuilder("minecraft-addon-example-blocks-items");

module.exports = builder.configureEverythingForMe();
