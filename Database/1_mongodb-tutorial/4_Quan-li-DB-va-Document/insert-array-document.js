var userArr = [
  {
    user_name: "John",
    password: 123,
    email: "john@gmail.com",
    skills: ["HTML", "CSS", "JS"],
    status: "active",
    sex: true,
    languages: {
      English: 9,
      China: 7,
    },
    age: 10.0,
  },
  {
    user_name: "Math",
    password: 456,
    email: "nguyen@gmail.com",
    skills: ["Ruby", ".Net", "Python"],
    status: "active",
    sex: false,
    languages: {
      English: 9.5,
      Japan: 8,
    },

    age: 20.0,
  },
  {
    user_name: "Thomson",
    password: 789,
    email: "binh@gmail.com",
    skills: ["PHP", "Laravel"],
    status: "active",
    sex: false,
    languages: {
      English: 8.5,
      Korea: 7.5,
    },

    age: 30.0,
  },
  {
    user_name: "Max",
    password: 101,
    email: "binh@gmail.com",
    skills: ["PHP", "Laravel"],
    status: "active",
    sex: true,
    languages: {
      English: 10,
      American: 10,
    },

    age: 40.0,
  },
];

db.users.insert(userArr);
