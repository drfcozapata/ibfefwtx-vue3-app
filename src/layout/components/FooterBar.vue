<template>
  <footer class="w-full block bg-[#0C4A6E] text-[#F8FAFC]">
    <div class="footer">
      <div class="flex flex-col gap-7 justify-center text-[15px] footer__left">
        <RouterLink :to="{ name: 'about' }"
          ><span class="w-36 py-3 uppercase hover:text-[#fbbf24]">Nosotros</span>
        </RouterLink>
        <RouterLink :to="{ name: 'ministries' }"
          ><span class="w-36 py-3 uppercase hover:text-[#fbbf24]">Ministerios</span>
        </RouterLink>
        <RouterLink :to="{ name: 'contact' }"
          ><span class="w-36 py-3 uppercase hover:text-[#fbbf24]">Conectarme</span>
        </RouterLink>
        <RouterLink :to="{ name: 'resources' }"
          ><span class="w-36 py-3 uppercase hover:text-[#fbbf24]">Recursos</span>
        </RouterLink>
      </div>

      <div class="flex flex-col justify-center items-center mx-auto footer__mid">
        <RouterLink :to="{ name: 'home' }">
          <img class="w-32 h-32 mb-6" src="../../assets/images/ibfe-w.svg" alt="Logo I.B. Fe" />
        </RouterLink>
        <div>
          <p class="text-xs">
            <span
              >&copy; {{ new Date().getFullYear() }} Iglesia Bautista Fe &nbsp;&nbsp; | &nbsp;&nbsp;
              Developed by Doulos Dev</span
            >
          </p>
        </div>
      </div>

      <div class="flex flex-col mt-2 pl-32 gap-4 place-items-end footer__rigth">
        <div>
          <a class="hover:text-[#fbbf24]" href="https://facebook.com/ibfefwtx/" target="_blank">
            <font-awesome-icon :icon="faSqFacebook" class="w-10 h-10" />
          </a>
        </div>
        <div>
          <a class="hover:text-[#fbbf24]" href="https://instagram.com/ibfefwtx/" target="_blank">
            <font-awesome-icon :icon="faSqInstagram" class="w-10 h-10" />
          </a>
        </div>
        <div>
          <a class="hover:text-[#fbbf24]" href="https://twitter.com/ibfefwtx" target="_blank">
            <font-awesome-icon :icon="faSqTwitter" class="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

const faSqFacebook = computed(() => faSquareFacebook)
const faSqInstagram = computed(() => faSquareInstagram)
const faSqTwitter = computed(() => faSquareTwitter)
</script>

<style scoped>
.footer__left {
  grid-area: a;
}
.footer__mid {
  grid-area: b;
}
.footer__rigth {
  grid-area: c;
  align-items: end;
}
.footer {
  width: 83.33%;
  padding: 44px 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  /* justify-content: space-between;
  align-content: center; */
  grid-template-areas: 'a a b b b b b b b b c c';
}
@media screen and (max-width: 480px) {
  .footer {
    width: 96%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      'a a c c'
      'b b b b';
  }
  .footer__left {
    padding-left: 24px;
  }
  .footer__rigth {
    padding-right: 24px;
  }
  .footer__mid {
    padding-top: 44px;
  }
}
</style>
