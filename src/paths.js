import fs from "fs";
import path from "path";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

export default {
  scssModulesPath: resolveApp("src/app"),
  scssPath: resolveApp("src/scss")
};
