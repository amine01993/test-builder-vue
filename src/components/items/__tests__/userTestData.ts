import { Timestamp } from "firebase/firestore";

export const userTests = [
    {
        created_at: Timestamp.fromMillis(1738184114 * 1000),
        ended_in: Timestamp.fromMillis(1738184140 * 1000),
        id: "ZsP1QIkPT0QxIednwGhl",
        report: [
            {answers: ['ANSWER 11'], question_id: '4AHoh9moL9SFj83XdhY7'},
            {answers: ['ANSWER 22'], question_id: 'tKQLdeFFAm9Nz1HFAga2'},
        ],
        result: {score: 1.5},
        started_at: Timestamp.fromMillis(1738184114 * 1000),
        test: {
            max_points: 7,
            name: "Test Points Rule",
            questionCount: 4,
            user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
        },
        test_id: "8ezDRpfW9jVEHQP9tM4S",
        updated_at: Timestamp.fromMillis(1738184140 * 1000),
        user: {displayName: 'Test 523', email: 'test523@anonymous.com'},
        user_id: "cLwHE2bN2hVKgYmEXNXd6KseBXqN",
    },
    {
        result: {score: 7.5},
        test: {
            questionCount: 7,
            max_points: 10,
            user_id: "T9zxQ021bZdRPBFzbdLaO1B7Fwjg",
            name: "Hello world!",
        },
        updated_at: Timestamp.fromMillis(1738104371 * 1000),
        user_id: "cLwHE2bN2hVKgYmEXNXd6KseBXqN",
        report:[
            {answers: ["Angular","React","Svelte"], question_id: "iI3GLPVCaFR4CbXdoPCp"},
            {answers: ["15"], question_id:"8LAJxNq1d8HBFr0zlGW7"},
            {answers: ["IPhone"], question_id: "pLJDQD8nwUVK1Hpa3p5r"},
            {answers: ["youtubs"], question_id: "zwlm0LpRyIYyLUcxrMWV"},
            {answers: ["five hours"], question_id: "qKEPzirR32KUcJjnfjhL"},
            {answers: ["3600"], question_id: "MCwGApqdQugUglZaD72U"},
            {answers: ["True"], question_id: "G9N9H39Hom3o5LABPbZU"}
        ],
        started_at: Timestamp.fromMillis(1738104319 * 1000),
        created_at: Timestamp.fromMillis(1738104321 * 1000),
        ended_in: Timestamp.fromMillis(1738104371 * 1000),
        user: {"displayName":"Test 523","email":"test523@anonymous.com"},
        test_id: "wgLwri0DvrTiT5yhPSnM",
        id: "0KLGdHOkvxR92R4vt8xq",
    }
];