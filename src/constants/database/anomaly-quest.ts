export const ANOMALY_QUEST_PLAYERQTY = {
  '2人': '0002',
  '4人': '0004',
} as Record<string, string>

export const ANOMALY_QUEST_TIMEZONE = {
  昼: '0001',
  夜: '0002',
} as Record<string, string>

export const ANOMALY_QUEST_TIMELIMIT = {
  '25分': '0019',
  '30分': '001E',
  '35分': '0023',
  '50分': '0032',
} as Record<string, string>

export const ANOMALY_QUEST_FAIL = {
  '1次力尽': '0001',
  '2次力尽': '0002',
  '3次力尽': '0003',
  '4次力尽': '0004',
  '5次力尽': '0005',
  '9次力尽': '0009',
} as Record<string, string>

export const ANOMALY_QUEST_LOCATION = {
  废神社: '0001',
  沙原: '0002',
  水没林: '0003',
  冰封群岛: '0004',
  熔岩洞: '0005',
  密林: '000C',
  城塞高地: '000D',
  狱泉乡: '0009',
  斗技场: '000A',
  塔之秘境: '000E',
} as Record<string, string>

export const ANOMALY_QUEST_TYPE = {
  狩猎: '0001',
  讨伐: '0002',
} as Record<string, string>

export const ANOMALY_QUEST_HUNT = {
  '1头': '0001',
  '2头': '0002',
  '3头': '0003',
  '4头': '0004',
} as Record<string, string>

export const ANOMALY_QUEST_SP = {
  是: '00010100',
  否: '00010000',
} as Record<string, string>

