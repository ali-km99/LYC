<script></script>

<template>
  <!-- العنوان الرئيسي -->

  <body class="bg-gray-100 font-sans antialiased">
    <!-- العنوان الرئيسي -->
    <header class="bg-[#3B82F6] text-white text-center py-6">
      <h1 class="text-3xl font-bold">التاريخ الذهبي - نادي الأشرعة البحرية</h1>
      <p class="mt-2 text-lg">استكشف إنجازاتنا على مر السنين</p>
    </header>

    <!-- خط زمني للأحداث -->
    <main class="container mx-auto mt-10 px-4">
      <div class="relative">
        <div
          class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#3B82F6]"
        ></div>

        <!-- الحدث الأول -->
        <div class="mb-10 flex items-center w-full">
          <div class="w-1/2 pr-6 text-right fade-in" id="event1">
            <span
              class="bg-[#3B82F6] text-white font-semibold py-1 px-3 rounded-lg"
              >1990</span
            >
            <h2 class="text-2xl font-semibold text-[#3B82F6]">إنشاء النادي</h2>
            <p class="text-gray-700 mt-2">
              تم إنشاء النادي في عام 1990 بهدف نشر رياضة الأشرعة البحرية في
              المنطقة وتحقيق النجاح على الصعيد المحلي والعالمي.
            </p>
          </div>
          <div class="w-1/2 pl-6 fade-in-right" id="image1">
            <img
              src="../assets/imeges/image2.png"
              alt="صورة لإنشاء النادي"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <!-- الحدث الثاني -->
        <div class="mb-10 flex items-center w-full flex-row-reverse">
          <div class="w-1/2 pl-6 text-left fade-in" id="event2">
            <span
              class="bg-[#3B82F6] text-white font-semibold py-1 px-3 rounded-lg"
              >2005</span
            >
            <h2 class="text-2xl font-semibold text-[#3B82F6]">
              أول بطولة عالمية
            </h2>
            <p class="text-gray-700 mt-2">
              حقق النادي أول فوز له في بطولة عالمية عام 2005، مما أسهم في رفع
              اسم النادي دولياً وجعل اللاعبين يحظون بتقدير عالمي.
            </p>
          </div>
          <div class="w-1/2 pr-6 fade-in-right" id="image2">
            <img
              src="../assets/imeges/image1.png"
              alt="صورة من البطولة العالمية"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <!-- الحدث الثالث -->
        <div class="mb-10 flex items-center w-full">
          <div class="w-1/2 pr-6 text-right fade-in" id="event3">
            <span
              class="bg-[#3B82F6] text-white font-semibold py-1 px-3 rounded-lg"
              >2023</span
            >
            <h2 class="text-2xl font-semibold text-[#3B82F6]">آخر إنجاز</h2>
            <p class="text-gray-700 mt-2">
              في عام 2023، حقق النادي إنجازاً آخر في بطولة دولية، مما يُعد
              تتويجاً لجهود السنوات العديدة في تطوير مهارات اللاعبين.
            </p>
          </div>
          <div class="w-1/2 pl-6 fade-in-right" id="image3">
            <img
              src="../assets/imeges/image3.png"
              alt="صورة للإنجاز الأخير"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </main>

    <!-- تذييل الصفحة -->

    <!-- JavaScript لتفعيل الأنيميشن عند التمرير -->
  </body>
</template>
<style>
/* تأثيرات الحركة */
.fade-in {
  opacity: 0;
  transform: translateX(-50px);
  transition:
    opacity 2s ease,
    transform 2s ease;
}
.fade-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition:
    opacity 2s ease,
    transform 2s ease;
}
.fade-in.show {
  opacity: 1;
  transform: translateX(0);
}
.fade-in-right.show {
  opacity: 1;
  transform: translateX(0);
}
</style>
