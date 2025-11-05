## 安裝

使用 dist/bundle.min.js 安裝圖表 Bundle:


    <script src="path-to/bundle.min.js"></script>


## 建立圖表

以 bar chart 為例: 

    makechart
      .bar({root: document.body}) /* 指定容器. 容器需有非零長寬 */
      .then(function(chart) {
        /* 取得 chart = 圖表實體, 進行後續操作 */
      });


此 Bundle 中亦包含 scatter chart 與 treemap:

    makechart.scatter({root: domNodeForScatter}).then ...
    makechart.treemap({root: domNodeForScatter}).then ...


## 操作圖表

使用 setRaw 設定資料, 參數為一物件含 `raw` 與 `binding` 兩成員:

    chart.setRaw({
      raw: [{ .... }, .... ] /* 陣列, 內含多筆物件, 代表各筆資料 */
      binding: {
        ... /* 物件, 各欄位 key 代表圖表維度, value 代表對應的資料欄 */
      }
    })

### Raw / 資料

raw (資料) 為物件陣列, 由具有相同參數的每筆資料組成一陣列, 例如:

    [{"姓名": "小明", "國文": 90, "數學": 76}, {"姓名": "小華", "國文": 85, "數學": 96}]

### Binding / 資料綁定

binding (綁定) 表示資料如何與圖表的維度對應. 每個圖表可用的維度不同, 以 bar chart 為例 有兩個維度 `name` 與 `size`:

 - `name`: 該筆資料的名稱
 - `size`: 該筆資料的大小

binding 以物件表示、各欄為其維度, 維度可對應到資料欄, 使用物件 `{key}` 中的 `key` 參照資料中的對應欄位, 例如:

    {
      "name": {key: "姓名"},
      "size": {key: "國文"}
    }

同時支援多組資料的維度後可用陣列表示, 如 size:

    {
      "name": {key: "姓名"},
      "size": [{key: "國文"}, {key: "數學"}]
    }

若需要單位, 可追加 `unit` 欄位; 多組資料的情況下第一組的單位會被應用:

    {
      "name": {key: "姓名"},
      "size": [{key: "國文", unit: "分"}, {key: "數學"}]
    }


#### Scatter Chart 維度

 - `x`: 單選 / 數字 /  點的 X 軸位置
 - `y`: 單選 / 數字 /  點的 Y 軸位置
 - `size`: 單選 / 數字 / 點面積
 - `order`: 單選 / 數字 / 點順序
 - `name`: 單選 / 文字 / 方塊名稱
 - `cat`: 單選 / 文字 / 點分類


#### Treemap 維度

 - `area`: 對應到方塊面積, 單選, 數字
 - `name`: 對應到方塊名稱, 單選, 文字
 - `category`: 對應到方塊分類方式, 多選, 文字


## 實例
 
以 bar chart 為例, 可參考 `web/src/pug/index.ls` 程式碼, 分為以下步驟:

 1. 載入資料: https://budget.openfun.app/api/counties
 2. 將資料調整為物件陣列. 資料格式範本:

        [
          {county: "臺北市", "民政支出": 1000, "農業支出": 2000, ....}
          ...
        ]

    轉換程式參考文後 `資料預處理` 一段.

 3. setRaw

        chart.setRaw({
          raw: [{county: "臺北市", "民政支出": 1000, "農業支出": 2000, ....}, ...], /* 轉換後之原始資料 */
          binding: {
            name: {key: "county"}, /* county 做各長條的名稱 */
            size: [{key: "民政支出", unit: "新臺幣元"}, {key: "農業支出"}, ...] /* 其它欄位做堆積的值 */
          }
        });

 4. 設定樣式; 樣式規格 TBD, 以下為範本

        chart.config({
          brush: {enabled: false},
          percent: false,
          type: "bar",
          dancing: false,
          yaxis: {
            baseline: {show: false},
            caption: {show: false},
            tick: {inner: 0},
            label: {padding: 5}
          },
          xaxis: {
            baseline: {show: false},
            caption: {show: false},
            label: {format: "d"},
            tick: {boundaryOffset: false}
          },
          sort: {dir: "asc", dimension: "size", enabled: true}
        });


## 事件觸發

    chart.on("select", function(data) { ... }); /* 點選時觸發事件傳入資料. */
    /* data 內含 name, size, group 等欄位, 以上例來說, name = county 名, group = 民政支出 等類別. */


## 資料預處理

繪圖前的資料處理涉及原始資料格式轉換 與 預期呈現資料的主觀需求，不適合 API 化; 這裡採用範例供前端參考使用的形式.

參考程式為 `sample/parse-counties-data.js` ( 或其原始碼 `sample/parse-counties-data.ls` ), 使用時先引入:

    <script src="path-to/parse-counties-data.js"></script>

然後將 counties 資料帶入:

    fetch("path-to-counties.json").then(function(res) { return res.json(); }).then(function(data) {
      /* 以歲出資料為例 */
      var obj = parseCountiesData(data["歲出"]);
      var raw = obj.raw;
      var binding = obj.binding;
      /* ... 可繼續使用 raw 與 binding 於圖表中 ... */
      /* 假設圖表已建立 */
      chart.setRaw({raw: raw, binding: binding});
    });

