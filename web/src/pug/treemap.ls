({data})<-(->window.prepare-treemap = it) _

data = data.filter -> it.county == \臺北市
data.for-each ->
  it.name = "... 子目"

console.log data
raw = data

binding =
  name: {key: \name}
  category: {key: \政事別}
  area: {key: \預算案}

makechart.treemap {root: view.get(\treemap)}
  .then (chart) ->
    chart.on <[select]>, -> console.log it
    chart.set-raw {raw, binding}
    chart.config do
      palette: default-palette
      legend: position: \bottom
