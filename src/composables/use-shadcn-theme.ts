const { css } = useStyleTag(``, {
  id: `__shadcn_color_vars__`,
})

export function updateShadcnColorVars(updates: Partial<Preference>) {
  const colorVars = genShadcnColorVars(
    updates.primaryColor ?? preference.value.primaryColor,
    isDark.value,
  )

  let cssText = `:root {`
  for (const [key, value] of Object.entries(colorVars)) {
    cssText += `--${key}: ${value};`
  }
  cssText += `}`
  css.value = cssText
}
