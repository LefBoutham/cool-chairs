const settings = {
  name: "cool-chairs",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "cool-chairs",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://wordpress-384045-2359108.cloudwaysapps.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
