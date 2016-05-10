import {IColorManager,ColorManager} from '../color/ColorManager';

export interface IColorModule{
    getData():IColorModule;
}

export class ColorModule implements IColorModule{

    private colorObject : ITest;

    public constructor(){
        this.colorObject = new ColorManager();
        //this.getData();
    }

    public getData(){
        let data = this.colorObject.loadData();
        alert(data);
    }

}
