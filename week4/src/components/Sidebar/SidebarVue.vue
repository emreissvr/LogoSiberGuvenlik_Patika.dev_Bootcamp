<template>
    <div>
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        
            <!-- Sidebar - Brand -->
            <BrandVue/>
            
            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            
            <!-- Nav Item - Dashboard -->
            <NavItemDashboard/>
            
            <!-- Divider -->
            <hr class="sidebar-divider">
            
            <!-- Heading -->
            <HeadingVue1/>

            <!-- Nav Item - Pages Collapse Menu -->
            <PageCollapseMenu/>

            <!-- Nav Item - Pages Collapse Menu -->
            <UtilitiesCollapseMenu/>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <HeadingVue2/>
            
            <!-- Nav Item - Pages Collapse Menu -->
            <PageCollapseMenu2/>

            <!-- Nav Item - Charts -->
            <ChartsVue/>

            <!-- Nav Item - Tables -->
            <TablesVue/>

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

            <!-- Sidebar Toggler (Sidebar) -->
            <TogglerVue/>

        </ul>
    </div>
</template>


<script>
    import BrandVue from './BrandVue.vue';
    import NavItemDashboard from './NavItemDashboard.vue';
    import HeadingVue1 from './HeadingVue1.vue';
    import PageCollapseMenu from './PageCollapseMenu.vue';
    import UtilitiesCollapseMenu from './UtilitiesCollapseMenu.vue';
    import HeadingVue2 from './HeadingVue2.vue';
    import PageCollapseMenu2 from './PageCollapseMenu2.vue';
    import ChartsVue from './ChartsVue.vue';
    import TablesVue from './TablesVue.vue';
    import TogglerVue from './TogglerVue.vue';



    export default {
        name:"SidebarVue",
        components:{
            BrandVue,
            NavItemDashboard,
            HeadingVue1,
            PageCollapseMenu,
            UtilitiesCollapseMenu,
            HeadingVue2,
            PageCollapseMenu2,
            ChartsVue,
            TablesVue,
            TogglerVue
        }
    }
</script>


<style>

</style>