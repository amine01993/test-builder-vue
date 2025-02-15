import { Timestamp } from "firebase/firestore";

export const tests = [
    {
        questionCount: 2,
        max_points: 0,
        time_limit: 147,
        updated_at: Timestamp.fromMillis(1738549019 * 1000),
        user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
        name: "Math Test",
        created_at: Timestamp.fromMillis(1737833341 * 1000),
        description: "Learn how to Test your addition, subtraction, multiplication and division.",
        id: "yvkJJBT4UU6xpRJzH1JM",
    },
    {
        questionCount: 7,
        max_points: 2,
        time_limit: 180,
        updated_at: Timestamp.fromMillis(1738278500 * 1000),
        user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
        name: "Hello world!",
        created_at: Timestamp.fromMillis(1737315253 * 1000),
        description: "A beginner's test,\nwelcome to Test Builder.\nHope you enjoy it!",
        id: "wgLwri0DvrTiT5yhPSnM",
    },
    {
        questionCount: 2,
        max_points: 3,
        time_limit: 0,
        updated_at: Timestamp.fromMillis(1738278463 * 1000),
        user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
        name: "French test!",
        description: "No time limit for this test, have fun",
        created_at: Timestamp.fromMillis(1737069672 * 1000),
        id: "OWEIR9GUkaAFWFDvTbFi",
    },
    {
        questionCount: 4,
        max_points: 7,
        time_limit: 300,
        updated_at: Timestamp.fromMillis(1738183888 * 1000),
        user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
        name: "Test Points Rule",
        created_at: Timestamp.fromMillis(1738106096 * 1000),
        description: "Test Description:\nHello,\nChatGPT is not allowed.\nGood luck!",
        id: "8ezDRpfW9jVEHQP9tM4S",
    },
    {
        questionCount: 1,
        max_points: 0,
        time_limit: 0,
        updated_at: Timestamp.fromMillis(1737851724 * 1000),
        user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
        name: "Test validation",
        description: "",
        created_at: Timestamp.fromMillis(1737851724 * 1000),
        id: "zd3diMPoRoTFiPiddI3n",
    },
    {
        questionCount: 0,
        max_points: 0,
        time_limit: 120,
        updated_at: Timestamp.fromMillis(1737069424 * 1000),
        user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
        name: "general math questions",
        description: "- Don't use a calculator.\n- Only pencil and paper are allowed.\n- Good luck!",
        created_at: Timestamp.fromMillis(1737069424 * 1000),
        id: "LjgeBOS0T5HvYE7HGApn",
    },
];

