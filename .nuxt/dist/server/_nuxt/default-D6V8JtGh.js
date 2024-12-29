import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "ufo";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
const _imports_0$5 = "" + __buildAssetsURL("landing-img.BbIh-9Ua.png");
const _sfc_main$9 = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero-section py-10" }, _attrs))}><div class="container grid grid-cols items-center md:grid-cols-2 sm:grid-cols-2"><div class="hero-heading"><h1 class="text-4xl font-bold text-gradient lg:text-right md:text-right text-center"> &quot;خدمات تسويقية واستشارات أعمال لتحقيق نمو أعمالك لزيادة نجاحك&quot; </h1><p class="mt-5 leading-9 text-lg lg:text-right md:text-right text-center"> نوفر حلول تسويقية متكاملة واستشارات أعمال مخصصة لمساعدتك على تحقيق أهدافك وزيادة عائداتك </p><div class="text-center lg:text-right sm:text-center"><button class="btn mt-5">أطلب أستشارة مجانية</button></div></div><div class="img-landing"><img${ssrRenderAttr("src", _imports_0$5)} alt=""></div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionHero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _imports_0$4 = "" + __buildAssetsURL("facebook-influencer-background-with-decive-emoticons.D3esQQuf.jpg");
const _imports_1$1 = "" + __buildAssetsURL("digital-marketing-concepts-advertising-with-video-marketing-social-media-marketing.CZiO7NnK.jpg");
const _imports_2$1 = "" + __buildAssetsURL("Best-Solutions-Icon.D6XiaKmS.png");
const _imports_3$1 = "" + __buildAssetsURL("SEO-Performance-Icon.COF5Es2v.png");
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "marketing-service p-10" }, _attrs))}><div class="container"><h1 class="text-gradient font-bold text-center text-4xl"> الخدمات التسويقية </h1><div class="cards grid grid-cols lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 py-5 my-10"><div class="item-card card text-center justify-items-center"><div class="card-img"><img class="card-image"${ssrRenderAttr("src", _imports_0$4)} alt=""></div><div class="card-body"><h3 class="font-bold my-5">التسويق الرقمي</h3><p> تحسين وجودك على الإنترنت من خلال الإعلانات الرقمية، تحسين محركات البحث (SEO)، وإدارة حسابات التواصل الاجتماعي </p></div></div><div class="item-card card text-center justify-items-center"><img class="mt-5 py-2"${ssrRenderAttr("src", _imports_1$1)} alt=""><div class="card-body"><h3 class="font-bold my-5">إعلانات الدفع لكل نقرة (PPC)</h3><p class="">حملات إعلانية موجهة لزيادة حركة المرور والمبيعات</p></div></div><div class="item-card card text-center justify-items-center"><img class="card-image"${ssrRenderAttr("src", _imports_2$1)} alt=""><div class="card-body"><h3 class="font-bold my-5">إدارة الحملات التسويقية</h3><p class=""> تخطيط وتنفيذ حملات تسويقية متعددة القنوات للوصول إلى جمهور أوسع </p></div></div><div class="item-card card text-center justify-items-center"><img class="card-image"${ssrRenderAttr("src", _imports_3$1)} alt=""><div class="card-body"><h3 class="font-bold my-5">تحليل السوق والمنافسين</h3><p class=""> فهم السوق المستهدف وتطوير استراتيجيات مخصصة لزيادة الحصة السوقية </p></div></div></div><div class="text-center"><button class="btn lg:w-1/5 md:w-full">تواصل معنا</button></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MarketingServices.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _imports_0$3 = "" + __buildAssetsURL("modern-business-growth-concept.DXI3vp3V.jpg");
const _imports_1 = "" + __buildAssetsURL("laptop-megaphone.DRzTA9TZ.jpg");
const _imports_2 = "" + __buildAssetsURL("building-concept-strategies.9GYusr_-.jpg");
const _imports_3 = "" + __buildAssetsURL("hand-drawn-flat-design.C3naZZIJ.jpg");
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "business p-10" }, _attrs))}><div class="container"><h1 class="text-gradient font-bold text-center text-4xl"> خدمات استشارات الأعمال </h1><div class="cards grid lg:grid-cols-4 md:grid-cols-2 gap-10 py-5 my-10"><div class="item-card card text-center justify-items-center"><img class="card-image"${ssrRenderAttr("src", _imports_0$3)} alt=""><div class="card-body"><h3 class="font-bold my-5">استراتيجيات النمو</h3><p> : مساعدة الشركات على وضع خطط نمو فعالة بناءً على تحليل بيانات السوق والاتجاهات </p></div></div><div class="item-card card text-center justify-items-center"><img class="card-image mt-10"${ssrRenderAttr("src", _imports_1)} alt=""><div class="card-body"><h3 class="font-bold my-7">تحليل أداء الأعمال</h3><p> تقييم الوضع الحالي للشركة وتقديم توصيات لتحسين الأداء وزيادة الكفاءة </p></div></div><div class="item-card card text-center justify-items-center"><img class="card-image mt-10"${ssrRenderAttr("src", _imports_2)} alt=""><div class="card-body"><h3 class="font-bold mt-14 mb-6">تطوير العلامة التجارية</h3><p class=""> بناء علامة تجارية قوية تترك انطباعًا دائمًا لدى العملاء </p></div></div><div class="item-card card text-center justify-items-center"><img class="card-image"${ssrRenderAttr("src", _imports_3)} alt=""><div class="card-body"><h3 class="font-bold my-5">التوسع في الأسواق الجديدة</h3><p class=""> دعم الشركات في دخول أسواق جديدة بنجاح وتحديد الفرص المثلى </p></div></div></div><div class="text-center"><button class="btn lg:w-1/5 md:w-full">تواصل معنا</button></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Business.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "working p-10" }, _attrs))}><div class="container"><h1 class="text-center text-4xl font-bold text-white"> فوائد العمل معنا </h1><div class="cards grid lg:grid-cols-4 md:grid-cols-2 gap-10 py-5 my-10"><div class="item-card rounded-md bg-white p-10 text-center justify-items-center"><div class="card-img"><svg width="215" fill="url(#Gradient1)" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><defs><linearGradient id="Gradient1"><stop class="stop1" offset="0%"></stop><stop class="stop2" offset="50%"></stop><stop class="stop3" offset="100%"></stop></linearGradient></defs><g><g><g><path d="M437.019,74.981C388.668,26.629,324.38,0,256,0S123.332,26.629,74.981,74.981C26.629,123.332,0,187.62,0,256
				s26.629,132.668,74.981,181.019C123.332,485.371,187.62,512,256,512c64.518,0,126.15-24.077,173.541-67.796l-10.312-11.178
				c-44.574,41.12-102.544,63.766-163.229,63.766c-64.317,0-124.786-25.046-170.266-70.527
				C40.254,380.786,15.208,320.317,15.208,256S40.254,131.214,85.734,85.735C131.214,40.254,191.683,15.208,256,15.208
				s124.786,25.046,170.266,70.527c45.48,45.479,70.526,105.948,70.526,170.265c0,60.594-22.587,118.498-63.599,163.045
				l11.188,10.301C487.986,381.983,512,320.421,512,256C512,187.62,485.371,123.332,437.019,74.981z"></path><path d="M282.819,263.604h63.415v-15.208h-63.415c-1.619-5.701-5.007-10.662-9.536-14.25l35.913-86.701l-14.049-5.82
				l-35.908,86.688c-1.064-0.124-2.142-0.194-3.238-0.194c-15.374,0-27.881,12.508-27.881,27.881s12.507,27.881,27.881,27.881
				C268.737,283.881,279.499,275.292,282.819,263.604z M243.327,256c0-6.989,5.685-12.673,12.673-12.673
				c6.989,0,12.673,5.685,12.673,12.673c0,6.989-5.685,12.673-12.673,12.673C249.011,268.673,243.327,262.989,243.327,256z"></path><path d="M451.168,256c0-107.616-87.552-195.168-195.168-195.168S60.832,148.384,60.832,256S148.384,451.168,256,451.168
				S451.168,363.616,451.168,256z M76.04,256c0-99.231,80.73-179.96,179.96-179.96S435.96,156.769,435.96,256
				S355.231,435.96,256,435.96S76.04,355.231,76.04,256z"></path><rect x="248.396" y="366.511" width="15.208" height="56.776"></rect><path d="M61.672,336.501l-14.05,5.82c23.059,55.668,66.416,99.026,122.085,122.085l5.82-14.049
				C123.61,428.851,83.176,388.416,61.672,336.501z"></path><path d="M450.397,175.485l14.049-5.82c-23.059-55.669-66.417-99.027-122.085-122.084l-5.82,14.049
				C388.457,83.135,428.891,123.569,450.397,175.485z"></path><path d="M256,45.624V30.416c-60.256,0-116.904,23.465-159.512,66.071C53.881,139.095,30.416,195.744,30.416,256h15.208
				c0-56.194,21.883-109.024,61.617-148.759C146.976,67.507,199.807,45.624,256,45.624z"></path><path d="M481.584,256h-15.208c0,56.193-21.883,109.024-61.617,148.759c-39.734,39.735-92.566,61.617-148.759,61.617v15.208
				c60.256,0,116.904-23.465,159.513-66.071C458.119,372.904,481.584,316.256,481.584,256z"></path><rect x="248.396" y="88.713" width="15.208" height="56.776"></rect><rect x="183.845" y="106.019" transform="matrix(0.3827 0.9239 -0.9239 0.3827 226.5988 -111.8865)" width="26.361" height="15.208"></rect><rect x="301.78" y="390.75" transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 67.4626 841.7849)" width="26.361" height="15.207"></rect><rect x="100.445" y="189.43" transform="matrix(0.9239 0.3827 -0.3827 0.9239 84.0528 -28.4842)" width="26.36" height="15.207"></rect><rect x="385.201" y="307.351" transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 645.9084 758.3894)" width="26.361" height="15.207"></rect><rect x="106.028" y="301.792" transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 -133.8779 540.4901)" width="15.207" height="26.36"></rect><rect x="390.765" y="183.851" transform="matrix(0.3827 0.9239 -0.9239 0.3827 427.9489 -246.4146)" width="15.207" height="26.361"></rect><rect x="189.433" y="385.188" transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 226.6226 841.8156)" width="15.208" height="26.361"></rect><rect x="307.381" y="100.448" transform="matrix(0.9239 0.3827 -0.3827 0.9239 67.4614 -111.8911)" width="15.207" height="26.361"></rect><rect x="129.389" y="150.181" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 157.7713 380.9216)" width="56.776" height="15.208"></rect><rect x="325.825" y="346.62" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 354.2049 855.1643)" width="56.776" height="15.208"></rect><rect x="88.713" y="248.396" width="56.776" height="15.208"></rect><rect x="366.511" y="248.396" width="56.776" height="15.208"></rect><rect x="150.157" y="325.829" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 18.8444 716.2403)" width="15.208" height="56.776"></rect><rect x="346.602" y="129.395" transform="matrix(0.7071 0.7071 -0.7071 0.7071 215.3148 -204.2485)" width="15.208" height="56.776"></rect></g></g></g></svg></div><div class="card-body"><h3 class="font-bold my-5 text-gradient">استراتيجيات النمو</h3><p> : مساعدة الشركات على وضع خطط نمو فعالة بناءً على تحليل بيانات السوق والاتجاهات </p></div></div><div class="item-card rounded-md bg-white p-10 text-center justify-items-center"><div class="card-img"><svg width="215" fill="url(#Gradient1)" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><defs><linearGradient id="Gradient1"><stop class="stop1" offset="0%"></stop><stop class="stop2" offset="50%"></stop><stop class="stop3" offset="100%"></stop></linearGradient></defs><g><g><g><path d="M437.019,74.981C388.668,26.629,324.38,0,256,0S123.332,26.629,74.981,74.981C26.629,123.332,0,187.62,0,256
				s26.629,132.668,74.981,181.019C123.332,485.371,187.62,512,256,512c64.518,0,126.15-24.077,173.541-67.796l-10.312-11.178
				c-44.574,41.12-102.544,63.766-163.229,63.766c-64.317,0-124.786-25.046-170.266-70.527
				C40.254,380.786,15.208,320.317,15.208,256S40.254,131.214,85.734,85.735C131.214,40.254,191.683,15.208,256,15.208
				s124.786,25.046,170.266,70.527c45.48,45.479,70.526,105.948,70.526,170.265c0,60.594-22.587,118.498-63.599,163.045
				l11.188,10.301C487.986,381.983,512,320.421,512,256C512,187.62,485.371,123.332,437.019,74.981z"></path><path d="M282.819,263.604h63.415v-15.208h-63.415c-1.619-5.701-5.007-10.662-9.536-14.25l35.913-86.701l-14.049-5.82
				l-35.908,86.688c-1.064-0.124-2.142-0.194-3.238-0.194c-15.374,0-27.881,12.508-27.881,27.881s12.507,27.881,27.881,27.881
				C268.737,283.881,279.499,275.292,282.819,263.604z M243.327,256c0-6.989,5.685-12.673,12.673-12.673
				c6.989,0,12.673,5.685,12.673,12.673c0,6.989-5.685,12.673-12.673,12.673C249.011,268.673,243.327,262.989,243.327,256z"></path><path d="M451.168,256c0-107.616-87.552-195.168-195.168-195.168S60.832,148.384,60.832,256S148.384,451.168,256,451.168
				S451.168,363.616,451.168,256z M76.04,256c0-99.231,80.73-179.96,179.96-179.96S435.96,156.769,435.96,256
				S355.231,435.96,256,435.96S76.04,355.231,76.04,256z"></path><rect x="248.396" y="366.511" width="15.208" height="56.776"></rect><path d="M61.672,336.501l-14.05,5.82c23.059,55.668,66.416,99.026,122.085,122.085l5.82-14.049
				C123.61,428.851,83.176,388.416,61.672,336.501z"></path><path d="M450.397,175.485l14.049-5.82c-23.059-55.669-66.417-99.027-122.085-122.084l-5.82,14.049
				C388.457,83.135,428.891,123.569,450.397,175.485z"></path><path d="M256,45.624V30.416c-60.256,0-116.904,23.465-159.512,66.071C53.881,139.095,30.416,195.744,30.416,256h15.208
				c0-56.194,21.883-109.024,61.617-148.759C146.976,67.507,199.807,45.624,256,45.624z"></path><path d="M481.584,256h-15.208c0,56.193-21.883,109.024-61.617,148.759c-39.734,39.735-92.566,61.617-148.759,61.617v15.208
				c60.256,0,116.904-23.465,159.513-66.071C458.119,372.904,481.584,316.256,481.584,256z"></path><rect x="248.396" y="88.713" width="15.208" height="56.776"></rect><rect x="183.845" y="106.019" transform="matrix(0.3827 0.9239 -0.9239 0.3827 226.5988 -111.8865)" width="26.361" height="15.208"></rect><rect x="301.78" y="390.75" transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 67.4626 841.7849)" width="26.361" height="15.207"></rect><rect x="100.445" y="189.43" transform="matrix(0.9239 0.3827 -0.3827 0.9239 84.0528 -28.4842)" width="26.36" height="15.207"></rect><rect x="385.201" y="307.351" transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 645.9084 758.3894)" width="26.361" height="15.207"></rect><rect x="106.028" y="301.792" transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 -133.8779 540.4901)" width="15.207" height="26.36"></rect><rect x="390.765" y="183.851" transform="matrix(0.3827 0.9239 -0.9239 0.3827 427.9489 -246.4146)" width="15.207" height="26.361"></rect><rect x="189.433" y="385.188" transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 226.6226 841.8156)" width="15.208" height="26.361"></rect><rect x="307.381" y="100.448" transform="matrix(0.9239 0.3827 -0.3827 0.9239 67.4614 -111.8911)" width="15.207" height="26.361"></rect><rect x="129.389" y="150.181" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 157.7713 380.9216)" width="56.776" height="15.208"></rect><rect x="325.825" y="346.62" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 354.2049 855.1643)" width="56.776" height="15.208"></rect><rect x="88.713" y="248.396" width="56.776" height="15.208"></rect><rect x="366.511" y="248.396" width="56.776" height="15.208"></rect><rect x="150.157" y="325.829" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 18.8444 716.2403)" width="15.208" height="56.776"></rect><rect x="346.602" y="129.395" transform="matrix(0.7071 0.7071 -0.7071 0.7071 215.3148 -204.2485)" width="15.208" height="56.776"></rect></g></g></g></svg></div><div class="card-body"><h3 class="font-bold my-5 text-gradient">استراتيجيات النمو</h3><p> : مساعدة الشركات على وضع خطط نمو فعالة بناءً على تحليل بيانات السوق والاتجاهات </p></div></div><div class="item-card rounded-md bg-white p-10 text-center justify-items-center"><div class="card-img"><svg width="215" fill="url(#Gradient1)" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><defs><linearGradient id="Gradient1"><stop class="stop1" offset="0%"></stop><stop class="stop2" offset="50%"></stop><stop class="stop3" offset="100%"></stop></linearGradient></defs><g><g><g><path d="M437.019,74.981C388.668,26.629,324.38,0,256,0S123.332,26.629,74.981,74.981C26.629,123.332,0,187.62,0,256
				s26.629,132.668,74.981,181.019C123.332,485.371,187.62,512,256,512c64.518,0,126.15-24.077,173.541-67.796l-10.312-11.178
				c-44.574,41.12-102.544,63.766-163.229,63.766c-64.317,0-124.786-25.046-170.266-70.527
				C40.254,380.786,15.208,320.317,15.208,256S40.254,131.214,85.734,85.735C131.214,40.254,191.683,15.208,256,15.208
				s124.786,25.046,170.266,70.527c45.48,45.479,70.526,105.948,70.526,170.265c0,60.594-22.587,118.498-63.599,163.045
				l11.188,10.301C487.986,381.983,512,320.421,512,256C512,187.62,485.371,123.332,437.019,74.981z"></path><path d="M282.819,263.604h63.415v-15.208h-63.415c-1.619-5.701-5.007-10.662-9.536-14.25l35.913-86.701l-14.049-5.82
				l-35.908,86.688c-1.064-0.124-2.142-0.194-3.238-0.194c-15.374,0-27.881,12.508-27.881,27.881s12.507,27.881,27.881,27.881
				C268.737,283.881,279.499,275.292,282.819,263.604z M243.327,256c0-6.989,5.685-12.673,12.673-12.673
				c6.989,0,12.673,5.685,12.673,12.673c0,6.989-5.685,12.673-12.673,12.673C249.011,268.673,243.327,262.989,243.327,256z"></path><path d="M451.168,256c0-107.616-87.552-195.168-195.168-195.168S60.832,148.384,60.832,256S148.384,451.168,256,451.168
				S451.168,363.616,451.168,256z M76.04,256c0-99.231,80.73-179.96,179.96-179.96S435.96,156.769,435.96,256
				S355.231,435.96,256,435.96S76.04,355.231,76.04,256z"></path><rect x="248.396" y="366.511" width="15.208" height="56.776"></rect><path d="M61.672,336.501l-14.05,5.82c23.059,55.668,66.416,99.026,122.085,122.085l5.82-14.049
				C123.61,428.851,83.176,388.416,61.672,336.501z"></path><path d="M450.397,175.485l14.049-5.82c-23.059-55.669-66.417-99.027-122.085-122.084l-5.82,14.049
				C388.457,83.135,428.891,123.569,450.397,175.485z"></path><path d="M256,45.624V30.416c-60.256,0-116.904,23.465-159.512,66.071C53.881,139.095,30.416,195.744,30.416,256h15.208
				c0-56.194,21.883-109.024,61.617-148.759C146.976,67.507,199.807,45.624,256,45.624z"></path><path d="M481.584,256h-15.208c0,56.193-21.883,109.024-61.617,148.759c-39.734,39.735-92.566,61.617-148.759,61.617v15.208
				c60.256,0,116.904-23.465,159.513-66.071C458.119,372.904,481.584,316.256,481.584,256z"></path><rect x="248.396" y="88.713" width="15.208" height="56.776"></rect><rect x="183.845" y="106.019" transform="matrix(0.3827 0.9239 -0.9239 0.3827 226.5988 -111.8865)" width="26.361" height="15.208"></rect><rect x="301.78" y="390.75" transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 67.4626 841.7849)" width="26.361" height="15.207"></rect><rect x="100.445" y="189.43" transform="matrix(0.9239 0.3827 -0.3827 0.9239 84.0528 -28.4842)" width="26.36" height="15.207"></rect><rect x="385.201" y="307.351" transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 645.9084 758.3894)" width="26.361" height="15.207"></rect><rect x="106.028" y="301.792" transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 -133.8779 540.4901)" width="15.207" height="26.36"></rect><rect x="390.765" y="183.851" transform="matrix(0.3827 0.9239 -0.9239 0.3827 427.9489 -246.4146)" width="15.207" height="26.361"></rect><rect x="189.433" y="385.188" transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 226.6226 841.8156)" width="15.208" height="26.361"></rect><rect x="307.381" y="100.448" transform="matrix(0.9239 0.3827 -0.3827 0.9239 67.4614 -111.8911)" width="15.207" height="26.361"></rect><rect x="129.389" y="150.181" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 157.7713 380.9216)" width="56.776" height="15.208"></rect><rect x="325.825" y="346.62" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 354.2049 855.1643)" width="56.776" height="15.208"></rect><rect x="88.713" y="248.396" width="56.776" height="15.208"></rect><rect x="366.511" y="248.396" width="56.776" height="15.208"></rect><rect x="150.157" y="325.829" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 18.8444 716.2403)" width="15.208" height="56.776"></rect><rect x="346.602" y="129.395" transform="matrix(0.7071 0.7071 -0.7071 0.7071 215.3148 -204.2485)" width="15.208" height="56.776"></rect></g></g></g></svg></div><div class="card-body"><h3 class="font-bold my-5 text-gradient">استراتيجيات النمو</h3><p> : مساعدة الشركات على وضع خطط نمو فعالة بناءً على تحليل بيانات السوق والاتجاهات </p></div></div><div class="item-card rounded-md bg-white p-10 text-center justify-items-center"><div class="card-img"><svg width="215" fill="url(#Gradient1)" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><defs><linearGradient id="Gradient1"><stop class="stop1" offset="0%"></stop><stop class="stop2" offset="50%"></stop><stop class="stop3" offset="100%"></stop></linearGradient></defs><g><g><g><path d="M437.019,74.981C388.668,26.629,324.38,0,256,0S123.332,26.629,74.981,74.981C26.629,123.332,0,187.62,0,256
				s26.629,132.668,74.981,181.019C123.332,485.371,187.62,512,256,512c64.518,0,126.15-24.077,173.541-67.796l-10.312-11.178
				c-44.574,41.12-102.544,63.766-163.229,63.766c-64.317,0-124.786-25.046-170.266-70.527
				C40.254,380.786,15.208,320.317,15.208,256S40.254,131.214,85.734,85.735C131.214,40.254,191.683,15.208,256,15.208
				s124.786,25.046,170.266,70.527c45.48,45.479,70.526,105.948,70.526,170.265c0,60.594-22.587,118.498-63.599,163.045
				l11.188,10.301C487.986,381.983,512,320.421,512,256C512,187.62,485.371,123.332,437.019,74.981z"></path><path d="M282.819,263.604h63.415v-15.208h-63.415c-1.619-5.701-5.007-10.662-9.536-14.25l35.913-86.701l-14.049-5.82
				l-35.908,86.688c-1.064-0.124-2.142-0.194-3.238-0.194c-15.374,0-27.881,12.508-27.881,27.881s12.507,27.881,27.881,27.881
				C268.737,283.881,279.499,275.292,282.819,263.604z M243.327,256c0-6.989,5.685-12.673,12.673-12.673
				c6.989,0,12.673,5.685,12.673,12.673c0,6.989-5.685,12.673-12.673,12.673C249.011,268.673,243.327,262.989,243.327,256z"></path><path d="M451.168,256c0-107.616-87.552-195.168-195.168-195.168S60.832,148.384,60.832,256S148.384,451.168,256,451.168
				S451.168,363.616,451.168,256z M76.04,256c0-99.231,80.73-179.96,179.96-179.96S435.96,156.769,435.96,256
				S355.231,435.96,256,435.96S76.04,355.231,76.04,256z"></path><rect x="248.396" y="366.511" width="15.208" height="56.776"></rect><path d="M61.672,336.501l-14.05,5.82c23.059,55.668,66.416,99.026,122.085,122.085l5.82-14.049
				C123.61,428.851,83.176,388.416,61.672,336.501z"></path><path d="M450.397,175.485l14.049-5.82c-23.059-55.669-66.417-99.027-122.085-122.084l-5.82,14.049
				C388.457,83.135,428.891,123.569,450.397,175.485z"></path><path d="M256,45.624V30.416c-60.256,0-116.904,23.465-159.512,66.071C53.881,139.095,30.416,195.744,30.416,256h15.208
				c0-56.194,21.883-109.024,61.617-148.759C146.976,67.507,199.807,45.624,256,45.624z"></path><path d="M481.584,256h-15.208c0,56.193-21.883,109.024-61.617,148.759c-39.734,39.735-92.566,61.617-148.759,61.617v15.208
				c60.256,0,116.904-23.465,159.513-66.071C458.119,372.904,481.584,316.256,481.584,256z"></path><rect x="248.396" y="88.713" width="15.208" height="56.776"></rect><rect x="183.845" y="106.019" transform="matrix(0.3827 0.9239 -0.9239 0.3827 226.5988 -111.8865)" width="26.361" height="15.208"></rect><rect x="301.78" y="390.75" transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 67.4626 841.7849)" width="26.361" height="15.207"></rect><rect x="100.445" y="189.43" transform="matrix(0.9239 0.3827 -0.3827 0.9239 84.0528 -28.4842)" width="26.36" height="15.207"></rect><rect x="385.201" y="307.351" transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 645.9084 758.3894)" width="26.361" height="15.207"></rect><rect x="106.028" y="301.792" transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 -133.8779 540.4901)" width="15.207" height="26.36"></rect><rect x="390.765" y="183.851" transform="matrix(0.3827 0.9239 -0.9239 0.3827 427.9489 -246.4146)" width="15.207" height="26.361"></rect><rect x="189.433" y="385.188" transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 226.6226 841.8156)" width="15.208" height="26.361"></rect><rect x="307.381" y="100.448" transform="matrix(0.9239 0.3827 -0.3827 0.9239 67.4614 -111.8911)" width="15.207" height="26.361"></rect><rect x="129.389" y="150.181" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 157.7713 380.9216)" width="56.776" height="15.208"></rect><rect x="325.825" y="346.62" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 354.2049 855.1643)" width="56.776" height="15.208"></rect><rect x="88.713" y="248.396" width="56.776" height="15.208"></rect><rect x="366.511" y="248.396" width="56.776" height="15.208"></rect><rect x="150.157" y="325.829" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 18.8444 716.2403)" width="15.208" height="56.776"></rect><rect x="346.602" y="129.395" transform="matrix(0.7071 0.7071 -0.7071 0.7071 215.3148 -204.2485)" width="15.208" height="56.776"></rect></g></g></g></svg></div><div class="card-body"><h3 class="font-bold my-5 text-gradient">استراتيجيات النمو</h3><p> : مساعدة الشركات على وضع خطط نمو فعالة بناءً على تحليل بيانات السوق والاتجاهات </p></div></div></div><div class="text-center"><button class="btn-white lg:w-1/5 md:w-full">تواصل معنا</button></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Working.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pricing-plan py-10" }, _attrs))} data-v-1aaaa1f3><div class="container p-10" data-v-1aaaa1f3><h1 class="text-gradient font-bold text-center text-4xl" data-v-1aaaa1f3>خطط الأسعار</h1><div class="cards grid lg:grid-cols-3 gap-10 py-5 my-10" data-v-1aaaa1f3><div class="card-price active text-white" data-v-1aaaa1f3><div class="card-title" data-v-1aaaa1f3><h3 class="font-bold text-center my-5 text-2xl" data-v-1aaaa1f3>الباقات</h3><ul data-v-1aaaa1f3><li data-v-1aaaa1f3>اختر الخطة المثالية لمشروعك</li><li data-v-1aaaa1f3>احصل على عرض مخصص يناسب احتياجاتك</li><li data-v-1aaaa1f3>اختر الخطة المثالية لمشروعك</li><li data-v-1aaaa1f3>احصل على عرض مخصص يناسب احتياجاتك</li></ul></div><div class="text-center mt-5" data-v-1aaaa1f3><button class="btn-white w-full" data-v-1aaaa1f3>تواصل معنا</button></div></div><div class="card-price card-item" data-v-1aaaa1f3><div class="card-title" data-v-1aaaa1f3><h3 class="font-bold text-center my-5 text-2xl text-gradient" data-v-1aaaa1f3> الباقات </h3><ul data-v-1aaaa1f3><li data-v-1aaaa1f3>اختر الخطة المثالية لمشروعك</li><li data-v-1aaaa1f3>احصل على عرض مخصص يناسب احتياجاتك</li><li data-v-1aaaa1f3>اختر الخطة المثالية لمشروعك</li><li data-v-1aaaa1f3>احصل على عرض مخصص يناسب احتياجاتك</li></ul></div><div class="text-center mt-5" data-v-1aaaa1f3><button class="btn w-full" data-v-1aaaa1f3>تواصل معنا</button></div></div><div class="card-price card-item" data-v-1aaaa1f3><div class="card-title" data-v-1aaaa1f3><h3 class="font-bold text-center my-5 text-2xl text-gradient" data-v-1aaaa1f3> الباقات </h3><ul data-v-1aaaa1f3><li data-v-1aaaa1f3>اختر الخطة المثالية لمشروعك</li><li data-v-1aaaa1f3>احصل على عرض مخصص يناسب احتياجاتك</li><li data-v-1aaaa1f3>اختر الخطة المثالية لمشروعك</li><li data-v-1aaaa1f3>احصل على عرض مخصص يناسب احتياجاتك</li></ul></div><div class="text-center mt-5" data-v-1aaaa1f3><button class="btn w-full" data-v-1aaaa1f3>تواصل معنا</button></div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingPlan.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-1aaaa1f3"]]);
