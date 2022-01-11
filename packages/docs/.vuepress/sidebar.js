const { fs, path } = require("@vuepress/shared-utils");

const readdir = (dir, base) => {
  return fs
    .readdirSync(path.resolve(__dirname, dir))
    .map((filename) => base + filename.slice(0, -3))
    .sort();
};

module.exports = [
  {
    title: "Introduction",
    collapsable: true,
    sidebarDepth: 0,
    children: ["/"]
  },
  {
    title: "Styles",
    collapsable: true,
    sidebarDepth: 0,
    children: readdir("../styles", "styles/")
  },
  {
    title: "Components",
    collapsable: true,
    sidebarDepth: 0,
    children: readdir("../components", "components/")
  }
];
