export enum FormControlType{
    input,
    select,
    date,
}

export class FormSharedModel {

    public formLabel: string;
    public formControlName: string;
    public formControlType: FormControlType;
    public onlyNumber: boolean;
    public select?: Selector[];
    public hasError?: HasErrorModel[];

    constructor(
        formLabel: string,
        formControlName: string,
        formControlType: FormControlType,
        onlyNumber: boolean,
        select?: Selector[],
        hasError?: HasErrorModel[]
    )
    {
        this.formLabel = formLabel;
        this.formControlName = formControlName;
        this.formControlType = formControlType;
        this.onlyNumber = onlyNumber;
        this.select = select;
        this.hasError = hasError;
    }

}

export class HasErrorModel {

    public error: string;
    public text: string;

    constructor(
        error: string,
        text: string
    )
    {
        this.error = error;
        this.text = text;
    }
}

export class Selector {

    public keyCode: string;
    public value: string;

    constructor(
        keyCode: string,
        value: string
    )
    {
        this.keyCode = keyCode;
        this.value = value;
    }
}