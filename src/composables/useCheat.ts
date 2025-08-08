import {
  ANOMALY_QUEST_CHEAT_POINTER,
  BUDDY_CHEAT_POINTER,
  FUNCTIONAL_HUNTER_SPEED_MULTIPLE_TYPE_CHEAT_POINTER,
  FUNCTIONAL_QUEST_MONSTER_SIZE_CHEAT_POINTER,
  FUNCTIONAL_QUEST_REWARD_MULTIPLE_TYPE_CHEAT_POINTER,
  GUILD_CARD_CHEAT_POINTER,
  GUILD_CARD_CHEAT_ZENNY_POINTER,
  GUILD_CARD_RANK_CHEAT_POINTER,
  ITEM_CHEAT_POINTER,
  QURIOUS_CRAFTING_CHEAT_POINTER,
  TALISMAN_CHEAT_POINTER,
} from '@/constants/database'
import { useUserStore } from '@/modules/store'
import { genBox, genCheatStr, genCount, genDoubleTime } from '@/utils'

export class CheatGenerator {
  static ITEM(version: string, data: ItemConfig): CheatConfig {
    const pointer = ITEM_CHEAT_POINTER[version]

    return {
      title: `[Box.${data.box}_${data.item?.label} x${data.count}]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000080`,
        `580F1000 00000018`,
        `580F1000 00000010`,
        `580F1000 0000${genBox(data.box)}`,
        `780F0000 00000040`,
        `680F0000 0000${genCount(data.count)} 0410${data.item?.value}`,
      ]),
    }
  }

  static ITEM_QTY(version: string, data: ItemQtyConfig): CheatConfig {
    const pointer = ITEM_CHEAT_POINTER[version]

    return {
      title: `[Box.${data.start}-${data.end}道具 x${data.count}]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000080`,
        `580F1000 00000018`,
        `580F1000 00000010`,
        `30000000 0000${genCount(data.end - data.start + 1)}`,
        `980DF0E0`,
        `580D1000 0000${genBox(data.start)}`,
        `780D0000 00000044`,
        `640D0000 00000000 0000${genCount(data.count)}`,
        `780F0000 00000008`,
        `31000000`,
      ]),
    }
  }

  static TALISMAN(version: string, data: TalismanConfig): CheatConfig {
    const pointer = TALISMAN_CHEAT_POINTER[version]

    return {
      title: `[Box.${data.box}_${data.type?.label}·${data.skill1?.label}(Lv.${data.level1})+${data.skill2?.label}(Lv.${data.level2})+Slot.${data.slot?.label}]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000088`,
        `580F1000 00000028`,
        `580F1000 00000010`,
        `580F1000 0000${genBox(data.box)}`,
        `780F0000 00000030`,
        `680F0000 101000${data.type?.value} 00000003`,

        `580F0000 ${pointer}`,
        `580F1000 00000088`,
        `580F1000 00000028`,
        `580F1000 00000010`,
        `580F1000 0000${genBox(data.box)}`,
        `580F1000 00000080`,
        `780F0000 00000020`,
        `640F0000 00000000 0000${data.skill2?.value}${data.skill1?.value}`,

        `580F0000 ${pointer}`,
        `580F1000 00000088`,
        `580F1000 00000028`,
        `580F1000 00000010`,
        `580F1000 0000${genBox(data.box)}`,
        `580F1000 00000088`,
        `780F0000 00000020`,
        `680F0000 0000000${data.level2} 0000000${data.level1}`,

        `580F0000 ${pointer}`,
        `580F1000 00000088`,
        `580F1000 00000028`,
        `580F1000 00000010`,
        `580F1000 0000${genBox(data.box)}`,
        `580F1000 00000078`,
        `780F0000 00000024`,

        `680F1000 ${data.slot?.value.split(',')[0]}`,
        `680F0000 ${data.slot?.value.split(',')[1]}`,
      ]),
    }
  }

  static QURIOUS_CRAFTING(version: string, data: QuriousCraftingConfig): CheatConfig {
    const pointer = QURIOUS_CRAFTING_CHEAT_POINTER[version]

    let codeStrs = [
      `580F0000 ${pointer}`,
      `580F1000 00000088`,
      `580F1000 00000028`,
      `580F1000 00000010`,
      `580F1000 0000${genBox(data.box)}`,
      `780F0000 000000A8`,
      `640F0000 00000000 ${data.type?.value}`,
    ]
    for (let i = 0; i < 7; i++) {
      codeStrs = codeStrs.concat([
        `580F0000 ${pointer}`,
        `580F1000 00000088`,
        `580F1000 00000028`,
        `580F1000 00000010`,
        `580F1000 0000${genBox(data.box)}`,
        `580F1000 000000A0`,
        `580F1000 0000${genBox(i + 1)}`,
        `780F0000 00000010`,
        `680F0000 ${data[`skill${i + 1}`].value.split(',')[0]}`,
        `780F0000 00000008`,
        `680F0000 ${data[`skill${i + 1}`].value.split(',')[1]}`,
      ])
    }

    return {
      title: `[Box.${data.box}_怪异炼成·${data.type?.label}]`,
      code: genCheatStr(codeStrs),
    }
  }

  static ANOMALY_QUEST(version: string, data: AnomalyQuestConfig): CheatConfig {
    const pointer = ANOMALY_QUEST_CHEAT_POINTER[version]

    let title = ''
    switch (Number(data.hunt?.label[0])) {
      case 1:
        title = `${data.monster1?.label}`
        break
      case 2:
        title = `${data.monster1?.label}x${data.monster2?.label}`
        break
      case 3:
        title = `${data.monster1?.label}x${data.monster2?.label}x${data.monster3?.label}`
        break
      case 4:
        title = `${data.monster1?.label}x${data.monster2?.label}x${data.monster3?.label}x${data.monster4?.label}`
        break
      default:
        break
    }

    return {
      title: `[Slot.${data.questIndex}_怪异调查任务·${title}_${data.location?.label}]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000100`,
        `580F1000 00000028`,
        `780F0000 0000${genCount(data.questIndex * 116 - 84)}`,
        `680F1000 000${genCount(700000 + data.questIndex - 1)} 0000${genCount(data.index)}`,
        `680F1000 0000${data.type?.value} 0000${genCount(data.level)}`,
        `680F1000 00000000 0000${genCount(data.level)}`,
        `680F1000 0000${data.monster1?.value.split(',')[0]} 0000${data.hunt?.value}`,
        `680F1000 0000${data.monster3?.value.split(',')[0]} 0000${
          data.monster2?.value.split(',')[0]
        }`,
        `680F1000 00000000 0000${data.monster4?.value.split(',')[0]}`,
        `680F1000 00000000 0000${data.monster5?.value.split(',')[0]}`,
        `680F1000 0000${data.monster2?.value?.split(',')[1]} 0000${
          data.monster1?.value.split(',')[1]
        }`,
        `680F1000 0000${data.monster4?.value.split(',')[1]} 0000${
          data.monster3?.value.split(',')[1]
        }`,
        `680F1000 0000${data.monster5?.value.split(',')[1]} 0000000B`,
        `680F1000 0000${data.location?.value} 0000000B`,
        `680F1000 0000${data.fail?.value} 0000${data.timelimit?.value}`,
        `680F1000 0000${data.timezone?.value} 0000${data.playerQty?.value}`,
        `680F1000 00000000 00000001`,
        `640F0000 00000000 ${data.sp?.value}`,
      ]),
    }
  }

  static BUDDY_LEVEL(version: string, data: BuddyConfig): CheatConfig {
    const pointer = BUDDY_CHEAT_POINTER[version]

    return {
      title: `[Box.${data.box}_${data.type?.label}_Lv.${data.level?.label}]`,
      code:
        data.type?.value === 'PALICO'
          ? genCheatStr([
              `580F0000 ${pointer}`,
              `580F1000 000000B8`,
              `580F1000 00000018`,
              `580F1000 00000040`,
              `580F1000 0000${genBox(data.box)}`,
              `580F1000 00000018`,
              `580F1000 00000020`,
              `780F0000 00000020`,
              `680F0000 000000${Number(data.level?.label).toString(16)} 00${data.level?.value}`,
            ])
          : genCheatStr([
              `580F0000 ${pointer}`,
              `580F1000 000000B8`,
              `580F1000 00000018`,
              `580F1000 00000028`,
              `580F1000 00000010`,
              `580F1000 0000${genBox(data.box)}`,
              `580F1000 00000018`,
              `580F1000 00000020`,
              `780F0000 00000020`,
              `680F0000 000000${Number(data.level?.label).toString(16)} 00${data.level?.value}`,
            ]),
    }
  }

  static BUDDY_SKILL(version: string, data: BuddyConfig): CheatConfig {
    const pointer = BUDDY_CHEAT_POINTER[version]

    return {
      title: `[Box.${data.box}_${data.type?.label}_随从技能]`,
      code:
        data.type?.value === 'PALICO'
          ? genCheatStr([
              `580F0000 ${pointer}`,
              `580F1000 000000B8`,
              `580F1000 00000018`,
              `580F1000 00000040`,
              `580F1000 0000${genBox(data.box)}`,
              `580F1000 00000018`,
              `580F1000 00000058`,
              `580F1000 00000010`,
              `780F0000 00000020`,
              `680F0000 000000${data.skills.skill2?.value} 000000${data.skills.skill1?.value}`,
              `780F0000 00000008`,
              `680F0000 000000${data.skills.skill4?.value} 000000${data.skills.skill3?.value}`,
              `780F0000 00000008`,
              `680F0000 000000${data.skills.skill6?.value} 000000${data.skills.skill5?.value}`,
              `780F0000 00000008`,
              `680F0000 000000${data.skills.skill8?.value} 000000${data.skills.skill7?.value}`,
            ])
          : genCheatStr([
              `580F0000 ${pointer}`,
              `580F1000 000000B8`,
              `580F1000 00000018`,
              `580F1000 00000028`,
              `580F1000 00000010`,
              `580F1000 0000${genBox(data.box)}`,
              `580F1000 00000018`,
              `580F1000 00000058`,
              `780F0000 00000040`,
              `680F0000 000000${data.skills.skill2?.value} 000000${data.skills.skill1?.value}`,
              `780F0000 00000008`,
              `680F0000 000000${data.skills.skill4?.value} 000000${data.skills.skill3?.value}`,
              `780F0000 00000008`,
              `680F0000 000000${data.skills.skill6?.value} 000000${data.skills.skill5?.value}`,
              `780F0000 00000008`,
              `680F0000 000000${data.skills.skill8?.value} 000000${data.skills.skill7?.value}`,
            ]),
    }
  }

  static PALICO_SKILL(version: string, data: BuddyConfig): CheatConfig {
    const pointer = BUDDY_CHEAT_POINTER[version]

    return {
      title: `[Box.${data.box}_${data.type?.label}_支援行动]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 000000B8`,
        `580F1000 00000018`,
        `580F1000 00000040`,
        `580F1000 0000${genBox(data.box)}`,
        `580F1000 00000018`,
        `580F1000 00000040`,
        `580F1000 00000018`,
        `780F0000 00000020`,
        `680F0000 000000${data.palicoSkills.skill2?.value} 000000${data.palicoSkills.skill1?.value}`,
        `780F0000 00000008`,
        `680F0000 000000${data.palicoSkills.skill4?.value} 000000${data.palicoSkills.skill3?.value}`,
        `780F0000 00000008`,
        `640F0000 00000000 000000${data.palicoSkills.skill5?.value}`,
      ]),
    }
  }

  static HUNTER_RANK(version: string, data: GuildCardBasicConfig): CheatConfig {
    const pointer = GUILD_CARD_RANK_CHEAT_POINTER[version]

    return {
      title: `[猎人等级.${data.hunterRank?.label}]`,
      code: genCheatStr([
        `58020000 ${pointer}`,
        `58021000 00000068`,
        `78020000 00000018`,
        `68020000 ${data.hunterRank?.value} 0000${genCount(Number(data.hunterRank?.label))}`,
      ]),
    }
  }

  static MASTER_RANK(version: string, data: GuildCardBasicConfig): CheatConfig {
    const pointer = GUILD_CARD_RANK_CHEAT_POINTER[version]

    return {
      title: `[大师等级.${data.masterRank?.label}]`,
      code: genCheatStr([
        `58020000 ${pointer}`,
        `58021000 00000068`,
        `78020000 00000020`,
        `68020000 ${data.masterRank?.value} 0000${genCount(Number(data.masterRank?.label))}`,
      ]),
    }
  }

  static ANOMALY_RANK(version: string, data: GuildCardBasicConfig): CheatConfig {
    const pointer = GUILD_CARD_RANK_CHEAT_POINTER[version]

    return {
      title: `[怪异研究等级.${data.anomalyRank?.label}]`,
      code: genCheatStr([
        `58020000 ${pointer}`,
        `58021000 00000068`,
        `78020000 00000028`,
        `68020000 ${data.anomalyRank?.value} 0000${genCount(Number(data.anomalyRank?.label))}`,
      ]),
    }
  }

  static ZENNY(version: string, data: GuildCardBasicConfig): CheatConfig {
    const pointer = GUILD_CARD_CHEAT_ZENNY_POINTER[version]

    return {
      title: `[金钱.${data.zenny}z/${data.overallZenny}z]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000058`,
        `780F0000 00000018`,
        `680F0000 ${genCount(data.overallZenny as number, 8)} ${genCount(
          data.zenny as number,
          8,
        )} `,
      ]),
    }
  }

  static KAMURA_POINT(version: string, data: GuildCardBasicConfig): CheatConfig {
    const pointer = GUILD_CARD_CHEAT_ZENNY_POINTER[version]

    return {
      title: `[炎火点数.${data.kamura}p]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000060`,
        `780F0000 00000010`,
        `680F0000 ${genCount(data.kamura as number, 8)} ${genCount(data.kamura as number, 8)}`,
      ]),
    }
  }

  static PLAY_DURATION(version: string, data: GuildCardBasicConfig): CheatConfig {
    const pointer = GUILD_CARD_CHEAT_POINTER[version]

    return {
      title: `[总游戏时间.${data.playDuration}h]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000070`,
        `780F0000 00000040`,
        `680F0000 ${genDoubleTime(data.playDuration as number)}`,
      ]),
    }
  }

  static QUEST_COMPLETE_QTY(
    version: string,
    data: {
      name: string
      type: string
      count: number
    },
  ): CheatConfig {
    const pointer = GUILD_CARD_CHEAT_POINTER[version]

    return {
      title: `[任务完成次数.${data.name} x${data.count}]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000070`,
        `780F0000 0000${data.type}`,
        `640F0000 00000000 0000${genCount(data.count)}`,
      ]),
    }
  }

  static OVERALL_HUNT_RECORD(
    version: string,
    data: { hunt: number, capture: number },
  ): CheatConfig {
    const pointer = GUILD_CARD_CHEAT_POINTER[version]

    return {
      title: `[总狩猎数.${data.hunt}_总捕获数${data.capture}]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000070`,
        `780F0000 000000DC`,
        `680F0000 ${genCount(data.capture as number, 8)} ${genCount(data.hunt as number, 8)}`,
      ]),
    }
  }

  static WEAPON_USAGE(
    version: string,
    data: {
      weapon: LabelInValue
      quest: LabelInValue
      count: number
    },
  ): CheatConfig {
    const pointer = GUILD_CARD_CHEAT_POINTER[version]

    return {
      title: `[武器使用次数.${data.weapon.label}_${data.quest.label} x${data.count}]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000070`,
        `580F1000 0000${data.quest.value}`,
        `780F0000 000000${data.weapon.value}`,
        `640F0000 00000000 0000${genCount(data.count)}`,
      ]),
    }
  }

  static HUNT_RECORD(
    version: string,
    data: {
      count: number
      monster: LabelInValue
      type: LabelInValue
    },
  ): CheatConfig {
    const pointer = GUILD_CARD_CHEAT_POINTER[version]

    return {
      title: `[${data.type.label}.${data.monster.label} x${data.count}]`,
      code: genCheatStr([
        `580A0000 ${pointer}`,
        `580A1000 00000070`,
        `580A1000 0000${data.type.value}`,
        `780A0000 0000${data.monster.value}`,
        `640A0000 00000000 0000${genCount(data.count)}`,
      ]),
    }
  }

  static MONSTER_CROWN_SIZE(
    version: string,
    data: {
      monster: LabelInValue
      type: LabelInValue
      size: string
    },
  ): CheatConfig {
    const pointer = GUILD_CARD_CHEAT_POINTER[version]

    return {
      title: `[${data.type.label}.${data.monster.label}]`,
      code: genCheatStr([
        `580A0000 ${pointer}`,
        `580A1000 00000070`,
        `580A1000 0000${data.type.value}`,
        `780A0000 0000${data.monster.value}`,
        `640A0000 00000000 ${data.size}`,
      ]),
    }
  }

  static ARENA_RECORD_REMOVE(version: string, data: ArenaRecordRemoveConfig): CheatConfig {
    const pointer = GUILD_CARD_CHEAT_POINTER[version]

    return {
      title: `[斗技记录消除.${data.type?.label}_${data.quest?.label}_Slot.${data.slot}]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000070`,
        `580F1000 000001${data.type?.value}`,
        `580F1000 000000${data.quest?.value}`,
        `580F1000 00000010`,
        `580F1000 00000010`,
        `580F1000 0000${genBox(data.slot as number)}`,
        `780F0000 00000010`,
        `640F0000 00000000 00000000`,
        `780F0000 00000008`,
        `680F0000 00000000 00000000`,
        `780F0000 00000010`,
        `640F0000 00000000 00000000`,
      ]),
    }
  }

  static AWARDS(
    version: string,
    data: {
      aa: number
      bb: number
      cc: number
      dd: number
      ee: number
      ff: number
      gg: number
      hh: number
      ii: number
      jj: number
      kk: number
      ll: number
      mm: number
    },
  ): CheatConfig {
    const pointer = GUILD_CARD_CHEAT_POINTER[version]

    return {
      title: `[勋章]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000070`,
        `580F1000 000001F8`,
        `580F1000 00000010`,
        `780F0000 00000020`,
        `680F1000 ${genCount(data.hh, 2)}${genCount(data.gg, 2)}${genCount(data.ff, 2)}${genCount(
          data.ee,
          2,
        )} ${genCount(data.dd, 2)}${genCount(data.cc, 2)}${genCount(data.bb, 2)}${genCount(
          data.aa,
          2,
        )}`,
        `680F0000 000000${genCount(data.mm, 2)} ${genCount(data.ll, 2)}${genCount(
          data.kk,
          2,
        )}${genCount(data.jj, 2)}${genCount(data.ii, 2)}`,
      ]),
    }
  }

  static PLAYER_LIKE_QTY(version: string, data: GuildCardBasicConfig): CheatConfig {
    const pointer = GUILD_CARD_CHEAT_POINTER[version]

    return {
      title: `[获赞次数.${data.like}]`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000070`,
        `780F0000 00000048`,
        `640F0000 00000000 0000${genCount(data.like as number)}`,
      ]),
    }
  }

  static QUEST_REWARD_MULTIPLER(version: string, data: QuestRewardMultiplerConfig): CheatConfig {
    const pointer = FUNCTIONAL_QUEST_REWARD_MULTIPLE_TYPE_CHEAT_POINTER[version]

    return {
      title: `任务报酬倍率.${data.multiple?.label}`,
      code: genCheatStr([`040F0000 ${pointer} 0B0A${data.multiple?.value}29`]),
    }
  }

  static QUEST_MONSTER_SIZE(version: string, data: QuestMonsterSizeConfig): CheatConfig {
    const pointer = FUNCTIONAL_QUEST_MONSTER_SIZE_CHEAT_POINTER[version]

    return {
      title: `任务怪物体型.Slot.${data.slot} x${data.multiple?.label}`,
      code: genCheatStr([
        `580F0000 ${pointer}`,
        `580F1000 00000080`,
        `580F1000 00000010`,
        `580F1000 0000${genBox(data.slot)}`,
        `580F1000 00000308`,
        `780F0000 00000028`,
        `640F0000 00000000 ${data.multiple?.value}`,
      ]),
    }
  }

  static HUNTER_SPEED(version: string, data: HunterSpeedConfig): CheatConfig {
    const pointer = FUNCTIONAL_HUNTER_SPEED_MULTIPLE_TYPE_CHEAT_POINTER[version]

    return {
      title: `猎人速度倍率 x${data.multiple?.label}`,
      code: genCheatStr([`04020000 ${pointer} ${data.multiple?.value}`]),
    }
  }
}

export function useCheat() {
  const userStore = useUserStore()

  function genCheat(handler: string, data: any, addCart = true) {
    let cheat
    switch (handler) {
      case 'ITEM':
        cheat = CheatGenerator.ITEM(userStore.version, data)
        break
      case 'ITEM_QTY':
        cheat = CheatGenerator.ITEM_QTY(userStore.version, data)
        break
      case 'TALISMAN':
        cheat = CheatGenerator.TALISMAN(userStore.version, data)
        break
      case 'QURIOUS_CRAFTING':
        cheat = CheatGenerator.QURIOUS_CRAFTING(userStore.version, data)
        break
      case 'ANOMALY_QUEST':
        cheat = CheatGenerator.ANOMALY_QUEST(userStore.version, data)
        break
      case 'BUDDY_LEVEL':
        cheat = CheatGenerator.BUDDY_LEVEL(userStore.version, data)
        break
      case 'BUDDY_SKILL':
        cheat = CheatGenerator.BUDDY_SKILL(userStore.version, data)
        break
      case 'PALICO_SKILL':
        cheat = CheatGenerator.PALICO_SKILL(userStore.version, data)
        break
      case 'HUNTER_RANK':
        cheat = CheatGenerator.HUNTER_RANK(userStore.version, data)
        break
      case 'MASTER_RANK':
        cheat = CheatGenerator.MASTER_RANK(userStore.version, data)
        break
      case 'ANOMALY_RANK':
        cheat = CheatGenerator.ANOMALY_RANK(userStore.version, data)
        break
      case 'ZENNY':
        cheat = CheatGenerator.ZENNY(userStore.version, data)
        break
      case 'KAMURA_POINT':
        cheat = CheatGenerator.KAMURA_POINT(userStore.version, data)
        break
      case 'PLAY_DURATION':
        cheat = CheatGenerator.PLAY_DURATION(userStore.version, data)
        break
      case 'QUEST_COMPLETE_QTY':
        cheat = CheatGenerator.QUEST_COMPLETE_QTY(userStore.version, data)
        break
      case 'OVERALL_HUNT_RECORD':
        cheat = CheatGenerator.OVERALL_HUNT_RECORD(userStore.version, data)
        break
      case 'WEAPON_USAGE':
        cheat = CheatGenerator.WEAPON_USAGE(userStore.version, data)
        break
      case 'HUNT_RECORD':
        cheat = CheatGenerator.HUNT_RECORD(userStore.version, data)
        break
      case 'MONSTER_CROWN_SIZE':
        cheat = CheatGenerator.MONSTER_CROWN_SIZE(userStore.version, data)
        break
      case 'ARENA_RECORD_REMOVE':
        cheat = CheatGenerator.ARENA_RECORD_REMOVE(userStore.version, data)
        break
      case 'AWARDS':
        cheat = CheatGenerator.AWARDS(userStore.version, data)
        break
      case 'PLAYER_LIKE_QTY':
        cheat = CheatGenerator.PLAYER_LIKE_QTY(userStore.version, data)
        break
      case 'QUEST_REWARD_MULTIPLER':
        cheat = CheatGenerator.QUEST_REWARD_MULTIPLER(userStore.version, data)
        break
      case 'QUEST_MONSTER_SIZE':
        cheat = CheatGenerator.QUEST_MONSTER_SIZE(userStore.version, data)
        break
      case 'HUNTER_SPEED':
        cheat = CheatGenerator.HUNTER_SPEED(userStore.version, data)
        break
      default:
        console.error(`${handler} not found`.toUpperCase())
        break
    }
    if (cheat && addCart) {
      userStore.addCart(cheat)
    }
    return cheat
  }

  return {
    genCheat,
  }
}
