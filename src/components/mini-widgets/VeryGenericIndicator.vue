<template>
  <div class="flex items-center justify-center h-12 py-1 text-white transition-all w-[7rem]">
    <span class="relative w-[2rem] mdi icon-symbol" :class="[miniWidget.options.iconName]"></span>
    <div class="flex flex-col items-start justify-center ml-1 select-none w-[4.75rem]">
      <div>
        <span class="font-mono text-xl font-semibold leading-6 w-fit">{{ parsedState }}</span>
        <span class="text-xl font-semibold leading-6 w-fit">
          {{ String.fromCharCode(0x20) }} {{ miniWidget.options.variableUnit }}
        </span>
      </div>
      <span class="w-full text-sm font-semibold leading-4 whitespace-nowrap">{{ miniWidget.options.displayName }}</span>
    </div>
  </div>
  <Dialog v-model:show="miniWidget.managerVars.configMenuOpen" class="w-80">
    <div class="w-full h-full">
      <div class="flex items-center mb-3 justify-evenly">
        <div
          class="px-3 py-1 transition-all rounded-md cursor-pointer select-none text-slate-100 hover:bg-slate-400"
          :class="{ 'bg-slate-400': currentTab === 'presets' }"
          @click="currentTab = 'presets'"
        >
          Presets
        </div>
        <div
          class="px-3 py-1 transition-all rounded-md cursor-pointer select-none text-slate-100 hover:bg-slate-400"
          :class="{ 'bg-slate-400': currentTab === 'custom' }"
          @click="currentTab = 'custom'"
        >
          Custom
        </div>
      </div>
      <div v-if="currentTab === 'custom'" class="flex flex-col items-center justify-around">
        <div class="flex items-center justify-between w-full my-1">
          <span class="mr-1 text-slate-100">Display name</span>
          <input v-model="miniWidget.options.displayName" class="w-48 px-2 py-1 rounded-md bg-slate-200" />
        </div>
        <div class="flex items-center justify-between w-full my-1">
          <span class="mr-1 text-slate-100">Variable</span>
          <div class="w-48">
            <Dropdown v-model="miniWidget.options.variableName" :options="Object.keys(store.genericVariables)" />
          </div>
        </div>
        <div class="flex items-center justify-between w-full my-1">
          <span class="mr-1 text-slate-100">Unit</span>
          <input v-model="miniWidget.options.variableUnit" class="w-48 px-2 py-1 rounded-md bg-slate-200" />
        </div>
        <div class="flex items-center justify-between w-full my-1">
          <span class="mr-1 text-slate-100">Multiplier</span>
          <input v-model="miniWidget.options.variableMultiplier" class="w-48 px-2 py-1 rounded-md bg-slate-200" />
        </div>
        <div class="flex items-center justify-between w-full my-1">
          <span class="mr-1 text-slate-100">Icon</span>
          <div class="relative w-48">
            <input v-model="miniWidget.options.iconName" class="w-full py-1 pl-2 pr-8 rounded-md bg-slate-200" />
            <span
              class="absolute right-0.5 m-1 text-2xl -translate-y-1 cursor-pointer text-slate-500 mdi"
              :class="[miniWidget.options.iconName]"
            />
          </div>
        </div>
        <div class="flex items-center justify-center w-full mt-2">
          <input
            v-model="iconSearchString"
            class="w-48 px-2 py-1 rounded-md bg-slate-200"
            placeholder="Search icons..."
          />
        </div>
        <RecycleScroller
          v-if="iconSearchString === ''"
          v-slot="{ item }"
          class="w-full h-40 mt-3"
          :items="iconsNames.filter((name) => name.includes(iconSearchString))"
          :item-size="46"
          :grid-items="6"
        >
          <span
            class="m-1 text-white cursor-pointer mdi icon-symbol"
            :class="[item]"
            @click="miniWidget.options.iconName = item"
          >
          </span>
        </RecycleScroller>
        <div v-else class="grid w-full h-40 grid-cols-6 mt-3 overflow-x-hidden overflow-y-scroll">
          <span
            v-for="icon in iconsNames.filter((name) => name.includes(iconSearchString))"
            :key="icon"
            class="m-1 text-white cursor-pointer mdi icon-symbol"
            :class="[icon]"
            @click="miniWidget.options.iconName = icon"
          />
        </div>
      </div>
      <div v-if="currentTab === 'presets'" class="flex flex-wrap items-center justify-around">
        <div
          v-for="(template, i) in veryGenericIndicatorPresets"
          :key="i"
          class="flex items-center w-[6.25rem] h-12 py-1 pl-6 pr-1 rounded-md text-white justify-center cursor-pointer hover:bg-slate-100/20 transition-all"
          @click="setIndicatorFromTemplate(template)"
        >
          <span class="relative w-[2rem] mdi icon-symbol" :class="[template.iconName]"></span>
          <div class="flex flex-col items-start justify-center ml-1 min-w-[4rem] max-w-[6rem] select-none">
            <span class="text-xl font-semibold leading-6 w-fit">
              {{ round(Math.random() * Number(template.variableMultiplier)).toFixed(0) }} {{ template.variableUnit }}
            </span>
            <span class="w-full text-sm font-semibold leading-4 whitespace-nowrap">{{ template.displayName }}</span>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import * as MdiExports from '@mdi/js/mdi'
