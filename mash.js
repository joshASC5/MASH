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
    return "You'll live in a " + getHome() + ", you'll have " + getChildrenCount() + " kids, and you'll drive a " + getCar() + "!"
}
const result = mash();
console.log(result);