<template>
  <div class="business p-10">
    <div class="container">
      <h1 class="text-gradient font-bold text-center text-4xl">
        خدمات استشارات الأعمال
      </h1>
      <div class="cards grid lg:grid-cols-4 md:grid-cols-2 gap-10 py-5 my-10">
        <div class="item-card card text-center justify-items-center">
          <img
            class="card-image"
            src="/images/business/modern-business-growth-concept.jpg"
            alt=""
          />

          <div class="card-body">
            <h3 class="font-bold my-5">استراتيجيات النمو</h3>
            <p>
              : مساعدة الشركات على وضع خطط نمو فعالة بناءً على تحليل بيانات
              السوق والاتجاهات
            </p>
          </div>
        </div>
        <div class="item-card card text-center justify-items-center">
          <img
            class="card-image mt-10"
            src="/images/business/laptop-megaphone.jpg"
            alt=""
          />

          <div class="card-body">
            <h3 class="font-bold my-7">تحليل أداء الأعمال</h3>
            <p>
              تقييم الوضع الحالي للشركة وتقديم توصيات لتحسين الأداء وزيادة
              الكفاءة
            </p>
          </div>
        </div>
        <div class="item-card card text-center justify-items-center">
          <img
            class="card-image mt-10"
            src="/images/business/building-concept-strategies.jpg"
            alt=""
          />
          <div class="card-body">
            <h3 class="font-bold mt-14 mb-6">تطوير العلامة التجارية</h3>
            <p class="">
              بناء علامة تجارية قوية تترك انطباعًا دائمًا لدى العملاء
            </p>
          </div>
        </div>
        <div class="item-card card text-center justify-items-center">
          <img
            class="card-image"
            src="/images//business/hand-drawn-flat-design.jpg"
            alt=""
          />
          <div class="card-body">
            <h3 class="font-bold my-5">التوسع في الأسواق الجديدة</h3>
            <p class="">
              دعم الشركات في دخول أسواق جديدة بنجاح وتحديد الفرص المثلى
            </p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn lg:w-1/5 md:w-full">تواصل معنا</button>
      </div>
    </div>
  </div>
</template>

<style>
.card-image {
  width: 215px;
}
.business {
  background-image: url("/images/marketing-services/background.png");
  background-color: rgba(255, 255, 255, 0.6);
  background-repeat: no-repeat;
  background-position: bottom 37% right 0;
  background-size: cover;
  background-blend-mode: lighten;
}
</style>
