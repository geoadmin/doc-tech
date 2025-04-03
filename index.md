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
      text: Data Download
      link: /datageoadminch/overview.md
    - theme: alt
      text: api3.geo.admin.ch
      link: /api3geoadminch/sdiservices.md
    - theme: alt
      text: Visualization Services
      link: /visualization/overview.md


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

