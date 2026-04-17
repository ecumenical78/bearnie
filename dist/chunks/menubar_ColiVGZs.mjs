import { a as createComponent, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, f as renderSlot, e as renderScript, b as renderTemplate, c as createAstro, n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CNxogX6Z.mjs';
import { $ as $$ComponentPreview, a as $$CodeBlock } from './ComponentPreview_Dt4eeL0C.mjs';
import { $ as $$Prose } from './Prose_DdDBP6c4.mjs';
import { h as cn } from './BaseLayout_C56DsFr7.mjs';
import 'clsx';

const $$Astro$e = createAstro("https://v2rayn.ygjc.cc");
const $$Menubar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Menubar;
  const { class: className, ...props } = Astro2.props;
  const classes = cn(
    "flex h-9 items-center gap-1 rounded-md border bg-background p-1",
    className
  );
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")} data-menubar role="menubar"${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/Menubar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/Menubar.astro", void 0);

const $$Astro$d = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$MenubarMenu;
  const { class: className, ...props } = Astro2.props;
  const classes = cn("relative", className);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")} data-menubar-menu${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarMenu.astro", void 0);

const $$Astro$c = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarTrigger = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$MenubarTrigger;
  const { class: className, ...props } = Astro2.props;
  const classes = cn(
    "flex cursor-pointer select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none",
    "focus:bg-accent focus:text-accent-foreground",
    "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
    className
  );
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(classes, "class")} data-menubar-trigger data-state="closed" aria-expanded="false" aria-haspopup="menu"${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarTrigger.astro", void 0);

const $$Astro$b = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MenubarContent;
  const { align = "start", sideOffset = 4, class: className, ...props } = Astro2.props;
  const alignClasses = {
    start: "left-0",
    center: "left-1/2 -translate-x-1/2",
    end: "right-0"
  };
  const classes = cn(
    "absolute top-full z-50 min-w-48 overflow-visible rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
    alignClasses[align],
    className
  );
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")}${addAttribute(`margin-top: ${sideOffset}px`, "style")} data-menubar-content role="menu" hidden${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarContent.astro", void 0);

const $$Astro$a = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MenubarItem;
  const { inset = false, disabled = false, class: className, ...props } = Astro2.props;
  const classes = cn(
    "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none",
    "focus:bg-accent focus:text-accent-foreground",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    inset && "pl-8",
    className
  );
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")} data-menubar-item${addAttribute(disabled ? "" : void 0, "data-disabled")} role="menuitem"${addAttribute(disabled ? -1 : 0, "tabindex")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarItem.astro", void 0);

const $$Astro$9 = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarSeparator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MenubarSeparator;
  const { class: className, ...props } = Astro2.props;
  const classes = cn("-mx-1 my-1 h-px bg-border", className);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")} role="separator"${spreadAttributes(props)}></div>`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarSeparator.astro", void 0);

const $$Astro$8 = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarShortcut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MenubarShortcut;
  const { class: className, ...props } = Astro2.props;
  const classes = cn(
    "ml-auto text-xs tracking-widest text-muted-foreground",
    className
  );
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(classes, "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarShortcut.astro", void 0);

const $$Astro$7 = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarGroup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MenubarGroup;
  const { class: className, ...props } = Astro2.props;
  const classes = cn("", className);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")} role="group"${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarGroup.astro", void 0);

const $$Astro$6 = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarLabel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MenubarLabel;
  const { inset = false, class: className, ...props } = Astro2.props;
  const classes = cn(
    "px-2 py-1.5 text-sm font-semibold",
    inset && "pl-8",
    className
  );
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarLabel.astro", void 0);

const $$Astro$5 = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarCheckboxItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MenubarCheckboxItem;
  const { checked = false, disabled = false, class: className, ...props } = Astro2.props;
  const classes = cn(
    "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
    "focus:bg-accent focus:text-accent-foreground",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className
  );
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")} data-menubar-checkbox-item${addAttribute(checked ? "true" : "false", "data-checked")}${addAttribute(disabled ? "" : void 0, "data-disabled")} role="menuitemcheckbox"${addAttribute(checked, "aria-checked")}${addAttribute(disabled ? -1 : 0, "tabindex")}${spreadAttributes(props)}> <span class="absolute left-2 flex size-3.5 items-center justify-center"> <svg class="size-4 hidden data-[checked=true]:block" data-check-icon${addAttribute(checked ? "true" : "false", "data-checked")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg> </span> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarCheckboxItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarCheckboxItem.astro", void 0);

