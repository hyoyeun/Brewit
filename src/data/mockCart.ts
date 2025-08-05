export const mockCartItems = [
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
        price: 5000,
        count: 1,
        temperatura: "ICED",
        syrup: {
            "헤이즐넛 시럽": 2,
        },
        addSyup: {
            "바닐라 시럽": 1
        }
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
        price: 2500,
        count: 1,
        temperatura: "HOT",
        addSrup: {
            "바닐라 시럽": 1
        },
    },
    {
        id: 3,
        name_kr: "스트로베리 라떼",
        name_en: "Strawberry Latte",
        description: "생딸기 과육과 우유가 층층이 어우러진 상큼한 라떼",
        base: "딸기",
        image: "/images/스트로베리 라떼.png",
        isSeasonal: true,
        hasWhipping: true,
        type: "논커피",
        price: 5400,
        count: 1,
        temperatura: "ICED",

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
        price: 4200,
        count: 1,
    },
    // {
    //     id: 5,
    //     name_kr: "레몬 파운드 케이크",
    //     name_en: "Lemon Pound Cake",
    //     description: "상큼한 레몬향과 진한 버터 풍미가 어우러진 파운드 케이크",
    //     ingredients: ["밀가루", "달걀", "설탕", "우유", "레몬"],
    //     kcal: 300,
    //     sugar: "20g",
    //     fat: "16g",
    //     image: "/images/레몬 파운드.png",
    //     type: "베이커리",
    //     price: 5500,
    //     count: 2,
    // }

]