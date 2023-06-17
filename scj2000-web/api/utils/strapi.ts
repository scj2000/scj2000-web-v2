interface StrapiObjectAttributes {
    [key: string]: any
}

interface StrapiObjectData {
    id: number
    attributes: StrapiObjectAttributes
}

export interface StrapiResponse {
    data?: StrapiObjectData
    id?: number
    attributes?: object
}

function flattenArray(obj: Array<StrapiResponse>): Array<object> {
    return obj.map(e => flatten(e));
}
  
function flattenData(obj: StrapiResponse): StrapiResponse | Array<object> {
    if (obj?.data) {
        return flatten(obj.data);
    }
    return obj
}

function flattenAttrs(obj: StrapiObjectAttributes): StrapiResponse {
    let attrs: StrapiObjectAttributes = {};
    for (var key in obj.attributes) {
        attrs[key] = flatten(obj.attributes[key]);
    }
    return {
        id: obj.id, 
        ...attrs
    };
}
  
export function flatten(obj: StrapiResponse | Array<StrapiResponse>): StrapiResponse | Array<object> {
    if (Array.isArray(obj)) {
        return flattenArray(obj);
    }
    if (obj?.data) {
        return flattenData(obj);
    }
    if (obj?.attributes) {
        return flattenAttrs(obj);
    }
    return obj;
}