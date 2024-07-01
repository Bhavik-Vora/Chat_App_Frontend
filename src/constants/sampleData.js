export const sampleChats = [
  {
    avatar: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s",
    ],
    name: "Bhavik Vora",
    _id: "1",
    groupChat: "false",
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s",
    ],
    name: "Bhavik_Jain",
    _id: "2",
    groupChat: "false",
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s",
    ],
    name: "Bhavik_Jain",
    _id: "4",
  },
  {
    avatar: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s",
    ],
    name: "Bhavik Vora",
    _id: "3",
  },
  {
    avatar: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s",
    ],
    name: "Testing User",
    _id: "2",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s",
    name: "Testing User_2",
    _id: "1",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s",
      name: "Bhavik_Jain",
    },
    _id: "2",
  },
  {
    sender: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxBVZWDN_XFigRvkezeDpe_GgodQ2MhpvuKbe6T4vTg&s",
      name: "Bhavik_Vora  ",
    },
    _id: "1",
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "abcd",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Message From NTa",
    _id: "123",
    sender: {
      _id: "abcd",
      name: "Director of NTA",
    },
    chat: "ChatId",
    groupChat: true,
    createdAt: "2024-06-16T10:41:20.630Z",
  },
  {
    attachments: [
      {
        public_id: "abcde",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Message From NTA Officials",
    _id: "1234",
    sender: {
      _id: "efgh",
      name: "NTA Official",
    },
    chat: "ChatId1",
    groupChat: false,
    createdAt: "2024-06-16T10:41:20.630Z",
  },
];


export const dashboardData = {
  users: [
    {
      name: "Bhavik_Vora",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "Bhavik_",
      friends: 20,
      groups: 1,
    },
    {
      name: "Bhavik_Jain",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "Bhavik_1",
      friends: 30,
      groups: 3,
    },
  ],
  chats: [
    {
      name: "Bhavik_Vora",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "233",
      groupChat: false, // Changed to boolean
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Bhavik_Vora",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],
  messages: [
    {
      attachments: [],
      content: "Message Of NTA",
      _id: "233",
      sender: {
        avatar:"https://www.w3schools.com/howto/img_avatar.png",
        name: "Bhavik_Jain",
      },
      chat: "chatId",
      groupChat:true,
      createdAt: "2024-06-16T10:41:20.630Z",
    },
    {
      attachments: [
        {
          public_id: "asas",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "12wewew",
      sender: {
        avatar:"https://www.w3schools.com/howto/img_avatar.png",
        name: "Bhavik_Jain",
      },
      chat: "chatId",
      groupChat:false,
      createdAt: "2024-06-16T10:41:20.630Z",
    },
  ],
};

