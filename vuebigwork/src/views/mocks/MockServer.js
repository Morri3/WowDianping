let express = require("express"); //引入express
let Mock = require("mockjs"); //引入mockjs
let app = express(); //实例化express

/*添加中间件处理跨域请求*/
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/getShops", function (req, res) {
  res.json(
    Mock.mock({
      code: 0,
      data: [
        [
          {
            "title": "荣小馆(杭州大厦店)",
            "pic": "http://p1.meituan.net/biztone/6455927_1635663461430.jpeg%40340w_255h_1e_1c_1l%7Cwatermark%3D0",
            "shop_url": "",
            "shop": "",
            "comment": 4686,
            "price": 197,
            "keyword": "浙菜",
            "keyword2": "武林广场",
            "recommend": "目鱼香肠",
            "recommend2": "沙蒜烧豆面",
            "recommend3": "东海三鲜",
            "msg": "",
            "rate": 4.60,
            "taste": 4.60,
            "env": 4.60,
            "serve": 4.60,
            "distance": "6.4km",
            "year": 4
          },
          {
            "title": "金猪",
            "pic": "https://img.meituan.net/msmerchant/334f71cddaf148ad062e4c39a71329da69260.jpg%40340w_255h_1e_1c_1l%7Cwatermark%3D0",
            "shop_url": "",
            "shop": "",
            "comment": 4592,
            "price": 57,
            "keyword": "浙菜",
            "keyword2": "凤起路沿线",
            "recommend": "糖醋里脊",
            "recommend2": "开背虾",
            "recommend3": "臭豆腐",
            "msg": "",
            "rate": 4.60,
            "taste": 4.70,
            "env": 4.10,
            "serve": 4.40,
            "distance": "7.6km",
            "year": 3
          },
          {
            "title": "101茶餐厅",
            "pic": "http://qcloud.dpfile.com/pc/jiclIsCKmOI2arxKN1Uf0Hx3PucIJH8q0QSz-Z8llzcN56-_QiKuOvyio1OOxsRtbKcq9vnEaGy3xLEf-_v_oA.jpg",
            "shop_url": "",
            "shop": "",
            "comment": 3265,
            "price": 83,
            "keyword": "台湾菜",
            "keyword2": "大关",
            "recommend": "五花卤肉饭",
            "recommend2": "湾湾香肠",
            "recommend3": "好大鳗鱼饭",
            "msg": "",
            "rate": 4.80,
            "taste": 4.80,
            "env": 4.50,
            "serve": 4.90,
            "distance": "2.7km",
            "year": 3
          },
          {
            "title": "粤顺餐馆(朝晖国都店)",
            "pic": "http://p0.meituan.net/merchant/f9857226f272c4167a9d012f05e9145e114266.jpg%40340w_255h_1e_1c_1l%7Cwatermark%3D0",
            "shop_url": "http://www.dianping.com/brands/bH6DRbiqGveu6xjwG",
            "shop": "分店",
            "comment": 10217,
            "price": 181,
            "keyword": "顺德菜",
            "keyword2": "西湖文化广场",
            "recommend": "粥底火锅",
            "recommend2": "虾滑",
            "recommend3": "白贝",
            "msg": "",
            "rate": 4.60,
            "taste": 4.70,
            "env": 4.40,
            "serve": 4.50,
            "distance": "6.0km",
            "year": 11
          }
        ]        
      ]
    })
  );
});

