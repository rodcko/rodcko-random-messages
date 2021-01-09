const messages = [
    "Rodrigo",
    "Josue",
    "Jose",
    "Karol",
    "Norma",
    "Oscar",
    "Sergio",
    "Ricardo",
    "Gerardo"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };
