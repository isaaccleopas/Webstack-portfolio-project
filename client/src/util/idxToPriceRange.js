export const arrPriceRanges = [
    "100000-1000000",
    "1000000-5000000",
    "5000000-10000000",
    "10000000-20000000",
    "20000000-100000000", 
    "100000000-1000000000000" // Represents "100,000,000 and Above" with a different format
];

export const priceRangeToIndex = (priceRange) => {
    const index = arrPriceRanges.findIndex(priceRg => {
        if (priceRg === priceRange || priceRg === "100000000->") {
            return true;
        }
        const rangeParts = priceRg.split('-');
        if (rangeParts.length === 2) {
            const min = parseInt(rangeParts[0], 10);
            const max = parseInt(rangeParts[1], 10);
            if (priceRange >= min && priceRange <= max) {
                return true;
            }
        }
        return false;
    });

    return index;
}
