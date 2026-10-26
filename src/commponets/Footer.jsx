export function Footer() {
  return (
    <footer class=" grid grid-cols-3  bg-black  pt-12 px-8 pb-8 mt-52">
      <div class="text-white">
        <p class="mb-5 font-bold">TIENDA</p>
        <div class="flex flex-col gap-2 ">
          <a href="catalogo.htm" class="hover:text-gray-400 transition-colors">
            Inicio
          </a>
          <a href="" class="hover:text-gray-400 transition-colors">
            Cartelera
          </a>
          <a href="" class="hover:text-gray-400 transition-colors">
            Medios de pago
          </a>
        </div>
      </div>

      <div class="text-white">
        <p class="mb-5 font-bold ">INFO</p>
        <div class="flex flex-col gap-2">
          <a href="" class="hover:text-gray-400 transition-colors">
            Promociones
          </a>

          <a href="" class="hover:text-gray-400 transition-colors">
            Contacto
          </a>
          <a href="" class="hover:text-gray-400 transition-colors">
            Botón de arrepentimiento
          </a>
          <a href="" class="hover:text-gray-400 transition-colors">
            Preguntas frecuentes
          </a>

          <a href="" class="hover:text-gray-400 transition-colors">
            Política de privacidad
          </a>
        </div>
      </div>

      <div class="text-white">
        <p class="mb-5 font-bold ">LEGALES</p>
        <div class="flex flex-col gap-2">
          <a href="" class="hover:text-gray-400 transition-colors">
            Libro de quejas y sugerencias
          </a>
          <a href="" class="hover:text-gray-400 transition-colors">
            Defensa del consumidor
          </a>
        </div>
      </div>

      <div class="col-span-full flex gap-4 mt-4">
        <a href="" class="hover:opacity-80 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-10 h-10 text-white"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7ZM12 6.5C8.96243 6.5 6.5 8.96243 6.5 12C6.5 15.0376 8.96243 17.5 12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96243 15.0376 6.5 12 6.5ZM12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5ZM18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z"
            />
          </svg>
        </a>
        <a href="" class="hover:opacity-80 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
            class="w-10 h-10 text-white"
          >
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.205z" />
          </svg>
        </a>
      </div>

      <div class="col-span-full text-gray-400 mt-4 pt-6 border-t border-gray-800 text-center md:text-right text-sm">
        <p>© 2026 Cinema. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
