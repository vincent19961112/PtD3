d3.select("#foo").attr("fill", "red").attr("y", 10).attr("class", "bar");

d3.select("#painter")
    .append("circle")
    .attr("fill", "yellow")
    .attr("r", 50)
    .attr("cx", 100)
    .attr("cy", 100);

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const body = d3.select("#painter1");
const circles = body.selectAll("circle").data(data);
circles
    .enter()
    .append("circle")
    .attr("cx", (d, i) => {
        return i * 30 + 10;
    })
    .attr("cy", 150)
    .attr("r", (d) => {
        return d;
    })
    .attr("fill", "black");

const data1 = [1, 2, 3, 4, 5];

const texts = d3.select("body").selectAll("p");

const update = texts.data(data1);
console.log("update", update);

const enter = update.enter();
console.log("enter", enter);

update.append("p").text((d) => {
    return "update: " + d;
});
enter.text((d) => {
    return "enter: " + d;
});

const data2 = [874, 208, 30, 500, 1000];
const svg = d3.select("#painter2");
const y = d3
    .scaleLinear()
    .domain([0, d3.max(data2)])
    .range([0, 400]);

const rects = svg
    .selectAll("rect")
    .data(data2)
    .enter()
    .append("rect")
    .attr("x", (d, i) => {
        return i * 60;
    })
    .attr("height", (d, i) => {
        return y(d);
    })
    .attr("width", 40)
    .attr("fill", "black");

const data3 = [
    { value: 874, name: "1" },
    { value: 291, name: "2" },
    { value: 30, name: "3" },
    { value: 500, name: "4" },
    { value: 1000, name: "5" },
];
const svg1 = d3
    .select("#painter3")
    .append("g")
    .attr("transform", "scale(0.9)")
    .attr("transform-origin", "center");
const y1 = d3
    .scaleLinear()
    .domain([0, d3.max(data3.map((e) => e.value))])
    .range([0, 400]);

const x1 = d3
    .scaleBand()
    .domain(data3.map((e) => e.name))
    .range([0, 600])
    .paddingInner(0.3)
    .paddingOuter(0.3);

const xAxisCall = d3.axisTop(x1);
const yAxisCall = d3.axisLeft(y1);

const xAxis = svg1.append("g").attr("class", "x axis").call(xAxisCall);
const yAxis = svg1.append("g").attr("class", "y axis").call(yAxisCall);

const rects1 = svg1
    .selectAll("rect")
    .data(data3)
    .enter()
    .append("rect")
    .attr("x", (d, i) => {
        return x1(d.name);
    })
    .attr("width", x1.bandwidth)
    .attr("height", (d, i) => {
        return y1(d.value);
    })
    .attr("fill", "black");