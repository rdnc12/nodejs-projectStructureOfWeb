//jshint esversion:6

class Item{
    static isValid(model){
        return typeof model !== 'undefined' &&
            typeof model.text === 'string' &&
            model.text.length > 3;
    }
    
    // static toViewModel(model){

    // }

    // static fromViewModel(viewModel){

    // }
}


module.exports=Item;