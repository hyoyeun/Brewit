export const mockMenuItems = [
  {
    id: 1,
    name_kr: "헤이즐넛 라떼",
    name_en: "Hazelnut Latte",
    description: "헤이즐넛 시럽이 들어간 향긋한 라떼",
    base: "헤이즐넛",
    image: "/images/헤이즐넛라떼.png",
    isSeasonal: false,
    hasWhipping: false,
    type: "커피",
    price: 5000
  },
  {
    id: 2,
    name_kr: "아메리카노",
    name_en: "Americano",
    description: "에스프레소에 뜨거운 물을 더한 깔끔한 커피",
    base: "기본",
    image: "/images/아메리카노.png",
    isSeasonal: false,
    hasWhipping: false,
    type: "커피",
    price: 2500
  },
  {
    id: 3,
    name_kr: "스트로베리 라떼",
    name_en: "Strawberry Latte",
    description: "생딸기 과육과 우유가 층층이 어우러진 상큼한 라떼",
    base: "딸기 + 바닐라",
    image: "/images/스트로베리 라떼.png",
    isSeasonal: true,
    hasWhipping: true,
    type: "논커피",
    price: 5400

  },
  {
    id: 4,
    name_kr: "크로와상",
    name_en: "Croissant",
    description: "겹겹이 쌓인 바삭하고 촉촉한 프렌치 스타일 페이스트리",
    ingredients: ["밀가루", "우유", "버터", "계란"],
    kcal: 270,
    sugar: "6g",
    fat: "14g",
    image: "/images/크로와상.png",
    type: "베이커리",
    price: 4200
  },
  {
    id: 5,
    name_kr: "레몬 파운드 케이크",
    name_en: "Lemon Pound Cake",
    description: "상큼한 레몬향과 진한 버터 풍미가 어우러진 파운드 케이크",
    ingredients: ["밀가루", "달걀", "설탕", "우유", "레몬"],
    kcal: 300,
    sugar: "20g",
    fat: "16g",
    image: "/images/레몬 파운드.png",
    type: "베이커리",
    price: 5500
  },
  {
    id: 6,
    name_kr: "초코젤라또",
    name_en: "Chocolate Gelato",
    description: "고급스러운 다크초콜릿으로 만든 초코 젤라또",
    ingredients: ["우유", "코코아", "초콜릿", "설탕"],
    kcal: 220,
    carbs: "25g",
    sugar: "16g",
    protein: "4g",
    fat: "12g",
    saturatedFat: "7g",
    sodium: "60mg",
    image: "/images/초코젤라또.png",
    type: "젤라또",
    price: 5500
  },
  {
    id: 7,
    name_kr: "로즈베리 티",
    name_en: "Roseberry Tea",
    description: "상큼한 로즈베리 향이 가득한 논커피 티 음료",
    base: "로즈베리 + 허브",
    image: "/images/로즈베리티.png",
    isSeasonal: true,
    hasWhipping: false,
    type: "noncoffee",
    price: 4800
  },
  {
    id: 8,
    name_kr: "바닐라 젤라또",
    name_en: "Vanilla Gelato",
    description: "부드럽고 진한 바닐라 향의 정통 이탈리안 젤라또",
    ingredients: ["우유", "바닐라빈", "설탕", "크림"],
    kcal: 190,
    sugar: "15g",
    fat: "9g",
    image: "/images/바닐라 젤라또.png",
    type: "gelato",
    price: 4200
  },
  {
    id: 9,
    name_kr: "크로와상",
    name_en: "Croffle",
    description: "겉은 바삭하고 속은 촉촉한 크루아상 와플",
    ingredients: ["밀가루", "버터", "설탕", "계란"],
    kcal: 320,
    sugar: "18g",
    fat: "14g",
    image: "/images/크로와상.png", // 대체 이미지 사용
    type: "bakery",
    price: 5500
  },
  {
    id: 10,
    name_kr: "연유라떼",
    name_en: "Condensed Milk Latte",
    description: "진한 연유의 달콤함이 더해진 라떼",
    image: "/images/연유라떼.png",
    isSeasonal: false,
    hasWhipping: false,
    type: "coffee",
    price: 5800
  }

];