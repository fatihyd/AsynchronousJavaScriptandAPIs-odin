/*
let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holders: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let isShopOpen = true;

function order(time, work) {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log("Our shop is closed!"));
        }
    });
}

order(2000, () => {
    console.log("FRUIT " + stocks.fruits[0] + " was selected...");
})

    .then(() => {
        return order(0, () => {
            console.log("Production has started");
        });
    })

    .then(() => {
        return order(2000, () => {
            console.log("The " + stocks.fruits[0] + "was chopped...");
        });
    })

    .then(() => {
        return order(1000, () => {
            console.log("LIQUIDS " + stocks.liquid[0] + " and " + stocks.liquid[1] + " was selected...");
        });
    })

    .then(() => {
        return order(1000, () => {
            console.log("Started the machine");
        });
    })

    .then(() => {
        return order(2000, () => {
            console.log("Ice cream was placed on " + stocks.holders[0]);
        });
    })

    .then(() => {
        return order(3000, () => {
            console.log("TOPPING " + stocks.toppings[0] + " was selected");
        });
    })

    .then(() => {
        return order(1000, () => {
            console.log("Ice cream is served!!!");
        });
    })

    .catch(() => {
        console.log("The shop is closed for today :(");
    })

    .finally(() => {
        console.log("Day ended, shop is closed...");
    });
*/

/*
console.log("Program started...");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            {
                data: "Hello, friend!",
                error: null
            }
        );
    }, 5000);
});

console.log(myPromise);

console.log("Program in progress...");

myPromise
    .then((resolvedValue) => {
        console.log(resolvedValue);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("First promise chain complete!");
            }, 2000);
        });
    })
    .then((resolvedValue) => {
        console.log(resolvedValue);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Second promise chain complete!");
            }, 10000);
        });
    })
    .then((resolvedValue) => {
        console.log(resolvedValue);
    });
*/

/*
console.log("Program started...");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            {
                data: "Hello, friend!",
                error: null
            }
        );
    }, 5000);
});

console.log(myPromise);

console.log("Program in progress...");

myPromise
    .then((resolvedValue) => {
        console.log(resolvedValue);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("First promise chain complete!");
            }, 2000);
        });
    })
    .then((resolvedValue) => {
        console.log(resolvedValue);
    });

myPromise
    .then((resolvedValue) => {
        console.log(resolvedValue);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Second promise chain complete!");
            }, 4000);
        });
    })
    .then((resolvedValue) => {
        console.log(resolvedValue);
    });
*/

/*
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
});

const yourPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 5000);
});

Promise.all([myPromise, yourPromise])
    .then((resolvedValues) => {
        console.log(resolvedValues[0] + resolvedValues[1]);
    });
*/

/*
// URL (required), options (optional)
fetch('https://api.giphy.com/v1/gifs/translate?api_key=wrh9poinocYAdSumfg2ofHs8ZBi25GQR&s=cats', {
    mode: 'cors'
})
    .then(function (response) {
        // Successful response :)
        console.log("nice");
    })
    .catch(function (err) {
        // Error :(
        console.log("bad");
    });
*/
/*
const server = {
    people: [
        {
            name: "Odin",
            age: 20,
        },
        {
            name: "Thor",
            age: 35,
        },
        {
            name: "Freyja",
            age: 29,
        },
    ],

    getPeople() {
        return new Promise((resolve, reject) => {
            // Simulating a delayed network call to the server
            setTimeout(() => {
                resolve(this.people);
            }, 2000);
        });
    },
};

function getPersonsInfo(name) {
    return server.getPeople()
        .then((people) => {
            return people.find((person) => {
                return person.name === name
            });
        });
}

async function getPersonsInfo(name) {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
}

getPersonsInfo("Odin")
    .then((val) => {
        console.log(val.age);
    });
*/