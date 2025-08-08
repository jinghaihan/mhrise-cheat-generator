import { genCount } from '@/utils'

export const QURIOUS_CRAFTING_TYPE = {
  怪异强化: '00000000',
  怪异强化·稳定型: '00000003',
  怪异强化·技能特化型: '00000001',
  怪异强化·插槽特化型: '00000002',
} as Record<string, string>

export const QURIOUS_CRAFTING_COST = {
  '3': '00000000 00000090',
  '6': '00000000 00000091',
  '9': '00000000 00000092',
  '12': '00000000 00000093',
  '15': '00000000 00000094',
  '-1': '00000000 00000095',
} as Record<string, string>

export const QURIOUS_CRAFTING_SKILL_LIST = [
  {
    name: '减轻胆怯',
    id: 93,
    cost: 3,
  },
  {
    name: '夺取耐力',
    id: 42,
    cost: 3,
  },
  {
    name: '火属性攻击强化',
    id: 13,
    cost: 3,
  },
  {
    name: '水属性攻击强化',
    id: 14,
    cost: 3,
  },
  {
    name: '冰属性攻击强化',
    id: 15,
    cost: 3,
  },
  {
    name: '雷属性攻击强化',
    id: 16,
    cost: 3,
  },
  {
    name: '龙属性攻击强化',
    id: 17,
    cost: 3,
  },
  {
    name: '滑走强化',
    id: 43,
    cost: 3,
  },
  {
    name: '吹笛名人',
    id: 44,
    cost: 3,
  },
  {
    name: '防御',
    id: 56,
    cost: 3,
  },
  {
    name: '精灵加护',
    id: 57,
    cost: 3,
  },
  {
    name: '体力回复量提升',
    id: 58,
    cost: 3,
  },
  {
    name: '回复速度',
    id: 59,
    cost: 3,
  },
  {
    name: '风压耐性',
    id: 62,
    cost: 3,
  },
  {
    name: '属性异常状态的耐性',
    id: 72,
    cost: 3,
  },
  {
    name: '毒耐性',
    id: 73,
    cost: 3,
  },
  {
    name: '麻痹耐性',
    id: 74,
    cost: 3,
  },
  {
    name: '睡眠耐性',
    id: 75,
    cost: 3,
  },
  {
    name: '昏厥耐性',
    id: 76,
    cost: 3,
  },
  {
    name: '泥雪耐性',
    id: 77,
    cost: 3,
  },
  {
    name: '爆破异常状态的耐性',
    id: 78,
    cost: 3,
  },
  {
    name: '砥石使用高速化',
    id: 85,
    cost: 3,
  },
  {
    name: '道具使用强化',
    id: 88,
    cost: 3,
  },
  {
    name: '广域化',
    id: 89,
    cost: 3,
  },
  {
    name: '满足感',
    id: 90,
    cost: 3,
  },
  {
    name: '不屈',
    id: 92,
    cost: 3,
  },
  {
    name: '饥饿耐性',
    id: 96,
    cost: 3,
  },
  {
    name: '飞身跃入',
    id: 97,
    cost: 3,
  },
  {
    name: '佯动',
    id: 98,
    cost: 3,
  },
  {
    name: '骑乘名人',
    id: 99,
    cost: 3,
  },
  {
    name: '提供',
    id: 123,
    cost: 3,
  },
  {
    name: '走壁移动【翔】',
    id: 129,
    cost: 3,
  },
  {
    name: '炮弹装填',
    id: 46,
    cost: 6,
  },
  {
    name: '防御性能',
    id: 35,
    cost: 6,
  },
  {
    name: '防御强化',
    id: 36,
    cost: 6,
  },
  {
    name: '毒属性强化',
    id: 18,
    cost: 6,
  },
  {
    name: '麻痹属性强化',
    id: 19,
    cost: 6,
  },
  {
    name: '睡眠属性强化',
    id: 20,
    cost: 6,
  },
  {
    name: '爆破属性强化',
    id: 21,
    cost: 6,
  },
  {
    name: '跑者',
    id: 32,
    cost: 6,
  },
  {
    name: '体术',
    id: 33,
    cost: 6,
  },
  {
    name: '耐力急速回复',
    id: 34,
    cost: 6,
  },
  {
    name: '拔刀术【力】',
    id: 39,
    cost: 6,
  },
  {
    name: '纳刀术',
    id: 40,
    cost: 6,
  },
  {
    name: '击晕术',
    id: 41,
    cost: 6,
  },
  {
    name: '特殊射击强化',
    id: 47,
    cost: 6,
  },
  {
    name: '抑制偏移',
    id: 54,
    cost: 6,
  },
  {
    name: '快吃',
    id: 60,
    cost: 6,
  },
  {
    name: '耐震',
    id: 63,
    cost: 6,
  },
  {
    name: '泡沫之舞',
    id: 64,
    cost: 6,
  },
  {
    name: '回避性能',
    id: 65,
    cost: 6,
  },
  {
    name: '回避距离提升',
    id: 66,
    cost: 6,
  },
  {
    name: '破坏王',
    id: 81,
    cost: 6,
  },
  {
    name: '墙面移动',
    id: 105,
    cost: 6,
  },
  {
    name: '逆袭',
    id: 106,
    cost: 6,
  },
  {
    name: '坚如磐石',
    id: 118,
    cost: 6,
  },
  {
    name: '装填速度',
    id: 52,
    cost: 6,
  },
  {
    name: '减轻后坐力',
    id: 53,
    cost: 6,
  },
  {
    name: '霞皮的恩惠',
    id: 100,
    cost: 6,
  },
  {
    name: '钢壳的恩惠',
    id: 101,
    cost: 6,
  },
  {
    name: '炎鳞的恩惠',
    id: 102,
    cost: 6,
  },
  {
    name: '嘲讽防御',
    id: 121,
    cost: 6,
  },
  {
    name: '刚心',
    id: 135,
    cost: 6,
  },
  {
    name: '刚刃打磨',
    id: 25,
    cost: 9,
  },
  {
    name: '最爱蘑菇',
    id: 87,
    cost: 9,
  },
  {
    name: '心眼',
    id: 26,
    cost: 9,
  },
  {
    name: '会心击【属性】',
    id: 11,
    cost: 9,
  },
  {
    name: '弹道强化',
    id: 27,
    cost: 9,
  },
  {
    name: '拔刀术【技】',
    id: 38,
    cost: 9,
  },
  {
    name: '集中',
    id: 30,
    cost: 9,
  },
  {
    name: '强化持续',
    id: 31,
    cost: 9,
  },
  {
    name: '攻击守势',
    id: 37,
    cost: 9,
  },
  {
    name: '耳塞',
    id: 61,
    cost: 9,
  },
  {
    name: '火场怪力',
    id: 91,
    cost: 9,
  },
  {
    name: '鬼火缠',
    id: 108,
    cost: 9,
  },
  {
    name: '翔虫使',
    id: 104,
    cost: 9,
  },
  {
    name: '蓄力大师',
    id: 124,
    cost: 9,
  },
  {
    name: '攻势',
    id: 125,
    cost: 9,
  },
  {
    name: '打磨术【锐】',
    id: 127,
    cost: 9,
  },
  {
    name: '刃鳞打磨',
    id: 128,
    cost: 9,
  },
  {
    name: '合气',
    id: 122,
    cost: 9,
  },
  {
    name: '弱点特效【属性】',
    id: 130,
    cost: 9,
  },
  {
    name: '巧击',
    id: 120,
    cost: 9,
  },
  {
    name: '激昂',
    id: 114,
    cost: 9,
  },
  {
    name: '状态异常必定累积',
    id: 134,
    cost: 9,
  },
  {
    name: '龙气活性',
    id: 103,
    cost: 9,
  },
  {
    name: '业铠【修罗】',
    id: 115,
    cost: 9,
  },
  {
    name: '奋斗',
    id: 145,
    cost: 9,
  },
  {
    name: '粉尘绕',
    id: 139,
    cost: 9,
  },
  {
    name: '风绕',
    id: 138,
    cost: 9,
  },
  {
    name: '狂龙症【翔】',
    id: 143,
    cost: 9,
  },
  {
    name: '匠',
    id: 22,
    cost: 12,
  },
  {
    name: '挑战者',
    id: 2,
    cost: 12,
  },
  {
    name: '无伤',
    id: 3,
    cost: 12,
  },
  {
    name: '怨恨',
    id: 4,
    cost: 12,
  },
  {
    name: '死里逃生',
    id: 5,
    cost: 12,
  },
  {
    name: '因祸得福',
    id: 116,
    cost: 12,
  },
  {
    name: '力量解放',
    id: 9,
    cost: 12,
  },
  {
    name: '精神抖擞',
    id: 10,
    cost: 12,
  },
  {
    name: '幸运',
    id: 84,
    cost: 12,
  },
  {
    name: '连击',
    id: 131,
    cost: 12,
  },
  {
    name: '零件改造',
    id: 126,
    cost: 12,
  },
  {
    name: '高速变形',
    id: 107,
    cost: 12,
  },
  {
    name: '炮术',
    id: 45,
    cost: 12,
  },
  {
    name: '偷袭',
    id: 119,
    cost: 12,
  },
  {
    name: '气血',
    id: 112,
    cost: 12,
  },
  {
    name: '狂龙症【蚀】',
    id: 117,
    cost: 12,
  },
  {
    name: '累积时攻击强化',
    id: 136,
    cost: 12,
  },
  {
    name: '寒气炼成',
    id: 140,
    cost: 12,
  },
  {
    name: '龙气转换',
    id: 141,
    cost: 12,
  },
  {
    name: '看破',
    id: 6,
    cost: 15,
  },
  {
    name: '超会心',
    id: 7,
    cost: 15,
  },
  {
    name: '弱点特效',
    id: 8,
    cost: 15,
  },
  {
    name: '达人艺',
    id: 12,
    cost: 15,
  },
  {
    name: '利刃',
    id: 23,
    cost: 15,
  },
  {
    name: '弹丸节约',
    id: 24,
    cost: 15,
  },
  {
    name: '通常弹・连射箭强化',
    id: 48,
    cost: 15,
  },
  {
    name: '贯穿弹・贯穿箭强化',
    id: 49,
    cost: 15,
  },
  {
    name: '散弹・扩散箭强化',
    id: 50,
    cost: 15,
  },
  {
    name: '装填扩充',
    id: 51,
    cost: 15,
  },
  {
    name: '速射强化',
    id: 55,
    cost: 15,
  },
  {
    name: '攻击',
    id: 1,
    cost: 15,
  },
  {
    name: '毅力',
    id: 132,
    cost: 15,
  },
  {
    name: '伏魔耗命',
    id: 113,
    cost: '-1',
  },
  {
    name: '狂化',
    id: 137,
    cost: '-1',
  },
  {
    name: '天衣无缝',
    id: 142,
    cost: '-1',
  },
  {
    name: '气血觉醒',
    id: 144,
    cost: '-1',
  },
]