const $$Astro$4 = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarRadioGroup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MenubarRadioGroup;
  const { value, class: className, ...props } = Astro2.props;
  const classes = cn("", className);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")} data-menubar-radio-group${addAttribute(value, "data-value")} role="group"${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarRadioGroup.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarRadioGroup.astro", void 0);

const $$Astro$3 = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarRadioItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MenubarRadioItem;
  const { value, disabled = false, class: className, ...props } = Astro2.props;
  const classes = cn(
    "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
    "focus:bg-accent focus:text-accent-foreground",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className
  );
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")} data-menubar-radio-item${addAttribute(value, "data-value")} data-checked="false"${addAttribute(disabled ? "" : void 0, "data-disabled")} role="menuitemradio" aria-checked="false"${addAttribute(disabled ? -1 : 0, "tabindex")}${spreadAttributes(props)}> <span class="absolute left-2 flex size-3.5 items-center justify-center"> <svg class="size-2 fill-current hidden" data-radio-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <circle cx="12" cy="12" r="10"></circle> </svg> </span> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarRadioItem.astro", void 0);

const $$Astro$2 = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarSub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MenubarSub;
  const { class: className, ...props } = Astro2.props;
  const classes = cn("relative", className);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")} data-menubar-sub${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarSub.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarSub.astro", void 0);

const $$Astro$1 = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarSubTrigger = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MenubarSubTrigger;
  const { inset = false, disabled = false, class: className, ...props } = Astro2.props;
  const classes = cn(
    "flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
    "focus:bg-accent focus:text-accent-foreground",
    "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    inset && "pl-8",
    className
  );
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")} data-menubar-sub-trigger data-state="closed"${addAttribute(disabled ? "" : void 0, "data-disabled")} aria-expanded="false" aria-haspopup="menu"${addAttribute(disabled ? -1 : 0, "tabindex")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} <svg class="ml-auto size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="9 18 15 12 9 6"></polyline> </svg> </div>`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarSubTrigger.astro", void 0);

const $$Astro = createAstro("https://v2rayn.ygjc.cc");
const $$MenubarSubContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MenubarSubContent;
  const { class: className, ...props } = Astro2.props;
  const classes = cn(
    "absolute left-full top-0 ml-1 z-[60] min-w-32 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
    className
  );
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")} data-menubar-sub-content role="menu" hidden${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/win/Documents/GitHub/bearnie/src/components/ui/menubar/MenubarSubContent.astro", void 0);

const frontmatter = {
  "title": "Menubar",
  "description": "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.",
  "tagline": "Desktop menu bar",
  "category": "navigation",
  "status": "stable",
  "order": 19
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "installation",
    "text": "Installation"
  }, {
    "depth": 3,
    "slug": "usage",
    "text": "Usage"
  }, {
    "depth": 3,
    "slug": "examples",
    "text": "Examples"
  }, {
    "depth": 4,
    "slug": "checkbox",
    "text": "Checkbox"
  }, {
    "depth": 4,
    "slug": "radio",
    "text": "Radio"
  }, {
    "depth": 4,
    "slug": "submenu",
    "text": "Submenu"
  }, {
    "depth": 3,
    "slug": "props",
    "text": "Props"
  }, {
    "depth": 4,
    "slug": "menubar",
    "text": "Menubar"
  }, {
    "depth": 4,
    "slug": "menubartrigger",
    "text": "MenubarTrigger"
  }, {
    "depth": 4,
    "slug": "menubarcontent",
    "text": "MenubarContent"
  }, {
    "depth": 4,
    "slug": "menubaritem",
    "text": "MenubarItem"
  }, {
    "depth": 4,
    "slug": "menubarcheckboxitem",
    "text": "MenubarCheckboxItem"
  }, {
    "depth": 4,
    "slug": "menubarradiogroup",
    "text": "MenubarRadioGroup"
  }, {
    "depth": 4,
    "slug": "menubarradioitem",
    "text": "MenubarRadioItem"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    h4: "h4",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$ComponentPreview, {
      code: `<Menubar>
