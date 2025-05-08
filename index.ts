function formatString(input: string, toUpper?: boolean): string {
   if (toUpper === true || undefined) {
        return input.toUpperCase();
   }
   return input.toLowerCase(); 
};




function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filteredItems: { title: string; rating: number }[] = items.filter((item: { title: string; rating: number }) => item.rating >= 4);
    return filteredItems;
};



function concatenateArrays<T>(...arrays: T[][]): T[] {
    const concatenatedArray: T[] = [];
    arrays.map((array: T[]) => concatenatedArray.push(...array));
    return concatenatedArray;
}



class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}




function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    }
    else if (typeof value === "number") {
        return value * 2;
    }
    else {
        return 0;
    }
}



interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (!products) {
        return null;
    }
    const sortedProducts: Product[] = products.sort((a: Product, b: Product) => b.price - a.price);
    return sortedProducts[0]; 
}



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}