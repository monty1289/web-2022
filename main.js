let total = 1000;
const SALARY = 250;

for(let i = 0; i < 52; i++)
{
    if (i % 2 == 0)
    {
        total = total + SALARY;
    }
}

console.log(total)

let multiply = (a, b) => {  
     let answer = a * b;
     console.log(answer);
};

multiply(2,4);

let func = _ => {console.log("I am a function!");}

func();

let nameMaker = (first, last) => first + " " + last;

let name = nameMaker("monty", "wood");
console.log(name);

let isMoreThanFive = num => {
    if(num > 5)  
        return true;  
    return false;
     
}
//let isMoreThanFive = num => num > 5;

let people = [
    ["Adon", "Moskal", "(Canadian)"],
    ["Donald", "Trump", "(American)"],
    ["Jacinda", "Ardern", "(Kiwi)"]
  ];

let filtered = people.filter((person) => {    
    return person[1].length > 5;
});

filtered.sort((a,b) => {
if(a[1] > b[1])
return 1;
    else
return -1;

})

console.log(filtered)


let olympics = [
    {
        "country": "People's Republic of China",
        "gold":38,
        "silver":32,
        "bronze":18
    },
    {
        "country": "Australia",
        "gold":17,
        "silver":7,
        "bronze":22
    },
    {
        "country" : "United States of America",
        "gold":39,
        "silver":41,
        "bronze":33
    },
    {
        "country":"Brazil",
        "gold":7,
        "silver":6,
        "bronze":8
    },
    {
        "country": "ROC",
        "gold":20,
        "silver":28,
        "bronze":23
    },
    {
        "country":"Japan",
        "gold":27,
        "silver":14,
        "bronze":17
    },
    {
        "country":"Italy",
        "gold":10,
        "silver":10,
        "bronze":20
    },
    {
        "country":"Canada",
        "gold":7,
        "silver":6,
        "bronze":11
    },
    {
        "country":"Great Britain",
        "gold":22,
        "silver":21,
        "bronze":22
    },
    {
        "country":"France",
        "gold":10,
        "silver":12,
        "bronze":11
    },
    {
        "country":"Germany",
        "gold":10,
        "silver":11,
        "bronze":16
    },
    {
        "country":"Netherlands",
        "gold":10,
        "silver":12,
        "bronze":14
    }
];


olympics.sort((a,b) => (a.gold + a.silver + a.bronze) > (b.gold + b.silver + b.bronze) ?  -1 : 1 );

let topTen = olympics.filter(x => (x.gold + x.silver + x.bronze) > 30)

console.log(topTen)


