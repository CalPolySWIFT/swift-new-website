module.exports = {
  title: 'SWIFT',
  tagline: 'Students With an Interest in the Future of Technology',
  // tagline: 'STUDENTS WITH AN INTEREST IN THE FUTURE OF TECHNOLOGY',
  url: 'https://github.com/CalPolySWIFT',
  baseUrl: '/', /* for production development */ /*originally was /swift/*/ 
  // baseUrl: '/', /* for local development */
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/SWIFT_favicon.ico',
  organizationName: 'CalPolySWIFT', // Usually your GitHub org/user name.
  projectName: 'swift-website-2021', // Usually your repo name.
  themeConfig:
   {
    navbar: {
      title: '',
      style: 'dark',
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_only_white.png',
      },
      items: [
        { 
          label: 'About', 
          position: 'left',
          items: [
            {
              to: 'about',
              label: 'About SWIFT'
            },
            {
              to: 'eboard',
              label: 'eBoard'
            }
          ]
        },
        {
          to: 'membership',
          label: 'Membership',
          position: 'left',
        },
        // {to: 'events', label: 'Events', position: 'left'},
        

        // A doesn't have active hover class, and when click on link it opens new tab
        // B has active hover class, doesn't open new tab when click on link
        // A https://v2.docusaurus.io/docs/api/themes/configuration/#navbar-dropdown
        {
          to: 'competition',
          label: 'Competition',
          position: 'left', // or 'right'
        },
        {
          label: 'Events',
          position: 'left', // or 'right'
          items: [
            {
              to: 'https://techsymposium.calpolyswift.org/',
              label: 'Tech Symposium',
            },
          ],
        },
        {to: 'activities', label: 'Activities', position: 'left'},
        {to: 'contact', label: 'Contact', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `
              <a href="https://www.youtube.com/user/CalPolySWIFT?feature=guide" target="_blank">
                <img class="social-network" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/395_Youtube_logo-512.png" alt="YouTube" />
              </a>
              <ul class="social-icons col-md-6 col-sm-6 col-xs-12 hidden-xs">
                <li><a href="https://twitter.com/calpolyswift"><i class="fa fa-twitter"></i></a></li>
                <li><a href="https://www.facebook.com/CalPolySWIFT"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://www.youtube.com/user/CalPolySWIFT?feature=guide"><i class="fa fa-youtube"></i></a></li>
                <li><a href="https://web.libera.chat/?channels=#swift"><i class="fa fa-wechat"></i></a></li>
                <li><a href="https://www.linkedin.com/groups/Students-Interest-in-Future-Technology-4108262"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="https://github.com/CalPolySWIFT"><i class="fa fa-github"></i></a></li>
                <li><a href="https://discord.gg/Na5PGfp"><i class="fa icon-discord"></i></a></li>
                <li><a href="/static/assets/images/SWIFT-snapchat-code.png"><i class="fa fa-snapchat-ghost"></i></a></li>
              </ul>
            `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cal Poly SWIFT. Built with Docusaurus. Coded by <a href="https://lnk.bio/z7q3">Michelle Lee</a> and <a href="">Christian Falucho</a>.`,
    },

    colorMode: {
      /**
       * unable to change default to dark mode, so must manually change colors
       */
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
