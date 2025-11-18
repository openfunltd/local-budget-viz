({data})<-(->window.prepare-treemap = it) _

makechart.treemap {root: view.get(\treemap)}
  .then (chart) ->
    chart.init!
    chart.parse!
    chart.bind!
    chart.resize!
    chart.render!

