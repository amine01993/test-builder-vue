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