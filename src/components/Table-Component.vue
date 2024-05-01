<template>


<div class="relative overflow-x-auto shadow-md sm:rounded-lg custom-table">
    <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div>
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                Son 30 gün
                <svg  style="margin-left: 10px;"  class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <th scope="col" class="p-4" style="position: absolute; margin-left: 120px; margin-top: -46px;">
                <div class="flex items-center text-gray-500 dark:text-gray-400">
                    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" @change="selectAllItems"><span style="margin-left: 5px;">Düzenle</span>
                </div>
            </th>
            <div id="dropdownRadio" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
                <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-1" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Dün</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-2" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Son 7 gün</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-3" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Son 30 gün</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-4" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Geçen ay</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-5" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Geçen yıl</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <label for="table-search" class="sr-only">Ara</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg style="margin-left: 290px;"  class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" style="font-family: Inter;" id="table-search" v-model="searchText" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kullanıcı Ara">
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 kategori">
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
                <th style="color: dimgray;" scope="col" class="px-6 py-3">
                    İŞLEVLER
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in filteredItems" :key="item.id" style="trlist"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.name }}
                </th>
                <td class="px-6 py-4">
                    <span v-if="item.aktiflik === 'Aktif'" class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                        <span class="w-2 h-2 me-1 bg-green-500 rounded-full aktiflikclass"></span>
                        Aktif
                    </span>
                    <span v-else class="inline-flex items-center bg-red-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                        <span  class="w-2 h-2 me-1 bg-red-500 rounded-full aktiflikclass"></span>
                        İnaktif
                    </span>
                </td>
                <td class="px-6 py-4">
                    {{ item.email }}
                </td>
                <td class="px-6 py-4">
                    €{{ item.kazanc }}
                </td>   
                <td class="px-6 py-4">
                    <button v-if="selectedItems.includes(item.id)" @click="editItem(item)" class="bg-gray-200 hover:bg-green-300 text-gray-700 font-semibold py-1 px-2 rounded focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.172 5.828a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-.707.293H4a1 1 0 0 1-1-1v-1.586a1 1 0 0 1 .293-.707l8-8z" clip-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M14 3a1 1 0 0 1 1 1v1.586a1 1 0 0 1-.293.707l-8 8a1 1 0 0 1-.707.293H4a1 1 0 0 1-1-1v-1.586a1 1 0 0 1 .293-.707l8-8A1 1 0 0 1 14 3zm1-2a3 3 0 0 1 3 3v1.586a3 3 0 0 1-.879 2.121l-8 8A3 3 0 0 1 8.586 15H7v-1.586a1 1 0 0 1 .293-.707l8-8A1 1 0 0 1 15 2z" clip-rule="evenodd"/>
                        </svg>
                    </button>
                    <button v-if="selectedItems.includes(item.id)" @click="deleteItem(item)" class="bg-gray-200 hover:bg-red-300 text-gray-700 font-semibold py-1 px-2 rounded focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2zM3 8v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h1zM9 9a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V10a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V10a1 1 0 0 0-1-1z"/>
                        </svg>
                    </button>                
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedItems: [], 
            searchText: ''
            
        };
        
    },
    computed: {
        
        filteredItems() {
            const searchText = this.searchText.toLowerCase();
            console.log(searchText);
            return this.items.filter(item => item.name.toLowerCase().includes(searchText));
        }
    },
    methods: {
        editItem(item) {
            this.$emit('edit', item);
        },
        deleteItem(item) {
            this.$emit('delete', item);
        },
        selectAllItems(event) {
        
            const isChecked = event.target.checked;
            if (isChecked) {
                // Tüm öğeleri seç
                this.selectedItems = this.items.map(item => item.id);
            } else {
                // Tüm seçimleri kaldır
                this.selectedItems = [];
            }
        },
        selectItem(itemId) {
            if (this.selectedItems.includes(itemId)) {
                this.selectedItems = this.selectedItems.filter(id => id !== itemId);
            } else {
                this.selectedItems.push(itemId);
            }
        },
        applyActions() {
            if (this.selectedItems.length > 1) {
                alert("Lütfen sadece bir öğe seçin.");
                return;
            }
            const selectedItem = this.items.find(item => item.id === this.selectedItems[0]);
            this.editItem(selectedItem);
            this.deleteItem(selectedItem);
        }
    }
};
</script>

<style>
.custom-table {
    max-width: 85.7vw;
    max-height: 42vw; 
    margin-left: 29vh;
    margin-top: 260px;
    width: 86.6vw;

}
.aktiflikclass{
    margin-right: 8px;
}

.üstbilgiler{
    position: absolute;
    margin-top: -30vh;
}
.kategori td{
    color:black;
}
</style>