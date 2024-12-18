import type { Preset } from 'unocss'
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'flex-col': 'flex flex-col',
  },
  presets: [presetAttributify(), presetUno()],
})
