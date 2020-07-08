"use strict";
exports.__esModule = true;
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    // want consumer to set initial values of these fields
    function LikeComponent(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    //One solution
    // onClick(){
    //     if(this.isSelected){
    //         this.likesCount--;
    //         this.isSelected = false;
    //     }
    //     else{
    //         this.likesCount++;
    //         this.isSelected = true;
    //     }
    // }
    LikeComponent.prototype.onClick = function () {
        // if isSelected is true, add 1 or else -1
        //this.likesCount += (this.isSelected) ? 1: -1; //mistake in 1 : -1
        this.likesCount += (this.isSelected) ? -1 : +1;
        this.isSelected = !this.isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
