let arr = new Array();

class CustomArr {
    constructor(){
        this.length = 0
        this.data = {}
    }
    myPush(element){
        this.data[this.length] = element
        this.length++
        return this.data
    }
    myFind(index){
        if(this.data[index] === undefined){
            console.log("Not found");
            
        }
        return this.data[index]
    }
    myPop(){
        delete this.data[this.length -1]
        this.length--
        return
    }
    myInclude(params){
        for (let i = 0; i < this.length; i++) {
            if(this.data[i] == params ){
            console.log(params,"is in ",this.data);
        
            }
                console.log(params,"is not in ",this.data);
            
            }

        }
    myForeach(){
        for (let index = 0; index < this.length; index++) {
            console.log(this.data[index],"is in index",index );
             
        }
    }
    // myShift(){
    //     let firstOne = this.data[0]
    //     delete firstOne[this.data--]
        
    //     return
    // }
    myFilter(){
        let saved = new CustomArr()

        for (let i = 0; i < this.length; i++) {
            let value = this.data[i]
            if (this.length = 2) {
                saved.myPush(value)
            }
            
        }
        return saved
    }
    mySlice(first,last){
        let newOne = new CustomArr()
        for (let i = first; i < last && i < this.length; i++) {
            newOne.myPush(this.data[i])
            
        }
        return newOne
    }
}

let arr1 = new CustomArr()
arr1.myPush("Ayo")
arr1.myPush("Ade")
console.log(arr1.myFind(0));
// console.log(arr1.myPop());
arr1.myPush("Biola")
console.log(arr1);
console.log( arr1.myInclude("Ade"));
console.log( arr1.myForeach());
// console.log(arr1.myFilter());
console.log(arr1.mySlice(1,2));


//include
// foreach
// shift
// unshift
// slice
// filter