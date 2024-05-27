function fiveHeads() {
        return new Promise( (resolve, reject) => {
                function fiveHeads() {
                let headsCount = 0;
                let attempts = 0;
                while(headsCount < 100) {
                    attempts++;
                    let result = tossCoin();
                    console.log(`${result} was flipped`);
                    if(result === "heads") {
                        headsCount++;
                        resolve(`It took ${attempts} tries to flip five "heads"`);
                    } else {
                        headsCount = 0;
                    }
                }
                
            }
            reject("Coins flipped 100 times without having 5 heads in a row 😭")
            
        });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );