function superbowlWin(arr){
    let win = arr.find(arr => arr.result === "W");
    if(win){
        return win.year;
    }
}
console.log(superbowlWin(record))


    
        
    

