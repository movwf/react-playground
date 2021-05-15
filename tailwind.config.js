module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    transitionDuration: {
      DEFAULT: '150ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms'
    },
    transitionProperty: {
      none: 'none',
      all: 'all'
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      51: 51,
      52: 52,
      53: 53,
      auto: 'auto'
    },
    extend: {
      width: {
        topbar: 'calc(100% - 4rem)'
      }
    }
  },
  variants: {
    width: ['hover', 'focus', 'responsive'],
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active'],
      transform: ['hover', 'focus'],
      transitionTimingFunction: ['hover', 'focus', 'responsive'],
      transitionDuration: ['hover', 'focus', 'responsive'],
      transitionProperty: ['hover', 'focus', 'responsive']
    }
  },
  plugins: []
};
