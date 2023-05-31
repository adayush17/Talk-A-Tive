const chats = [
    {
        isGroupChat: false,
        users: [
            {
                name: "Ayush Dwivedi",
                email: "ayush@example.com"
            },
            {
                name: "Piyush Chawla",
                email: "piyush@exaple.com"
            },
        ],
        _id: "617a077e18c25468bc7c4dd4",
        chatName: "Jon Doe",
    },
    {
        isGroupChat: false,
        users: [
            {
                name: "Guest User",
                email: "guest@example.com"
            },
            {
                name: "Piyush Chawla",
                email: "piyush@exaple.com"
            },
        ],
        _id: "617a077e18c35468bc7c4dd8",
        chatName: "Guest User",
    },
    {
        isGroupChat: false,
        users: [
            {
                name: "Anthony",
                email: "anthony@example.com"
            },
            {
                name: "Piyush Chawla",
                email: "piyush@exaple.com"
            },
        ],
        _id: "617a077e18c25888bc7c4dd9",
        chatName: "Anthony",
    },
    {
        isGroupChat: true,
        users: [
            {
                name: "Ayush Dwivedi",
                email: "ayush@example.com"
            },
            {
                name: "Piyush Chawla",
                email: "piyush@exaple.com"
            },
            {
                name:"Guest User",
                email: "guest@example.com",
            },
        ],
        _id: "617a077e18c20368bc7c4dd1",
        chatName: "Jon Doe",
        groupAmin:{
            name: "Guest User",
            email: "guest@xample.com",
        },
    }
]

module.exports= {chats};