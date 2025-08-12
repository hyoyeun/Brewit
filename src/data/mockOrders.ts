export const mockOrdersItems = [
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
        },
        orderStatus: "확인중",
        orderDate: "2022.10.18 11:12",

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
        orderStatus: "픽업 완료",
        orderDate: "2024.01.18 00:44",

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
        orderStatus: "주문 취소됨",
        orderDate: "2023.06.06 05:47",



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
        orderStatus: "확인중",
        orderDate: "2025.05.01 19:04",


    },

]