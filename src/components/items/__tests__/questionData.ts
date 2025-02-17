import { Timestamp } from "firebase/firestore";

export const questions = [
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
        id: "iI3GLPVCaFR4CbXdoPCp"
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
        id: "G9N9H39Hom3o5LABPbZU"
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
        id: "pLJDQD8nwUVK1Hpa3p5r"
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
        id: "zwlm0LpRyIYyLUcxrMWV"
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
        id: "8LAJxNq1d8HBFr0zlGW7"
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
        id: "qKEPzirR32KUcJjnfjhL"
    },
    {
        max_points: 0,
        updated_at: Timestamp.fromMillis(1737410966 * 1000),
        user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
        created_at: Timestamp.fromMillis(1737410966 * 1000),
        choiceCount: 4,
        text: "How many seconds in one Hour?",
        position: 3,
        type: 1,
        test_id: "wgLwri0DvrTiT5yhPSnM",
        id: "MCwGApqdQugUglZaD72U"
    }
];

export const fullQuestion = {
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
};