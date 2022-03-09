<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    
    <!-- Sidebar -->
    <SidebarVue/>

    <!-- Content wrapper -->
    <div id="content-wrapper" class="d-flex flex-column" >
      <div id="content">
        <!-- Topbar -->
        <NavbarVue/>

        <ContentPage/>

      </div>

      <FooterPage/>
    </div>
  </div>
<!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal -->
  <LogoutModalVue/>

</template>



<script>
  
  import SidebarVue from './components/Sidebar/SidebarVue.vue'
  import NavbarVue from './components/Navbar/NavbarVue.vue'
  import ContentPage from './components/ContentPage.vue'
  import FooterPage from './components/FooterPage.vue'
  import LogoutModalVue from './components/LogoutModalVue.vue'

  export default {
    name: 'App',
    components: {
      SidebarVue,
      NavbarVue,
      ContentPage,
      FooterPage,
      LogoutModalVue
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
