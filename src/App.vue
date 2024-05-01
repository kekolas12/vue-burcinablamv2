<template>
  <div id="app">

  <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
          </button>
          <a href="#" class="flex ms-2 md:me-24">
            <img src="https://media.discordapp.net/attachments/963804236343308369/967442344699899954/unknown.png?ex=66330425&is=6631b2a5&hm=1a76a7e28b1d0670dccb7733d918d5d65a1eb01a3bcabdcf694e192e68c3a3f2&=&format=webp&quality=lossless" class="h-8 me-3" alt="Logo Site" />
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white" style="margin-left: 15px;">bilmemne.com</span>
          </a>
        </div>
        <div class="flex items-center">
            <div class="flex items-center ms-3">
              <div>
                <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" src="https://media.discordapp.net/attachments/963804236343308369/1235318072877912206/60010984.png?ex=6633ef1b&is=66329d9b&hm=f9706e03b52e3e12865be015a48f955afd39448ac0432f64394a0e981ec54465&=&format=webp&quality=lossless" alt="user photo">
                </button>
              </div>
              <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-gray-900 dark:text-white" role="none">
                    Mertcan mto
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                    mto@gmail.com
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  </nav>

    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
              <a @click="verilershow()" style="cursor: pointer;" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg>
                <span class="ms-3 spantextapp">Veriler</span>
              </a>
          </li>
          <li>
            <a @click="showUrunlerComponent" style="cursor: pointer;" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap spantextapp">Ürünler</span>
            </a>
          </li>
        </ul>
    </div>
  </aside>


        




    <veriLer v-show="TableComponent"/>




    <Urunler v-show="showÜrünler" />
    <TableComponent
      v-show="TableComponent"
      class="tablecomponent"
      :items="tableData"
      @edit="editItem"
      @delete="deleteItem"
    />
    <HelloWorld
      v-show="showHelloWorld"
      :selectedItem="selectedItem"
      @back="goBack"
    /> 
  </div>
</template>

<script>

import TableComponent from './components/Table-Component.vue';
import HelloWorld from './components/Hello-World.vue';
import Urunler from './components/Urun-ler.vue';
import veriLer from './components/veri-ler.vue';

export default {
  components: {
    veriLer,
    Urunler,
    TableComponent,
    HelloWorld
  },
  data() {
    return {
      tableData: [
        { id: 1, name:  'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik:"İnaktif",    kazanc: 4531,},
        { id: 2, name:  'Pideci Kardeşler',   email: 'pideadam@gmail.com'    ,   aktiflik:"Aktif",      kazanc: 4531,},
        { id: 3, name:  'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik:"İnaktif",    kazanc: 4531,},
        { id: 4, name:  'Pideci Kardeşler',   email: 'pideadam@gmail.com'    ,   aktiflik:"Aktif",      kazanc: 4531,},
        { id: 5, name:  'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik:"İnaktif",    kazanc: 4531,},
        { id: 6, name:  'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik:"Aktif",      kazanc: 4531,},
        { id: 7, name:  'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik:"İnaktif",    kazanc: 4531,},
        { id: 8, name:  'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik:"Aktif",      kazanc: 4531,},
        { id: 9, name:  'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik: "Aktif",     kazanc: 4531,},
        { id: 10, name: 'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik:"İnaktif",    kazanc: 4531,},
        { id: 11, name: 'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik: "Aktif",     kazanc: 4531,},
        { id: 12, name: 'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik:"Aktif",      kazanc: 4531,},
        { id: 13, name: 'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik: "Aktif",     kazanc: 4531,},
        { id: 14, name: 'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik:"Aktif",      kazanc: 4531,},
        { id: 15, name: 'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik: "Aktif",     kazanc: 4531,},
        { id: 16, name: 'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik:"İnaktif",    kazanc: 4531,},
        { id: 17, name: 'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik: "Aktif",     kazanc: 4531,},
        { id: 18, name: 'Mertcan Lahmacuncu', email: 'lahmacunadam@gmail.com',   aktiflik:"Aktif",      kazanc: 4531,}
      ],
      selectedItem: null,
      TableComponent: true,
      showHelloWorld: false,
      showMenüler: false,
      showÜrünler: false
    };
  },
  methods: {
    editItem(item) {
      this.selectedItem = item;
      this.showHelloWorld = true;
      this.TableComponent = false;
    },
    deleteItem(item) {
      this.tableData = this.tableData.filter(i => i.id !== item.id);
    },
    goBack() {
      this.TableComponent = true;
      this.selectedItem = null;
      this.showHelloWorld = false;
    },
    showUrunlerComponent() {
      this.showHelloWorld = false;
      this.TableComponent = false;
      this.showÜrünler = true;
      console.log("sasdafsd");
    },
    verilershow() {
      this.showÜrünler = false;
      this.TableComponent = true;
      console.log("sa12313123dasda");
    }
  }
};
</script>

<style>
#app {
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  background: rgb(241, 239, 235);
  background-size: cover;
}
.spantextapp{
  margin-left: 2vh;
}

.resim{
  position: relative;
  margin-top: 28vh;
  width: 150px;
  z-index: -1;
  left: 55vh;
}

.bilgisayar{
  position: absolute;
  width: 40vw;
  height: 160vh;
  margin-left: 150vh;
}

/* .tablecomponent{
  position: absolute;
  margin-top: 28vh;
  left: 55vh;
  font-size: 20px;
  color: #ded7d7;
  font-family: Inter;
  padding-left: 4.3vh;
  overflow-y: hidden;
}

.HelloWorld{
  position: absolute;
  overflow-y: hidden;

} */

</style>
