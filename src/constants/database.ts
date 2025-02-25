import { $t } from '@/modules/i18n'

export interface Monster {
  id: string
  name: string
  anomalyQuestPtr?: string
  guildCardPtr?: string
  image: string
  largest?: string
  smallest?: string
  capture?: boolean
  anomaly?: boolean
}

export function MONSTERS_DB(): Monster[] {
  const list = [
    // {
    //   name: '<null>',
    //   anomalyQuestPtr: '0000,000B',
    // },
    {
      id: 'em098_00',
      name: $t('monsters.great-izuchi'),
      anomalyQuestPtr: '0062,0000',
      guildCardPtr: '00B4',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em054_00',
      name: $t('monsters.great-baggi'),
      anomalyQuestPtr: '0036,0000',
      guildCardPtr: '0064',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em107_00',
      name: $t('monsters.kulu-ya-ku'),
      anomalyQuestPtr: '006B,0000',
      guildCardPtr: '00C8',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em059_00',
      name: $t('monsters.great-wroggi'),
      anomalyQuestPtr: '003B,0000',
      guildCardPtr: '0070',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em060_00',
      name: $t('monsters.arzuros'),
      anomalyQuestPtr: '003C,0000',
      guildCardPtr: '0074',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em061_00',
      name: $t('monsters.lagombi'),
      anomalyQuestPtr: '003D,0000',
      guildCardPtr: '007C',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em062_00',
      name: $t('monsters.volvidon'),
      anomalyQuestPtr: '003E,0000',
      guildCardPtr: '0080',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em091_00',
      name: $t('monsters.aknosom'),
      anomalyQuestPtr: '005B,0000',
      guildCardPtr: '0098',
      largest: '3FA00000',
      smallest: '3F3F7CEE',
    },
    {
      id: 'em047_00',
      name: $t('monsters.royal-ludroth'),
      anomalyQuestPtr: '002F,0000',
      guildCardPtr: '0060',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em044_00',
      name: $t('monsters.barroth'),
      anomalyQuestPtr: '002C,0000',
      guildCardPtr: '005C',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em019_00',
      name: $t('monsters.daimyo-hermitaur'),
      anomalyQuestPtr: '0013,0000',
      guildCardPtr: '0158',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em003_00',
      name: $t('monsters.khezu'),
      anomalyQuestPtr: '0003,0001',
      guildCardPtr: '0030',
      largest: '3F947AE1',
      smallest: '3F6147AE',
    },
    {
      id: 'em092_00',
      name: $t('monsters.tetranadon'),
      anomalyQuestPtr: '005C,0000',
      guildCardPtr: '009C',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em090_00',
      name: $t('monsters.bishaten'),
      anomalyQuestPtr: '005A,0001',
      guildCardPtr: '0094',
      largest: '3F9D70A4',
      smallest: '3F4CCCCD',
    },
    {
      id: 'em090_01',
      name: $t('monsters.blood-orange-bishaten'),
      anomalyQuestPtr: '015A,0001',
      guildCardPtr: '0180',
      largest: '3F9D70A4',
      smallest: '3F6147AE',
    },
    {
      id: 'em102_00',
      name: $t('monsters.pukei-pukei'),
      anomalyQuestPtr: '0066,0001',
      guildCardPtr: '00C4',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em108_00',
      name: $t('monsters.jyuratodus'),
      anomalyQuestPtr: '006C,0001',
      guildCardPtr: '00CC',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em004_00',
      name: $t('monsters.basarios'),
      anomalyQuestPtr: '0004,0001',
      guildCardPtr: '0034',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em093_00',
      name: $t('monsters.somnacanth'),
      anomalyQuestPtr: '005D,0001',
      guildCardPtr: '00A0',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em093_01',
      name: $t('monsters.aurora-somnacanth'),
      anomalyQuestPtr: '015D,0002',
      guildCardPtr: '0184',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em001_00',
      name: $t('monsters.rathian'),
      anomalyQuestPtr: '0001,0001',
      guildCardPtr: '0020',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em001_02',
      name: $t('monsters.gold-rathian'),
      anomalyQuestPtr: '0201,0005',
      guildCardPtr: '0150',
      largest: '3FA00000',
      smallest: '3F733333',
    },
    {
      id: 'em042_00',
      name: $t('monsters.barioth'),
      anomalyQuestPtr: '002A,0002',
      guildCardPtr: '0058',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em109_00',
      name: $t('monsters.tobi-kadachi'),
      anomalyQuestPtr: '006D,0001',
      guildCardPtr: '00D0',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em089_00',
      name: $t('monsters.magnamalo'),
      anomalyQuestPtr: '0059,0002',
      guildCardPtr: '0090',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em089_05',
      name: $t('monsters.scorned-magnamalo'),
      anomalyQuestPtr: '0559,0005',
      guildCardPtr: '017C',
      largest: '3F9851EC',
      smallest: '3F6147AE',
    },
    {
      id: 'em100_00',
      name: $t('monsters.anjanath'),
      anomalyQuestPtr: '0064,0001',
      guildCardPtr: '00C0',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em037_00',
      name: $t('monsters.nargacuga'),
      anomalyQuestPtr: '0025,0002',
      guildCardPtr: '0054',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em037_02',
      name: $t('monsters.lucent-nargacuga'),
      anomalyQuestPtr: '0225,0005',
      guildCardPtr: '0164',
      largest: '3FA00000',
      smallest: '3F733333',
      anomaly: false,
    },
    {
      id: 'em082_00',
      name: $t('monsters.mizutsune'),
      anomalyQuestPtr: '0052,0003',
      guildCardPtr: '0084',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em082_02',
      name: $t('monsters.violet-mizutsune'),
      guildCardPtr: '0178',
      largest: '3FA00000',
      smallest: '3F733333',
      anomaly: false,
    },
    {
      id: 'em097_00',
      name: $t('monsters.goss-harag'),
      anomalyQuestPtr: '0061,0002',
      guildCardPtr: '00B0',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em134_00',
      name: $t('monsters.garangolm'),
      anomalyQuestPtr: '0086,0002',
      guildCardPtr: '019C',
      largest: '3F9D70A4',
      smallest: '3F6147AE',
    },
    {
      id: 'em020_00',
      name: $t('monsters.shogun-ceanataur'),
      anomalyQuestPtr: '0014,0002',
      guildCardPtr: '015C',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em002_00',
      name: $t('monsters.rathalos'),
      anomalyQuestPtr: '0002,0003',
      guildCardPtr: '0028',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em002_02',
      name: $t('monsters.silver-rathalos'),
      anomalyQuestPtr: '0202,0005',
      guildCardPtr: '0154',
      largest: '3FA00000',
      smallest: '3F733333',
    },
    {
      id: 'em095_00',
      name: $t('monsters.almudron'),
      anomalyQuestPtr: '005F,0002',
      guildCardPtr: '00A8',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em095_01',
      name: $t('monsters.magma-almudron'),
      anomalyQuestPtr: '015F,0003',
      guildCardPtr: '018C',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em057_00',
      name: $t('monsters.zinogre'),
      anomalyQuestPtr: '0039,0003',
      guildCardPtr: '0068',
      largest: '3FA00000',
      smallest: '3F333333',
    },
    {
      id: 'em133_00',
      name: $t('monsters.lunagaron'),
      anomalyQuestPtr: '0085,0003',
      guildCardPtr: '0198',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em081_00',
      name: $t('monsters.astalos'),
      anomalyQuestPtr: '0051,0003',
      guildCardPtr: '0174',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em136_00',
      name: $t('monsters.espinas'),
      anomalyQuestPtr: '0088,0003',
      guildCardPtr: '01A4',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em136_01',
      name: $t('monsters.flaming-espinas'),
      anomalyQuestPtr: '0188,0005',
      guildCardPtr: '01A8',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em071_00',
      name: $t('monsters.gore-magala'),
      anomalyQuestPtr: '0047,0003',
      guildCardPtr: '0168',
      largest: '3F9851EC',
      smallest: '3F6147AE',
    },
    {
      id: 'em071_05',
      name: $t('monsters.chaotic-gore-magala'),
      anomalyQuestPtr: '0547,0005',
      guildCardPtr: '01E4',
      largest: '3F9851EC',
      smallest: '3F6147AE',
    },
    {
      id: 'em077_00',
      name: $t('monsters.seregios'),
      anomalyQuestPtr: '004D,0003',
      guildCardPtr: '0170',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em032_00',
      name: $t('monsters.tigrex'),
      anomalyQuestPtr: '0020,0003',
      guildCardPtr: '0050',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em007_00',
      name: $t('monsters.diablos'),
      anomalyQuestPtr: '0007,0003',
      guildCardPtr: '0038',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em094_00',
      name: $t('monsters.rakna-kadaki'),
      anomalyQuestPtr: '005E,0002',
      guildCardPtr: '00A4',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em094_01',
      name: $t('monsters.pyre-rakna-kadaki'),
      anomalyQuestPtr: '015E,0003',
      guildCardPtr: '0188',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em024_00',
      name: $t('monsters.kushala-daora'),
      anomalyQuestPtr: '0018,0004',
      guildCardPtr: '0044',
      largest: '3FA00000',
      smallest: '3F733333',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em024_08',
      name: $t('monsters.risen-kushala-daora'),
      guildCardPtr: '01CC',
      largest: '3FA00000',
      smallest: '3F733333',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em025_00',
      name: $t('monsters.chameleos'),
      anomalyQuestPtr: '0019,0004',
      guildCardPtr: '0048',
      largest: '3FA00000',
      smallest: '3F733333',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em025_08',
      name: $t('monsters.risen-chameleos'),
      guildCardPtr: '01D0',
      largest: '3FA00000',
      smallest: '3F733333',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em027_00',
      name: $t('monsters.teostra'),
      anomalyQuestPtr: '001B,0004',
      guildCardPtr: '004C',
      largest: '3FA00000',
      smallest: '3F6147AE',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em027_08',
      name: $t('monsters.risen-teostra'),
      guildCardPtr: '01D4',
      largest: '3FA00000',
      smallest: '3F733333',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em132_00',
      name: $t('monsters.malzeno'),
      anomalyQuestPtr: '0084,0004',
      guildCardPtr: '0194',
      largest: '3F9851EC',
      smallest: '3F6147AE',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em132_05',
      name: $t('monsters.primordial-malzeno'),
      anomalyQuestPtr: '0584,0005',
      guildCardPtr: '01E0',
      largest: '3F9851EC',
      smallest: '3F6147AE',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em072_00',
      name: $t('monsters.shagaru-magala'),
      anomalyQuestPtr: '0048,0004',
      guildCardPtr: '016C',
      largest: '3F9851EC',
      smallest: '3F6147AE',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em072_08',
      name: $t('monsters.risen-shagaru-magala'),
      guildCardPtr: '01D8',
      largest: '3F9851EC',
      smallest: '3F6147AE',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em124_00',
      name: $t('monsters.velkhana'),
      anomalyQuestPtr: '007C,0005',
      guildCardPtr: '01E8',
      largest: '3FA00000',
      smallest: '3F733333',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em023_00',
      name: $t('monsters.rajang'),
      anomalyQuestPtr: '0017,0004',
      guildCardPtr: '0040',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em023_05',
      name: $t('monsters.furious-rajang'),
      anomalyQuestPtr: '0517,0005',
      guildCardPtr: '0160',
      largest: '3FAA3D71',
      smallest: '3F733333',
    },
    {
      id: 'em118_00',
      name: $t('monsters.bazelgeuse'),
      anomalyQuestPtr: '0076,0004',
      guildCardPtr: '00D4',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em118_05',
      name: $t('monsters.seething-bazelgeuse'),
      anomalyQuestPtr: '0576,0005',
      guildCardPtr: '0190',
      largest: '3FA00000',
      smallest: '3F6147AE',
    },
    {
      id: 'em096_00',
      name: $t('monsters.wind-serpent-ibushi'),
      guildCardPtr: '00AC',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em099_00',
      name: $t('monsters.thunder-serpent-narwa'),
      guildCardPtr: '00B8',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em099_05',
      name: $t('monsters.narwa-the-allmother'),
      guildCardPtr: '00BC',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em086_05',
      name: $t('monsters.crimson-glow-valstrax'),
      anomalyQuestPtr: '0556,0005',
      guildCardPtr: '008C',
      largest: '3FA00000',
      smallest: '3F6147AE',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em086_08',
      name: $t('monsters.risen-crimson-glow-valstrax'),
      guildCardPtr: '01DC',
      largest: '3F9851EC',
      smallest: '3F6147AE',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em135_00',
      name: $t('monsters.gaismagorm'),
      guildCardPtr: '01A0',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em058_00',
      name: $t('monsters.amatsu'),
      guildCardPtr: '01EC',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em060_07',
      name: $t('monsters.apex-arzuros'),
      anomalyQuestPtr: '073C,000B',
      guildCardPtr: '0078',
      largest: '3F87AE14',
      smallest: '3F733333',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em001_07',
      name: $t('monsters.apex-rathian'),
      anomalyQuestPtr: '0701,000B',
      guildCardPtr: '0024',
      largest: '3F947AE1',
      smallest: '3F733333',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em082_07',
      name: $t('monsters.apex-mizutsune'),
      anomalyQuestPtr: '0752,000B',
      guildCardPtr: '0088',
      largest: '3FA00000',
      smallest: '3F6147AE',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em002_07',
      name: $t('monsters.apex-rathalos'),
      anomalyQuestPtr: '0702,000B',
      guildCardPtr: '002C',
      largest: '3FA00000',
      smallest: '3F6147AE',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em007_07',
      name: $t('monsters.apex-diablos'),
      anomalyQuestPtr: '0707,000B',
      guildCardPtr: '003C',
      largest: '3FA00000',
      smallest: '3F733333',
      capture: false,
      anomaly: false,
    },
    {
      id: 'em057_07',
      name: $t('monsters.apex-zinogre'),
      anomalyQuestPtr: '0739,000B',
      guildCardPtr: '006C',
      largest: '3FA00000',
      smallest: '3F6147AE',
      capture: false,
      anomaly: false,
    },
  ]
  return list.map((monster) => {
    return {
      ...monster,
      image: `http://cdn.kiranico.net/file/kiranico/mhrise-web/images/icons/${monster.id}.png`,
    }
  })
}
