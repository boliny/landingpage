<template>
  <div class="comments p-10">
    <div class="container p-10">
      <h1 class="text-gradient font-bold text-center text-4xl">
        تعليقات العملاء
      </h1>
      <div class="items grid lg:grid-cols-2 p-5">
        <div class="item active text-white p-10">
          <div class="head-item">
            <div
              class="user lg:flex gap-4 items-center text-center lg:text-right"
            >
              <div class="rounded-full imgBox">
                <img src="/images/comments/user.jpg" alt="" width="120" />
              </div>
              <div class="boxTitle">
                <h2 class="font-medium">محمد البوليني</h2>
                <p>مصمم تجربة مستخدم</p>
              </div>
            </div>
          </div>
          <div class="body-item">
            <p class="my-5">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو
              مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن
              أن يستبدل في نفس المساحة
            </p>
          </div>
          <div class="rating flex mt-5">
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
          </div>
        </div>
        <div class="item p-10 bg-white">
          <div class="head-item">
            <div
              class="user lg:flex gap-4 items-center text-center lg:text-right"
            >
              <div class="rounded-full imgBox">
                <img src="/images/comments/user.jpg" alt="user" width="120" />
              </div>
              <div class="boxTitle text-gradient">
                <h2 class="font-medium">محمد البوليني</h2>
                <p>مصمم تجربة مستخدم</p>
              </div>
            </div>
          </div>
          <div class="body-item">
            <p class="my-5">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو
              مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن
              أن يستبدل في نفس المساحة
            </p>
          </div>
          <div class="rating flex w-4/12 mt-5">
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
          </div>
        </div>
      </div>
      <div class="bullets mt-10 flex justify-center">
        <span class="second-circle"></span>
        <span class="third-circle"></span>
        <span class="active-circle"></span>
      </div>
    </div>
  </div>
</template>

<style>
.comments {
  background-image: url("/images/hero/landing-background.jpg");
}
.imgBox {
  overflow: hidden;
  border-radius: 50%;
  width: 80px;
  height: 80px;
}
.imgBox img {
  transform: scale(1.35);
}
.rating {
  width: 200px;
}
.rating svg {
  width: 30px;
  height: 20px;
}
.rating path {
  fill: #fdaf3b;
}
.active-circle::before {
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  content: "\f111"; /* Star icon */
  font-size: 30px;
  background: linear-gradient(
    250deg,
    rgba(10, 0, 69, 1) 10%,
    rgba(34, 100, 220, 1) 90%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.second-circle::before {
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  content: "\f111"; /* Star icon */
  font-size: 30px;
  color: #8aabed;
}
.third-circle::before {
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  content: "\f111"; /* Star icon */
  font-size: 30px;
  color: #8aabed;
}
.bullets span {
  margin-right: 15px;
}
.active {
  background-image: url("/images/background.jpg");
  background-size: center;
  background-position: center;
  background-repeat: no-repeat;
}
@media (max-width: 1024px) {
  .imgBox {
    margin: 10px auto;
  }
}
</style>
