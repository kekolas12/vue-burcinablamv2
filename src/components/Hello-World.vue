<template>
  <div>
    <h1 class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" style="margin-top: 6vh; margin-left: 27vh;  width: 86.6vw;" @click="goBack">GERİ DÖN</h1>
    <div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 customtable">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th style="color: dimgray;" cope="col" class="px-6 py-3">
            KULLANICI ADI
          </th>
          <th style="color: dimgray;" scope="col" class="px-6 py-3">
            AKTIFLIK
          </th>
          <th style="color: dimgray;" scope="col" class="px-6 py-3">
            E-POSTASI
          </th>
          <th style="color: dimgray;" scope="col" class="px-6 py-3">
            KAZANÇ
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="selectedItem" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ selectedItem.name }}
          </th>
          <td class="px-6 py-4">
            <span v-if="selectedItem.aktiflik === 'Aktif'" class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              <span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
              Aktif
            </span>
            <span v-else class="inline-flex items-center bg-red-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              <span class="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
              İnaktif
            </span>
          </td>
          <td class="px-6 py-4">
            {{ selectedItem.email }}
          </td>
          <td class="px-6 py-4">
            {{ selectedItem.kazanc }}€
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['selectedItem'],
  methods: {
    goBack() {
      this.$emit('back');
    },
    inspectItem(item) {
      console.log('Inspecting item:', item);
    },
    deleteItem(item) {
      console.log('Deleting item:', item);
    }
  }
};
</script>

<style >

.customtable{
  color:rgb(0, 0, 0);
  font-family: Inter;
  width: 86.6vw;
  margin-left: 27vh;
}
</style>