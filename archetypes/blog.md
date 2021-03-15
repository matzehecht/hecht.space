---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
slug: ""
description: ""
keywords: []
draft: true
tags: []
math: false
toc: true

menu:
  main:
    name: "{{ replace .TranslationBaseName "-" " " | title }}"
    title: "{{ replace .TranslationBaseName "-" " " | title }}"
    parent: "blog"
    
tags:
  - blog

# theme specific
# cover: # theme
#   image: "<image path/url>"
#   # can also paste direct link from external site
#   # ex. https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png
#   alt: "<alt text>"
#   caption: "<text>"
#   relative: false # To use relative path for cover image, used in hugo Page-bundles
#   banner: false
ShowToc: true
TocOpen: true
---