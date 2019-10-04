const MinecraftAddonBuilder = require("minecraft-addon-toolchain/v1");
const JSONValidator = require('minecraft-addon-toolchain-jsonvalidator');

const builder = new MinecraftAddonBuilder("example-blocks");
builder.addPlugin(new JSONValidator());

module.exports = builder.configureEverythingForMe();