export const ANOMALY_QUEST_MONSTER_MAJOR = {
  镰鼬龙王: {
    code: '0062,0000',
    location: ['斗技场', '狱泉乡'],
  },
  眠狗龙王: {
    code: '0036,0000',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  搔鸟: {
    code: '006B,0000',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  毒狗龙王: {
    code: '003B,0000',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  青熊兽: {
    code: '003C,0000',
    location: ['斗技场', '狱泉乡'],
  },
  白兔兽: {
    code: '003D,0000',
    location: ['斗技场', '狱泉乡'],
  },
  赤甲兽: {
    code: '003E,0000',
    location: ['斗技场', '狱泉乡'],
  },
  伞鸟: {
    code: '005B,0001',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  水兽: {
    code: '002F,0001',
    location: ['斗技场', '狱泉乡'],
  },
  土砂龙: {
    code: '002C,0001',
    location: ['斗技场', '狱泉乡'],
  },
  大名盾蟹: {
    code: '0013,0001',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  奇怪龙: {
    code: '0003,0001',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  河童蛙: {
    code: '005C,0001',
    location: ['斗技场', '狱泉乡'],
  },
  天狗兽: {
    code: '005A,0001',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  绯天狗兽: {
    code: '015A,0002',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  毒妖鸟: {
    code: '0066,0002',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  泥鱼龙: {
    code: '006C,0002',
    location: ['斗技场', '狱泉乡'],
  },
  岩龙: {
    code: '0004,0001',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  人鱼龙: {
    code: '005D,0002',
    location: ['斗技场', '狱泉乡'],
  },
  冰人鱼龙: {
    code: '015D,0003',
    location: ['斗技场', '狱泉乡'],
  },
  雌火龙: {
    code: '0001,0002',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  金火龙: {
    code: '0201,0006',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  冰牙龙: {
    code: '002A,0003',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  飞雷龙: {
    code: '006D,0002',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  怨虎龙: {
    code: '0059,0003',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  嗟怨震天怨虎龙: {
    code: '0559,0006',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  蛮颚龙: {
    code: '0064,0002',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  迅龙: {
    code: '0025,0003',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  泡狐龙: {
    code: '0052,0004',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  雪鬼兽: {
    code: '0061,0003',
    location: ['斗技场', '狱泉乡'],
  },
  刚缠兽: {
    code: '0086,0003',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  将军镰蟹: {
    code: '0014,0002',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  火龙: {
    code: '0002,0004',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  银火龙: {
    code: '0202,0006',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  泥翁龙: {
    code: '005F,0003',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  熔翁龙: {
    code: '015F,0004',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  雷狼龙: {
    code: '0039,0004',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  冰狼龙: {
    code: '0085,0004',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  电龙: {
    code: '0051,0004',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  棘龙: {
    code: '0088,0005',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  棘茶龙: {
    code: '0188,0006',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  黑蚀龙: {
    code: '0047,0005',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  混沌黑蚀龙: {
    code: '0547,0007',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  千刃龙: {
    code: '004D,0004',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  轰龙: {
    code: '0020,0004',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  角龙: {
    code: '0007,0004',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  妃蜘蛛: {
    code: '005E,0003',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  炽妃蜘蛛: {
    code: '015E,0005',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  金狮子: {
    code: '0017,0005',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  激昂金狮子: {
    code: '0517,0006',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  爆鳞龙: {
    code: '0076,0005',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  红莲爆鳞龙: {
    code: '0576,0006',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  怪异克服钢龙: {
    code: '0818,0007',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  怪异克服霞龙: {
    code: '0819,0007',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  怪异克服炎王龙: {
    code: '081B,0007',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  怪异克服天廻龙: {
    code: '0848,0008',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
  怪异克服天彗龙: {
    code: '0856,0008',
    location: ['斗技场', '狱泉乡', '塔之秘境'],
  },
} as Record<
  string,
  {
    code: string
    location: string[]
  }
>

export const ANOMALY_QUEST_MONSTER = {
  无: '0000,000B',
  镰鼬龙王: '0062,0000',
  眠狗龙王: '0036,0000',
  搔鸟: '006B,0000',
  毒狗龙王: '003B,0000',
  青熊兽: '003C,0000',
  白兔兽: '003D,0000',
  赤甲兽: '003E,0000',
  伞鸟: '005B,0000',
  水兽: '002F,0000',
  土砂龙: '002C,0000',
  大名盾蟹: '0013,0000',
  奇怪龙: '0003,0001',
  河童蛙: '005C,0000',
  天狗兽: '005A,0001',
  绯天狗兽: '015A,0001',
  毒妖鸟: '0066,0001',
  泥鱼龙: '006C,0001',
  岩龙: '0004,0001',
  人鱼龙: '005D,0001',
  冰人鱼龙: '015D,0002',
  雌火龙: '0001,0001',
  金火龙: '0201,0005',
  冰牙龙: '002A,0002',
  飞雷龙: '006D,0001',
  怨虎龙: '0059,0002',
  嗟怨震天怨虎龙: '0559,0005',
  蛮颚龙: '0064,0001',
  迅龙: '0025,0002',
  月迅龙: '0225,0005',
  泡狐龙: '0052,0003',
  雪鬼兽: '0061,0002',
  刚缠兽: '0086,0002',
  将军镰蟹: '0014,0002',
  火龙: '0002,0003',
  银火龙: '0202,0005',
  泥翁龙: '005F,0002',
  熔翁龙: '015F,0003',
  雷狼龙: '0039,0003',
  冰狼龙: '0085,0003',
  电龙: '0051,0003',
  棘龙: '0088,0003',
  棘茶龙: '0188,0005',
  黑蚀龙: '0047,0003',
  混沌黑蚀龙: '0547,0005',
  千刃龙: '004D,0003',
  轰龙: '0020,0003',
  角龙: '0007,0003',
  妃蜘蛛: '005E,0002',
  炽妃蜘蛛: '015E,0003',
  钢龙: '0018,0004',
  霞龙: '0019,0004',
  炎王龙: '001B,0004',
  爵银龙: '0084,0004',
  原初爵银龙: '0584,0005',
  天廻龙: '0048,0004',
  冰呪龙: '007C,0005',
  金狮子: '0017,0004',
  激昂金狮子: '0517,0005',
  爆鳞龙: '0076,0004',
  红莲爆鳞龙: '0576,0005',
  神秘红光天彗龙: '0556,0005',
  霸主·青熊兽: '073C,000B',
  霸主·雌火龙: '0701,000B',
  霸主·泡狐龙: '0752,000B',
  霸主·火龙: '0702,000B',
  霸主·角龙: '0707,000B',
  霸主·雷狼龙: '0739,000B',
} as Record<string, string>

export const ANOMALY_QUEST_MONSTER_CODE_TO_I18N_KEY = {
  '0000,000B': 'none',
  '0001,0001': 'rathian',
  '0001,0002': 'rathian',
  '0002,0003': 'rathalos',
  '0002,0004': 'rathalos',
  '0003,0001': 'khezu',
  '0004,0001': 'basarios',
  '0007,0003': 'diablos',
  '0007,0004': 'diablos',
  '0013,0000': 'daimyo-hermitaur',
  '0013,0001': 'daimyo-hermitaur',
  '0014,0002': 'shogun-ceanataur',
  '0017,0004': 'rajang',
  '0017,0005': 'rajang',
  '0018,0004': 'kushala-daora',
  '0019,0004': 'chameleos',
  '001B,0004': 'teostra',
  '0020,0003': 'tigrex',
  '0020,0004': 'tigrex',
  '0025,0002': 'nargacuga',
  '0025,0003': 'nargacuga',
  '002A,0002': 'barioth',
  '002A,0003': 'barioth',
  '002C,0000': 'barroth',
  '002C,0001': 'barroth',
  '002F,0000': 'royal-ludroth',
  '002F,0001': 'royal-ludroth',
  '0036,0000': 'great-baggi',
  '0039,0003': 'zinogre',
  '0039,0004': 'zinogre',
  '003B,0000': 'great-wroggi',
  '003C,0000': 'arzuros',
  '003D,0000': 'lagombi',
  '003E,0000': 'volvidon',
  '0047,0003': 'gore-magala',
  '0047,0005': 'gore-magala',
  '0048,0004': 'shagaru-magala',
  '004D,0003': 'seregios',
  '004D,0004': 'seregios',
  '0051,0003': 'astalos',
  '0051,0004': 'astalos',
  '0052,0003': 'mizutsune',
  '0052,0004': 'mizutsune',
  '0059,0002': 'magnamalo',
  '0059,0003': 'magnamalo',
  '005A,0001': 'bishaten',
  '005B,0000': 'aknosom',
  '005B,0001': 'aknosom',
  '005C,0000': 'tetranadon',
  '005C,0001': 'tetranadon',
  '005D,0001': 'somnacanth',
  '005D,0002': 'somnacanth',
  '005E,0002': 'rakna-kadaki',
  '005E,0003': 'rakna-kadaki',
  '005F,0002': 'almudron',
  '005F,0003': 'almudron',
  '0061,0002': 'goss-harag',
  '0061,0003': 'goss-harag',
  '0062,0000': 'great-izuchi',
  '0064,0001': 'anjanath',
  '0064,0002': 'anjanath',
  '0066,0001': 'pukei-pukei',
  '0066,0002': 'pukei-pukei',
  '006B,0000': 'kulu-ya-ku',
  '006C,0001': 'jyuratodus',
  '006C,0002': 'jyuratodus',
  '006D,0001': 'tobi-kadachi',
  '006D,0002': 'tobi-kadachi',
  '0076,0004': 'bazelgeuse',
  '0076,0005': 'bazelgeuse',
  '007C,0005': 'velkhana',
  '0084,0004': 'malzeno',
  '0085,0003': 'lunagaron',
  '0085,0004': 'lunagaron',
  '0086,0002': 'garangolm',
  '0086,0003': 'garangolm',
  '0088,0003': 'espinas',
  '0088,0005': 'espinas',
  '015A,0001': 'blood-orange-bishaten',
  '015A,0002': 'blood-orange-bishaten',
  '015D,0002': 'aurora-somnacanth',
  '015D,0003': 'aurora-somnacanth',
  '015E,0003': 'pyre-rakna-kadaki',
  '015E,0005': 'pyre-rakna-kadaki',
  '015F,0003': 'magma-almudron',
  '015F,0004': 'magma-almudron',
  '0188,0005': 'flaming-espinas',
  '0188,0006': 'flaming-espinas',
  '0201,0005': 'gold-rathian',
  '0201,0006': 'gold-rathian',
  '0202,0005': 'silver-rathalos',
  '0202,0006': 'silver-rathalos',
  '0225,0005': 'lucent-nargacuga',
  '0517,0005': 'furious-rajang',
  '0517,0006': 'furious-rajang',
  '0547,0005': 'chaotic-gore-magala',
  '0547,0007': 'chaotic-gore-magala',
  '0556,0005': 'crimson-glow-valstrax',
  '0559,0005': 'scorned-magnamalo',
  '0559,0006': 'scorned-magnamalo',
  '0576,0005': 'seething-bazelgeuse',
  '0576,0006': 'seething-bazelgeuse',
  '0584,0005': 'primordial-malzeno',
  '0701,000B': 'apex-rathian',
  '0702,000B': 'apex-rathalos',
  '0707,000B': 'apex-diablos',
  '0739,000B': 'apex-zinogre',
  '073C,000B': 'apex-arzuros',
  '0752,000B': 'apex-mizutsune',
  '0818,0007': 'risen-kushala-daora',
  '0819,0007': 'risen-chameleos',
  '081B,0007': 'risen-teostra',
  '0848,0008': 'risen-shagaru-magala',
  '0856,0008': 'risen-crimson-glow-valstrax',
} as Record<string, string>

export const ANOMALY_QUEST_CHEAT_POINTER = {
  'v16.0.2': '12A58748',
  'v16.0.1': '12B1CB50',
  'v16.0.0': '12B22A60',
} as Record<string, string>
