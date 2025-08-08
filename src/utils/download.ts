import { Modal } from 'ant-design-vue'
import saveAs from 'file-saver'

import JSZip from 'jszip'
import { BUILD_ID, TITLE_ID } from '@/constants/database'

export function downloadCheat(version: string, data: string | string[]) {
  Modal.confirm({
    title: '请自行备份存档',
    content: '本系统为了个人游玩离线游戏而制作，请勿在线上模式使用，本人不承担存档损坏等责任',
    onOk() {
      const zip = new JSZip()
      zip.file('MONSTER HUNTER RISE.txt', '')

      if (Array.isArray(data)) {
        data.forEach((str, index) => {
          zip
            ?.folder('cheats')
            ?.folder(`part ${index + 1}`)
            ?.file(`${BUILD_ID[version]}.txt`, str)
        })
      }
      else {
        zip?.folder('cheats')?.file(`${BUILD_ID[version]}.txt`, data)
      }

      zip.generateAsync({ type: 'blob' }).then((content) => {
        saveAs(content, `${TITLE_ID}.zip`)
      })
    },
  })
}
