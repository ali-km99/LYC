<template>
  <nav class="h-28 w-full bg-[#3B82F6]">
    <div class="flex items-center justify-between">
      <img
        src="../assets/imeges/emptylogo.png"
        width="100"
        alt="main-logo"
        class="m-2 ml-6"
      />
      <!-- list  -->
      <div class="">
        <ul class="flex flex-row gap-10 text-white">
          <RouterLink :to="{ name: 'home' }">
            <li
              class="hover:text-[#394A98] hover:scale-110 duration-150 transition hover:cursor-pointer"
            >
              الرئيسي
            </li>
          </RouterLink>
          <li
            class="hover:text-[#394A98] hover:scale-110 duration-150 transition"
          >
            معرض الصور
          </li>
          <li
            class="hover:text-[#394A98] hover:scale-110 duration-150 transition"
          >
            الأنشطة
          </li>
          <li
            class="hover:text-[#394A98] hover:scale-110 duration-150 transition"
          >
            تواصل معنا
          </li>
          <RouterLink :to="{ name: 'GoldenHistory' }">
            <li
              class="hover:text-[#394A98] hover:scale-110 duration-150 transition"
            >
              السجل الذهبي
            </li>
          </RouterLink>
        </ul>
      </div>
      <!-- list -->

      <div class="flex text-white">
        <img src="../assets/lang.svg" width="20" alt="" />
        <div>AR</div>
        <img src="../assets/arrowDown.svg" class="" width="20" alt="" />
      </div>
    </div>
  </nav>

  <header class="bgGR text-white text-center pt-10 pb-20">
    <h1 class="text-3xl font-bold">التاريخ الذهبي - نادي الليبي لليخوت</h1>
    <p class="mt-2 text-lg">استكشف إنجازاتنا على مر السنين</p>
  </header>
  <div class="container mx-auto mt-10 px-4">
    <div class="relative">
      <!-- الخط الرئيسي المتعرج -->
      <div
        class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#3B82F6] timeline-line"
      ></div>

      <!-- الأحداث -->
      <EventCard
        v-for="(event, index) in events"
        :key="event.year"
        :event="event"
        :reversed="index % 2 !== 0"
      />
    </div>
  </div>
</template>

<script setup>
import EventCard from '../components/EventCard.vue'

const events = [
  {
    year: 2017,
    title: ' البطوله الاولى للنادي الليبي لليخوت',
    description:
      'الترتيب الأول و الثاني  فئه كبار في صنف الأبتومست  بالبطولة الأولى للنادي الليبي لليخوت',
    images: ['src/assets/imeges/image1.png', 'src/assets/imeges/image2.png'],
  },
  {
    year: 2017,
    title: ' البطوله الاولى للنادي الليبي لليخوت',
    description:
      'الترتيب الثاني و الثالث فئه الصغار في صنف الأوبتيمست بالبطوله الأولى للنادي الليبي لليخوت',
    images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  },
  {
    year: 2023,
    title: 'آخر إنجاز',
    description:
      'في عام 2023، حقق النادي إنجازاً آخر في بطولة دولية، مما يُعد تتويجاً لجهود السنوات العديدة في تطوير مهارات اللاعبين.',
    images: ['src/assets/imeges/image5.png'],
  },
  {
    year: 1990,
    title: 'إنشاء النادي',
    description:
      'تم إنشاء النادي في عام 1990 بهدف نشر رياضة الأشرعة البحرية في المنطقة وتحقيق النجاح على الصعيد المحلي والعالمي.',
    images: ['src/assets/imeges/image1.png', 'src/assets/imeges/image2.png'],
  },
  {
    year: 2005,
    title: 'أول بطولة عالمية',
    description:
      'حقق النادي أول فوز له في بطولة عالمية عام 2005، مما أسهم في رفع اسم النادي دولياً وجعل اللاعبين يحظون بتقدير عالمي.',
    images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  },
  {
    year: 2023,
    title: 'آخر إنجاز',
    description:
      'في عام 2023، حقق النادي إنجازاً آخر في بطولة دولية، مما يُعد تتويجاً لجهود السنوات العديدة في تطوير مهارات اللاعبين.',
    images: ['src/assets/imeges/image4.jpg', 'src/assets/imeges/image5.png'],
  },
  {
    year: 1990,
    title: 'إنشاء النادي',
    description:
      'تم إنشاء النادي في عام 1990 بهدف نشر رياضة الأشرعة البحرية في المنطقة وتحقيق النجاح على الصعيد المحلي والعالمي.',
    images: ['src/assets/imeges/image1.png', 'src/assets/imeges/image2.png'],
  },
  {
    year: 2005,
    title: 'أول بطولة عالمية',
    description:
      'حقق النادي أول فوز له في بطولة عالمية عام 2005، مما أسهم في رفع اسم النادي دولياً وجعل اللاعبين يحظون بتقدير عالمي.',
    images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  },
  {
    year: 2023,
    title: 'آخر إنجاز',
    description:
      'في عام 2023، حقق النادي إنجازاً آخر في بطولة دولية، مما يُعد تتويجاً لجهود السنوات العديدة في تطوير مهارات اللاعبين.',
    images: ['src/assets/imeges/image4.jpg', 'src/assets/imeges/image5.png'],
  },
  {
    year: 1990,
    title: 'إنشاء النادي',
    description:
      'تم إنشاء النادي في عام 1990 بهدف نشر رياضة الأشرعة البحرية في المنطقة وتحقيق النجاح على الصعيد المحلي والعالمي.',
    images: ['src/assets/imeges/image1.png', 'src/assets/imeges/image2.png'],
  },
  {
    year: 2005,
    title: 'أول بطولة عالمية',
    description:
      'حقق النادي أول فوز له في بطولة عالمية عام 2005، مما أسهم في رفع اسم النادي دولياً وجعل اللاعبين يحظون بتقدير عالمي.',
    images: ['src/assets/imeges/image3.png', 'src/assets/imeges/image4.jpg'],
  },
  {
    year: 2023,
    title: 'آخر إنجاز',
    description:
      'في عام 2023، حقق النادي إنجازاً آخر في بطولة دولية، مما يُعد تتويجاً لجهود السنوات العديدة في تطوير مهارات اللاعبين.',
    images: ['src/assets/imeges/image4.jpg', 'src/assets/imeges/image5.png'],
  },
]
</script>

<style scoped>
.timeline-line {
  width: 2px;
  height: 100%;
  background: repeating-linear-gradient(
    to bottom,
    #3b82f6 0%,
    #3b82f6 50%,
    transparent 50%,
    transparent 100%
  );
  background-size: 20px 20px;
}

body {
  overflow-x: hidden;
}

.bgGR {
  background-color: #3b82f6;
  background-image: linear-gradient(
    180deg,
    #3b82f6 80%,

    #ffffff 99%
  );
}
</style>
