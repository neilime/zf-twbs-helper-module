(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{73:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return u})),n.d(e,"rightToc",(function(){return v})),n.d(e,"default",(function(){return p}));var l=n(3),i=n(7),t=(n(0),n(91)),s=n(92),r=n.n(s),c=n(93),b=n(94),o={id:"navs",title:"Navs"},u={unversionedId:"rendering/navs",id:"rendering/navs",isDocsHomePage:!1,title:"Navs",description:"Twitter bootstrap Documentation",source:"@site/docs/rendering/navs.mdx",slug:"/rendering/navs",permalink:"/twbs-helper-module/docs/rendering/navs",editUrl:"https://github.com/neilime/twbs-helper-module/edit/master/website/docs/rendering/navs.mdx",version:"current",sidebar:"docsSidebar",previous:{title:"Modal",permalink:"/twbs-helper-module/docs/rendering/modal"},next:{title:"Navbar",permalink:"/twbs-helper-module/docs/rendering/navbar"}},v=[{value:"Base nav",id:"base-nav",children:[]},{value:"Available styles",id:"available-styles",children:[{value:"Horizontal alignment",id:"horizontal-alignment",children:[]},{value:"Vertical",id:"vertical",children:[]},{value:"Tabs",id:"tabs",children:[]},{value:"Pills",id:"pills",children:[]},{value:"Fill and justify",id:"fill-and-justify",children:[]},{value:"Working with flex utilities",id:"working-with-flex-utilities",children:[]}]},{value:"Using dropdowns",id:"using-dropdowns",children:[{value:"Tabs with dropdowns",id:"tabs-with-dropdowns",children:[]},{value:"Pills with dropdowns",id:"pills-with-dropdowns",children:[]}]}],d={rightToc:v};function p(a){var e=a.components,n=Object(i.a)(a,["components"]);return Object(t.b)("wrapper",Object(l.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(t.b)("p",null,Object(t.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navs/"}),"Twitter bootstrap Documentation")),Object(t.b)("h2",{id:"base-nav"},"Base nav"),Object(t.b)("p",null,Object(t.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navs/#base-nav"}),"Twitter bootstrap Documentation")),Object(t.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(t.b)(b.a,{value:"result",mdxType:"TabItem"},r()('<ul class="nav">\n    <li class="&#x20;nav-item">\n        <a class="nav-link&#x20;active" href="&#x23;">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n    </li>\n</ul>\n<nav class="nav">\n    <a class="nav-link&#x20;active" href="&#x23;">Active</a>\n    <a class="nav-link" href="&#x23;">Link</a>\n    <a class="nav-link" href="&#x23;">Link</a>\n    <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n</nav>')),Object(t.b)(b.a,{value:"source",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->navigation()->menu(new \\Laminas\\Navigation\\Navigation([\n    ['label' => 'Active', 'uri' => '#', 'active' => true],\n    ['label' => 'Link', 'uri' => '#'],\n    ['label' => 'Link', 'uri' => '#'],\n    ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n])) . PHP_EOL;\n\necho $this->navigation()->menu()->renderMenu(new \\Laminas\\Navigation\\Navigation([\n    ['label' => 'Active', 'uri' => '#', 'active' => true],\n    ['label' => 'Link', 'uri' => '#'],\n    ['label' => 'Link', 'uri' => '#'],\n    ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n]), ['list' => false]);\n")))),Object(t.b)("h2",{id:"available-styles"},"Available styles"),Object(t.b)("p",null,Object(t.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navs/#available-styles"}),"Twitter bootstrap Documentation")),Object(t.b)("h3",{id:"horizontal-alignment"},"Horizontal alignment"),Object(t.b)("p",null,Object(t.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navs/#horizontal-alignment"}),"Twitter bootstrap Documentation")),Object(t.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(t.b)(b.a,{value:"result",mdxType:"TabItem"},r()('<ul class="justify-content-center&#x20;nav">\n    <li class="&#x20;nav-item">\n        <a class="nav-link&#x20;active" href="&#x23;">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n    </li>\n</ul>\n<ul class="justify-content-end&#x20;nav">\n    <li class="&#x20;nav-item">\n        <a class="nav-link&#x20;active" href="&#x23;">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n    </li>\n</ul>')),Object(t.b)(b.a,{value:"source",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"// Centered with option 'center'\necho $this->navigation()->menu()->renderMenu(new \\Laminas\\Navigation\\Navigation([\n    ['label' => 'Active', 'uri' => '#', 'active' => true],\n    ['label' => 'Link', 'uri' => '#'],\n    ['label' => 'Link', 'uri' => '#'],\n    ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n]), ['centered' => true]) . PHP_EOL;\n\n// Right-aligned with option 'right_aligned'\necho $this->navigation()->menu()->renderMenu(new \\Laminas\\Navigation\\Navigation([\n    ['label' => 'Active', 'uri' => '#', 'active' => true],\n    ['label' => 'Link', 'uri' => '#'],\n    ['label' => 'Link', 'uri' => '#'],\n    ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n]), ['right_aligned' => true]);\n")))),Object(t.b)("h3",{id:"vertical"},"Vertical"),Object(t.b)("p",null,Object(t.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navs/#vertical"}),"Twitter bootstrap Documentation")),Object(t.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(t.b)(b.a,{value:"result",mdxType:"TabItem"},r()('<ul class="flex-column&#x20;nav">\n    <li class="&#x20;nav-item">\n        <a class="nav-link&#x20;active" href="&#x23;">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n    </li>\n</ul>\n<nav class="flex-column&#x20;nav">\n    <a class="nav-link&#x20;active" href="&#x23;">Active</a>\n    <a class="nav-link" href="&#x23;">Link</a>\n    <a class="nav-link" href="&#x23;">Link</a>\n    <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n</nav>')),Object(t.b)(b.a,{value:"source",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation([\n        ['label' => 'Active', 'uri' => '#', 'active' => true],\n        ['label' => 'Link', 'uri' => '#'],\n        ['label' => 'Link', 'uri' => '#'],\n        ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n    ]),\n['vertical' => true]\n) . PHP_EOL;\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation([\n        ['label' => 'Active', 'uri' => '#', 'active' => true],\n        ['label' => 'Link', 'uri' => '#'],\n        ['label' => 'Link', 'uri' => '#'],\n        ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n    ]),\n    [\n        'vertical' => true,\n        'list' => false,\n    ]\n);\n")))),Object(t.b)("h3",{id:"tabs"},"Tabs"),Object(t.b)("p",null,Object(t.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navs/#tabs"}),"Twitter bootstrap Documentation")),Object(t.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(t.b)(b.a,{value:"result",mdxType:"TabItem"},r()('<ul class="nav&#x20;nav-tabs">\n    <li class="&#x20;nav-item">\n        <a class="nav-link&#x20;active" href="&#x23;">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n    </li>\n</ul>')),Object(t.b)(b.a,{value:"source",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->navigation()->menu()->renderMenu(new \\Laminas\\Navigation\\Navigation([\n    ['label' => 'Active', 'uri' => '#', 'active' => true],\n    ['label' => 'Link', 'uri' => '#'],\n    ['label' => 'Link', 'uri' => '#'],\n    ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n]), ['tabs' => true]);\n")))),Object(t.b)("h3",{id:"pills"},"Pills"),Object(t.b)("p",null,Object(t.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navs/#pills"}),"Twitter bootstrap Documentation")),Object(t.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(t.b)(b.a,{value:"result",mdxType:"TabItem"},r()('<ul class="nav&#x20;nav-pills">\n    <li class="&#x20;nav-item">\n        <a class="nav-link&#x20;active" href="&#x23;">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n    </li>\n</ul>')),Object(t.b)(b.a,{value:"source",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->navigation()->menu()->renderMenu(new \\Laminas\\Navigation\\Navigation([\n    ['label' => 'Active', 'uri' => '#', 'active' => true],\n    ['label' => 'Link', 'uri' => '#'],\n    ['label' => 'Link', 'uri' => '#'],\n    ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n]), ['pills' => true]);\n")))),Object(t.b)("h3",{id:"fill-and-justify"},"Fill and justify"),Object(t.b)("p",null,Object(t.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navs/#fill-and-justify"}),"Twitter bootstrap Documentation")),Object(t.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(t.b)(b.a,{value:"result",mdxType:"TabItem"},r()('<ul class="nav&#x20;nav-fill&#x20;nav-pills">\n    <li class="&#x20;nav-item">\n        <a class="nav-link&#x20;active" href="&#x23;">Active</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Much longer nav link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n    </li>\n</ul>\n<br/>\n<nav class="nav&#x20;nav-fill&#x20;nav-pills">\n    <a class="nav-item&#x20;nav-link&#x20;active" href="&#x23;">Active</a>\n    <a class="nav-item&#x20;nav-link" href="&#x23;">Much longer nav link</a>\n    <a class="nav-item&#x20;nav-link" href="&#x23;">Link</a>\n    <a class="nav-item&#x20;nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n</nav>\n<br/>\n<nav class="nav&#x20;nav-justified&#x20;nav-pills">\n    <a class="nav-item&#x20;nav-link&#x20;active" href="&#x23;">Active</a>\n    <a class="nav-item&#x20;nav-link" href="&#x23;">Much longer nav link</a>\n    <a class="nav-item&#x20;nav-link" href="&#x23;">Link</a>\n    <a class="nav-item&#x20;nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n</nav>')),Object(t.b)(b.a,{value:"source",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation([\n        ['label' => 'Active', 'uri' => '#', 'active' => true],\n        ['label' => 'Much longer nav link', 'uri' => '#'],\n        ['label' => 'Link', 'uri' => '#'],\n        ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n    ]),\n    [\n        'pills' => true,\n        'fill' => true,\n    ]\n);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation([\n        ['label' => 'Active', 'uri' => '#', 'active' => true],\n        ['label' => 'Much longer nav link', 'uri' => '#'],\n        ['label' => 'Link', 'uri' => '#'],\n        ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n    ]),\n    [\n        'pills' => true,\n        'fill' => true,\n        'list' => false,\n    ]\n);\n\necho PHP_EOL . '<br/>' . PHP_EOL;\n\necho $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation([\n        ['label' => 'Active', 'uri' => '#', 'active' => true],\n        ['label' => 'Much longer nav link', 'uri' => '#'],\n        ['label' => 'Link', 'uri' => '#'],\n        ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n    ]),\n    [\n        'pills' => true,\n        'justified' => true,\n        'list' => false,\n    ]\n);\n")))),Object(t.b)("h3",{id:"working-with-flex-utilities"},"Working with flex utilities"),Object(t.b)("p",null,Object(t.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navs/#working-with-flex-utilities"}),"Twitter bootstrap Documentation")),Object(t.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(t.b)(b.a,{value:"result",mdxType:"TabItem"},r()('<nav class="flex-column&#x20;flex-sm-row&#x20;nav&#x20;nav-pills">\n    <a class="flex-sm-fill&#x20;text-sm-center&#x20;nav-link&#x20;active" href="&#x23;">Active</a>\n    <a class="flex-sm-fill&#x20;text-sm-center&#x20;nav-link" href="&#x23;">Longer nav link</a>\n    <a class="flex-sm-fill&#x20;text-sm-center&#x20;nav-link" href="&#x23;">Link</a>\n    <a class="flex-sm-fill&#x20;text-sm-center&#x20;nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n</nav>')),Object(t.b)(b.a,{value:"source",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation([\n        ['label' => 'Active', 'uri' => '#', 'active' => true],\n        ['label' => 'Longer nav link', 'uri' => '#'],\n        ['label' => 'Link', 'uri' => '#'],\n        ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n    ]),\n    [\n        'list' => false,\n        'pills' => true,\n        'vertical' => 'sm',\n    ]\n);\n")))),Object(t.b)("h2",{id:"using-dropdowns"},"Using dropdowns"),Object(t.b)("p",null,Object(t.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navs/#using-dropdowns"}),"Twitter bootstrap Documentation")),Object(t.b)("h3",{id:"tabs-with-dropdowns"},"Tabs with dropdowns"),Object(t.b)("p",null,Object(t.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navs/#tabs-with-dropdowns"}),"Twitter bootstrap Documentation")),Object(t.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(t.b)(b.a,{value:"result",mdxType:"TabItem"},r()('<ul class="nav&#x20;nav-tabs">\n    <li class="&#x20;nav-item">\n        <a class="nav-link&#x20;active" href="&#x23;">Active</a>\n    </li>\n    <li class="dropdown&#x20;nav-item">\n        <a class="dropdown-toggle&#x20;nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="&#x23;">Dropdown</a>\n        <div class="dropdown-menu">\n            <a class="dropdown-item" href="&#x23;">Action</a>\n            <a class="dropdown-item" href="&#x23;">Another action</a>\n            <a class="dropdown-item" href="&#x23;">Something else here</a>\n            <div class="dropdown-divider"></div>\n            <a class="dropdown-item" href="&#x23;">Separated link</a>\n        </div>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n    </li>\n</ul>')),Object(t.b)(b.a,{value:"source",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation([\n        ['label' => 'Active', 'uri' => '#', 'active' => true],\n        [\n            'type' => '\\TwbsHelper\\Navigation\\Page\\DropdownPage',\n            'label' => 'Dropdown',\n            'dropdown' => [\n                'Action',\n                'Another action',\n                'Something else here',\n                '---',\n                'Separated link',\n            ],\n        ],\n        ['label' => 'Link', 'uri' => '#'],\n        ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n    ]),\n['tabs' => true]\n);\n")))),Object(t.b)("h3",{id:"pills-with-dropdowns"},"Pills with dropdowns"),Object(t.b)("p",null,Object(t.b)("a",Object(l.a)({parentName:"p"},{href:"https://getbootstrap.com/docs/4.5/components/navs/#pills-with-dropdowns"}),"Twitter bootstrap Documentation")),Object(t.b)(c.a,{defaultValue:"result",values:[{label:"Result",value:"result"},{label:"Source",value:"source"}],mdxType:"Tabs"},Object(t.b)(b.a,{value:"result",mdxType:"TabItem"},r()('<ul class="nav&#x20;nav-pills">\n    <li class="&#x20;nav-item">\n        <a class="nav-link&#x20;active" href="&#x23;">Active</a>\n    </li>\n    <li class="dropdown&#x20;nav-item">\n        <a class="dropdown-toggle&#x20;nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="&#x23;">Dropdown</a>\n        <div class="dropdown-menu">\n            <a class="dropdown-item" href="&#x23;">Action</a>\n            <a class="dropdown-item" href="&#x23;">Another action</a>\n            <a class="dropdown-item" href="&#x23;">Something else here</a>\n            <div class="dropdown-divider"></div>\n            <a class="dropdown-item" href="&#x23;">Separated link</a>\n        </div>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link" href="&#x23;">Link</a>\n    </li>\n    <li class="nav-item">\n        <a class="nav-link&#x20;disabled" href="&#x23;" tabindex="-1" aria-disabled="true">Disabled</a>\n    </li>\n</ul>')),Object(t.b)(b.a,{value:"source",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",Object(l.a)({parentName:"pre"},{className:"language-php"}),"echo $this->navigation()->menu()->renderMenu(\n    new \\Laminas\\Navigation\\Navigation([\n        ['label' => 'Active', 'uri' => '#', 'active' => true],\n        [\n            'type' => '\\TwbsHelper\\Navigation\\Page\\DropdownPage',\n            'label' => 'Dropdown',\n            'dropdown' => [\n                'Action',\n                'Another action',\n                'Something else here',\n                '---',\n                'Separated link',\n            ],\n        ],\n        ['label' => 'Link', 'uri' => '#'],\n        ['label' => 'Disabled', 'uri' => '#', 'visible' => false],\n    ]),\n['pills' => true]\n);\n")))))}p.isMDXComponent=!0}}]);