const _imports_0$2 = "" + __buildAssetsURL("user.DzIq47So.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "comments p-10" }, _attrs))}><div class="container p-10"><h1 class="text-gradient font-bold text-center text-4xl"> تعليقات العملاء </h1><div class="items grid lg:grid-cols-2 p-5"><div class="item active text-white p-10"><div class="head-item"><div class="user lg:flex gap-4 items-center text-center lg:text-right"><div class="rounded-full imgBox"><img${ssrRenderAttr("src", _imports_0$2)} alt="" width="120"></div><div class="boxTitle"><h2 class="font-medium">محمد البوليني</h2><p>مصمم تجربة مستخدم</p></div></div></div><div class="body-item"><p class="my-5"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة </p></div><div class="rating flex mt-5">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
  _push(`</div></div><div class="item p-10 bg-white"><div class="head-item"><div class="user lg:flex gap-4 items-center text-center lg:text-right"><div class="rounded-full imgBox"><img${ssrRenderAttr("src", _imports_0$2)} alt="user" width="120"></div><div class="boxTitle text-gradient"><h2 class="font-medium">محمد البوليني</h2><p>مصمم تجربة مستخدم</p></div></div></div><div class="body-item"><p class="my-5"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة </p></div><div class="rating flex w-4/12 mt-5">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "star"] }, null, _parent));
  _push(`</div></div></div><div class="bullets mt-10 flex justify-center"><span class="second-circle"></span><span class="third-circle"></span><span class="active-circle"></span></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comments.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-us p-10" }, _attrs))}><div class="bg-contact-us p-10 container text-center mt-10 rounded-lg"><h1 class="text-gradient text-4xl font-bold"> &quot;تواصل معنا اليوم لوضع استراتيجية نمو مخصصة&quot; </h1><h2 class="font-medium text-gradient mt-7 text-lg"> تواصل معنا لتحصل على استشارة مجانية </h2><div class="text-center mt-5"><button class="btn">تواصل معنا</button></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$1 = "" + __buildAssetsURL("image.Cq1nBrzf.jpg");
const _sfc_main$2 = {
  data() {
    return {
      phoneNumber: "",
      selectedCountry: "+2",
      // Default country code
      countries: [
        {
          name: "Egypt",
          code: "+2",
          flag: "https://flagcdn.com/eg.svg"
        },
        {
          name: "United States",
          code: "+1",
          flag: "https://flagcdn.com/us.svg"
        },
        {
          name: "United Kingdom",
          code: "+44",
          flag: "https://flagcdn.com/gb.svg"
        },
        { name: "India", code: "+91", flag: "https://flagcdn.com/in.svg" },
        { name: "Australia", code: "+61", flag: "https://flagcdn.com/au.svg" },
        { name: "Japan", code: "+81", flag: "https://flagcdn.com/jp.svg" },
        { name: "Germany", code: "+49", flag: "https://flagcdn.com/de.svg" },
        { name: "China", code: "+86", flag: "https://flagcdn.com/cn.svg" },
        { name: "France", code: "+33", flag: "https://flagcdn.com/fr.svg" },
        { name: "Italy", code: "+39", flag: "https://flagcdn.com/it.svg" },
        { name: "Russia", code: "+7", flag: "https://flagcdn.com/ru.svg" },
        { name: "Spain", code: "+34", flag: "https://flagcdn.com/es.svg" },
        { name: "Brazil", code: "+55", flag: "https://flagcdn.com/br.svg" },
        { name: "Canada", code: "+1", flag: "https://flagcdn.com/ca.svg" },
        { name: "Mexico", code: "+52", flag: "https://flagcdn.com/mx.svg" }
      ]
    };
  },
  computed: {
    selectedCountryFlag() {
      const country = this.countries.find(
        (c) => c.code === this.selectedCountry
      );
      return country ? country.flag : null;
    }
  },
  methods: {
    handleSubmit() {
      alert(
        `Country Code: ${this.selectedCountry}, Phone: ${this.phoneNumber}`
      );
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-us p-10" }, _attrs))}><div class="container"><h1 class="text-gradient font-bold text-3xl">تواصل معنا</h1><div class="grid lg:grid-cols-2 justify-between"><div class="form-container pt-10"><form action="#" method="post" class="space-y-4"><div class="group grid lg:grid-cols-2 gap-5"><div><label for="name" class="block text-sm font-medium text-gray-600">الأسم</label><input autocomplete="name" type="text" id="name" name="name" placeholder="الأسم" required class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"></div><div><label for="email" class="block text-sm font-medium text-gray-600">البريد الالكتروني</label><input autocomplete="email" type="email" id="email" name="email" placeholder="البريد الالكتروني" required class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"></div></div><div class="group grid lg:grid-cols-2 gap-5"><div><label for="phone" class="block text-sm font-medium text-gray-600 mb-1">رقم الهاتف</label><div class="input relative"><input autocomplete="tel" id="phone"${ssrRenderAttr("value", $data.phoneNumber)} type="tel" placeholder="+1(XXX) XXX-XXXX" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"><div class="flex items-center absolute top-2 right-3">`);
  if ($options.selectedCountryFlag) {
    _push(`<img${ssrRenderAttr("src", $options.selectedCountryFlag)} alt="Country Flag" class="w-8 h-5 rounded">`);
  } else {
    _push(`<!---->`);
  }
  _push(`<select autocomplete="postal-code" id="country" class="rounded-md focus:outline-none w-38 cursor-pointer"><!--[-->`);
  ssrRenderList($data.countries, (country) => {
    _push(`<option${ssrRenderAttr("value", country.code)}${ssrIncludeBooleanAttr(Array.isArray($data.selectedCountry) ? ssrLooseContain($data.selectedCountry, country.code) : ssrLooseEqual($data.selectedCountry, country.code)) ? " selected" : ""}> ( ${ssrInterpolate(country.code)}) </option>`);
  });
  _push(`<!--]--></select></div></div></div><div><label for="service" class="block text-sm font-medium text-gray-600 mb-1">نوع الخدمة</label><select id="service" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"><option>نوع الخدمة</option><option>1 نوع الخدمة</option><option>2 نوع الخدمة</option><option>3 نوع الخدمة</option><option>4 نوع الخدمة</option></select></div></div><div><label for="message" class="block text-sm font-medium text-gray-600">ملاحظات</label><textarea style="${ssrRenderStyle({ "resize": "none" })}" id="message" name="message" placeholder="ملاحظات" rows="4" required class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea></div><div class="lg:text-right text-center"><button type="submit" class="lg:w-1/4 btn">ارسال</button></div></form></div><div class="image-box mx-auto"><img${ssrRenderAttr("src", _imports_0$1)} alt="" width="465" height="424"></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactUs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + __buildAssetsURL("ask.qaH-NpoV.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ask p-10" }, _attrs))} data-v-a672e4ca><div class="container p-10" data-v-a672e4ca><div class="body grid lg:grid-cols-2" data-v-a672e4ca><div class="mt-10" data-v-a672e4ca><h1 class="text-gradient font-bold text-3xl my-5" data-v-a672e4ca>الأسئلة الشائعة</h1><div class="most-questions Flipped" data-v-a672e4ca><div class="relative mb-5 item text-right" data-v-a672e4ca><button class="inline-flex justify-center w-full px-4 py-3 text-base font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600" data-v-a672e4ca><span class="ml-auto text-sm md:text-medium lg:text-lg" data-v-a672e4ca>ما هي مدة استشارات الأعمال النموذجية ؟</span></button><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute top-3.5 text-white left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a672e4ca><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-a672e4ca></path></svg></div><div class="relative mb-5 item text-right" data-v-a672e4ca><button class="inline-flex justify-center w-full px-4 py-3 text-base font-medium rounded-md" data-v-a672e4ca><span class="ml-auto text-sm md:text-medium lg:text-lg" data-v-a672e4ca>ما هي مدة استشارات الأعمال النموذجية ؟</span></button><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute top-3.5 left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a672e4ca><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-a672e4ca></path></svg></div><div class="relative mb-5 item text-right" data-v-a672e4ca><button class="inline-flex justify-center w-full px-4 py-3 text-base font-medium rounded-md" data-v-a672e4ca><span class="ml-auto text-sm md:text-medium lg:text-lg" data-v-a672e4ca>ما هي مدة استشارات الأعمال النموذجية ؟</span></button><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute top-3.5 left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a672e4ca><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-a672e4ca></path></svg></div><div class="relative mb-5 item text-right" data-v-a672e4ca><button class="inline-flex justify-center w-full px-4 py-3 text-base font-medium rounded-md" data-v-a672e4ca><span class="ml-auto text-sm md:text-medium lg:text-lg" data-v-a672e4ca>ما هي مدة استشارات الأعمال النموذجية ؟</span></button><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute top-3.5 left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a672e4ca><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-a672e4ca></path></svg></div><div class="relative mb-5 item text-right" data-v-a672e4ca><button class="inline-flex justify-center w-full px-4 py-3 text-base font-medium rounded-md" data-v-a672e4ca><span class="ml-auto text-sm md:text-medium lg:text-lg" data-v-a672e4ca>ما هي مدة استشارات الأعمال النموذجية ؟</span></button><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute top-3.5 left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a672e4ca><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-a672e4ca></path></svg></div><div class="relative mb-5 item text-right" data-v-a672e4ca><button class="inline-flex justify-center w-full px-4 py-3 text-base font-medium rounded-md" data-v-a672e4ca><span class="ml-auto text-sm md:text-medium lg:text-lg" data-v-a672e4ca>ما هي مدة استشارات الأعمال النموذجية ؟</span></button><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute top-3.5 left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a672e4ca><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-a672e4ca></path></svg></div><div class="relative mb-5 item text-right" data-v-a672e4ca><button class="inline-flex justify-center w-full px-4 py-3 text-base font-medium rounded-md" data-v-a672e4ca><span class="ml-auto text-sm md:text-medium lg:text-lg" data-v-a672e4ca>ما هي مدة استشارات الأعمال النموذجية ؟</span></button><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute top-3.5 left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a672e4ca><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-a672e4ca></path></svg></div><div class="relative mb-5 item text-right" data-v-a672e4ca><button class="inline-flex justify-center w-full px-4 py-3 text-base font-medium rounded-md" data-v-a672e4ca><span class="ml-auto text-sm md:text-medium lg:text-lg" data-v-a672e4ca>ما هي مدة استشارات الأعمال النموذجية ؟</span></button><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute top-3.5 left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a672e4ca><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-a672e4ca></path></svg></div><div class="relative mb-5 item text-right" data-v-a672e4ca><button class="inline-flex justify-center w-full px-4 py-3 text-base font-medium rounded-md" data-v-a672e4ca><span class="ml-auto text-sm md:text-medium lg:text-lg" data-v-a672e4ca>ما هي مدة استشارات الأعمال النموذجية ؟</span></button><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute top-3.5 left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a672e4ca><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-a672e4ca></path></svg></div></div></div><div class="img-box" data-v-a672e4ca><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-a672e4ca></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ask.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a672e4ca"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionHero = __nuxt_component_0;
  const _component_MarketingServices = __nuxt_component_1;
  const _component_Business = __nuxt_component_2;
  const _component_Working = __nuxt_component_3;
  const _component_PricingPlan = __nuxt_component_4;
  const _component_comments = __nuxt_component_5;
  const _component_Banner = __nuxt_component_6;
  const _component_ContactUs = __nuxt_component_7;
  const _component_Ask = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SectionHero, null, null, _parent));
  _push(ssrRenderComponent(_component_MarketingServices, null, null, _parent));
  _push(ssrRenderComponent(_component_Business, null, null, _parent));
  _push(ssrRenderComponent(_component_Working, null, null, _parent));
  _push(ssrRenderComponent(_component_PricingPlan, null, null, _parent));
  _push(ssrRenderComponent(_component_comments, null, null, _parent));
  _push(ssrRenderComponent(_component_Banner, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactUs, null, null, _parent));
  _push(ssrRenderComponent(_component_Ask, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-D6V8JtGh.js.map