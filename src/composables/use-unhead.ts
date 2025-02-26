import { $t } from '@/modules/i18n'
import { head } from '@/modules/unhead'

export function useUnhead() {
  const router = useRouter()

  useHead({
    titleTemplate: (title?: string) => title ? `${title} - MHRise Cheat Generator` : `MHRise Cheat Generator`,
    meta: [
      {
        name: 'description',
        content: 'MHRise Cheat Generator for Nintendo Switch',
      },
    ],
  })

  watch(
    () => [
      router.currentRoute.value,
      lang.value,
    ],
    () => {
      const name = router.currentRoute.value.name
      if (name) {
        head.push({
          title: $t(`page.${name.toString()}`),
        })
      }
    },
    { immediate: true },
  )
}
