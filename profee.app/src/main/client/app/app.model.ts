export class Product {
    public id: any;
    public name: any;
    public price: any;

    constructor(args: any) {
        this.id = args.id;
        this.name = args.name;
        this.price = args.price;
    }

    toJSON() {
        return {
            name: this.name,
            price: this.price
        };
    }
}

export class Feedback {
    public id: any;
    public title: any;
    public content: any;
    public rating: any;
    public givenBy: any;
    public givenOn: any;
    public productId:any;

    constructor(args: any) {
        this.id = args.id;
        this.title = args.title;
        this.content = args.content;
        this.rating = args.rating;
        this.givenBy = args.givenBy;
        this.givenOn = args.givenOn || new Date();
        this.productId = args.productId;
    }
}
