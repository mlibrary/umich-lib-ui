const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync

console.log("\nBuilding ES modules ...");
execSync(`babel src -d es --presets=@babel/preset-react --plugins=transform-object-rest-spread,transform-class-properties`);