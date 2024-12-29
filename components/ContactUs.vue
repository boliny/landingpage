<template>
  <div class="contact-us p-10">
    <div class="container">
      <h1 class="text-gradient font-bold text-3xl">تواصل معنا</h1>
      <div class="grid lg:grid-cols-2 justify-between">
        <div class="form-container pt-10">
          <form action="#" method="post" class="space-y-4">
            <div class="group grid lg:grid-cols-2 gap-5">
              <!-- Name Field -->
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-600"
                  >الأسم</label
                >
                <input
                  autocomplete="name"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="الأسم"
                  required
                  class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <!-- Email Field -->
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-600"
                  >البريد الالكتروني</label
                >
                <input
                  autocomplete="email"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="البريد الالكتروني"
                  required
                  class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div class="group grid lg:grid-cols-2 gap-5">
              <!-- Phone Number -->
              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-600 mb-1"
                  >رقم الهاتف</label
                >
                <div class="input relative">
                  <input
                    autocomplete="tel"
                    id="phone"
                    v-model="phoneNumber"
                    type="tel"
                    placeholder="+1(XXX) XXX-XXXX"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <div class="flex items-center absolute top-2 right-3">
                    <img
                      v-if="selectedCountryFlag"
                      :src="selectedCountryFlag"
                      alt="Country Flag"
                      class="w-8 h-5 rounded"
                    />
                    <select
                      autocomplete="postal-code"
                      id="country"
                      v-model="selectedCountry"
                      class="rounded-md focus:outline-none w-38 cursor-pointer"
                    >
                      <option
                        v-for="country in countries"
                        :key="country.code"
                        :value="country.code"
                      >
                        ( {{ country.code }})
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label
                  for="service"
                  class="block text-sm font-medium text-gray-600 mb-1"
                  >نوع الخدمة</label
                >
                <select
                  id="service"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
                >
                  <option>نوع الخدمة</option>
                  <option>1 نوع الخدمة</option>
                  <option>2 نوع الخدمة</option>
                  <option>3 نوع الخدمة</option>
                  <option>4 نوع الخدمة</option>
                </select>
              </div>
            </div>
            <!-- Message Field -->
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-600"
                >ملاحظات</label
              >
              <textarea
                style="resize: none"
                id="message"
                name="message"
                placeholder="ملاحظات"
                rows="4"
                required
                class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <!-- Country Selector -->

            <!-- Submit Button -->
            <div class="lg:text-right text-center">
              <button type="submit" class="lg:w-1/4 btn">ارسال</button>
            </div>
          </form>
        </div>
        <div class="image-box mx-auto">
          <img
            src="/images/contactUs/image.jpg"
            alt=""
            width="465"
            height="424"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: "",
      selectedCountry: "+2", // Default country code
      countries: [
        {
          name: "Egypt",
          code: "+2",
          flag: "https://flagcdn.com/eg.svg",
        },
        {
          name: "United States",
          code: "+1",
          flag: "https://flagcdn.com/us.svg",
        },
        {
          name: "United Kingdom",
          code: "+44",
          flag: "https://flagcdn.com/gb.svg",
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
        { name: "Mexico", code: "+52", flag: "https://flagcdn.com/mx.svg" },
      ],
    };
  },
  computed: {
    selectedCountryFlag() {
      const country = this.countries.find(
        (c) => c.code === this.selectedCountry
      );
      return country ? country.flag : null;
    },
  },
  methods: {
    handleSubmit() {
      alert(
        `Country Code: ${this.selectedCountry}, Phone: ${this.phoneNumber}`
      );
    },
  },
};
</script>