import { computed, onBeforeMount, onMounted, ref, toRefs, watch } from 'vue'

import Dropdown from '@/components/Dropdown.vue'
import { round } from '@/libs/utils'
import { useMainVehicleStore } from '@/stores/mainVehicle'
import { type VeryGenericIndicatorPreset, veryGenericIndicatorPresets } from '@/types/genericIndicator'
import type { MiniWidget } from '@/types/miniWidgets'

import Dialog from '../Dialog.vue'

const props = defineProps<{
  /**
   * Configuration of the widget
   */
  miniWidget: MiniWidget
}>()
const miniWidget = toRefs(props).miniWidget

onBeforeMount(() => {
  // Set initial widget options if they don't exist
  if (Object.keys(miniWidget.value.options).length === 0) {
    Object.assign(miniWidget.value.options, {
      displayName: '',
      variableName: '',
      iconName: 'mdi-help-box',
      variableUnit: '%',
      variableMultiplier: 1,
    })
  }

  iconsNames = Object.keys(MdiExports).map((originalName) => {
    return originalName.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
  })
})

const store = useMainVehicleStore()

const currentState = ref<unknown>(0)

const finalValue = computed(() => Number(miniWidget.value.options.variableMultiplier) * Number(currentState.value))
const parsedState = computed(() => {
  if (currentState.value === undefined) {
    return '--'
  }
  const value = finalValue.value
  if (value < 1) return value.toFixed(2)
  if (value >= 1 && value < 100) return value.toFixed(1)
  if (value >= 10000) return `${(value / 10000).toFixed(0)}k`
  return value.toFixed(0)
})

const updateVariableState = (): void => {
  currentState.value = store.genericVariables[miniWidget.value.options.variableName as string]
}
watch(store.genericVariables, updateVariableState)
watch(miniWidget, updateVariableState)
onMounted(() => updateVariableState())

let iconsNames: string[] = []

const iconSearchString = ref('')
const currentTab = ref('presets')

const setIndicatorFromTemplate = (template: VeryGenericIndicatorPreset): void => {
  miniWidget.value.options.displayName = template.displayName
  miniWidget.value.options.variableName = template.variableName
  miniWidget.value.options.iconName = template.iconName
  miniWidget.value.options.variableUnit = template.variableUnit
  miniWidget.value.options.variableMultiplier = template.variableMultiplier
}
</script>

<style>
.icon-symbol {
  font-size: 2rem;
  line-height: 2rem;
}
</style>