export const fullTest = {
    questionCount: 7,
    max_points: 2,
    time_limit: 180,
    updated_at: Timestamp.fromMillis(1738278500 * 1000),
    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
    name: "Hello world!",
    created_at: Timestamp.fromMillis(1737315253 * 1000),
    description: "A beginner's test,\nwelcome to Test Builder.\nHope you enjoy it!",
    id: "wgLwri0DvrTiT5yhPSnM",
    questions: [
        {
            max_points: 2,
            updated_at: Timestamp.fromMillis(1738283100 * 1000),
            user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
            created_at: Timestamp.fromMillis(1737322074 * 1000),
            text: "What is the leading SPA framework ?",
            choiceCount: 4,
            position: -10,
            type: 2,
            test_id: "wgLwri0DvrTiT5yhPSnM",
            id: "iI3GLPVCaFR4CbXdoPCp",
            choices: [
                {
                    question: { type: 2 },
                    updated_at: Timestamp.fromMillis(1738358021 * 1000),
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737581205 * 1000),
                    text: "Vue",
                    position: 0,
                    is_correct: false,
                    points: 0,
                    id: "XbqIIjIZbM0V9s7p8YpK"
                },
                {
                    question: { type: 2 },
                    updated_at: Timestamp.fromMillis(1738358021 * 1000),
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737581196 * 1000),
                    text: "Angular",
                    position: 1,
                    is_correct: false,
                    points: 0,
                    id: "gAc44A7rbcMw7PGX6yLf"
                },
                {
                    question: { type: 2 },
                    updated_at: Timestamp.fromMillis(1738358021 * 1000),
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737581183 * 1000),
                    text: "React",
                    position: 2,
                    is_correct: true,
                    points: 2,
                    id: "EQ3GjVjBwfg2gLqd4CKk"
                },
                {
                    question: { type: 2 },
                    updated_at: Timestamp.fromMillis(1738282452 * 1000),
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737581243 * 1000),
                    text: "Svelte",
                    position: 4,
                    is_correct: false,
                    points: -1,
                    id: "euTO9H9SrugtXIAQLkd8"
                }
            ]
        },
        {
            max_points: 0,
            updated_at: Timestamp.fromMillis(1738283100 * 1000),
            user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
            created_at: Timestamp.fromMillis(1737405810 * 1000),
            text: "is 11 a prime number?",
            choiceCount: 2,
            position: -1,
            type: 1,
            test_id: "wgLwri0DvrTiT5yhPSnM",
            id: "G9N9H39Hom3o5LABPbZU",
            choices: [
                {
                    updated_at: Timestamp.fromMillis(1737934191 * 1000),
                    question: {type: 1,},
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737934191 * 1000),
                    text: "True",
                    position: 0,
                    is_correct: true,
                    points: 1,
                    id: "srm1zooGwkkXucPiWNhi"
                },
                {
                    updated_at: Timestamp.fromMillis(1737934230 * 1000),
                    question: {type: 1,},
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737934230 * 1000),
                    text: "False",
                    position: 1,
                    is_correct: false,
                    points: 0,
                    id: "nMQPEyFakxg6d7g4xrxO"
                }
            ]
        },
        {
            max_points: 0,
            updated_at: Timestamp.fromMillis(1738280978 * 1000),
            user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
            created_at: Timestamp.fromMillis(1737405580 * 1000),
            text: "What is the most popular phone ?",
            choiceCount: 3,
            position: 0,
            type: 1,
            test_id: "wgLwri0DvrTiT5yhPSnM",
            id: "pLJDQD8nwUVK1Hpa3p5r",
            choices: [
                {
                    updated_at: Timestamp.fromMillis(1737513823 * 1000),
                    question: { type: 1 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737513823 * 1000),
                    text: "IPhone",
                    position: 0,
                    is_correct: true,
                    points: 1.5,
                    id: "u2lfhzCR1IfEYUnO0O17"
                },
                {
                    updated_at: Timestamp.fromMillis(1737513799 * 1000),
                    question: { type: 1 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737513799 * 1000),
                    text: "Samsung",
                    position: 1,
                    is_correct: true,
                    points: 1,
                    id: "Xlu1pEvYpyOKdSxWxbTK"
                },
                {
                    updated_at: Timestamp.fromMillis(1737581098 * 1000),
                    question: { type: 1 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737581098 * 1000),
                    text: "Nokia",
                    position: 5,
                    is_correct: false,
                    points: 0,
                    id: "JgYL1HweBB5wEIDn21cc"
                }
            ]
        },
        {
            max_points: 0,
            updated_at: Timestamp.fromMillis(1738283100 * 1000),
            user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
            created_at: Timestamp.fromMillis(1737856189 * 1000),
            text: "The best social media platform?",
            choiceCount: 1,
            position: 0,
            type: 3,
            id: "zwlm0LpRyIYyLUcxrMWV",
            choices: [
                {
                    updated_at: Timestamp.fromMillis(1737934157 * 1000),
                    question: { type: 3 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737934157 * 1000),
                    text: "Youtube",
                    position: 0,
                    is_correct: true,
                    points: 1,
                    id: "JR2HCvK2KJbJH0YXcLQ0"
                }
            ]
        },
        {
            max_points: 0,
            updated_at: Timestamp.fromMillis(1738283100 * 1000),
            user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
            created_at: Timestamp.fromMillis(1737321965 * 1000),
            text: "3 + 6 * 2?",
            choiceCount: 4,
            position: 1,
            type: 4,
            test_id: "wgLwri0DvrTiT5yhPSnM",
            id: "8LAJxNq1d8HBFr0zlGW7",
            choices: [
                {
                    updated_at: Timestamp.fromMillis(1737861187 * 1000),
                    question: { type: 4 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737861187 * 1000),
                    text: "78",
                    position: 0,
                    is_correct: false,
                    points: 0,
                    id: "ALYB80ArEk99Iy1ONQmE"
                },
                {
                    updated_at: Timestamp.fromMillis(1737493019 * 1000),
                    question: { type: 4 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737493019 * 1000),
                    text: "18",
                    position: 1,
                    is_correct: false,
                    points: 0,
                    id: "ndaXZl2MeYmf6hIgtwl6"
                },
                {
                    updated_at: Timestamp.fromMillis(1737494371 * 1000),
                    question: { type: 4 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737492987 * 1000),
                    text: "15",
                    position: 2,
                    is_correct: true,
                    points: 1.5,
                    id: "p2MpjvyIYERLpUchFnAk"
                },
                {
                    updated_at: Timestamp.fromMillis(1737861075 * 1000),
                    question: { type: 4 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737861075 * 1000),
                    text: "33",
                    position: 5,
                    is_correct: false,
                    points: 0,
                    id: "KmFW1LPwdRh4M524XIv2"
                }
            ]
        },
        {
            max_points: 0,
            updated_at: Timestamp.fromMillis(1738281421 * 1000),
            user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
            created_at: Timestamp.fromMillis(1737410966 * 1000),
            text: "What is the time difference between ET and GMT ?",
            choiceCount: 4,
            position: 2,
            type: 3,
            test_id: "wgLwri0DvrTiT5yhPSnM",
            id: "qKEPzirR32KUcJjnfjhL",
            choices: [
                {
                    updated_at: Timestamp.fromMillis(1737582897 * 1000),
                    question: { type: 3 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737582876 * 1000),
                    text: "5 hours",
                    position: 0,
                    is_correct: true,
                    points: 0.5,
                    id: "3NLNQUaB6H4F4iaFvAId"
                },
                {
                    updated_at: Timestamp.fromMillis(1737582807 * 1000),
                    question: { type: 3 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737582807 * 1000),
                    text: "five hours",
                    position: 0,
                    is_correct: true,
                    points: 0.5,
                    id: "cOfenERXGsk5BLwOlDiO"
                },
                {
                    updated_at: Timestamp.fromMillis(1737582866 * 1000),
                    question: { type: 3 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737582866 * 1000),
                    text: "5",
                    position: 0,
                    is_correct: true,
                    points: 0.5,
                    id: "dxXwWABTGXszaujNZZzj"
                },
                {
                    updated_at: Timestamp.fromMillis(1737582822 * 1000),
                    question: { type: 3 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737582822 * 1000),
                    text: "3 hours",
                    position: 1,
                    is_correct: false,
                    points: 0,
                    id: "7ySTJqIU5ZRetOO9qjJM"
                }
            ]
        },
        {
            max_points: 0,
            updated_at: Timestamp.fromMillis(1738281421 * 1000),
            user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
            created_at: Timestamp.fromMillis(1737410914 * 1000),
            choiceCount: 4,
            text: "How many seconds in one Hour?",
            position: 3,
            type: 1,
            test_id: "wgLwri0DvrTiT5yhPSnM",
            id: "MCwGApqdQugUglZaD72U",
            choices: [
                {
                    updated_at: Timestamp.fromMillis(1737934340 * 1000),
                    question: { type: 1 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737934312 * 1000),
                    text: "60",
                    position: -1,
                    is_correct: false,
                    points: 0,
                    id: "8x5pe8itP1XgNOAurGAR"
                },
                {
                    updated_at: Timestamp.fromMillis(1737934340 * 1000),
                    question: { type: 1 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737934323 * 1000),
                    text: "50",
                    position: 0,
                    is_correct: false,
                    points: 0,
                    id: "DNEWNr9QxU7Y8K9A5XCI"
                },
                {
                    updated_at: Timestamp.fromMillis(1737934337 * 1000),
                    question: { type: 1 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737934334 * 1000),
                    text: "3600",
                    position: 1,
                    is_correct: true,
                    points: 2,
                    id: "AhHUdTspiv6VLuimqC0O"
                },
                {
                    updated_at: Timestamp.fromMillis(1737934337 * 1000),
                    question: { type: 1 },
                    user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
                    created_at: Timestamp.fromMillis(1737934277 * 1000),
                    text: "2400",
                    position: 4,
                    is_correct: false,
                    points: 0,
                    id: "ni4Rrx9QzVTR4NasYJ9p"
                }
            ]
        }
    ]
};