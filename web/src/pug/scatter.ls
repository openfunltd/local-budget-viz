({data})<-(->window.prepare-scatter-chart = it) _

data = data.filter -> it.county == \臺北市

data.map ->
  it.name = "機關別 > 來源別 > 子目"
  it.cat = if it["與去年差異"] > 0 => "增加" else if it["與去年差異"] < 0 => "減少" else "不變"
  # TODO 沒有去年預算
  it["增減比例"] = 100 * (
    (it["與去年差異"] or 0) /
    ((it["預算案"] - it["與去年差異"]) or 1) /* 去年金額, 無數據, 故推估 */
  ) >? -100 <? 100
  it["增減金額"] = Math.abs(it["與去年差異"])

raw = data
binding =
  name: {key: \name}
  cat: {key: \cat}
  x: {key: \增減比例}
  y: {key: \增減金額}

makechart.scatter {root: view.get(\scatter)}
  .then (chart) ->
    chart.on <[select]>, -> console.log it
    chart.set-raw {raw, binding}
    chart.config do
      regression: enabled: false
      dot: min-radius: 10, max-radius: 10
      xaxis:
        tick: inner: 0, boundary-offset: false
      yaxis:
        scale: \pr
        tick: inner: 0
      palette: colors: [
      * tag: <[增加]>, value: \#e8614c
      * tag: <[減少]>, value: \#0b918c
      * tag: <[不變]>, value: \#9db5d6
      ]
      legend: enabled: false
