<template>
    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
        <!-- Nav Item - Search Dropdown (Visible Only XS) -->
        <NavItemSearchDropdown/>

        <!-- Nav Item - Alerts -->
        <NavItemAlerts/>

        <!-- Nav Item - Messages -->
        <NavItemMessages/>

        <div class="topbar-divider d-none d-sm-block"></div>

        <!-- Nav Item - User Information -->
        <NavItemUserInformation/>


        
    </ul>
</template>


<script>

    import NavItemSearchDropdown from './NavItemSearchDropdown.vue';
    import NavItemAlerts from './NavItemAlerts.vue';
    import NavItemMessages from './NavItemMessages.vue';
    import NavItemUserInformation from './NavItemUserInformation.vue';

    export default {
        name:"TopbarNavbar",
        components:{
            NavItemSearchDropdown,
            NavItemAlerts,
            NavItemMessages,
            NavItemUserInformation

        }
    }
</script>

<style >

</style>