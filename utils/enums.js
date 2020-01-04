
export default {
  // 机构类型
  orgType: [
    {code: 101, description: "连锁"},
    {code: 102, description: "非连锁"}
  ],
  // 机构行业
  orgIndustryCategory: [
    {
      code: 100,
      description: "教育",
      children: [
        {code: 100100, description: "幼儿园"},
        {code: 100101, description: "幼儿园(蒙氏)"},
        {code: 100102, description: "幼儿园(蒙氏班)"},
        {code: 100103, description: "早教机构"},
        {code: 100104, description: "培训机构"},
        {code: 100105, description: "小学"},
        {code: 100106, description: "中学"},
        {code: 100107, description: "高中"},
        {code: 100108, description: "其他"}
      ]
    },
    {
      code: 101,
      description: "建筑",
      children: [
        {code: 101100, description: "建筑公司"},
        {code: 101101, description: "装潢公司"}
      ]
    },
    {
      code: 102,
      description: "体育",
      children: [
        {code: 102100, description: "体育培训"}
      ]
    },
    {
      code: 103,
      description: "医疗",
      children: [
        {code: 103100, description: "医院诊所"},
        {code: 103101, description: "医疗看护"}
      ]
    },
    {
      code: 104,
      description: "娱乐",
      children: [
        {code: 104100, description: "影视娱乐"},
        {code: 104101, description: "健身中心"},
        {code: 104102, description: "游乐园"}]
    },
    {
      code: 105,
      description: "服务",
      children: [
        {code: 105100, description: "家政公司"},
        {code: 105101, description: "物业管理公司"},
        {code: 105102, description: "美容中心"},
        {code: 105103, description: "摄影机构"},
        {code: 105104, description: "律师机构"},
        {code: 105105, description: "会计机构"}
      ]
    },
    {
      code: 106,
      description: "餐旅业",
      children: [
        {code: 106100, description: "旅游公司"},
        {code: 106101, description: "酒店"},
        {code: 106102, description: "餐饮公司"}
      ]
    },
    {
      code: 107,
      description: "制造业",
      children: [
        {code: 107100, description: "服装纺织公司"},
        {code: 107101, description: "汽车公司"},
        {code: 107102, description: "化工原料厂"},
        {code: 107103, description: "家具公司"},
        {code: 107104, description: "手工艺公司"}
      ]
    },
    {
      code: 108,
      description: "公益",
      children: [
        {code: 108100, description: "其他"},
        {code: 108101, description: "儿童早期发展"}
      ]
    }
  ],
  // 性别
  userSex: [
    {code: 100, description: '无'},
    {code: 101, description: '男'},
    {code: 102, description: '女'}
  ],
  // 教师规模
  orgScale: [
    {code: 101, description: "10人以下"},
    {code: 102, description: "10-30人"},
    {code: 103, description: "30人以上"},
    {code: 104, description: "50人以上"},
    {code: 105, description: "100人以上"}
  ],
  // 资讯类型
  newsType: [
    {code: 100, description: '新闻动态'},
    {code: 101, description: '早教知识'},
    {code: 102, description: '蒙氏科普'},
    {code: 103, description: '课程信息'},
    {code: 104, description: '学习心得'},
    {code: 105, description: '平台公告'},
    {code: 106, description: '热门资讯'}
  ],
  orderNumber: [
    {code: 0, description: '一'},
    {code: 1, description: '二'},
    {code: 2, description: '三'},
    {code: 3, description: '四'},
    {code: 4, description: '五'},
    {code: 5, description: '六'},
    {code: 6, description: '七'},
  ]
}

