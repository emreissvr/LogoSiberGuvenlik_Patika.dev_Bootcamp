<template>
    <!-- Topbar -->
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        
        <!-- Sidebar Toggle (Topbar) -->
        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
        </button>

        <TopbarSearch/>

        <TopbarNavbar/> 

    </nav>

</template>


<script>

    import TopbarSearch from './TopbarSearch.vue';
    import TopbarNavbar from './TopbarNavbar.vue';



    export default {
        name:"NavbarVue",
        components:{
            TopbarSearch,
            TopbarNavbar           
        }
    }
</script>

<style >

</style>