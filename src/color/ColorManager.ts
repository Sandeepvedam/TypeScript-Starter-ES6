
import * as jQuery from 'jquery';
import * as Q from 'q';

export interface IColorManager{
    loadData():IColorManager;
}

export interface IResponse{
    data: IResponse;
    promise: Q.Promise<any>;
}

export class ColorManager implements IColorManager{

    constructor(){

    }

    public loadData(): Q.Promise<IResponse[]> {
        let defer = Q.defer<IResponse[]>();
        let dataUrl = 'json/data.json';
        jQuery.get(dataUrl,function(response){
            let promises: IResponse[] = [];
            for (let colors of response){
                let promiseData : IResponse = {
                    data : colors
                };
                promises.push(recommendationPromise);
            }
            defer.resolve(promises);
        });

        return defer.promise;
    }

}
