
export class Job {
    constructor(data) {
        this.id = data.id
        this.company = data.company
        this.jobTitle = data.jobTitle
        this.hours = data.hours
        this.rate = data.rate
        this.description = data.description
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.creator = data.creator
    }
}

/**{
    "_id": "660ce0a910c55f16a4e9b798",
    "company": "Coding",
    "jobTitle": "Coder",
    "hours": 40,
    "rate": 35,
    "description": "Code some more",
    "creatorId": "660c60357ce5fd8cbdfb0d6a",
    "createdAt": "2024-04-03T04:52:57.343Z",
    "updatedAt": "2024-04-03T04:52:57.343Z",
    "__v": 0,
    "creator": {
        "_id": "660c60357ce5fd8cbdfb0d6a",
        "name": "theclock",
        "picture": "https://s.gravatar.com/avatar/096e22adeba65857ee4adb348a7547b9?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fth.png",
        "id": "660c60357ce5fd8cbdfb0d6a"
    },
    "id": "660ce0a910c55f16a4e9b798"
} */