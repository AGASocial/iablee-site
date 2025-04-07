---
layout: default
title: Ideas
permalink: /ideas/
---

<div class="container mx-auto px-4 py-24 bg-white py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-5xl mx-auto">
      
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ideas</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Explore our latest thoughts, innovations, and creative solutions in technology and business.</p>
      </div>
      
      <div class="prose prose-blue max-w-none">
        <!-- Ideas Content Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {% assign sorted_ideas = site.ideas | sort: 'order' %}
          {% for idea in sorted_ideas %}
          <!-- Project Card -->
          <a href="{{ idea.url }}" class="block bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <img src="{{ idea.image }}" alt="{{ idea.title }}" class="w-full h-48 object-cover">
              <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-xl font-semibold text-gray-900">{{ idea.title }}</h3>
                  <span class="px-2 py-1 text-sm rounded-full {% if idea.status == 'launched' %}bg-green-100 text-green-800{% elsif idea.status == 'development' %}bg-blue-100 text-blue-800{% else %}bg-gray-100 text-gray-800{% endif %}">
                    {{ idea.status | capitalize }}
                  </span>
                </div>
                <p class="text-gray-600 mb-4">{{ idea.description }}</p>
                <div class="flex flex-wrap gap-2">
                  {% for tech in idea.tech_stack %}
                  <span class="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">{{ tech }}</span>
                  {% endfor %}
                </div>
              </div>
            </div>
          </a>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</div>
