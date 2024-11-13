<template>
  <div id="paddination-links" class="p-6 pl-6 bg-gray-200">
      <div class="flex gap-2">
          <!-- Links Paddination -->
          <RouterLink :to="{name: 'user'}" class="flex items-center gap-2 text-gray-500">
          User
          <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
          </svg>
          </RouterLink>
          <RouterLink :to="{name: 'newuser'}" class="flex items-center gap-2 text-gray-500">
          New User
          <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
          </svg>
          </RouterLink>
      </div>


    <!-- User content -->
    <div class="bg-white mt-4 border border-gray-300 p-8 flex flex-col gap-10">
      <h1 class="text-3xl font-semibold">New Loan</h1>
      
      <!-- Add User Form -->
      <div class="p-4 rounded-md">
        <form class="grid grid-cols-1 p-2 gap-6">
          <div class="flex flex-row gap-2">
            <label for="userid" class="flex items-center">Email</label>
            <input type="text" name="id" class="defaultInputActiveStyle">
          </div>
          <div class="flex flex-row gap-2 items-center">
            <label for="createdAt" class="flex justify-end">First Name</label>
            <input type="text" name="created_at" class="defaultInputActiveStyle">
          </div>
          <div class="flex flex-row gap-2 items-center">
            <label for="emailID" class="flex justify-end">Last Name</label>
            <input type="email" name="email" class="defaultInputActiveStyle">
          </div>
          <div class="flex flex-row gap-2 items-center">
            <label for="name">Phone Number</label>
            <input type="text" name="name" class="defaultInputActiveStyle">
          </div>
          <div class="flex flex-row gap-2 items-center">
            <label for="status">Status</label>
            <span class="availableBadge">In Progress</span>
          </div>
          
          
          <!--Form Button -->
          <div class="flex gap-2">
              <button class="defaultQuicButton">
                  <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path>
                  </svg>
                  Save
              </button>
            <button class="defaultTransparentButton">
              <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path>
              </svg>
              Reset
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>