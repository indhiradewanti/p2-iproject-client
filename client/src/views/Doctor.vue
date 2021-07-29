<template>
      <!-- ======= Doctors Section ======= -->
    <section id="doctors" class="doctors">
        <div class="container">
            <br><br><br><br><br>
            <div class="section-title mt-5">
            <h2>Doctors</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div class="row">
                <DoctorsCard
                    v-for="doctor in doctors"
                    :key="doctor.id"
                    :doctor='doctor'
                />
            </div>
        </div>
    </section><!-- End Doctors Section -->
</template>

<script>
import DoctorsCard from '@/components/DoctorsCard.vue'
import { mapState, mapActions } from "vuex"

export default {
    name : 'Doctor',
    components : {
        DoctorsCard
    },
    computed : {
        ...mapState(['doctors'])
    },
    methods : {
        ...mapActions(['getDoctors'])
    },
    created() {
        this.getDoctors()
    }
}
</script>

<style>

</style>