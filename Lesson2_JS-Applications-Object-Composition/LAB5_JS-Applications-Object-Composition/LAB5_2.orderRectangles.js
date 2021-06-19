function main(arr) {
    let rectArr = []

    for (let rectangle of arr) {
        let [width, height] = rectangle;
        let rectObj = {
            width,
            height,
            area: () => {
                return this.width * this.height;
            },
            compareTo: (rectangle) => {
                
            }
        };

        return rectObj;
    }
}

main([
    [10, 5],
    [5, 12],
]);
main([
    [10, 5],
    [3, 20],
    [5, 12],
]);
