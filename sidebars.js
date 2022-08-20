/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  rulesSidebar: [
    "rules/index",
    {
      type: "category",
      label: "Core System",
      link: {
        type: "doc",
        id: "rules/core-system/index",
      },
      items: [
        "rules/core-system/collaborative-storytelling",
        "rules/core-system/game-structure",
        "rules/core-system/action-rolls",
        "rules/core-system/consequences",
        "rules/core-system/progress-tracks",
        "rules/core-system/fortune-rolls",
      ],
    },
    {
      type: "category",
      label: "Characters",
      link: {
        type: "doc",
        id: "rules/characters/index",
      },
      items: [
        "rules/characters/character-creation",
        {
          type: "category",
          label: "Playbooks",
          link: {
            type: "generated-index",
            title: "Playbooks",
            description: "How do you keep the enclave running?",
            slug: "rules/characters/playbooks",
          },

          items: [
            "rules/characters/playbooks/archivist",
            "rules/characters/playbooks/biohacker",
            "rules/characters/playbooks/sporetender",
            "rules/characters/playbooks/storyteller",
            "rules/characters/playbooks/technomancer",
          ],
        },
        {
          type: "category",
          label: "Creations",
          link: {
            type: "generated-index",
            title: "Creations",
            description: "Cool Wychcraft Shit",
            slug: "rules/characters/creations",
          },

          items: [
            "rules/characters/creations/construct",
            "rules/characters/creations/menagerie",
            "rules/characters/creations/multitool",
            "rules/characters/creations/operating-system",
            "rules/characters/creations/shell",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Enclaves",
      link: {
        type: "doc",

        id: "rules/enclaves/index",
      },
      items: [
        "rules/enclaves/enclave-creation",
        { Playbooks: ["rules/enclaves/playbooks/commune"] },
      ],
    },
  ],
  // settingSidebar: [
  //   "setting/intro",
  //   {
  //     type: "category",
  //     label: "Avalon",
  //     link: {
  //       type: "generated-index",
  //       title: "Avalon",
  //       description: "Learn about the most important Docusaurus concepts!",
  //       slug: "settings/avalon",
  //     },
  //     items: ["setting/avalon/welcome-to-avalon"],
  //   },
  // ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
