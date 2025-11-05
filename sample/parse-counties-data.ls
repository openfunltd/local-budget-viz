parse-counties-data = (data) ->
  counties = Array.from(new Set(data.map -> it.county))
  alltypes = new Set!
  raw = counties.map (county) ->
    list = data.filter(-> it.county == county)
    types = Array.from(new Set(list.map -> it['政事別']))
    types.map (type)-> alltypes.add type
    value = Object.fromEntries types.map (type) ->
      ret = list
        .filter(->it['政事別'] == type and it.year == 114)
        .reduce(((a,b) -> a + b["預算案"]), 0)
      [type, ret]
    {county} <<< value
  ref-row = raw.filter(-> it.county == \臺北市).0
  raw = raw.filter -> it.county != \中央 and it["民政支出"] != 0
  alltypes = Array.from(alltypes)
  raw.map (row) ->
  alltypes.sort (a,b) ->
    [a, b] = [ref-row[a], ref-row[b]]
    if a < b => 1 else if a > b => -1 else 0
  binding = 
    name: key: \county
    size: Array.from(alltypes).splice(0, 10).map (key) -> {key}
  return {raw, binding}
