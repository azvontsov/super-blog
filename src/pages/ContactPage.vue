<template lang="">
    <section class="py-7">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8 mx-auto text-center">
             <h6><a
              class="nav-link ps-2 font-weight-boldercursor-pointer "
            >
            <router-link to="/">HOME PAGE</router-link>
            </a></h6>
              <div class="ms-3 mb-md-5">
                <h3>Contact me</h3>
                <p>
                  For further questions, please email azvontsov@gmail.com
                  or contact using our contact form.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="card card-plain">
                <form id="contact-form" method="post" autocomplete="off">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <label>Full Name</label>
                        <div class="input-group mb-4">
                          <input class="form-control" placeholder="Full Name" aria-label="Full Name" type="text">
                        </div>
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <label>Email</label>
                        <div class="input-group">
                          <input type="email" class="form-control" placeholder="hello@creative-tim.com">
                        </div>
                      </div>
                    </div>
                    <div class="form-group mb-4 mt-md-0 mt-4">
                      <label>What can we help you?</label>
                      <textarea name="message" class="form-control" id="message" rows="6" placeholder="Describe your problem in at least 250 characters"></textarea>
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <button type="submit" class="btn bg-gradient-primary mt-4">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>