(window.webpackJsonp=window.webpackJsonp||[]).push([["Examples"],{1944:function(e,a,t){},"24c9":function(e,a,t){"use strict";t("1944")},a451:function(e,a,t){"use strict";t.r(a);var n=t("3041"),i=t("c87a"),s={components:{SidenavLayout:n.default,ImageSlider:i.c},data:function(){return{readme:function(){return"# Examples\n\nSo what can we visualize that has meaning?\n\nLet's take a look at some of the layouts D3 provides\n\n## Denrograms\n\nDendrograms are node-link diagrams that place leaf nodes of the tree at the same depth.\n\nUseful when all the leaves should be at the same level, such as for `hierarchical clustering` or `phylogenetic tree diagrams`.\n\n## Tidy Trees\n\nProduces _tidy_ node-link diagrams of trees using the `Reingold–Tilford “tidy” algorithm`, improved to run in linear time by `Buchheim et al`. Tidy trees are typically more compact than `dendrograms`.\n\n## Radial Variants\n\nIn alot of cases, we can take a linear display, such as dendrograms or tidy trees, and wrap them in a circular fashion.\n\n## Treemaps\n\nWebpack has a nice feature to export out the [stats](https://webpack.js.org/api/stats) of your build\n\nWhen compiling source code with webpack, users can generate a JSON file containing statistics about modules. These statistics can be used to analyze an application's dependency graph as well as to optimize compilation speed.\n\nTreemaps were invented by [Ben Shneiderman](https://en.wikipedia.org/wiki/Ben_Shneiderman), and works as a great way to analyze the proportion of quantity between nodes.\n\nWhen the color and size dimensions are correlated in some way with the tree structure, one can often easily see patterns that would be difficult to spot in other ways, such as if a certain color is particularly relevant. A second advantage of treemaps is that, by construction, they make efficient use of space. As a result, they can legibly display thousands of items on the screen simultaneously.\n\nThis can be incredibly useful for the developer to determine where optimization is needed, such as tree shaking, and bundle sizes.\n\n## Partitions\n\nThe partition layout produces adjacency diagrams: a space-filling variant of a node-link tree diagram. Rather than drawing a link between parent and child in the hierarchy, nodes are drawn as solid areas (either arcs or rectangles), and their placement relative to other nodes reveals their position in the hierarchy. The size of the nodes encodes a quantitative dimension that would be difficult to show in a node-link diagram.\n\n## Circle Packing\n\nEnclosure diagrams use containment (nesting) to represent a hierarchy. The size of the leaf circles encodes a quantitative dimension of the data. The enclosing circles show the approximate cumulative size of each subtree, but due to wasted space there is some distortion; only the leaf nodes can be compared accurately. Although circle packing does not use space as efficiently as a treemap, the “wasted” space more prominently reveals the hierarchical structure.\n"},images:[{url:"https://i.stack.imgur.com/iLsgy.png",title:"Cluster Dendrogram"},{url:"https://architect-api.readthedocs.io/en/latest/_images/node-link-tree.png",title:"Tidy Tree"},{url:"/static/images/radial-tree.png",title:"Radial Tidy Tree"},{url:"/static/images/starburst.gif",title:"Starburst"},i.d,{url:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/imgs/js-profile.png",title:"Flame Graph using Partition Layout"},{url:"https://www.d3indepth.com/img/layouts/pack.png",title:"Circle Packing"}],curIndex:0}}},r=(t("24c9"),t("2877")),o=Object(r.a)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("sidenav-layout",{attrs:{readme:e.readme}},[t("div",{staticClass:"examples h-full"},[t("image-slider",{attrs:{items:e.images,"active-index":e.curIndex},on:{"update:activeIndex":function(a){e.curIndex=a},"update:active-index":function(a){e.curIndex=a}}})],1)])}),[],!1,null,"6cab4258",null);a.default=o.exports}}]);