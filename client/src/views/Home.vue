<template>
  <div class="home">
    <Hero/>

    <!-- ======= Why Us Section ======= -->
    <section id="why-us" class="why-us">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="content">
              <h3>Why Choose Yo Doc Heath?</h3>
              <p>
                Yo Doc Health is a Medical Second Opinion platform where users can get medical advice from doctors. We stringently verify our online doctors to ensure they are fully licensed so that the care we provide will always be of the highest quality. Team-Yo Doc Health consists of eminent doctors, researchers and programmers who work round the clock to innovate, create and implement the best web technologies for the use of doctors, users and hospitals.
              </p>
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="fas fa-comments"></i>
                    <h4>Chats</h4>
                    <p>Our Live Chat feature allows you to “chat” with our qualified and fully registered Doctors, Pharmacists and Nutritionists anytime, anywhere</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="fas fa-stethoscope"></i>
                    <h4>Board Certified Speacialis</h4>
                    <p>Advice from best doctors and top medical experts</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="fas fa-wallet"></i>
                    <h4>Concierge Services</h4>
                    <p>Top 10 Telemedicine companies in the world. Yo Doc health platform has been recognized by various organizations as one of the top telemedicine application for online medical help.</p>
                  </div>
                </div>
              </div>
            </div><!-- End .content-->
          </div>
        </div>
      </div>
    </section><!-- End Why Us Section -->
        <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Services</h2> 
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <router-link to="/chat" href=#>
            <div class="icon-box">
              <div class="icon"><i class="fas fa-notes-medical"></i></div>
              <h4>Chat with doctors</h4>
              <p>Start chatting with our healthcare professionals and they will provide you with advice to your medical condition .</p>
            </div>
            </router-link>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <router-link to="/doctor" href=#>
            <div class="icon-box">
              <div class="icon"><i class="fas fa-hospital-user"></i></div>
              <h4>Doctors</h4>
              <p>More than 100++ top medical experts and best doctor from any hospitals in Indonesia</p>
            </div>
          </router-link>
          </div>
        </div>

      </div>
    </section><!-- End Services Section -->
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Hero
  }
}
</script>
