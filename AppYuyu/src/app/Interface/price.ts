export interface Prices {
    status:  boolean;
    results: number;
    prices:  Price[];
}

export interface Price {
    id:        number;
    price:     number;
    state:     number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
}