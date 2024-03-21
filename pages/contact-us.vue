<template>
  <div>
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex justify-center contact-us">
      <div class="text-center mb-10">
        <h1 class="text-primary text-3xl lg:text-5xl font-serif mb-7 mt-4">Contact Us</h1>
        <p>
          Email us and our experts will get back to you
        </p>
      </div>
    </div>
    <div class="bg-grey-100 py-10">
      <div class=" max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto contact-us">
        <div class="grid lg:grid-cols-2 gap-4">
          <div class="pr-10 text-2xl">
            <h2>We’d love to hear from you!</h2>
            <p>If you would like us to call you, please let us know. To contact a specific office, please see our
              locations.</p>
            <h2>Current clients</h2>
            <p>For current clients, please connect directly with your Account Manager. You can also contact customer
              service or technical support.</p>
            <h2>Information and enquiries</h2>
            <p>For general enquiries, information on our offerings in Demand, Data, Intelligence, Tech, Media, Events
              and MaaS.</p>
            <h2>World head office</h2>
            <p>4275 Executive Sq<br>
              La Jolla, CA 92037<br>
              United States</p>
          </div>
          <div class="p-10 bg-white shadow-md">
            <form
              action="https://forms.zohopublic.in/machintelsystemspvtltd/form/PartnerExplorer/formperma/VIy1Vh04wirJ5DC7U-fxWiYqffHAGiV_D_oJK8H-uTQ/htmlRecords/submit"
              name="form" id="form" method="POST" accept-charset="UTF-8" enctype="multipart/form-data">
              <div class="grid gap-4 lg:gap-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <input type="text" placeholder="First Name" required name="Name_First" fieldType="7"
                      class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font" />
                  </div>
                  <div>
                    <input type="text" placeholder="Last Name" required name="Name_Last" fieldType="7"
                      class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font" />
                  </div>
                </div>
                <div>
                  <input type="text" placeholder="Email" required name="Email" fieldType="9"
                    class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font" />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <input type="text" placeholder="Company Name" name="SingleLine" fieldType="1"
                    class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font" />

                  <input type="text" placeholder="Phone" name="PhoneNumber_countrycodes" phoneFormat="1"
                    isCountryCodeEnabled="false"
                    class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font" />
                </div>

                <div>
                  <textarea placeholder="Message(optional)" maxlength="2000" rows="4"
                    class="py-3 px-4 block h-24 w-full border border-colors-primary-900 rounded-md text-sm text-colors-font">
                 </textarea>
                </div>
                <div class="mt-3 flex">
                  <div>
                    <label for="remember-me" class="text-xs">By submitting this form I have read and acknowledged the
                      <a class="text-blue-600 decoration-2 underline font-medium"
                        href="https://machintel.com/privacy-policy" target="_blank">Privacy policy</a></label>
                  </div>
                </div>



              </div>
          <div class="mt-6 grid">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ContactUS",
  data(){
    return{
      First_Name:"",
      Last_Name:"",
      Email: ""

    }
  }
};
</script>


<style>
.contact-us {
  h2 {
    @apply text-accent text-xl;
  }

  p {
    @apply text-base;
  }

  #fullname {
    display: none;
  }
}
</style>