<template>
  <UContainer>
    <!-- {{ categories }} -->
    <div class="flex justify-between items-center">
      <h2 class="text-4xl font-bold my-4">Popular Category</h2>
      <UButton label="View All" to="/category" variant="soft" />
    </div>

    <div
      class="grid grid-cols-2 gap-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 mb-10"
      v-if="categories"
    >
      <CategoryCard
        v-for="category in categories"
        :data="category"
        class="hover:scale-105 transition-all duration-300 ease-in-out"
      />
    </div>
    <div v-else>
      <p>No categories found</p>
    </div>
  </UContainer>
</template>

<script setup>
  const { getItems } = useDirectusItems()

  const { data: categories } = useAsyncData('categories', () => {
    return getItems({
      collection: 'categories',
      params: {
        fields: ['icon', 'name', 'color._50', 'color._200', 'slug'],
        limit: 6
      }
    })
  })
</script>
