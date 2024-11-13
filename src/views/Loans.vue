<template>
  <div class="p-6 pl-6 bg-gray-200">
    <div id="paddination-links" class="flex gap-2">
      <!-- Links Paddination -->
      <RouterLink :to="{name: 'loans'}" class="flex items-center gap-2 text-gray-500">
        Loans
        <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
        </svg>
      </RouterLink>
    </div>


    <!-- User content -->
    <div id="user-content" class="bg-white mt-4 border border-gray-300 p-8 flex flex-col gap-10">
      <h1 class="text-3xl font-semibold">Loans</h1>
      <!-- Quick Links -->
      <div class="flex justify-start gap-2">
        <RouterLink :to="{name: 'newloan'}" class="defaultQuicButton"> 
          <svg class="h-5 w-5" data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
          </svg>
          New
        </RouterLink>
        <RouterLink to="/import" class="defaultQuicButton"> 
          <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"></path>
          </svg>
          Import
        </RouterLink>
        <RouterLink to="/import" class="fadedBlueButton">
          <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
          </svg>
          Delete
        </RouterLink>
        <RouterLink :to="{name: 'auditlogs'}" class="defaultTransparentButton">
          <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
          </svg>
          Audit Logs
        </RouterLink>
        <RouterLink to="/import" class="defaultTransparentButton">
          <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path>
          </svg>
          Export to Excel
        </RouterLink>
        <RouterLink to="/import" class="fadedBlueButton">
          <svg class="h-4 w-4" data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
          </svg>
          Send Reminders via Email
        </RouterLink>
      </div>

      <!-- Add User Form -->
      <div class="border p-4 rounded-md">
        <form class="grid grid-cols-2 p-2 gap-10">
          <div class="flex flex-row gap-2 items-center justify-end">
            <label for="book" class="flex justify-end">Book</label>
            <input type="text" class="defaultInputStyle">
          </div>
          <div class="flex flex-row gap-2 items-center justify-end">
            <label for="member" class="flex justify-end">Member</label>
            <input type="text" name="member" class="defaultInputStyle">
          </div>
          <div class="flex flex-row gap-2 items-center justify-end">
            <label for="issueDate" class="flex justify-end">Issue Date</label>
            <input type="text" name="email" class="defaultInputStyle">
          </div>
          <div class="flex flex-row gap-2 items-center justify-end">
            <label for="dueDate">Due Date</label>
            <input type="text" name="name" class="defaultInputStyle">
          </div>
          <div class="flex flex-row gap-2 items-center justify-end">
            <label for="returnDate">Return Date</label>
            <input type="text" name="returndate" class="defaultInputStyle">
          </div>
          <div class="flex flex-row gap-2 items-center justify-end">
            <label for="status">Status</label>
            <select name="status" class="defaultInputStyle appearance-none">
              <option value="">Returned</option>
              <option value="">Yet to return</option>
            </select>
            <svg data-slot="icon" class="h-4 w-4 right-24 absolute top-2/2 transform -translate-y-2/2 pointer-events-none" fill="none" stroke-width="1" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
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

      <!-- TABLE -->
      <!-- TABLE -->
      <div class="border p-4 rounded-md">
        <table class="w-full table-auto border-collapse">
          <!-- Table Head -->
          <thead>
            <tr class="text-left border">
              <th class="w-5 p-4">
                <input type="checkbox" name="selectAllBooks">
              </th>
              <th class="text-gray-500 py-1 w-44">
                Book
                <svg class="h-4 w-4 inline-block" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </th>
              <th class="text-gray-500 py-1 w-44">
                Member
                <svg class="h-4 w-4 inline-block" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </th>
              <th class="text-gray-500 py-1 w-44">
                Issue Date
                <svg class="h-4 w-4 inline-block" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </th>
              <th class="text-gray-500 py-1 w-44">
                Due Date
                <svg class="h-4 w-4 inline-block" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </th>
              <th class="text-gray-500 py-1 w-44">
                Return Date
                <svg class="h-4 w-4 inline-block" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </th>
              <th class="text-gray-500 py-1 w-44">
                Status
                <svg class="h-4 w-4 inline-block" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </th>
              <th class="text-gray-500 py-1 p-1">
                Action
              </th>
            </tr>
          </thead>

          <!-- Table Body -->
          <tbody>
            <tr class="text-left border hover:bg-blue-50">
              <td class="w-5 p-4 ">
                <input type="checkbox">
              </td>
              <td class="text-gray-500 py-3 ">
                Harry Potter
              </td>
              <td class="text-gray-500 py-3 ">
                <a class="text-blue-500" href="example-member@gmail.com">member@gmail.com</a>
              </td>
              <td class="text-gray-500 py-3">
                yyyy-mm-dd 16:30
              </td>
              <td class="text-gray-500 py-3">
                yyyy-mm-dd 12:45
              </td>
              <td class="text-gray-500 py-3">
                
              </td>
              <td class="text-gray-500 py-3">
                <span class="unavailableBadge">Unavailable</span>
              </td>
              <td class="text-gray-500 py-3">
                <RouterLink class="mr-4 text-blue-400" to="/view">View</RouterLink>
                <RouterLink class="mr-4 text-orange-400" to="/edit">Edit</RouterLink>
                <RouterLink class="mr-4 text-red-400" to="/delete">Delete</RouterLink>
              </td>
            </tr>

            <!-- Row 2 -->
            <tr class="text-left border hover:bg-blue-50">
              <td class="w-5 p-4">
                <input type="checkbox">
              </td>
              <td class="text-gray-500 py-3 ">
                Conjuring
              </td>
              <td class="text-gray-500 py-3 ">
                <a class="text-blue-500" href="example-member@gmail.com">example-member@gmail.com</a>
              </td>
              <td class="text-gray-500 py-3">
                yyyy-mm-dd 20:00
              </td>
              <td class="text-gray-500 py-3">
                yyyy-mm-dd 13:46
              </td>
              <td class="text-gray-500 py-3">
                
              </td>
              <td class="text-gray-500 py-3">
                <span class="availableBadge">Available</span>
              </td>
              <td class="text-gray-500 py-3">
                <RouterLink class="mr-4 text-blue-400" to="/view">View</RouterLink>
                <RouterLink class="mr-4 text-orange-400" to="/edit">Edit</RouterLink>
                <RouterLink class="mr-4 text-red-400" to="/delete">Delete</RouterLink>
              </td>
            </tr>

            <!-- Row 3 -->
            <tr class="text-left border hover:bg-blue-50">
              <td class="w-5 p-4">
                <input type="checkbox">
              </td>
              <td class="text-gray-500 py-3 ">
                Clean Code
              </td>
              <td class="text-gray-500 py-3 ">
                <a class="text-blue-500" href="example-member@gmail.com">lorijames@gmail.com</a>
              </td>
              <td class="text-gray-500 py-3">
                yyyy-mm-dd 1:00
              </td>
              <td class="text-gray-500 py-3">
                yyyy-mm-dd 12:00
              </td>
              <td class="text-gray-500 py-3">
                
              </td>
              <td class="text-gray-500 py-3">
                <span class="availableBadge">Available</span>
              </td>
              <td class="text-gray-500 py-3">
                <RouterLink class="mr-4 text-blue-400" to="/view">View</RouterLink>
                <RouterLink class="mr-4 text-orange-400" to="/edit">Edit</RouterLink>
                <RouterLink class="mr-4 text-red-400" to="/delete">Delete</RouterLink>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- PAGGINATION -->
        <div class="flex flex-col items-end justify-end">
          <div id="loan-pag" class="inline-block">
            <RouterLink to="/" class="float-left text-gray-500 py-4 px-3">&laquo;</RouterLink>
            <RouterLink to="/page/2" class="float-left text-blue-500 py-4 px-3">1</RouterLink>
            <RouterLink to="/page/1" class="float-left text-gray-500 py-4  px-3">2</RouterLink>
            <RouterLink to="/page/3" class="float-left text-gray-500 py-4 px-3">3</RouterLink>
            <RouterLink to="/page/4" class="float-left text-gray-500 py-4 px-3">4</RouterLink>
            <RouterLink to="/page/5" class="float-left text-gray-500 py-4 px-3">5</RouterLink>
            <RouterLink to="/page/6" class="float-left text-gray-500 py-4 px-3">6</RouterLink>
            <RouterLink to="/" class="float-left text-gray-500 py-4 px-3">&raquo;</RouterLink>
          </div>

          <div class="flex flex-row gap-2 items-center justify-end">
            <span class="text-gray-500">Total: 1</span>
            <select name="status" class="pagPageOption ">
              <option value="">10/page</option>
              <option value="">20/page</option>
              <option value="">30/page</option>
              <option value="">40/page</option>
              <option value="">50/page</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>