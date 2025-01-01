<template>
  <div class="hero-section py-10">
    <div class="container gap-5 grid grid-cols items-center md:grid-cols-2">
      <div class="hero-heading lg:order-1 md:order-1 order-2">
        <h1
          class="text-4xl font-bold text-gradient lg:text-right md:text-right text-center"
        >
          "خدمات تسويقية واستشارات أعمال لتحقيق نمو أعمالك لزيادة نجاحك"
        </h1>
        <p
          class="mt-5 leading-9 text-lg lg:text-right md:text-right text-center"
        >
          نوفر حلول تسويقية متكاملة واستشارات أعمال مخصصة لمساعدتك على تحقيق
          أهدافك وزيادة عائداتك
        </p>
        <div class="text-center lg:text-right sm:text-center">
          <button class="btn mt-5">أطلب أستشارة مجانية</button>
        </div>
      </div>
      <div
        class="img-landing lg:order-2 md:order-2 order-1 mx-auto lg:w-full w-3/4"
      >
        <img src="../images/hero/landing-img.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style>
.hero-section {
  background-image: url(../images/hero/landing-background.jpg);
  background-position: center;
  background-size: cover;
}
</style>
