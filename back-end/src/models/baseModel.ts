interface IIBaseModel {
    getId(): number;

    toJson(): any;

    toDatabaseObject(): any;
}

export default IIBaseModel;