app.use("/getCities", function (req, res) {
  res.json(
    Mock.mock({
      code: 0, //0代表成功
      data: [
        {
          initial: "热门",
          list: [
            {
              code: "110100",
              city: "北京",
            },
            {
              code: "120100",
              city: "天津",
            },
            {
              code: "310100",
              city: "上海",
            },
            {
              code: "440100",
              city: "广州",
            },
            {
              code: "440300",
              city: "深圳",
            },
            {
              code: "420100",
              city: "武汉",
            },
            {
              code: "510100",
              city: "成都",
            },
            {
              code: "500100",
              city: "重庆",
            },
          ],
        },
        {
          initial: "A",
          list: [
            {
              code: "152900",
              city: "阿拉善盟",
            },
            {
              code: "210300",
              city: "鞍山",
            },
            {
              code: "340800",
              city: "安庆",
            },
            {
              code: "410500",
              city: "安阳",
            },
            {
              code: "513200",
              city: "阿坝藏族羌族自治州",
            },
            {
              code: "520400",
              city: "安顺",
            },
            {
              code: "542500",
              city: "阿里地区",
            },
            {
              code: "610900",
              city: "安康",
            },
            {
              code: "652900",
              city: "阿克苏地区",
            },
            {
              code: "654300",
              city: "阿勒泰地区",
            },
            {
              code: "820100",
              city: "澳门半岛",
            },
          ],
        },
        {
          initial: "B",
          list: [
            {
              code: "110100",
              city: "北京",
            },
            {
              code: "130600",
              city: "保定",
            },
            {
              code: "150200",
              city: "包头",
            },
            {
              code: "150800",
              city: "巴彦淖尔",
            },
            {
              code: "210500",
              city: "本溪",
            },
            {
              code: "220600",
              city: "白山",
            },
            {
              code: "220800",
              city: "白城",
            },
            {
              code: "340300",
              city: "蚌埠",
            },
            {
              code: "371600",
              city: "滨州",
            },
            {
              code: "450500",
              city: "北海",
            },
            {
              code: "451000",
              city: "百色",
            },
            {
              code: "511900",
              city: "巴中",
            },
            {
              code: "522400",
              city: "毕节地区",
            },
            {
              code: "530500",
              city: "保山",
            },
            {
              code: "610300",
              city: "宝鸡",
            },
            {
              code: "620400",
              city: "白银",
            },
            {
              code: "652700",
              city: "博尔塔拉蒙古自治州",
            },
            {
              code: "652800",
              city: "巴音郭楞蒙古自治州",
            },
          ],
        },
        {
          initial: "C",
          list: [
            {
              code: "130800",
              city: "承德",
            },
            {
              code: "130900",
              city: "沧州",
            },
            {
              code: "140400",
              city: "长治",
            },
            {
              code: "150400",
              city: "赤峰",
            },
            {
              code: "211300",
              city: "朝阳",
            },
            {
              code: "220100",
              city: "长春",
            },
            {
              code: "320400",
              city: "常州",
            },
            {
              code: "341100",
              city: "滁州",
            },
            {
              code: "341700",
              city: "池州",
            },
            {
              code: "430100",
              city: "长沙",
            },
            {
              code: "430700",
              city: "常德",
            },
            {
              code: "431000",
              city: "郴州",
            },
            {
              code: "445100",
              city: "潮州",
            },
            {
              code: "451400",
              city: "崇左",
            },
            {
              code: "510100",
              city: "成都",
            },
            {
              code: "500100",
              city: "重庆",
            },
            {
              code: "532300",
              city: "楚雄彝族自治州",
            },
            {
              code: "542100",
              city: "昌都地区",
            },
            {
              code: "652300",
              city: "昌吉回族自治州",
            },
          ],
        },
        {
          initial: "D",
          list: [
            {
              code: "140200",
              city: "大同",
            },
            {
              code: "210200",
              city: "大连",
            },
            {
              code: "210600",
              city: "丹东",
            },
            {
              code: "230600",
              city: "大庆",
            },
            {
              code: "232700",
              city: "大兴安岭地区",
            },
            {
              code: "370500",
              city: "东营",
            },
            {
              code: "371400",
              city: "德州",
            },
            {
              code: "441900",
              city: "东莞",
            },
            {
              code: "510600",
              city: "德阳",
            },
            {
              code: "511700",
              city: "达州",
            },
            {
              code: "532900",
              city: "大理白族自治州",
            },
            {
              code: "533100",
              city: "德宏傣族景颇族自治州",
            },
            {
              code: "533400",
              city: "迪庆藏族自治州",
            },
            {
              code: "621100",
              city: "定西",
            },
          ],
        },
        {
          initial: "E",
          list: [
            {
              code: "150600",
              city: "鄂尔多斯",
            },
            {
              code: "420700",
              city: "鄂州",
            },
            {
              code: "422800",
              city: "恩施土家族苗族自治州",
            },
          ],
          F: [
            {
              code: "210400",
              city: "抚顺",
            },
            {
              code: "210900",
              city: "阜新",
            },
            {
              code: "341200",
              city: "阜阳",
            },
            {
              code: "350100",
              city: "福州",
            },
            {
              code: "361000",
              city: "抚州",
            },
            {
              code: "440600",
              city: "佛山",
            },
            {
              code: "450600",
              city: "防城港",
            },
          ],
          G: [
            {
              code: "360700",
              city: "赣州",
            },
            {
              code: "440100",
              city: "广州",
            },
            {
              code: "450300",
              city: "桂林",
            },
            {
              code: "450800",
              city: "贵港",
            },
            {
              code: "510800",
              city: "广元",
            },
            {
              code: "511600",
              city: "广安",
            },
            {
              code: "513300",
              city: "甘孜藏族自治州",
            },
            {
              code: "520100",
              city: "贵阳",
            },
            {
              code: "623000",
              city: "甘南藏族自治州",
            },
            {
              code: "632600",
              city: "果洛藏族自治州",
            },
            {
              code: "640400",
              city: "固原",
            },
            {
              code: "710200",
              city: "高雄",
            },
          ],
        },
        {
          initial: "H",
          list: [
            {
              code: "130400",
              city: "邯郸",
            },
            {
              code: "131100",
              city: "衡水",
            },
            {
              code: "150100",
              city: "呼和浩特",
            },
            {
              code: "150700",
              city: "呼伦贝尔",
            },
            {
              code: "211400",
              city: "葫芦岛",
            },
            {
              code: "230100",
              city: "哈尔滨",
            },
            {
              code: "230400",
              city: "鹤岗",
            },
            {
              code: "231100",
              city: "黑河",
            },
            {
              code: "320800",
              city: "淮安",
            },
            {
              code: "330100",
              city: "杭州",
            },
            {
              code: "330500",
              city: "湖州",
            },
            {
              code: "340100",
              city: "合肥",
            },
            {
              code: "340400",
              city: "淮南",
            },
            {
              code: "340600",
              city: "淮北",
            },
            {
              code: "341000",
              city: "黄山",
            },
            {
              code: "371700",
              city: "菏泽",
            },
            {
              code: "410600",
              city: "鹤壁",
            },
            {
              code: "420200",
              city: "黄石",
            },
            {
              code: "421100",
              city: "黄冈",
            },
            {
              code: "430400",
              city: "衡阳",
            },
            {
              code: "431200",
              city: "怀化",
            },
            {
              code: "441300",
              city: "惠州",
            },
            {
              code: "441600",
              city: "河源",
            },
            {
              code: "451100",
              city: "贺州",
            },
            {
              code: "451200",
              city: "河池",
            },
            {
              code: "460100",
              city: "海口",
            },
            {
              code: "532500",
              city: "红河哈尼族彝族自治州",
            },
            {
              code: "610700",
              city: "汉中",
            },
            {
              code: "632100",
              city: "海东地区",
            },
            {
              code: "632200",
              city: "海北藏族自治州",
            },
            {
              code: "632300",
              city: "黄南藏族自治州",
            },
            {
              code: "632500",
              city: "海南藏族自治州",
            },
            {
              code: "632800",
              city: "海西蒙古族藏族自治州",
            },
            {
              code: "652200",
              city: "哈密地区",
            },
            {
              code: "653200",
              city: "和田地区",
            },
          ],
        },
        {
          initial: "J",
          list: [
            {
              code: "140500",
              city: "晋城",
            },
            {
              code: "140700",
              city: "晋中",
            },
            {
              code: "210700",
              city: "锦州",
            },
            {
              code: "220200",
              city: "吉林",
            },
            {
              code: "230300",
              city: "鸡西",
            },
            {
              code: "230800",
              city: "佳木斯",
            },
            {
              code: "330400",
              city: "嘉兴",
            },
            {
              code: "330700",
              city: "金华",
            },
            {
              code: "360200",
              city: "景德镇",
            },
            {
              code: "360400",
              city: "九江",
            },
            {
              code: "360800",
              city: "吉安",
            },
            {
              code: "370100",
              city: "济南",
            },
            {
              code: "370800",
              city: "济宁",
            },
            {
              code: "410800",
              city: "焦作",
            },
            {
              code: "420800",
              city: "荆门",
            },
            {
              code: "421000",
              city: "荆州",
            },
            {
              code: "440700",
              city: "江门",
            },
            {
              code: "445200",
              city: "揭阳",
            },
            {
              code: "620200",
              city: "嘉峪关",
            },
            {
              code: "620300",
              city: "金昌",
            },
            {
              code: "620900",
              city: "酒泉",
            },
            {
              code: "710500",
              city: "金门县",
            },
            {
              code: "710700",
              city: "基隆",
            },
            {
              code: "710900",
              city: "嘉义",
            },
            {
              code: "810200",
              city: "九龙",
            },
          ],
        },
        {
          initial: "K",
          list: [
            {
              code: "410200",
              city: "开封",
            },
            {
              code: "530100",
              city: "昆明",
            },
            {
              code: "650200",
              city: "克拉玛依",
            },
            {
              code: "653000",
              city: "克孜勒苏柯尔克孜自治州",
            },
            {
              code: "653100",
              city: "喀什地区",
            },
          ],
        },
        {
          initial: "L",
          list: [
            {
              code: "131000",
              city: "廊坊",
            },
            {
              code: "411100",
              city: "漯河",
            },
            {
              code: "141000",
              city: "临汾",
            },
            {
              code: "141100",
              city: "吕梁",
            },
            {
              code: "211000",
              city: "辽阳",
            },
            {
              code: "220400",
              city: "辽源",
            },
            {
              code: "320700",
              city: "连云港",
            },
            {
              code: "331100",
              city: "丽水",
            },
            {
              code: "341500",
              city: "六安",
            },
            {
              code: "350800",
              city: "龙岩",
            },
            {
              code: "371200",
              city: "莱芜",
            },
            {
              code: "371300",
              city: "临沂",
            },
            {
              code: "371500",
              city: "聊城",
            },
            {
              code: "410300",
              city: "洛阳",
            },
            {
              code: "510500",
              city: "泸州",
            },
            {
              code: "431300",
              city: "娄底",
            },
            {
              code: "450200",
              city: "柳州",
            },
            {
              code: "451300",
              city: "来宾",
            },
            {
              code: "511100",
              city: "乐山",
            },
            {
              code: "513400",
              city: "凉山彝族自治州",
            },
            {
              code: "520200",
              city: "六盘水",
            },
            {
              code: "530700",
              city: "丽江",
            },
            {
              code: "530900",
              city: "临沧",
            },
            {
              code: "540100",
              city: "拉萨",
            },
            {
              code: "542600",
              city: "林芝地区",
            },
            {
              code: "620100",
              city: "兰州",
            },
            {
              code: "621200",
              city: "陇南",
            },
            {
              code: "622900",
              city: "临夏回族自治州",
            },
            {
              code: "820200",
              city: "离岛",
            },
          ],
        },
        {
          initial: "M",
          list: [
            {
              code: "231000",
              city: "牡丹江",
            },
            {
              code: "340500",
              city: "马鞍山",
            },
            {
              code: "440900",
              city: "茂名",
            },
            {
              code: "441400",
              city: "梅州",
            },
            {
              code: "510700",
              city: "绵阳",
            },
            {
              code: "511400",
              city: "眉山",
            },
          ],
        },
        {
          initial: "N",
          list: [
            {
              code: "320100",
              city: "南京",
            },
            {
              code: "320600",
              city: "南通",
            },
            {
              code: "330200",
              city: "宁波",
            },
            {
              code: "350700",
              city: "南平",
            },
            {
              code: "350900",
              city: "宁德",
            },
            {
              code: "360100",
              city: "南昌",
            },
            {
              code: "411300",
              city: "南阳",
            },
            {
              code: "450100",
              city: "南宁",
            },
            {
              code: "511000",
              city: "内江",
            },
            {
              code: "511300",
              city: "南充",
            },
            {
              code: "533300",
              city: "怒江傈僳族自治州",
            },
            {
              code: "542400",
              city: "那曲地区",
            },
            {
              code: "710600",
              city: "南投县",
            },
          ],
        },
        {
          initial: "P",
          list: [
            {
              code: "211100",
              city: "盘锦",
            },
            {
              code: "350300",
              city: "莆田",
            },
            {
              code: "410900",
              city: "濮阳",
            },
            {
              code: "360300",
              city: "萍乡",
            },
            {
              code: "410400",
              city: "平顶山",
            },
            {
              code: "510400",
              city: "攀枝花",
            },
            {
              code: "530800",
              city: "普洱",
            },
            {
              code: "620800",
              city: "平凉",
            },
          ],
        },
        {
          initial: "Q",
          list: [
            {
              code: "130300",
              city: "秦皇岛",
            },
            {
              code: "230200",
              city: "齐齐哈尔",
            },
            {
              code: "230900",
              city: "七台河",
            },
            {
              code: "350500",
              city: "泉州",
            },
            {
              code: "370200",
              city: "青岛",
            },
            {
              code: "441800",
              city: "清远",
            },
            {
              code: "450700",
              city: "钦州",
            },
            {
              code: "522300",
              city: "黔西南布依族苗族自治州",
            },
            {
              code: "522600",
              city: "黔东南苗族侗族自治州",
            },
            {
              code: "522700",
              city: "黔南布依族苗族自治州",
            },
            {
              code: "530300",
              city: "曲靖",
            },
            {
              code: "621000",
              city: "庆阳",
            },
          ],
        },
        {
          initial: "R",
          list: [
            {
              code: "371100",
              city: "日照",
            },
            {
              code: "542300",
              city: "日喀则地区",
            },
          ],
        },
        {
          initial: "S",
          list: [
            {
              code: "130100",
              city: "石家庄",
            },
            {
              code: "140600",
              city: "朔州",
            },
            {
              code: "210100",
              city: "沈阳",
            },
            {
              code: "220300",
              city: "四平",
            },
            {
              code: "220700",
              city: "松原",
            },
            {
              code: "230500",
              city: "双鸭山",
            },
            {
              code: "231200",
              city: "绥化",
            },
            {
              code: "310100",
              city: "上海",
            },
            {
              code: "320500",
              city: "苏州",
            },
            {
              code: "321300",
              city: "宿迁",
            },
            {
              code: "330600",
              city: "绍兴",
            },
            {
              code: "341300",
              city: "宿州",
            },
            {
              code: "350400",
              city: "三明",
            },
            {
              code: "361100",
              city: "上饶",
            },
            {
              code: "411200",
              city: "三门峡",
            },
            {
              code: "411400",
              city: "商丘",
            },
            {
              code: "420300",
              city: "十堰",
            },
            {
              code: "421300",
              city: "随州",
            },
            {
              code: "430500",
              city: "邵阳",
            },
            {
              code: "440200",
              city: "韶关",
            },
            {
              code: "440300",
              city: "深圳",
            },
            {
              code: "440500",
              city: "汕头",
            },
            {
              code: "441500",
              city: "汕尾",
            },
            {
              code: "460200",
              city: "三亚",
            },
            {
              code: "510900",
              city: "遂宁",
            },
            {
              code: "542200",
              city: "山南地区",
            },
            {
              code: "611000",
              city: "商洛",
            },
            {
              code: "640200",
              city: "石嘴山",
            },
          ],
        },
        {
          initial: "T",
          list: [
            {
              code: "120100",
              city: "天津",
            },
            {
              code: "130200",
              city: "唐山",
            },
            {
              code: "140100",
              city: "太原",
            },
            {
              code: "150500",
              city: "通辽",
            },
            {
              code: "211200",
              city: "铁岭",
            },
            {
              code: "220500",
              city: "通化",
            },
            {
              code: "321200",
              city: "泰州",
            },
            {
              code: "331000",
              city: "台州",
            },
            {
              code: "340700",
              city: "铜陵",
            },
            {
              code: "370900",
              city: "泰安",
            },
            {
              code: "522200",
              city: "铜仁地区",
            },
            {
              code: "610200",
              city: "铜川",
            },
            {
              code: "620500",
              city: "天水",
            },
            {
              code: "652100",
              city: "吐鲁番地区",
            },
            {
              code: "654200",
              city: "塔城地区",
            },
            {
              code: "710100",
              city: "台北",
            },
            {
              code: "710300",
              city: "台南",
            },
            {
              code: "710400",
              city: "台中",
            },
          ],
        },
        {
          initial: "W",
          list: [
            {
              code: "150300",
              city: "乌海",
            },
            {
              code: "150900",
              city: "乌兰察布",
            },
            {
              code: "320200",
              city: "无锡",
            },
            {
              code: "330300",
              city: "温州",
            },
            {
              code: "340200",
              city: "芜湖",
            },
            {
              code: "370700",
              city: "潍坊",
            },
            {
              code: "371000",
              city: "威海",
            },
            {
              code: "420100",
              city: "武汉",
            },
            {
              code: "450400",
              city: "梧州",
            },
            {
              code: "532600",
              city: "文山壮族苗族自治州",
            },
            {
              code: "610500",
              city: "渭南",
            },
            {
              code: "620600",
              city: "武威",
            },
            {
              code: "640300",
              city: "吴忠",
            },
            {
              code: "650100",
              city: "乌鲁木齐",
            },
          ],
        },
        {
          initial: "X",
          list: [
            {
              code: "130500",
              city: "邢台",
            },
            {
              code: "140900",
              city: "忻州",
            },
            {
              code: "152200",
              city: "兴安盟",
            },
            {
              code: "152500",
              city: "锡林郭勒盟",
            },
            {
              code: "320300",
              city: "徐州",
            },
            {
              code: "341800",
              city: "宣城",
            },
            {
              code: "350200",
              city: "厦门",
            },
            {
              code: "360500",
              city: "新余",
            },
            {
              code: "410700",
              city: "新乡",
            },
            {
              code: "411000",
              city: "许昌",
            },
            {
              code: "411500",
              city: "信阳",
            },
            {
              code: "420600",
              city: "襄阳",
            },
            {
              code: "420900",
              city: "孝感",
            },
            {
              code: "421200",
              city: "咸宁",
            },
            {
              code: "430300",
              city: "湘潭",
            },
            {
              code: "433100",
              city: "湘西土家族苗族自治州",
            },
            {
              code: "532800",
              city: "西双版纳",
            },
            {
              code: "610100",
              city: "西安",
            },
            {
              code: "610400",
              city: "咸阳",
            },
            {
              code: "630100",
              city: "西宁",
            },
            {
              code: "710800",
              city: "新竹",
            },
            {
              code: "810100",
              city: "香港岛",
            },
            {
              code: "810300",
              city: "新界",
            },
          ],
        },
        {
          initial: "Y",
          list: [
            {
              code: "140300",
              city: "阳泉",
            },
            {
              code: "140800",
              city: "运城",
            },
            {
              code: "210800",
              city: "营口",
            },
            {
              code: "222400",
              city: "延边朝鲜族自治州",
            },
            {
              code: "230700",
              city: "伊春",
            },
            {
              code: "320900",
              city: "盐城",
            },
            {
              code: "321000",
              city: "扬州",
            },
            {
              code: "360600",
              city: "鹰潭",
            },
            {
              code: "360900",
              city: "宜春",
            },
            {
              code: "370600",
              city: "烟台",
            },
            {
              code: "420500",
              city: "宜昌",
            },
            {
              code: "430600",
              city: "岳阳",
            },
            {
              code: "430900",
              city: "益阳",
            },
            {
              code: "431100",
              city: "永州",
            },
            {
              code: "441700",
              city: "阳江",
            },
            {
              code: "445300",
              city: "云浮",
            },
            {
              code: "450900",
              city: "玉林",
            },
            {
              code: "511500",
              city: "宜宾",
            },
            {
              code: "511800",
              city: "雅安",
            },
            {
              code: "530400",
              city: "玉溪",
            },
            {
              code: "610600",
              city: "延安",
            },
            {
              code: "610800",
              city: "榆林",
            },
            {
              code: "632700",
              city: "玉树藏族自治州",
            },
            {
              code: "640100",
              city: "银川",
            },
            {
              code: "654000",
              city: "伊犁哈萨克自治州",
            },
          ],
        },
        {
          initial: "Z",
          list: [
            {
              code: "130700",
              city: "张家口",
            },
            {
              code: "321100",
              city: "镇江",
            },
            {
              code: "330800",
              city: "衢州",
            },
            {
              code: "330900",
              city: "舟山",
            },
            {
              code: "341600",
              city: "亳州",
            },
            {
              code: "350600",
              city: "漳州",
            },
            {
              code: "370300",
              city: "淄博",
            },
            {
              code: "370400",
              city: "枣庄",
            },
            {
              code: "410100",
              city: "郑州",
            },
            {
              code: "411600",
              city: "周口",
            },
            {
              code: "411700",
              city: "驻马店",
            },
            {
              code: "430200",
              city: "株洲",
            },
            {
              code: "430800",
              city: "张家界",
            },
            {
              code: "440400",
              city: "珠海",
            },
            {
              code: "440800",
              city: "湛江",
            },
            {
              code: "441200",
              city: "肇庆",
            },
            {
              code: "442000",
              city: "中山",
            },
            {
              code: "510300",
              city: "自贡",
            },
            {
              code: "512000",
              city: "资阳",
            },
            {
              code: "520300",
              city: "遵义",
            },
            {
              code: "530600",
              city: "昭通",
            },
            {
              code: "620700",
              city: "张掖",
            },
            {
              code: "640500",
              city: "中卫",
            },
          ],
        },
      ],
    })
  );
});

app.listen("8090", () => {
  console.log("监听端口 8090");
});

//点击右上角三角形运行该文件，然后再npm run serve
