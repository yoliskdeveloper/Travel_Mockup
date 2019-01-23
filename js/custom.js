//initialize sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//initialize slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000
});

//initialize autocomplete
const autocomplete = document.querySelector('.autocomplete');
M.Autocomplete.init(autocomplete, {
  data: {
    "Ambon": null,
    "Bandung": null,
    "Cirebon": null,
    "Dumai": null,
    "Fak-fak": null,
    "Gorontalo": null,
    "Lhoksumawe": null,
    "Manado": null,
    "Bedugul": null,
    "Barelang": null,
    "labuhan Bajo": null,
    "Batam": null,
  }
});

// initalise gallery
const gallery = document.querySelectorAll('.materialboxed');
M.Materialbox.init(gallery, {});

// initalise scrollspy
const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {});
