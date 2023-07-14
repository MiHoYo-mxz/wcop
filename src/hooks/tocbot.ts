import * as tocbot from "tocbot";

export const tocbotHook = () => {
  tocbot.init({
    // Where to render the table of contents.
    tocSelector: ".js-toc",
    // Where to grab the headings to build the table of contents.
    contentSelector: ".js-toc-content",
    // Which headings to grab inside of the contentSelector element.
    headingSelector: "h1, h2, h3",
    // For headings inside relative or absolute positioned containers within content.
    hasInnerContainers: true,
    scrollSmooth: true,
    // Smooth scroll duration.
    scrollSmoothDuration: 600,
    disableTocScrollSync: false,
  });
};

// <div><div class="js-toc"></div></div>
//     <div class="js-toc-content">
//       <h1 id="1">hhhhh</h1>
//       <div class="a"></div>
//       <h1 id="2">eeeeee</h1>
//       <div class="a"></div>
//     </div>
