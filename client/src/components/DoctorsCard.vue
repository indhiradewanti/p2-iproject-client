<template>
    <div class="col-lg-6">
        <div class="member d-flex align-items-start">
            <div class="pic"><img :src="doctor.imgUrl" class="img-fluid" alt=""></div>
            <div class="member-info">
            <h4>{{doctor.name}}</h4>
            <span>{{doctor.Specialist.name}}</span><br>
            <h5 >{{doctor.Hospital.name}}</h5>
            <h6>{{doctor.Hospital.location}}</h6>
            <p>Has been working for {{doctor.year}} years</p>

            <a @click.prevent="" href=# class="appointment-btn scrollto mt-3"><span class="d-none d-md-inline">{{doctor.price}}</span><i class="bx bx-chevron-right"></i></a>

            </div>
            
        </div>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name : 'DoctorsCard',
    props: ['doctor']
}
</script>

<style>

</style>