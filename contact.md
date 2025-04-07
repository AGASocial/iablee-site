---
layout: page
title: Contacto
permalink: /contact/
---

<div class="max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold text-gray-900 mb-6">Contacto</h1>
  
  <div class="grid md:grid-cols-2 gap-12">
    <div>
      <p class="text-lg text-gray-600 mb-6">¿Tienes preguntas o comentarios? Estamos aquí para ayudarte. Complete el formulario y te responderemos lo antes posible.</p>
      
      <form action="#" method="POST" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
          <input type="text" name="name" id="name" required 
                 class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2">
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" name="email" id="email" required 
                 class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2">
        </div>
        
        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
          <select name="subject" id="subject" 
                  class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2">
            <option value="general">Consulta general</option>
            <option value="support">Soporte técnico</option>
            <option value="billing">Facturación</option>
            <option value="partnership">Asociaciones</option>
            <option value="other">Otro</option>
          </select>
        </div>
        
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
          <textarea name="message" id="message" rows="6" required 
                    class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"></textarea>
        </div>
        
        <div>
          <button type="submit" 
                  class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
    
    <div>
      <div class="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Información de contacto</h2>
        
        <div class="space-y-4">
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-1">
              <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-gray-900 font-medium">Email</p>
              <p class="text-blue-600">info@iablee.com</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-1">
              <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-gray-900 font-medium">Teléfono</p>
              <p class="text-blue-600">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-1">
              <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-gray-900 font-medium">Dirección</p>
              <p class="text-gray-600">123 Calle Principal</p>
              <p class="text-gray-600">Ciudad Ejemplo, 12345</p>
              <p class="text-gray-600">País</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-bold text-blue-600 mb-4">Horario de atención</h2>
        
        <div class="space-y-2">
          <p class="flex justify-between">
            <span class="text-gray-600">Lunes - Viernes:</span>
            <span class="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
          </p>
          <p class="flex justify-between">
            <span class="text-gray-600">Sábado:</span>
            <span class="text-gray-900 font-medium">10:00 AM - 2:00 PM</span>
          </p>
          <p class="flex justify-between">
            <span class="text-gray-600">Domingo:</span>
            <span class="text-gray-900 font-medium">Cerrado</span>
          </p>
        </div>
        
        <div class="mt-6 pt-6 border-t border-blue-100">
          <p class="text-gray-700">El soporte por correo electrónico está disponible 24/7. Los tiempos de respuesta pueden variar fuera del horario de oficina.</p>
        </div>
      </div>
    </div>
  </div>
</div>