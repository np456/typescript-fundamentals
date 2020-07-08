export class LikeComponent{

    // want consumer to set initial values of these fields
    constructor(private _likesCount: number, private _isSelected: boolean)
    {
    }

    get likesCount(){
        return this._likesCount;
    }

    get isSelected(){
        return this._isSelected;
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

    onClick(){
        // if isSelected is true, add 1 or else -1
        //this.likesCount += (this.isSelected) ? 1: -1; //mistake in 1 : -1
        this.likesCount += (this.isSelected) ? -1: +1;

        this.isSelected = !this.isSelected;
    }

    // problem with current implementation

}

