function formatString(input: string, toUpper?: boolean): string {
   if (toUpper === true || undefined) {
        return input.toUpperCase();
   }
   return input.toLowerCase(); 
};



type Item = { title: string; rating: number };

function filterByRating(items: Item[]): Item[] {
    const filteredItems: Item[] = items.filter((item: Item) => item.rating >= 4);
    return filteredItems;
};



function concatenateArrays<T>(...arrays: T[][]): T[] {
    const concatenatedArray: T[] = [];
    arrays.map((array: T[]) => concatenatedArray.push(...array));
    return concatenatedArray;
}



function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    }
    if (typeof value === "number") {
        return value * 2;
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