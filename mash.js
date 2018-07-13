function mash(){
    function getHome(){
        let home = ["mansion", "apartment", "shack", "house", "cardboard box", process.argv[2]];;
        let x = home[Math.floor(Math.random()*home.length)];
        return x
    }
    function getChildrenCount(){
        let x = Math.floor(Math.random()*100);
        let y = process.argv[3]
        return x || y
    }
    function getCar(){
        let car = ["Lamborghini", "Ferrari", "Hoopty", "box with wheels", "Toyota", process.argv[4]];
        let x = car[Math.floor(Math.random()*car.length)];
        return x
    }
    function getCareer(){
        let career = ["doctor", "lawyer", "engineer", "day laborer", process.argv[5]];
        let x = career[Math.floor(Math.random()*career.length)];
        return x
    }
    return "You'll live in a " + getHome() + ", you'll have " + getChildrenCount() + " kids, you'll drive a " + getCar() + "and be a " + getCareer() + "!"
}
const result = mash();

if(process.argv[2] != undefined && process.argv[3] != undefined && process.argv[4] != undefined && processargv[5] != undefined){
    console.log(result);
}else{
    console.log("Please input your preferences in order to get a result.")
}