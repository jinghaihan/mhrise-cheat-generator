import { Modal } from 'ant-design-vue'
import saveAs from 'file-saver'

import JSZip from 'jszip'
import { BUILD_ID, TITLE_ID } from '@/constants/database'
import { t } from '@/modules/i18n'

export function downloadCheat(version: string, data: string | string[]) {
  Modal.confirm({
    title: t('ui.download.backupTitle'),
    content: t('ui.download.backupContent'),
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