<MenubarMenu>
  <MenubarTrigger>File</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>
      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
    </MenubarItem>
    <MenubarItem>
      New Window <MenubarShortcut>⌘N</MenubarShortcut>
    </MenubarItem>
    <MenubarSeparator />
    <MenubarItem>Share</MenubarItem>
    <MenubarSeparator />
    <MenubarItem>
      Print <MenubarShortcut>⌘P</MenubarShortcut>
    </MenubarItem>
  </MenubarContent>
</MenubarMenu>
<MenubarMenu>
  <MenubarTrigger>Edit</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>
      Undo <MenubarShortcut>⌘Z</MenubarShortcut>
    </MenubarItem>
    <MenubarItem>
      Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
    </MenubarItem>
    <MenubarSeparator />
    <MenubarItem>
      Cut <MenubarShortcut>⌘X</MenubarShortcut>
    </MenubarItem>
    <MenubarItem>
      Copy <MenubarShortcut>⌘C</MenubarShortcut>
    </MenubarItem>
    <MenubarItem>
      Paste <MenubarShortcut>⌘V</MenubarShortcut>
    </MenubarItem>
  </MenubarContent>
</MenubarMenu>
<MenubarMenu>
  <MenubarTrigger>View</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>Zoom In</MenubarItem>
    <MenubarItem>Zoom Out</MenubarItem>
    <MenubarSeparator />
    <MenubarItem>Full Screen</MenubarItem>
  </MenubarContent>
</MenubarMenu>
</Menubar>`,
      children: createVNode($$Menubar, {
        children: [createVNode($$MenubarMenu, {
          children: [createVNode($$MenubarTrigger, {
            children: "File"
          }), createVNode($$MenubarContent, {
            children: [createVNode($$MenubarItem, {
              children: createVNode(_components.p, {
                children: ["New Tab ", createVNode($$MenubarShortcut, {
                  children: "⌘T"
                })]
              })
            }), createVNode($$MenubarItem, {
              children: createVNode(_components.p, {
                children: ["New Window ", createVNode($$MenubarShortcut, {
                  children: "⌘N"
                })]
              })
            }), createVNode($$MenubarSeparator, {}), createVNode($$MenubarItem, {
              children: "Share"
            }), createVNode($$MenubarSeparator, {}), createVNode($$MenubarItem, {
              children: createVNode(_components.p, {
                children: ["Print ", createVNode($$MenubarShortcut, {
                  children: "⌘P"
                })]
              })
            })]
          })]
        }), createVNode($$MenubarMenu, {
          children: [createVNode($$MenubarTrigger, {
            children: "Edit"
          }), createVNode($$MenubarContent, {
            children: [createVNode($$MenubarItem, {
              children: createVNode(_components.p, {
                children: ["Undo ", createVNode($$MenubarShortcut, {
                  children: "⌘Z"
                })]
              })
            }), createVNode($$MenubarItem, {
              children: createVNode(_components.p, {
                children: ["Redo ", createVNode($$MenubarShortcut, {
                  children: "⇧⌘Z"
                })]
              })
            }), createVNode($$MenubarSeparator, {}), createVNode($$MenubarItem, {
              children: createVNode(_components.p, {
                children: ["Cut ", createVNode($$MenubarShortcut, {
                  children: "⌘X"
                })]
              })
            }), createVNode($$MenubarItem, {
              children: createVNode(_components.p, {
                children: ["Copy ", createVNode($$MenubarShortcut, {
                  children: "⌘C"
                })]
              })
            }), createVNode($$MenubarItem, {
              children: createVNode(_components.p, {
                children: ["Paste ", createVNode($$MenubarShortcut, {
                  children: "⌘V"
                })]
              })
            })]
          })]
        }), createVNode($$MenubarMenu, {
          children: [createVNode($$MenubarTrigger, {
            children: "View"
          }), createVNode($$MenubarContent, {
            children: [createVNode($$MenubarItem, {
              children: "Zoom In"
            }), createVNode($$MenubarItem, {
              children: "Zoom Out"
            }), createVNode($$MenubarSeparator, {}), createVNode($$MenubarItem, {
              children: "Full Screen"
            })]
          })]
        })]
      })
    }), "\n", createVNode("div", {
      class: "space-y-4",
      children: [createVNode($$Prose, {
        children: createVNode(_components.h3, {
          id: "installation",
          children: "Installation"
        })
      }), createVNode($$ComponentPreview, {
        component: "menubar",
        manual: `import Menubar from '@/components/ui/menubar/Menubar.astro';
