---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "*.geo.admin.ch"
  text: "Technical Documentation"
  # tagline: My great project tagline
  image:
    src: https://map.geo.admin.ch/icon.svg
    alt: Geoportal
  actions:
    - theme: alt
      text: api3.geo.admin.ch
      link: /api3/overview.md
    - theme: alt
      text: data.geo.admin.ch
      link: /datageoadminch/overview.md
    - theme: alt
      text: CMS
      link: /cms/overview.md
    - theme: alt
      text: JS API
      link: /jsgeoadminch/overview.md

# - theme: alt
#   text: API Examples
#   link: /api-examples

features:
  - title: OpenAPI Specs
    details: Find OpenAPI specs for most APIs and services
    icon:
      src: /static/openapi-1.svg
  - title: Tutorials
    details: Find detailed tutorials about how to get certain things done
    icon:
      src: /static/tutorial.png
  - title: Code Snippets
    details: Copy code snippets for common use cases
    icon:
      src: /static/code.webp
---
