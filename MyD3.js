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