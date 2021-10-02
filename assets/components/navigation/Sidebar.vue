<template>
  <div class="h-100 position-fixed d-flex flex-column">
    <div class="bg-white" style="width: 380px;">
      <div class="d-flex align-items-center flex-shrink-0 p-3 border-bottom">
        <icon icon="clipboard" size="lg" class="brand"></icon>
        <span class="fs-5 fw-semibold">justpasteit</span>
        <icon icon="plus" size="lg" class="brand ms-auto"></icon>
      </div>
    </div>
    <div class="d-flex flex-column bg-light list-group list-group-flush border-bottom flex-fill hide-scrollbar" style="width: 380px; overflow-y: scroll">
      <a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">List group item heading</strong>
          <small>Wed</small>
        </div>
        <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">List group item heading</strong>
          <small class="text-muted">Tues</small>
        </div>
        <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>