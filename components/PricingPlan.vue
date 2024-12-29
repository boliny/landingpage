<template>
  <div class="pricing-plan py-10">
    <div class="container p-10">
      <h1 class="text-gradient font-bold text-center text-4xl">خطط الأسعار</h1>
      <div class="cards grid lg:grid-cols-3 gap-10 py-5 my-10">
        <div class="card-price active text-white">
          <div class="card-title">
            <h3 class="font-bold text-center my-5 text-2xl">الباقات</h3>
            <ul>
              <li>اختر الخطة المثالية لمشروعك</li>
              <li>احصل على عرض مخصص يناسب احتياجاتك</li>
              <li>اختر الخطة المثالية لمشروعك</li>
              <li>احصل على عرض مخصص يناسب احتياجاتك</li>
            </ul>
          </div>
          <div class="text-center mt-5">
            <button class="btn-white w-full">تواصل معنا</button>
          </div>
        </div>
        <div class="card-price card-item">
          <div class="card-title">
            <h3 class="font-bold text-center my-5 text-2xl text-gradient">
              الباقات
            </h3>
            <ul>
              <li>اختر الخطة المثالية لمشروعك</li>
              <li>احصل على عرض مخصص يناسب احتياجاتك</li>
              <li>اختر الخطة المثالية لمشروعك</li>
              <li>احصل على عرض مخصص يناسب احتياجاتك</li>
            </ul>
          </div>
          <div class="text-center mt-5">
            <button class="btn w-full">تواصل معنا</button>
          </div>
        </div>
        <div class="card-price card-item">
          <div class="card-title">
            <h3 class="font-bold text-center my-5 text-2xl text-gradient">
              الباقات
            </h3>
            <ul>
              <li>اختر الخطة المثالية لمشروعك</li>
              <li>احصل على عرض مخصص يناسب احتياجاتك</li>
              <li>اختر الخطة المثالية لمشروعك</li>
              <li>احصل على عرض مخصص يناسب احتياجاتك</li>
            </ul>
          </div>
          <div class="text-center mt-5">
            <button class="btn w-full">تواصل معنا</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  position: relative;
  margin-top: 15px;
}
li::before {
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  content: "\f00c";
  font-size: 10px;
  width: 10px;
  height: 10px;
  color: #ffffff;
  background-color: #5a8cff;
  padding: 4px;
  border-radius: 50%;
  margin-left: 11px;
}
.card-item {
  background-image: url("../images/background-div.png");
  background-size: 65%;
  background-position: top -10px right 0;
  background-repeat: no-repeat;
}
.card-price.active {
  background-image: url("/images/background.jpg");
  background-size: center;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
