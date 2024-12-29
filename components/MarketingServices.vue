<template>
  <div class="marketing-service p-10">
    <div class="container">
      <h1 class="text-gradient font-bold text-center text-4xl">
        الخدمات التسويقية
      </h1>
      <div
        class="cards grid grid-cols lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 py-5 my-10"
      >
        <div class="item-card card text-center justify-items-center">
          <div class="card-img">
            <img
              class="card-image"
              src="/images/marketing-services/facebook-influencer-background-with-decive-emoticons.jpg"
              alt=""
            />
          </div>
          <div class="card-body">
            <h3 class="font-bold my-5">التسويق الرقمي</h3>
            <p>
              تحسين وجودك على الإنترنت من خلال الإعلانات الرقمية، تحسين محركات
              البحث (SEO)، وإدارة حسابات التواصل الاجتماعي
            </p>
          </div>
        </div>
        <div class="item-card card text-center justify-items-center">
          <img
            class="mt-5 py-2"
            src="/images/marketing-services/digital-marketing-concepts-advertising-with-video-marketing-social-media-marketing.jpg"
            alt=""
          />

          <div class="card-body">
            <h3 class="font-bold my-5">إعلانات الدفع لكل نقرة (PPC)</h3>
            <p class="">حملات إعلانية موجهة لزيادة حركة المرور والمبيعات</p>
          </div>
        </div>
        <div class="item-card card text-center justify-items-center">
          <img
            class="card-image"
            src="/images/marketing-services/Best-Solutions-Icon.png"
            alt=""
          />
          <div class="card-body">
            <h3 class="font-bold my-5">إدارة الحملات التسويقية</h3>
            <p class="">
              تخطيط وتنفيذ حملات تسويقية متعددة القنوات للوصول إلى جمهور أوسع
            </p>
          </div>
        </div>
        <div class="item-card card text-center justify-items-center">
          <img
            class="card-image"
            src="/images/marketing-services/SEO-Performance-Icon.png"
            alt=""
          />
          <div class="card-body">
            <h3 class="font-bold my-5">تحليل السوق والمنافسين</h3>
            <p class="">
              فهم السوق المستهدف وتطوير استراتيجيات مخصصة لزيادة الحصة السوقية
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
.marketing-service {
  background-image: url("/images/marketing-services/background.png");
  background-color: rgba(255, 255, 255, 0.6);
  background-repeat: no-repeat;
  background-position: bottom 37% right 0;
  background-size: cover;
  background-blend-mode: lighten;
}
</style>
