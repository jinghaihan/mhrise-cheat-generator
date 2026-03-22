import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export function useReactiveI18n<T>(factory: () => T): Ref<T> {
  const { locale } = useI18n()
  const state = ref(factory()) as Ref<T>

  watch(locale, () => {
    state.value = factory()
  })

  return state
}
