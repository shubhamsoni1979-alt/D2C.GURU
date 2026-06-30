<template>
  <UContainer>
    <div class="min-h-[70vh] flex flex-col items-center justify-center px-4 py-6">
      <div class="w-full max-w-md">
        <!-- Logos -->
        <div class="flex flex-col items-center mb-4">
          <NuxtImg
            src="/images/D2CGuru_Logo_Black.svg"
            alt="D2C Guru Logo"
            class="h-10 w-auto mb-2 dark:hidden"
          />
          <NuxtImg
            src="/images/D2CGuru_Logo_White.svg"
            alt="D2C Guru Logo"
            class="h-10 w-auto mb-2 hidden dark:block"
          />
        </div>

        <!-- Form Card -->
        <div
          class="w-full bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl p-6 sm:p-10 border border-gray-200 dark:border-gray-800"
        >
          <h1
            class="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white tracking-tight"
          >
            Submit Brand Details
          </h1>

          <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
            <UFormField label="Website/Instagram/Reel/Post/Profile Url" name="brand-url" required>
              <UInput
                v-model="state.brandurl"
                type="text"
                placeholder="https://..."
                class="w-full"
                size="lg"
              />
            </UFormField>

            <UButton type="submit" block size="lg" class="font-bold shadow-md">
              Submit Brand
            </UButton>
          </UForm>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
  const state = reactive({
    brandurl: ''
  })

  async function onSubmit() {
    const { createItems } = useDirectusItems()
    try {
      const res = await createItems({
        collection: 'brand_extraction_log',
        items: {
          input_url: state.brandurl
        }
      })
      state.brandurl = ''
      return res
    } catch (error) {
      console.error('Failed to submit brand details', error)
    }
  }
</script>