import MenubarMenu from '@/components/ui/menubar/MenubarMenu.astro';
import MenubarTrigger from '@/components/ui/menubar/MenubarTrigger.astro';
import MenubarContent from '@/components/ui/menubar/MenubarContent.astro';
import MenubarItem from '@/components/ui/menubar/MenubarItem.astro';
import MenubarSeparator from '@/components/ui/menubar/MenubarSeparator.astro';
import MenubarShortcut from '@/components/ui/menubar/MenubarShortcut.astro';`
      })]
    }), "\n", createVNode("div", {
      class: "space-y-4",
      children: [createVNode($$Prose, {
        children: createVNode(_components.h3, {
          id: "usage",
          children: "Usage"
        })
      }), createVNode($$CodeBlock, {
        code: `import {
Menubar,
MenubarContent,
MenubarItem,
MenubarMenu,
MenubarSeparator,
MenubarShortcut,
MenubarTrigger,
} from "@/components/ui/menubar"`,
        lang: "astro"
      }), createVNode($$CodeBlock, {
        code: `<Menubar>
<MenubarMenu>
  <MenubarTrigger>File</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>
      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
    </MenubarItem>
    <MenubarItem>New Window</MenubarItem>
    <MenubarSeparator />
    <MenubarItem>Print</MenubarItem>
  </MenubarContent>
</MenubarMenu>
</Menubar>`,
        lang: "astro"
      })]
    }), "\n", createVNode("div", {
      class: "space-y-8",
      children: [createVNode($$Prose, {
        children: createVNode(_components.h3, {
          id: "examples",
          children: "Examples"
        })
      }), createVNode("div", {
        class: "space-y-4",
        children: [createVNode($$Prose, {
          children: [createVNode(_components.h4, {
            id: "checkbox",
            children: "Checkbox"
          }), createVNode(_components.p, {
            children: ["Use ", createVNode(_components.code, {
              children: "MenubarCheckboxItem"
            }), " for toggleable options."]
          })]
        }), createVNode($$ComponentPreview, {
          code: `<Menubar>
<MenubarMenu>
  <MenubarTrigger>View</MenubarTrigger>
  <MenubarContent>
    <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
    <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
    <MenubarCheckboxItem checked>Show Status Bar</MenubarCheckboxItem>
  </MenubarContent>
</MenubarMenu>
</Menubar>`,
          children: createVNode($$Menubar, {
            children: createVNode($$MenubarMenu, {
              children: [createVNode($$MenubarTrigger, {
                children: "View"
              }), createVNode($$MenubarContent, {
                children: [createVNode($$MenubarCheckboxItem, {
                  checked: true,
                  children: "Show Toolbar"
                }), createVNode($$MenubarCheckboxItem, {
                  children: "Show Sidebar"
                }), createVNode($$MenubarCheckboxItem, {
                  checked: true,
                  children: "Show Status Bar"
                })]
              })]
            })
          })
        })]
      }), createVNode("div", {
        class: "space-y-4",
        children: [createVNode($$Prose, {
          children: [createVNode(_components.h4, {
            id: "radio",
            children: "Radio"
          }), createVNode(_components.p, {
            children: ["Use ", createVNode(_components.code, {
              children: "MenubarRadioGroup"
            }), " and ", createVNode(_components.code, {
              children: "MenubarRadioItem"
            }), " for single-select options."]
          })]
        }), createVNode($$ComponentPreview, {
          code: `<Menubar>
<MenubarMenu>
  <MenubarTrigger>Profiles</MenubarTrigger>
  <MenubarContent>
    <MenubarRadioGroup value="personal">
      <MenubarRadioItem value="personal">Personal</MenubarRadioItem>
      <MenubarRadioItem value="work">Work</MenubarRadioItem>
      <MenubarRadioItem value="team">Team</MenubarRadioItem>
    </MenubarRadioGroup>
  </MenubarContent>
