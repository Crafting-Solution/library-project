<template>
  <div id="paddination-links" class="p-6 pl-6 bg-gray-200">
    <div class="flex gap-2">
      <!-- Links Paddination -->
      <RouterLink :to="{name: 'loans'}" class="flex items-center gap-2 text-gray-500">
        Loans
        <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
        </svg>
      </RouterLink>
      <RouterLink :to="{name: 'settings'}" class="flex items-center gap-2 text-gray-500">
        Settings
        <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
        </svg>
      </RouterLink>
    </div>


    <!-- Settings content -->
    <div class="bg-white mt-4 border border-gray-300 p-8 flex flex-col gap-10">
      <h1 class="text-3xl font-semibold">Settings</h1>
      <!-- Quick Links -->
      <div class="flex justify-start gap-2">
        <RouterLink :to="{name: 'auditlogs'}" class="defaultTransparentButton">
          <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
          </svg>
          Audit Logs
        </RouterLink>
      </div>

      <!-- Settings form -->
      <div class="border p-4 rounded-md">
        <form class="flex flex-col p-2 gap-10">
          <div class="flex flex-row gap-3 items-center ">
            <label for="loanPeriod" class="flex justify-end gap-1"><span class="text-red-700">*</span> Loan Period in Day(s)</label>
            <input type="text" class="defaultInputStyle">
          </div>
          <div class="flex flex-row gap-3 items-center">
            <label for="settings" class="flex justify-end gap-1"><span class="text-red-700">*</span> Theme</label>
            <select name="settings" class="defaultInputStyle appearance-none">
              <option value="">Default</option>
              <option value="">Dark</option>
              <option value="">Purple</option>
              <option value="">Green</option>
            </select>
            <svg data-slot="icon" class="h-4 w-4 left-1/2 absolute  top-1/1 pointer-events-none" fill="none" stroke-width="1" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
          </div>
          
          <!--Form Button -->
          <div class="col-span-2 flex gap-2">
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