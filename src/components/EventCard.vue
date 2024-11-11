<template>
  <div
    :class="`flex ${reversed ? 'flex-row-reverse' : ''} gap-6 items-center my-16`"
  >
    <!-- قسم النص -->
    <div
      v-motion-slide-visible-bottom
      :delay="200"
      :duration="1500"
      :class="`w-1/2 ${reversed ? 'text-end' : 'text-end'}`"
    >
      <p
        v-motion
        :initial="{ opacity: 0, x: reversed ? 200 : -200 }"
        :enter="{ opacity: 1, x: 220, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="200"
        :duration="2000"
        class="text-white font-semibold bg-[#3B82F6] py-2 rounded-lg flex w-16 justify-center"
      >
        {{ event.year }}
      </p>

      <h2
        v-motion-pop-visible
        :variants="{ custom: { scale: 2 } }"
        :delay="100"
        :duration="1500"
        class="text-2xl font-semibold text-[#3B82F6] mt-2"
      >
        {{ event.title }}
      </h2>
      <p class="text-gray-700 mt-2">{{ event.description }}</p>
    </div>

    <!-- قسم الصور -->
    <div
      class="flex space-x-4 w-1/2"
      v-motion
      :initial="{ opacity: 0, y: reversed ? 100 : -100 }"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :delay="200"
      :duration="1200"
    >
      <img
        v-motion-slide-visible-once-right
        :delay="200"
        :duration="1200"
        v-for="(image, index) in event.images"
        :key="index"
        :src="image"
        :alt="`صورة لـ ${props.event}`"
        class="w-full h-64 object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  reversed: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped></style>