</MenubarMenu>
</Menubar>`,
          children: createVNode($$Menubar, {
            children: createVNode($$MenubarMenu, {
              children: [createVNode($$MenubarTrigger, {
                children: "Profiles"
              }), createVNode($$MenubarContent, {
                children: createVNode($$MenubarRadioGroup, {
                  value: "personal",
                  children: [createVNode($$MenubarRadioItem, {
                    value: "personal",
                    children: "Personal"
                  }), createVNode($$MenubarRadioItem, {
                    value: "work",
                    children: "Work"
                  }), createVNode($$MenubarRadioItem, {
                    value: "team",
                    children: "Team"
                  })]
                })
              })]
            })
          })
        })]
      }), createVNode("div", {
        class: "space-y-4",
        children: [createVNode($$Prose, {
          children: [createVNode(_components.h4, {
            id: "submenu",
            children: "Submenu"
          }), createVNode(_components.p, {
            children: ["Use ", createVNode(_components.code, {
              children: "MenubarSub"
            }), ", ", createVNode(_components.code, {
              children: "MenubarSubTrigger"
            }), ", and ", createVNode(_components.code, {
              children: "MenubarSubContent"
            }), " for nested menus."]
          })]
        }), createVNode($$ComponentPreview, {
          code: `<Menubar>
<MenubarMenu>
  <MenubarTrigger>File</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>New File</MenubarItem>
    <MenubarSub>
      <MenubarSubTrigger>Share</MenubarSubTrigger>
      <MenubarSubContent>
        <MenubarItem>Email</MenubarItem>
        <MenubarItem>Messages</MenubarItem>
        <MenubarItem>AirDrop</MenubarItem>
      </MenubarSubContent>
    </MenubarSub>
    <MenubarSeparator />
    <MenubarItem>Export</MenubarItem>
  </MenubarContent>
