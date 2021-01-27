---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
math: false
toc: false

menu:
  main:
    name: "{{ replace .TranslationBaseName "-" " " | title }}"
    title: "{{ replace .TranslationBaseName "-" " " | title }}"
    parent: "projects"
    
tags:
  - projects

# theme specific
# cover: # theme
#   image: "<image path/url>"
#   # can also paste direct link from external site
#   # ex. https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png
#   alt: "<alt text>"
#   caption: "<text>"
#   relative: false # To use relative path for cover image, used in hugo Page-bundles
ShowToc: true
TocOpen: true
---
