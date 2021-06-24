export function parseWithDate<T>(jsonString: string): T {
    var reDateDetect = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
    var resultObject = JSON.parse(jsonString, (_key: any, value: any) => {
        if (typeof value == 'string' && (reDateDetect.exec(value))) return new Date(value);
        return value;
    });
    return <T>resultObject;
}

export function parseWithDate2<T>(json: any): T {
    var reDateDetect = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
    for (const key in json) {
        const value = json[key];
        if (typeof value == 'string' && (reDateDetect.exec(value))) {
            json[key] = new Date(value);
        }
        if (typeof value == 'object') parseWithDate2(value);
    }
    return <T>json;
}