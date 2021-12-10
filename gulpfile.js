const { src, dest, task, series } = require("gulp");
const posthtml = require("gulp-posthtml");
const posthtmlInlineAssets = require("posthtml-inline-assets");
const inlineFonts = require("gulp-inline-fonts");
const inlineimage = require("gulp-inline-image");

let inline_fonts1 = function () {
  return src(["src/assets/fonts/IBMPlexMonoRegular.woff"])
    .pipe(inlineFonts({ name: "IBMPlexMonoRegular" }))
    .pipe(dest("generated-fonts"));
};

let inline_fonts2 = function () {
  return src(["src/assets/fonts/IBMPlexMono500.woff"])
    .pipe(inlineFonts({ name: "IBMPlexMono500" }))
    .pipe(dest("generated-fonts"));
};

let inline_fonts3 = function () {
  return src(["src/assets/fonts/IBMPlexMono600.woff"])
    .pipe(inlineFonts({ name: "IBMPlexMono600" }))
    .pipe(dest("generated-fonts"));
};

let inline_fonts4 = function () {
  return src(["src/assets/fonts/WorkSansRegular.woff"])
    .pipe(inlineFonts({ name: "WorkSansRegular" }))
    .pipe(dest("generated-fonts"));
};

let inline_fonts5 = function () {
  return src(["src/assets/fonts/WorkSans500.woff"])
    .pipe(inlineFonts({ name: "WorkSans500" }))
    .pipe(dest("generated-fonts"));
};

let inline_fonts6 = function () {
  return src(["src/assets/fontawesome/fonts/fontawesome-webfont.woff"])
    .pipe(inlineFonts({ name: "FontAwesome" }))
    .pipe(dest("generated-fonts"));
};

let inline_imgs = function () {
  return src("./css/*.css").pipe(inlineimage()).pipe(dest("generated-images"));
};

let inline_js_css = function () {
  return src("src/*.html")
    .pipe(
      posthtml([
        posthtmlInlineAssets({
          cwd: "src",
        }),
      ])
    )
    .pipe(dest("dist/"));
};

let copy_book = function () {
  return src("./src/The-Book-of-Swarm.pdf").pipe(dest("./dist/"));
};

let copy_whitepaper = function () {
  return src("./src/swarm-whitepaper.pdf").pipe(dest("./dist/"));
};

let copy_ics = function () {
  return src("./src/Swarm_One_Event.ics").pipe(dest("./dist/"));
};

let copy_ics2 = function () {
  return src("./src/swarm_gather_event.ics").pipe(dest("./dist/"));
};

// exports.inline_js_css = inline_js_css;
exports.default = series(
  inline_fonts1,
  inline_fonts2,
  inline_fonts3,
  inline_fonts4,
  inline_fonts5,
  inline_fonts6,
  inline_imgs,
  inline_js_css,
  copy_book,
  copy_whitepaper,
  copy_ics,
  copy_ics2
);
