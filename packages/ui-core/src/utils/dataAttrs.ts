interface IAttrs {
    [key: string]: string;
}

export interface IDataAttrs {
    dataAttrs?: IAttrs;
}

const filterDataAttrs = (attrs: IAttrs = {}): IAttrs | {} => {
    if (!attrs || typeof attrs !== 'object') {
        return {};
    }

    return Object.keys(attrs)
        .filter(key => key.search(/^data-/) !== -1)
        .reduce((acc, key) => ({ ...acc, [key]: attrs[key] }), {});
};

export default filterDataAttrs;
