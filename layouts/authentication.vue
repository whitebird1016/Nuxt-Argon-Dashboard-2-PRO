<template>
  <div>
    <div class="container top-0 position-sticky z-index-sticky">
      <div class="row">
        <div class="col-12">
          <slot name="navbar" />
        </div>
      </div>
    </div>
    <main class="main-content mt-0">
      <slot />
    </main>
    <slot name="footer" />
  </div>
</template>
