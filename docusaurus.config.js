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
              <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3">
          <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          <ul class="list-inline mt-4">
            <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fa fa-facebook"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="fa fa-pinterest"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><i class="fa fa-vimeo"></i></a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Shop</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">For Women</a></li>
            <li class="mb-2"><a href="#" class="text-muted">For Men</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Stores</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Our Blog</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">Login</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Register</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Wishlist</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Our Products</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Newsletter</h6>
          <p class="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
          <div class="p-1 rounded border">
            <div class="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0">
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link"><i class="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyrights -->
    <div class="bg-light py-4">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">© 2019 Bootstrapious All rights reserved.</p>
      </div>
    </div>
            `
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
