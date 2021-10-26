import { Web } from "../Model/webType";

class WebDriver implements Web
{
    private _isPrivate: boolean = false;
    private _url: string | undefined;

    public get isPrivate(): boolean {
        return this._isPrivate;
    }

    public set isPrivate(value: boolean) {
        this._isPrivate = value;
    }

    public get url(): string {

        if(this._url === undefined) {
            return "";
        }

        return this._url;
    }

    public set url(value: string) {
        this._url = value;
    }

    public print() {
        console.log(this);
    }
}

export async function initiateWebDriver(details?: Web): Promise<any> {

    return new Promise((resolve, reject) => {
        if(details) resolve("Initiated");
        reject("Cannot be initiated");
    });
    // if(details.url === undefined || details.url.length <= 3)
    //     const driver = new WebDriver(details);

}

export async function executeTask(details: Web) {

}