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
      <RouterLink :to="{name: 'auditlogs'}" class="flex items-center gap-2 text-gray-500">
        Audit Logs
        <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
        </svg>
      </RouterLink>
    </div>
   
    <!-- User content -->
    <div class="bg-white mt-4 border border-gray-300 p-8 flex flex-col gap-10">
      <h1 class="text-3xl font-semibold">Audit Logs</h1>
      <!-- Quick Links -->
      <div class="flex justify-start gap-2">
        <RouterLink to="/import" class="defaultTransparentButton">
          <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path>
          </svg>
          Export to Excel
        </RouterLink>
      </div>

      <!-- Add User Form -->
      <div class="border p-4 rounded-md">
        <form action="" class="grid grid-cols-2 p-2 gap-10">
          <div class="flex flex-row gap-2 items-center justify-end">
            <label for="userid" class="flex justify-end">Periods</label>
            <input type="text" name="id" class="defaultInputStyle">
          </div>
          <div class="flex flex-row gap-2 items-center justify-end">
            <label for="createdAt" class="flex justify-end">Entities</label>
            <select name="entities" class="defaultInputStyle appearance-none">
              <option value="">Entity...Lorem</option>
              <option value="">Entity...Lorem</option>
            </select>
            <svg data-slot="icon" class="h-4 w-4 right-24 absolute top-2/2 transform -translate-y-2/2 pointer-events-none" fill="none" stroke-width="1" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
          </div>
          <div class="flex flex-row gap-2 items-center justify-end">
            <label for="emailID" class="flex justify-end">User Email</label>
            <input type="email" name="email" class="defaultInputStyle">
          </div>
          <div class="flex flex-row gap-2 items-center justify-end">
            <label for="name">Entity ID</label>
            <input type="text" name="name" class="defaultInputStyle">
          </div>
          <div class="flex flex-row gap-2 items-center justify-end">
            <label for="status">Action</label>
            <input type="text" name="status" class="defaultInputStyle">
          </div>
          
          
          <!--Form Button -->
          <div class="col-span-2 flex justify-end gap-2">
            <button class="defaultQuicButton">
              <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
              </svg>
              Search
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