</MenubarMenu>
</Menubar>`,
          children: createVNode($$Menubar, {
            children: createVNode($$MenubarMenu, {
              children: [createVNode($$MenubarTrigger, {
                children: "File"
              }), createVNode($$MenubarContent, {
                children: [createVNode($$MenubarItem, {
                  children: "New File"
                }), createVNode($$MenubarSub, {
                  children: [createVNode($$MenubarSubTrigger, {
                    children: "Share"
                  }), createVNode($$MenubarSubContent, {
                    children: [createVNode($$MenubarItem, {
                      children: "Email"
                    }), createVNode($$MenubarItem, {
                      children: "Messages"
                    }), createVNode($$MenubarItem, {
                      children: "AirDrop"
                    })]
                  })]
                }), createVNode($$MenubarSeparator, {}), createVNode($$MenubarItem, {
                  children: "Export"
                })]
              })]
            })
          })
        })]
      })]
    }), "\n", createVNode($$Prose, {
      children: [createVNode(_components.h3, {
        id: "props",
        children: "Props"
      }), createVNode(_components.h4, {
        id: "menubar",
        children: "Menubar"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              children: "Prop"
            }), createVNode(_components.th, {
              children: "Type"
            }), createVNode(_components.th, {
              children: "Default"
            }), createVNode(_components.th, {
              children: "Description"
            })]
          })
        }), createVNode(_components.tbody, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "class"
            }), createVNode(_components.td, {
              children: "string"
            }), createVNode(_components.td, {
              children: "-"
            }), createVNode(_components.td, {
              children: "Additional CSS classes"
            })]
          })
        })]
      }), createVNode(_components.h4, {
        id: "menubartrigger",
        children: "MenubarTrigger"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              children: "Prop"
            }), createVNode(_components.th, {
              children: "Type"
            }), createVNode(_components.th, {
              children: "Default"
            }), createVNode(_components.th, {
              children: "Description"
            })]
          })
        }), createVNode(_components.tbody, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "class"
            }), createVNode(_components.td, {
              children: "string"
            }), createVNode(_components.td, {
              children: "-"
            }), createVNode(_components.td, {
              children: "Additional CSS classes"
            })]
          })
        })]
      }), createVNode(_components.h4, {
        id: "menubarcontent",
        children: "MenubarContent"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              children: "Prop"
            }), createVNode(_components.th, {
              children: "Type"
            }), createVNode(_components.th, {
              children: "Default"
            }), createVNode(_components.th, {
              children: "Description"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "align"
            }), createVNode(_components.td, {
              children: "”start” | “center” | “end\""
            }), createVNode(_components.td, {
              children: "\"start”"
            }), createVNode(_components.td, {
              children: "Alignment of the content"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "sideOffset"
            }), createVNode(_components.td, {
              children: "number"
            }), createVNode(_components.td, {
              children: "4"
            }), createVNode(_components.td, {
              children: "Offset from the trigger"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "class"
            }), createVNode(_components.td, {
              children: "string"
            }), createVNode(_components.td, {
              children: "-"
            }), createVNode(_components.td, {
              children: "Additional CSS classes"
            })]
          })]
        })]
      }), createVNode(_components.h4, {
        id: "menubaritem",
        children: "MenubarItem"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              children: "Prop"
            }), createVNode(_components.th, {
              children: "Type"
            }), createVNode(_components.th, {
              children: "Default"
            }), createVNode(_components.th, {
              children: "Description"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "inset"
            }), createVNode(_components.td, {
              children: "boolean"
            }), createVNode(_components.td, {
              children: "false"
            }), createVNode(_components.td, {
              children: "Adds left padding for alignment"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "disabled"
            }), createVNode(_components.td, {
              children: "boolean"
            }), createVNode(_components.td, {
              children: "false"
            }), createVNode(_components.td, {
              children: "Disables the item"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "class"
            }), createVNode(_components.td, {
              children: "string"
            }), createVNode(_components.td, {
              children: "-"
            }), createVNode(_components.td, {
              children: "Additional CSS classes"
            })]
          })]
        })]
      }), createVNode(_components.h4, {
        id: "menubarcheckboxitem",
        children: "MenubarCheckboxItem"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              children: "Prop"
            }), createVNode(_components.th, {
              children: "Type"
            }), createVNode(_components.th, {
              children: "Default"
            }), createVNode(_components.th, {
              children: "Description"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "checked"
            }), createVNode(_components.td, {
              children: "boolean"
            }), createVNode(_components.td, {
              children: "false"
            }), createVNode(_components.td, {
              children: "Initial checked state"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "disabled"
            }), createVNode(_components.td, {
              children: "boolean"
            }), createVNode(_components.td, {
              children: "false"
            }), createVNode(_components.td, {
              children: "Disables the item"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "class"
            }), createVNode(_components.td, {
              children: "string"
            }), createVNode(_components.td, {
              children: "-"
            }), createVNode(_components.td, {
              children: "Additional CSS classes"
            })]
          })]
        })]
      }), createVNode(_components.h4, {
        id: "menubarradiogroup",
        children: "MenubarRadioGroup"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              children: "Prop"
            }), createVNode(_components.th, {
              children: "Type"
            }), createVNode(_components.th, {
              children: "Default"
            }), createVNode(_components.th, {
              children: "Description"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "value"
            }), createVNode(_components.td, {
              children: "string"
            }), createVNode(_components.td, {
              children: "-"
            }), createVNode(_components.td, {
              children: "Initial selected value"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "class"
            }), createVNode(_components.td, {
              children: "string"
            }), createVNode(_components.td, {
              children: "-"
            }), createVNode(_components.td, {
              children: "Additional CSS classes"
            })]
          })]
        })]
      }), createVNode(_components.h4, {
        id: "menubarradioitem",
        children: "MenubarRadioItem"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              children: "Prop"
            }), createVNode(_components.th, {
              children: "Type"
            }), createVNode(_components.th, {
              children: "Default"
            }), createVNode(_components.th, {
              children: "Description"
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "value"
            }), createVNode(_components.td, {
              children: "string"
            }), createVNode(_components.td, {
              children: "-"
            }), createVNode(_components.td, {
              children: "Value of the radio item"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "disabled"
            }), createVNode(_components.td, {
              children: "boolean"
            }), createVNode(_components.td, {
              children: "false"
            }), createVNode(_components.td, {
              children: "Disables the item"
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "class"
            }), createVNode(_components.td, {
              children: "string"
            }), createVNode(_components.td, {
              children: "-"
            }), createVNode(_components.td, {
              children: "Additional CSS classes"
            })]
          })]
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/components/menubar.mdx";
const file = "C:/Users/win/Documents/GitHub/bearnie/src/content/components/menubar.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/win/Documents/GitHub/bearnie/src/content/components/menubar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
