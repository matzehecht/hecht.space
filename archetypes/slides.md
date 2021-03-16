---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
slug: ""
description: ""
keywords: []
draft: true

type: slides
    
tags:
  - slides

slideOptions:
  theme: white
  presentationOptions:
    # data-background-image: background.jpg
    # data-background-opacity: 0.5
    data-separator: ^---
    data-separator-vertical: ^--
    data-separator-notes: "^Notes?:"
    data-charset: iso-8859-15
  revealOptions:
    - key: controls
      value: true
    - key: progress
      value: true
    - key: slideNumber
      value: true
    - key: history
      value: true
    - key: keyboard
      value: true
    - key: center
      value: true

---