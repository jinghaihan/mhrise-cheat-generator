import { resolveModule } from 'local-pkg'
import * as lodash from 'lodash-es'

export { unheadVueComposablesImports as UnheadAutoImports } from '@unhead/vue'
export { VueRouterAutoImports } from 'unplugin-vue-router'

export function LodashAutoImports() {
  const excluded = [
    'commit',
    'default',
    'lodash',
    'next',
    'templateSettings',
    'thru',
    'toIterator',
    'toJSON',
    'value',
    'valueOf',
    'VERSION',
    'wrapperAt',
    'wrapperChain',
    'wrapperCommit',
    'wrapperLodash',
    'wrapperNext',
    'wrapperPlant',
    'wrapperReverse',
    'wrapperToIterator',
    'wrapperValue',
  ]
  return {
    from: resolveModule('lodash-es') || 'lodash-es',
    imports: Object.keys(lodash).filter(key => !excluded.includes(key)),
  }
}
