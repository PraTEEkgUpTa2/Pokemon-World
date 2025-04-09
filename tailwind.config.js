
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // enables manual dark mode toggle using class
    theme: {
      extend: {
        colors: {
          type: {
            fire: '#FDDFDF',
            water: '#DEF3FD',
            grass: '#DEFDE0',
            electric: '#FCF7DE',
            psychic: '#EAEDA1',
            ice: '#E0F5FF',
            dragon: '#97B3E6',
            dark: '#A9A9A9',
            fairy: '#FCEAFF',
            normal: '#F5F5F5',
            fighting: '#E6E0D4',
            flying: '#F5F5F5',
            poison: '#E0D6EB',
            ground: '#F4E7DA',
            rock: '#D5D5D4',
            bug: '#F8D5A3',
            ghost: '#D8D8D8',
            steel: '#F4F4F4',
          },
        },
      },
    },
    plugins: [],
  };
  