export const QURIOUS_CRAFTING_SKILL = [
  {
    label: '属性',
    value: 'attribute',
    children: [
      {
        label: '空',
        value: '00000000 00000000,00000000 00000000',
      },
      {
        label: '防御-6',
        value: '00000000 0000003B,00000000 00000000',
      },
      {
        label: '防御-12',
        value: '00000000 0000003C,00000000 00000000',
      },
      {
        label: '防御+3/+2/+2/+1/+1/+1/+1',
        value: '00000000 00000045,00000000 00000000',
      },
      {
        label: '防御+4/+3/+3/+3/+2/+1/+1',
        value: '00000000 00000046,00000000 00000000',
      },
      {
        label: '防御+6/+4/+4/+4/+3/+2/+2',
        value: '00000000 00000047,00000000 00000000',
      },
      {
        label: '防御+7/+6/+6/+5/+4/+2/+2',
        value: '00000000 00000048,00000000 00000000',
      },
      {
        label: '防御+9/+6/+7/+5/+4/+4/+4',
        value: '00000000 00000049,00000000 00000000',
      },
      {
        label: '防御+10/+7/+8/+6/+5/+5/+5',
        value: '00000001 00000049,00000000 00000000',
      },
      {
        label: '防御+11/+8/+9/+7/+6/+6/+6',
        value: '00000002 00000049,00000000 00000000',
      },
      {
        label: '防御+18/+14/+11/+8/+6/+6/+6',
        value: '00000000 0000004A,00000000 00000000',
      },
      {
        label: '防御+19/+15/+12/+9/+7/+7/+7',
        value: '00000001 0000004A,00000000 00000000',
      },
      {
        label: '防御+20/+16/+13/+10/+8/+8/+8',
        value: '00000002 0000004A,00000000 00000000',
      },
      {
        label: '防御+27/+20/+18/+12/+10/+8/+8',
        value: '00000000 0000004B,00000000 00000000',
      },
      {
        label: '防御+29/+22/+19/+13/+11/+10/+10',
        value: '00000001 0000004B,00000000 00000000',
      },
      {
        label: '防御+31/+24/+20/+14/+12/+12/+12',
        value: '00000002 0000004B,00000000 00000000',
      },
      {
        label: '防御+36/+28/+22/+16/+12/-/-',
        value: '00000000 0000004C,00000000 00000000',
      },
      {
        label: '防御+38/+30/+24/+18/+14/-/-',
        value: '00000001 0000004C,00000000 00000000',
      },
      {
        label: '防御+40/+32/+26/+20/+16/-/-',
        value: '00000002 0000004C,00000000 00000000',
      },
      {
        label: '火耐性-1',
        value: '00000000 00000059,00000000 00000000',
      },
      {
        label: '火耐性-2',
        value: '00000001 00000059,00000000 00000000',
      },
      {
        label: '火耐性-3',
        value: '00000000 0000005A,00000000 00000000',
      },
      {
        label: '火耐性+1',
        value: '00000000 0000005E,00000000 00000000',
      },
      {
        label: '火耐性+2',
        value: '00000001 0000005E,00000000 00000000',
      },
      {
        label: '水耐性-1',
        value: '00000000 00000063,00000000 00000000',
      },
      {
        label: '水耐性-2',
        value: '00000001 00000063,00000000 00000000',
      },
      {
        label: '水耐性-3',
        value: '00000000 00000064,00000000 00000000',
      },
      {
        label: '水耐性+1',
        value: '00000000 00000068,00000000 00000000',
      },
      {
        label: '水耐性+2',
        value: '00000001 00000068,00000000 00000000',
      },
      {
        label: '雷耐性-1',
        value: '00000000 0000006D,00000000 00000000',
      },
      {
        label: '雷耐性-2',
        value: '00000001 0000006D,00000000 00000000',
      },
      {
        label: '雷耐性-3',
        value: '00000000 0000006E,00000000 00000000',
      },
      {
        label: '雷耐性+1',
        value: '00000000 00000072,00000000 00000000',
      },
      {
        label: '雷耐性+2',
        value: '00000001 00000072,00000000 00000000',
      },
      {
        label: '冰耐性-1',
        value: '00000000 00000077,00000000 00000000',
      },
      {
        label: '冰耐性-2',
        value: '00000001 00000077,00000000 00000000',
      },
      {
        label: '冰耐性-3',
        value: '00000000 00000078,00000000 00000000',
      },
      {
        label: '冰耐性+1',
        value: '00000000 0000007C,00000000 00000000',
      },
      {
        label: '冰耐性+2',
        value: '00000001 0000007C,00000000 00000000',
      },
      {
        label: '龙耐性-1',
        value: '00000000 00000081,00000000 00000000',
      },
      {
        label: '龙耐性-2',
        value: '00000001 00000081,00000000 00000000',
      },
      {
        label: '龙耐性-3',
        value: '00000000 00000082,00000000 00000000',
      },
      {
        label: '龙耐性+1',
        value: '00000000 00000086,00000000 00000000',
      },
      {
        label: '龙耐性+2',
        value: '00000001 00000086,00000000 00000000',
      },
      {
        label: '孔位+1',
        value: '00000000 0000008B,00000000 00000000',
      },
      {
        label: '孔位+2',
        value: '00000000 0000008C,00000000 00000000',
      },
      {
        label: '孔位+3',
        value: '00000000 0000008D,00000000 00000000',
      },
    ],
    selectable: false,
  },
  {
    label: '技能 +',
    value: 'plus',
    children: QURIOUS_CRAFTING_SKILL_LIST.map((skill) => {
      if (skill.cost !== '-1') {
        return {
          label: `【C${skill.cost}】${skill.name} +1`,
          value: `${QURIOUS_CRAFTING_COST[skill.cost]},00000000 ${genCount(skill.id, 8)}`,
        }
      }
      return false
    }).filter(Boolean),
    selectable: false,
  },
  {
    label: '技能 -',
    value: 'minus',
    children: QURIOUS_CRAFTING_SKILL_LIST.map((skill) => {
      return {
        label: `${skill.name} -1`,
        value: `${QURIOUS_CRAFTING_COST['-1']},00000000 ${genCount(skill.id, 8)}`,
      }
    }),
    selectable: false,
  },
]

export const QURIOUS_CRAFTING_CHEAT_POINTER = {
  'v16.0.2': '12B157C0',
  'v16.0.1': '12A4A1E8',
  'v16.0.0': '12A4FD80',
} as Record<string, string>
