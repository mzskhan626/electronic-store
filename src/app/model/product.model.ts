export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public description?: string,
        public detailDescription?: string, // Added detailed description
        public price?: number,
        public image?: string
    ) {}
}

