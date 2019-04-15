<template>
  <!-- Begin Header -->
  <header>
    <!-- Begin Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="row">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand scroll-link" href="#home" data-id="home">
              <span class="icon-handle-streamline-vector logo"></span>
            </a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div
            class="navbar-collapse collapse"
            id="bs-example-navbar-collapse-1"
            aria-expanded="false"
            style="height: 0.8px;"
          >
            <ul class="nav navbar-nav navbar-right">
              <li class="active">
                <a href="#home" data-id="home" class="scroll-link">Home</a>
              </li>
              <li class>
                <a href="#ideology" data-id="ideology" class="scroll-link">Ideology</a>
              </li>
              <li class>
                <a href="#about" data-id="about" class="scroll-link">About</a>
              </li>
              <li class>
                <a href="#services" data-id="services" class="scroll-link">Services</a>
              </li>
              <li class>
                <a href="#work" data-id="work" class="scroll-link">Work</a>
              </li>
              <li class>
                <a href="#team" data-id="team" class="scroll-link">Team</a>
              </li>
              <li class>
                <a href="#contact" data-id="contact" class="scroll-link">Contact</a>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
      </div>
      <!-- /.container-fluid -->
    </nav>
    <!-- End Navigation -->
  </header>
  <!-- End Header -->
</template>

<script>
export default {
  name: "CHeader",
  components: {},
  mounted: () => {
    /* eslint-disable */
    /* ---- close mobile nav on click ---- */
    $(document).on("click", ".navbar-collapse.in", function(e) {
      if (
        $(e.target).is("a") &&
        $(e.target).attr("class") != "dropdown-toggle"
      ) {
        $(this).collapse("hide");
      }
    });
  }
};
</script>

