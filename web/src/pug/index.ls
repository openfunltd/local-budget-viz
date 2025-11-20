view = new ldview do
  root: document.body

#if !makechart? => makechart = {}
#if makechartdev? => makechart.scatter = makechartdev.chart

#(config) <- ld$.fetch "./assets/custom/config.json", {method: \GET}, {type: \json} .then _
(data) <- ld$.fetch \https://budget.openfun.app/api/counties, {method: \GET}, {type: \json} .then _
data = data["歲出"]
console.log data

prepare-bar-chart {data}
prepare-scatter-chart {data}
prepare-treemap {data}
