const { get, call } = require("./index");

const users = [
    {
        name: "Wilian",
        info: {
            address: {
                street: "Somewhere Street",
                number: 211
            }
        }
    },
    {
        name: "Peter Parker",
        info: {
            job: "Photographer"
        }
    }
];

users.forEach(user => {
    const name = get(user, "name");
    const street = get(user, "info.address.street");
    const job = get(user, "info.job", null);

    console.log("\nname: ", name);
    console.log("info.address.street: ", street);
    console.log("info.job: ", job);
});
console.info("\nGet test passed!\n");

const template = {
    price: {
        name: "Price",
        value: x =>
            new Intl.NumberFormat("en-US", {
                currency: "USD",
                style: "currency"
            }).format(x)
    }
};

const data = [
    {
        symbol: "AAPL",
        price: 204.93
    },
    {
        symbol: "GOOGL",
        price: 1182.71
    }
];

const columns = ["symbol", "price"];
console.log(...columns.map(key => get(template, key + ".name", key)));

data.forEach(asset => {
    const formated = Object.entries(asset).map(([key, value]) => {
        return call(template, key + ".value", value) || value;
    });
    console.log(...formated);
});

console.log("\nCall test passed!");
