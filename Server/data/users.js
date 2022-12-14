import bcrypt from "bcryptjs";

const users = [
    {
        username: "Admin",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        username: "User",
        email: "user.@gmail.com",
        password: bcrypt.hashSync("123456", 10)
    },
];

export default users;