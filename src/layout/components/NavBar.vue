<template>
  <div class="bg-primaryFe text-secondaryFe h-24 z-10 shadow-lg sticky top-0">
    <div class="container navbar flex justify-between items-center h-24">
      <div class="flex-1">
        <RouterLink :to="{ name: 'home' }">
          <img
            src="../../assets/images/ibfe-w.svg"
            alt="Logo Iglesia Bautista Fe"
            class="h-16 w-16"
          />
        </RouterLink>
      </div>
      <div class="flex-none uppercase text-[15px] navbar">
        <ul class="menu menu-horizontal px-1 rounded-none">
          <li tabindex="0" class="h-24 hover:bg-[#1E293B] px-8">
            <RouterLink :to="{ name: 'about' }">
              Nosotros
              <svg
                class="fill-current ml-[2px]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </RouterLink>
            <ul class="rounded-none bg-primaryFe -mx-8">
              <div class="h-20 w-52 px-8 border-t border-t-[#B9E9FF] hover:bg-[#1E293B]">
                <li class="h-20 rounded-none">
                  <a>¿Qué creemos?</a>
                </li>
              </div>
              <div class="h-20 w-52 px-8 border-t border-t-[#B9E9FF] hover:bg-[#1E293B]">
                <li class="h-20"><a>Conoce al pastor</a></li>
              </div>
            </ul>
          </li>
          <li tabindex="0" class="h-24 hover:bg-[#1E293B] px-8">
            <RouterLink :to="{ name: 'ministries' }">Ministerios</RouterLink>
          </li>
          <li tabindex="1" class="h-24 hover:bg-[#1E293B] px-8">
            <RouterLink :to="{ name: 'contact' }">
              Conectarme
              <svg
                class="fill-current ml-[2px]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </RouterLink>
            <ul class="rounded-none bg-primaryFe -mx-8">
              <div class="h-20 w-[270px] px-8 border-t border-t-[#B9E9FF] hover:bg-[#1E293B]">
                <li class="h-20 rounded-none">
                  <a>¿Qué esperar?</a>
                </li>
              </div>
              <div class="h-20 w-[270px] px-8 border-t border-t-[#B9E9FF] hover:bg-[#1E293B]">
                <li class="h-20 rounded-none">
                  <a>¿Cómo involucrarme?</a>
                </li>
              </div>
              <div class="h-20 w-[270px] px-8 border-t border-t-[#B9E9FF] hover:bg-[#1E293B]">
                <li class="h-20 rounded-none">
                  <a>¿Cómo podemos servirte?</a>
                </li>
              </div>
            </ul>
          </li>
          <li tabindex="0" class="h-24 hover:bg-[#1E293B] px-8">
            <RouterLink :to="{ name: 'resources' }">
              Recursos
              <svg
                class="fill-current ml-[2px]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </RouterLink>
            <ul class="rounded-none bg-primaryFe -mx-8">
              <div class="h-20 w-64 px-8 border-t border-t-[#B9E9FF] hover:bg-[#1E293B]">
                <li class="h-20 rounded-none">
                  <a>Calendario de eventos</a>
                </li>
              </div>
              <div class="h-20 w-64 px-8 border-t border-t-[#B9E9FF] hover:bg-[#1E293B]">
                <li class="h-20 rounded-none">
                  <a>Mensajes audio/video</a>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar ul li {
  text-align: center;
}
.navbar ul li::after {
  content: '';
  width: 0;
  height: 2px;
  position: absolute;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(251, 191, 36);
  transition: width 0.3s;
}
.navbar ul li:hover::after {
  width: 40%;
}
.navbar ul li ul li::after {
  bottom: 25px;
}
.navbar ul li ul li:hover::after {
  width: 70%;
}
</style>
