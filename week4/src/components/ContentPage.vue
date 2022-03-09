<template>
    <!-- Begin Page Content -->

    <div>
        <h1>Week 4</h1>
    </div>


        <!-- <div class="col-md-12 mb-3">
            <button type="button" class="btn btn-primary ml-3 " v-on:click="showUsersData()">
                Get users
            </button>
        </div>

        <div class="row">
            <div v-if="isUsersEnabled = true">
                <div v-for="user in usersData" :key="user.id">
                    <div class="offset-4 col-12 col-md-6 mb-2">
                        <div class="card" style="width: 20rem">
                            <div class="card-body">
                                <h5 class="card-title"> User Name: {{user.username}}</h5>
                                <p class="card-text"> Gmail: {{user.email}}</p>
                                <span class="badge badge warning">Website: {{user.website}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         -->
     

</template>


<script>
    export default {
        name:"ContentPage",
        // data: function(){
        //     return {
        //         usersData:[],
        //         isUsersEnabled: false,
        //     }
        // },
        // methods:{
        //     showUsersData(){

        //         this.isUsersEnabled = true;

        //         fetch("http://localhost:5000/users")
        //         .then((response) => {
        //             response.json();
        //         }).then( (responseJson) => (this.usersData = responseJson) );
               
        //     }
        // }
    }
</script>

<style >

</style>