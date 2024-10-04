let truee = true;
let promise = () => {
    return new Promise((resolve,reject) => {
        if(truee) resolve("resolved");
        reject("rejected");
    });
}

// old ecma script
// async function main () {
//     try {
//         let variable = await promise();
//         console.log(variable);
//     } catch(error) {
//         console.log(error);
//     }

// }

const main = async () => {
    try {
        let variable = await promise();
        console.log(variable);
    } catch(error) {
        console.log(error);
    }

}

main();
// if you want to see more details got to NodeJS/async await
