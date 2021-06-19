function area() {
    return this.x * this.y;
}

function vol() {
    return this.x * this.y * this.z;
}

function main(area, vol, input) {
    // console.log(area, vol);
    let outputArr = [];
    let ojbsArr = JSON.parse(input);

    for (let obj of ojbsArr) {
        // console.log(obj);
        outputArr.push({ area: area.call(obj), volume: vol.call(obj) });
    }

    console.log(outputArr);
}
main(
    area,
    vol,
    `[{"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"}]`
);
