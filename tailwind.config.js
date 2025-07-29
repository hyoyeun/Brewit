export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 커스텀 컬러 지정 
        'l-y': '#FFC21C',   // 연노랑
        'l-g': '#efeff0', // 논클릭 상태
        'c-b': '#131313',  // 텍스트용 블랙
        'c-b8': 'rgba(19, 19, 19, 0.8)',
        'c-b7': 'rgba(19, 19, 19, 0.7)',
        'c-b6': 'rgba(19, 19, 19, 0.6)',
        'c-b4': 'rgba(19, 19, 19, 0.4)',
        'ba-1': '#f5f5f5',
        't-l-g': '#1a1a1a'


      },
    },
    plugins: [],
  }
}