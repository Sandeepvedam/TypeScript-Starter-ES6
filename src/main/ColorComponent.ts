import {IColorManager,ColorManager} from '../color/ColorManager';

export interface IColorModule{
    getData():IColorModule;
}

export class ColorModule implements IColorModule{

    private colorObject : IColorManager;

    public constructor(){
        this.colorObject = new ColorManager();
        //this.getData();
    }

    public getData(){
        let data = this.colorObject.loadData();
        console.log(data);
    }

}
