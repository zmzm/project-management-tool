interface BaseModel {
    getId(): number;

    toJson(): any;

    toDatabaseObject(): any;
}

export default BaseModel;
